const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

const CnameWebpackPlugin = require("cname-webpack-plugin");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "mja-org",
    projectName: "single-spa-demo-page-2",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object

    plugins: [
      new CnameWebpackPlugin({
        domain: process.env.CNAME_VALUE || "example.com",
      }),
    ],
  });
};
