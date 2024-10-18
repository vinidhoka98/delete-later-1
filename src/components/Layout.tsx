/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 */

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import DevTools from "./DevTools";
import { connect } from "react-redux";
import {
  HeaderProps,
  FooterProps,
  PageProps,
  Posts,
} from "../typescript/layout";
import { Banner, Component } from "../typescript/component";

typeof window !== "undefined" &&
  require("bootstrap/dist/css/bootstrap.min.css");
typeof window !== "undefined" && require("bootstrap/dist/js/bootstrap");
require("../styles/style.css");
require("@contentstack/live-preview-utils/dist/main.css");

type JsonContent = {
  header: {};
  footer: {};
  page?: {};
  banner?: {};
  blog_post?: {};
};

const mapStateToProps = ({
  header,
  footer,
  page,
  blog_post,
}: {
  header: HeaderProps;
  footer: FooterProps;
  page: PageProps;
  blog_post: Posts;
}) => {
  return { header, footer, page, blog_post };
};

const Layout = ({
  header,
  footer,
  children,
  pageComponent,
  blogPost,
  banner,
}: {
  header: HeaderProps;
  footer: FooterProps;
  children: any;
  pageComponent?: Component;
  blogPost?: Posts | [Posts];
  banner?: Banner;
}) => {
  const json: JsonContent = { header, footer };
  pageComponent && (json.page = pageComponent);
  banner && (json.banner = banner);
  blogPost && (json.blog_post = blogPost);

  return (
    <>
      <Header />
      <DevTools response={json} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default connect(mapStateToProps)(Layout);
