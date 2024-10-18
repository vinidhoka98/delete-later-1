import React from "react";
import moment from "moment";
import parse from "html-react-parser";
import { Link } from "gatsby";
import { Image } from "../typescript/action";

type AdditionalParam = {
  title: string;
  date: string;
  body: string;
};

type Author = {
  title: string;
  $: AdditionalParam;
};

type BlogList = {
  body: string;
  url: string;
  featured_image: Image;
  title: string;
  date: string;
  author: [Author];
  $: AdditionalParam;
};

type BloglistProps = {
  blogList: BlogList;
};

function BlogList({ blogList }: BloglistProps) {
  let body: string = blogList.body && blogList.body.substr(0, 300);
  const stringLength = body.lastIndexOf(" ");
  body = `${body.substr(0, Math.min(body.length, stringLength))}...`;
  return (
    <div className="blog-list">
      {blogList.featured_image && (
        <Link to={blogList.url}>
          <img
            className="blog-list-img"
            src={blogList.featured_image.url}
            alt="blog img"
            {...blogList.featured_image.$?.url}
          />
        </Link>
      )}
      <div className="blog-content">
        {blogList.title && (
          <Link to={blogList.url}>
            <h3 {...blogList.$?.title}>{blogList.title}</h3>
          </Link>
        )}
        <p>
          <strong {...blogList.$?.date}>
            {moment(blogList.date).format("ddd, MMM D YYYY")}
          </strong>
          ,{" "}
          <strong {...blogList.author[0]?.$?.title}>
            {blogList.author[0]?.title}
          </strong>
        </p>
        <div {...blogList.$?.body}>{parse(body)}</div>
        {blogList.url ? (
          <Link to={blogList.url}>
            <span>{"Read more -->"}</span>
          </Link>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default BlogList;
