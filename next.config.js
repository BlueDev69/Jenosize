/** @type {import('next').NextConfig} */

const securityHeaders = [
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
];

module.exports = {
  reactStrictMode: false,
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  images: {
    domains: [
      "map.googleapis.com",
      "http://localhost:3000",
      "googleapis.com",
      "www.incimages.com",
      "img-cdn.inc.com",
      "ipfs.bitkubnext.com",
      "cdn.discordapp.com",
    ],
  },
  env: {
    GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
  },
};
