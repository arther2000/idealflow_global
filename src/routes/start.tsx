import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { RegionBanner } from "@/components/site/RegionBanner";
import { FaqList, Qa } from "@/components/site/Faq";
import { useReveal } from "@/hooks/use-reveal";
import { pageHead } from "@/lib/seo";
import { useStartSticky } from "@/hooks/use-start-sticky";
import type { FaqItem } from "@/lib/jsonld";

/** Visible FAQ — also emitted as FAQPage JSON-LD, so keep the two in one place. */
const FAQ: FaqItem[] = [
  {
    q: "How much does the program cost, and what’s included?",
    a: "US$1,197 per year (about NT$108 a day). It includes the full iDealFlow.ai platform (unlimited funnels, websites, CRM, booking, email and LINE marketing, course platform and AI tools); three pre-built modules for booking, payments and reviews; the 5-Day hands-on course; our one-of-a-kind multilingual localization + LINE suite; and weekly live Q&A plus our member community.",
  },
  {
    q: "Is there any room on price?",
    a: "Look at it this way: subscribing to the same features separately costs at least NT$34,000 a month — before integration and learning time. Hiring a consultant to build a single automated workflow starts in the low six figures (NT$). This program bundles tools, training and a ready-made plan for the price of a daily latte, and the time you save far outweighs the investment. As onboarding spots fill, the price will only go up — joining now locks in the lowest rate.",
  },
  {
    q: "There are so many features. Can I really learn this?",
    a: "Yes — because you don’t have to assemble anything. Traditional automation means learning five or six tools and stitching them together with Zapier, where one broken link brings the whole chain down. We bring every feature into one system and pre-configure the automation modules for you: pick a template, fill in your details, hit activate. It’s as easy as sending a text. With hands-on videos, weekly Q&A and an AI assistant, if you can use a smartphone, you can do this.",
  },
  {
    q: "I’m a complete beginner. Will this work for me?",
    a: "Absolutely. Plenty of our members started from zero. All you need is a willingness to learn. We give you the best car (the system), teach you to drive (the training) and hand you the GPS (the plan) — you just have to get behind the wheel. Want to move even faster? Ask during your consultation about having our team handle the basic setup so you can start using it right away.",
  },
  {
    q: "Why join now?",
    a: "Because the market won’t wait. Traditional sales processes leak customers at every step, and AI automation is where business is clearly headed over the next 3–5 years. Those who move now gain a first-mover advantage; those who wait will be playing catch-up. And right now, the program is at its lowest price — as onboarding spots fill and capacity tightens, prices will rise.",
  },
  {
    q: "What if I join and it’s not a good fit?",
    a: "That’s exactly why the consultation comes first. Before you sign up, our team assesses your business model, lead sources and rollout plan for free — and we only start once we know it’s a fit. After you join, you’re fully supported: weekly Q&A and tech support catch you whenever you get stuck. Our goal is for you to actually use it, not to make a sale and disappear.",
  },
  {
    q: "Does the system support LINE and how business is done in Taiwan?",
    a: "Yes — it’s what sets iDealFlow.ai apart. Our in-house LINE suite is the only localized app that supports Flex Message, the interface is fully available in Traditional Chinese, and native support for Taiwan’s leading payment providers is rolling out. In Taiwan, business happens on LINE — and our system was built for exactly that.",
  },
];

export const Route = createFileRoute("/start")({
  head: () =>
    pageHead({
      breadcrumb: "14-Day Launch Program",
      product: true,
      faq: FAQ,
      path: "/start",
      title: "GoHighLevel Onboarding: 14-Day Launch Program (US$1,197/yr) | iDealFlow.ai",
      description:
        "Launch an automated sales system in 14 days: the full platform, pre-built modules, hands-on training and live support. No more courses, tool sprawl or pricey tech hires.",
    }),
  component: StartPage,
});

function StartPage() {
  useReveal();
  const showSticky = useStartSticky();

  return (
    <>
      <RegionBanner current="en" />
      <SiteNav locale="en" variant="start" />
      {/* Hero */}
      <section className="hero" style={{ paddingBottom: "110px" }}>
        <div className="hero-glow"></div>
        <div className="hero-glow g2"></div>
        <div className="wrap hero-inner">
          <div className="fp-badgeline reveal">
            <span className="fp-chip">🏪 Local business owners</span>
            <span className="fp-chip">🎓 Coaches, consultants & educators</span>
            <span className="fp-chip">💼 Small business owners</span>
          </div>
          <h1 className="reveal d1">
            <span className="grad">14 days</span>
            {" to a business that"}
            <br />
            runs itself.
          </h1>
          <p className="hero-sub reveal d2">
            {"System, modules, training and support — "}
            <strong>all in one.</strong>
            {
              " Not another tool you have to figure out on your own, but an automated sales pipeline that’s already built for you."
            }
          </p>
          <div className="fp-nos reveal d3">
            <div className="fp-no">
              <span className="x">✗</span>
              No more endless courses
            </div>
            <div className="fp-no">
              <span className="x">✗</span>
              No more paying for ten marketing tools
            </div>
            <div className="fp-no">
              <span className="x">✗</span>
              No expensive tech team
            </div>
          </div>
          <div className="hero-ctas reveal d3">
            <a className="btn btn-primary" href="#offer">
              {"See What’s Included "}
              <span className="arr">→</span>
            </a>
            <a className="btn btn-ghost" href="#story">
              Hear Our Story First
            </a>
          </div>
          <p className="fp-risk reveal d4">
            <b>✓ Zero risk</b>
            {
              ": Start with a free consultation. We only begin once we know it’s a fit — and our team stays with you until your system goes live."
            }
          </p>
        </div>
      </section>
      {/* Pain points */}
      <section className="pain">
        <div className="wrap">
          <div className="center reveal">
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              SOUND FAMILIAR?
            </div>
            <h2 className="h2">
              Building a business is hard.
              <br />
              Are you stuck here, too?
            </h2>
          </div>
          <div className="pain-grid">
            <div className="pain-card reveal">
              <div className="pq">Not technical — so growth stalls?</div>
              <p>
                One marketing tool after another. Settings that won’t cooperate, integrations that
                break, and missed opportunities and leads along the way. You want to launch, but
                you’re stuck “researching tools.”
              </p>
            </div>
            <div className="pain-card reveal d1">
              <div className="pq">Serving clients and chasing new ones?</div>
              <p>
                You’re doing the work of three people: answering messages, following up on leads,
                booking appointments, running marketing. The busywork eats all your energy, leaving
                no time for the work that actually grows revenue.
              </p>
            </div>
            <div className="pain-card reveal d2">
              <div className="pq">Short-staffed, and leads slip through?</div>
              <p>
                Entry-level hires can’t fix it, and experts cost too much. Late-night inquiries go
                unanswered, new sign-ups never get a follow-up, and deals quietly slip away, one by
                one.
              </p>
            </div>
          </div>
          <p className="pain-note reveal">
            {"If you’re nodding along — relax, "}
            <em>you’re not alone</em>
            {". Every business owner we’ve worked with has been right where you are."}
          </p>
        </div>
      </section>
      {/* Founder story */}
      <section className="founder" id="story">
        <div className="wrap">
          <div className="center reveal">
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              MEET THE FOUNDER
            </div>
            <h2 className="h2">
              {"Hi, I’m "}
              <em>Coach Arthur</em>
              {" Wu"}
            </h2>
          </div>
          <div className="founder-grid">
            <div className="founder-card reveal">
              <div className="favatar">A</div>
              <h4>Coach Arthur Wu</h4>
              <p className="ftitle">CEO, iDealFlow</p>
              <ul>
                <li>AI & government-grant instructor with a seven-figure monthly income (NT$)</li>
                <li>Founder of iDealFlow.ai</li>
                <li>Automation practitioner with 45% seminar attendance</li>
                <li>Featured by China Times News and other media</li>
                <li>Helps coaches, consultants and SMBs adopt automation</li>
              </ul>
            </div>
            <div className="founder-txt reveal d1">
              <h3>
                I’m not an engineer.
                <br />
                Like you, I’m a business owner who was drowning in busywork.
              </h3>
              <p>
                {
                  "I’m an instructor by trade. Every seminar meant handling sign-up forms, attendance reminders, lead tracking, consultation invites and sales follow-ups. "
                }
                <b>The more leads I had, the busier I got — and the more deals I missed.</b>
                {" The irony? The more successful my seminars were, the worse my life got."}
              </p>
              <p>
                {
                  "I tried what everyone tries: one tool for sign-ups, another for reminders, leads in a spreadsheet, yet another account for email marketing… "
                }
                <span className="fhl">
                  Just getting five tools to talk to each other took more time than creating my
                  content.
                </span>
                {
                  " And every one had a monthly fee. Together, they cost more than a part-time hire."
                }
              </p>
              <p>
                {
                  "Then I found the answer: bring every step into one system and let the workflow hand off automatically. With it, I pushed seminar attendance to "
                }
                <b>45%</b>
                {
                  ", and sign-ups, reminders, follow-ups and sales all started happening on their own. "
                }
                <b>Finally, I could focus on simply teaching great classes.</b>
              </p>
              <p>
                {
                  "It worked for me — and for the partners who adopted it alongside me. Emma, a parenting coach, hit "
                }
                <b>NT$100K+ in monthly revenue within 20 days and 56%+ seminar attendance</b>
                {
                  ". That’s why I founded iDealFlow.ai: built on GoHighLevel, a world-class engine, plus our own "
                }
                <span className="fhl">
                  one-of-a-kind multilingual localization suite, deep LINE integration and hands-on,
                  human-led onboarding
                </span>
                {", so other business owners never have to take the long way I did."}
              </p>
              <p>
                <b>The best tool is worthless if you never use it.</b>
                {
                  " That’s why this program gives you more than software. It’s the complete package — system, pre-built modules, hands-on training and live support. In 14 days, we’ll help you put your business on autopilot."
                }
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Offer */}
      <section className="offer" id="offer">
        <div className="wrap">
          <div className="center reveal">
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              INTRODUCING
            </div>
            <h2 className="h2">
              {"iDealFlow.ai "}
              <em>14-Day Launch Program</em>
            </h2>
            <p className="lead" style={{ color: "rgba(255,255,255,.7)" }}>
              The system, modules, training and support — all at once. Join today and start
              automating within 14 days.
            </p>
          </div>
          <div className="offer-box reveal">
            <span className="obadge">★ Everything you get</span>
            <div className="offer-row">
              <span className="oname">iDealFlow.ai full platform (GoHighLevel engine)</span>
              <span className="odots"></span>
              <span className="oval">NT$100,000+ value</span>
            </div>
            <div className="offer-row">
              <span className="oname">5-Day Quick Start hands-on course</span>
              <span className="odots"></span>
              <span className="oval">NT$24,000 value</span>
            </div>
            <div className="offer-row">
              <span className="oname">Smart Booking System · pre-built module</span>
              <span className="odots"></span>
              <span className="oval">NT$15,000 value</span>
            </div>
            <div className="offer-row">
              <span className="oname">Lead-to-Payment System · pre-built module</span>
              <span className="odots"></span>
              <span className="oval">NT$12,000 value</span>
            </div>
            <div className="offer-row">
              <span className="oname">Reputation Management · pre-built module</span>
              <span className="odots"></span>
              <span className="oval">NT$15,000 value</span>
            </div>
            <div className="offer-row">
              <span className="oname">One-of-a-kind multilingual localization + LINE suite</span>
              <span className="odots"></span>
              <span className="oval">NT$30,000 value</span>
            </div>
            <div className="offer-row">
              <span className="oname">Weekly live tech Q&A</span>
              <span className="odots"></span>
              <span className="oval">NT$18,000 value</span>
            </div>
            <div className="offer-row">
              <span className="oname">Online marketing courses + member community</span>
              <span className="odots"></span>
              <span className="oval">NT$60,000 value</span>
            </div>
            <div className="offer-total">
              <span>Total value</span>
              <span className="tval">NT$274,000+</span>
            </div>
            <div className="offer-price">
              <div className="strike">Total value NT$274,000+</div>
              <div className="now">
                US$1,197
                <small>{" / year"}</small>
              </div>
              <div className="percoffee">
                ☕ About NT$108 a day — the price of a latte for a digital employee that never
                clocks out
              </div>
              <Link to="/contact" className="btn btn-primary">
                {"Yes! I’m In — Join the Program "}
                <span className="arr">→</span>
              </Link>
              <p className="fp-risk" style={{ marginTop: "16px" }}>
                <b>✓</b>
                {
                  " Free consultation first — start only if it’s a fit · Guided by our team until your system goes live"
                }
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Comparison */}
      <section className="compare">
        <div className="wrap">
          <div className="center reveal">
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              DO THE MATH
            </div>
            <h2 className="h2">
              {"DIY tool stack vs. "}
              <em>iDealFlow.ai, all in one</em>
            </h2>
            <p className="lead">
              What would the same features cost if you subscribed to each one separately? We did the
              math for you.
            </p>
          </div>
          <div className="cmp-table reveal">
            <div className="cmp-head">
              <div>What you need</div>
              <div>Separate subscriptions (monthly)</div>
              <div className="hi-col">iDealFlow.ai</div>
            </div>
            <div className="cmp-row">
              <div className="cl">CRM</div>
              <div className="cm">~NT$6,000</div>
              <div className="cr">✓ Included</div>
            </div>
            <div className="cmp-row">
              <div className="cl">Email marketing platform</div>
              <div className="cm">~NT$4,000</div>
              <div className="cr">✓ Included</div>
            </div>
            <div className="cmp-row">
              <div className="cl">Sales funnels + website builder</div>
              <div className="cm">~NT$6,000</div>
              <div className="cr">✓ Included</div>
            </div>
            <div className="cmp-row">
              <div className="cl">Appointment scheduling</div>
              <div className="cm">~NT$3,000</div>
              <div className="cr">✓ Included</div>
            </div>
            <div className="cmp-row">
              <div className="cl">Social media scheduling</div>
              <div className="cm">~NT$4,000</div>
              <div className="cr">✓ Included</div>
            </div>
            <div className="cmp-row">
              <div className="cl">AI copywriting</div>
              <div className="cm">~NT$3,000</div>
              <div className="cr">✓ Included</div>
            </div>
            <div className="cmp-row">
              <div className="cl">Automation (Zapier-style)</div>
              <div className="cm">~NT$4,500</div>
              <div className="cr">✓ Included</div>
            </div>
            <div className="cmp-row">
              <div className="cl">Online course platform</div>
              <div className="cm">~NT$3,500</div>
              <div className="cr">✓ Included</div>
            </div>
            <div className="cmp-row total">
              <div className="cl">Monthly spend</div>
              <div className="cm">NT$34,000+</div>
              <div className="cr">~NT$3,300</div>
            </div>
          </div>
          <p className="cmp-note reveal">
            {
              "And with separate subscriptions, you’re wiring them together yourself, your data doesn’t sync, and when something breaks, every vendor points at someone else. "
            }
            <b>Integration itself is the biggest value.</b>
          </p>
          <div className="guarantee reveal">
            <div className="gseal">
              <b>100%</b>
              <span>Peace of mind</span>
            </div>
            <div>
              <h5>Our Peace-of-Mind Promise</h5>
              <p>
                Start with a free consultation, where our team assesses whether your business is a
                good fit. Once you join, a dedicated specialist guides your onboarding until your
                system is live. We want you to actually use it — not just sell you software.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Features */}
      <section className="usecases">
        <div className="wrap">
          <div className="center reveal">
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              ALL-IN-ONE
            </div>
            <h2 className="h2">One system. Eight integrated tools.</h2>
            <p className="lead">
              From first click to closed deal, every step hands off automatically — in one place.
            </p>
          </div>
          <div className="ugrid" style={{ gridTemplateColumns: "repeat(4,1fr)" }}>
            <div className="ucard reveal">
              <span className="utag">01</span>
              <h4>7-Channel Follow-Up</h4>
              <p>
                {"Email, SMS, LINE, Messenger, Instagram and more — conversations and leads, "}
                <b>guided automatically to the sale</b>.
              </p>
            </div>
            <div className="ucard reveal d1">
              <span className="utag">02</span>
              <h4>AI Booking</h4>
              <p>
                {"Auto-assign, auto-remind, auto-follow-up — "}
                <b>know every client like an old friend</b>.
              </p>
            </div>
            <div className="ucard reveal d2">
              <span className="utag">03</span>
              <h4>AI Auto-Reply</h4>
              <p>
                {"Never miss a message. Replies go out instantly, guiding customers to "}
                <b>book, visit and buy</b>.
              </p>
            </div>
            <div className="ucard reveal d3">
              <span className="utag">04</span>
              <h4>CRM</h4>
              <p>
                {"Conversations, purchases, invoices, appointments — "}
                <b>every customer detail in one place</b>.
              </p>
            </div>
            <div className="ucard reveal">
              <span className="utag">05</span>
              <h4>Automated Reviews</h4>
              <p>
                {"Request Google and Facebook reviews automatically and reply from one inbox. "}
                <b>More five-stars, more new customers</b>.
              </p>
            </div>
            <div className="ucard reveal d1">
              <span className="utag">06</span>
              <h4>Powerful Reporting</h4>
              <p>
                {"Sales, acquisition and traffic by channel, all at a glance — "}
                <b>no more guessing your next move</b>.
              </p>
            </div>
            <div className="ucard reveal d2">
              <span className="utag">07</span>
              <h4>Team Tasks</h4>
              <p>
                {"Tasks and appointments assigned automatically based on each client — "}
                <b>your whole team, moving toward the goal</b>.
              </p>
            </div>
            <div className="ucard reveal d3">
              <span className="utag">08</span>
              <h4>Unlimited Funnels & Sites</h4>
              <p>
                {"Hundreds of pro templates and drag-and-drop editing — "}
                <b>launch pages and campaigns in one click</b>.
              </p>
            </div>
          </div>
          <p
            className="int-note reveal"
            style={{ color: "rgba(255,255,255,.65)", marginTop: "40px" }}
          >
            {
              "Replaces WordPress · Wix · ClickFunnels · Salesforce · HubSpot · Mailchimp · Calendly · Hootsuite · Zapier and "
            }
            <b style={{ color: "#fff" }}>50+ more tools</b>
          </p>
        </div>
      </section>
      {/* Expert support */}
      <section className="fit" style={{ background: "var(--bg-soft)" }}>
        <div className="wrap">
          <div className="center reveal">
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              WE’VE GOT YOU
            </div>
            <h2 className="h2">
              Great tools only work if you use them —
              <br />
              {"so "}
              <em>our experts have your back</em>
            </h2>
          </div>
          <div className="pain-grid">
            <div className="pain-card reveal" style={{ textAlign: "center" }}>
              <div style={{ fontSize: "36px", marginBottom: "12px" }}>🧩</div>
              <div className="pq" style={{ color: "var(--navy)" }}>
                Plug-and-play automation modules
              </div>
              <p>
                {
                  "Booking, payments and reviews come pre-built. No automation know-how needed — pick a template, fill in your details, hit activate. "
                }
                <b>Set up in 30 minutes, once and done</b>.
              </p>
            </div>
            <div className="pain-card reveal d1" style={{ textAlign: "center" }}>
              <div style={{ fontSize: "36px", marginBottom: "12px" }}>🎬</div>
              <div className="pq" style={{ color: "var(--navy)" }}>
                Step-by-step, hands-on training
              </div>
              <p>
                {"A 5-Day Quick Start course plus step-by-step setup videos — just follow along. "}
                <b>Online courses and in-person classes, combined</b>
                {", so even total beginners get up to speed with ease."}
              </p>
            </div>
            <div className="pain-card reveal d2" style={{ textAlign: "center" }}>
              <div style={{ fontSize: "36px", marginBottom: "12px" }}>🎧</div>
              <div className="pq" style={{ color: "var(--navy)" }}>
                Real tech support
              </div>
              <p>
                {"Weekly live Q&A sessions and a 24/7 AI assistant for how-to questions, with "}
                <b>multilingual interface and support</b>
                {" — so you’re never stuck overnight."}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* 3 steps */}
      <section className="integrations">
        <div className="wrap">
          <div className="center reveal">
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              3 SIMPLE STEPS
            </div>
            <h2 className="h2">
              {"Just "}
              <em>3 steps</em>
              {" to run on autopilot"}
            </h2>
          </div>
          <div className="pain-grid" style={{ marginTop: "52px" }}>
            <div
              className="pain-card reveal"
              style={{ textAlign: "center", borderTop: "4px solid var(--orange)" }}
            >
              <div
                style={{
                  fontFamily: "var(--font-en)",
                  fontSize: "38px",
                  fontWeight: "800",
                  color: "var(--orange)",
                  marginBottom: "8px",
                }}
              >
                1
              </div>
              <div className="pq" style={{ color: "var(--navy)" }}>
                Book a consultation
              </div>
              <p>Sign up, and our team will assess your business and map your rollout — free.</p>
            </div>
            <div
              className="pain-card reveal d1"
              style={{ textAlign: "center", borderTop: "4px solid var(--orange)" }}
            >
              <div
                style={{
                  fontFamily: "var(--font-en)",
                  fontSize: "38px",
                  fontWeight: "800",
                  color: "var(--orange)",
                  marginBottom: "8px",
                }}
              >
                2
              </div>
              <div className="pq" style={{ color: "var(--navy)" }}>
                Get set up
              </div>
              <p>Use pre-built modules and hands-on training to configure and launch fast.</p>
            </div>
            <div
              className="pain-card reveal d2"
              style={{ textAlign: "center", borderTop: "4px solid var(--orange)" }}
            >
              <div
                style={{
                  fontFamily: "var(--font-en)",
                  fontSize: "38px",
                  fontWeight: "800",
                  color: "var(--orange)",
                  marginBottom: "8px",
                }}
              >
                3
              </div>
              <div className="pq" style={{ color: "var(--navy)" }}>
                Run on autopilot
              </div>
              <p>
                Be fully automated within 14 days — leads come in, and the system follows up all the
                way to the sale.
              </p>
            </div>
          </div>
          <div className="center reveal" style={{ marginTop: "44px" }}>
            <a className="btn btn-primary" href="#offer">
              {"Start Step 1 Now "}
              <span className="arr">→</span>
            </a>
          </div>
        </div>
      </section>
      {/* Case studies */}
      <section className="cases">
        <div className="wrap">
          <div className="center reveal">
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              PROOF
            </div>
            <h2 className="h2">
              {"They’re already "}
              <em>on autopilot</em>
            </h2>
          </div>
          <div className="cgrid">
            <div className="ccard reveal">
              <div className="chead">
                <div className="avatar">A</div>
                <div>
                  <h4>Coach Arthur Wu</h4>
                  <span>AI & government-grant instructor | Seven-figure monthly income (NT$)</span>
                </div>
              </div>
              <ul className="cpoints">
                <li>
                  Sign-up pages, LINE and email reminders, and lead tracking — fully automated
                </li>
                <li>Runs his government-grant training business on automation</li>
                <li>Featured by China Times News and other media</li>
              </ul>
              <div className="cmetrics">
                <div className="metric">
                  <b>45%</b>
                  <span>Seminar attendance</span>
                </div>
                <div className="metric">
                  <b>7-figure</b>
                  <span>Monthly income (NT$)</span>
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
                <li>Onboarded quickly and now manages leads systematically</li>
                <li>Sign-ups, follow-ups, seminar attendance and courses — all in one flow</li>
                <li>Word-of-mouth referrals keep bringing in new leads</li>
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
        </div>
      </section>
      {/* Testimonials */}
      <section className="quotes">
        <div className="wrap">
          <div className="center reveal">
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              WHAT USERS SAY
            </div>
            <h2 className="h2">In our partners’ own words</h2>
          </div>
          <div className="q-grid">
            <div className="q-card reveal">
              <div className="qstars">★★★★★</div>
              <p>
                “I used to check every seminar sign-up by hand and remind people one by one. Now the
                system runs itself. The biggest difference is attendance — same list, more people
                show up, and sales follow.”
              </p>
              <div className="qwho">
                <div className="qav">I</div>
                <div>
                  <b>Instructor & course creator</b>
                  <span>Knowledge business</span>
                </div>
              </div>
            </div>
            <div className="q-card reveal d1">
              <div className="qstars">★★★★★</div>
              <p>
                “I was worried the system would be English-only, but the whole interface is in
                Traditional Chinese, and it even connects to LINE. When customers message me late at
                night, the AI picks up — and the next morning I open a neatly organized lead list.”
              </p>
              <div className="qwho">
                <div className="qav">L</div>
                <div>
                  <b>Local business owner</b>
                  <span>Beauty services</span>
                </div>
              </div>
            </div>
            <div className="q-card reveal d2">
              <div className="qstars">★★★★★</div>
              <p>
                “Follow-up that used to take three people now runs automatically, so I’ve moved my
                team to higher-value work. And instead of paying for a pile of tools, I pay for one.
                The savings add up fast.”
              </p>
              <div className="qwho">
                <div className="qav">S</div>
                <div>
                  <b>Small business owner</b>
                  <span>B2B services</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Is it for you */}
      <section className="fit">
        <div className="wrap">
          <div className="center reveal">
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              IS IT FOR YOU?
            </div>
            <h2 className="h2">Not sure this program is right for you?</h2>
          </div>
          <div className="fit-grid">
            <div className="fit-col yes reveal">
              <h4>✓ It’s a great fit for —</h4>
              <ul>
                <li>Founders and owners ready to grow with the latest tools</li>
                <li>Owners who know where they’re stuck and are ready to change</li>
                <li>Anyone who wants to automate repetitive work and focus on what matters</li>
                <li>Coaches, consultants, educators, local businesses and SMBs</li>
              </ul>
            </div>
            <div className="fit-col no reveal d1">
              <h4>✗ It may not be for —</h4>
              <ul>
                <li>Anyone unwilling to spend any time learning a new tool</li>
                <li>Those expecting a fully hands-off, done-for-you service</li>
                <li>Owners who aren’t ready to change what isn’t working</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ */}
      <section className="faq">
        <div className="wrap">
          <div className="center reveal">
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              STILL NOT SURE?
            </div>
            <h2 className="h2">Frequently Asked Questions</h2>
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
      {/* Final CTA */}
      <section className="final">
        <div className="wrap">
          <h2 className="reveal">
            If you’re going to do it,
            <br />
            {"do it "}
            <span>the way of the future</span>.
          </h2>
          <p className="reveal d1">
            Fourteen days from now, your business can look exactly the same — or it can be running
            itself. The choice is yours.
          </p>
          <div className="hero-ctas reveal d2">
            <Link to="/contact" className="btn btn-primary">
              {"Yes! I’m In — Join the Program "}
              <span className="arr">→</span>
            </Link>
            <Link to="/" className="btn btn-ghost">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
      {/* Minimal footer */}
      <SiteFooter locale="en" variant="minimal" />
      {/* Sticky bottom CTA */}
      <div className={showSticky ? "fp-sticky show" : "fp-sticky"} id="fpSticky">
        <div className="wrap">
          <div className="st-txt">
            14-Day Launch Program · US$1,197/year
            <small>System + modules + training + support, total value NT$274,000+</small>
          </div>
          <a className="btn btn-primary" href="#offer">
            {"Join Now "}
            <span className="arr">→</span>
          </a>
        </div>
      </div>
    </>
  );
}
