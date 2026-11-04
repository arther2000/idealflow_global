# 匯成交 iDealFlow.ai 官網（GHL AI Studio 版）

由原靜態站 `idealflow-ai/idealflow-website` 移植到 GHL AI Studio 的 TanStack Start 架構
（與 `arthercoach-tw` 相同的專案骨架）。

## 開發

```sh
bun install   # 或 npm i
bun run dev   # 或 npm run dev
```

## 架構

- TanStack Start（file-based routing，見 `src/routes/README.md`）
- React 19 + TypeScript（strict）
- Tailwind CSS v4 + shadcn/ui（`src/components/ui`）
- 原站樣式：`src/site.css`（由 `src/styles.css` 匯入於 base layer）

| 路由 | 說明 | 原檔案 |
| --- | --- | --- |
| `/` | 首頁 | `index.html` |
| `/start` | 14 天啟動計畫 | `start.html` |
| `/booking` | 免費實體講座報名（送 GHL Inbound Webhook） | `booking.html` |
| `/thanks` | 報名完成 | `thanks.html` |
| `/crm` `/email` `/funnel` `/calendar` `/automation` `/ai-content` `/reputation` | 核心功能子頁 | `*.html` |
| `/sitemap.xml` | Sitemap | — |

舊的 `*.html` 網址會 301 轉址到新路由（`src/routes/$.tsx`）。

- 共用元件：`src/components/site/`（SiteNav、SiteFooter、Faq、BookingForm、NotFound）
- 報名表單設定（webhook、場次、地點）：`src/lib/booking.ts`
- SEO／網域設定：`src/lib/seo.ts`
