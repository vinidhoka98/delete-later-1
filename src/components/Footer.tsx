import { Link, useStaticQuery, graphql } from "gatsby";
import React, { useState, useEffect } from "react";
import parser from "html-react-parser";
import { connect } from "react-redux";
import { actionFooter } from "../store/actions/state.action";
import { getCSData } from "../live-preview-sdk/index";
import { addEditableTags, isLiveEditTagsEnabled } from "../helper/index";
import {
  DispatchData,
  Social,
  Menu,
} from "../typescript/layout";
import { FooterModel } from "../common/types";
import ContentstackLivePreview from "@contentstack/live-preview-utils";
import { ContentstackGatsby } from "gatsby-source-contentstack/live-preview";

const queryLayout = () => {
  const data = useStaticQuery(graphql`
    query {
      contentstackFooter {
        __typename
        title
        uid
        logo {
          url
        }
        navigation {
          link {
            href
            title
          }
        }
        social {
          social_share {
            link {
              href
              title
            }
            icon {
              url
            }
          }
        }
        copyright
      }
    }
  `);
  return data;
};

const Footer = ({ dispatch }: DispatchData) => {
  const { contentstackFooter } = queryLayout();
  ContentstackGatsby.addContentTypeUidFromTypename(contentstackFooter)
  isLiveEditTagsEnabled && addEditableTags(contentstackFooter, "footer")
  const [getFooter, setFooter] = useState(contentstackFooter);

  async function getFooterData() {
    const footerRes: FooterModel = await getCSData.get(contentstackFooter);
    isLiveEditTagsEnabled && addEditableTags(footerRes, "footer")
    setFooter(footerRes);
  }

  useEffect(() => {
    const callbackId = ContentstackLivePreview.onLiveEdit(getFooterData);
    return () => ContentstackLivePreview.unsubscribeOnEntryChange(callbackId);
  }, [])

  useEffect(() => {
    dispatch(actionFooter(getFooter));
  }, [getFooter])

  return (
    <footer>
      <div className="max-width footer-div">
        <div className="col-quarter">
          <Link to="/" className="logo-tag">
            <img
              {...getFooter.logo.$?.url}
              src={getFooter.logo?.url}
              alt={getFooter.title}
              title={getFooter.title}
              className="logo footer-logo"
            />
          </Link>
        </div>
        <div className="col-half">
          <nav>
            <ul className="nav-ul">
              {getFooter.navigation.link.map((menu: Menu, index: number) => {
                return (
                  <li className="footer-nav-li" key={index} {...menu.$?.title}>
                    <Link to={menu.href}>{menu.title}</Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <div className="col-quarter social-link">
          <div className="social-nav">
            {getFooter.social.social_share.map(
              (social: Social, index: number) => {
                return (
                  <a
                    href={social.link?.href}
                    title={social.link.title.toLowerCase()}
                    key={index}
                    className="footer-social-links"
                  >
                    <img
                      {...social.icon.$?.url}
                      src={social.icon?.url}
                      alt="social-icon"
                    />
                  </a>
                );
              }
            )}
          </div>
        </div>
      </div>
      <div className="copyright">
        {typeof getFooter.copyright === "string" ? (
          <div {...getFooter.$?.copyright}>{parser(getFooter?.copyright)}</div>
        ) : (
          ""
        )}
      </div>
    </footer>
  );
};

export default connect()(Footer);
