import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",      // enable static HTML export
  trailingSlash: true,   // generate /about/index.html instead of about.html
  // any other config you may have
  images:{
    unoptimized: true,
  }
};

export default nextConfig;
