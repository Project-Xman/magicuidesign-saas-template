/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "localhost" }, { hostname: "randomuser.me" },{ hostname: "assets.aceternity.com" },{ hostname: "images.unsplash.com" }],
  },
};

export default nextConfig;
