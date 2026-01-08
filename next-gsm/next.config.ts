import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export (GitHub Pages / static hosting)
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
