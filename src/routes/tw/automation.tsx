import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { useReveal } from "@/hooks/use-reveal";
import { RegionBanner } from "@/components/site/RegionBanner";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/tw/automation")({
  head: () =>
    pageHead({
      breadcrumb: "自動化工作流程",
      path: "/tw/automation",
      title: "自動化工作流程｜匯成交 iDealFlow.ai",
      description:
        "你睡覺時，系統還在幫你跟進客戶。視覺化工作流、if/else 智能分支、AI 判斷與行動 App，一次取代 Zapier、Make、HubSpot 等自動化工具。",
    }),
  component: AutomationPage,
});

function AutomationPage() {
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
            <b>自動化工作流程</b>
          </p>
          <h1 className="reveal d1">
            你睡覺時，系統還在
            <br />
            <span className="grad">幫你跟進客戶</span>
          </h1>
          <p className="sub reveal d2">
            表單送出、預約完成、付款成功——每一個動作都能觸發下一步。
            <strong>拖拉式流程編輯器</strong>
            把重複的工作變成自動的，把你的時間還給你。
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
      {/* 區塊一：工作流 */}
      <div className="fblock">
        <div className="wrap fb-grid">
          <div className="fb-txt reveal">
            <div className="eyebrow">WORKFLOW ENGINE</div>
            <h3>
              視覺化工作流
              <br />
              把重複的事
              <em>全部自動化</em>
            </h3>
            <p>
              從名單跟進、團隊任務到銷售資料更新，通通可以設成自動。拖拉節點就能組流程，不用寫程式、也不用再付一套
              Zapier 的月費來把工具黏在一起。
            </p>
            <div className="replaces">
              <span className="rlabel">一套取代</span>
              <span className="rchip">Zapier</span>
              <span className="rchip">Make</span>
              <span className="rchip">ActiveCampaign</span>
              <span className="rchip">HubSpot</span>
            </div>
            <ul className="checklist">
              <li>自動發送 Email、簡訊、LINE</li>
              <li>自動變更銷售管道階段</li>
              <li>內部團隊即時通知</li>
              <li>進階 if／else 分支邏輯</li>
              <li>付款後即時開通課程權限</li>
              <li>自動更新 Google 試算表</li>
              <li>發送訊息到 Slack</li>
              <li>Webhook／API 串接外部系統</li>
            </ul>
            <div className="fb-cta">
              <Link to="/tw/booking" className="btn btn-navy">
                {"建立我的第一條工作流 "}
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
                <span>idealflow.ai / workflows</span>
              </div>
              <div className="mock-pad">
                <div className="m-flow">
                  <div className="m-node trigger">
                    <span className="ni">📝</span>
                    <span>
                      觸發：表單送出
                      <small>詢價表單</small>
                    </span>
                  </div>
                  <div className="m-link"></div>
                  <div className="m-node">
                    <span className="ni">🔀</span>
                    <span>
                      條件判斷：預算 ≥ 10 萬？
                      <small>if / else 分支</small>
                    </span>
                  </div>
                  <div className="m-link"></div>
                  <div className="m-node">
                    <span className="ni">👤</span>
                    <span>
                      是 → 指派資深業務＋LINE 通知
                      <small>15 分鐘內回電</small>
                    </span>
                  </div>
                  <div className="m-link"></div>
                  <div className="m-node">
                    <span className="ni">✉️</span>
                    <span>
                      否 → 進入培育信序列
                      <small>自動加溫再跟進</small>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 區塊二：AI 判斷 */}
      <div className="fblock">
        <div className="wrap fb-grid rev">
          <div className="fb-txt reveal">
            <div className="eyebrow">AI DECISION</div>
            <h3>
              接上 AI 智能判斷
              <br />
              流程
              <em>自己會思考</em>
            </h3>
            <p>
              自動化不只是照劇本走。流程中可以串接
              AI，讓系統讀懂客戶的訊息內容：是詢價？是客訴？還是想預約？判斷完自動分類、自動回覆、自動派給對的人。
            </p>
            <div className="replaces">
              <span className="rlabel">AI 能力</span>
              <span className="rchip">意圖分類</span>
              <span className="rchip">智能回覆</span>
              <span className="rchip">自動貼標</span>
            </div>
            <ul className="checklist">
              <li>AI 讀懂訊息意圖自動分流</li>
              <li>依內容自動貼標籤分群</li>
              <li>AI 生成個人化回覆草稿</li>
              <li>複雜問題自動轉真人接手</li>
              <li>判斷結果寫回 CRM 紀錄</li>
              <li>搭配 n8n 延伸更多 AI 應用</li>
            </ul>
            <div className="fb-cta">
              <Link to="/tw/booking" className="btn btn-navy">
                {"讓 AI 進我的流程 "}
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
                  <div className="m-bub in">你們的課程方案適合我們公司嗎？大概 15 人要上。</div>
                  <div className="m-bub out">
                    <span className="ai">AI 判定：企業培訓・高意願</span>
                    當然可以！我們有專為企業設計的方案，方便幫您安排 30
                    分鐘線上諮詢，進一步了解需求嗎？
                  </div>
                  <div className="m-bub in">好啊，怎麼約？</div>
                  <div className="m-bub out">
                    <span className="ai">AI 動作：發送預約連結</span>
                    這是預約連結，挑個方便的時段，我們線上見 👉
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 區塊三：行動 App */}
      <div className="fblock">
        <div className="wrap fb-grid">
          <div className="fb-txt reveal">
            <div className="eyebrow">MOBILE APP</div>
            <h3>
              行動 App 隨身帶著走
              <br />
              不在電腦前，
              <em>生意照樣跑</em>
            </h3>
            <p>
              在外面跑客戶、在店裡忙、在高鐵上——打開手機就能回訊息、改預約、發合約收款。系統在雲端跑，你在哪裡都是辦公室。
            </p>
            <div className="replaces">
              <span className="rlabel">支援平台</span>
              <span className="rchip">iOS</span>
              <span className="rchip">Android</span>
            </div>
            <ul className="checklist">
              <li>Email、簡訊、通話集中管理</li>
              <li>隨時安排與改動預約</li>
              <li>手機發送合約與發票</li>
              <li>任務管理不漏接</li>
              <li>CRM 名單隨身查</li>
              <li>即時推播重要通知</li>
            </ul>
            <div className="fb-cta">
              <Link to="/tw/booking" className="btn btn-navy">
                {"把生意裝進口袋 "}
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
                <span>iDealFlow App</span>
              </div>
              <div className="mock-pad">
                <div className="m-title">今日待辦 · 3 件</div>
                <div className="m-row">
                  <div className="m-av o">📞</div>
                  <div className="mi">
                    <b>回電：張先生詢價</b>
                    <span>AI 判定高意願 · 15 分鐘內</span>
                  </div>
                  <span className="m-tag hot">緊急</span>
                </div>
                <div className="m-row">
                  <div className="m-av">📄</div>
                  <div className="mi">
                    <b>發送合約：林小姐</b>
                    <span>顧問服務 · 待簽署</span>
                  </div>
                  <span className="m-tag info">進行中</span>
                </div>
                <div className="m-row">
                  <div className="m-av">💰</div>
                  <div className="mi">
                    <b>收款確認：週三工作坊</b>
                    <span>8 筆已入帳</span>
                  </div>
                  <span className="m-tag ok">完成</span>
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
            <p className="lead">三個最常見的落地情境，看看自動化怎麼幫你省下每天重複的工。</p>
          </div>
          <div className="ugrid">
            <div className="ucard reveal">
              <span className="utag">名單分流</span>
              <h4>詢盤進來 15 分鐘內就有人接</h4>
              <p>
                表單送出 → AI 判斷意願 → 高意願自動指派業務＋LINE 通知。
                <b>速度就是成交率</b>
                ，慢一天回覆，客戶早就找別人了。
              </p>
            </div>
            <div className="ucard reveal d1">
              <span className="utag">課程開通</span>
              <h4>半夜付款，權限秒開通</h4>
              <p>
                客戶刷卡成功 → 自動開通課程與會員權限 → 寄出歡迎信與上課指南。
                <b>你在睡覺，onboarding 已經做完了</b>。
              </p>
            </div>
            <div className="ucard reveal d2">
              <span className="utag">內部協作</span>
              <h4>成交當下，全公司該知道的都知道</h4>
              <p>
                案子進到「已成交」→ 自動通知財務開發票、通知客服啟動服務、更新 Google 試算表報表。
                <b>不用開會交接，流程自己跑</b>。
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
              流程自動了，
              <em>還差什麼？</em>
            </h2>
            <p className="lead">自動化是引擎，搭配這些功能，整套成交系統才算完整。</p>
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
            <Link to="/tw/crm" className="mf-card">
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
      <section className="final">
        <div className="wrap">
          <h2 className="reveal">
            讓客戶流程自動運轉，
            <br />
            讓你
            <span>專注在成交</span>
          </h2>
          <p className="reveal d1">重複的工作交給系統，你的時間拿去做只有你能做的事。</p>
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
