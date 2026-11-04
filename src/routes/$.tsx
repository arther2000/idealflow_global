import { createFileRoute, notFound, redirect } from "@tanstack/react-router";
import { NotFound } from "@/components/site/NotFound";

// 舊版靜態站（中文）的 *.html 網址 → /tw 新路由（301），保留既有連結與 SEO。
const LEGACY_PAGES: Record<string, string> = {
  "index.html": "/tw",
  "crm.html": "/tw/crm",
  "email.html": "/tw/email",
  "funnel.html": "/tw/funnel",
  "calendar.html": "/tw/calendar",
  "automation.html": "/tw/automation",
  "ai-content.html": "/tw/ai-content",
  "reputation.html": "/tw/reputation",
  "start.html": "/tw/start",
  "booking.html": "/tw/booking",
  "thanks.html": "/tw/thanks",
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
    meta: [{ title: "Page Not Found | iDealFlow.ai" }, { name: "robots", content: "noindex" }],
  }),
  component: NotFound,
});
