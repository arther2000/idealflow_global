import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { RegionBanner } from "@/components/site/RegionBanner";
import { FaqList, Qa } from "@/components/site/Faq";
import { useReveal } from "@/hooks/use-reveal";
import { pageHead } from "@/lib/seo";
import type { FaqItem } from "@/lib/jsonld";

/** Visible FAQ — also emitted as FAQPage JSON-LD, so keep the two in one place. */
const FAQ: FaqItem[] = [
  {
    q: "How is iDealFlow.ai different from other CRMs?",
    a: "A typical CRM just manages contacts. iDealFlow.ai is a complete sales automation system: lead capture, LINE & email follow-up, sales funnels, AI chat, booking and course sales — all in one platform. On top of that, you get the only multilingual localization suite of its kind, plus hands-on onboarding support for Asia-Pacific markets.",
  },
  {
    q: "I’m not technical. Will it be hard to get started?",
    a: "Not at all. Every plan includes full training and onboarding — online courses plus in-person classroom sessions covering platform basics, workflows and setup. Our team helps you complete your initial setup based on your needs, right through to go-live.",
  },
  {
    q: "Does it support LINE?",
    a: "Yes — it’s one of our biggest strengths. Our LINE suite is built in-house by the iDealFlow team and is the only localized solution with Flex Message support. It’s designed around how businesses in LINE-first markets communicate, and native support for Taiwan’s leading payment gateways is rolling out now.",
  },
  {
    q: "Is GoHighLevel a reliable foundation?",
    a: "GoHighLevel is an AI-powered business growth operating system founded in Dallas, Texas in 2018. It powers more than a million businesses worldwide, offers 24/7 support, hosts its annual LevelUp / HighLevel Summit, and ships updates constantly — backed by a mature global ecosystem.",
  },
  {
    q: "What’s included in the plan?",
    a: "The annual plan is US$1,197/year and includes the full-featured platform powered by GoHighLevel (worth over NT$100,000), training and online learning resources, access to our online learning platform, and initial setup and launch support.",
  },
  {
    q: "Who is iDealFlow.ai for?",
    a: '{ "It’s especially well suited to coaches, consultants, trainers, knowledge creators and small businesses — with ready-made playbooks for local services, B2B and e-commerce, too. If your business depends on turning leads into sales, iDealFlow.ai can automate the entire journey." }',
  },
];

export const Route = createFileRoute("/")({
  head: () =>
    pageHead({
      faq: FAQ,
      path: "/",
      title: "iDealFlow.ai | AI Sales Automation Platform — Let Deals Close Themselves",
      description:
        "CRM, LINE & email marketing, funnels, AI chat, booking and courses in one platform. Every lead gets followed up automatically, all the way to a closed deal.",
    }),
  component: IndexPage,
});

function IndexPage() {
  useReveal();

  return (
    <>
      <RegionBanner current="en" />
      <SiteNav locale="en" />
      {/* ===== Hero ===== */}
      <section className="hero" id="top">
        <div className="hero-glow"></div>
        <div className="hero-glow g2"></div>
        <div className="wrap hero-inner">
          <div className="hero-badge reveal">
            <span className="dot"></span>
            More traffic × More deals × Lower costs
          </div>
          <h1 className="reveal d1">
            Let deals
            <span className="grad"> close themselves.</span>
            <span className="h1-sub">Meet your hardest-working digital employee.</span>
          </h1>
          <p className="hero-sub reveal d2">
            {"Stop paying for a stack of tools just to do marketing. iDealFlow.ai brings "}
            <strong>CRM, LINE & email follow-up, sales pages, booking, AI chat and courses</strong>
            {
              " together in one system. The moment a lead comes in, it starts following up — and keeps going until the deal is done."
            }
          </p>
          <div className="hero-ctas reveal d3">
            <Link to="/contact" className="btn btn-primary">
              {"Book a Demo "}
              <span className="arr">→</span>
            </Link>
            <a className="btn btn-ghost" href="#features">
              See what it can do
            </a>
          </div>
          <div className="hero-stats reveal d4">
            <div className="hstat">
              <b>
                8<i>+</i>
              </b>
              <span>Core modules</span>
            </div>
            <div className="hstat">
              <b>
                500
                <i>+</i>
              </b>
              <span>SaaS integrations</span>
            </div>
            <div className="hstat">
              <b>
                1M
                <i>+</i>
              </b>
              <span>Businesses on the core engine</span>
            </div>
            <div className="hstat">
              <b>
                24
                <i>/7</i>
              </b>
              <span>Around-the-clock support</span>
            </div>
          </div>
          <div className="dash reveal">
            <div className="dash-bar">
              <i></i>
              <i></i>
              <i></i>
              <span className="url">app.idealflow.ai / dashboard</span>
            </div>
            <div className="dash-body">
              <div className="kpi">
                <label>New customers</label>
                <b>2,543</b> <span className="up">▲ 18%</span>
              </div>
              <div className="kpi">
                <label>Bookings</label>
                <b>1,268</b> <span className="up">▲ 24%</span>
              </div>
              <div className="kpi">
                <label>Revenue closed</label>
                <b>$286,842</b> <span className="up">▲ 32%</span>
              </div>
              <div className="kpi">
                <label>Close rate</label>
                <b>27.4%</b> <span className="up">▲ 15.6%</span>
              </div>
              <div className="dash-lower">
                <div className="panel">
                  <h5>Revenue trend (last 12 weeks)</h5>
                  <div className="bars">
                    <i style={{ height: "32%" }}></i>
                    <i style={{ height: "44%" }}></i>
                    <i style={{ height: "38%" }}></i>
                    <i style={{ height: "56%" }}></i>
                    <i style={{ height: "48%" }}></i>
                    <i style={{ height: "66%" }}></i>
                    <i style={{ height: "58%" }}></i>
                    <i style={{ height: "74%" }}></i>
                    <i style={{ height: "70%" }}></i>
                    <i style={{ height: "86%" }}></i>
                    <i style={{ height: "80%" }}></i>
                    <i style={{ height: "100%" }}></i>
                  </div>
                </div>
                <div className="panel">
                  <h5>Sales pipeline</h5>
                  <div className="funnel-row">
                    <span>Leads</span>
                    <b>658</b>
                  </div>
                  <div className="funnel-row">
                    <span>Qualified</span>
                    <b>182</b>
                  </div>
                  <div className="funnel-row">
                    <span>Proposal</span>
                    <b>95</b>
                  </div>
                  <div className="funnel-row">
                    <span>Won</span>
                    <b className="tag">32 ✓</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Core engine ===== */}
      <div className="engine">
        <div className="wrap engine-inner">
          <div className="engine-txt reveal">
            <h3>
              {"Your sales automation, built on a world-class platform "}
              <span>· powered by GoHighLevel</span>
            </h3>
            <p>
              At its core is GoHighLevel, the AI-powered business growth operating system founded in
              Dallas, Texas in 2018. It already powers more than a million businesses worldwide —
              feature-rich, constantly updated, with a truly global ecosystem.
            </p>
          </div>
          <div className="engine-badges reveal d1">
            <div className="ebadge">
              <b>2018</b>
              <span>Founded</span>
            </div>
            <div className="ebadge">
              <b>1M+</b>
              <span>Businesses powered</span>
            </div>
            <div className="ebadge">
              <b>24/7</b>
              <span>Support</span>
            </div>
          </div>
        </div>
      </div>
      {/* ===== Core features ===== */}
      <section className="features" id="features">
        <div className="wrap">
          <div className="center reveal">
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              CORE FEATURES
            </div>
            <h2 className="h2">
              Too many tools. Too many bills. Data everywhere.
              <br />
              <em>One system</em>
              {" fixes all of it."}
            </h2>
            <p className="lead">
              Every marketing tool you need, all in one place — and all connected. From the first
              lead to the final payment, every step is covered.
            </p>
          </div>
          <div className="fgrid">
            <Link to="/crm" className="fcard reveal">
              <span className="num">01</span>
              <div className="ficon">
                <svg viewBox="0 0 24 24">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h4>CRM</h4>
              <p>
                See where every lead came from, what you talked about and where they stand — at a
                glance. No more leads forgotten in a spreadsheet.
              </p>
              <span className="more">
                {"Learn more "}
                <span className="arr">→</span>
              </span>
            </Link>
            <Link to="/email" className="fcard reveal d1">
              <span className="num">02</span>
              <div className="ficon">
                <svg viewBox="0 0 24 24">
                  <path d="M22 2 11 13" />
                  <path d="M22 2 15 22l-4-9-9-4 20-7z" />
                </svg>
              </div>
              <h4>LINE & Email Automation</h4>
              <p>
                Write it once and it keeps sending until the deal closes. Follow up, remind and
                nurture automatically based on tags and behavior — across both channels.
              </p>
              <span className="more">
                {"Learn more "}
                <span className="arr">→</span>
              </span>
            </Link>
            <Link to="/funnel" className="fcard reveal d2">
              <span className="num">03</span>
              <div className="ficon">
                <svg viewBox="0 0 24 24">
                  <path d="M3 4h18l-7 8v6l-4 2v-8L3 4z" />
                </svg>
              </div>
              <h4>Funnels & Websites</h4>
              <p>
                Build pages that convert — no code required. 300+ drag-and-drop templates, with
                built-in A/B testing and funnel analytics.
              </p>
              <span className="more">
                {"Learn more "}
                <span className="arr">→</span>
              </span>
            </Link>
            <div className="fcard reveal d3">
              <span className="num">04</span>
              <div className="ficon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 8V4H8" />
                  <rect x="4" y="8" width="16" height="12" rx="2" />
                  <path d="M2 14h2" />
                  <path d="M20 14h2" />
                  <path d="M15 13v2" />
                  <path d="M9 13v2" />
                </svg>
              </div>
              <h4>AI Replies & Routing</h4>
              <p>
                Even 2 a.m. messages get answered. AI responds, detects intent and routes
                conversations automatically across LINE, Messenger and Instagram.
              </p>
            </div>
            <Link to="/calendar" className="fcard reveal">
              <span className="num">05</span>
              <div className="ficon">
                <svg viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4" />
                  <path d="M8 2v4" />
                  <path d="M3 10h18" />
                  <path d="m9 16 2 2 4-4" />
                </svg>
              </div>
              <h4>Smart Booking</h4>
              <p>
                Customers book themselves. The system sends the reminders. One-on-one sessions,
                group classes and round-robin team scheduling — with far fewer no-shows.
              </p>
              <span className="more">
                {"Learn more "}
                <span className="arr">→</span>
              </span>
            </Link>
            <div className="fcard reveal d1">
              <span className="num">06</span>
              <div className="ficon">
                <svg viewBox="0 0 24 24">
                  <path d="M3 3v18h18" />
                  <path d="m7 15 4-6 4 3 5-7" />
                </svg>
              </div>
              <h4>Analytics & Reporting</h4>
              <p>
                Where your money goes, where customers come from, where they drop off — all on one
                dashboard. Let the data guide your growth.
              </p>
            </div>
            <div className="fcard reveal d2">
              <span className="num">07</span>
              <div className="ficon">
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <path d="m10 8 6 4-6 4V8z" />
                </svg>
              </div>
              <h4>Online Courses</h4>
              <p>
                Launch your own course platform, member area and student community. Instant access
                and certificates after payment — and no platform taking a cut.
              </p>
            </div>
            <Link to="/automation" className="fcard reveal d3">
              <span className="num">08</span>
              <div className="ficon">
                <svg viewBox="0 0 24 24">
                  <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <h4>Workflow Automation</h4>
              <p>
                While you sleep, it keeps following up. Trigger workflows from forms, bookings or
                payments, and connect your CRM, notifications, APIs and AI decisions.
              </p>
              <span className="more">
                {"Learn more "}
                <span className="arr">→</span>
              </span>
            </Link>
          </div>
        </div>
      </section>
      {/* ===== Who it's for ===== */}
      <section className="audience" id="audience">
        <div className="wrap">
          <div className="center reveal">
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              WHO IS IT FOR
            </div>
            <h2 className="h2">
              Whatever your business,
              <br />
              {"there’s a path to "}
              <em>automated sales.</em>
            </h2>
            <p className="lead">
              Four business models. Four ready-made automation playbooks. Find yours, and let the
              system handle the rest.
            </p>
          </div>
          <div className="agrid">
            <div className="acard reveal">
              <div className="ahead">
                <div className="aicon">
                  <svg viewBox="0 0 24 24">
                    <path d="M3 21h18" />
                    <path d="M5 21V7l7-4 7 4v14" />
                    <path d="M9 21v-6h6v6" />
                  </svg>
                </div>
                <h4>Local Services</h4>
              </div>
              <p className="aq">
                Salons, gyms, yoga studios, clinics, restaurants — want to catch every inquiry
                without adding staff?
              </p>
              <span className="loop">
                {"The loop: Attract → Visit → Purchase → "}
                <b>Return → Refer</b>
              </span>
              <ul className="alist">
                <li>Automatic Google review requests that keep 5-star reviews coming</li>
                <li>Automated booking reminders that cut no-shows dramatically</li>
                <li>A 24/7 AI assistant that answers every late-night message</li>
                <li>LINE & email check-ins that win back lapsed customers</li>
              </ul>
            </div>
            <div className="acard reveal d1">
              <div className="ahead">
                <div className="aicon">
                  <svg viewBox="0 0 24 24">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>
                <h4>Coaches, Consultants & Educators</h4>
              </div>
              <p className="aq">
                Want people signing up for your courses and sessions around the clock?
              </p>
              <span className="loop">
                {"The loop: Attract → Register → Attend → "}
                <b>Rebuy → Refer</b>
              </span>
              <ul className="alist">
                <li>Event registration pages live in minutes with ready-made templates</li>
                <li>Automatic LINE + email reminders that noticeably boost attendance</li>
                <li>Online courses, member areas and communities in one place</li>
                <li>Instant access after payment — so you close sales even at midnight</li>
              </ul>
            </div>
            <div className="acard reveal d2">
              <div className="ahead">
                <div className="aicon">
                  <svg viewBox="0 0 24 24">
                    <rect x="2" y="7" width="20" height="14" rx="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                </div>
                <h4>B2B & Agencies</h4>
              </div>
              <p className="aq">
                Want a steady stream of inquiries — and a sales team that never drops a lead?
              </p>
              <span className="loop">
                {"The loop: Attract → Inquire → Follow up → "}
                <b>Close</b>
              </span>
              <ul className="alist">
                <li>Form inquiries flow straight into the CRM and get assigned instantly</li>
                <li>Automated nurture emails keep prospects warm</li>
                <li>A visual pipeline shows every deal’s status at a glance</li>
                <li>Real-time source tracking puts your budget where it counts</li>
              </ul>
            </div>
            <div className="acard reveal d3">
              <div className="ahead">
                <div className="aicon">
                  <svg viewBox="0 0 24 24">
                    <circle cx="8" cy="21" r="1" />
                    <circle cx="19" cy="21" r="1" />
                    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                  </svg>
                </div>
                <h4>E-commerce Brands</h4>
              </div>
              <p className="aq">
                Want to turn traffic into orders — and orders into repeat customers?
              </p>
              <span className="loop">
                {"The loop: Attract → Visit → Order → "}
                <b>Reorder</b>
              </span>
              <ul className="alist">
                <li>Abandoned-cart recovery that wins back almost-sales</li>
                <li>Segmented remarketing that lands the right offer at the right time</li>
                <li>AI chat that answers instantly on every channel and guides the sale</li>
                <li>Order, invoice and shipping notifications, fully automated</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Three advantages ===== */}
      <section className="three" id="three">
        <div className="wrap">
          <div className="center reveal">
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              WHY iDealFlow.ai
            </div>
            <h2 className="h2">
              Why iDealFlow.ai?
              <br />
              {"Three advantages "}
              <em>built for Asia-Pacific.</em>
            </h2>
            <p className="lead">
              Buying software is easy. Getting your team to use it is the hard part. That’s why you
              get more than a platform — you get localization, training and hands-on onboarding, so
              your team actually uses it and sees results.
            </p>
          </div>
          <div className="tgrid">
            <div className="tcard reveal">
              <div className="no">01</div>
              <div className="ticon">
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <h3>
                The only multilingual
                <br />
                localization suite
              </h3>
              <p>
                A complete localization layer built in-house by our team, so a world-class platform
                truly speaks your customers’ language.
              </p>
              <ul className="tlist">
                <li>Traditional Chinese, Simplified Chinese and Japanese</li>
                <li>Fully localized interface for a faster rollout</li>
                <li>Higher team adoption and a shorter learning curve</li>
              </ul>
            </div>
            <div className="tcard reveal d1">
              <div className="no">02</div>
              <div className="ticon">
                <svg viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </div>
              <h3>
                Native LINE suite +
                <br />
                Taiwan payment gateways
              </h3>
              <p>
                Across Asia, business happens on LINE. Our messaging and payment integrations are
                built for the way these markets actually work.
              </p>
              <ul className="tlist">
                <li>The only localized solution with Flex Message support</li>
                <li>Native support for Taiwan’s leading payment gateways, rolling out now</li>
                <li>Designed around local culture and customer communication</li>
              </ul>
            </div>
            <div className="tcard reveal d2">
              <div className="no">03</div>
              <div className="ticon">
                <svg viewBox="0 0 24 24">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <h3>
                Complete training
                <br />
                and onboarding
              </h3>
              <p>
                Online courses plus in-person classroom training, so your team truly learns the
                system and puts it to work.
              </p>
              <ul className="tlist">
                <li>Platform basics, workflow tutorials and onboarding training</li>
                <li>Learn online or in the classroom — your choice</li>
                <li>Hands-on help with setup and launch, tailored to your needs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Integrations ===== */}
      <section className="integrations" id="integrations">
        <div className="wrap">
          <div className="center reveal">
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              ECOSYSTEM
            </div>
            <h2 className="h2">
              {"Connects to "}
              <em>500+</em>
              {" SaaS tools worldwide"}
            </h2>
            <p className="lead">
              {
                "Chances are, the tools you use today plug right in. Bring them together into one automated sales system — and never copy-paste data again."
              }
            </p>
          </div>
          <div className="chips reveal">
            <span className="chip">
              <span className="cdot"></span>
              Meta / Facebook / Instagram
            </span>
            <span className="chip">
              <span className="cdot"></span>
              Google / Google Workspace
            </span>
            <span className="chip">
              <span className="cdot"></span>
              LINE Official Account
            </span>
            <span className="chip">
              <span className="cdot"></span>
              TikTok / LinkedIn
            </span>
            <span className="chip">
              <span className="cdot"></span>
              Slack / Monday / Notion
            </span>
            <span className="chip">
              <span className="cdot"></span>
              Shopify / QuickBooks
            </span>
            <span className="chip">
              <span className="cdot"></span>
              Zoom / Calendly
            </span>
            <span className="chip">
              <span className="cdot"></span>
              Mailchimp / Canva
            </span>
            <span className="chip">
              <span className="cdot"></span>
              Zapier / Make / n8n
            </span>
            <span className="chip">
              <span className="cdot"></span>
              Custom API / Webhook integrations
            </span>
          </div>
          <p className="int-note reveal d1">
            {"Covering five categories — "}
            <b>
              social & ads, team collaboration, e-commerce & payments, meetings & booking, and
              content & marketing
            </b>
            {" — plus API and webhook connections to your own systems."}
          </p>
        </div>
      </section>
      {/* ===== Success stories ===== */}
      <section className="cases" id="cases">
        <div className="wrap">
          <div className="center reveal">
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              SUCCESS STORIES
            </div>
            <h2 className="h2">
              {"Success stories: "}
              <em>traffic into attendees, attendees into customers.</em>
            </h2>
            <p className="lead">
              {
                "Real numbers from businesses using iDealFlow.ai to grow sign-ups, attendance, sales and course revenue."
              }
            </p>
          </div>
          <div className="cgrid">
            <div className="ccard reveal">
              <div className="chead">
                <div className="avatar">A</div>
                <div>
                  <h4>Coach Arthur Wu</h4>
                  <span>AI & government grants instructor | Seven-figure monthly revenue</span>
                </div>
              </div>
              <ul className="cpoints">
                <li>Runs his entire grant-training business on iDealFlow.ai</li>
                <li>
                  Registration pages, LINE & email reminders, lead tracking and sales — all
                  connected
                </li>
                <li>Automation that lifts seminar attendance and close rates</li>
                <li>Featured in China Times and other media</li>
              </ul>
              <div className="cmetrics">
                <div className="metric">
                  <b>45%</b>
                  <span>Seminar attendance</span>
                </div>
                <div className="metric">
                  <b>NT$1M+</b>
                  <span>Monthly revenue</span>
                </div>
              </div>
            </div>
            <div className="ccard reveal d1">
              <div className="chead">
                <div className="avatar">E</div>
                <div>
                  <h4>Emma</h4>
                  <span>Parenting coach | Knowledge-business brand</span>
                </div>
              </div>
              <ul className="cpoints">
                <li>Fully onboarded on iDealFlow.ai in no time</li>
                <li>Automated registrations, follow-ups, seminar attendance and course delivery</li>
                <li>A systematic approach to leads, with steady growth</li>
                <li>Student word-of-mouth keeps bringing in new leads</li>
              </ul>
              <div className="cmetrics">
                <div className="metric">
                  <b>NT$100K+</b>
                  <span>Monthly revenue in 20 days</span>
                </div>
                <div className="metric">
                  <b>56%+</b>
                  <span>Seminar attendance</span>
                </div>
              </div>
            </div>
          </div>
          <p className="cases-note reveal">
            From coaches and consultants to education brands, iDealFlow.ai turns leads into revenue.
          </p>
        </div>
      </section>
      {/* ===== Pricing ===== */}
      <section className="pricing" id="pricing">
        <div className="wrap">
          <div className="center reveal">
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              {"PRICING & ONBOARDING"}
            </div>
            <h2 className="h2">
              {"Pricing & "}
              <em>Onboarding</em>
            </h2>
            <p className="lead">
              {
                "From sign-up to launch, we’re with you every step. We’ll help you complete your initial setup based on your needs, so you can get started fast."
              }
            </p>
          </div>
          <div className="pwrap">
            <div className="pcard reveal">
              <span className="ribbon">★ Best-value starter plan</span>
              <div className="price">
                <span className="cur">US$</span>
                1,197
                <small>{" / year"}</small>
              </div>
              <p className="psub">The full-featured platform, powered by GoHighLevel</p>
              <ul className="plist">
                <li>
                  {"Full-featured platform (worth over "}
                  <b>NT$100,000</b>)
                </li>
                <li>Training and online learning resources</li>
                <li>Access to our online learning platform</li>
                <li>Initial setup and launch support</li>
                <li>The only multilingual localization suite</li>
              </ul>
              <Link to="/start" className="btn btn-primary">
                {"Explore the 14-Day Launch Plan "}
                <span className="arr">→</span>
              </Link>
            </div>
            <div className="steps reveal d1">
              <h3>Up and running in six steps</h3>
              <p>Our team guides you all the way, from your first click to go-live.</p>
              <div className="step">
                <div className="sn">1</div>
                <div>
                  <h5>Sign up</h5>
                  <p>Register and complete your purchase</p>
                </div>
              </div>
              <div className="step">
                <div className="sn">2</div>
                <div>
                  <h5>Tell us about you</h5>
                  <p>Share your details and goals</p>
                </div>
              </div>
              <div className="step">
                <div className="sn">3</div>
                <div>
                  <h5>Choose your focus</h5>
                  <p>Automation, process design, platform setup and more</p>
                </div>
              </div>
              <div className="step">
                <div className="sn">4</div>
                <div>
                  <h5>Schedule training</h5>
                  <p>Our team sets up your kickoff and lessons</p>
                </div>
              </div>
              <div className="step">
                <div className="sn">5</div>
                <div>
                  <h5>Start learning</h5>
                  <p>In the classroom or online</p>
                </div>
              </div>
              <div className="step">
                <div className="sn">6</div>
                <div>
                  <h5>Go live</h5>
                  <p>Launch your system and start growing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== FAQ ===== */}
      <section className="faq" id="faq">
        <div className="wrap">
          <div className="center reveal">
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              FAQ
            </div>
            <h2 className="h2">Frequently asked questions</h2>
          </div>
          <FaqList className="faq-list reveal">
            {FAQ.map((f) => (
              <Qa key={f.q} question={f.q}>
                <p>{f.a}</p>
              </Qa>
            ))}
          </FaqList>
        </div>
      </section>
      {/* ===== Final CTA ===== */}
      <section className="final">
        <div className="wrap">
          <h2 className="reveal">
            Every lead.
            <br />
            <span>Never wasted again.</span>
          </h2>
          <p className="reveal d1">
            Get started today, and make iDealFlow.ai your hardest-working digital employee.
          </p>
          <div className="hero-ctas reveal d2">
            <Link to="/contact" className="btn btn-primary">
              {"Book a Demo "}
              <span className="arr">→</span>
            </Link>
            <a className="btn btn-ghost" href="#pricing">
              See Pricing
            </a>
          </div>
        </div>
      </section>
      {/* ===== Footer ===== */}
      <SiteFooter locale="en" />
    </>
  );
}
