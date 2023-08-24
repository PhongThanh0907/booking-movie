/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cinestar.com.vn",
      },
    ],
  },
};

module.exports = nextConfig;
