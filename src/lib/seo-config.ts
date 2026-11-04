// Site-wide SEO constants (kept separate from seo.ts to avoid import cycles with jsonld.ts).
// Keep SITE_URL in sync with the custom domain configured for the AI Studio project.

export const SITE_URL = "https://idealflow.ai";

export type Locale = "en" | "zh";

export const SITE_NAMES: Record<Locale, string> = {
  en: "iDealFlow.ai",
  zh: "匯成交 iDealFlow.ai",
};

/** 1200×630 share cards (PNG — SVG is not supported by Facebook / LINE / X). */
export const OG_IMAGES: Record<Locale, string> = {
  en: `${SITE_URL}/og/og-en.png`,
  zh: `${SITE_URL}/og/og-tw.png`,
};
export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;

export function localeOf(path: string): Locale {
  return path === "/tw" || path.startsWith("/tw/") ? "zh" : "en";
}
