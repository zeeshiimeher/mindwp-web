import type { MetadataRoute } from "next";

import { allRoutes } from "@/config/routes";
import { absoluteUrl } from "@/config/site";

/** Generated from the route registry so it can't fall out of sync. */
export default function sitemap(): MetadataRoute.Sitemap {
  return allRoutes().map((path) => ({
    url: absoluteUrl(path),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
