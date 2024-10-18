import { Link } from "gatsby";
import React from "react";
import parser from "html-react-parser";
import { FeaturedBlogData } from "../typescript/component";

type Data = {
  from_blog: FeaturedBlogData;
};

type FeaturedBlogProps = {
  data: Data;
};

const BlogSection = ({ data: { from_blog } }: FeaturedBlogProps) => {
  return (
    <div className="community-section">
      <div className="community-head">
        {from_blog.title_h2 ? (
          <h2 {...from_blog.$?.title_h2}>{from_blog.title_h2}</h2>
        ) : (
          ""
        )}
        {from_blog.view_articles ? (
          <a
            href={from_blog.view_articles.href}
            className="btn secondary-btn article-btn"
            {...from_blog.view_articles.$?.title}
          >
            {from_blog.view_articles.title}
          </a>
        ) : (
          ""
        )}
      </div>
      <div className="home-featured-blogs">
        {from_blog.featured_blogs.map((blog, index) => {
          return (
            <div className="featured-blog" key={index}>
              {blog.featured_image ? (
                <img
                  {...blog.featured_image.$?.url}
                  src={blog.featured_image.url}
                  alt={blog.featured_image.title}
                  className="blog-post-img"
                />
              ) : (
                ""
              )}
              <div className="featured-content">
                {blog.title ? <h3 {...blog.$?.title}>{blog.title}</h3> : ""}
                {typeof blog.body === "string" && (
                  <div {...blog.$?.body}>
                    {" "}
                    {parser(blog.body.slice(0, 300))}
                  </div>
                )}
                <Link className="blogpost-readmore" to={blog.url}>
                  {"Read More -->"}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogSection;
