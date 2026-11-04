import { createFileRoute, Link } from "@tanstack/react-router";
import { CONTACT_EMAIL } from "@/components/site/feature-links";
import { SESSION_LABEL, VENUE } from "@/lib/booking";
import { pageHead } from "@/lib/seo";

type ThanksSearch = { s?: string; n?: string };

export const Route = createFileRoute("/tw/thanks")({
  validateSearch: (search: Record<string, unknown>): ThanksSearch => {
    const out: ThanksSearch = {};
    if (typeof search["s"] === "string") out.s = search["s"].slice(0, 40);
    if (typeof search["n"] === "string") out.n = search["n"].slice(0, 30);
    return out;
  },
  head: () =>
    pageHead({
      path: "/tw/thanks",
      title: "報名完成｜匯成交 iDealFlow.ai 免費實體講座",
      noindex: true,
    }),
  component: ThanksPage,
});

function ThanksPage() {
  const { s, n } = Route.useSearch();
  const session = s || SESSION_LABEL;

  return (
    <section className="ty">
      <div className="wrap">
        <div className="tick">✓</div>

        <div className="bk2-steps" style={{ paddingTop: 0, marginBottom: "26px" }}>
          <span className="bk2-step" style={{ color: "rgba(255,255,255,.5)" }}>
            <span className="n" style={{ background: "rgba(255,255,255,.18)", color: "#fff" }}>
              ✓
            </span>
            填寫報名資料
          </span>
          <span className="bk2-sep" style={{ background: "rgba(255,255,255,.25)" }}></span>
          <span className="bk2-step on" style={{ color: "#fff" }}>
            <span className="n">2</span>收到地點提醒
          </span>
        </div>

        <h1 id="tyTitle">
          {n ? `${n}，報名` : "報名"}
          <span>完成</span>！
        </h1>
        <p className="ty-sub">座位已經幫你留好，接下來只要等地點提醒。</p>

        <div className="ty-card">
          <div className="ty-row">
            <span className="k">講座時間</span>
            <span className="v" id="tySession">
              {session}
            </span>
          </div>
          <div className="ty-row">
            <span className="k">講座地點</span>
            <span className="v">{VENUE}</span>
          </div>
          <div className="ty-row">
            <span className="k">費用</span>
            <span className="v">完全免費</span>
          </div>
        </div>

        <div className="ty-card ty-next">
          <h4>接下來會發生什麼？</h4>
          <ul>
            <li>
              <span className="no">1</span>
              <span>
                我們會用你留下的<b style={{ color: "#fff" }}>電話或 Email</b>{" "}
                把地點與交通資訊傳給你。
              </span>
            </li>
            <li>
              <span className="no">2</span>
              <span>開講前會再提醒你一次，記得留意通知。</span>
            </li>
            <li>
              <span className="no">3</span>
              <span>當天請提前 10 分鐘到現場報到、入座。</span>
            </li>
          </ul>
        </div>

        <div className="hero-ctas">
          <Link className="btn btn-primary" to="/tw/start">
            先看看 14 天啟動計畫 <span className="arr">→</span>
          </Link>
          <Link className="btn btn-ghost" to="/tw">
            回官網
          </Link>
        </div>

        <p className="ty-foot">
          沒收到通知？來信{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: "var(--orange)" }}>
            {CONTACT_EMAIL}
          </a>
          ，我們幫你確認。
        </p>
      </div>
    </section>
  );
}
