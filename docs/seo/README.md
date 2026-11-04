# idealflow.ai SEO 架構分析與調整紀錄

**分析日期：** 2026-11-04
**範圍：** `idealflow.ai/`（英文全球站）＋ `idealflow.ai/tw`（繁體中文・台灣）

> 搜尋量都是估計值（沒有用 GKP 或 Ahrefs），競爭程度是根據美國區搜尋結果推斷的。正式投入內容前，請先用 Google Search Console 或關鍵字工具驗證。

> **品牌原則：** 網站上不提及底層平台的廠商名稱，也不跟原廠比較價格。一律以「匯成交 iDealFlow.ai」自有品牌呈現。

---

## 1. 分析結論

| # | 發現 | 嚴重度 | 狀態 |
|---|---|---|---|
| 1 | **網站還沒被 Google 收錄**：`site:idealflow.ai`、「匯成交」都找不到自家頁面 | 高 | ⏳ 要你到 Search Console 提交（§4） |
| 2 | 全站沒有結構化資料（JSON-LD） | 高 | ✅ 已修正 |
| 3 | `og:image` 是 SVG，Facebook、LINE、X 分享時都不會顯示圖片 | 高 | ✅ 已改成 1200×630 PNG |
| 4 | 結尾斜線網址用 307 轉址，大寫網址沒有轉址 | 中 | ✅ 改成 301 |
| 5 | title 只寫功能名稱，沒有搜尋時會用到的修飾詞 | 中 | ✅ 已修正 |
| 6 | 價格只是首頁上的錨點，沒有獨立網址 | 中 | ✅ 新增 `/tw/pricing`、`/pricing` |
| 7 | 20 個網址都是產品頁或報名頁，沒有部落格、產業頁、比較頁、案例頁 | 高 | 📋 見 §3 規劃 |
| 8 | 品牌撞名：iDEAL（荷蘭支付）、Ideaflow（筆記 App）、idealflow.co | 中 | ✅ Organization schema 已加 alternateName；📋 sameAs 待補 |
| 9 | **AI Studio 線上版本跟 GitHub 不一致** | 高 | ⏳ 交給 AI Builder 同步（§5） |

原本就正確的項目：`lang`、canonical、hreflang（en／zh-Hant-TW／x-default）、每頁單一 H1、`/tw/thanks` noindex、robots.txt、sitemap。

---

## 2. 已完成的修正

### 技術 SEO
- **JSON-LD**（`src/lib/jsonld.ts`，由 `pageHead()` 自動輸出）
  - 首頁：Organization（alternateName：匯成交、匯鼎科技）、WebSite、SoftwareApplication（US$1,197/年 Offer）、FAQPage
  - `/start`、`/pricing`：SoftwareApplication＋BreadcrumbList＋FAQPage
  - 其他子頁：BreadcrumbList
  - FAQ 改成資料驅動：畫面和 JSON-LD 用同一份陣列，內容不會不一致
- **分享圖**：`public/og/og-en.png`、`og-tw.png`（1200×630），依語系自動切換
- **圖示**：`public/og/logo-512.png`（apple-touch-icon）
- **標準網址**：`src/server.ts` 把結尾斜線、大寫網址一律 301 轉到小寫、無斜線的版本
- **品牌名稱**：全站（中、英文）移除底層平台廠商的名稱，也移除跟原廠的價格比較

### Title（主關鍵字＋修飾詞｜品牌）
| 頁面 | title |
|---|---|
| /tw | 匯成交 iDealFlow.ai｜AI 自動化成交系統・CRM＋LINE 行銷自動化一站整合 |
| /tw/crm | CRM 客戶管理系統推薦｜中小企業名單管理與銷售管道 |
| /tw/email | LINE／Email 行銷自動化工具｜名單自動跟進到成交 |
| /tw/funnel | 銷售漏斗工具與一頁式銷售頁製作｜300+ 模板拖拉建站 |
| /tw/calendar | 線上預約系統推薦｜自動提醒降低爽約、一對一與團體課程 |
| /tw/automation | 行銷自動化工作流程｜不寫程式自動跟進客戶 |
| /tw/ai-content | AI 文案生成與社群排程工具｜一次發佈 FB、IG 多平台 |
| /tw/reputation | Google 評論管理系統｜自動邀請顧客評論、集中回覆 |
| /tw/start | 14 天啟動計畫｜自動化成交系統導入方案 US$1,197／年 |
| /tw/pricing | 匯成交價格方案｜自動化成交系統年費 US$1,197，含導入與教育訓練 |

### 新頁面
- `/tw/pricing`、`/pricing`：方案內容、六步驟導入、8 套工具自行訂閱 vs 一套搞定的成本比較、價格 FAQ

---

## 3. 建議網站架構（下一階段）

```
idealflow.ai
├── /                      英文：Asia／LINE 利基＋品牌信任（不去搶全球大詞）
│   ├── /pricing           ✅
│   ├── /line-crm          📋 "LINE CRM"、"CRM with LINE integration"
│   ├── /line-flex-message 📋 教學＋模板（拿模板換名單）
│   └── /compare/maac      📋 "Crescendo Lab MAAC alternative"
└── /tw                    繁中：主要流量與營收來源
    ├── /tw/pricing        ✅ → 叢集文：「中小企業行銷工具一年要花多少？8 套 SaaS vs 一站式」
    ├── /tw/line-crm       📋 LINE CRM／LINE 行銷自動化商業型支柱頁（從「LINE＋CRM＋自動成交」切入）
    ├── /tw/industries/    📋 coach-consultant（講師顧問）、beauty（美業）、fitness（健身）、clinic（診所）
    ├── /tw/compare/       📋 hubspot、maac（漸強）、vital-crm、teachify（寫法客觀，註明資料日期）
    ├── /tw/cases/         📋 亞瑟教練、Emma 老師（要真實數據＋授權）
    ├── /tw/blog/          📋 主題叢集：講座招生自動化／Google 評論（含合規）／預約提醒降低爽約／
    │                         名單跟進與 Excel→CRM／LINE Flex Message 非工程師教學
    └── /tw/resources      📋 電子書、Flex Message 模板（名單磁鐵）
```

**主要競品**（台灣）：漸強實驗室 MAAC、Omnichat（LINE 相關詞的權威）；ACTGSYS 藍圖思維（SEO 打法最像，有約 140 篇「關鍵字＋年份」文章和 14 個產業頁）；Zoho、Vital CRM、SimplyBook、Teachify。

**優先順序：**
1. ✅ 技術 SEO＋品牌 schema
2. ✅ 價格頁
3. **4 個產業頁**：講師顧問優先，競品幾乎沒人做
4. **部落格**：接上 CRM 部落格，跟 arthercoach-tw 的 `crm-blog` 做法一樣
5. LINE CRM 支柱頁
6. 比較頁
7. 長尾內容：Google 評論、預約提醒、名單跟進

**需要你提供的素材：** 產業頁用的真實客戶情境、案例頁的數據與授權、比較頁要比的競品方案（可以先由我查公開資料，再由你確認）。

---

## 4. 你要親自做的事（AI 沒辦法代勞）

1. **Google Search Console**：用 Cloudflare DNS 驗證 `idealflow.ai` → 提交 `https://idealflow.ai/sitemap.xml` → 對首頁、`/tw`、`/tw/pricing` 申請索引
2. **Bing Webmaster Tools**：可以直接從 Search Console 匯入（ChatGPT 搜尋會用到 Bing 索引）
3. **品牌社群帳號**：Facebook、LinkedIn、YouTube 官方頁建好後把網址給我，我會加進 Organization schema 的 `sameAs`
4. **Google 商家檔案**（匯鼎科技）
5. **英文 Book a Demo 表單的 CRM Webhook**：建好後填進 `src/lib/contact.ts` 的 `CONTACT_ENDPOINT`

---

## 5. 交給 AI Studio（AI Builder）處理的事

見 [ai-builder-instructions.md](./ai-builder-instructions.md)。
