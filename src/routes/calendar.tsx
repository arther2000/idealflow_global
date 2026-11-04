import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { useReveal } from "@/hooks/use-reveal";
import { RegionBanner } from "@/components/site/RegionBanner";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/calendar")({
  head: () =>
    pageHead({
      path: "/calendar",
      title: "Smart Booking | iDealFlow.ai",
      description:
        "Let customers book themselves and let reminders run on autopilot. Unlimited calendars, round-robin routing, class bookings and automated no-show follow-ups.",
    }),
  component: CalendarPage,
});

function CalendarPage() {
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
            <b>Smart Booking</b>
          </p>
          <h1 className="reveal d1">
            Customers book themselves.
            <br />
            Reminders
            <span className="grad"> send themselves.</span>
          </h1>
          <p className="sub reveal d2">
            No more back-and-forth messages to find a time. Customers pick a slot from your link,
            and the system confirms, reminds and follows up automatically —{" "}
            <strong>all you have to do is show up</strong>.
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
      {/* Block 1: unlimited calendars */}
      <div className="fblock">
        <div className="wrap fb-grid">
          <div className="fb-txt reveal">
            <div className="eyebrow">UNLIMITED CALENDARS</div>
            <h3>
              <em>Unlimited</em>
              {" calendars."}
              <br />
              For a team of one, or a team of many.
            </h3>
            <p>
              One-on-one consults, group classes, round-robin sales calls, team meetings — whatever
              your bookings look like, there’s a calendar type built for it. Create as many as you
              need, with no third-party scheduling tool to pay for.
            </p>
            <div className="replaces">
              <span className="rlabel">Replaces</span>
              <span className="rchip">Calendly</span>
              <span className="rchip">Acuity</span>
              <span className="rchip">OnceHub</span>
              <span className="rchip">Schedule Once</span>
            </div>
            <ul className="checklist">
              <li>Unlimited personal and team calendars</li>
              <li>Round-robin routing across your team</li>
              <li>Group class and workshop registration</li>
              <li>Recurring events that open slots automatically</li>
              <li>Collective meetings with multiple hosts</li>
              <li>Real-time Google and Outlook sync</li>
            </ul>
            <div className="fb-cta">
              <Link to="/contact" className="btn btn-navy">
                {"Create my booking page "}
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
                <span>idealflow.ai / booking / arthur</span>
              </div>
              <div className="mock-pad">
                <div className="m-title">Pick a time · 1:1 Consultation (30 min)</div>
                <div className="m-cal">
                  <div className="mc-h">M</div>
                  <div className="mc-h">T</div>
                  <div className="mc-h">W</div>
                  <div className="mc-h">T</div>
                  <div className="mc-h">F</div>
                  <div className="mc-h">S</div>
                  <div className="mc-h">S</div>
                  <div className="mc">8</div>
                  <div className="mc soft">9</div>
                  <div className="mc">10</div>
                  <div className="mc busy">11</div>
                  <div className="mc soft">12</div>
                  <div className="mc">13</div>
                  <div className="mc">14</div>
                  <div className="mc soft">15</div>
                  <div className="mc">16</div>
                  <div className="mc busy">17</div>
                  <div className="mc">18</div>
                  <div className="mc soft">19</div>
                  <div className="mc">20</div>
                  <div className="mc">21</div>
                </div>
                <div style={{ marginTop: "14px" }}>
                  <span className="m-btn">Confirm Tue, Nov 17 · 2:00 PM →</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Block 2: seamless scheduling */}
      <div className="fblock">
        <div className="wrap fb-grid rev">
          <div className="fb-txt reveal">
            <div className="eyebrow">SEAMLESS SCHEDULING</div>
            <h3>
              From your website to your CRM.
              <br />
              Booking,
              <em> everywhere.</em>
            </h3>
            <p>
              Customers can book straight from your website, sales page or a LINE link. Mid-chat,
              you can lock in a time right from the contact card. Once it’s booked, the contact
              syncs to your CRM — no copying and pasting required.
            </p>
            <div className="replaces">
              <span className="rlabel">Integrations</span>
              <span className="rchip">Website & funnel embeds</span>
              <span className="rchip">Schedule from CRM</span>
              <span className="rchip">Shareable LINE links</span>
            </div>
            <ul className="checklist">
              <li>Schedule in one click from a contact card</li>
              <li>Book directly from your pipeline</li>
              <li>Block personal time and protect your downtime</li>
              <li>Automatic buffer time between meetings</li>
              <li>Booking forms that capture needs up front</li>
              <li>Self-serve cancellations and rescheduling</li>
            </ul>
            <div className="fb-cta">
              <Link to="/contact" className="btn btn-navy">
                {"Connect booking to my workflow "}
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
                <div className="m-title">Today’s Bookings</div>
                <div className="m-row">
                  <div className="m-av">M</div>
                  <div className="mi">
                    <b>Michael Wang · 1:1 Consultation</b>
                    <span>10:00–10:30 AM · Confirmed</span>
                  </div>
                  <span className="m-tag ok">Reminded</span>
                </div>
                <div className="m-row">
                  <div className="m-av o">G</div>
                  <div className="mi">
                    <b>Grace Chen · Enterprise Onboarding</b>
                    <span>2:00–3:00 PM · Round-robin</span>
                  </div>
                  <span className="m-tag info">Assigned to Amy</span>
                </div>
                <div className="m-row">
                  <div className="m-av">Y</div>
                  <div className="mi">
                    <b>Wednesday Group Yoga</b>
                    <span>7:00–8:30 PM · 8/12 registered</span>
                  </div>
                  <span className="m-tag hot">Popular</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Block 3: automated reminders */}
      <div className="fblock">
        <div className="wrap fb-grid">
          <div className="fb-txt reveal">
            <div className="eyebrow">NO-SHOW KILLER</div>
            <h3>
              Automatic reminders and follow-ups.
              <br />
              Say goodbye to <em>no-shows.</em>
            </h3>
            <p>
              A booking isn’t the finish line — it’s where automation begins. Reminders go out
              across LINE, email and SMS, and anyone who misses their slot is automatically invited
              to rebook. Higher attendance means higher revenue.
            </p>
            <div className="replaces">
              <span className="rlabel">Proven results</span>
              <span className="rchip">Coach Arthur Wu: 45% attendance</span>
              <span className="rchip">Coach Emma: 56%+ attendance</span>
            </div>
            <ul className="checklist">
              <li>Instant booking confirmations</li>
              <li>Automatic reminders the day before and day of</li>
              <li>LINE, email and SMS</li>
              <li>Automatic rebooking for no-shows</li>
              <li>Follow-up materials sent after each session</li>
              <li>Complete attendance tracking</li>
            </ul>
            <div className="fb-cta">
              <Link to="/contact" className="btn btn-navy">
                {"Boost my attendance "}
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
                <span>idealflow.ai / reminders</span>
              </div>
              <div className="mock-pad">
                <div className="m-flow">
                  <div className="m-node trigger">
                    <span className="ni">📅</span>
                    <span>
                      Customer books a time
                      <small>Starts the reminder flow</small>
                    </span>
                  </div>
                  <div className="m-link"></div>
                  <div className="m-node">
                    <span className="ni">💬</span>
                    <span>
                      LINE + email confirmation
                      <small>Sends immediately</small>
                    </span>
                  </div>
                  <div className="m-link"></div>
                  <div className="m-node">
                    <span className="ni">⏰</span>
                    <span>
                      Reminder at 8:00 PM the night before
                      <small>Scheduled automatically</small>
                    </span>
                  </div>
                  <div className="m-link"></div>
                  <div className="m-node">
                    <span className="ni">🔁</span>
                    <span>
                      No-show → Automatic reschedule invite
                      <small>No lead left behind</small>
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
              Three of the most common scenarios — and how smart booking turns your time into
              revenue.
            </p>
          </div>
          <div className="ugrid">
            <div className="ucard reveal">
              <span className="utag">Consultants & Coaches</span>
              <h4>Drop a booking link in chat and lock in the meeting</h4>
              <p>
                The moment a customer shows interest, send your link and set a time on the spot —
                <b> close while the interest is hot</b>. With a reminder the day before, no-shows
                all but disappear.
              </p>
            </div>
            <div className="ucard reveal d1">
              <span className="utag">Classes & Workshops</span>
              <h4>Registration, check-in and follow-up, all in one flow</h4>
              <p>
                Open a group calendar for sign-ups and it closes automatically when the class is
                full. After each session, a feedback form and next-class offer go out on their own —
                <b> one class rolls right into the next</b>.
              </p>
            </div>
            <div className="ucard reveal d2">
              <span className="utag">Sales Teams</span>
              <h4>Round-robin routing that’s fair to every rep</h4>
              <p>
                Inbound booking requests rotate automatically across your team.
                <b> No fighting over leads, no leads falling through</b> — and managers can track
                every rep’s progress in the reports.
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
              Smoother booking.
              <em> Faster closing.</em>
            </h2>
            <p className="lead">
              Pair it with other tools to automate everything — from attracting leads before they
              book to following up after.
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
            Simpler booking.
            <br />
            <span>Smoother selling.</span>
          </h2>
          <p className="reveal d1">
            Starting today, let the system handle the scheduling — and watch your calendar fill
            itself.
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
