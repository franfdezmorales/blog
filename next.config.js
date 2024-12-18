/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    ppr: true,
  },
  transpilePackages: ["next-mdx-remote"],
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
