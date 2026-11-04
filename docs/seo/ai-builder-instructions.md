# 給 AI Studio（AI Builder）的指示

> 把下面「---」之間的整段貼進 AI Studio 的 AI Builder 對話框。

---

這個專案連接的是 GitHub repo `arther2000/idealflow_global` 的 `claude/dreamy-bardeen-0el10s` 分支。Claude Code 已經在 GitHub 推了新的 commit（SEO 修正、獨立價格頁、全站移除底層平台廠商名稱）。請依下面順序做 **sync**：

**1. 先把 AI Studio 的修改推上去，再拉 GitHub 的最新版合併（不要直接覆蓋）**
- AI Studio 線上版有幾處修改還沒回到 GitHub：導覽列 logo 換成 `/assets/logo-color.svg`、`/tw/booking` 改成「預約 1 對 1 Demo」、`og:image` 改成 SVG。請先把這些修改推送／同步到 GitHub。
- 再從 GitHub 拉取 `claude/dreamy-bardeen-0el10s` 的最新 commit，合併進來。
- **不要 force push，也不要改寫歷史。**
- 遇到衝突時：
  - `src/lib/seo.ts`、`src/lib/seo-config.ts`、`src/lib/jsonld.ts`、`src/server.ts`、`src/routes/__root.tsx`、`public/og/*`、`src/routes/pricing.tsx`、`src/routes/tw/pricing.tsx` → 用 GitHub 版本。
  - `/tw/booking` 頁面內容、導覽列 logo → 保留 AI Studio 版本。
- 合併後，網站上的中文和英文都**不能出現底層平台的廠商名稱**。如果 AI Studio 那邊的修改有加回這個名稱，也一起拿掉。

**2. 確認靜態圖片有部署**
- 目前線上的 `https://idealflow.ai/assets/logo-full.png` 回 404，`public/` 裡的 PNG 可能沒有被部署。
- 同步完成後，請確認下面三張圖都回 200：
  - `https://idealflow.ai/og/og-en.png`
  - `https://idealflow.ai/og/og-tw.png`
  - `https://idealflow.ai/og/logo-512.png`
- 如果還是 404：把這三張 PNG 上傳到 AI Studio 媒體庫，然後把 `src/lib/seo-config.ts` 的 `OG_IMAGES`、`src/lib/jsonld.ts` 的 `LOGO_URL` 改成媒體庫給的網址。

**3. 發佈後請驗證**
- `https://idealflow.ai/tw/` 回應 **301** 轉到 `/tw`（不是 307）；`/tw/CRM` 回應 301 轉到 `/tw/crm`
- `/tw/pricing`、`/pricing` 回應 200
- `/sitemap.xml` 裡有 22 個 `<loc>`
- 首頁 HTML 裡有 `<script type="application/ld+json">`

**4. 環境變數（下一階段做部落格時會用到）**
- 在 AI Studio 的 Secrets 設定 `GHL_API_KEY`、`GHL_LOCATION_ID`、`GHL_API_BASE=https://services.leadconnectorhq.com`、`GHL_API_VERSION=2021-07-28`
- **只能放在 Secrets，不要寫進 `.env` 再 commit。**

**5. 不要動的地方**
- `src/routes/$.tsx`（舊網址 301 轉址）、`src/components/site/RegionBanner.tsx`（地區切換提示）
- 每頁 FAQ 的內容寫在 `const FAQ` 陣列裡。要改 FAQ 請改陣列，不要直接改 JSX，結構化資料才會跟畫面一致。

---
