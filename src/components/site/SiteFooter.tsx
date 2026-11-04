import { Link } from "@tanstack/react-router";
import {
  CONTACT_EMAIL,
  HOME_ANCHORS,
  LOGO_SRC,
  PATHS,
  UI,
  featureLinks,
  type Locale,
} from "./feature-links";

type SiteFooterProps = {
  locale: Locale;
  /** "full" = 官網完整頁尾；"minimal" = 14 天啟動計畫頁的精簡頁尾 */
  variant?: "full" | "minimal";
};

/** Apple-style region switcher: links to the same site in the other locale. */
function RegionLink({ locale }: { locale: Locale }) {
  const other: Locale = locale === "en" ? "zh" : "en";
  return (
    <Link className="region-link" to={PATHS[other].home} title="Choose your country or region">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
      {UI[locale].region}
    </Link>
  );
}

export function SiteFooter({ locale, variant = "full" }: SiteFooterProps) {
  const t = UI[locale];
  const p = PATHS[locale];

  if (variant === "minimal") {
    return (
      <footer>
        <div className="wrap">
          <div
            className="foot-bottom"
            style={{ paddingTop: 0, justifyContent: "center", gap: "24px", textAlign: "center" }}
          >
            <span>{t.copyright}</span>
            <span>
              <Link to={p.home} style={{ color: "var(--orange)" }}>
                {t.backHome}
              </Link>{" "}
              · CEO｜Arthur Wu · powered by GoHighLevel
            </span>
            <RegionLink locale={locale} />
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
            <p>{t.tagline}</p>
          </div>
          <div className="foot-col">
            <h6>{t.colFeatures}</h6>
            {featureLinks(locale).map((f) => (
              <Link key={f.to} to={f.to}>
                {f.label}
              </Link>
            ))}
          </div>
          <div className="foot-col">
            <h6>{t.colAbout}</h6>
            <Link to={p.start}>{t.startLink}</Link>
            <Link to={p.gohighlevel}>{t.ghlLink}</Link>
            {HOME_ANCHORS[locale].map((a) => (
              <Link
                key={a.hash}
                to={a.page ? p[a.page] : p.home}
                {...(a.page ? {} : { hash: a.hash })}
              >
                {a.footer}
              </Link>
            ))}
          </div>
          <div className="foot-col">
            <h6>{t.colContact}</h6>
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            <Link to={p.cta}>{t.cta}</Link>
          </div>
        </div>
        <div className="foot-bottom">
          <span>{t.copyright}</span>
          <span>CEO｜Arthur Wu · powered by GoHighLevel</span>
          <RegionLink locale={locale} />
        </div>
      </div>
    </footer>
  );
}
