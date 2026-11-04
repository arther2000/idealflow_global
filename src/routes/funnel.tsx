import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { useReveal } from "@/hooks/use-reveal";
import { RegionBanner } from "@/components/site/RegionBanner";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/funnel")({
  head: () =>
    pageHead({
      breadcrumb: "Funnels & Websites",
      path: "/funnel",
      title: "Sales Funnel Builder & Landing Page Templates | iDealFlow.ai",
      description:
        "Build pages that sell, no code required. 300+ funnel templates, a drag-and-drop builder, A/B testing and funnel analytics — replacing ClickFunnels, Wix and more.",
    }),
  component: FunnelPage,
});

function FunnelPage() {
  useReveal();

  return (
    <>
      <RegionBanner current="en" />
      <SiteNav locale="en" />
      {/* Sub-page hero */}
      <section className="subhero">
        <div className="wrap">
          <p className="crumb reveal">
            <Link to="/">Home</Link>
            {" / "}
            <Link to="/" hash="features">
              Features
            </Link>
            {" / "}
            <b>Funnels & Websites</b>
          </p>
          <h1 className="reveal d1">
            No code.
            <br />
            Just
            <span className="grad"> pages that sell.</span>
          </h1>
          <p className="sub reveal d2">
            Drag and drop to build your site, or start from{" "}
            <strong>300+ ready-made funnel templates</strong>. Sign-up pages, sales pages and
            thank-you pages flow together seamlessly — with built-in A/B testing that sharpens every
            sale.
          </p>
          <div className="hero-ctas reveal d3">
            <Link to="/contact" className="btn btn-primary">
              {"Book a Demo "}
              <span className="arr">→</span>
            </Link>
            <Link to="/" hash="cases" className="btn btn-ghost">
              See it in action
            </Link>
          </div>
        </div>
      </section>
      {/* Block 1: templates */}
      <div className="fblock">
        <div className="wrap fb-grid">
          <div className="fb-txt reveal">
            <div className="eyebrow">TEMPLATES</div>
            <h3>
              <em>300+</em>
              {" funnel templates."}
              <br />
              Pick one and start selling.
            </h3>
            <p>
              Building pages from scratch takes the most time. So we’ve built ready-made templates
              for every industry. Choose one you like, drop in your copy and photos, and start
              taking orders today.
            </p>
            <div className="replaces">
              <span className="rlabel">Replaces</span>
              <span className="rchip">ClickFunnels</span>
              <span className="rchip">Kartra</span>
              <span className="rchip">Kajabi</span>
              <span className="rchip">Wix</span>
              <span className="rchip">Lead Pages</span>
            </div>
            <ul className="checklist">
              <li>Coaching and consulting templates</li>
              <li>Health and fitness templates</li>
              <li>Marketing agency templates</li>
              <li>Wellness and life coaching templates</li>
              <li>Finance and real estate templates</li>
              <li>Home services and local business templates</li>
            </ul>
            <div className="fb-cta">
              <Link to="/contact" className="btn btn-navy">
                {"Build my first funnel "}
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
                <span>idealflow.ai / funnels / templates</span>
              </div>
              <div className="mock-pad">
                <div className="m-title">Choose a template · Filtered for “Webinar Sign-up”</div>
                <div className="m-grid2">
                  <div className="m-col">
                    <h6>
                      {"Webinar Sign-up "}
                      <b>Popular</b>
                    </h6>
                    <div className="m-line hi w80"></div>
                    <div className="m-line"></div>
                    <div className="m-line w60"></div>
                    <div style={{ marginTop: "10px" }}>
                      <span className="m-btn">Use template</span>
                    </div>
                  </div>
                  <div className="m-col">
                    <h6>Course Sales Page</h6>
                    <div className="m-line w80"></div>
                    <div className="m-line"></div>
                    <div className="m-line w40"></div>
                  </div>
                  <div className="m-col">
                    <h6>Consultation Booking</h6>
                    <div className="m-line w80"></div>
                    <div className="m-line"></div>
                    <div className="m-line w60"></div>
                  </div>
                  <div className="m-col">
                    <h6>Thank-You + Upsell</h6>
                    <div className="m-line w60"></div>
                    <div className="m-line"></div>
                    <div className="m-line w40"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Block 2: drag-and-drop editor */}
      <div className="fblock">
        <div className="wrap fb-grid rev">
          <div className="fb-txt reveal">
            <div className="eyebrow">{"DRAG & DROP"}</div>
            <h3>
              A drag-and-drop editor.
              <br />
              Want it there?
              <em> Just drag it there.</em>
            </h3>
            <p>
              Find the element you want, drag it onto the page, done. Countdown timers, forms and
              surveys, FAQs, video — all built in. You don’t need to be a designer to build a page
              customers can’t wait to click.
            </p>
            <div className="replaces">
              <span className="rlabel">Built in</span>
              <span className="rchip">1- & 2-step checkout</span>
              <span className="rchip">Countdown timers</span>
              <span className="rchip">Forms & surveys</span>
              <span className="rchip">Video hosting</span>
            </div>
            <ul className="checklist">
              <li>Custom text and button styles</li>
              <li>Bullet lists and FAQ sections</li>
              <li>Global sections that update site-wide</li>
              <li>Mobile-ready, automatically</li>
              <li>Connect a custom domain in one click</li>
              <li>New elements added all the time</li>
            </ul>
            <div className="fb-cta">
              <Link to="/contact" className="btn btn-navy">
                {"Try the page builder "}
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
                <span>idealflow.ai / page-builder</span>
              </div>
              <div className="mock-pad">
                <div className="m-title">Page Editor</div>
                <div className="m-line hi w60"></div>
                <div className="m-line w80"></div>
                <div className="m-line"></div>
                <div className="m-row">
                  <div className="m-av o">⏱</div>
                  <div className="mi">
                    <b>Countdown timer</b>
                    <span>Dragging… release to insert</span>
                  </div>
                  <span className="m-tag hot">Drag & drop</span>
                </div>
                <div className="m-row">
                  <div className="m-av">✎</div>
                  <div className="mi">
                    <b>Sign-up form</b>
                    <span>Name · Phone · Email</span>
                  </div>
                  <span className="m-tag info">Inserted</span>
                </div>
                <div style={{ marginTop: "12px" }}>
                  <span className="m-btn">Register now →</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Block 3: conversion tools */}
      <div className="fblock">
        <div className="wrap fb-grid">
          <div className="fb-txt reveal">
            <div className="eyebrow">CONVERSION TOOLS</div>
            <h3>
              A beautiful page is one thing.
              <br />
              <em>A page that sells</em> is another.
            </h3>
            <p>
              What happens after the traffic arrives is what counts. A/B tests find the version that
              sells best, abandoned carts get recovered automatically, and one-click upsells raise
              your order value. Every advanced conversion tool, built right in.
            </p>
            <div className="replaces">
              <span className="rlabel">Replaces</span>
              <span className="rchip">ActiveCampaign</span>
              <span className="rchip">HubSpot</span>
              <span className="rchip">Google Analytics tools</span>
            </div>
            <ul className="checklist">
              <li>A/B split testing</li>
              <li>Automatic abandoned-cart recovery</li>
              <li>One-time offers (OTO)</li>
              <li>One-click upsells</li>
              <li>Cross-sells</li>
              <li>Website behavior tracking</li>
              <li>Detailed funnel and revenue reports</li>
              <li>SEO settings and an AI site assistant</li>
            </ul>
            <div className="fb-cta">
              <Link to="/contact" className="btn btn-navy">
                {"Make my pages sell "}
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
                <span>idealflow.ai / ab-test</span>
              </div>
              <div className="mock-pad">
                <div className="m-title">A/B test in progress</div>
                <div className="m-grid2">
                  <div className="m-col">
                    <h6>Version A</h6>
                    <div className="m-line w80"></div>
                    <div className="m-line w60"></div>
                    <div className="m-row" style={{ marginTop: "8px", marginBottom: "0" }}>
                      <div className="mi">
                        <b>6.4% conversion</b>
                        <span>463 sales</span>
                      </div>
                    </div>
                  </div>
                  <div className="m-col">
                    <h6>
                      {"Version B "}
                      <b>Winner 🏆</b>
                    </h6>
                    <div className="m-line hi w80"></div>
                    <div className="m-line w60"></div>
                    <div className="m-row" style={{ marginTop: "8px", marginBottom: "0" }}>
                      <div className="mi">
                        <b>7.2% conversion</b>
                        <span>537 sales ▲15.9%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Use cases */}
      <section className="usecases">
        <div className="wrap">
          <div className="center reveal">
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              REAL SCENARIOS
            </div>
            <h2 className="h2">How teams actually use it</h2>
            <p className="lead">
              Three of the most common scenarios — and how funnels help you close more sales.
            </p>
          </div>
          <div className="ugrid">
            <div className="ucard reveal">
              <span className="utag">Speakers & Webinars</span>
              <h4>A webinar sign-up page, live in an afternoon</h4>
              <p>
                {
                  "Apply a sign-up template → add your event details → connect the registration form. Coach Arthur Wu uses this exact flow for his government-grant seminars, and with automated reminders, reached "
                }
                <b>45%</b> attendance.
              </p>
            </div>
            <div className="ucard reveal d1">
              <span className="utag">Course Creators</span>
              <h4>A course sales page with one-click upsells</h4>
              <p>
                The moment a sale goes through, the thank-you page offers a one-time upgrade to an
                advanced course. A smoother experience, a bigger order —
                <b> and sales that close while you sleep</b>.
              </p>
            </div>
            <div className="ucard reveal d2">
              <span className="utag">Local Businesses</span>
              <h4>Event pages that capture leads and drive foot traffic</h4>
              <p>
                An anniversary-sale page with a countdown timer and coupon form sends every lead
                into the CRM, tagged and ready. Automated LINE messages then
                <b> bring them through your door</b>.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* More features */}
      <section className="morefeat">
        <div className="wrap">
          <div className="center reveal">
            <h2 className="h2">
              Your pages are live.
              <em> What’s next?</em>
            </h2>
            <p className="lead">
              Funnels are just the beginning. Explore everything else the platform can do and
              connect your entire sales process.
            </p>
          </div>
          <div className="mf-grid reveal">
            <Link to="/email" className="mf-card">
              <span className="di">
                <svg viewBox="0 0 24 24">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-10 5L2 7" />
                </svg>
              </span>
              Email & LINE Marketing
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
              Smart Booking
              <span className="arr">→</span>
            </Link>
            <Link to="/automation" className="mf-card">
              <span className="di">
                <svg viewBox="0 0 24 24">
                  <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </span>
              Workflow Automation
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
              AI Content & Social Planner
              <span className="arr">→</span>
            </Link>
            <Link to="/reputation" className="mf-card">
              <span className="di">
                <svg viewBox="0 0 24 24">
                  <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </span>
              Reputation Management
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
              CRM
              <span className="arr">→</span>
            </Link>
          </div>
        </div>
      </section>
      {/* Final CTA */}
      <section className="final">
        <div className="wrap">
          <h2 className="reveal">
            Your next page
            <br />
            is
            <span> the one that sells.</span>
          </h2>
          <p className="reveal d1">
            300+ templates are ready and waiting. All that’s left is to put your business on them.
          </p>
          <div className="hero-ctas reveal d2">
            <Link to="/contact" className="btn btn-primary">
              {"Book a Demo "}
              <span className="arr">→</span>
            </Link>
            <Link to="/pricing" className="btn btn-ghost">
              See Pricing
            </Link>
          </div>
        </div>
      </section>
      <SiteFooter locale="en" />
    </>
  );
}
