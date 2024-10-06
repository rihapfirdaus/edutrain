/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "edutrain.uinsgd.ac.id",
        pathname: "**",
      },
      {
        protocol: "http",
        hostname: "103.55.33.118",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
