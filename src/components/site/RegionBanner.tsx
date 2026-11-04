import { useNavigate } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { PATHS, type Locale } from "./feature-links";

const DISMISS_KEY = "idf_region_banner_dismissed";

type RegionOption = { value: Locale; label: string };

/** Copy is shown in the *suggested* region's language — exactly like apple.com. */
const COPY: Record<
  Locale,
  { message: string; cont: string; close: string; options: RegionOption[] }
> = {
  zh: {
    message: "選擇另一個國家或地區，以查看適用於你所在位置的內容與服務。",
    cont: "繼續",
    close: "關閉",
    options: [
      { value: "zh", label: "台灣" },
      { value: "en", label: "United States" },
    ],
  },
  en: {
    message: "Choose another country or region to see content specific to your location.",
    cont: "Continue",
    close: "Close",
    options: [
      { value: "en", label: "United States" },
      { value: "zh", label: "台灣" },
    ],
  },
};

/** Best guess of the visitor's region from browser language + time zone. */
function detectLocale(): Locale {
  try {
    const langs = navigator.languages?.length ? navigator.languages : [navigator.language];
    if (langs.some((l) => /^zh(-(TW|HK|MO|Hant))/i.test(l))) return "zh";
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (tz === "Asia/Taipei") return "zh";
  } catch {
    // storage/Intl unavailable — fall back to default
  }
  return "en";
}

function readDismissed(): boolean {
  try {
    return sessionStorage.getItem(DISMISS_KEY) === "1";
  } catch {
    return false;
  }
}

function writeDismissed() {
  try {
    sessionStorage.setItem(DISMISS_KEY, "1");
  } catch {
    // storage/Intl unavailable — fall back to default
  }
}

/**
 * Apple-style "choose your country or region" bar.
 * Rendered on pages of `current` locale; appears only when the visitor looks like
 * they belong to another region. Add `?region-banner=1` to the URL to force it on.
 */
export function RegionBanner({ current }: { current: Locale }) {
  const navigate = useNavigate();
  const [suggested, setSuggested] = useState<Locale | null>(null);
  const [choice, setChoice] = useState<Locale>(current);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const forced = new URLSearchParams(window.location.search).get("region-banner") === "1";
    const detected = detectLocale();
    if (forced) {
      const target: Locale = detected !== current ? detected : current === "en" ? "zh" : "en";
      setSuggested(target);
      setChoice(target);
      return;
    }
    if (detected !== current && !readDismissed()) {
      setSuggested(detected);
      setChoice(detected);
    }
  }, [current]);

  // Push the fixed nav down by the banner's visible height (banner scrolls away like Apple's).
  useEffect(() => {
    const root = document.documentElement;
    if (!suggested) {
      root.style.removeProperty("--rb-offset");
      return;
    }
    const update = () => {
      const h = ref.current?.offsetHeight ?? 0;
      root.style.setProperty("--rb-offset", `${Math.max(0, h - window.scrollY)}px`);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      root.style.removeProperty("--rb-offset");
    };
  }, [suggested]);

  if (!suggested) return null;
  const t = COPY[suggested];

  const dismiss = () => {
    writeDismissed();
    setSuggested(null);
  };

  const onContinue = () => {
    writeDismissed();
    setSuggested(null);
    if (choice !== current) void navigate({ to: PATHS[choice].home });
  };

  return (
    <div className="region-banner" ref={ref} role="region" aria-label={t.message}>
      <div className="wrap region-banner-inner">
        <p className="rb-msg">{t.message}</p>
        <div className="rb-actions">
          <label className="rb-select">
            <span className="rb-check" aria-hidden="true">
              ✓
            </span>
            <select
              value={choice}
              onChange={(e) => setChoice(e.target.value as Locale)}
              aria-label={t.message}
            >
              {t.options.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </label>
          <button type="button" className="rb-continue" onClick={onContinue}>
            {t.cont}
          </button>
          <button type="button" className="rb-close" onClick={dismiss} aria-label={t.close}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
