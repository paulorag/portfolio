import { MetadataRoute } from "next";
import { getAllProjectSlugs } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://pauloragdev.vercel.app";
    const projectSlugs = getAllProjectSlugs();

    const projectUrls: MetadataRoute.Sitemap = projectSlugs.map((slug) => ({
        url: `${baseUrl}/projetos/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
    }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1.0,
        },
        ...projectUrls,
    ];
}
