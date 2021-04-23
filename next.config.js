require("dotenv-flow").config({ silent: true });

const truthy = ["TRUE", "True", "true", 1];
const StatsPlugin = require("stats-webpack-plugin");
const withPlugins = require("next-compose-plugins");
const bundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: truthy.includes(process.env.ANALYZE),
});

module.exports = withPlugins([[bundleAnalyzer]], {
  future: {
    webpack5: true,
  },
  devIndicators: {
    autoPrerender: false,
  },
  publicRuntimeConfig: {
    NO_AUTH: truthy.includes(process.env.NO_AUTH),
    APP_URL: process.env.APP_URL,
  },
  webpack(cfg) {
    cfg.devtool = "eval-source-map";
    if (process.env.WEBPACK_STATS) {
      cfg.profile = true;
      cfg.plugins.push(
        new StatsPlugin("stats.json", {
          timings: true,
          assets: true,
          chunks: true,
          chunkModules: true,
          modules: true,
          children: true,
          cached: true,
          reasons: true,
        })
      );
    }
    cfg.module.rules = [
      ...cfg.module.rules,
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        use: "graphql-tag/loader",
      },
    ];
    return cfg;
  },
});
