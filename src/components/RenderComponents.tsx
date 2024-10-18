import React from "react";

import HeroBanner from "./HeroBanner";
import BlogBanner from "./BlogBanner";
import Section from "./Section";
import BlogSection from "./BlogSection";
import CardSection from "./CardSection";
import TeamSection from "./TeamSection";
import SectionBucket from "./SectionBucket";
import AboutSectionBucket from "./AboutSectionBucket";
import SectionWithEmbedObject from "./SectionWithEmbedObject";
import { Component } from "../typescript/component";

const RenderComponents = ({
  components,
  entryUid,
  contentTypeUid,
  blogPage,
  locale,
}: {
  components: Component[];
  entryUid: string;
  contentTypeUid: string;
  blogPage?: boolean;
  locale: string;
}) => {
  return (
    <div
      data-pageref={entryUid}
      data-contenttype={contentTypeUid}
      data-locale={locale}
    >
      {components?.map((component, index) => {
        if (component["hero_banner"]) {
          return !blogPage ? (
            <HeroBanner data={component} key={"render" + index} />
          ) : (
            <BlogBanner data={component} key={"render" + index} />
          );
        }
        if (component["section"]) {
          return <Section data={component} key={"render" + index} />;
        }
        if (component["section_with_buckets"]) {
          return component.section_with_buckets.bucket_tabular ? (
            <AboutSectionBucket data={component} key={"render" + index} />
          ) : (
            <SectionBucket data={component} key={"render" + index} />
          );
        }
        if (component["from_blog"]) {
          return <BlogSection data={component} key={"render" + index} />;
        }
        if (component["section_with_cards"]) {
          return <CardSection data={component} key={"render" + index} />;
        }
        if (component["section_with_html_code"]) {
          return (
            <SectionWithEmbedObject data={component} key={"render" + index} />
          );
        }
        if (component["our_team"]) {
          return <TeamSection data={component} key={"render" + index} />;
        }
      })}
    </div>
  );
};
export default RenderComponents;
