import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { RegionBanner } from "@/components/site/RegionBanner";
import { FaqList, Qa } from "@/components/site/Faq";
import { featureLinks } from "@/components/site/feature-links";
import { useReveal } from "@/hooks/use-reveal";
import type { FaqItem } from "@/lib/jsonld";
import { pageHead } from "@/lib/seo";

/** Visible FAQ — also emitted as FAQPage JSON-LD. */
const FAQ: FaqItem[] = [
  {
    q: "GoHighLevel 是什麼？",
    a: "GoHighLevel（HighLevel）是 2018 年創立於美國德州達拉斯的 AI 商業成長作業系統，把 CRM、銷售漏斗與網站、Email／簡訊行銷、預約、線上課程、評價管理與自動化工作流程整合在同一個平台，全球超過百萬家企業使用。",
  },
  {
    q: "GoHighLevel 有中文介面嗎？",
    a: "原版 GoHighLevel 以英文介面為主。匯成交 iDealFlow.ai 以 GoHighLevel 為底層引擎，並加上匯鼎科技自行開發的多語中文化套件，支援繁體中文、簡體中文與日文，讓團隊不用面對英文後台。",
  },
  {
    q: "GoHighLevel 在台灣怎麼買？價格多少？",
    a: "可以直接向 HighLevel 官方訂閱英文版（官網月費方案從 US$97／月起，實際以 HighLevel 官網公告為準），或透過匯成交 iDealFlow.ai 取得中文化版本：年費 US$1,197，內含全功能系統、中文化套件、LINE 套件、教育訓練與基礎導入協助。",
  },
  {
    q: "GoHighLevel 可以串接 LINE 嗎？",
    a: "原版 GoHighLevel 沒有原生 LINE 整合，通常要透過 Zapier、Make 等第三方工具串接。匯成交提供自行開發的 LINE 套件，支援 Flex Message，讓 LINE 官方帳號的訊息、標籤與自動化直接在系統裡運作。",
  },
  {
    q: "GoHighLevel 適合單一中小企業使用嗎？",
    a: "適合。GoHighLevel 原本多由行銷代理商使用，但它的 CRM、漏斗、預約與自動化功能同樣適合講師、顧問、在地服務業、B2B 與電商。匯成交提供中文教育訓練與導入支持，降低單一企業自己摸索的門檻。",
  },
];

const COMPARE: { item: string; ghl: string; idf: string }[] = [
  { item: "後台介面語言", ghl: "以英文為主", idf: "繁體中文、簡體中文、日文" },
  {
    item: "LINE 官方帳號整合",
    ghl: "無原生整合，需第三方串接",
    idf: "自行開發 LINE 套件，支援 Flex Message",
  },
  { item: "台灣金流", ghl: "以 Stripe 等國際金流為主", idf: "逐步開放原生支援台灣主流金流" },
  { item: "教育訓練", ghl: "英文線上資源，自行學習", idf: "中文線上課程＋實體教室，雙軌學習" },
  { item: "導入協助", ghl: "自行設定", idf: "依需求協助完成基礎導入與啟動" },
  {
    item: "價格",
    ghl: "官網月費 US$97 起（以 HighLevel 官網為準）",
    idf: "年費 US$1,197，含系統、中文化、培訓與導入",
  },
];

export const Route = createFileRoute("/tw/gohighlevel")({
  head: () =>
    pageHead({
      path: "/tw/gohighlevel",
      title: "GoHighLevel 中文版是什麼？台灣價格、評價與 LINE 串接｜匯成交 iDealFlow.ai",
      description:
        "GoHighLevel 中文版完整介紹：原版與匯成交中文化版本的差異（繁中介面、LINE Flex Message、台灣金流、中文教育訓練）、台灣購買方式與價格、常見問題。",
      breadcrumb: "GoHighLevel 中文版",
      product: true,
      faq: FAQ,
    }),
  component: TwGoHighLevelPage,
});

function TwGoHighLevelPage() {
  useReveal();

  return (
    <>
      <RegionBanner current="zh" />
      <SiteNav locale="zh" />
      <section className="subhero">
        <div className="wrap">
          <p className="crumb reveal">
            <Link to="/tw">首頁</Link>
            {" / "}
            <b>GoHighLevel 中文版</b>
          </p>
          <h1 className="reveal d1">
            GoHighLevel 中文版
            <br />
            <span className="grad">台灣在地化的 HighLevel</span>
          </h1>
          <p className="sub reveal d2">
            匯成交 iDealFlow.ai 以 <strong>GoHighLevel</strong> 為底層引擎，加上
            <strong>繁體中文介面、LINE 套件、台灣金流與中文教育訓練</strong>
            ——同樣世界級的功能，用你熟悉的語言和工具。
          </p>
          <div className="hero-ctas reveal d3">
            <Link to="/tw/booking" className="btn btn-primary">
              預約 1 對 1 諮詢 <span className="arr">→</span>
            </Link>
            <Link to="/tw/pricing" className="btn btn-ghost">
              查看價格方案
            </Link>
          </div>
        </div>
      </section>

      <section className="usecases">
        <div className="wrap">
          <div className="center reveal">
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              WHAT IS GOHIGHLEVEL
            </div>
            <h2 className="h2">
              GoHighLevel 是什麼？
              <br />
              <em>一套取代整疊行銷工具</em>的成長作業系統
            </h2>
            <p className="lead">
              GoHighLevel（HighLevel）2018
              年創立於美國德州達拉斯，目前賦能全球超過百萬家企業。它把原本要分開訂閱的工具整合成一個平台，資料彼此串通。
            </p>
          </div>
          <div className="ugrid">
            <div className="ucard reveal">
              <span className="utag">整合</span>
              <h4>CRM、漏斗、行銷、預約一次到位</h4>
              <p>
                名單、對話、銷售管道、Email／簡訊、預約、課程與評價都在同一個系統，
                <b>不用再複製貼上資料</b>。
              </p>
            </div>
            <div className="ucard reveal d1">
              <span className="utag">自動化</span>
              <h4>表單、預約、付款都能觸發流程</h4>
              <p>
                設定一次工作流程，系統就會自動提醒、貼標籤、分派業務、寄送培育訊息，
                <b>你睡覺時也在跟進客戶</b>。
              </p>
            </div>
            <div className="ucard reveal d2">
              <span className="utag">生態系</span>
              <h4>對接 500+ SaaS 工具</h4>
              <p>
                Meta、Google、Zoom、Shopify、Zapier、Make 等常用工具都能串接，也能透過 API 與
                Webhook
                <b>接上你的自建系統</b>。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="compare">
        <div className="wrap">
          <div className="center reveal">
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              GOHIGHLEVEL VS iDEALFLOW
            </div>
            <h2 className="h2">
              原版 GoHighLevel vs <em>匯成交中文化版本</em>
            </h2>
            <p className="lead">底層功能相同，差別在台灣團隊真正用得起來的那一段。</p>
          </div>
          <div className="cmp-table reveal">
            <div className="cmp-head">
              <div>項目</div>
              <div>原版 GoHighLevel</div>
              <div className="hi-col">匯成交 iDealFlow.ai</div>
            </div>
            {COMPARE.map((r) => (
              <div className="cmp-row" key={r.item}>
                <div className="cl">{r.item}</div>
                <div className="cm">{r.ghl}</div>
                <div className="cr">{r.idf}</div>
              </div>
            ))}
          </div>
          <p className="cmp-note reveal">
            GoHighLevel 官方價格參考 2026 年 11 月官網公告，實際方案與價格以 HighLevel 官網為準。
          </p>
        </div>
      </section>

      <section className="morefeat">
        <div className="wrap">
          <div className="center reveal">
            <h2 className="h2">
              GoHighLevel 的<em>核心功能</em>
            </h2>
            <p className="lead">每一個模組都已完成中文化，點進去看實際怎麼用。</p>
          </div>
          <div className="mf-grid reveal">
            {featureLinks("zh").map((f) => (
              <Link key={f.to} className="mf-card" to={f.to}>
                <span className="di">
                  <svg viewBox="0 0 24 24">{f.icon}</svg>
                </span>
                {f.label}
                <span className="arr">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="faq">
        <div className="wrap">
          <div className="center reveal">
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              FAQ
            </div>
            <h2 className="h2">GoHighLevel 常見問題</h2>
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

      <section className="final">
        <div className="wrap">
          <h2 className="reveal">
            想用 GoHighLevel，
            <br />
            又不想<span>自己摸索英文後台</span>？
          </h2>
          <p className="reveal d1">先預約免費諮詢，我們幫你評估適不適合、怎麼導入最快。</p>
          <div className="hero-ctas reveal d2">
            <Link to="/tw/booking" className="btn btn-primary">
              預約 1 對 1 諮詢 <span className="arr">→</span>
            </Link>
            <Link to="/tw/start" className="btn btn-ghost">
              了解 14 天啟動計畫
            </Link>
          </div>
        </div>
      </section>
      <SiteFooter locale="zh" />
    </>
  );
}
