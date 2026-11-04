// Centralized SEO: head() metadata (title, description, canonical, hreflang, OG/Twitter, JSON-LD)
// and the sitemap page list. Site constants live in ./seo-config.ts.

import {
  SITE_URL,
  SITE_NAMES,
  OG_IMAGES,
  OG_IMAGE_WIDTH,
  OG_IMAGE_HEIGHT,
  localeOf,
} from "./seo-config";
import {
  breadcrumbNode,
  faqPageNode,
  jsonLdScript,
  organizationNode,
  softwareNode,
  websiteNode,
  type FaqItem,
  type JsonLd,
} from "./jsonld";

export { SITE_URL } from "./seo-config";
export const SITE_NAME = SITE_NAMES.en;
export const DEFAULT_OG_IMAGE = OG_IMAGES.en;

/** Square icon used for favicon / apple-touch-icon (served from /public). */
export const ICON_PATH = "/assets/logo-color.svg";
export const ICON_PNG_PATH = "/og/logo-512.png";

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
  "/pricing",
  "/gohighlevel",
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
  /** Visible page name for the BreadcrumbList (Home › name). Omit on home pages. */
  breadcrumb?: string;
  /** Visible FAQ items on the page → FAQPage JSON-LD (must match the rendered text). */
  faq?: FaqItem[];
  /** Add the SoftwareApplication (product + price) node. Home pages always include it. */
  product?: boolean;
};

/** Build the head() payload for a page. */
export function pageHead({
  path,
  title,
  description,
  noindex,
  breadcrumb,
  faq,
  product,
}: PageHeadInput) {
  const locale = localeOf(path);
  const url = canonical(path);
  const ogImage = OG_IMAGES[locale];
  const meta: Record<string, string>[] = [{ title }];
  if (description) meta.push({ name: "description", content: description });
  if (noindex) {
    meta.push({ name: "robots", content: "noindex, follow" });
    return { meta };
  }
  meta.push(
    { property: "og:title", content: title },
    ...(description ? [{ property: "og:description", content: description }] : []),
    { property: "og:url", content: url },
    { property: "og:image", content: ogImage },
    { property: "og:image:width", content: String(OG_IMAGE_WIDTH) },
    { property: "og:image:height", content: String(OG_IMAGE_HEIGHT) },
    { property: "og:image:alt", content: SITE_NAMES[locale] },
    { property: "og:locale", content: locale === "zh" ? "zh_TW" : "en_US" },
    { property: "og:locale:alternate", content: locale === "zh" ? "en_US" : "zh_TW" },
    { property: "og:site_name", content: SITE_NAMES[locale] },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    ...(description ? [{ name: "twitter:description", content: description }] : []),
    { name: "twitter:image", content: ogImage },
  );

  const home = locale === "zh" ? "/tw" : "/";
  const nodes: JsonLd[] = [];
  if (path === home) {
    nodes.push(organizationNode(), websiteNode(locale), softwareNode(locale));
  } else if (product) {
    nodes.push(softwareNode(locale));
  }
  if (breadcrumb && path !== home) {
    nodes.push(
      breadcrumbNode([
        { name: locale === "zh" ? "首頁" : "Home", path: home },
        { name: breadcrumb, path },
      ]),
    );
  }
  if (faq?.length) nodes.push(faqPageNode(faq));

  return {
    meta,
    links: [{ rel: "canonical", href: url }, ...alternates(path)],
    ...(nodes.length ? { scripts: [jsonLdScript(nodes)] } : {}),
  };
}

/** Public pages included in the sitemap. */
export const STATIC_PAGES: { path: string; lastmod: string }[] = [
  ...PAIRED.map((path) => ({ path, lastmod: "2026-11-04" })),
  { path: "/contact", lastmod: "2026-11-04" },
  ...PAIRED.map((path) => ({ path: path === "/" ? "/tw" : `/tw${path}`, lastmod: "2026-11-04" })),
  { path: "/tw/booking", lastmod: "2026-11-04" },
];
