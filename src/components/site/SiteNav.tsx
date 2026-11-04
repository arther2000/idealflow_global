import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { APP_LOGIN_URL, FEATURE_LINKS, HOME_ANCHORS, LOGO_SRC } from "./feature-links";

type SiteNavProps = {
  /** "main" = 官網完整導覽；"start" = 14 天啟動計畫頁的精簡導覽 */
  variant?: "main" | "start";
};

export function SiteNav({ variant = "main" }: SiteNavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);
  const navClass = ["nav", variant === "start" ? "fp-nav" : "", scrolled ? "scrolled" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={navClass} id="nav">
      <div className="wrap nav-inner">
        <Link className="brand" to="/" aria-label="匯成交 iDealFlow.ai">
          <img className="logo-img" src={LOGO_SRC} alt="iDealFlow.ai" />
          <span className="zh">匯成交</span>
        </Link>

        {variant === "start" ? (
          <nav className="nav-links" style={{ gap: "20px" }}>
            <Link to="/">回官網</Link>
            <a className="btn btn-primary nav-cta" href="#offer">
              立即加入計畫
            </a>
          </nav>
        ) : (
          <>
            <nav className={open ? "nav-links open" : "nav-links"} id="navLinks">
              <div className="dd">
                <Link className="dd-trigger" to="/" hash="features" onClick={close}>
                  核心功能 <span className="caret">▼</span>
                </Link>
                <div className="dd-menu">
                  {FEATURE_LINKS.map((f) => (
                    <Link key={f.to} to={f.to} onClick={close}>
                      <span className="di">
                        <svg viewBox="0 0 24 24">{f.icon}</svg>
                      </span>
                      {f.label}
                    </Link>
                  ))}
                  <Link className="dd-all" to="/" hash="features" onClick={close}>
                    查看全部八大功能 →
                  </Link>
                </div>
              </div>
              {HOME_ANCHORS.map((a) => (
                <Link key={a.hash} to="/" hash={a.hash} onClick={close}>
                  {a.nav}
                </Link>
              ))}
              <Link className="nav-hot" to="/booking" onClick={close}>
                🔥 免費講座報名
              </Link>
              <a className="nav-login" href={APP_LOGIN_URL} target="_blank" rel="noopener">
                登入
              </a>
              <Link className="btn btn-primary nav-cta" to="/booking" onClick={close}>
                免費報名講座
              </Link>
            </nav>
            <button
              className="nav-toggle"
              id="navToggle"
              aria-label="選單"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </>
        )}
      </div>
    </header>
  );
}
