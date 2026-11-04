import { Link } from "@tanstack/react-router";
import { CONTACT_EMAIL, FEATURE_LINKS, HOME_ANCHORS, LOGO_SRC } from "./feature-links";

type SiteFooterProps = {
  /** "full" = 官網完整頁尾；"minimal" = 14 天啟動計畫頁的精簡頁尾 */
  variant?: "full" | "minimal";
};

export function SiteFooter({ variant = "full" }: SiteFooterProps) {
  if (variant === "minimal") {
    return (
      <footer>
        <div className="wrap">
          <div
            className="foot-bottom"
            style={{ paddingTop: 0, justifyContent: "center", gap: "24px", textAlign: "center" }}
          >
            <span>© 2026 匯鼎科技股份有限公司 iDealFlow.ai — 版權所有</span>
            <span>
              <Link to="/" style={{ color: "var(--orange)" }}>
                回官網
              </Link>{" "}
              · CEO｜Arthur Wu · powered by GoHighLevel
            </span>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer>
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            <img className="logo-img" src={LOGO_SRC} alt="iDealFlow.ai" />
            <p>
              匯成交 iDealFlow.ai — AI 自動化成交系統。讓成交自動發生，讓系統成為你最強的數位員工。
            </p>
          </div>
          <div className="foot-col">
            <h6>核心功能</h6>
            {FEATURE_LINKS.map((f) => (
              <Link key={f.to} to={f.to}>
                {f.label}
              </Link>
            ))}
          </div>
          <div className="foot-col">
            <h6>了解匯成交</h6>
            <Link to="/start">14 天啟動計畫</Link>
            {HOME_ANCHORS.map((a) => (
              <Link key={a.hash} to="/" hash={a.hash}>
                {a.footer}
              </Link>
            ))}
          </div>
          <div className="foot-col">
            <h6>聯絡我們</h6>
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            <Link to="/booking">免費報名講座</Link>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 匯鼎科技股份有限公司 iDealFlow.ai — 版權所有</span>
          <span>CEO｜Arthur Wu · powered by GoHighLevel</span>
        </div>
      </div>
    </footer>
  );
}
