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

/** Pages that exist in both locales (English at root, 繁體中文 under /tw). */
const PAIRED = [
  "/",
  "/start",
  "/crm",
  "/email",
  "/funnel",
  "/calendar",
  "/automation",
  "/ai-content",
  "/reputation",
];

/** hreflang alternates for a path, if it has a counterpart in the other locale. */
function alternates(path: string): { rel: string; hrefLang: string; href: string }[] {
  const en = path === "/tw" ? "/" : path.startsWith("/tw/") ? path.slice(3) : path;
  if (!PAIRED.includes(en)) return [];
  const zh = en === "/" ? "/tw" : `/tw${en}`;
  return [
    { rel: "alternate", hrefLang: "en", href: canonical(en) },
    { rel: "alternate", hrefLang: "zh-Hant-TW", href: canonical(zh) },
    { rel: "alternate", hrefLang: "x-default", href: canonical(en) },
  ];
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
    {
      property: "og:locale",
      content: path === "/tw" || path.startsWith("/tw/") ? "zh_TW" : "en_US",
    },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:image", content: DEFAULT_OG_IMAGE },
  );
  return { meta, links: [{ rel: "canonical", href: url }, ...alternates(path)] };
}

/** Public pages included in the sitemap. */
export const STATIC_PAGES: { path: string; lastmod: string }[] = [
  ...PAIRED.map((path) => ({ path, lastmod: "2026-11-04" })),
  { path: "/contact", lastmod: "2026-11-04" },
  ...PAIRED.map((path) => ({ path: path === "/" ? "/tw" : `/tw${path}`, lastmod: "2026-11-04" })),
  { path: "/tw/booking", lastmod: "2026-11-04" },
];
