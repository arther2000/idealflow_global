import type { ReactNode } from "react";

export type Locale = "en" | "zh";

type FeatureSlug =
  "funnel" | "email" | "calendar" | "automation" | "ai-content" | "reputation" | "crm";

/** Route paths per locale. English lives at the root, 繁體中文（台灣）lives under /tw. */
export const PATHS = {
  en: {
    home: "/",
    start: "/start",
    cta: "/contact",
    pricing: "/pricing",
    gohighlevel: "/gohighlevel",
    funnel: "/funnel",
    email: "/email",
    calendar: "/calendar",
    automation: "/automation",
    "ai-content": "/ai-content",
    reputation: "/reputation",
    crm: "/crm",
  },
  zh: {
    home: "/tw",
    start: "/tw/start",
    cta: "/tw/booking",
    pricing: "/tw/pricing",
    gohighlevel: "/tw/gohighlevel",
    funnel: "/tw/funnel",
    email: "/tw/email",
    calendar: "/tw/calendar",
    automation: "/tw/automation",
    "ai-content": "/tw/ai-content",
    reputation: "/tw/reputation",
    crm: "/tw/crm",
  },
} as const;

export type SitePath = (typeof PATHS)[Locale][keyof (typeof PATHS)["en"]];

type FeatureDef = { slug: FeatureSlug; label: Record<Locale, string>; icon: ReactNode };

const FEATURES: FeatureDef[] = [
  {
    slug: "funnel",
    label: { zh: "銷售漏斗與網站建置", en: "Funnels & Websites" },
    icon: <path d="M3 4h18l-7 8v6l-4 2v-8L3 4z" />,
  },
  {
    slug: "email",
    label: { zh: "Email／LINE 行銷自動化", en: "Email & LINE Marketing" },
    icon: (
      <>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-10 5L2 7" />
      </>
    ),
  },
  {
    slug: "calendar",
    label: { zh: "智能預約系統", en: "Smart Booking" },
    icon: (
      <>
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4" />
        <path d="M8 2v4" />
        <path d="M3 10h18" />
      </>
    ),
  },
  {
    slug: "automation",
    label: { zh: "自動化工作流程", en: "Workflow Automation" },
    icon: <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />,
  },
  {
    slug: "ai-content",
    label: { zh: "AI 內容生成與社群排程", en: "AI Content & Social Planner" },
    icon: (
      <>
        <path d="M12 3v18" />
        <path d="M5 8c4-3 10-3 14 0" />
        <path d="M5 16c4 3 10 3 14 0" />
      </>
    ),
  },
  {
    slug: "reputation",
    label: { zh: "評價管理系統", en: "Reputation Management" },
    icon: (
      <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    ),
  },
  {
    slug: "crm",
    label: { zh: "CRM 客戶管理", en: "CRM" },
    icon: (
      <>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      </>
    ),
  },
];

export type FeatureLink = { to: SitePath; label: string; icon: ReactNode };

/** 核心功能子頁（導覽列下拉選單與頁尾共用）。 */
export function featureLinks(locale: Locale): FeatureLink[] {
  return FEATURES.map((f) => ({ to: PATHS[locale][f.slug], label: f.label[locale], icon: f.icon }));
}

/** 首頁錨點（導覽列與頁尾共用）。 */
/** Nav/footer entries: a home-page anchor (`hash`) or a standalone page (`page`). */
export type NavEntry = { hash: string; nav: string; footer: string; page?: "pricing" };

export const HOME_ANCHORS: Record<Locale, NavEntry[]> = {
  zh: [
    { hash: "audience", nav: "適用對象", footer: "適用對象" },
    { hash: "three", nav: "三大特色", footer: "三大在地優勢" },
    { hash: "cases", nav: "成功案例", footer: "成功案例" },
    { hash: "pricing", nav: "方案價格", footer: "方案價格", page: "pricing" },
    { hash: "faq", nav: "常見問題", footer: "常見問題" },
  ],
  en: [
    { hash: "audience", nav: "Who It's For", footer: "Who It's For" },
    { hash: "three", nav: "Why iDealFlow", footer: "Why iDealFlow" },
    { hash: "cases", nav: "Customers", footer: "Success Stories" },
    { hash: "pricing", nav: "Pricing", footer: "Pricing", page: "pricing" },
    { hash: "faq", nav: "FAQ", footer: "FAQ" },
  ],
};

/** UI strings shared by nav / footer. */
export const UI = {
  zh: {
    brandZh: "匯成交",
    features: "核心功能",
    allFeatures: "查看全部八大功能 →",
    hot: "🔥 免費講座報名",
    login: "登入",
    cta: "免費報名講座",
    menu: "選單",
    backHome: "回官網",
    startCta: "立即加入計畫",
    tagline:
      "匯成交 iDealFlow.ai — AI 自動化成交系統。讓成交自動發生，讓系統成為你最強的數位員工。",
    colFeatures: "核心功能",
    colAbout: "了解匯成交",
    colContact: "聯絡我們",
    startLink: "14 天啟動計畫",
    ghlLink: "GoHighLevel 中文版",
    copyright: "© 2026 匯鼎科技股份有限公司 iDealFlow.ai — 版權所有",
    region: "台灣（繁體中文）",
  },
  en: {
    brandZh: "",
    features: "Features",
    allFeatures: "See all 8 core features →",
    hot: "",
    login: "Log in",
    cta: "Book a Demo",
    menu: "Menu",
    backHome: "Home",
    startCta: "Join the Program",
    tagline:
      "iDealFlow.ai — the AI-powered sales automation platform. Let deals close themselves, and let the system be your best digital employee.",
    colFeatures: "Features",
    colAbout: "Company",
    colContact: "Contact",
    startLink: "14-Day Launch Program",
    ghlLink: "GoHighLevel + LINE",
    copyright: "© 2026 iDealFlow.ai. All rights reserved.",
    region: "United States (English)",
  },
} as const;

export const CONTACT_EMAIL = "arther.learn@gmail.com";
export const APP_LOGIN_URL = "https://app.idealflow.ai";
export const LOGO_SRC = "/assets/logo-full.png";
