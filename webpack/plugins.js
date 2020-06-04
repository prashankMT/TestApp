const webpack = require("webpack");

const defineGraphQlUrl = () => [
  new webpack.EnvironmentPlugin(["GOVERNANCE_GQL_URL"])
];
module.exports = {
  GraphQlUrl: defineGraphQlUrl()
};
