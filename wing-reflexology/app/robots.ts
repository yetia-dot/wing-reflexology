// app/robots.ts

import { MetadataRoute } from "next";

export const dynamic = "force-static"; // Required due to static export

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    // 💡 RE-ADD THE SITEMAP URL EXPLICITLY
    sitemap: "https://www.wingreflexology.com/sitemap.xml", 
  };
}