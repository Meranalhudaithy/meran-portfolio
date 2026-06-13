import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Tells Next.js to generate static HTML/CSS/JS (creates an 'out' folder)
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
