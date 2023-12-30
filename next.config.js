/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "links.papareact.com",
      },
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
      },

      {
        protocol: "https",
        hostname: "assets.aboutamazon.com",
      },
    ],
  },
};

module.exports = nextConfig;
