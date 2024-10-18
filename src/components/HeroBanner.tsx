import { Link } from "gatsby";
import React from "react";
import { Banner } from "../typescript/component";

type Data = {
  hero_banner: Banner;
};

type BannerProps = {
  data: Data;
};

const HeroBanner = (props: BannerProps) => {
  const { hero_banner } = props.data;
  return (
    <div
      className="hero-banner"
      style={{
        background: hero_banner.bg_color ? hero_banner.bg_color : "",
      }}
    >
      <div className="home-content" style={{ color: hero_banner.text_color }}>
        {hero_banner.banner_title && (
          <h1 className="hero-title" {...hero_banner.$?.banner_title}>
            {hero_banner.banner_title}
          </h1>
        )}
        {hero_banner.banner_description ? (
          <p
            className="hero-description"
            style={{ color: hero_banner.text_color }}
            {...hero_banner.$?.banner_description}
          >
            {hero_banner.banner_description}
          </p>
        ) : (
          ""
        )}
        {hero_banner.call_to_action.title && hero_banner.call_to_action.href ? (
          <Link
            to={hero_banner.call_to_action.href}
            className="btn tertiary-btn"
            {...hero_banner.call_to_action.$?.title}
          >
            {hero_banner.call_to_action.title}
          </Link>
        ) : (
          ""
        )}
      </div>
      {hero_banner.banner_image ? (
        <img
          alt="hero-banner-image"
          {...hero_banner.banner_image.$?.url}
          src={hero_banner.banner_image.url}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default HeroBanner;
