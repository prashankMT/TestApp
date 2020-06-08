import React from "react";
import ReactDom from "react-dom";
// import bootstrap from "mt-ui-core";

import "mt-ui-components/styles/index.scss";

import Analytics from "~/containers/Analytics";

const Test = () => {
  return (
    <div style={{ height: "440px", width: "502px", background: "white" }}>
      <Analytics lastUpdatedAt={1591253935} userId={"4ad37140ebb934b3"} />
    </div>
  );
};

ReactDom.render(<Test />, document.getElementById("root"));

// bootstrap("root", { Application: <Test /> });
