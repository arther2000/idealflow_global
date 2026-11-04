import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { RegionBanner } from "@/components/site/RegionBanner";
import { FaqList, Qa } from "@/components/site/Faq";
import { useReveal } from "@/hooks/use-reveal";
import type { FaqItem } from "@/lib/jsonld";
import { pageHead } from "@/lib/seo";

/** Visible FAQ — also emitted as FAQPage JSON-LD. */
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
    q: "What if I join and it’s not a good fit?",
    a: "That’s exactly why the consultation comes first. Before you sign up, our team assesses your business model, lead sources and rollout plan for free — and we only start once we know it’s a fit. After you join, you’re fully supported: weekly Q&A and tech support catch you whenever you get stuck. Our goal is for you to actually use it, not to make a sale and disappear.",
  },
  {
    q: "Is GoHighLevel a reliable foundation?",
    a: "GoHighLevel is an AI-powered business growth operating system founded in Dallas, Texas in 2018. It powers more than a million businesses worldwide, offers 24/7 support, hosts its annual LevelUp / HighLevel Summit, and ships updates constantly — backed by a mature global ecosystem.",
  },
];

export const Route = createFileRoute("/pricing")({
  head: () =>
    pageHead({
      path: "/pricing",
      title: "Pricing | iDealFlow.ai — All-in-One GoHighLevel Platform for US$1,197/year",
      description:
        "iDealFlow.ai costs US$1,197/year: the full platform, Chinese & Japanese localization, LINE suite, training and onboarding. Compare it with 8 separate tools at NT$34,000+ a month.",
      breadcrumb: "Pricing",
      product: true,
      faq: FAQ,
    }),
  component: PricingPage,
});

function PricingPage() {
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
            <b>Pricing</b>
          </p>
          <h1 className="reveal d1">
            {"One price. "}
            <br />
            <span className="grad">Eight tools replaced.</span>
          </h1>
          <p className="sub reveal d2">
            CRM, email & LINE marketing, funnels, booking, AI chat, courses, reviews and automation
            — all included in one annual plan, with no per-contact fees.
          </p>
          <div className="hero-ctas reveal d3">
            <Link to="/contact" className="btn btn-primary">
              Book a Demo <span className="arr">→</span>
            </Link>
            <Link to="/start" className="btn btn-ghost">
              See the 14-Day Launch Program
            </Link>
          </div>
        </div>
      </section>

      <section className="pricing">
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
      <section className="faq">
        <div className="wrap">
          <div className="center reveal">
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              FAQ
            </div>
            <h2 className="h2">Pricing FAQ</h2>
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
      <section className="final">
        <div className="wrap">
          <h2 className="reveal">
            Spend your budget on growth,
            <br />
            <span>not tool subscriptions.</span>
          </h2>
          <p className="reveal d1">
            Book a free call first — we’ll tell you honestly whether it fits your business.
          </p>
          <div className="hero-ctas reveal d2">
            <Link to="/contact" className="btn btn-primary">
              Book a Demo <span className="arr">→</span>
            </Link>
          </div>
        </div>
      </section>
      <SiteFooter locale="en" />
    </>
  );
}
