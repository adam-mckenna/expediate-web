import type { MetadataRoute } from "next";

import { ROUTES } from "@/lib/constants";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://expediate.app";

const sitemap = (): MetadataRoute.Sitemap => {
  const now = new Date();

  return [
    {
      url: `${siteUrl}${ROUTES.HOME}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}${ROUTES.RESULTS}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}${ROUTES.ABOUT}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${siteUrl}${ROUTES.DQS_EXPLAINED}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${siteUrl}${ROUTES.CATEGORIES}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
};

export default sitemap;

