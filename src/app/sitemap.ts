import type { MetadataRoute } from "next";
import { siteUrl } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  // No invented production URL or modification timestamp in a review build.
  return siteUrl ? [{ url: siteUrl.href }] : [];
}
