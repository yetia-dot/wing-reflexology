// app/robots.ts
import { MetadataRoute } from "next";

export const dynamic = "force-static"; 

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    // Keep the sitemap entry removed, as the fix in layout.tsx should handle it.
  };
}