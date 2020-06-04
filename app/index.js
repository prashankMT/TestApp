import React from "react";
import ReactDom from "react-dom";
// import bootstrap from "mt-ui-core";

import "mt-ui-components/styles/index.scss";

import Analytics from "~/containers/Analytics";

const Test = () => {
  return (
    <div style={{ height: "440px", width: "502px" }}>
      <Analytics lastUpdatedAt={"1591253935685"} userId={"497fb18ba348e6d0"} />
    </div>
  );
};

ReactDom.render(<Test />, document.getElementById("root"));

// bootstrap("root", { Application: <Test /> });
