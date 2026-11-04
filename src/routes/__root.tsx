import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportVibeError } from "../lib/vibe-error-reporting";
import { canonical, DEFAULT_OG_IMAGE, ICON_PATH, SITE_NAME } from "../lib/seo";
import { NotFound } from "../components/site/NotFound";

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportVibeError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <section className="ty">
      <div className="wrap">
        <h1>
          頁面<span>載入失敗</span>
        </h1>
        <p className="ty-sub">系統發生問題，請重新整理或回到首頁。</p>
        <div className="hero-ctas">
          <button
            className="btn btn-primary"
            onClick={() => {
              router.invalidate();
              reset();
            }}
          >
            再試一次
          </button>
          <a className="btn btn-ghost" href="/">
            回首頁
          </a>
        </div>
      </div>
    </section>
  );
}

const DEFAULT_TITLE = "匯成交 iDealFlow.ai｜AI 自動化成交系統 — 讓成交自動發生";
const DEFAULT_DESC =
  "別再為了做行銷養一堆工具。匯成交 iDealFlow.ai 把 CRM、LINE／Email 行銷、銷售漏斗、AI 客服、預約與課程系統整合成一套，名單一進來，系統就幫你跟到成交。台灣在地中文化與導入支持。";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: DEFAULT_TITLE },
      { name: "description", content: DEFAULT_DESC },
      { name: "author", content: "匯鼎科技股份有限公司" },
      { property: "og:title", content: DEFAULT_TITLE },
      { property: "og:description", content: DEFAULT_DESC },
      { property: "og:url", content: canonical("/") },
      { property: "og:image", content: DEFAULT_OG_IMAGE },
      { property: "og:locale", content: "zh_TW" },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: DEFAULT_OG_IMAGE },
    ],
    links: [
      { rel: "icon", href: ICON_PATH, type: "image/svg+xml" },
      { rel: "apple-touch-icon", href: ICON_PATH },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700;900&family=Sora:wght@400;600;700;800&display=swap",
      },
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFound,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-Hant">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
