/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    ppr: true,
  },
  images: {
    loader: "custom",
    loaderFile: "./app/lib/cloudfare/loader.js",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imagedelivery.net",
      },
    ],
  },
};

module.exports = nextConfig;
