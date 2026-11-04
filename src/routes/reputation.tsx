import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { RegionBanner } from "@/components/site/RegionBanner";
import { useReveal } from "@/hooks/use-reveal";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/reputation")({
  head: () =>
    pageHead({
      breadcrumb: "Reputation Management",
      path: "/reputation",
      title: "Google Review Management Software | iDealFlow.ai",
      description:
        "Turn happy customers into five-star reviews—automatically. Google review requests, one inbox for replies, and review widgets that win new business.",
    }),
  component: ReputationPage,
});

function ReputationPage() {
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
            <b>Reputation Management</b>
          </p>
          <h1 className="reveal d1">
            Turn happy customers
            <br />
            into <span className="grad">five-star reviews.</span>
          </h1>
          <p className="sub reveal d2">
            Nine out of ten happy customers never leave a review—
            <strong>not because they don’t want to, but because they forget</strong>. We ask at
            exactly the right moment, turning every great experience into reputation everyone can
            see.
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
      {/* Block 1: Automatic requests */}
      <div className="fblock">
        <div className="wrap fb-grid">
          <div className="fb-txt reveal">
            <div className="eyebrow">REVIEW REQUESTS</div>
            <h3>
              Perfect timing.
              <br />
              <em>Automatic</em>
              {" review requests."}
            </h3>
            <p>
              Right after a purchase, a class or a great appointment is the golden moment to ask for
              a review. We send the request by SMS, email or LINE, and customers leave a Google
              review in one tap.
            </p>
            <div className="replaces">
              <span className="rlabel">Replaces</span>
              <span className="rchip">Trustpilot</span>
              <span className="rchip">Other review tools</span>
            </div>
            <ul className="checklist">
              <li>Review requests sent after every sale</li>
              <li>One-click manual requests</li>
              <li>Custom timing and messaging</li>
              <li>SMS, email and LINE channels</li>
              <li>Gentle automatic reminders</li>
              <li>Unlimited reviews</li>
            </ul>
            <div className="fb-cta">
              <Link to="/contact" className="btn btn-navy">
                {"Start collecting reviews "}
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
                <span>idealflow.ai / reputation</span>
              </div>
              <div className="mock-pad">
                <div className="m-flow">
                  <div className="m-node trigger">
                    <span className="ni">✅</span>
                    <span>
                      Service completed / Checkout successful
                      <small>Triggers review request flow</small>
                    </span>
                  </div>
                  <div className="m-link"></div>
                  <div className="m-node">
                    <span className="ni">💬</span>
                    <span>
                      LINE thank-you + review link
                      <small>Sent automatically 2 hours later</small>
                    </span>
                  </div>
                  <div className="m-link"></div>
                  <div className="m-node">
                    <span className="ni">⭐</span>
                    <span>
                      Customer leaves a 5-star Google review
                      <small>Logged back to the CRM</small>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Block 2: Unified inbox */}
      <div className="fblock">
        <div className="wrap fb-grid rev">
          <div className="fb-txt reveal">
            <div className="eyebrow">REVIEW INBOX</div>
            <h3>
              Every review.
              <br />
              <em>One inbox.</em>
              {" Nothing missed."}
            </h3>
            <p>
              Get notified the moment a new review lands and reply right from your dashboard—no more
              switching platforms. Thank happy customers fast, address negative feedback right away.
              How quickly you respond says everything about your brand.
            </p>
            <div className="replaces">
              <span className="rlabel">Highlights</span>
              <span className="rchip">Instant alerts</span>
              <span className="rchip">In-app replies</span>
              <span className="rchip">Team collaboration</span>
            </div>
            <ul className="checklist">
              <li>Instant push alerts for new reviews</li>
              <li>Reply to Google reviews in-app</li>
              <li>AI-suggested reply drafts</li>
              <li>Negative reviews flagged first</li>
              <li>Review trend reports</li>
              <li>Assign team members to follow up</li>
            </ul>
            <div className="fb-cta">
              <Link to="/contact" className="btn btn-navy">
                {"Manage my reviews "}
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
                <span>idealflow.ai / reviews</span>
              </div>
              <div className="mock-pad">
                <div className="m-title">Review inbox · 4.8 ★ average</div>
                <div className="m-row">
                  <div className="m-av">J</div>
                  <div className="mi">
                    <b>
                      {"Jessica Wang "}
                      <span className="m-stars">★★★★★</span>
                    </b>
                    <span>Such a patient, thorough teacher—and a lovely space!</span>
                  </div>
                  <span className="m-tag ok">Replied</span>
                </div>
                <div className="m-row">
                  <div className="m-av o">K</div>
                  <div className="mi">
                    <b>
                      {"Kevin Chang "}
                      <span className="m-stars">★★★★★</span>
                    </b>
                    <span>Easy booking, efficient service. Highly recommend!</span>
                  </div>
                  <span className="m-tag info">AI draft</span>
                </div>
                <div className="m-row">
                  <div className="m-av">A</div>
                  <div className="mi">
                    <b>
                      {"Alex Chen "}
                      <span className="m-stars">★★★☆☆</span>
                    </b>
                    <span>Good overall, but the wait was a bit long.</span>
                  </div>
                  <span className="m-tag hot">Priority</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Block 3: Showcase */}
      <div className="fblock">
        <div className="wrap fb-grid">
          <div className="fb-txt reveal">
            <div className="eyebrow">SOCIAL PROOF</div>
            <h3>
              {"Put your reviews "}
              <em>on your website.</em>
              <br />
              Let word of mouth close the sale.
            </h3>
            <p>
              Your five-star reviews shouldn’t just sit on Google. Embed a review widget on your
              website and sales pages, and hesitant visitors see real praise right when they’re
              deciding to buy.
            </p>
            <div className="replaces">
              <span className="rlabel">Highlights</span>
              <span className="rchip">Multiple layouts</span>
              <span className="rchip">Auto-sync</span>
              <span className="rchip">One-line embed</span>
            </div>
            <ul className="checklist">
              <li>Choose from multiple review wall layouts</li>
              <li>New reviews sync automatically</li>
              <li>Embed on your site and sales pages</li>
              <li>Pin your best reviews to the top</li>
              <li>Star rating and review count badges</li>
              <li>Mobile-ready out of the box</li>
            </ul>
            <div className="fb-cta">
              <Link to="/contact" className="btn btn-navy">
                {"Add reviews to my site "}
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
                <span>yourwebsite.com / testimonials</span>
              </div>
              <div className="mock-pad">
                <div className="m-title">
                  {"Google Reviews "}
                  <span className="m-stars">★★★★★</span>
                  {" 4.8 (286 reviews)"}
                </div>
                <div className="m-grid2">
                  <div className="m-col">
                    <h6>
                      <span className="m-stars">★★★★★</span>
                    </h6>
                    <div className="m-line w80"></div>
                    <div className="m-line w60"></div>
                  </div>
                  <div className="m-col">
                    <h6>
                      <span className="m-stars">★★★★★</span>
                    </h6>
                    <div className="m-line w80"></div>
                    <div className="m-line w40"></div>
                  </div>
                </div>
                <div style={{ marginTop: "12px" }}>
                  <span className="m-btn">Book your visit →</span>
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
              Three of the most common setups—and how great reviews bring in new customers.
            </p>
          </div>
          <div className="ugrid">
            <div className="ucard reveal">
              <span className="utag">Beauty &amp; salons</span>
              <h4>Two hours after a haircut, the request arrives</h4>
              <p>
                While clients are still loving their new look, a LINE thank-you and review link
                arrive. <b>Review rates climb dramatically.</b> Your Google rating goes up, and new
                clients find you on their own.
              </p>
            </div>
            <div className="ucard reveal d1">
              <span className="utag">Clinics &amp; studios</span>
              <h4>Catch a bad review early, and turn it around</h4>
              <p>
                Reviews of three stars or less trigger an instant alert, so you can respond
                sincerely and make it right. <b>A negative review handled well</b> shows future
                customers just how much you care.
              </p>
            </div>
            <div className="ucard reveal d2">
              <span className="utag">Courses &amp; consulting</span>
              <h4>Today’s testimonials, tomorrow’s enrollment copy</h4>
              <p>
                Feedback is collected automatically after each course, and five-star testimonials
                sync to your sales page review wall. <b>What last cohort really thought</b> is the
                most persuasive ad for the next one.
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
              You’ve earned the reviews. <em>Now get them seen.</em>
            </h2>
            <p className="lead">
              Pair these features with your reviews for a steady stream of new customers.
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
              AI Content &amp; Social Planner
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
            The best advertising
            <br />
            is what your customers <span>say about you.</span>
          </h2>
          <p className="reveal d1">
            Starting today, let every great experience turn into tomorrow’s new
            customers—automatically.
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
