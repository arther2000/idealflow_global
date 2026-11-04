import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { FaqList, Qa } from "@/components/site/Faq";
import { useReveal } from "@/hooks/use-reveal";
import { RegionBanner } from "@/components/site/RegionBanner";
import { pageHead } from "@/lib/seo";
import type { FaqItem } from "@/lib/jsonld";

/** Visible FAQ — also emitted as FAQPage JSON-LD, so keep the two in one place. */
const FAQ: FaqItem[] = [
  {
    q: "匯成交 iDealFlow.ai 和其他 CRM 工具有什麼不同？",
    a: "一般 CRM 只做客戶管理，iDealFlow.ai 是一套完整的「自動化成交系統」：從名單蒐集、LINE／Email 自動追蹤、銷售漏斗、AI 對話回覆、預約排程到課程變現，全部在同一套系統完成。更重要的是，我們提供全球唯一的多語中文化套件與台灣在地導入支持。",
  },
  {
    q: "我不懂技術，導入會不會很困難？",
    a: "不會。方案內含完整教育訓練與導入支持：整合線上課程與線下實體教室，涵蓋系統操作、流程教學與導入基礎訓練，由團隊協助你依需求完成基礎導入，直到系統正式啟用。",
  },
  {
    q: "系統支援 LINE 嗎？符合台灣的使用習慣嗎？",
    a: "支援，而且是我們的核心優勢之一。LINE 套件由匯鼎科技團隊自行開發，是唯一支援 Flex Message 在地化應用的方案，完全符合台灣文化使用習慣，同時逐步開放原生支援台灣主流金流系統。",
  },
  {
    q: "底層引擎 GoHighLevel 可靠嗎？",
    a: "GoHighLevel 是 2018 年創立於美國德州達拉斯的 AI 驅動商業成長作業系統，目前賦能全球超過百萬家企業，提供 24/7 客服支援，每年舉辦 LevelUp／HighLevel Summit 年度峰會，功能持續更新、全球生態系完整。",
  },
  {
    q: "方案費用包含哪些內容？",
    a: "年費方案 US$1,197／年，包含以 GoHighLevel 為基底引擎的全功能系統（價值超過 NT$100,000）、教育培訓與線上學習資源、線上教育系統使用權，以及基礎導入與啟動協助。",
  },
  {
    q: "什麼樣的人適合使用 iDealFlow.ai？",
    a: "特別適合講師、顧問、教練、知識型創作者與中小企業，在地服務業、B2B 與電商品牌也都有現成打法。只要你的生意需要「把名單變成成交」，iDealFlow.ai 都能幫你自動化整個流程。",
  },
];

export const Route = createFileRoute("/tw/")({
  head: () =>
    pageHead({
      faq: FAQ,
      path: "/tw",
      title: "匯成交 iDealFlow.ai｜AI 自動化成交系統 — 讓成交自動發生",
      description:
        "別再為了做行銷養一堆工具。匯成交 iDealFlow.ai 把 CRM、LINE／Email 行銷、銷售漏斗、AI 客服、預約與課程系統整合成一套，名單一進來，系統就幫你跟到成交。台灣在地中文化與導入支持。",
    }),
  component: IndexPage,
});

function IndexPage() {
  useReveal();

  return (
    <>
      <RegionBanner current="zh" />
      <SiteNav locale="zh" />
      {/* ===== Hero ===== */}
      <section className="hero" id="top">
        <div className="hero-glow"></div>
        <div className="hero-glow g2"></div>
        <div className="wrap hero-inner">
          <div className="hero-badge reveal">
            <span className="dot"></span>
            更多流量 × 更多成交 × 更低成本
          </div>
          <h1 className="reveal d1">
            讓成交
            <span className="grad">自動發生</span>
            <br />
            讓系統成為你最強的數位員工
          </h1>
          <p className="hero-sub reveal d2">
            {"別再為了做行銷，同時養一堆工具。匯成交把 "}
            <strong>CRM、LINE／Email 跟進、銷售頁、預約、AI 客服與課程系統</strong>
            整合成一套——名單一進來，系統就開始幫你跟，一路跟到成交。
          </p>
          <div className="hero-ctas reveal d3">
            <Link to="/tw/booking" className="btn btn-primary">
              {"免費報名講座 "}
              <span className="arr">→</span>
            </Link>
            <a className="btn btn-ghost" href="#features">
              看看系統能幫我做什麼
            </a>
          </div>
          <div className="hero-stats reveal d4">
            <div className="hstat">
              <b>
                8<i>+</i>
              </b>
              <span>核心功能模組</span>
            </div>
            <div className="hstat">
              <b>
                500
                <i>+</i>
              </b>
              <span>SaaS 工具整合</span>
            </div>
            <div className="hstat">
              <b>
                1M
                <i>+</i>
              </b>
              <span>企業採用底層引擎</span>
            </div>
            <div className="hstat">
              <b>
                24
                <i>/7</i>
              </b>
              <span>全天候支援</span>
            </div>
          </div>
          <div className="dash reveal">
            <div className="dash-bar">
              <i></i>
              <i></i>
              <i></i>
              <span className="url">app.idealflow.ai / dashboard</span>
            </div>
            <div className="dash-body">
              <div className="kpi">
                <label>新客戶</label>
                <b>2,543</b> <span className="up">▲ 18%</span>
              </div>
              <div className="kpi">
                <label>預約數</label>
                <b>1,268</b> <span className="up">▲ 24%</span>
              </div>
              <div className="kpi">
                <label>成交金額</label>
                <b>$286,842</b> <span className="up">▲ 32%</span>
              </div>
              <div className="kpi">
                <label>成交轉換率</label>
                <b>27.4%</b> <span className="up">▲ 15.6%</span>
              </div>
              <div className="dash-lower">
                <div className="panel">
                  <h5>營收趨勢（近 12 週）</h5>
                  <div className="bars">
                    <i style={{ height: "32%" }}></i>
                    <i style={{ height: "44%" }}></i>
                    <i style={{ height: "38%" }}></i>
                    <i style={{ height: "56%" }}></i>
                    <i style={{ height: "48%" }}></i>
                    <i style={{ height: "66%" }}></i>
                    <i style={{ height: "58%" }}></i>
                    <i style={{ height: "74%" }}></i>
                    <i style={{ height: "70%" }}></i>
                    <i style={{ height: "86%" }}></i>
                    <i style={{ height: "80%" }}></i>
                    <i style={{ height: "100%" }}></i>
                  </div>
                </div>
                <div className="panel">
                  <h5>銷售漏斗 Pipeline</h5>
                  <div className="funnel-row">
                    <span>潛在客戶 Leads</span>
                    <b>658</b>
                  </div>
                  <div className="funnel-row">
                    <span>需求確認 Qualified</span>
                    <b>182</b>
                  </div>
                  <div className="funnel-row">
                    <span>報價中 Proposal</span>
                    <b>95</b>
                  </div>
                  <div className="funnel-row">
                    <span>已成交 Won</span>
                    <b className="tag">32 ✓</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== 底層引擎 ===== */}
      <div className="engine">
        <div className="wrap engine-inner">
          <div className="engine-txt reveal">
            <h3>
              {"以世界級底層平台，打造你的自動化成交系統 "}
              <span>· powered by GoHighLevel</span>
            </h3>
            <p>
              底層核心引擎採用 AI 驅動的商業成長作業系統 GoHighLevel（2018
              年創立於美國德州達拉斯），目前正在賦能全球超過百萬家企業，功能完整、持續更新、生態系遍佈全球。
            </p>
          </div>
          <div className="engine-badges reveal d1">
            <div className="ebadge">
              <b>2018</b>
              <span>創立年份</span>
            </div>
            <div className="ebadge">
              <b>1M+</b>
              <span>賦能企業</span>
            </div>
            <div className="ebadge">
              <b>24/7</b>
              <span>客服支援</span>
            </div>
          </div>
        </div>
      </div>
      {/* ===== 八大核心功能 ===== */}
      <section className="features" id="features">
        <div className="wrap">
          <div className="center reveal">
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              CORE FEATURES
            </div>
            <h2 className="h2">
              工具太多、月費太貴、資料四散？
              <br />
              <em>一套系統</em>
              通通搞定
            </h2>
            <p className="lead">
              你需要的行銷工具，這裡通通有——而且彼此串在一起。從名單進來到成交入帳，每個環節系統都幫你顧好。
            </p>
          </div>
          <div className="fgrid">
            <Link to="/tw/crm" className="fcard reveal">
              <span className="num">01</span>
              <div className="ficon">
                <svg viewBox="0 0 24 24">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h4>CRM 客戶管理</h4>
              <p>
                每一個名單從哪來、聊過什麼、進行到哪一步，全部一目了然。不再有名單躺在 Excel
                裡被遺忘。
              </p>
              <span className="more">
                {"了解更多 "}
                <span className="arr">→</span>
              </span>
            </Link>
            <Link to="/tw/email" className="fcard reveal d1">
              <span className="num">02</span>
              <div className="ficon">
                <svg viewBox="0 0 24 24">
                  <path d="M22 2 11 13" />
                  <path d="M22 2 15 22l-4-9-9-4 20-7z" />
                </svg>
              </div>
              <h4>LINE／Email 行銷自動化</h4>
              <p>
                寫一次，系統幫你寄到成交為止。依標籤與行為自動追蹤、提醒、培養客戶，雙軌推進不漏接。
              </p>
              <span className="more">
                {"了解更多 "}
                <span className="arr">→</span>
              </span>
            </Link>
            <Link to="/tw/funnel" className="fcard reveal d2">
              <span className="num">03</span>
              <div className="ficon">
                <svg viewBox="0 0 24 24">
                  <path d="M3 4h18l-7 8v6l-4 2v-8L3 4z" />
                </svg>
              </div>
              <h4>銷售漏斗＋網站</h4>
              <p>不會寫程式也能做出會成交的頁面。300+ 模板拖拉即用，內建 A/B 測試與漏斗分析。</p>
              <span className="more">
                {"了解更多 "}
                <span className="arr">→</span>
              </span>
            </Link>
            <div className="fcard reveal d3">
              <span className="num">04</span>
              <div className="ficon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 8V4H8" />
                  <rect x="4" y="8" width="16" height="12" rx="2" />
                  <path d="M2 14h2" />
                  <path d="M20 14h2" />
                  <path d="M15 13v2" />
                  <path d="M9 13v2" />
                </svg>
              </div>
              <h4>AI 自動回覆與分流</h4>
              <p>
                半夜的訊息也有人接。AI 智能應答、意圖分類、自動分派，LINE、Messenger、IG
                多通路都能聊。
              </p>
            </div>
            <Link to="/tw/calendar" className="fcard reveal">
              <span className="num">05</span>
              <div className="ficon">
                <svg viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4" />
                  <path d="M8 2v4" />
                  <path d="M3 10h18" />
                  <path d="m9 16 2 2 4-4" />
                </svg>
              </div>
              <h4>智能預約系統</h4>
              <p>
                讓客戶自己約、系統自己提醒。一對一諮詢、多人課程、團隊輪流分配通通支援，大幅降低放鳥率。
              </p>
              <span className="more">
                {"了解更多 "}
                <span className="arr">→</span>
              </span>
            </Link>
            <div className="fcard reveal d1">
              <span className="num">06</span>
              <div className="ficon">
                <svg viewBox="0 0 24 24">
                  <path d="M3 3v18h18" />
                  <path d="m7 15 4-6 4 3 5-7" />
                </svg>
              </div>
              <h4>數據追蹤與成效分析</h4>
              <p>錢花在哪、客人從哪來、卡在哪一關，儀表板一眼看懂。讓數據說話，讓成長有據可循。</p>
            </div>
            <div className="fcard reveal d2">
              <span className="num">07</span>
              <div className="ficon">
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <path d="m10 8 6 4-6 4V8z" />
                </svg>
              </div>
              <h4>線上課程系統</h4>
              <p>
                打造自己的課程平台、會員專區與學員社群，付款後自動開通、自動發證書——不用再被平台抽成。
              </p>
            </div>
            <Link to="/tw/automation" className="fcard reveal d3">
              <span className="num">08</span>
              <div className="ficon">
                <svg viewBox="0 0 24 24">
                  <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <h4>自動化工作流程</h4>
              <p>
                你睡覺時，系統還在幫你跟進客戶。表單、預約、付款皆可觸發，串接 CRM、通知、API 與 AI
                判斷。
              </p>
              <span className="more">
                {"了解更多 "}
                <span className="arr">→</span>
              </span>
            </Link>
          </div>
        </div>
      </section>
      {/* ===== 適用對象 ===== */}
      <section className="audience" id="audience">
        <div className="wrap">
          <div className="center reveal">
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              WHO IS IT FOR
            </div>
            <h2 className="h2">
              不管你做哪一行，
              <br />
              都有一條
              <em>自動成交</em>
              的路
            </h2>
            <p className="lead">
              四種生意型態，四套現成的自動化打法。找到你的那一條，剩下的交給系統。
            </p>
          </div>
          <div className="agrid">
            <div className="acard reveal">
              <div className="ahead">
                <div className="aicon">
                  <svg viewBox="0 0 24 24">
                    <path d="M3 21h18" />
                    <path d="M5 21V7l7-4 7 4v14" />
                    <path d="M9 21v-6h6v6" />
                  </svg>
                </div>
                <h4>在地服務業</h4>
              </div>
              <p className="aq">美容美髮、健身瑜伽、診所、餐飲——想不加人手，也接得住每一筆詢問？</p>
              <span className="loop">
                {"成交閉環：引流 → 進店 → 消費 → "}
                <b>回購 → 推薦</b>
              </span>
              <ul className="alist">
                <li>Google 評價自動邀請，好評數穩定累積</li>
                <li>預約自動提醒，客人放鳥率大幅下降</li>
                <li>AI 客服 24/7 接住每一則深夜訊息</li>
                <li>LINE／Email 自動回訪，喚醒沉睡客戶</li>
              </ul>
            </div>
            <div className="acard reveal d1">
              <div className="ahead">
                <div className="aicon">
                  <svg viewBox="0 0 24 24">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>
                <h4>講師・顧問・知識變現</h4>
              </div>
              <p className="aq">想讓課程和諮詢服務，24 小時都有人報名買單？</p>
              <span className="loop">
                {"成交閉環：引流 → 報名 → 上課 → "}
                <b>復購 → 推薦</b>
              </span>
              <ul className="alist">
                <li>講座報名頁快速上線，模板直接套用</li>
                <li>報名後 LINE＋Email 自動提醒，出席率有感提升</li>
                <li>線上課程、會員專區與學員社群一站搞定</li>
                <li>付款後自動開通權限，半夜也能成交</li>
              </ul>
            </div>
            <div className="acard reveal d2">
              <div className="ahead">
                <div className="aicon">
                  <svg viewBox="0 0 24 24">
                    <rect x="2" y="7" width="20" height="14" rx="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                </div>
                <h4>B2B 與代理商</h4>
              </div>
              <p className="aq">想讓詢盤量穩定成長，業務團隊不再漏單？</p>
              <span className="loop">
                {"成交閉環：引流 → 詢盤 → 跟進 → "}
                <b>成交</b>
              </span>
              <ul className="alist">
                <li>表單詢盤自動進 CRM，即時分派給業務</li>
                <li>培育信自動寄送，客戶熱度不冷場</li>
                <li>銷售管道視覺化，每一案進度一眼掌握</li>
                <li>來源數據即時統計，預算花在刀口上</li>
              </ul>
            </div>
            <div className="acard reveal d3">
              <div className="ahead">
                <div className="aicon">
                  <svg viewBox="0 0 24 24">
                    <circle cx="8" cy="21" r="1" />
                    <circle cx="19" cy="21" r="1" />
                    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                  </svg>
                </div>
                <h4>電商品牌</h4>
              </div>
              <p className="aq">想把流量變訂單，再把訂單變成回頭客？</p>
              <span className="loop">
                {"成交閉環：引流 → 進站 → 下單 → "}
                <b>回購</b>
              </span>
              <ul className="alist">
                <li>棄單自動挽回，把差一步的訂單追回來</li>
                <li>會員分眾再行銷，回購訊息剛好打中需求</li>
                <li>AI 客服全通路即時回覆、引導下單</li>
                <li>訂單、發票、出貨通知全自動寄送</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* ===== 三大特點 ===== */}
      <section className="three" id="three">
        <div className="wrap">
          <div className="center reveal">
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              WHY iDealFlow.ai
            </div>
            <h2 className="h2">
              為什麼選擇匯成交？
              <br />
              因為我們有
              <em>三大在地優勢</em>
            </h2>
            <p className="lead">
              買系統不難，難的是用起來。我們給你的不只是一套系統，而是一整套中文化、培訓與導入方案——確保你的團隊真的會用、真的有效。
            </p>
          </div>
          <div className="tgrid">
            <div className="tcard reveal">
              <div className="no">01</div>
              <div className="ticon">
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <h3>
                全球唯一
                <br />
                多語中文化套件
              </h3>
              <p>由匯鼎科技自行開發的完整中文化方案，讓世界級系統真正說你的語言。</p>
              <ul className="tlist">
                <li>支援繁體中文、簡體中文、日文</li>
                <li>介面在地化，大幅降低導入門檻</li>
                <li>提升團隊使用率與上手速度</li>
              </ul>
            </div>
            <div className="tcard reveal d1">
              <div className="no">02</div>
              <div className="ticon">
                <svg viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </div>
              <h3>
                LINE 套件＋
                <br />
                台灣金流原生支援
              </h3>
              <p>台灣人的生意在 LINE 上談。我們的訊息與金流整合，就是為這裡的習慣而生。</p>
              <ul className="tlist">
                <li>唯一支援 Flex Message 的在地化應用</li>
                <li>逐步開放原生支援台灣主流金流系統</li>
                <li>符合台灣文化與客戶溝通習慣</li>
              </ul>
            </div>
            <div className="tcard reveal d2">
              <div className="no">03</div>
              <div className="ticon">
                <svg viewBox="0 0 24 24">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <h3>
                完整教育訓練
                <br />
                與導入支持
              </h3>
              <p>整合線上課程與線下實體教室，陪你的團隊真正學會、真正落地使用。</p>
              <ul className="tlist">
                <li>系統操作、流程教學、導入基礎訓練</li>
                <li>線上教育系統＋實體教室雙軌學習</li>
                <li>依需求協助完成基礎導入與啟動</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* ===== 整合生態 ===== */}
      <section className="integrations" id="integrations">
        <div className="wrap">
          <div className="center reveal">
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              ECOSYSTEM
            </div>
            <h2 className="h2">
              {"對接全球 "}
              <em>500+</em>
              {" SaaS 生態鏈"}
            </h2>
            <p className="lead">
              你現在用的工具，大概率都能接。把分散工具整合成一套自動化成交系統，資料再也不用複製貼上。
            </p>
          </div>
          <div className="chips reveal">
            <span className="chip">
              <span className="cdot"></span>
              Meta / Facebook / Instagram
            </span>
            <span className="chip">
              <span className="cdot"></span>
              Google / Google Workspace
            </span>
            <span className="chip">
              <span className="cdot"></span>
              LINE 官方帳號
            </span>
            <span className="chip">
              <span className="cdot"></span>
              TikTok / LinkedIn
            </span>
            <span className="chip">
              <span className="cdot"></span>
              Slack / Monday / Notion
            </span>
            <span className="chip">
              <span className="cdot"></span>
              Shopify / QuickBooks
            </span>
            <span className="chip">
              <span className="cdot"></span>
              Zoom / Calendly
            </span>
            <span className="chip">
              <span className="cdot"></span>
              Mailchimp / Canva
            </span>
            <span className="chip">
              <span className="cdot"></span>
              Zapier / Make / n8n
            </span>
            <span className="chip">
              <span className="cdot"></span>
              API / Webhook 自建整合
            </span>
          </div>
          <p className="int-note reveal d1">
            涵蓋
            <b>社群與廣告、團隊協作、電商與金流、會議與預約、內容與行銷</b>
            五大類別，還能透過 API 與 Webhook 串接你的自建系統。
          </p>
        </div>
      </section>
      {/* ===== 成功案例 ===== */}
      <section className="cases" id="cases">
        <div className="wrap">
          <div className="center reveal">
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              SUCCESS STORIES
            </div>
            <h2 className="h2">
              成功案例：
              <em>把流量變成出席，把出席變成成交</em>
            </h2>
            <p className="lead">
              用 iDealFlow.ai 放大報名、出席、成交與課程經營——這些是真實發生的數字。
            </p>
          </div>
          <div className="cgrid">
            <div className="ccard reveal">
              <div className="chead">
                <div className="avatar">亞</div>
                <div>
                  <h4>亞瑟教練</h4>
                  <span>AI 政府補助案講師｜月入百萬級</span>
                </div>
              </div>
              <ul className="cpoints">
                <li>以 iDealFlow.ai 承接政府補助案教學流程</li>
                <li>整合報名頁、LINE／Email 提醒、名單追蹤與後續成交</li>
                <li>以自動化提升講座出席與成交效率</li>
                <li>獲中時新聞網等媒體專訪報導</li>
              </ul>
              <div className="cmetrics">
                <div className="metric">
                  <b>45%</b>
                  <span>講座出席率</span>
                </div>
                <div className="metric">
                  <b>百萬級</b>
                  <span>月收入等級</span>
                </div>
              </div>
            </div>
            <div className="ccard reveal d1">
              <div className="chead">
                <div className="avatar">E</div>
                <div>
                  <h4>Emma 老師</h4>
                  <span>親子教養導師｜知識變現導師品牌</span>
                </div>
              </div>
              <ul className="cpoints">
                <li>導入 iDealFlow.ai 後快速完成 onboarding</li>
                <li>運用自動化完成報名承接、訊息追蹤、講座出席與課程經營</li>
                <li>系統化經營名單，穩定成長中</li>
                <li>學員口碑轉介紹，持續帶進新名單</li>
              </ul>
              <div className="cmetrics">
                <div className="metric">
                  <b>10萬+</b>
                  <span>20 天月收入突破</span>
                </div>
                <div className="metric">
                  <b>56%+</b>
                  <span>講座出席率</span>
                </div>
              </div>
            </div>
          </div>
          <p className="cases-note reveal">
            從講師、顧問到教育品牌，iDealFlow.ai 都能幫你把名單變成營收。
          </p>
        </div>
      </section>
      {/* ===== 方案價格 ===== */}
      <section className="pricing" id="pricing">
        <div className="wrap">
          <div className="center reveal">
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              {"PRICING & ONBOARDING"}
            </div>
            <h2 className="h2">
              {"購買方案與 "}
              <em>Onboarding</em>
              {" 流程"}
            </h2>
            <p className="lead">
              從註冊到啟用，我們一路陪跑。報名後依你的需求協助完成基礎導入，快速開始。
            </p>
          </div>
          <div className="pwrap">
            <div className="pcard reveal">
              <span className="ribbon">★ 超值導入方案</span>
              <div className="price">
                <span className="cur">US$</span>
                1,197
                <small>{" / 年"}</small>
              </div>
              <p className="psub">取得以 GoHighLevel 為基底引擎的全功能系統</p>
              <ul className="plist">
                <li>
                  {"全功能系統（價值超過 "}
                  <b>NT$100,000</b>）
                </li>
                <li>教育培訓與線上學習資源</li>
                <li>線上教育系統使用權</li>
                <li>基礎導入與啟動協助</li>
                <li>全球唯一多語中文化套件</li>
              </ul>
              <Link to="/tw/start" className="btn btn-primary">
                {"了解 14 天啟動計畫 "}
                <span className="arr">→</span>
              </Link>
            </div>
            <div className="steps reveal d1">
              <h3>六步驟完成導入</h3>
              <p>由團隊全程陪跑，從點擊連結到正式啟用。</p>
              <div className="step">
                <div className="sn">1</div>
                <div>
                  <h5>點擊連結</h5>
                  <p>完成註冊與購買</p>
                </div>
              </div>
              <div className="step">
                <div className="sn">2</div>
                <div>
                  <h5>填寫表單</h5>
                  <p>提交報名與需求資料</p>
                </div>
              </div>
              <div className="step">
                <div className="sn">3</div>
                <div>
                  <h5>選擇導入方向</h5>
                  <p>例如：自動化、流程規劃、系統應用</p>
                </div>
              </div>
              <div className="step">
                <div className="sn">4</div>
                <div>
                  <h5>安排訓練</h5>
                  <p>由團隊安排啟動與教學</p>
                </div>
              </div>
              <div className="step">
                <div className="sn">5</div>
                <div>
                  <h5>開始學習</h5>
                  <p>到教室上課或線上學習</p>
                </div>
              </div>
              <div className="step">
                <div className="sn">6</div>
                <div>
                  <h5>正式啟用</h5>
                  <p>開始導入並啟動系統</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== FAQ ===== */}
      <section className="faq" id="faq">
        <div className="wrap">
          <div className="center reveal">
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              FAQ
            </div>
            <h2 className="h2">常見問題</h2>
          </div>
          <FaqList className="faq-list reveal">
            {FAQ.map((f) => (
              <Qa key={f.q} question={f.q}>
                <p>{f.a}</p>
              </Qa>
            ))}
          </FaqList>
        </div>
      </section>
      {/* ===== 尾段 CTA ===== */}
      <section className="final">
        <div className="wrap">
          <h2 className="reveal">
            讓每一個名單，
            <br />都<span>不再被浪費</span>
          </h2>
          <p className="reveal d1">現在就開始，讓匯成交 iDealFlow.ai 成為你最強的數位員工。</p>
          <div className="hero-ctas reveal d2">
            <Link to="/tw/booking" className="btn btn-primary">
              {"免費報名講座 "}
              <span className="arr">→</span>
            </Link>
            <a className="btn btn-ghost" href="#pricing">
              查看方案內容
            </a>
          </div>
        </div>
      </section>
      {/* ===== Footer ===== */}
      <SiteFooter locale="zh" />
    </>
  );
}
