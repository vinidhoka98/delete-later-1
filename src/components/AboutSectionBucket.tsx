import React from "react";
import parser from "html-react-parser";
import { Image } from "../typescript/action";
import { SectionWithBucket } from "../typescript/component";

type AdditionalParam = {
  title_h2?: string;
  title_h3?: string;
  description?: string;
};

type Bucket = {
  title_h3: string;
  description: string;
  icon: Image;
  $: AdditionalParam;
};

type Data = {
  section_with_buckets: SectionWithBucket;
};

type BucketProps = {
  data: Data;
};

const AboutSectionBucket = ({ data }: BucketProps) => {
  function bucketContent(bucket: Bucket) {
    return (
      <div className="mission-content-section" key={bucket.title_h3}>
        {bucket.icon && (
          <img
            className="mission-icon"
            {...bucket.icon.$?.url}
            src={bucket.icon.url}
            alt="art work"
          />
        )}

        <div className="mission-section-content">
          {bucket.title_h3 && (
            <h3 {...bucket.$?.title_h3}>{bucket.title_h3}</h3>
          )}
          <div {...bucket.$?.description}>
            {typeof bucket.description === "string" &&
              parser(bucket.description)}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="member-main-section">
      <div className="member-head">
        {data.section_with_buckets.title_h2 && (
          <h2 {...data.section_with_buckets.$?.title_h2}>
            {data.section_with_buckets.title_h2}
          </h2>
        )}
      </div>
      <div className="mission-section">
        <div className="mission-content-top">
          {data.section_with_buckets.buckets.map(
            (bucket, index: number) => index < 2 && bucketContent(bucket)
          )}
        </div>
        <div className="mission-content-bottom">
          {data.section_with_buckets.buckets.map(
            (bucket, index: number) => index >= 2 && bucketContent(bucket)
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutSectionBucket;
