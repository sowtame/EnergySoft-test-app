import { CrawlLine } from "components/CrawlLines/CrawlLine";
import React from "react";
import { useSelector } from "react-redux";
import { selCrawlLines } from "store/CrawlLine/Selectors";

export const CrawlLines = () => {
  const crawlLines = useSelector(selCrawlLines);
  return (
    <>
      {crawlLines.map((term: string) => (
        <CrawlLine key={term} term={term} />
      ))}
    </>
  );
};
