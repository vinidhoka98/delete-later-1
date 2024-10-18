import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import SEO from "../components/SEO";
import Layout from "../components/Layout";
import { getCSData } from "../live-preview-sdk";
import { addEditableTags, isLiveEditTagsEnabled } from "../helper";
import RenderComponents from "../components/RenderComponents";
import { PageProps } from "../typescript/template";
import ContentstackLivePreview from "@contentstack/live-preview-utils";
import { ContentstackGatsby } from "gatsby-source-contentstack/live-preview"

const Page = ({ data: { contentstackPage } }: PageProps) => {
  // if auto-conversion is not enabled, convert json to hetml using helper function
  ContentstackGatsby.addContentTypeUidFromTypename(contentstackPage)
  isLiveEditTagsEnabled && addEditableTags(contentstackPage, "page")
  const [getEntry, setEntry] = useState(contentstackPage);

  const fetchLivePreviewData = async () => {
    // pass initial entry data to ContentstackGatsby.get()  
    const updatedData = await getCSData.get(contentstackPage);
    isLiveEditTagsEnabled && addEditableTags(updatedData, "page")
    setEntry(updatedData)
  }

  useEffect(() => {
    const callbackId = ContentstackLivePreview.onLiveEdit(fetchLivePreviewData);
    return () => ContentstackLivePreview.unsubscribeOnEntryChange(callbackId);
  }, [])

  return (
    <Layout pageComponent={getEntry}>
      <SEO title={getEntry.title} />
      <div className="about">
        {getEntry.page_components && (
          <RenderComponents
            components={getEntry.page_components}
            contentTypeUid="page"
            entryUid={getEntry.uid}
            locale={getEntry.locale}
          />
        )}
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query ($url: String!) {
    contentstackPage(url: { eq: $url }) {
      __typename
      uid
      title
      url
      seo {
        meta_title
        meta_description
        keywords
        enable_search_indexing
      }
      locale
      page_components {
        contact_details {
          address
          email
          phone
        }
        from_blog {
          title_h2

          featured_blogs {
            uid
            __typename
            title
            url
            featured_image {
              url
              uid
            }
            author {
              title
              uid
            }
            body
            date
          }
          view_articles {
            title
            href
          }
        }

        hero_banner {
          banner_description
          banner_title
          banner_image {
            uid
            url
          }
          bg_color
          text_color
          call_to_action {
            title
            href
          }
        }
        our_team {
          title_h2
          description
          employees {
            name
            designation
            image {
              uid
              title
              url
            }
          }
        }
        section {
          title_h2
          description
          image_alignment
          image {
            uid
            title
            url
          }
          call_to_action {
            title
            href
          }
        }
        section_with_buckets {
          title_h2
          description
          bucket_tabular
          buckets {
            title_h3
            description
            icon {
              uid
              title
              url
            }
            call_to_action {
              title
              href
            }
          }
        }
        section_with_cards {
          cards {
            title_h3
            description
            call_to_action {
              title
              href
            }
          }
        }
        section_with_html_code {
          title
          html_code_alignment
          html_code
          description
        }
        widget {
          type
          title_h2
        }
      }
    }
  }
`;

export default Page;
