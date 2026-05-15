import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/academic-website",
  env: {
    NEXT_PUBLIC_BASE_PATH: "/academic-website",
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
