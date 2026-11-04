import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { RegionBanner } from "@/components/site/RegionBanner";
import { useReveal } from "@/hooks/use-reveal";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/ai-content")({
  head: () =>
    pageHead({
      breadcrumb: "AI Content & Social Planner",
      path: "/ai-content",
      title: "AI Content Generator & Social Media Planner | iDealFlow.ai",
      description:
        "Create once, publish everywhere. AI writes posts; the planner keeps Facebook, Instagram, TikTok, LinkedIn and YouTube fresh—replacing Hootsuite and Buffer.",
    }),
  component: AiContentPage,
});

function AiContentPage() {
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
            <b>AI Content &amp; Social Planner</b>
          </p>
          <h1 className="reveal d1">
            Create once.
            <br />
            <span className="grad">Publish to seven platforms.</span>
          </h1>
          <p className="sub reveal d2">
            The hardest part of social isn’t running out of ideas. It’s{" "}
            <strong>posting every day, on every platform</strong>. Let AI write and the planner
            publish—so your brand stays visible while you run your business.
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
      {/* Block 1: Multi-platform publishing */}
      <div className="fblock">
        <div className="wrap fb-grid">
          <div className="fb-txt reveal">
            <div className="eyebrow">SOCIAL PLANNER</div>
            <h3>
              AI Social Planner.
              <br />
              Write once, <em>post everywhere.</em>
            </h3>
            <p>
              Stop copying and pasting the same post seven times. Write it once, pick your
              platforms, then publish now or schedule for later—each platform’s format is adjusted
              for you automatically.
            </p>
            <div className="replaces">
              <span className="rlabel">Replaces</span>
              <span className="rchip">Hootsuite</span>
              <span className="rchip">Buffer</span>
              <span className="rchip">CoSchedule</span>
              <span className="rchip">Sprout Social</span>
            </div>
            <ul className="checklist">
              <li>Publish to Facebook and Instagram at once</li>
              <li>TikTok and X (Twitter) support</li>
              <li>LinkedIn and Pinterest support</li>
              <li>YouTube and Shorts uploads</li>
              <li>Unlimited posts, unlimited scheduling</li>
              <li>Evergreen posts on automatic rotation</li>
            </ul>
            <div className="fb-cta">
              <Link to="/contact" className="btn btn-navy">
                {"Plan my first week of posts "}
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
                <span>idealflow.ai / social-planner</span>
              </div>
              <div className="mock-pad">
                <div className="m-title">This week · 5 posts scheduled</div>
                <div className="m-row">
                  <div className="m-av o">FB</div>
                  <div className="mi">
                    <b>New product launch offer</b>
                    <span>Mon 10:00 · FB + IG</span>
                  </div>
                  <span className="m-tag ok">Scheduled</span>
                </div>
                <div className="m-row">
                  <div className="m-av">YT</div>
                  <div className="mi">
                    <b>Customer testimonial (Shorts)</b>
                    <span>Wed 12:00 · YouTube + TikTok</span>
                  </div>
                  <span className="m-tag ok">Scheduled</span>
                </div>
                <div className="m-row">
                  <div className="m-av o">IN</div>
                  <div className="mi">
                    <b>Industry insights article</b>
                    <span>Fri 09:00 · LinkedIn</span>
                  </div>
                  <span className="m-tag info">AI draft</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Block 2: AI copywriting */}
      <div className="fblock">
        <div className="wrap fb-grid rev">
          <div className="fb-txt reveal">
            <div className="eyebrow">AI WRITER</div>
            <h3>
              Stuck for ideas?
              <br />
              {"Let "}
              <em>AI write the first draft.</em>
            </h3>
            <p>
              Give AI a topic and it drafts your posts, email subject lines and page copy. Just
              polish the tone, add your point of view, and create content several times faster.
            </p>
            <div className="replaces">
              <span className="rlabel">Writes</span>
              <span className="rchip">Social posts</span>
              <span className="rchip">Email copy</span>
              <span className="rchip">Page headlines</span>
              <span className="rchip">Blog outlines</span>
            </div>
            <ul className="checklist">
              <li>Post drafts from any topic</li>
              <li>Choose from multiple tones of voice</li>
              <li>One-click rewrites and expansions</li>
              <li>Email subject line suggestions</li>
              <li>Sales page copy starters</li>
              <li>Publish straight to the planner</li>
            </ul>
            <div className="fb-cta">
              <Link to="/contact" className="btn btn-navy">
                {"Let AI write for me "}
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
                <span>idealflow.ai / ai-writer</span>
              </div>
              <div className="mock-pad">
                <div className="m-chat">
                  <div className="m-bub out">Topic: anniversary sale. Tone: warm, with urgency</div>
                  <div className="m-bub in">
                    <span className="ai">AI draft</span>
                    Calling all our regulars! Our anniversary sale runs just 7 days—20% off every
                    course, limited spots, first come, first served 🎉 (plus 3 hashtag ideas)
                  </div>
                  <div className="m-bub out">
                    Love it. Make an IG version and schedule it for Monday morning
                  </div>
                  <div className="m-bub in">
                    <span className="ai">AI action</span>
                    IG version created and scheduled for Mon 09:00 ✓
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Block 3: Content calendar */}
      <div className="fblock">
        <div className="wrap fb-grid">
          <div className="fb-txt reveal">
            <div className="eyebrow">CONTENT CALENDAR</div>
            <h3>
              Content calendar.
              <br />
              Your whole month, <em>at a glance.</em>
            </h3>
            <p>
              What goes out, where, and how it performed—all on one calendar. Gaps jump out
              immediately, so there’s no more “Oops, we forgot to post this week.”
            </p>
            <div className="replaces">
              <span className="rlabel">Highlights</span>
              <span className="rchip">Month view</span>
              <span className="rchip">Performance tracking</span>
              <span className="rchip">Team collaboration</span>
            </div>
            <ul className="checklist">
              <li>Every scheduled post in month view</li>
              <li>Drag and drop to reschedule</li>
              <li>Post performance analytics</li>
              <li>Team roles and approvals</li>
              <li>Best-time-to-post suggestions</li>
              <li>Aligned with your campaign calendar</li>
            </ul>
            <div className="fb-cta">
              <Link to="/contact" className="btn btn-navy">
                {"Plan my content calendar "}
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
                <span>idealflow.ai / content-calendar</span>
              </div>
              <div className="mock-pad">
                <div className="m-title">November content calendar</div>
                <div className="m-cal">
                  <div className="mc-h">M</div>
                  <div className="mc-h">T</div>
                  <div className="mc-h">W</div>
                  <div className="mc-h">T</div>
                  <div className="mc-h">F</div>
                  <div className="mc-h">S</div>
                  <div className="mc-h">S</div>
                  <div className="mc busy">FB</div>
                  <div className="mc">·</div>
                  <div className="mc soft">YT</div>
                  <div className="mc">·</div>
                  <div className="mc busy">IG</div>
                  <div className="mc">·</div>
                  <div className="mc">·</div>
                  <div className="mc soft">IN</div>
                  <div className="mc busy">FB</div>
                  <div className="mc">·</div>
                  <div className="mc soft">TT</div>
                  <div className="mc">·</div>
                  <div className="mc busy">IG</div>
                  <div className="mc">·</div>
                </div>
                <div style={{ marginTop: "12px" }} className="m-line w60"></div>
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
              Three of the most common setups—and how a content system turns visibility into leads.
            </p>
          </div>
          <div className="ugrid">
            <div className="ucard reveal">
              <span className="utag">Solopreneurs</span>
              <h4>Plan the week on Sunday. Focus on clients all week.</h4>
              <p>
                Spend one hour every Sunday letting AI draft and schedule seven days of posts.{" "}
                <b>Your feed stays active every day</b>—and when inquiries roll in, you realize your
                posts have been selling for you all along.
              </p>
            </div>
            <div className="ucard reveal d1">
              <span className="utag">Speakers &amp; coaches</span>
              <h4>One talk becomes a month of content</h4>
              <p>
                Turn the highlights of a single talk into posts, Shorts and LinkedIn articles across
                every platform. <b>One piece of content, a full month of posts</b>—each one linking
                to your next registration page.
              </p>
            </div>
            <div className="ucard reveal d2">
              <span className="utag">Local businesses</span>
              <h4>Every post is a door to your store</h4>
              <p>
                Add a booking link and coupon form to every post, and social traffic flows straight
                into your CRM. <b>Likes turn into walk-ins.</b>
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
              The traffic is coming in. <em>Now what?</em>
            </h2>
            <p className="lead">
              Content attracts the audience. These features turn that audience into customers.
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
            Keep your brand always on,
            <br />
            and let your content <span>bring in customers.</span>
          </h2>
          <p className="reveal d1">
            AI writes, the system publishes, and leads come to you. That’s content marketing, done
            smart.
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
