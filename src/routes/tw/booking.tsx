import { createFileRoute, Link } from "@tanstack/react-router";
import { BackToFormButton, BookingForm } from "@/components/site/BookingForm";
import { LOGO_SRC, CONTACT_EMAIL } from "@/components/site/feature-links";
import { RegionBanner } from "@/components/site/RegionBanner";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/tw/booking")({
  head: () =>
    pageHead({
      breadcrumb: "預約諮詢",
      path: "/tw/booking",
      title: "免費實體講座報名｜匯成交 iDealFlow.ai",
      description:
        "10/3（六）14:00－19:00 免費實體講座，地點：台北市南京東路四段51-2號3樓。把官網、內容、獲客、自動回覆、客戶培育到成交串成一條自動化流程。填寫姓名、電話、Email 即可完成報名。",
    }),
  component: BookingPage,
});

function BookingPage() {
  return (
    <div className="bk2">
      <RegionBanner current="zh" />
      {/* 精簡頂列：只留回官網，避免分心 */}
      <header className="bk2-top">
        <div className="wrap">
          <Link className="brand" to="/tw" aria-label="匯成交 iDealFlow.ai">
            <img className="logo-img" src={LOGO_SRC} alt="iDealFlow.ai" />
          </Link>
          <Link className="back" to="/tw">
            ← 回官網
          </Link>
        </div>
      </header>
      <div className="wrap">
        {/* 步驟指示 */}
        <div className="bk2-steps">
          <span className="bk2-step on">
            <span className="n">1</span>
            填寫報名資料
          </span>
          <span className="bk2-sep"></span>
          <span className="bk2-step">
            <span className="n">2</span>
            收到地點提醒
          </span>
        </div>
        <div className="bk2-head">
          <h1>
            自動化成交
            <br />
            免費實體講座
            <br />
            <em>報名只要 30 秒</em>
          </h1>
          <p>填三個欄位就完成，我們會把地點與交通資訊傳給你。</p>
        </div>
      </div>
      {/* 主要區塊：左邊講座資訊、右邊表單 */}
      <main className="bk2-main">
        <div className="wrap">
          <div className="bk2-grid">
            <div>
              <div className="bk2-when">
                <h3>🗓 講座時間與地點</h3>
                <div className="bk2-slot">
                  <div className="dt">
                    <b>10/3</b>
                    <span>SAT</span>
                  </div>
                  <div className="in">
                    <b>14:00－19:00</b>
                    <span>實體講座・台北市南京東路四段51-2號3樓</span>
                  </div>
                </div>
                <div className="bk2-facts">
                  <span className="bk2-fact">✓ 完全免費</span>
                  <span className="bk2-fact">✓ 現場參加</span>
                  <span className="bk2-fact">✓ 有現場示範</span>
                  <span className="bk2-fact">✓ 可當面提問</span>
                </div>
              </div>
              <div className="bk2-what">
                <h3>這場講座會講什麼？</h3>
                <ul>
                  <li>
                    <span>
                      <b>為什麼工具越買越多，事情卻沒變少</b>
                      ——官網、客服、內容、跟進各做各的真正原因。
                    </span>
                  </li>
                  <li>
                    <span>
                      <b>一條真的跑得通的流程</b>
                      ：官網 → 內容 → 獲客 → 自動回覆 → 客戶培育 → 老客激活 → 持續跟進 → 成交。
                    </span>
                  </li>
                  <li>
                    <span>
                      <b>現場實際操作示範</b>
                      ，直接看系統怎麼接、怎麼設定，不是只講觀念。
                    </span>
                  </li>
                  <li>
                    <span>
                      <b>老闆自己就能落地的做法</b>
                      ，不用工程師、不用養十套工具。
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bk2-form" id="signup" style={{ scrollMarginTop: "80px" }}>
              <BookingForm />
            </div>
          </div>
        </div>
      </main>
      {/* 為什麼要來聽（放在表單之後，不干擾報名動作） */}
      <section
        style={{ background: "#fff", padding: "80px 0", borderTop: "1px solid var(--line)" }}
      >
        <div className="wrap" style={{ maxWidth: "1000px" }}>
          <div className="center">
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              WHY THIS TALK
            </div>
            <h2 className="h2">
              很多中小企業老闆都發現：
              <br />
              <em>工具越來越多，事情卻一點都沒變少</em>
            </h2>
            <p className="lead">下面七件事，只要中了兩件，這場講座就值得你來聽。</p>
          </div>
          <div className="bk-grid" style={{ marginTop: "44px" }}>
            <div className="bk-card" style={{ background: "var(--bg-soft)" }}>
              <span className="bk-num">痛點 01</span>
              <h4>官網做不起來，做了又接不起來</h4>
              <p>
                大家都知道 SEO、GEO 很重要，以前做一個好網站貴得要死。現在 AI
                可以幫你做網站了，但新的問題來了：
                <b>網站是做出來了，可是跟後面的 CRM、客戶資料、行銷流程全部接不起來。</b>
                網站最後還是只是一個網站。
              </p>
            </div>
            <div className="bk-card" style={{ background: "var(--bg-soft)" }}>
              <span className="bk-num">痛點 02</span>
              <h4>自動化太貴，而且永遠掌握在別人手上</h4>
              <p>
                想做自動化、機器人、AI 客服，找廠商一問，報價幾十萬甚至更高。最麻煩的不是貴，而是
                <b>錢花完了，你自己還是不會。</b>
                以後想改一個流程，還得繼續找廠商。
              </p>
            </div>
            <div className="bk-card" style={{ background: "var(--bg-soft)" }}>
              <span className="bk-num">痛點 03</span>
              <h4>手上明明一堆老客戶，卻盤不活</h4>
              <p>
                公司經營幾年以後，LINE、微信、Email、CRM 裡面其實都有一大堆老客戶。問題是：
                <b>你根本沒有時間一個一個重新聯繫。</b>
                這些客戶不是沒價值，而是全部睡在那裡。
              </p>
            </div>
            <div className="bk-card" style={{ background: "var(--bg-soft)" }}>
              <span className="bk-num">痛點 04</span>
              <h4>客戶有興趣了，卻沒人繼續跟</h4>
              <p>
                客戶看過你的影片、參加過活動、問過價格，甚至已經有一點想買了。結果你忙起來，三天、七天、一個月過去了，
                <b>沒有一個自動跟進的流程，客戶就這樣涼掉了。</b>
              </p>
            </div>
            <div className="bk-card" style={{ background: "var(--bg-soft)" }}>
              <span className="bk-num">痛點 05</span>
              <h4>知道該做什麼，就是沒時間做</h4>
              <p>
                你知道要 Call
                客戶、關心客戶、建立關係、培養信任、持續跟進……這些你全部都知道。問題只有一個：
                <b>老闆一天也只有 24 小時，你根本做不完。</b>
              </p>
            </div>
            <div className="bk-card" style={{ background: "var(--bg-soft)" }}>
              <span className="bk-num">痛點 06</span>
              <h4>做內容太耗時間</h4>
              <p>
                現在大家都說老闆要做
                IP、要拍短影音、要經營社群。但你從想題目、寫文案、拍影片、剪輯到發出去，
                <b>一篇內容就吃掉你大量時間。</b>
              </p>
            </div>
            <div className="bk-card wide" style={{ background: "var(--bg-soft)" }}>
              <span className="bk-num">痛點 07</span>
              <h4>好不容易有流量，卻接不住</h4>
              <p>
                影片終於發出去了，也真的有人留言、有人私訊了。結果客戶晚上 11 點留言、凌晨 1
                點問問題，你已經睡覺了。
                <b>等到第二天早上再回覆，客戶可能早就去找別人了。</b>
              </p>
            </div>
          </div>
          <div
            className="center"
            style={{
              marginTop: "52px",
              padding: "34px 28px",
              background: "var(--navy-deep)",
              borderRadius: "22px",
              color: "#fff",
            }}
          >
            <p
              style={{
                fontSize: "clamp(17px,2.2vw,21px)",
                fontWeight: "700",
                lineHeight: "1.7",
                maxWidth: "720px",
                margin: "0 auto",
              }}
            >
              {" 真正缺的不是更多 AI 工具，而是把"}
              <span style={{ color: "var(--orange)" }}>
                官網 → 內容 → 獲客 → 自動回覆 → 客戶培育 → 老客激活 → 持續跟進 → 成交
              </span>
              串在一起的系統。
              <br />
              {" 讓老闆"}
              <span style={{ color: "var(--orange)" }}>少做一點事情</span>
              ，公司卻能自動
              <span style={{ color: "var(--orange)" }}>多做一點生意</span>
              {"。 "}
            </p>
            <BackToFormButton />
          </div>
        </div>
      </section>
      <footer>
        <div className="wrap">
          <div
            className="foot-bottom"
            style={{ paddingTop: 0, justifyContent: "center", gap: "20px", textAlign: "center" }}
          >
            <span>© 2026 匯鼎科技股份有限公司 iDealFlow.ai — 版權所有</span>
            <span>
              <Link to="/tw" style={{ color: "var(--orange)" }}>
                回官網
              </Link>
              {" · 報名問題請洽 "}
              <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: "var(--orange)" }}>
                {CONTACT_EMAIL}
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
