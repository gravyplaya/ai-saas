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
  async redirects() {
    return [
      {
        source: '/',
        has: [
          {
            type: 'host',
            value: 'tavonni.com',
          },
        ],
        destination: 'https://tavonnai.com/',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
