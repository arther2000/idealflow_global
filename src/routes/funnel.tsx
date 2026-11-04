import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { useReveal } from "@/hooks/use-reveal";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/funnel")({
  head: () =>
    pageHead({
      path: "/funnel",
      title: "銷售漏斗與網站建置｜匯成交 iDealFlow.ai",
      description:
        "不會寫程式也能做出會成交的頁面。300+ 銷售漏斗模板、拖拉式編輯器、A/B 測試與漏斗分析，一次取代 ClickFunnels、Wix 等多套工具。",
    }),
  component: FunnelPage,
});

function FunnelPage() {
  useReveal();

  return (
    <>
      <SiteNav />
      {/* 子頁 Hero */}
      <section className="subhero">
        <div className="wrap">
          <p className="crumb reveal">
            <Link to="/">首頁</Link>
            {" ／ "}
            <Link to="/" hash="features">
              核心功能
            </Link>
            {" ／ "}
            <b>銷售漏斗與網站建置</b>
          </p>
          <h1 className="reveal d1">
            不會寫程式，
            <br />
            也能做出
            <span className="grad">會成交的頁面</span>
          </h1>
          <p className="sub reveal d2">
            拖拉就能建站，
            <strong>300+ 銷售漏斗模板</strong>
            直接套用。從報名頁、銷售頁到感謝頁一氣呵成，還內建 A/B 測試幫你越賣越準。
          </p>
          <div className="hero-ctas reveal d3">
            <Link to="/booking" className="btn btn-primary">
              {"免費報名講座 "}
              <span className="arr">→</span>
            </Link>
            <Link to="/" hash="cases" className="btn btn-ghost">
              看看別人怎麼用
            </Link>
          </div>
        </div>
      </section>
      {/* 區塊一：模板 */}
      <div className="fblock">
        <div className="wrap fb-grid">
          <div className="fb-txt reveal">
            <div className="eyebrow">TEMPLATES</div>
            <h3>
              <em>300+</em>
              {" 銷售漏斗模板"}
              <br />
              套上就能開賣
            </h3>
            <p>
              從零開始做頁面最花時間。我們準備了各行各業的現成模板——挑一個順眼的，換上你的文案和照片，今天就能上線收單。
            </p>
            <div className="replaces">
              <span className="rlabel">一套取代</span>
              <span className="rchip">ClickFunnels</span>
              <span className="rchip">Kartra</span>
              <span className="rchip">Kajabi</span>
              <span className="rchip">Wix</span>
              <span className="rchip">Lead Pages</span>
            </div>
            <ul className="checklist">
              <li>教練與顧問服務模板</li>
              <li>健康與健身產業模板</li>
              <li>行銷代理商模板</li>
              <li>身心靈與生活教練模板</li>
              <li>金融與房地產模板</li>
              <li>居家服務與在地店家模板</li>
            </ul>
            <div className="fb-cta">
              <Link to="/booking" className="btn btn-navy">
                {"開始建立我的第一個漏斗 "}
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
                <span>idealflow.ai / funnels / templates</span>
              </div>
              <div className="mock-pad">
                <div className="m-title">選擇模板開始 · 已為你篩選「講座報名」</div>
                <div className="m-grid2">
                  <div className="m-col">
                    <h6>
                      {"講座報名頁 "}
                      <b>熱門</b>
                    </h6>
                    <div className="m-line hi w80"></div>
                    <div className="m-line"></div>
                    <div className="m-line w60"></div>
                    <div style={{ marginTop: "10px" }}>
                      <span className="m-btn">套用模板</span>
                    </div>
                  </div>
                  <div className="m-col">
                    <h6>課程銷售頁</h6>
                    <div className="m-line w80"></div>
                    <div className="m-line"></div>
                    <div className="m-line w40"></div>
                  </div>
                  <div className="m-col">
                    <h6>諮詢預約頁</h6>
                    <div className="m-line w80"></div>
                    <div className="m-line"></div>
                    <div className="m-line w60"></div>
                  </div>
                  <div className="m-col">
                    <h6>感謝頁＋加購</h6>
                    <div className="m-line w60"></div>
                    <div className="m-line"></div>
                    <div className="m-line w40"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 區塊二：拖放編輯器 */}
      <div className="fblock">
        <div className="wrap fb-grid rev">
          <div className="fb-txt reveal">
            <div className="eyebrow">{"DRAG & DROP"}</div>
            <h3>
              拖拉式編輯器
              <br />
              想放哪，
              <em>就拖到哪</em>
            </h3>
            <p>
              找到想用的元素，拖進頁面就完成了。倒數計時器、表單問卷、FAQ、影片通通內建——你不需要是設計師，也能做出讓客戶想按下去的頁面。
            </p>
            <div className="replaces">
              <span className="rlabel">內建元件</span>
              <span className="rchip">一步／兩步結帳</span>
              <span className="rchip">倒數計時器</span>
              <span className="rchip">表單與問卷</span>
              <span className="rchip">影片託管</span>
            </div>
            <ul className="checklist">
              <li>自訂文字與按鈕樣式</li>
              <li>項目符號與 FAQ 區塊</li>
              <li>全域區段一改全站生效</li>
              <li>手機版自動適配</li>
              <li>自訂網域一鍵綁定</li>
              <li>還有更多元件持續新增</li>
            </ul>
            <div className="fb-cta">
              <Link to="/booking" className="btn btn-navy">
                {"體驗拖拉建站 "}
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
                <span>idealflow.ai / page-builder</span>
              </div>
              <div className="mock-pad">
                <div className="m-title">頁面編輯器</div>
                <div className="m-line hi w60"></div>
                <div className="m-line w80"></div>
                <div className="m-line"></div>
                <div className="m-row">
                  <div className="m-av o">⏱</div>
                  <div className="mi">
                    <b>倒數計時器</b>
                    <span>拖曳中…放開即插入</span>
                  </div>
                  <span className="m-tag hot">拖放</span>
                </div>
                <div className="m-row">
                  <div className="m-av">✎</div>
                  <div className="mi">
                    <b>報名表單</b>
                    <span>姓名・手機・Email</span>
                  </div>
                  <span className="m-tag info">已插入</span>
                </div>
                <div style={{ marginTop: "12px" }}>
                  <span className="m-btn">立即報名 →</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 區塊三：轉換工具 */}
      <div className="fblock">
        <div className="wrap fb-grid">
          <div className="fb-txt reveal">
            <div className="eyebrow">CONVERSION TOOLS</div>
            <h3>
              頁面好看是一回事
              <br />
              <em>會成交</em>
              是另一回事
            </h3>
            <p>
              流量進來之後才是重點。A/B
              測試找出更會賣的版本、棄單自動追回、一鍵加購拉高客單價——這些進階轉換武器，全部內建。
            </p>
            <div className="replaces">
              <span className="rlabel">一套取代</span>
              <span className="rchip">ActiveCampaign</span>
              <span className="rchip">HubSpot</span>
              <span className="rchip">Google Analytics 工具組</span>
            </div>
            <ul className="checklist">
              <li>A/B 拆分測試</li>
              <li>棄單自動跟進挽回</li>
              <li>一次性優惠（OTO）</li>
              <li>一鍵加購 Upsell</li>
              <li>交叉銷售 Cross-sell</li>
              <li>網站行為追蹤</li>
              <li>漏斗與營收詳細報表</li>
              <li>SEO 設定與 AI 建站助手</li>
            </ul>
            <div className="fb-cta">
              <Link to="/booking" className="btn btn-navy">
                {"讓頁面開始幫我賺錢 "}
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
                <span>idealflow.ai / ab-test</span>
              </div>
              <div className="mock-pad">
                <div className="m-title">A/B 測試進行中</div>
                <div className="m-grid2">
                  <div className="m-col">
                    <h6>版本 A</h6>
                    <div className="m-line w80"></div>
                    <div className="m-line w60"></div>
                    <div className="m-row" style={{ marginTop: "8px", marginBottom: "0" }}>
                      <div className="mi">
                        <b>轉換率 6.4%</b>
                        <span>463 筆成交</span>
                      </div>
                    </div>
                  </div>
                  <div className="m-col">
                    <h6>
                      {"版本 B "}
                      <b>勝出 🏆</b>
                    </h6>
                    <div className="m-line hi w80"></div>
                    <div className="m-line w60"></div>
                    <div className="m-row" style={{ marginTop: "8px", marginBottom: "0" }}>
                      <div className="mi">
                        <b>轉換率 7.2%</b>
                        <span>537 筆成交 ▲15.9%</span>
                      </div>
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
            <p className="lead">三個最常見的落地情境，看看漏斗系統怎麼幫你收單。</p>
          </div>
          <div className="ugrid">
            <div className="ucard reveal">
              <span className="utag">講師・講座</span>
              <h4>講座報名頁，一個下午就上線</h4>
              <p>
                {
                  "套用報名頁模板 → 換上講座資訊 → 串接報名表單。亞瑟教練用同一套流程承接政府補助案講座，搭配自動提醒把出席率做到 "
                }
                <b>45%</b>。
              </p>
            </div>
            <div className="ucard reveal d1">
              <span className="utag">知識變現</span>
              <h4>課程銷售頁＋一鍵加購</h4>
              <p>
                銷售頁收單後，感謝頁馬上跳出一次性優惠加購進階課程。客戶體驗順、客單價高，
                <b>半夜也能自動成交</b>。
              </p>
            </div>
            <div className="ucard reveal d2">
              <span className="utag">在地店家</span>
              <h4>活動頁蒐名單，導流到店</h4>
              <p>
                週年慶活動頁配上倒數計時器與優惠券表單，名單自動進 CRM 貼標籤，後續 LINE 自動推播
                <b>把人帶進店裡</b>。
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
              頁面做好了，
              <em>接下來呢？</em>
            </h2>
            <p className="lead">漏斗只是起點。看看系統的其他能力，把整條成交流程串起來。</p>
          </div>
          <div className="mf-grid reveal">
            <Link to="/email" className="mf-card">
              <span className="di">
                <svg viewBox="0 0 24 24">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-10 5L2 7" />
                </svg>
              </span>
              Email／LINE 行銷自動化
              <span className="arr">→</span>
            </Link>
            <Link to="/calendar" className="mf-card">
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
            <Link to="/automation" className="mf-card">
              <span className="di">
                <svg viewBox="0 0 24 24">
                  <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </span>
              自動化工作流程
              <span className="arr">→</span>
            </Link>
            <Link to="/ai-content" className="mf-card">
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
            <Link to="/reputation" className="mf-card">
              <span className="di">
                <svg viewBox="0 0 24 24">
                  <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </span>
              評價管理系統
              <span className="arr">→</span>
            </Link>
            <Link to="/crm" className="mf-card">
              <span className="di">
                <svg viewBox="0 0 24 24">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                </svg>
              </span>
              CRM 客戶管理
              <span className="arr">→</span>
            </Link>
          </div>
        </div>
      </section>
      {/* 尾段 CTA */}
      <section className="final">
        <div className="wrap">
          <h2 className="reveal">
            你的下一個頁面，
            <br />
            就是
            <span>會成交的那一個</span>
          </h2>
          <p className="reveal d1">300+ 模板已經準備好，剩下的就是把你的生意放上去。</p>
          <div className="hero-ctas reveal d2">
            <Link to="/booking" className="btn btn-primary">
              {"免費報名講座 "}
              <span className="arr">→</span>
            </Link>
            <Link to="/" hash="pricing" className="btn btn-ghost">
              查看方案內容
            </Link>
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
