import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { useReveal } from "@/hooks/use-reveal";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/reputation")({
  head: () =>
    pageHead({
      path: "/reputation",
      title: "評價管理系統｜匯成交 iDealFlow.ai",
      description:
        "讓滿意的客人，自動變成你的五星好評。自動邀請 Google 評論、集中回覆管理、網站評價展示小工具，把口碑變成最強的獲客管道。",
    }),
  component: ReputationPage,
});

function ReputationPage() {
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
            <b>評價管理系統</b>
          </p>
          <h1 className="reveal d1">
            讓滿意的客人
            <br />
            自動變成你的
            <span className="grad">五星好評</span>
          </h1>
          <p className="sub reveal d2">
            十個滿意的客人，九個不會主動留評論——
            <strong>不是不願意，是忘記了</strong>
            。系統在對的時機自動邀請，把每一次好的服務體驗，累積成看得見的口碑。
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
      {/* 區塊一：自動邀請 */}
      <div className="fblock">
        <div className="wrap fb-grid">
          <div className="fb-txt reveal">
            <div className="eyebrow">REVIEW REQUESTS</div>
            <h3>
              抓準時機
              <br />
              <em>自動邀請</em>
              客戶留評
            </h3>
            <p>
              消費完成、課程結束、服務滿意的當下，就是邀請評論的黃金時間。系統自動透過簡訊、Email 或
              LINE 送出邀請連結，客人一鍵就能留下 Google 評論。
            </p>
            <div className="replaces">
              <span className="rlabel">一套取代</span>
              <span className="rchip">Trustpilot</span>
              <span className="rchip">其他評論管理工具</span>
            </div>
            <ul className="checklist">
              <li>成交後自動發送評論邀請</li>
              <li>手動邀請一鍵送出</li>
              <li>自訂邀請時機與話術</li>
              <li>簡訊／Email／LINE 多通路</li>
              <li>未回應自動溫柔提醒</li>
              <li>評論數量不設上限</li>
            </ul>
            <div className="fb-cta">
              <Link to="/booking" className="btn btn-navy">
                {"開始累積我的好評 "}
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
                <span>idealflow.ai / reputation</span>
              </div>
              <div className="mock-pad">
                <div className="m-flow">
                  <div className="m-node trigger">
                    <span className="ni">✅</span>
                    <span>
                      服務完成／結帳成功
                      <small>觸發評論邀請流程</small>
                    </span>
                  </div>
                  <div className="m-link"></div>
                  <div className="m-node">
                    <span className="ni">💬</span>
                    <span>
                      LINE 發送感謝＋評論連結
                      <small>2 小時後自動送出</small>
                    </span>
                  </div>
                  <div className="m-link"></div>
                  <div className="m-node">
                    <span className="ni">⭐</span>
                    <span>
                      客戶留下 Google 五星評論
                      <small>自動記錄回 CRM</small>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 區塊二：集中管理 */}
      <div className="fblock">
        <div className="wrap fb-grid rev">
          <div className="fb-txt reveal">
            <div className="eyebrow">REVIEW INBOX</div>
            <h3>
              所有評論
              <br />
              <em>一個後台</em>
              看光光
            </h3>
            <p>
              新評論進來即時通知，直接在後台回覆，不用再切換平台。好評快速感謝、負評第一時間妥善處理——回覆速度，就是品牌給人的感覺。
            </p>
            <div className="replaces">
              <span className="rlabel">管理亮點</span>
              <span className="rchip">即時通知</span>
              <span className="rchip">站內回覆</span>
              <span className="rchip">團隊協作</span>
            </div>
            <ul className="checklist">
              <li>新評論即時推播通知</li>
              <li>後台直接回覆 Google 評論</li>
              <li>AI 建議回覆草稿</li>
              <li>負評警示優先處理</li>
              <li>評論趨勢統計報表</li>
              <li>指派團隊成員跟進</li>
            </ul>
            <div className="fb-cta">
              <Link to="/booking" className="btn btn-navy">
                {"把評論管起來 "}
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
                <span>idealflow.ai / reviews</span>
              </div>
              <div className="mock-pad">
                <div className="m-title">評論收件匣 · 平均 4.8 ★</div>
                <div className="m-row">
                  <div className="m-av">王</div>
                  <div className="mi">
                    <b>
                      {"王小姐 "}
                      <span className="m-stars">★★★★★</span>
                    </b>
                    <span>老師教得超細心，環境也很舒服！</span>
                  </div>
                  <span className="m-tag ok">已回覆</span>
                </div>
                <div className="m-row">
                  <div className="m-av o">張</div>
                  <div className="mi">
                    <b>
                      {"張先生 "}
                      <span className="m-stars">★★★★★</span>
                    </b>
                    <span>預約很方便，服務有效率，推！</span>
                  </div>
                  <span className="m-tag info">AI 草稿</span>
                </div>
                <div className="m-row">
                  <div className="m-av">陳</div>
                  <div className="mi">
                    <b>
                      {"陳同學 "}
                      <span className="m-stars">★★★☆☆</span>
                    </b>
                    <span>整體不錯，等候時間稍長。</span>
                  </div>
                  <span className="m-tag hot">優先處理</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 區塊三：展示 */}
      <div className="fblock">
        <div className="wrap fb-grid">
          <div className="fb-txt reveal">
            <div className="eyebrow">SOCIAL PROOF</div>
            <h3>
              把好評
              <em>放上網站</em>
              <br />
              讓口碑幫你成交
            </h3>
            <p>
              累積的五星評論不該只躺在 Google
              上。用評價展示小工具嵌入你的官網和銷售頁，猶豫中的訪客看到真實口碑，下單的手就不再猶豫。
            </p>
            <div className="replaces">
              <span className="rlabel">展示亮點</span>
              <span className="rchip">多種版型</span>
              <span className="rchip">自動同步</span>
              <span className="rchip">一段代碼嵌入</span>
            </div>
            <ul className="checklist">
              <li>多種評價牆版型任選</li>
              <li>新好評自動同步上牆</li>
              <li>嵌入官網與銷售頁</li>
              <li>精選評論置頂顯示</li>
              <li>星等與則數統計徽章</li>
              <li>行動版自動適配</li>
            </ul>
            <div className="fb-cta">
              <Link to="/booking" className="btn btn-navy">
                {"讓好評上我的網站 "}
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
                <span>你的官網 / 客戶見證區</span>
              </div>
              <div className="mock-pad">
                <div className="m-title">
                  {"Google 評論 "}
                  <span className="m-stars">★★★★★</span>
                  {" 4.8（286 則）"}
                </div>
                <div className="m-grid2">
                  <div className="m-col">
                    <h6>
                      <span className="m-stars">★★★★★</span>
                    </h6>
                    <div className="m-line w80"></div>
                    <div className="m-line w60"></div>
                  </div>
                  <div className="m-col">
                    <h6>
                      <span className="m-stars">★★★★★</span>
                    </h6>
                    <div className="m-line w80"></div>
                    <div className="m-line w40"></div>
                  </div>
                </div>
                <div style={{ marginTop: "12px" }}>
                  <span className="m-btn">立即預約體驗 →</span>
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
            <p className="lead">三個最常見的落地情境，看看口碑系統怎麼幫你帶進新客人。</p>
          </div>
          <div className="ugrid">
            <div className="ucard reveal">
              <span className="utag">美業・沙龍</span>
              <h4>做完頭髮兩小時後，邀請自動送達</h4>
              <p>
                客人還沉浸在新髮型的好心情裡，LINE 收到感謝訊息＋評論連結，
                <b>留評率大幅提升</b>
                。Google 星等上去了，新客自己找上門。
              </p>
            </div>
            <div className="ucard reveal d1">
              <span className="utag">診所・工作室</span>
              <h4>負評第一時間接住，危機變轉機</h4>
              <p>
                三星以下評論即時警示，第一時間誠懇回覆與補救。
                <b>處理得好的負評</b>
                ，反而讓潛在客戶看到你的用心。
              </p>
            </div>
            <div className="ucard reveal d2">
              <span className="utag">課程・顧問</span>
              <h4>學員見證，變成下一期的招生文案</h4>
              <p>
                課後自動蒐集回饋，五星見證同步到銷售頁的評價牆。
                <b>上一期學員的真心話</b>
                ，就是下一期最有力的廣告。
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
              口碑有了，
              <em>讓更多人看到</em>
            </h2>
            <p className="lead">搭配這些功能，把五星評價變成源源不絕的新客流。</p>
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
            最好的廣告，
            <br />
            是客人
            <span>替你說的話</span>
          </h2>
          <p className="reveal d1">從今天起，讓每一次滿意的服務，都自動累積成明天的新客戶。</p>
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
