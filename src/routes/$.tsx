import { createFileRoute, notFound, redirect } from "@tanstack/react-router";
import { NotFound } from "@/components/site/NotFound";

// 舊版靜態站的 *.html 網址 → 新路由（301），保留既有連結與 SEO。
const LEGACY_PAGES: Record<string, string> = {
  "index.html": "/",
  "crm.html": "/crm",
  "email.html": "/email",
  "funnel.html": "/funnel",
  "calendar.html": "/calendar",
  "automation.html": "/automation",
  "ai-content.html": "/ai-content",
  "reputation.html": "/reputation",
  "start.html": "/start",
  "booking.html": "/booking",
  "thanks.html": "/thanks",
};

// Catch-all route. Legacy .html URLs redirect; anything else throws notFound()
// so TanStack Start responds with HTTP 404 and renders the root notFoundComponent.
export const Route = createFileRoute("/$")({
  beforeLoad: ({ params, location }) => {
    const target = LEGACY_PAGES[params._splat ?? ""];
    if (target) {
      throw redirect({
        href: target + (location.searchStr ?? "") + (location.hash ? `#${location.hash}` : ""),
        statusCode: 301,
      });
    }
    throw notFound();
  },
  head: () => ({
    meta: [{ title: "找不到頁面｜匯成交 iDealFlow.ai" }, { name: "robots", content: "noindex" }],
  }),
  component: NotFound,
});
