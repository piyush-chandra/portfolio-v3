import { POSTS } from "@/lib/posts";

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio-v3-one-xi.vercel.app";

function esc(s: string) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export async function GET() {
    const items = POSTS.map(
        (p) => `    <item>
      <title>${esc(p.title)}</title>
      <link>${BASE}/writing/${p.slug}</link>
      <guid>${BASE}/writing/${p.slug}</guid>
      <pubDate>${esc(p.date)}</pubDate>
      <description>${esc(p.hook)}</description>
    </item>`
    ).join("\n");
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Piyush — writing</title>
    <link>${BASE}/writing</link>
    <description>Short engineering notes: pipelines, benchmarks, SWIFT.</description>
${items}
  </channel>
</rss>`;
    return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
export const dynamic = "force-static";
