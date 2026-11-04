import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { useReveal } from "@/hooks/use-reveal";
import { RegionBanner } from "@/components/site/RegionBanner";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/tw/email")({
  head: () =>
    pageHead({
      breadcrumb: "Email／LINE 行銷自動化",
      path: "/tw/email",
      title: "LINE／Email 行銷自動化工具｜名單自動跟進到成交｜匯成交 iDealFlow.ai",
      description:
        "寫一次，系統幫你寄到成交為止。拖拉式 Email 編輯器、精美範本、AI 自動化旅程與 LINE 雙軌推進，一次取代 Mailchimp、ActiveCampaign 等工具。",
    }),
  component: EmailPage,
});

function EmailPage() {
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
            <b>Email／LINE 行銷自動化</b>
          </p>
          <h1 className="reveal d1">
            寫一次，系統幫你
            <br />
            <span className="grad">寄到成交為止</span>
          </h1>
          <p className="sub reveal d2">
            拖拉式編輯器做出漂亮的信，AI 自動化決定
            <strong>什麼時候寄、寄給誰、寄什麼</strong>
            。再搭配 LINE 訊息雙軌推進——台灣客戶在哪裡，訊息就跟到哪裡。
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
      {/* 區塊一：編輯器 */}
      <div className="fblock">
        <div className="wrap fb-grid">
          <div className="fb-txt reveal">
            <div className="eyebrow">EMAIL BUILDER</div>
            <h3>
              拖拉式 Email 編輯器
              <br />
              好看的信
              <em>自己就能做</em>
            </h3>
            <p>
              不用求設計師，也不用跟 HTML
              搏鬥。想放圖片、影片還是購物車按鈕，拖進去就完成，而且每一封都自動適配手機閱讀。
            </p>
            <div className="replaces">
              <span className="rlabel">一套取代</span>
              <span className="rchip">Mailchimp</span>
              <span className="rchip">ActiveCampaign</span>
              <span className="rchip">Aweber</span>
              <span className="rchip">Constant Contact</span>
            </div>
            <ul className="checklist">
              <li>無限量建立與發送</li>
              <li>圖片、影片自由插入</li>
              <li>購物車與按鈕元件</li>
              <li>手機閱讀自動適配</li>
              <li>寄件網域自訂</li>
              <li>開信與點擊追蹤</li>
            </ul>
            <div className="fb-cta">
              <Link to="/tw/booking" className="btn btn-navy">
                {"做出我的第一封信 "}
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
                <span>idealflow.ai / email-builder</span>
              </div>
              <div className="mock-pad">
                <div className="m-title">新春感謝季 EDM · 編輯中</div>
                <div className="m-line hi w60"></div>
                <div className="m-line"></div>
                <div className="m-line w80"></div>
                <div className="m-row">
                  <div className="m-av o">▶</div>
                  <div className="mi">
                    <b>影片區塊</b>
                    <span>拖曳中…放開即插入</span>
                  </div>
                  <span className="m-tag hot">拖放</span>
                </div>
                <div className="m-line w60"></div>
                <div style={{ marginTop: "10px" }}>
                  <span className="m-btn">領取專屬優惠 →</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 區塊二：範本 */}
      <div className="fblock">
        <div className="wrap fb-grid rev">
          <div className="fb-txt reveal">
            <div className="eyebrow">TEMPLATES</div>
            <h3>
              各行各業的
              <em>精美信件範本</em>
              <br />
              不用再從空白開始
            </h3>
            <p>
              每一封信都從零設計太燒時間。挑一個符合你產業的範本，改改文字就能寄出——把時間留給真正重要的事：想清楚要對客戶說什麼。
            </p>
            <div className="replaces">
              <span className="rlabel">範本涵蓋</span>
              <span className="rchip">教練與商業指導</span>
              <span className="rchip">顧問諮詢</span>
              <span className="rchip">健康保健</span>
              <span className="rchip">行銷代理</span>
            </div>
            <ul className="checklist">
              <li>歡迎信與自我介紹序列</li>
              <li>講座與活動邀請信</li>
              <li>節慶檔期促銷信</li>
              <li>電子報 Newsletter 版型</li>
              <li>回訪與喚醒信</li>
              <li>持續新增中</li>
            </ul>
            <div className="fb-cta">
              <Link to="/tw/booking" className="btn btn-navy">
                {"瀏覽範本庫 "}
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
                <span>idealflow.ai / email-templates</span>
              </div>
              <div className="mock-pad">
                <div className="m-title">範本庫</div>
                <div className="m-grid2">
                  <div className="m-col">
                    <h6>
                      {"講座邀請 "}
                      <b>熱門</b>
                    </h6>
                    <div className="m-line hi w80"></div>
                    <div className="m-line w60"></div>
                  </div>
                  <div className="m-col">
                    <h6>歡迎序列</h6>
                    <div className="m-line w80"></div>
                    <div className="m-line w40"></div>
                  </div>
                  <div className="m-col">
                    <h6>檔期促銷</h6>
                    <div className="m-line w60"></div>
                    <div className="m-line w80"></div>
                  </div>
                  <div className="m-col">
                    <h6>電子報</h6>
                    <div className="m-line w80"></div>
                    <div className="m-line w60"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 區塊三：AI 自動化 */}
      <div className="fblock">
        <div className="wrap fb-grid">
          <div className="fb-txt reveal">
            <div className="eyebrow">AI AUTOMATION</div>
            <h3>
              AI 自動化旅程
              <br />
              每個客戶都走
              <em>自己的劇本</em>
            </h3>
            <p>
              排程寄信只是入門。真正的威力在於：依照客戶的標籤、點擊、觀看行為自動觸發下一步——有人點了連結就加溫跟進，沒開信的換個標題再寄一次。每個人收到的，都是為他準備的。
            </p>
            <div className="replaces">
              <span className="rlabel">進階能力</span>
              <span className="rchip">行為觸發</span>
              <span className="rchip">if/else 邏輯分支</span>
              <span className="rchip">A/B 測試</span>
            </div>
            <ul className="checklist">
              <li>依標籤、點擊、觀看自動觸發</li>
              <li>數百種動作的邏輯分支</li>
              <li>所有回信集中在對話中心管理</li>
              <li>智慧排程，挑最好的時間寄</li>
              <li>Email 標題 A/B 測試</li>
              <li>搭配 LINE 訊息雙軌推進</li>
            </ul>
            <div className="fb-cta">
              <Link to="/tw/booking" className="btn btn-navy">
                {"建立我的自動化旅程 "}
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
                <span>idealflow.ai / journeys</span>
              </div>
              <div className="mock-pad">
                <div className="m-flow">
                  <div className="m-node trigger">
                    <span className="ni">⚡</span>
                    <span>
                      觸發：報名講座表單
                      <small>新名單進入旅程</small>
                    </span>
                  </div>
                  <div className="m-link"></div>
                  <div className="m-node">
                    <span className="ni">✉️</span>
                    <span>
                      寄出歡迎信＋LINE 提醒
                      <small>立即發送</small>
                    </span>
                  </div>
                  <div className="m-link"></div>
                  <div className="m-node">
                    <span className="ni">🔀</span>
                    <span>
                      有開信嗎？
                      <small>if / else 分支判斷</small>
                    </span>
                  </div>
                  <div className="m-link"></div>
                  <div className="m-node">
                    <span className="ni">🎯</span>
                    <span>
                      開了 → 邀約諮詢｜沒開 → 換標題再寄
                      <small>自動分流</small>
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
            <p className="lead">三個最常見的落地情境，看看自動化訊息怎麼幫你養出成交。</p>
          </div>
          <div className="ugrid">
            <div className="ucard reveal">
              <span className="utag">講座提醒</span>
              <h4>報名後自動提醒，出席率有感提升</h4>
              <p>
                {
                  "報名當下寄確認信、前三天 LINE 提醒、當天早上再推一次。亞瑟教練靠這套組合把講座出席率做到 "
                }
                <b>45%</b>
                {"，親子教養導師 Emma 老師更達到 "}
                <b>56%+</b>。
              </p>
            </div>
            <div className="ucard reveal d1">
              <span className="utag">名單加溫</span>
              <h4>五封歡迎序列，把陌生名單變熟客</h4>
              <p>
                新名單進來自動走五封信的旅程：自我介紹 → 價值內容 → 案例見證 → 常見疑問 → 邀約。
                <b>等你想起來要跟進時，系統早就跟完了</b>。
              </p>
            </div>
            <div className="ucard reveal d2">
              <span className="utag">喚醒回購</span>
              <h4>90 天沒動靜？自動發喚醒優惠</h4>
              <p>
                系統自動偵測久未互動的客戶，發送專屬回購優惠。
                <b>沉睡名單不用人工翻</b>
                ，每一分獲客成本都用到最後一滴。
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
              訊息會跟進了，
              <em>還能更自動</em>
            </h2>
            <p className="lead">把預約、頁面、CRM 一起串起來，整條成交流程都不用自己盯。</p>
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
            讓每一次溝通，
            <br />都<span>更接近成交</span>
          </h2>
          <p className="reveal d1">
            從今天起，跟進客戶這件事交給系統，你只要負責出現在成交那一刻。
          </p>
          <div className="hero-ctas reveal d2">
            <Link to="/tw/booking" className="btn btn-primary">
              {"免費報名講座 "}
              <span className="arr">→</span>
            </Link>
            <Link to="/tw/pricing" className="btn btn-ghost">
              查看方案內容
            </Link>
          </div>
        </div>
      </section>
      <SiteFooter locale="zh" />
    </>
  );
}
