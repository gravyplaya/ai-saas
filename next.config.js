/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "googleusercontent.com",
      "oaidalleapiprodscus.blob.core.windows.net",
      "cdn.openai.com",
      "replicate.delivery",
      "pbxt.replicate.delivery",
      "pbs.twimg.com"
    ],
  },
  transpilePackages: ["@ionic/react", "@ionic/core", "@stencil/core"],
};

module.exports = nextConfig;
