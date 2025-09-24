/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "localhost" }, { hostname: "randomuser.me" },{ hostname: "assets.aceternity.com" }],
  },
};

export default nextConfig;
