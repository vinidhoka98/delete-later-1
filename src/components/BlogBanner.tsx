import React from "react";
import { Banner } from "../typescript/component";

type Data = {
  hero_banner: Banner;
};

type BannerProps = {
  data: Data;
};

const BlogBanner = (props: BannerProps) => {
  const banner = props.data.hero_banner;
  return (
    <>
      <div
        className="blog-page-banner"
        style={{ background: `${banner?.bg_color}` }}
      >
        <div className="blog-page-content">
          {banner.banner_title ? (
            <h1 className="hero-title" {...banner.$?.banner_title}>
              {banner.banner_title}
            </h1>
          ) : (
            ""
          )}

          {banner.banner_description ? (
            <p className="hero-description" {...banner.$?.banner_description}>
              {banner.banner_description}
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default BlogBanner;
