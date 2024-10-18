import { Link } from "gatsby";
import React from "react";
import parser from "html-react-parser";

type AdditionalParam = {
  title: string;
  body: string;
};

type Data = {
  url: string;
  body: string;
  title: string;
  $: AdditionalParam;
};

type BlogListProps = {
  data: [Data];
};

const ArchiveRelative = ({ data }: BlogListProps) => {
  return (
    <React.Fragment>
      {data.map((index, key) => {
        return (
          <Link to={index.url} key={key}>
            <div>
              <h4 {...index.$?.title}>{index.title}</h4>
              {typeof index.body === "string" && (
                <div {...index.$?.body}> {parser(index.body.slice(0, 80))}</div>
              )}
            </div>
          </Link>
        );
      })}
    </React.Fragment>
  );
};

export default ArchiveRelative;
