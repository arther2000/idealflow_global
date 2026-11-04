// Schema.org JSON-LD builders. Emitted through head().scripts by pageHead() in ./seo.ts.

import { SITE_URL } from "./seo-config";

export type FaqItem = { q: string; a: string };
export type Crumb = { name: string; path: string };
export type JsonLd = Record<string, unknown>;

export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const SOFTWARE_ID = `${SITE_URL}/#software`;

const LOGO_URL = `${SITE_URL}/og/logo-512.png`;

export function organizationNode(): JsonLd {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: "iDealFlow.ai",
    alternateName: ["匯成交", "匯成交 iDealFlow.ai", "匯鼎科技"],
    legalName: "匯鼎科技股份有限公司",
    url: `${SITE_URL}/`,
    logo: { "@type": "ImageObject", url: LOGO_URL, width: 512, height: 512 },
    email: "arther.learn@gmail.com",
    founder: { "@type": "Person", name: "Arthur Wu" },
    areaServed: ["TW", "Worldwide"],
    sameAs: ["https://app.idealflow.ai"],
  };
}

export function websiteNode(locale: "en" | "zh"): JsonLd {
  return {
    "@type": "WebSite",
    "@id": locale === "zh" ? `${SITE_URL}/tw#website` : WEBSITE_ID,
    url: locale === "zh" ? `${SITE_URL}/tw` : `${SITE_URL}/`,
    name: locale === "zh" ? "匯成交 iDealFlow.ai" : "iDealFlow.ai",
    inLanguage: locale === "zh" ? "zh-Hant-TW" : "en",
    publisher: { "@id": ORG_ID },
  };
}

/** The product itself: an all-in-one sales & marketing automation SaaS. */
export function softwareNode(locale: "en" | "zh"): JsonLd {
  const zh = locale === "zh";
  return {
    "@type": "SoftwareApplication",
    "@id": SOFTWARE_ID,
    name: "iDealFlow.ai",
    alternateName: "匯成交",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "CRM & Marketing Automation",
    operatingSystem: "Web, iOS, Android",
    url: zh ? `${SITE_URL}/tw` : `${SITE_URL}/`,
    description: zh
      ? "整合 CRM、LINE／Email 行銷自動化、銷售漏斗、AI 客服、預約、評價管理與線上課程的 AI 自動化成交系統。"
      : "All-in-one AI sales automation platform: CRM, email & LINE marketing, funnels, AI chat, booking, reputation management and courses.",
    featureList: zh
      ? [
          "CRM 客戶管理",
          "LINE／Email 行銷自動化",
          "銷售漏斗與網站建置",
          "AI 自動回覆",
          "智能預約系統",
          "評價管理",
          "線上課程系統",
          "自動化工作流程",
        ]
      : [
          "CRM",
          "Email & LINE marketing automation",
          "Funnels & websites",
          "AI chat & routing",
          "Smart booking",
          "Reputation management",
          "Online courses",
          "Workflow automation",
        ],
    offers: {
      "@type": "Offer",
      price: "1197",
      priceCurrency: "USD",
      url: zh ? `${SITE_URL}/tw/start` : `${SITE_URL}/start`,
      availability: "https://schema.org/InStock",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "1197",
        priceCurrency: "USD",
        unitCode: "ANN",
        referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitCode: "ANN" },
      },
    },
    publisher: { "@id": ORG_ID },
  };
}

export function faqPageNode(items: FaqItem[]): JsonLd {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbNode(crumbs: Crumb[]): JsonLd {
  return {
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.path}`,
    })),
  };
}

/** Wrap nodes in one @graph script for head().scripts. */
export function jsonLdScript(nodes: JsonLd[]) {
  return {
    type: "application/ld+json",
    children: JSON.stringify({ "@context": "https://schema.org", "@graph": nodes }).replace(
      /</g,
      "\\u003c",
    ),
  };
}
