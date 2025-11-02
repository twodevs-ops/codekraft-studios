import type { MetadataRoute } from "next";
import {
  COMPANY_WEBSITE,
  CHANGE_FREQUENCY,
  LAST_MODIFIED,
  PRIORITY,
} from "@/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: COMPANY_WEBSITE,
      lastModified: LAST_MODIFIED,
      changeFrequency: CHANGE_FREQUENCY.MONTHLY,
      priority: PRIORITY.HOME,
    },
    {
      url: `${COMPANY_WEBSITE}/services`,
      lastModified: LAST_MODIFIED,
      changeFrequency: CHANGE_FREQUENCY.WEEKLY,
      priority: PRIORITY.SERVICES,
    },
    {
      url: `${COMPANY_WEBSITE}/portfolio`,
      lastModified: LAST_MODIFIED,
      changeFrequency: CHANGE_FREQUENCY.WEEKLY,
      priority: PRIORITY.PORTFOLIO,
    },
    {
      url: `${COMPANY_WEBSITE}/pricing`,
      lastModified: LAST_MODIFIED,
      changeFrequency: CHANGE_FREQUENCY.MONTHLY,
      priority: PRIORITY.PRICING,
    },
    {
      url: `${COMPANY_WEBSITE}/about`,
      lastModified: LAST_MODIFIED,
      changeFrequency: CHANGE_FREQUENCY.MONTHLY,
      priority: PRIORITY.ABOUT,
    },
    {
      url: `${COMPANY_WEBSITE}/contact`,
      lastModified: LAST_MODIFIED,
      changeFrequency: CHANGE_FREQUENCY.MONTHLY,
      priority: PRIORITY.CONTACT,
    },
    {
      url: `${COMPANY_WEBSITE}/blog`,
      lastModified: LAST_MODIFIED,
      changeFrequency: CHANGE_FREQUENCY.WEEKLY,
      priority: PRIORITY.BLOG,
    },
  ];
}
