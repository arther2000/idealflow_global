import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { useReveal } from "@/hooks/use-reveal";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/calendar")({
  head: () =>
    pageHead({
      path: "/calendar",
      title: "智能預約系統｜匯成交 iDealFlow.ai",
      description:
        "讓客戶自己約、系統自己提醒。無限量行事曆、團隊輪流分配、課程預約與自動提醒跟進，一次取代 Calendly、Acuity 等預約工具。",
    }),
  component: CalendarPage,
});

function CalendarPage() {
  useReveal();

  return (
    <>
      <SiteNav />
      <section className="subhero">
        <div className="wrap">
          <p className="crumb reveal">
            <Link to="/">首頁</Link>
            {" ／ "}
            <Link to="/" hash="features">
              核心功能
            </Link>
            {" ／ "}
            <b>智能預約系統</b>
          </p>
          <h1 className="reveal d1">
            讓客戶自己約
            <br />
            讓系統
            <span className="grad">自己提醒</span>
          </h1>
          <p className="sub reveal d2">
            別再用 LINE 來回敲時間了。客戶點連結挑時段，系統自動確認、自動提醒、自動跟進——
            <strong>你只要人準時出現就好</strong>。
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
      {/* 區塊一：無限量行事曆 */}
      <div className="fblock">
        <div className="wrap fb-grid">
          <div className="fb-txt reveal">
            <div className="eyebrow">UNLIMITED CALENDARS</div>
            <h3>
              <em>無限量</em>
              行事曆
              <br />
              一個人到一個團隊都適用
            </h3>
            <p>
              一對一諮詢、多人課程、團隊輪流接單、共同會議——不管你的預約長什麼樣子，都有對應的行事曆類型，而且數量不設限，不用再額外訂閱第三方預約工具。
            </p>
            <div className="replaces">
              <span className="rlabel">一套取代</span>
              <span className="rchip">Calendly</span>
              <span className="rchip">Acuity</span>
              <span className="rchip">OnceHub</span>
              <span className="rchip">Schedule Once</span>
            </div>
            <ul className="checklist">
              <li>無限量個人與團隊行事曆</li>
              <li>Round Robin 輪流分配給團隊成員</li>
              <li>多人課程與工作坊報名</li>
              <li>重複活動自動開放時段</li>
              <li>共同會議多位成員同時參與</li>
              <li>Google／Outlook 行事曆即時同步</li>
            </ul>
            <div className="fb-cta">
              <Link to="/booking" className="btn btn-navy">
                {"建立我的預約頁 "}
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
                <span>idealflow.ai / booking / arthur</span>
              </div>
              <div className="mock-pad">
                <div className="m-title">選擇方便的時段 · 一對一諮詢（30 分鐘）</div>
                <div className="m-cal">
                  <div className="mc-h">一</div>
                  <div className="mc-h">二</div>
                  <div className="mc-h">三</div>
                  <div className="mc-h">四</div>
                  <div className="mc-h">五</div>
                  <div className="mc-h">六</div>
                  <div className="mc-h">日</div>
                  <div className="mc">8</div>
                  <div className="mc soft">9</div>
                  <div className="mc">10</div>
                  <div className="mc busy">11</div>
                  <div className="mc soft">12</div>
                  <div className="mc">13</div>
                  <div className="mc">14</div>
                  <div className="mc soft">15</div>
                  <div className="mc">16</div>
                  <div className="mc busy">17</div>
                  <div className="mc">18</div>
                  <div className="mc soft">19</div>
                  <div className="mc">20</div>
                  <div className="mc">21</div>
                </div>
                <div style={{ marginTop: "14px" }}>
                  <span className="m-btn">確認預約 11/17（二）14:00 →</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 區塊二：預約更順 */}
      <div className="fblock">
        <div className="wrap fb-grid rev">
          <div className="fb-txt reveal">
            <div className="eyebrow">SEAMLESS SCHEDULING</div>
            <h3>
              從網站到 CRM
              <br />
              預約入口
              <em>無所不在</em>
            </h3>
            <p>
              客戶可以直接從你的網站、銷售頁或 LINE
              連結預約；你也能在後台聊天聊到一半，直接從聯絡人卡片幫客戶敲定時間。預約完成，名單同步進
              CRM，不用再抄來抄去。
            </p>
            <div className="replaces">
              <span className="rlabel">整合亮點</span>
              <span className="rchip">網站／漏斗嵌入</span>
              <span className="rchip">CRM 直接排程</span>
              <span className="rchip">LINE 連結分享</span>
            </div>
            <ul className="checklist">
              <li>從聯絡人卡片一鍵安排</li>
              <li>從銷售管道直接排程</li>
              <li>屏蔽私人時段，保護休息時間</li>
              <li>緩衝時間自動保留</li>
              <li>預約表單自動蒐集需求</li>
              <li>取消與改期自助完成</li>
            </ul>
            <div className="fb-cta">
              <Link to="/booking" className="btn btn-navy">
                {"把預約串進我的流程 "}
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
                <div className="m-title">今日預約</div>
                <div className="m-row">
                  <div className="m-av">王</div>
                  <div className="mi">
                    <b>王小明 · 一對一諮詢</b>
                    <span>10:00–10:30 · 已確認</span>
                  </div>
                  <span className="m-tag ok">已提醒</span>
                </div>
                <div className="m-row">
                  <div className="m-av o">陳</div>
                  <div className="mi">
                    <b>陳雅婷 · 企業導入會議</b>
                    <span>14:00–15:00 · 團隊輪流分配</span>
                  </div>
                  <span className="m-tag info">Amy 接單</span>
                </div>
                <div className="m-row">
                  <div className="m-av">李</div>
                  <div className="mi">
                    <b>週三瑜伽團體課</b>
                    <span>19:00–20:30 · 8／12 人報名</span>
                  </div>
                  <span className="m-tag hot">熱門</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 區塊三：自動提醒 */}
      <div className="fblock">
        <div className="wrap fb-grid">
          <div className="fb-txt reveal">
            <div className="eyebrow">NO-SHOW KILLER</div>
            <h3>
              自動提醒＋自動跟進
              <br />跟<em>放鳥</em>
              說再見
            </h3>
            <p>
              預約完成不是結束，是自動化的開始。LINE、Email、簡訊多管齊下提醒，沒出席的自動進跟進流程再約一次。出席率提升，就是營收提升。
            </p>
            <div className="replaces">
              <span className="rlabel">實測成效</span>
              <span className="rchip">亞瑟教練出席率 45%</span>
              <span className="rchip">Emma 老師出席率 56%+</span>
            </div>
            <ul className="checklist">
              <li>預約確認即時通知</li>
              <li>前一天＋當天自動提醒</li>
              <li>LINE／Email／簡訊多通路</li>
              <li>未出席自動再邀約</li>
              <li>出席後自動發後續資料</li>
              <li>出席數據完整追蹤</li>
            </ul>
            <div className="fb-cta">
              <Link to="/booking" className="btn btn-navy">
                {"提升我的出席率 "}
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
                <span>idealflow.ai / reminders</span>
              </div>
              <div className="mock-pad">
                <div className="m-flow">
                  <div className="m-node trigger">
                    <span className="ni">📅</span>
                    <span>
                      客戶完成預約
                      <small>觸發提醒流程</small>
                    </span>
                  </div>
                  <div className="m-link"></div>
                  <div className="m-node">
                    <span className="ni">💬</span>
                    <span>
                      LINE＋Email 確認通知
                      <small>立即發送</small>
                    </span>
                  </div>
                  <div className="m-link"></div>
                  <div className="m-node">
                    <span className="ni">⏰</span>
                    <span>
                      前一天 20:00 再提醒
                      <small>自動排程</small>
                    </span>
                  </div>
                  <div className="m-link"></div>
                  <div className="m-node">
                    <span className="ni">🔁</span>
                    <span>
                      沒出席 → 自動邀請改期
                      <small>名單不流失</small>
                    </span>
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
            <p className="lead">三個最常見的落地情境，看看預約系統怎麼幫你把時間變成營收。</p>
          </div>
          <div className="ugrid">
            <div className="ucard reveal">
              <span className="utag">顧問・教練</span>
              <h4>諮詢連結放進 LINE，聊完直接約</h4>
              <p>
                客戶聊到有興趣，丟出預約連結馬上敲定時間，
                <b>趁熱成交不冷場</b>
                。前一天自動提醒，幾乎不再被放鳥。
              </p>
            </div>
            <div className="ucard reveal d1">
              <span className="utag">課程・工作坊</span>
              <h4>團體課報名、點名、追蹤一條龍</h4>
              <p>
                多人課程行事曆開放報名，滿班自動關閉；上完課自動發回饋表單與下期優惠，
                <b>一班接一班自動滾動</b>。
              </p>
            </div>
            <div className="ucard reveal d2">
              <span className="utag">業務團隊</span>
              <h4>輪流分配，每個業務雨露均霑</h4>
              <p>
                詢盤預約用 Round Robin 自動輪流分給團隊成員，
                <b>不搶單、不漏單</b>
                ，主管在報表裡看每個人的成交進度。
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
              預約順了，
              <em>成交更快</em>
            </h2>
            <p className="lead">搭配其他功能，把預約前的引流和預約後的跟進全部自動化。</p>
          </div>
          <div className="mf-grid reveal">
            <Link to="/funnel" className="mf-card">
              <span className="di">
                <svg viewBox="0 0 24 24">
                  <path d="M3 4h18l-7 8v6l-4 2v-8L3 4z" />
                </svg>
              </span>
              銷售漏斗與網站建置
              <span className="arr">→</span>
            </Link>
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
      <section className="final">
        <div className="wrap">
          <h2 className="reveal">
            讓預約更簡單，
            <br />
            讓成交
            <span>更順暢</span>
          </h2>
          <p className="reveal d1">從今天起，敲時間這件事交給系統，你的行事曆自己會排滿。</p>
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
