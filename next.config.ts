import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/academic-website",
  env: {
    NEXT_PUBLIC_BASE_PATH: "/academic-website",
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
