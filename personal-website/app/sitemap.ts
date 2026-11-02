import type { MetadataRoute } from "next";
import { portfolioProjects } from "@/lib/portfolio";
import { siteOrigin } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "/",
    "/speaking",
    "/writings",
    "/videos",
    ...portfolioProjects.map((project) => `/work/${project.slug}`),
  ].map((path) => ({ url: new URL(path, siteOrigin).toString() }));
}
