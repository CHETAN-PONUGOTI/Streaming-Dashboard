/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
      },
      {
        protocol: "https",
        hostname: "img.omdbapi.com",
      }
    ],
  },

  // To fix the workspace warning
  turbopack: {
    root: __dirname,
  }
};

module.exports = nextConfig;
