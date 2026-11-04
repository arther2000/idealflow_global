import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { RegionBanner } from "@/components/site/RegionBanner";
import { FaqList, Qa } from "@/components/site/Faq";
import { useReveal } from "@/hooks/use-reveal";
import type { FaqItem } from "@/lib/jsonld";
import { pageHead } from "@/lib/seo";

/** Visible FAQ — also emitted as FAQPage JSON-LD. */
const FAQ: FaqItem[] = [
  {
    q: "計畫的費用是多少？包含哪些內容？",
    a: "年費 US$1,197／年（平均每天約 NT$108）。內容包含：iDealFlow.ai 全功能系統（無限漏斗、網站、CRM、預約、Email／LINE 行銷、課程系統、AI 工具）、預約／金流／評價三大已配置模組、五天實操課程、全球唯一多語中文化＋LINE 套件、每週線上答疑與學員社群。",
  },
  {
    q: "價格不能再優惠嗎？",
    a: "換個角度算：同樣的功能分開訂閱，每月至少 NT$34,000 起，還不含串接與學習成本；請顧問做一套自動化流程，報價從十幾萬起跳。這個計畫把「工具＋培訓＋方案」整合成每天一杯拿鐵的價格，省下的時間成本遠超過這筆投資。而且隨著導入服務名額增加，價格只會往上調——現在加入就是鎖住最低價。",
  },
  {
    q: "加入後如果覺得不適合怎麼辦？",
    a: "所以我們把諮詢放在最前面：報名前先由團隊免費評估你的生意型態、名單來源與導入方向，確認適合才開始。加入後有完整的陪跑機制，任何卡關都有每週答疑和技術支援接住你——我們的目標是你真的用起來，而不是賣完就消失。",
  },
  {
    q: "系統穩定可靠嗎？",
    a: "匯成交的底層引擎是全球超過百萬家企業使用的 AI 驅動商業成長作業系統，提供 24/7 客服支援、功能持續更新、全球生態系完整；匯鼎科技在地團隊再提供中文化套件、LINE 套件與導入支持。",
  },
];

export const Route = createFileRoute("/tw/pricing")({
  head: () =>
    pageHead({
      path: "/tw/pricing",
      title: "匯成交價格方案｜自動化成交系統年費 US$1,197，含導入與教育訓練｜iDealFlow.ai",
      description:
        "匯成交 iDealFlow.ai 年費 US$1,197（約每天 NT$108），含全功能系統、中文化套件、LINE 套件、教育訓練與導入協助。比較分開訂閱 8 套工具每月 NT$34,000+ 的真實成本。",
      breadcrumb: "價格方案",
      product: true,
      faq: FAQ,
    }),
  component: TwPricingPage,
});

function TwPricingPage() {
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
            <b>價格方案</b>
          </p>
          <h1 className="reveal d1">
            {"一套系統的價格，"}
            <br />
            <span className="grad">取代八套工具</span>
          </h1>
          <p className="sub reveal d2">
            CRM、LINE／Email 行銷、銷售漏斗、預約、AI
            客服、課程、評價、自動化——全部包含在年費裡，沒有按名單數量加價。
          </p>
          <div className="hero-ctas reveal d3">
            <Link to="/tw/booking" className="btn btn-primary">
              預約 1 對 1 諮詢 <span className="arr">→</span>
            </Link>
            <Link to="/tw/start" className="btn btn-ghost">
              了解 14 天啟動計畫
            </Link>
          </div>
        </div>
      </section>

      <section className="pricing">
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
              <p className="psub">取得世界級底層引擎打造的全功能系統</p>
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

      <section className="compare">
        <div className="wrap">
          <div className="center reveal">
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              DO THE MATH
            </div>
            <h2 className="h2">
              {"自己拼裝工具 vs "}
              <em>匯成交一套搞定</em>
            </h2>
            <p className="lead">
              同樣的功能，如果一套一套分開訂閱，每個月要付多少？我們幫你算過了。
            </p>
          </div>
          <div className="cmp-table reveal">
            <div className="cmp-head">
              <div>功能需求</div>
              <div>分開訂閱（月費）</div>
              <div className="hi-col">匯成交</div>
            </div>
            <div className="cmp-row">
              <div className="cl">CRM 客戶管理</div>
              <div className="cm">約 NT$6,000</div>
              <div className="cr">✓ 內含</div>
            </div>
            <div className="cmp-row">
              <div className="cl">Email 行銷平台</div>
              <div className="cm">約 NT$4,000</div>
              <div className="cr">✓ 內含</div>
            </div>
            <div className="cmp-row">
              <div className="cl">銷售漏斗＋建站工具</div>
              <div className="cm">約 NT$6,000</div>
              <div className="cr">✓ 內含</div>
            </div>
            <div className="cmp-row">
              <div className="cl">預約排程系統</div>
              <div className="cm">約 NT$3,000</div>
              <div className="cr">✓ 內含</div>
            </div>
            <div className="cmp-row">
              <div className="cl">社群排程管理</div>
              <div className="cm">約 NT$4,000</div>
              <div className="cr">✓ 內含</div>
            </div>
            <div className="cmp-row">
              <div className="cl">AI 文案工具</div>
              <div className="cm">約 NT$3,000</div>
              <div className="cr">✓ 內含</div>
            </div>
            <div className="cmp-row">
              <div className="cl">自動化串接（Zapier 類）</div>
              <div className="cm">約 NT$4,500</div>
              <div className="cr">✓ 內含</div>
            </div>
            <div className="cmp-row">
              <div className="cl">線上課程平台</div>
              <div className="cm">約 NT$3,500</div>
              <div className="cr">✓ 內含</div>
            </div>
            <div className="cmp-row total">
              <div className="cl">每月支出</div>
              <div className="cm">NT$34,000+</div>
              <div className="cr">約 NT$3,300</div>
            </div>
          </div>
          <p className="cmp-note reveal">
            而且分開訂閱還要自己串接、資料不互通、出問題各家客服踢皮球——
            <b>整合本身，就是最大的價值。</b>
          </p>
          <div className="guarantee reveal">
            <div className="gseal">
              <b>100%</b>
              <span>安心導入</span>
            </div>
            <div>
              <h5>安心導入承諾</h5>
              <p>
                報名前先免費諮詢，由團隊評估你的生意型態是否適合；加入後由專人陪跑導入訓練，直到系統正式啟用為止。我們要的是你真的用起來，不是只賣你一套系統。
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="faq">
        <div className="wrap">
          <div className="center reveal">
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              FAQ
            </div>
            <h2 className="h2">價格常見問題</h2>
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
            把預算花在成長，
            <br />
            <span>不是工具月費</span>
          </h2>
          <p className="reveal d1">先免費諮詢，由團隊評估你的生意型態適不適合，再決定。</p>
          <div className="hero-ctas reveal d2">
            <Link to="/tw/booking" className="btn btn-primary">
              預約 1 對 1 諮詢 <span className="arr">→</span>
            </Link>
          </div>
        </div>
      </section>
      <SiteFooter locale="zh" />
    </>
  );
}
