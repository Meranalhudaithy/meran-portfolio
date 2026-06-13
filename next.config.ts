import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Tells Next.js to generate static HTML/CSS/JS (creates an 'out' folder)
  reactStrictMode: true,
};

export default nextConfig;
