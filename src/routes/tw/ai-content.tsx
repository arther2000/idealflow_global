import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { useReveal } from "@/hooks/use-reveal";
import { RegionBanner } from "@/components/site/RegionBanner";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/tw/ai-content")({
  head: () =>
    pageHead({
      breadcrumb: "AI 內容生成與社群排程",
      path: "/tw/ai-content",
      title: "AI 內容生成與社群排程｜匯成交 iDealFlow.ai",
      description:
        "一次生成、多平台同步發佈。AI 幫你寫貼文與文案，排程系統讓 Facebook、Instagram、TikTok、LinkedIn、YouTube 天天有內容，一次取代 Hootsuite、Buffer 等工具。",
    }),
  component: AiContentPage,
});

function AiContentPage() {
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
            <b>AI 內容生成與社群排程</b>
          </p>
          <h1 className="reveal d1">
            一次生成
            <br />
            <span className="grad">七個平台同步發佈</span>
          </h1>
          <p className="sub reveal d2">
            經營社群最累的不是沒靈感，是
            <strong>每天都要發、每個平台都要顧</strong>
            。讓 AI 幫你寫、排程系統幫你發，品牌曝光不斷線，你專心做生意。
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
      {/* 區塊一：多平台發佈 */}
      <div className="fblock">
        <div className="wrap fb-grid">
          <div className="fb-txt reveal">
            <div className="eyebrow">SOCIAL PLANNER</div>
            <h3>
              AI 社群策劃師
              <br />
              寫一篇，
              <em>發遍全平台</em>
            </h3>
            <p>
              同一篇內容，不用再複製貼上七次。在一個後台編輯好，勾選要發佈的平台，一鍵送出或排入時程——每個平台的格式，系統自動幫你調整好。
            </p>
            <div className="replaces">
              <span className="rlabel">一套取代</span>
              <span className="rchip">Hootsuite</span>
              <span className="rchip">Buffer</span>
              <span className="rchip">CoSchedule</span>
              <span className="rchip">Sprout Social</span>
            </div>
            <ul className="checklist">
              <li>Facebook／Instagram 同步發佈</li>
              <li>TikTok／X（Twitter）支援</li>
              <li>LinkedIn／Pinterest 支援</li>
              <li>YouTube 與 Shorts 上架</li>
              <li>無限貼文、無限排程</li>
              <li>定期貼文自動循環發佈</li>
            </ul>
            <div className="fb-cta">
              <Link to="/tw/booking" className="btn btn-navy">
                {"安排我的第一週貼文 "}
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
                <span>idealflow.ai / social-planner</span>
              </div>
              <div className="mock-pad">
                <div className="m-title">本週排程 · 5 則待發佈</div>
                <div className="m-row">
                  <div className="m-av o">FB</div>
                  <div className="mi">
                    <b>新品上市優惠開跑</b>
                    <span>週一 10:00 · FB＋IG</span>
                  </div>
                  <span className="m-tag ok">已排程</span>
                </div>
                <div className="m-row">
                  <div className="m-av">YT</div>
                  <div className="mi">
                    <b>客戶見證分享（Shorts）</b>
                    <span>週三 12:00 · YouTube＋TikTok</span>
                  </div>
                  <span className="m-tag ok">已排程</span>
                </div>
                <div className="m-row">
                  <div className="m-av o">IN</div>
                  <div className="mi">
                    <b>產業洞察長文</b>
                    <span>週五 09:00 · LinkedIn</span>
                  </div>
                  <span className="m-tag info">AI 草稿</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 區塊二：AI 文案 */}
      <div className="fblock">
        <div className="wrap fb-grid rev">
          <div className="fb-txt reveal">
            <div className="eyebrow">AI WRITER</div>
            <h3>
              沒靈感的時候
              <br />
              {"讓 "}
              <em>AI 先寫初稿</em>
            </h3>
            <p>
              給 AI 一個主題，它幫你生出貼文、Email
              標題、頁面文案的初稿。你只要順一順語氣、加上自己的觀點，產內容的速度直接翻好幾倍。
            </p>
            <div className="replaces">
              <span className="rlabel">生成範圍</span>
              <span className="rchip">社群貼文</span>
              <span className="rchip">Email 文案</span>
              <span className="rchip">頁面標題</span>
              <span className="rchip">部落格大綱</span>
            </div>
            <ul className="checklist">
              <li>依主題生成貼文草稿</li>
              <li>多種語氣風格可選</li>
              <li>一鍵改寫與延伸</li>
              <li>Email 主旨建議</li>
              <li>銷售頁文案起手式</li>
              <li>搭配排程直接發佈</li>
            </ul>
            <div className="fb-cta">
              <Link to="/tw/booking" className="btn btn-navy">
                {"讓 AI 幫我寫寫看 "}
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
                <span>idealflow.ai / ai-writer</span>
              </div>
              <div className="mock-pad">
                <div className="m-chat">
                  <div className="m-bub out">主題：週年慶優惠，語氣：親切、有急迫感</div>
                  <div className="m-bub in">
                    <span className="ai">AI 草稿</span>
                    老顧客們注意！週年慶只有這 7 天，全館課程 8 折起，名額有限，先搶先贏 🎉（附三個
                    hashtag 建議）
                  </div>
                  <div className="m-bub out">很好，幫我改成 IG 版本＋排程週一早上</div>
                  <div className="m-bub in">
                    <span className="ai">AI 動作</span>
                    已生成 IG 版本並排入週一 09:00 發佈 ✓
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 區塊三：內容行事曆 */}
      <div className="fblock">
        <div className="wrap fb-grid">
          <div className="fb-txt reveal">
            <div className="eyebrow">CONTENT CALENDAR</div>
            <h3>
              內容行事曆總覽
              <br />
              整個月的曝光
              <em>一眼掌握</em>
            </h3>
            <p>
              哪天發什麼、發到哪個平台、成效如何，全部攤在同一張行事曆上。空窗的日子一眼就看到，再也不會「啊，這週忘記發文了」。
            </p>
            <div className="replaces">
              <span className="rlabel">管理亮點</span>
              <span className="rchip">月曆視圖</span>
              <span className="rchip">成效追蹤</span>
              <span className="rchip">團隊協作</span>
            </div>
            <ul className="checklist">
              <li>月曆視圖總覽所有排程</li>
              <li>拖拉調整發佈日期</li>
              <li>貼文成效數據回收</li>
              <li>團隊成員分工審核</li>
              <li>熱門時段建議</li>
              <li>與行銷活動檔期對齊</li>
            </ul>
            <div className="fb-cta">
              <Link to="/tw/booking" className="btn btn-navy">
                {"規劃我的內容行事曆 "}
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
                <span>idealflow.ai / content-calendar</span>
              </div>
              <div className="mock-pad">
                <div className="m-title">11 月內容行事曆</div>
                <div className="m-cal">
                  <div className="mc-h">一</div>
                  <div className="mc-h">二</div>
                  <div className="mc-h">三</div>
                  <div className="mc-h">四</div>
                  <div className="mc-h">五</div>
                  <div className="mc-h">六</div>
                  <div className="mc-h">日</div>
                  <div className="mc busy">FB</div>
                  <div className="mc">·</div>
                  <div className="mc soft">YT</div>
                  <div className="mc">·</div>
                  <div className="mc busy">IG</div>
                  <div className="mc">·</div>
                  <div className="mc">·</div>
                  <div className="mc soft">IN</div>
                  <div className="mc busy">FB</div>
                  <div className="mc">·</div>
                  <div className="mc soft">TT</div>
                  <div className="mc">·</div>
                  <div className="mc busy">IG</div>
                  <div className="mc">·</div>
                </div>
                <div style={{ marginTop: "12px" }} className="m-line w60"></div>
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
            <p className="lead">三個最常見的落地情境，看看內容系統怎麼幫你把曝光變名單。</p>
          </div>
          <div className="ugrid">
            <div className="ucard reveal">
              <span className="utag">一人公司</span>
              <h4>週日排好一整週，平日專心接案</h4>
              <p>
                每週日花一小時，AI 生成＋排程七天份的貼文。
                <b>社群天天有動靜</b>
                ，客戶來詢問時你才發現：原來貼文一直在幫你賣。
              </p>
            </div>
            <div className="ucard reveal d1">
              <span className="utag">講師品牌</span>
              <h4>講座金句變成一個月的內容</h4>
              <p>
                一場講座的精華，拆成貼文、Shorts、LinkedIn 長文多平台發佈，
                <b>一份內容吃一個月</b>
                ，每篇都掛上報名連結導流。
              </p>
            </div>
            <div className="ucard reveal d2">
              <span className="utag">在地店家</span>
              <h4>每篇貼文，都是進店的入口</h4>
              <p>
                貼文附上預約連結與優惠券表單，社群流量直接變成 CRM 名單，
                <b>按讚的人變成上門的客人</b>。
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
              流量進來了，
              <em>然後呢？</em>
            </h2>
            <p className="lead">內容負責吸引人，這些功能負責把人變成客戶。</p>
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
            讓品牌曝光不斷線，
            <br />
            讓內容
            <span>自己去獲客</span>
          </h2>
          <p className="reveal d1">AI 寫、系統發、名單自己進來——這才是聰明的內容經營。</p>
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
