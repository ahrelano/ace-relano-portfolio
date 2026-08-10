import type { MetadataRoute } from "next";

import { absoluteUrl, portfolio } from "@/data/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/work", "/about", "/contact"];
  const projects = portfolio.projects.map((project) => `/work/${project.slug}`);

  return [...pages, ...projects].map((path) => ({
    url: absoluteUrl(path),
    changeFrequency: path === "" ? "monthly" : "yearly",
    priority: path === "" ? 1 : path === "/work" ? 0.9 : 0.7,
  }));
}
