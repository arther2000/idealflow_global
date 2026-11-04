import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { useReveal } from "@/hooks/use-reveal";
import { RegionBanner } from "@/components/site/RegionBanner";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/email")({
  head: () =>
    pageHead({
      breadcrumb: "Email & LINE Marketing",
      path: "/email",
      title: "Email & LINE Marketing | iDealFlow.ai",
      description:
        "Write it once and let it work until the deal closes. Drag-and-drop email builder, beautiful templates, AI-powered journeys and LINE messaging in one platform.",
    }),
  component: EmailPage,
});

function EmailPage() {
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
            <b>Email & LINE Marketing</b>
          </p>
          <h1 className="reveal d1">
            Write it once.
            <br />
            <span className="grad">It follows up until you close.</span>
          </h1>
          <p className="sub reveal d2">
            Design beautiful emails with a drag-and-drop builder, and let AI automation decide{" "}
            <strong>when to send, who gets it and what they see</strong>. Pair it with LINE
            messaging, and your message reaches customers wherever they are.
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
      {/* Block 1: builder */}
      <div className="fblock">
        <div className="wrap fb-grid">
          <div className="fb-txt reveal">
            <div className="eyebrow">EMAIL BUILDER</div>
            <h3>
              Drag-and-drop email builder.
              <br />
              Beautiful emails,
              <em> no designer required.</em>
            </h3>
            <p>
              No waiting on a designer. No wrestling with HTML. Images, video, a buy button — just
              drag them in. And every email looks great on mobile, automatically.
            </p>
            <div className="replaces">
              <span className="rlabel">Replaces</span>
              <span className="rchip">Mailchimp</span>
              <span className="rchip">ActiveCampaign</span>
              <span className="rchip">Aweber</span>
              <span className="rchip">Constant Contact</span>
            </div>
            <ul className="checklist">
              <li>Unlimited emails, created and sent</li>
              <li>Drop in images and video anywhere</li>
              <li>Cart and button components</li>
              <li>Mobile-ready, automatically</li>
              <li>Custom sending domain</li>
              <li>Open and click tracking</li>
            </ul>
            <div className="fb-cta">
              <Link to="/contact" className="btn btn-navy">
                {"Build my first email "}
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
                <span>idealflow.ai / email-builder</span>
              </div>
              <div className="mock-pad">
                <div className="m-title">New Year Thank-You Campaign · Editing</div>
                <div className="m-line hi w60"></div>
                <div className="m-line"></div>
                <div className="m-line w80"></div>
                <div className="m-row">
                  <div className="m-av o">▶</div>
                  <div className="mi">
                    <b>Video block</b>
                    <span>Dragging… release to insert</span>
                  </div>
                  <span className="m-tag hot">Drag & drop</span>
                </div>
                <div className="m-line w60"></div>
                <div style={{ marginTop: "10px" }}>
                  <span className="m-btn">Claim your offer →</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Block 2: templates */}
      <div className="fblock">
        <div className="wrap fb-grid rev">
          <div className="fb-txt reveal">
            <div className="eyebrow">TEMPLATES</div>
            <h3>
              <em>Beautiful templates</em> for
              <br />
              every industry. Never start from blank.
            </h3>
            <p>
              Designing every email from scratch eats up your day. Pick a template made for your
              industry, tweak the copy and hit send — and spend your time on what really matters:
              what you want to say to your customers.
            </p>
            <div className="replaces">
              <span className="rlabel">Templates for</span>
              <span className="rchip">Coaching</span>
              <span className="rchip">Consulting</span>
              <span className="rchip">Health & Wellness</span>
              <span className="rchip">Marketing Agencies</span>
            </div>
            <ul className="checklist">
              <li>Welcome and introduction sequences</li>
              <li>Webinar and event invitations</li>
              <li>Holiday and seasonal promotions</li>
              <li>Newsletter layouts</li>
              <li>Win-back and re-engagement emails</li>
              <li>New templates added regularly</li>
            </ul>
            <div className="fb-cta">
              <Link to="/contact" className="btn btn-navy">
                {"Browse templates "}
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
                <span>idealflow.ai / email-templates</span>
              </div>
              <div className="mock-pad">
                <div className="m-title">Template Library</div>
                <div className="m-grid2">
                  <div className="m-col">
                    <h6>
                      {"Webinar Invite "}
                      <b>Popular</b>
                    </h6>
                    <div className="m-line hi w80"></div>
                    <div className="m-line w60"></div>
                  </div>
                  <div className="m-col">
                    <h6>Welcome Series</h6>
                    <div className="m-line w80"></div>
                    <div className="m-line w40"></div>
                  </div>
                  <div className="m-col">
                    <h6>Seasonal Promo</h6>
                    <div className="m-line w60"></div>
                    <div className="m-line w80"></div>
                  </div>
                  <div className="m-col">
                    <h6>Newsletter</h6>
                    <div className="m-line w80"></div>
                    <div className="m-line w60"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Block 3: AI automation */}
      <div className="fblock">
        <div className="wrap fb-grid">
          <div className="fb-txt reveal">
            <div className="eyebrow">AI AUTOMATION</div>
            <h3>
              AI-powered journeys.
              <br />
              Every customer gets
              <em> their own story.</em>
            </h3>
            <p>
              Scheduled emails are just the start. The real power is triggering the next step from
              each customer’s tags, clicks and views. Clicked a link? Warm them up. Didn’t open?
              Resend with a new subject line. Everyone gets a message made for them.
            </p>
            <div className="replaces">
              <span className="rlabel">Advanced</span>
              <span className="rchip">Behavior triggers</span>
              <span className="rchip">If/else branching</span>
              <span className="rchip">A/B testing</span>
            </div>
            <ul className="checklist">
              <li>Triggers based on tags, clicks and views</li>
              <li>Branching logic across hundreds of actions</li>
              <li>Every reply, managed in one inbox</li>
              <li>Smart scheduling for the best send time</li>
              <li>Subject-line A/B testing</li>
              <li>Email and LINE, working in tandem</li>
            </ul>
            <div className="fb-cta">
              <Link to="/contact" className="btn btn-navy">
                {"Build my journey "}
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
                <span>idealflow.ai / journeys</span>
              </div>
              <div className="mock-pad">
                <div className="m-flow">
                  <div className="m-node trigger">
                    <span className="ni">⚡</span>
                    <span>
                      Trigger: Webinar sign-up form
                      <small>New lead enters the journey</small>
                    </span>
                  </div>
                  <div className="m-link"></div>
                  <div className="m-node">
                    <span className="ni">✉️</span>
                    <span>
                      Send welcome email + LINE reminder
                      <small>Sends immediately</small>
                    </span>
                  </div>
                  <div className="m-link"></div>
                  <div className="m-node">
                    <span className="ni">🔀</span>
                    <span>
                      Opened the email?
                      <small>If / else branch</small>
                    </span>
                  </div>
                  <div className="m-link"></div>
                  <div className="m-node">
                    <span className="ni">🎯</span>
                    <span>
                      Yes → Invite to consult | No → Resend with new subject
                      <small>Auto-routed</small>
                    </span>
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
              Three of the most common scenarios — and how automated messaging nurtures leads into
              sales.
            </p>
          </div>
          <div className="ugrid">
            <div className="ucard reveal">
              <span className="utag">Event Reminders</span>
              <h4>Automatic reminders that noticeably lift attendance</h4>
              <p>
                {
                  "A confirmation email at sign-up, a LINE reminder three days out, one more nudge the morning of. With this combo, Coach Arthur Wu reached "
                }
                <b>45%</b>
                {" seminar attendance — and parenting coach Emma hit "}
                <b>56%+</b>.
              </p>
            </div>
            <div className="ucard reveal d1">
              <span className="utag">Lead Nurturing</span>
              <h4>A five-email welcome series that turns strangers into regulars</h4>
              <p>
                New leads automatically get a five-email journey: introduction → valuable content →
                success stories → FAQs → invitation.
                <b> By the time you remember to follow up, it’s already done</b>.
              </p>
            </div>
            <div className="ucard reveal d2">
              <span className="utag">Win-Back</span>
              <h4>Quiet for 90 days? Send a win-back offer automatically</h4>
              <p>
                The system spots customers who’ve gone quiet and sends them an exclusive comeback
                offer.
                <b> No more digging through dormant lists by hand</b> — every dollar you spent
                acquiring them keeps working.
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
              Your follow-ups run themselves.
              <em> Now automate even more.</em>
            </h2>
            <p className="lead">
              Connect booking, pages and CRM, and your entire sales process runs without
              babysitting.
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
      <section className="final">
        <div className="wrap">
          <h2 className="reveal">
            Every conversation,
            <br />
            <span>one step closer to yes.</span>
          </h2>
          <p className="reveal d1">
            Starting today, let the system handle the follow-up. You just show up for the close.
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
