/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "static.wixstatic.com",
      "images.pexels.com"
    ]
  },
  output: "standalone"
};

export default nextConfig;
