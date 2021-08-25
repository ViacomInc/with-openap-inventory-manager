require("dotenv-flow").config({ silent: true });

const truthy = ["TRUE", "True", "true", 1];

module.exports = {
  reactStrictMode: true,
  poweredByHeader: false,
  devIndicators: {
    autoPrerender: false,
  },
  publicRuntimeConfig: {
    NO_AUTH: truthy.includes(process.env.NO_AUTH),
    APP_URL: process.env.APP_URL,
  },
};
