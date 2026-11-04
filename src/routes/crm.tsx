import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { RegionBanner } from "@/components/site/RegionBanner";
import { useReveal } from "@/hooks/use-reveal";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/crm")({
  head: () =>
    pageHead({
      breadcrumb: "CRM",
      path: "/crm",
      title: "CRM | iDealFlow.ai",
      description:
        "Never waste another lead. Unlimited contacts, one unified inbox and a visual sales pipeline bring sales, marketing and support together on a single platform.",
    }),
  component: CrmPage,
});

function CrmPage() {
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
            <b>CRM</b>
          </p>
          <h1 className="reveal d1">
            Every lead.
            <br />
            <span className="grad">Put to work.</span>
          </h1>
          <p className="sub reveal d2">
            Contacts stuck in spreadsheets. Conversations scattered across apps. Follow-ups living
            in someone’s head. That’s where deals slip away. Bring{" "}
            <strong>sales, marketing and support onto one platform</strong> — and see where every
            customer came from, what you talked about and what’s holding them back, at a glance.
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
      {/* Block 1: complete customer profiles */}
      <div className="fblock">
        <div className="wrap fb-grid">
          <div className="fb-txt reveal">
            <div className="eyebrow">CONTACTS</div>
            <h3>
              <em>Unlimited contacts.</em>
              <br />
              One complete profile for each.
            </h3>
            <p>
              From the first form fill to the latest purchase, every interaction is logged to the
              contact automatically. Tags, segments, custom fields, lifetime value — and whether you
              have a hundred contacts or a hundred thousand, you never pay more.
            </p>
            <div className="replaces">
              <span className="rlabel">Replaces</span>
              <span className="rchip">Salesforce</span>
              <span className="rchip">HubSpot</span>
              <span className="rchip">Zoho</span>
              <span className="rchip">Agile CRM</span>
            </div>
            <ul className="checklist">
              <li>Unlimited contacts</li>
              <li>Source and activity history, logged automatically</li>
              <li>Multi-tag segmentation for precise targeting</li>
              <li>Custom fields for flexible grouping</li>
              <li>Lifetime revenue per customer</li>
              <li>Notes, assignments and team collaboration</li>
            </ul>
            <div className="fb-cta">
              <Link to="/contact" className="btn btn-navy">
                {"Bring my contacts in "}
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
                <span>idealflow.ai / contacts</span>
              </div>
              <div className="mock-pad">
                <div className="m-title">Contacts · 4,730 total</div>
                <div className="m-row">
                  <div className="m-av">M</div>
                  <div className="mi">
                    <b>Michael Wang</b>
                    <span>Source: Facebook ad · Active 2 hrs ago</span>
                  </div>
                  <span className="m-tag hot">Hot lead</span>
                </div>
                <div className="m-row">
                  <div className="m-av o">E</div>
                  <div className="mi">
                    <b>Emily Lee</b>
                    <span>Source: LINE · Course student</span>
                  </div>
                  <span className="m-tag ok">VIP</span>
                </div>
                <div className="m-row">
                  <div className="m-av">J</div>
                  <div className="mi">
                    <b>James Chang</b>
                    <span>Source: Website form · Awaiting quote</span>
                  </div>
                  <span className="m-tag info">Following up</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Block 2: unified inbox */}
      <div className="fblock">
        <div className="wrap fb-grid rev">
          <div className="fb-txt reveal">
            <div className="eyebrow">UNIFIED INBOX</div>
            <h3>
              LINE, Facebook, email…
              <br />
              Every conversation.
              <em> One inbox.</em>
            </h3>
            <p>
              A customer asks on LINE today, replies on Instagram tomorrow and sends an email the
              day after. You used to juggle five windows. Now it all lands in one place — so no
              unanswered message or pending quote ever slips through.
            </p>
            <div className="replaces">
              <span className="rlabel">Channels</span>
              <span className="rchip">LINE</span>
              <span className="rchip">Messenger</span>
              <span className="rchip">Instagram</span>
              <span className="rchip">WhatsApp</span>
              <span className="rchip">Email / SMS</span>
            </div>
            <ul className="checklist">
              <li>Every channel, managed in one place</li>
              <li>Conversations linked to contact profiles</li>
              <li>AI-suggested replies, sent in a tap</li>
              <li>Hand off to any teammate</li>
              <li>Automatic reminders for unanswered messages</li>
              <li>Full conversation history, kept forever</li>
            </ul>
            <div className="fb-cta">
              <Link to="/contact" className="btn btn-navy">
                {"Unify my channels "}
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
                  <div className="m-bub in">How is your business plan priced? (via LINE)</div>
                  <div className="m-bub out">
                    Hi! Pricing depends on team size and needs. Do you have 30 minutes for a quick
                    call?
                  </div>
                  <div className="m-bub in">I also emailed over our requirements. (via Email)</div>
                  <div className="m-bub out">
                    <span className="ai">Merged into one contact automatically</span>
                    Got it! Everything’s organized — we’ll go through it on the call 👌
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Block 3: pipeline */}
      <div className="fblock">
        <div className="wrap fb-grid">
          <div className="fb-txt reveal">
            <div className="eyebrow">SALES PIPELINE</div>
            <h3>
              A visual sales pipeline.
              <br />
              Know exactly
              <em> where every dollar stands.</em>
            </h3>
            <p>
              From first lead to closed deal, just drag a card to move it forward. See how many
              deals sit in each stage, what they’re worth and how long they’ve been stuck — so your
              whole team knows exactly which deals need a push.
            </p>
            <div className="replaces">
              <span className="rlabel">Highlights</span>
              <span className="rchip">Drag and drop</span>
              <span className="rchip">Deal values</span>
              <span className="rchip">Stall alerts</span>
            </div>
            <ul className="checklist">
              <li>Move deals between stages with a drag</li>
              <li>Deal count and value for every stage</li>
              <li>Automatic follow-up reminders for stalled deals</li>
              <li>Stage changes that trigger automations</li>
              <li>Multiple pipelines, managed separately</li>
              <li>Win-rate and sales-cycle reports</li>
            </ul>
            <div className="fb-cta">
              <Link to="/contact" className="btn btn-navy">
                {"Map my sales process "}
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
                <span>idealflow.ai / pipeline</span>
              </div>
              <div className="mock-pad">
                <div className="m-title">Pipeline · This month NT$1,240,000</div>
                <div className="m-pipe">
                  <div className="m-col">
                    <h6>
                      {"In talks "}
                      <b>12</b>
                    </h6>
                    <div className="m-card">
                      Michael Wang
                      <span>Enterprise rollout · $180K</span>
                    </div>
                    <div className="m-card">
                      Lin Co.
                      <span>Annual plan · $95K</span>
                    </div>
                  </div>
                  <div className="m-col">
                    <h6>
                      {"Quoted "}
                      <b>6</b>
                    </h6>
                    <div className="m-card">
                      James Chang
                      <span>Consulting · $120K</span>
                    </div>
                    <div className="m-card">
                      Chen Studio
                      <span>Course bundle · $45K</span>
                    </div>
                  </div>
                  <div className="m-col">
                    <h6>
                      {"Won "}
                      <b>9</b>
                    </h6>
                    <div className="m-card">
                      Emily Lee ✓<span>VIP plan · $220K</span>
                    </div>
                    <div className="m-card">
                      David Chou ✓<span>Annual · $150K</span>
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
              Three of the most common scenarios — and how CRM turns contacts into revenue.
            </p>
          </div>
          <div className="ugrid">
            <div className="ucard reveal">
              <span className="utag">Coaches & Consultants</span>
              <h4>Event sign-ups flow straight in, tagged and ready for follow-up</h4>
              <p>
                Registered, attended, raised a hand for a consult — each gets its own tag
                automatically. Coach Arthur Wu runs his government-grant seminar leads this way, and
                <b> every follow-up stays on track</b>.
              </p>
            </div>
            <div className="ucard reveal d1">
              <span className="utag">Sales Teams</span>
              <h4>Handoffs that don’t rely on memory — even when people leave</h4>
              <p>
                Every customer’s full history lives in the system, so a new rep is
                <b> up to speed in five minutes</b>— and no near-closed deal gets lost in a
                transition.
              </p>
            </div>
            <div className="ucard reveal d2">
              <span className="utag">Small Businesses</span>
              <h4>One swipe, and the owner sees the whole company’s numbers</h4>
              <p>
                What closed this month, what’s out for quote, whose deals are stuck —
                <b> no waiting for the weekly meeting</b>. Open the app and you know exactly where
                to focus.
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
              Your contacts are organized.
              <em> Now put them in motion.</em>
            </h2>
            <p className="lead">
              CRM is the foundation. Pair it with these tools and your leads move toward the close
              on their own.
            </p>
          </div>
          <div className="mf-grid reveal">
            <Link to="/funnel" className="mf-card">
              <span className="di">
                <svg viewBox="0 0 24 24">
                  <path d="M3 4h18l-7 8v6l-4 2v-8L3 4z" />
                </svg>
              </span>
              Funnels & Websites
              <span className="arr">→</span>
            </Link>
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
          </div>
        </div>
      </section>
      <section className="final">
        <div className="wrap">
          <h2 className="reveal">
            Make every lead
            <br />
            <span>count.</span>
          </h2>
          <p className="reveal d1">
            Acquiring customers keeps getting more expensive. Managing the leads you already have is
            the smartest growth there is.
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
