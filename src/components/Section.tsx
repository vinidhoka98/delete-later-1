import { Link } from "gatsby";
import React from "react";
import { SectionProps } from "../typescript/component";

type Data = {
  section: SectionProps;
};

type DataSection = {
  section: SectionProps;
};

type DataImg = {
  section: SectionProps;
};

type BucketProps = {
  data: Data;
};

const Section = ({ data }: BucketProps) => {
  function contentSection(dataSection: DataSection, index: string) {
    return (
      <div className="home-content" key={index}>
        {dataSection.section.title_h2 && (
          <h2 {...dataSection.section.$?.title_h2}>
            {dataSection.section.title_h2}
          </h2>
        )}
        {dataSection.section.description && (
          <p {...dataSection.section.$?.description}>
            {dataSection.section.description}
          </p>
        )}
        {dataSection.section.call_to_action.title &&
        dataSection.section.call_to_action.href ? (
          <a
            {...dataSection.section.call_to_action.$?.href}
            href={dataSection.section.call_to_action.href}
            className="btn secondary-btn"
          >
            {dataSection.section.call_to_action.title}
          </a>
        ) : (
          ""
        )}
      </div>
    );
  }

  function imageContent(dataImg: DataImg, index: string) {
    return (
      <img
        {...dataImg.section.image.$?.url}
        src={dataImg.section.image.url}
        alt="section-image"
        key={index}
      />
    );
  }

  return (
    <div className="home-advisor-section">
      {data.section.image_alignment === "Left"
        ? [imageContent(data, "left-1"), contentSection(data, "left-2")]
        : [contentSection(data, "right-1"), imageContent(data, "right-2")]}
    </div>
  );
};

export default Section;
