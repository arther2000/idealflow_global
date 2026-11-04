import type { ReactNode } from "react";

export type FeaturePath =
  "/funnel" | "/email" | "/calendar" | "/automation" | "/ai-content" | "/reputation" | "/crm";

export type FeatureLink = { to: FeaturePath; label: string; icon: ReactNode };

/** 核心功能子頁（導覽列下拉選單與頁尾共用）。 */
export const FEATURE_LINKS: FeatureLink[] = [
  {
    to: "/funnel",
    label: "銷售漏斗與網站建置",
    icon: <path d="M3 4h18l-7 8v6l-4 2v-8L3 4z" />,
  },
  {
    to: "/email",
    label: "Email／LINE 行銷自動化",
    icon: (
      <>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-10 5L2 7" />
      </>
    ),
  },
  {
    to: "/calendar",
    label: "智能預約系統",
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
    to: "/automation",
    label: "自動化工作流程",
    icon: <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />,
  },
  {
    to: "/ai-content",
    label: "AI 內容生成與社群排程",
    icon: (
      <>
        <path d="M12 3v18" />
        <path d="M5 8c4-3 10-3 14 0" />
        <path d="M5 16c4 3 10 3 14 0" />
      </>
    ),
  },
  {
    to: "/reputation",
    label: "評價管理系統",
    icon: (
      <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    ),
  },
  {
    to: "/crm",
    label: "CRM 客戶管理",
    icon: (
      <>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      </>
    ),
  },
];

/** 首頁錨點（導覽列與頁尾共用）。 */
export const HOME_ANCHORS: { hash: string; nav: string; footer: string }[] = [
  { hash: "audience", nav: "適用對象", footer: "適用對象" },
  { hash: "three", nav: "三大特色", footer: "三大在地優勢" },
  { hash: "cases", nav: "成功案例", footer: "成功案例" },
  { hash: "pricing", nav: "方案價格", footer: "方案價格" },
  { hash: "faq", nav: "常見問題", footer: "常見問題" },
];

export const CONTACT_EMAIL = "arther.learn@gmail.com";
export const APP_LOGIN_URL = "https://app.idealflow.ai";
export const LOGO_SRC = "/assets/logo-full.png";
