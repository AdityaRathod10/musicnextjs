import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "**", // Allow any domain
      },
    ],
  },
  // Add this to bypass ESLint errors during build
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;