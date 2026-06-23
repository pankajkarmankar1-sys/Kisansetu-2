/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Add any other config you need here
  images: {
    domains: ['*'], // Allow all domains for images (adjust as needed)
  },
};

export default nextConfig;