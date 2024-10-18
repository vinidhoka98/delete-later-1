import { Link } from "gatsby";
import React from "react";
import parser from "html-react-parser";
import { SectionWithBucket } from "../typescript/component";

type Data = {
  section_with_buckets: SectionWithBucket;
};

type BucketProps = {
  data: Data;
};

const SectionBucket = ({ data: { section_with_buckets } }: BucketProps) => {
  return (
    <div className="member-main-section">
      <div className="member-head">
        {section_with_buckets.title_h2 ? (
          <h2 {...section_with_buckets.$?.title_h2}>
            {section_with_buckets.title_h2}
          </h2>
        ) : (
          ""
        )}
        {section_with_buckets.description ? (
          <p {...section_with_buckets.$?.description}>
            {section_with_buckets.description}
          </p>
        ) : (
          ""
        )}
      </div>
      <div className="member-section">
        {section_with_buckets.buckets.map((bucket, index) => {
          return (
            <div className="content-section" key={index}>
              {bucket.icon && (
                <img
                  {...bucket.icon.$?.url}
                  src={bucket.icon.url}
                  alt="bucket icon"
                />
              )}
              {bucket.title_h3 ? (
                <h3 {...bucket.$?.title_h3}>{bucket.title_h3}</h3>
              ) : (
                ""
              )}
              {typeof bucket.description === "string" && (
                <div {...bucket.$?.description}>
                  {" "}
                  {parser(bucket.description)}
                </div>
              )}
              {bucket.call_to_action.title ? (
                <Link
                  to={
                    bucket.call_to_action.href
                      ? bucket.call_to_action.href
                      : "#"
                  }
                  {...bucket.call_to_action.$?.title}
                >
                  {`${bucket.call_to_action.title} -->`}
                </Link>
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SectionBucket;
