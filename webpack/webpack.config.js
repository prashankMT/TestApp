const { GraphQlUrl } = require("./plugins");
const webpackConfigGenerator = require("mt-ui-core/configurations/webpack");

const resolve = require("path").resolve;
const { DIRECTORY_KEYS } = require("mt-ui-core/configurations/directoryMap");

const directoryMap = {
  [DIRECTORY_KEYS.DIST]: resolve(__dirname, "../", "dist"),
  [DIRECTORY_KEYS.APP]: resolve(__dirname, "../", "app"),
  [DIRECTORY_KEYS.ROOT]: resolve(__dirname, "../"),
  [DIRECTORY_KEYS.MT_CORE]: resolve(
    __dirname,
    "../node_modules/mt-ui-core/app"
  ),
  [DIRECTORY_KEYS.MINDTICKLE_COMMON]: resolve(
    __dirname,
    "../node_modules/@mindtickle/mt-ui-components/src"
  ),
  [DIRECTORY_KEYS.ENV_FILE]: resolve(__dirname, "../.env")
};

const overrideConfig = {
  mode: "development",
  alias: {
    "mt-ui-components": directoryMap[DIRECTORY_KEYS.MINDTICKLE_COMMON],
    "@mt-ui-components": directoryMap[DIRECTORY_KEYS.MINDTICKLE_COMMON],
    "mt-ui-core": directoryMap[DIRECTORY_KEYS.MT_CORE],
    "@mt-ui-core": directoryMap[DIRECTORY_KEYS.MT_CORE]
  },
  entry: resolve(__dirname, "../", "app", "index.js")
};

overrideConfig.plugins = [...GraphQlUrl];

const config = webpackConfigGenerator(directoryMap, overrideConfig);

module.exports = config;
