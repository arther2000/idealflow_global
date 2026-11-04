import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  APP_LOGIN_URL,
  HOME_ANCHORS,
  LOGO_SRC,
  PATHS,
  UI,
  featureLinks,
  type Locale,
} from "./feature-links";

type SiteNavProps = {
  locale: Locale;
  /** "main" = 官網完整導覽；"start" = 14 天啟動計畫頁的精簡導覽 */
  variant?: "main" | "start";
};

export function SiteNav({ locale, variant = "main" }: SiteNavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const t = UI[locale];
  const p = PATHS[locale];

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
        <Link className="brand" to={p.home} aria-label="iDealFlow.ai">
          <img className="logo-img" src={LOGO_SRC} alt="iDealFlow.ai" />
          {t.brandZh && <span className="zh">{t.brandZh}</span>}
        </Link>

        {variant === "start" ? (
          <nav className="nav-links" style={{ gap: "20px" }}>
            <Link to={p.home}>{t.backHome}</Link>
            <a className="btn btn-primary nav-cta" href="#offer">
              {t.startCta}
            </a>
          </nav>
        ) : (
          <>
            <nav className={open ? "nav-links open" : "nav-links"} id="navLinks">
              <div className="dd">
                <Link className="dd-trigger" to={p.home} hash="features" onClick={close}>
                  {t.features} <span className="caret">▼</span>
                </Link>
                <div className="dd-menu">
                  {featureLinks(locale).map((f) => (
                    <Link key={f.to} to={f.to} onClick={close}>
                      <span className="di">
                        <svg viewBox="0 0 24 24">{f.icon}</svg>
                      </span>
                      {f.label}
                    </Link>
                  ))}
                  <Link className="dd-all" to={p.home} hash="features" onClick={close}>
                    {t.allFeatures}
                  </Link>
                </div>
              </div>
              {HOME_ANCHORS[locale].map((a) => (
                <Link key={a.hash} to={p.home} hash={a.hash} onClick={close}>
                  {a.nav}
                </Link>
              ))}
              {t.hot && (
                <Link className="nav-hot" to={p.cta} onClick={close}>
                  {t.hot}
                </Link>
              )}
              <a className="nav-login" href={APP_LOGIN_URL} target="_blank" rel="noopener">
                {t.login}
              </a>
              <Link className="btn btn-primary nav-cta" to={p.cta} onClick={close}>
                {t.cta}
              </Link>
            </nav>
            <button
              className="nav-toggle"
              id="navToggle"
              aria-label={t.menu}
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
