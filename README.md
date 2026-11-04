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

### 雙語系結構（類似 apple.com）

| 網址 | 語系 |
| --- | --- |
| `idealflow.ai/` | 英文（全球版）：`/`、`/start`、`/contact`（Book a Demo）、7 個功能頁 |
| `idealflow.ai/tw/` | 繁體中文（台灣）：`/tw`、`/tw/start`、`/tw/booking`、`/tw/thanks`、7 個功能頁 |

- 功能頁：`crm` `email` `funnel` `calendar` `automation` `ai-content` `reputation`
- `src/components/site/RegionBanner.tsx`：Apple 風格「選擇另一個國家或地區」提示條，依瀏覽器語言／時區
  偵測；網址加 `?region-banner=1` 可強制顯示。頁尾也有地區切換連結。
- `<html lang>`、`og:locale`、`hreflang`（en / zh-Hant-TW / x-default）依路徑自動切換。
- 舊靜態站的 `*.html` 網址會 301 轉址到 `/tw/*`（`src/routes/$.tsx`）。
- 英文 `/contact` 表單：請在 `src/lib/contact.ts` 填入新的 GHL Inbound Webhook（`CONTACT_ENDPOINT`），
  未設定前會改用 Email 備援。

- 共用元件：`src/components/site/`（SiteNav、SiteFooter、RegionBanner、Faq、BookingForm、NotFound）；
  導覽列／頁尾文字與路徑在 `feature-links.tsx`
- 台灣講座報名表單設定（webhook、場次、地點）：`src/lib/booking.ts`
- SEO／網域設定：`src/lib/seo.ts`
