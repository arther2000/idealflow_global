import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { RegionBanner } from "@/components/site/RegionBanner";
import { useReveal } from "@/hooks/use-reveal";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/automation")({
  head: () =>
    pageHead({
      breadcrumb: "Workflow Automation",
      path: "/automation",
      title: "Workflow Automation | iDealFlow.ai",
      description:
        "Follow up with every lead while you sleep. Visual workflows, if/else branching, AI decisions and a mobile app—replacing Zapier, Make and HubSpot in one place.",
    }),
  component: AutomationPage,
});

function AutomationPage() {
  useReveal();

  return (
    <>
      <RegionBanner current="en" />
      <SiteNav locale="en" />
      <section className="subhero">
        <div className="wrap">
          <p className="crumb reveal">
            <Link to="/">Home</Link>
            {" / "}
            <Link to="/" hash="features">
              Features
            </Link>
            {" / "}
            <b>Workflow Automation</b>
          </p>
          <h1 className="reveal d1">
            While you sleep,
            <br />
            <span className="grad">your follow-up keeps going.</span>
          </h1>
          <p className="sub reveal d2">
            A form submitted, a booking confirmed, a payment received—every action can trigger the
            next. Our <strong>drag-and-drop workflow builder</strong> turns repetitive work into
            automatic work, and gives you your time back.
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
      {/* Block 1: Workflows */}
      <div className="fblock">
        <div className="wrap fb-grid">
          <div className="fb-txt reveal">
            <div className="eyebrow">WORKFLOW ENGINE</div>
            <h3>
              Visual workflows.
              <br />
              Repetitive work, <em>fully automated.</em>
            </h3>
            <p>
              Lead follow-up, team tasks, sales data updates—automate all of it. Build flows by
              dragging nodes into place. No code, and no more paying for Zapier just to glue your
              tools together.
            </p>
            <div className="replaces">
              <span className="rlabel">Replaces</span>
              <span className="rchip">Zapier</span>
              <span className="rchip">Make</span>
              <span className="rchip">ActiveCampaign</span>
              <span className="rchip">HubSpot</span>
            </div>
            <ul className="checklist">
              <li>Automated email, SMS and LINE messages</li>
              <li>Automatic pipeline stage changes</li>
              <li>Instant internal team notifications</li>
              <li>Advanced if/else branching logic</li>
              <li>Instant course access after payment</li>
              <li>Automatic Google Sheets updates</li>
              <li>Messages sent straight to Slack</li>
              <li>Webhook and API integrations</li>
            </ul>
            <div className="fb-cta">
              <Link to="/contact" className="btn btn-navy">
                {"Build my first workflow "}
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
                <span>idealflow.ai / workflows</span>
              </div>
              <div className="mock-pad">
                <div className="m-flow">
                  <div className="m-node trigger">
                    <span className="ni">📝</span>
                    <span>
                      Trigger: Form submitted
                      <small>Quote request form</small>
                    </span>
                  </div>
                  <div className="m-link"></div>
                  <div className="m-node">
                    <span className="ni">🔀</span>
                    <span>
                      Condition: Budget ≥ NT$100K?
                      <small>if / else branch</small>
                    </span>
                  </div>
                  <div className="m-link"></div>
                  <div className="m-node">
                    <span className="ni">👤</span>
                    <span>
                      Yes → Assign senior rep + LINE alert
                      <small>Call back within 15 min</small>
                    </span>
                  </div>
                  <div className="m-link"></div>
                  <div className="m-node">
                    <span className="ni">✉️</span>
                    <span>
                      No → Add to nurture sequence
                      <small>Warm up, then follow up</small>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Block 2: AI decisions */}
      <div className="fblock">
        <div className="wrap fb-grid rev">
          <div className="fb-txt reveal">
            <div className="eyebrow">AI DECISION</div>
            <h3>
              Add AI to the mix.
              <br />
              Workflows that <em>think for themselves.</em>
            </h3>
            <p>
              Automation shouldn’t just follow a script. Plug AI into any workflow and it reads what
              your customers are actually saying: a quote request, a complaint, a booking? It
              classifies, replies and routes to the right person—automatically.
            </p>
            <div className="replaces">
              <span className="rlabel">AI powers</span>
              <span className="rchip">Intent detection</span>
              <span className="rchip">Smart replies</span>
              <span className="rchip">Auto-tagging</span>
            </div>
            <ul className="checklist">
              <li>AI reads intent and routes messages</li>
              <li>Auto-tag and segment by content</li>
              <li>AI-drafted personalized replies</li>
              <li>Complex issues handed to a human</li>
              <li>Decisions logged back to the CRM</li>
              <li>Extend further with n8n</li>
            </ul>
            <div className="fb-cta">
              <Link to="/contact" className="btn btn-navy">
                {"Put AI in my workflow "}
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
                <span>idealflow.ai / conversations</span>
              </div>
              <div className="mock-pad">
                <div className="m-chat">
                  <div className="m-bub in">
                    Would your course packages work for our company? We have about 15 people.
                  </div>
                  <div className="m-bub out">
                    <span className="ai">AI intent: Corporate training · High intent</span>
                    Absolutely! We have plans built for teams. Can I set up a 30-minute video call
                    to learn more about your needs?
                  </div>
                  <div className="m-bub in">Sure, how do I book?</div>
                  <div className="m-bub out">
                    <span className="ai">AI action: Booking link sent</span>
                    Here’s the link—pick a time that works and we’ll see you online 👉
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Block 3: Mobile app */}
      <div className="fblock">
        <div className="wrap fb-grid">
          <div className="fb-txt reveal">
            <div className="eyebrow">MOBILE APP</div>
            <h3>
              Your business, in your pocket.
              <br />
              Away from your desk, <em>still in business.</em>
            </h3>
            <p>
              Visiting clients, running your shop, riding the train—open your phone to reply,
              reschedule, send contracts and collect payments. It all runs in the cloud, so your
              office is wherever you are.
            </p>
            <div className="replaces">
              <span className="rlabel">Available on</span>
              <span className="rchip">iOS</span>
              <span className="rchip">Android</span>
            </div>
            <ul className="checklist">
              <li>Email, SMS and calls in one place</li>
              <li>Schedule and reschedule on the go</li>
              <li>Send contracts and invoices from your phone</li>
              <li>Task management that misses nothing</li>
              <li>Your CRM, always at hand</li>
              <li>Real-time push notifications</li>
            </ul>
            <div className="fb-cta">
              <Link to="/contact" className="btn btn-navy">
                {"Take my business mobile "}
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
                <span>iDealFlow App</span>
              </div>
              <div className="mock-pad">
                <div className="m-title">Today’s tasks · 3</div>
                <div className="m-row">
                  <div className="m-av o">📞</div>
                  <div className="mi">
                    <b>Call back: David Chang’s quote</b>
                    <span>AI: high intent · within 15 min</span>
                  </div>
                  <span className="m-tag hot">Urgent</span>
                </div>
                <div className="m-row">
                  <div className="m-av">📄</div>
                  <div className="mi">
                    <b>Send contract: Sarah Lin</b>
                    <span>Consulting services · Awaiting signature</span>
                  </div>
                  <span className="m-tag info">In progress</span>
                </div>
                <div className="m-row">
                  <div className="m-av">💰</div>
                  <div className="mi">
                    <b>Confirm payments: Wednesday workshop</b>
                    <span>8 payments received</span>
                  </div>
                  <span className="m-tag ok">Done</span>
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
            <h2 className="h2">How businesses actually use it</h2>
            <p className="lead">
              Three of the most common setups—and how automation takes the daily grind off your
              plate.
            </p>
          </div>
          <div className="ugrid">
            <div className="ucard reveal">
              <span className="utag">Lead routing</span>
              <h4>Every inquiry answered within 15 minutes</h4>
              <p>
                Form submitted → AI scores intent → hot leads auto-assigned to a rep with a LINE
                alert. <b>Speed wins deals.</b> Reply a day late, and they’ve already moved on.
              </p>
            </div>
            <div className="ucard reveal d1">
              <span className="utag">Course access</span>
              <h4>Paid at midnight. Access in seconds.</h4>
              <p>
                Card approved → course and membership access unlocked → welcome email and class
                guide sent. <b>You’re asleep, and onboarding is already done.</b>
              </p>
            </div>
            <div className="ucard reveal d2">
              <span className="utag">Team handoffs</span>
              <h4>The moment a deal closes, everyone knows</h4>
              <p>
                Deal moves to “Won” → finance is told to invoice, support kicks off service, and
                your Google Sheets report updates.{" "}
                <b>No handoff meetings. The workflow runs itself.</b>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Related features */}
      <section className="morefeat">
        <div className="wrap">
          <div className="center reveal">
            <h2 className="h2">
              Your workflows are on autopilot. <em>What’s next?</em>
            </h2>
            <p className="lead">
              Automation is the engine. Pair it with these features for a complete sales system.
            </p>
          </div>
          <div className="mf-grid reveal">
            <Link to="/funnel" className="mf-card">
              <span className="di">
                <svg viewBox="0 0 24 24">
                  <path d="M3 4h18l-7 8v6l-4 2v-8L3 4z" />
                </svg>
              </span>
              Funnels &amp; Websites
              <span className="arr">→</span>
            </Link>
            <Link to="/email" className="mf-card">
              <span className="di">
                <svg viewBox="0 0 24 24">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-10 5L2 7" />
                </svg>
              </span>
              Email &amp; LINE Marketing
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
            <Link to="/ai-content" className="mf-card">
              <span className="di">
                <svg viewBox="0 0 24 24">
                  <path d="M12 3v18" />
                  <path d="M5 8c4-3 10-3 14 0" />
                  <path d="M5 16c4 3 10 3 14 0" />
                </svg>
              </span>
              AI Content &amp; Social Planner
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
      <section className="final">
        <div className="wrap">
          <h2 className="reveal">
            Let your customer journey run itself,
            <br />
            so you can <span>focus on closing.</span>
          </h2>
          <p className="reveal d1">
            Hand the repetitive work to the system. Spend your time on what only you can do.
          </p>
          <div className="hero-ctas reveal d2">
            <Link to="/contact" className="btn btn-primary">
              {"Book a Demo "}
              <span className="arr">→</span>
            </Link>
            <Link to="/" hash="pricing" className="btn btn-ghost">
              See Pricing
            </Link>
          </div>
        </div>
      </section>
      <SiteFooter locale="en" />
    </>
  );
}
