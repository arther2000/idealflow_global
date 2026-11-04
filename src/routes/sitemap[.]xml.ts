import { createFileRoute } from "@tanstack/react-router";
import { SITE_URL, STATIC_PAGES } from "../lib/seo";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = STATIC_PAGES.map(
          (p) => `  <url>
    <loc>${SITE_URL}${p.path}</loc>
    <lastmod>${p.lastmod}</lastmod>
  </url>`,
        ).join("\n");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

        return new Response(xml, {
          status: 200,
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600, s-maxage=3600",
          },
        });
      },
    },
  },
});
