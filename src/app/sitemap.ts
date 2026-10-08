import type { MetadataRoute } from "next";
import { POSTS } from "@/lib/posts";

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio-v3-one-xi.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
    const staticRoutes = ["", "/about", "/experience", "/projects", "/writing", "/timeline", "/books"];
    const caseRoutes = ["/projects/diabetes-risk-check", "/projects/ad2-bulk-upload"];
    return [
        ...staticRoutes.map((r) => ({ url: `${BASE}${r || "/"}`, lastModified: new Date() })),
        ...caseRoutes.map((r) => ({ url: `${BASE}${r}`, lastModified: new Date() })),
        ...POSTS.map((p) => ({ url: `${BASE}/writing/${p.slug}`, lastModified: new Date() })),
    ];
}
export const dynamic = "force-static";
