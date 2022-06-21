const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

/** @type {import('next').NextConfig} */
const nextConfig = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        mongodb_username: "dbUser",
        mongodb_password: "Joshuakoh042345",
        mongodb_clusterName: "cluster0",
        mongodb_database: "jk-blog",
      },
    };
  }

  return {
    env: {
      mongodb_username: "dbUser",
      mongodb_password: "Joshuakoh042345",
      mongodb_clusterName: "cluster0",
      mongodb_database: "jkblog",
    },
  };
};

module.exports = nextConfig;
