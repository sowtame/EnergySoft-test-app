import { Articles } from "components/Articles";
import { CrawlLines } from "components/CrawlLines";
import React from "react";

function App() {
  return (
    <div className="wrapper">
      <CrawlLines />
      <Articles />
    </div>
  );
}

export default App;
