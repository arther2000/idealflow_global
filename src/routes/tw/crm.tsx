import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { useReveal } from "@/hooks/use-reveal";
import { RegionBanner } from "@/components/site/RegionBanner";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/tw/crm")({
  head: () =>
    pageHead({
      breadcrumb: "CRM 客戶管理",
      path: "/tw/crm",
      title: "CRM 客戶管理｜匯成交 iDealFlow.ai",
      description:
        "每一個名單，都不再被浪費。無限聯絡人、集中對話中心、視覺化銷售管道，把銷售、行銷與客服整合在同一個平台，一次取代 Salesforce、HubSpot、Zoho 等工具。",
    }),
  component: CrmPage,
});

function CrmPage() {
  useReveal();

  return (
    <>
      <RegionBanner current="zh" />
      <SiteNav locale="zh" />
      <section className="subhero">
        <div className="wrap">
          <p className="crumb reveal">
            <Link to="/tw">首頁</Link>
            {" ／ "}
            <Link to="/tw" hash="features">
              核心功能
            </Link>
            {" ／ "}
            <b>CRM 客戶管理</b>
          </p>
          <h1 className="reveal d1">
            每一個名單
            <br />都<span className="grad">不再被浪費</span>
          </h1>
          <p className="sub reveal d2">
            名單躺在 Excel、對話散在 LINE、進度記在腦袋裡——這就是成交漏掉的原因。把
            <strong>銷售、行銷、客服整合在同一個平台</strong>
            ，每個客戶從哪來、聊到哪、卡在哪，一眼看清楚。
          </p>
          <div className="hero-ctas reveal d3">
            <Link to="/tw/booking" className="btn btn-primary">
              {"免費報名講座 "}
              <span className="arr">→</span>
            </Link>
            <Link to="/tw" hash="cases" className="btn btn-ghost">
              看看別人怎麼用
            </Link>
          </div>
        </div>
      </section>
      {/* 區塊一：完整客戶檔案 */}
      <div className="fblock">
        <div className="wrap fb-grid">
          <div className="fb-txt reveal">
            <div className="eyebrow">CONTACTS</div>
            <h3>
              <em>無限聯絡人</em>
              <br />
              每位客戶一份完整檔案
            </h3>
            <p>
              從第一次填表到最後一次成交，每一次互動都自動記錄在客戶檔案裡。標籤分群、自訂欄位、消費金額——不管名單有幾萬筆，都不另外加價。
            </p>
            <div className="replaces">
              <span className="rlabel">一套取代</span>
              <span className="rchip">Salesforce</span>
              <span className="rchip">HubSpot</span>
              <span className="rchip">Zoho</span>
              <span className="rchip">Agile CRM</span>
            </div>
            <ul className="checklist">
              <li>聯絡人數量無上限</li>
              <li>來源與互動歷程自動記錄</li>
              <li>多標籤分群精準行銷</li>
              <li>自訂欄位彈性分組</li>
              <li>客戶累計營收一目了然</li>
              <li>備註與團隊協作指派</li>
            </ul>
            <div className="fb-cta">
              <Link to="/tw/booking" className="btn btn-navy">
                {"把名單搬進系統 "}
                <span className="arr">→</span>
              </Link>
            </div>
          </div>
          <div className="fb-vis reveal d1">
            <div className="mock">
              <div className="mock-bar">
                <i></i>
                <i></i>
                <i></i>
                <span>idealflow.ai / contacts</span>
              </div>
              <div className="mock-pad">
                <div className="m-title">聯絡人 · 共 4,730 位</div>
                <div className="m-row">
                  <div className="m-av">王</div>
                  <div className="mi">
                    <b>王小明</b>
                    <span>來源：FB 廣告 · 2 小時前互動</span>
                  </div>
                  <span className="m-tag hot">高意願</span>
                </div>
                <div className="m-row">
                  <div className="m-av o">李</div>
                  <div className="mi">
                    <b>李美玲</b>
                    <span>來源：LINE 好友 · 課程學員</span>
                  </div>
                  <span className="m-tag ok">VIP</span>
                </div>
                <div className="m-row">
                  <div className="m-av">張</div>
                  <div className="mi">
                    <b>張志強</b>
                    <span>來源：網站表單 · 待報價</span>
                  </div>
                  <span className="m-tag info">跟進中</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 區塊二：集中對話 */}
      <div className="fblock">
        <div className="wrap fb-grid rev">
          <div className="fb-txt reveal">
            <div className="eyebrow">UNIFIED INBOX</div>
            <h3>
              LINE、FB、Email…
              <br />
              所有對話
              <em>一個收件匣</em>
            </h3>
            <p>
              客戶今天用 LINE 問、明天用 IG 回、後天寄
              Email——以前你要開五個視窗，現在全部進同一個對話中心。誰還沒回、誰在等報價，再也不會漏。
            </p>
            <div className="replaces">
              <span className="rlabel">支援通路</span>
              <span className="rchip">LINE</span>
              <span className="rchip">Messenger</span>
              <span className="rchip">Instagram</span>
              <span className="rchip">WhatsApp</span>
              <span className="rchip">Email／SMS</span>
            </div>
            <ul className="checklist">
              <li>全通路訊息集中管理</li>
              <li>對話自動綁定客戶檔案</li>
              <li>AI 建議回覆快速送出</li>
              <li>指派團隊成員接手</li>
              <li>未回覆訊息自動提醒</li>
              <li>對話紀錄永久保存</li>
            </ul>
            <div className="fb-cta">
              <Link to="/tw/booking" className="btn btn-navy">
                {"整合我的對話通路 "}
                <span className="arr">→</span>
              </Link>
            </div>
          </div>
          <div className="fb-vis reveal d1">
            <div className="mock">
              <div className="mock-bar">
                <i></i>
                <i></i>
                <i></i>
                <span>idealflow.ai / conversations</span>
              </div>
              <div className="mock-pad">
                <div className="m-chat">
                  <div className="m-bub in">請問你們的企業方案怎麼算？（來自 LINE）</div>
                  <div className="m-bub out">
                    您好！方案依人數與需求客製，方便約 30 分鐘線上聊聊嗎？
                  </div>
                  <div className="m-bub in">我剛剛也有寄需求表到你們信箱（來自 Email）</div>
                  <div className="m-bub out">
                    <span className="ai">已自動合併同一位客戶</span>
                    收到了！資料已幫您整理好，諮詢時直接討論 👌
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 區塊三：pipeline */}
      <div className="fblock">
        <div className="wrap fb-grid">
          <div className="fb-txt reveal">
            <div className="eyebrow">SALES PIPELINE</div>
            <h3>
              視覺化銷售管道
              <br />
              每一筆錢
              <em>卡在哪都知道</em>
            </h3>
            <p>
              從潛在客戶到成交入帳，拖拉卡片就能推進階段。每個階段有幾案、值多少錢、卡多久了，整個團隊的業績狀況攤開來看，該補刀的案子馬上補。
            </p>
            <div className="replaces">
              <span className="rlabel">管理亮點</span>
              <span className="rchip">拖拉推進</span>
              <span className="rchip">金額統計</span>
              <span className="rchip">卡關警示</span>
            </div>
            <ul className="checklist">
              <li>一鍵拖拉推進銷售階段</li>
              <li>各階段案件數與金額統計</li>
              <li>停留過久自動提醒跟進</li>
              <li>階段變更觸發自動化</li>
              <li>多條管道分開管理</li>
              <li>成交率與週期報表</li>
            </ul>
            <div className="fb-cta">
              <Link to="/tw/booking" className="btn btn-navy">
                {"看清楚我的成交流程 "}
                <span className="arr">→</span>
              </Link>
            </div>
          </div>
          <div className="fb-vis reveal d1">
            <div className="mock">
              <div className="mock-bar">
                <i></i>
                <i></i>
                <i></i>
                <span>idealflow.ai / pipeline</span>
              </div>
              <div className="mock-pad">
                <div className="m-title">銷售管道 · 本月 NT$1,240,000</div>
                <div className="m-pipe">
                  <div className="m-col">
                    <h6>
                      {"洽談中 "}
                      <b>12</b>
                    </h6>
                    <div className="m-card">
                      王小明
                      <span>企業導入 · $180K</span>
                    </div>
                    <div className="m-card">
                      林公司
                      <span>年約方案 · $95K</span>
                    </div>
                  </div>
                  <div className="m-col">
                    <h6>
                      {"報價中 "}
                      <b>6</b>
                    </h6>
                    <div className="m-card">
                      張志強
                      <span>顧問服務 · $120K</span>
                    </div>
                    <div className="m-card">
                      陳工作室
                      <span>課程包 · $45K</span>
                    </div>
                  </div>
                  <div className="m-col">
                    <h6>
                      {"已成交 "}
                      <b>9</b>
                    </h6>
                    <div className="m-card">
                      李美玲 ✓<span>VIP 方案 · $220K</span>
                    </div>
                    <div className="m-card">
                      周先生 ✓<span>年約 · $150K</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 情境案例 */}
      <section className="usecases">
        <div className="wrap">
          <div className="center reveal">
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              REAL SCENARIOS
            </div>
            <h2 className="h2">實際上，大家都這樣用</h2>
            <p className="lead">三個最常見的落地情境，看看 CRM 怎麼幫你把名單變營收。</p>
          </div>
          <div className="ugrid">
            <div className="ucard reveal">
              <span className="utag">講師・顧問</span>
              <h4>講座名單自動進系統，貼好標籤等跟進</h4>
              <p>
                報名的、出席的、舉手想諮詢的，自動貼上不同標籤。亞瑟教練靠這套流程管理政府補助案講座名單，
                <b>後續成交有條不紊</b>。
              </p>
            </div>
            <div className="ucard reveal d1">
              <span className="utag">業務團隊</span>
              <h4>交接不再靠記憶，離職也不怕斷線</h4>
              <p>
                每個客戶的完整互動都在系統裡，新業務接手
                <b>五分鐘進入狀況</b>
                ，不會因為人員異動掉了快成交的單。
              </p>
            </div>
            <div className="ucard reveal d2">
              <span className="utag">中小企業</span>
              <h4>老闆手機一滑，全公司業績盡收眼底</h4>
              <p>
                本月成交多少、多少案在報價、誰的單卡住了——
                <b>不用等週會報告</b>
                ，打開 App 就知道要盯哪裡。
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* 其他功能 */}
      <section className="morefeat">
        <div className="wrap">
          <div className="center reveal">
            <h2 className="h2">
              名單管好了，
              <em>讓它動起來</em>
            </h2>
            <p className="lead">CRM 是地基，搭配這些功能，名單才會自己往成交走。</p>
          </div>
          <div className="mf-grid reveal">
            <Link to="/tw/funnel" className="mf-card">
              <span className="di">
                <svg viewBox="0 0 24 24">
                  <path d="M3 4h18l-7 8v6l-4 2v-8L3 4z" />
                </svg>
              </span>
              銷售漏斗與網站建置
              <span className="arr">→</span>
            </Link>
            <Link to="/tw/email" className="mf-card">
              <span className="di">
                <svg viewBox="0 0 24 24">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-10 5L2 7" />
                </svg>
              </span>
              Email／LINE 行銷自動化
              <span className="arr">→</span>
            </Link>
            <Link to="/tw/calendar" className="mf-card">
              <span className="di">
                <svg viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4" />
                  <path d="M8 2v4" />
                  <path d="M3 10h18" />
                </svg>
              </span>
              智能預約系統
              <span className="arr">→</span>
            </Link>
            <Link to="/tw/automation" className="mf-card">
              <span className="di">
                <svg viewBox="0 0 24 24">
                  <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </span>
              自動化工作流程
              <span className="arr">→</span>
            </Link>
            <Link to="/tw/ai-content" className="mf-card">
              <span className="di">
                <svg viewBox="0 0 24 24">
                  <path d="M12 3v18" />
                  <path d="M5 8c4-3 10-3 14 0" />
                  <path d="M5 16c4 3 10 3 14 0" />
                </svg>
              </span>
              AI 內容生成與社群排程
              <span className="arr">→</span>
            </Link>
            <Link to="/tw/reputation" className="mf-card">
              <span className="di">
                <svg viewBox="0 0 24 24">
                  <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </span>
              評價管理系統
              <span className="arr">→</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="final">
        <div className="wrap">
          <h2 className="reveal">
            讓每一個名單，
            <br />都<span>物盡其用</span>
          </h2>
          <p className="reveal d1">獲客成本越來越貴，把手上的名單管好，就是最划算的成長。</p>
          <div className="hero-ctas reveal d2">
            <Link to="/tw/booking" className="btn btn-primary">
              {"免費報名講座 "}
              <span className="arr">→</span>
            </Link>
            <Link to="/tw" hash="pricing" className="btn btn-ghost">
              查看方案內容
            </Link>
          </div>
        </div>
      </section>
      <SiteFooter locale="zh" />
    </>
  );
}
