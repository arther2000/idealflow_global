import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { RegionBanner } from "@/components/site/RegionBanner";
import { CONTACT_EMAIL, LOGO_SRC } from "@/components/site/feature-links";
import { isValidContact, submitContact, type ContactInput } from "@/lib/contact";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead({
      breadcrumb: "Book a Demo",
      path: "/contact",
      title: "Book a Demo | iDealFlow.ai",
      description:
        "See iDealFlow.ai in action. Book a free 30-minute demo and we’ll show you how to connect your website, CRM, follow-ups and AI chat into one sales system that runs itself.",
    }),
  component: ContactPage,
});

const EMPTY: ContactInput = { name: "", email: "", phone: "", company: "", message: "" };

function ContactPage() {
  const [data, setData] = useState<ContactInput>(EMPTY);
  const [showErr, setShowErr] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const set = (k: keyof ContactInput) => (e: { target: { value: string } }) =>
    setData((d) => ({ ...d, [k]: e.target.value }));

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!isValidContact(data)) {
      setShowErr(true);
      return;
    }
    setShowErr(false);
    setSubmitting(true);
    await submitContact(data);
    setSubmitting(false);
    setDone(true);
  };

  return (
    <div className="bk2">
      <RegionBanner current="en" />
      <header className="bk2-top">
        <div className="wrap">
          <Link className="brand" to="/" aria-label="iDealFlow.ai">
            <img className="logo-img" src={LOGO_SRC} alt="iDealFlow.ai" />
          </Link>
          <Link className="back" to="/">
            ← Back to Home
          </Link>
        </div>
      </header>

      <div className="wrap">
        <div className="bk2-steps">
          <span className={done ? "bk2-step" : "bk2-step on"}>
            <span className="n">{done ? "✓" : "1"}</span>Tell us about you
          </span>
          <span className="bk2-sep"></span>
          <span className={done ? "bk2-step on" : "bk2-step"}>
            <span className="n">2</span>We’ll schedule your demo
          </span>
        </div>

        <div className="bk2-head">
          <h1>
            See iDealFlow.ai
            <br />
            in action.
            <br />
            <em>Book a free demo.</em>
          </h1>
          <p>30 minutes, one-on-one, tailored to your business. No commitment.</p>
        </div>
      </div>

      <main className="bk2-main">
        <div className="wrap">
          <div className="bk2-grid">
            <div>
              <div className="bk2-when">
                <h3>🗓 What to expect</h3>
                <div className="bk2-slot">
                  <div className="dt">
                    <b>30</b>
                    <span>MIN</span>
                  </div>
                  <div className="in">
                    <b>Live online demo</b>
                    <span>Video call · scheduled at a time that works for you</span>
                  </div>
                </div>
                <div className="bk2-facts">
                  <span className="bk2-fact">✓ Free</span>
                  <span className="bk2-fact">✓ One-on-one</span>
                  <span className="bk2-fact">✓ Live walkthrough</span>
                  <span className="bk2-fact">✓ Q&amp;A</span>
                </div>
              </div>

              <div className="bk2-what">
                <h3>What we’ll cover</h3>
                <ul>
                  <li>
                    <span>
                      <b>Where your leads are slipping away</b>—a quick audit of your website, inbox
                      and follow-up process.
                    </span>
                  </li>
                  <li>
                    <span>
                      <b>One flow that actually works</b>: website → content → leads → instant AI
                      replies → nurturing → re-engagement → follow-up → closed deal.
                    </span>
                  </li>
                  <li>
                    <span>
                      <b>A live look inside the platform</b>—CRM, funnels, automation and AI chat,
                      set up for a business like yours.
                    </span>
                  </li>
                  <li>
                    <span>
                      <b>Plans, onboarding and pricing</b>, including the 14-Day Launch Program.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bk2-form" id="signup" style={{ scrollMarginTop: "80px" }}>
              {done ? (
                <div className="bk-form" style={{ textAlign: "center" }}>
                  <div className="fh">Thank you{data.name ? `, ${data.name.trim()}` : ""}!</div>
                  <p className="fs" style={{ marginBottom: "22px" }}>
                    We’ve received your request and will reach out within one business day to
                    schedule your demo.
                  </p>
                  <Link className="btn btn-primary" to="/start">
                    Explore the 14-Day Launch Program <span className="arr">→</span>
                  </Link>
                </div>
              ) : (
                <form className="bk-form" noValidate onSubmit={onSubmit}>
                  <div className="fh">Request your demo</div>
                  <p className="fs">★ Required fields.</p>

                  <div className="bk-field">
                    <label htmlFor="ctName">
                      Full name <span className="req">★</span>
                    </label>
                    <input
                      id="ctName"
                      type="text"
                      placeholder="Jane Smith"
                      required
                      value={data.name}
                      onChange={set("name")}
                    />
                  </div>
                  <div className="bk-field">
                    <label htmlFor="ctEmail">
                      Work email <span className="req">★</span>
                    </label>
                    <input
                      id="ctEmail"
                      type="email"
                      placeholder="you@company.com"
                      required
                      value={data.email}
                      onChange={set("email")}
                    />
                  </div>
                  <div className="bk-field">
                    <label htmlFor="ctPhone">Phone</label>
                    <input
                      id="ctPhone"
                      type="tel"
                      inputMode="tel"
                      placeholder="+1 555 123 4567"
                      value={data.phone}
                      onChange={set("phone")}
                    />
                  </div>
                  <div className="bk-field">
                    <label htmlFor="ctCompany">Company</label>
                    <input
                      id="ctCompany"
                      type="text"
                      placeholder="Acme Inc."
                      value={data.company}
                      onChange={set("company")}
                    />
                  </div>
                  <div className="bk-field">
                    <label htmlFor="ctMsg">What would you like to automate?</label>
                    <textarea
                      id="ctMsg"
                      rows={3}
                      placeholder="e.g. lead follow-up, appointment booking, online courses…"
                      value={data.message}
                      onChange={set("message")}
                    />
                  </div>

                  <button className="btn btn-primary" type="submit" disabled={submitting}>
                    {submitting ? (
                      "Sending…"
                    ) : (
                      <>
                        Book my demo <span className="arr">→</span>
                      </>
                    )}
                  </button>
                  <p className={showErr ? "bk-err show" : "bk-err"}>
                    Please enter your name and a valid email address.
                  </p>
                  <p className="bk-note">
                    We’ll only use your details to arrange your demo. We never share your data with
                    third parties.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      <footer>
        <div className="wrap">
          <div
            className="foot-bottom"
            style={{ paddingTop: 0, justifyContent: "center", gap: "20px", textAlign: "center" }}
          >
            <span>© 2026 iDealFlow.ai. All rights reserved.</span>
            <span>
              <Link to="/" style={{ color: "var(--orange)" }}>
                Home
              </Link>
              {" · Questions? "}
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
