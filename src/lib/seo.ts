// Centralized SEO configuration shared by head() metadata and the sitemap.
// Keep SITE_URL in sync with the custom domain configured for the AI Studio project.

export const SITE_URL = "https://idealflow.ai";
export const SITE_NAME = "匯成交 iDealFlow.ai";

/** Square icon used for favicon / apple-touch-icon (served from /public). */
export const ICON_PATH = "/assets/logo-color.svg";
/** Default OG share image (served from /public). */
export const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/logo-full.png`;

/** Self-referential canonical URL for a path (no query string). */
export function canonical(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}

type PageHeadInput = {
  path: string;
  title: string;
  description?: string;
  noindex?: boolean;
};

/** Build the head() payload (title, description, canonical, OG/Twitter) for a page. */
export function pageHead({ path, title, description, noindex }: PageHeadInput) {
  const url = canonical(path);
  const meta: Record<string, string>[] = [{ title }];
  if (description) meta.push({ name: "description", content: description });
  if (noindex) {
    meta.push({ name: "robots", content: "noindex" });
    return { meta };
  }
  meta.push(
    { property: "og:title", content: title },
    ...(description ? [{ property: "og:description", content: description }] : []),
    { property: "og:url", content: url },
    { property: "og:image", content: DEFAULT_OG_IMAGE },
    { property: "og:locale", content: "zh_TW" },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:image", content: DEFAULT_OG_IMAGE },
  );
  return { meta, links: [{ rel: "canonical", href: url }] };
}

/** Public pages included in the sitemap. */
export const STATIC_PAGES: { path: string; lastmod: string }[] = [
  { path: "/", lastmod: "2026-11-04" },
  { path: "/start", lastmod: "2026-11-04" },
  { path: "/booking", lastmod: "2026-11-04" },
  { path: "/crm", lastmod: "2026-11-04" },
  { path: "/email", lastmod: "2026-11-04" },
  { path: "/funnel", lastmod: "2026-11-04" },
  { path: "/calendar", lastmod: "2026-11-04" },
  { path: "/automation", lastmod: "2026-11-04" },
  { path: "/ai-content", lastmod: "2026-11-04" },
  { path: "/reputation", lastmod: "2026-11-04" },
];
