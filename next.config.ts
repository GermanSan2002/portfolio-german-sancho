import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/portfolio-german-sancho',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
