import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { RegionBanner } from "@/components/site/RegionBanner";
import { FaqList, Qa } from "@/components/site/Faq";
import { featureLinks } from "@/components/site/feature-links";
import { useReveal } from "@/hooks/use-reveal";
import type { FaqItem } from "@/lib/jsonld";
import { pageHead } from "@/lib/seo";

/** Visible FAQ — also emitted as FAQPage JSON-LD. */
const FAQ: FaqItem[] = [
  {
    q: "Does GoHighLevel integrate with LINE?",
    a: "Not natively. Stock GoHighLevel has no built-in LINE integration, so most teams wire it up through Zapier or Make. iDealFlow.ai adds its own LINE suite on top of GoHighLevel, including Flex Message support, so LINE Official Account messages, tags and automations run inside the platform.",
  },
  {
    q: "Is GoHighLevel available in Chinese or Japanese?",
    a: "The stock GoHighLevel interface is primarily English. iDealFlow.ai ships a multilingual localization suite that covers Traditional Chinese, Simplified Chinese and Japanese, so your whole team can work in its own language.",
  },
  {
    q: "How is iDealFlow.ai different from buying GoHighLevel directly?",
    a: "You get the same GoHighLevel engine, plus localization, the LINE suite, support for Taiwan payment gateways as they roll out, training (online courses and in-person classes) and hands-on onboarding. It is built for teams selling in Taiwan and the wider Asia-Pacific region.",
  },
  {
    q: "How much does it cost?",
    a: "iDealFlow.ai is US$1,197 per year, including the full platform, localization, the LINE suite, training and onboarding. For comparison, HighLevel’s own plans start at US$97 per month (see HighLevel’s website for current pricing).",
  },
  {
    q: "Is it only for agencies?",
    a: "No. GoHighLevel is popular with agencies, but the same CRM, funnels, booking and automation work for coaches, consultants, local service businesses, B2B teams and e-commerce brands.",
  },
];

const COMPARE: { item: string; ghl: string; idf: string }[] = [
  {
    item: "Interface language",
    ghl: "Primarily English",
    idf: "Traditional & Simplified Chinese, Japanese",
  },
  {
    item: "LINE Official Account",
    ghl: "No native integration",
    idf: "Built-in LINE suite with Flex Message",
  },
  {
    item: "Payments",
    ghl: "Stripe and international gateways",
    idf: "Taiwan payment gateways rolling out",
  },
  {
    item: "Training",
    ghl: "English self-serve resources",
    idf: "Courses in Chinese + in-person classroom",
  },
  { item: "Onboarding", ghl: "Do it yourself", idf: "Hands-on setup based on your needs" },
  {
    item: "Price",
    ghl: "From US$97/month (per HighLevel’s website)",
    idf: "US$1,197/year incl. localization, training & onboarding",
  },
];

export const Route = createFileRoute("/gohighlevel")({
  head: () =>
    pageHead({
      path: "/gohighlevel",
      title: "GoHighLevel with LINE Integration & Chinese/Japanese Localization | iDealFlow.ai",
      description:
        "GoHighLevel, localized for Asia: native LINE integration with Flex Message, Traditional/Simplified Chinese and Japanese interface, Taiwan payments and hands-on onboarding.",
      breadcrumb: "GoHighLevel for Asia",
      product: true,
      faq: FAQ,
    }),
  component: GoHighLevelPage,
});

function GoHighLevelPage() {
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
            <b>GoHighLevel for Asia</b>
          </p>
          <h1 className="reveal d1">
            GoHighLevel,
            <br />
            <span className="grad">built for LINE and Asia.</span>
          </h1>
          <p className="sub reveal d2">
            iDealFlow.ai runs on <strong>GoHighLevel</strong> and adds what it’s missing for Asian
            markets:{" "}
            <strong>
              native LINE integration, Chinese and Japanese localization, local payments and real
              onboarding
            </strong>
            .
          </p>
          <div className="hero-ctas reveal d3">
            <Link to="/contact" className="btn btn-primary">
              Book a Demo <span className="arr">→</span>
            </Link>
            <Link to="/pricing" className="btn btn-ghost">
              See Pricing
            </Link>
          </div>
        </div>
      </section>

      <section className="usecases">
        <div className="wrap">
          <div className="center reveal">
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              WHY IT MATTERS
            </div>
            <h2 className="h2">
              In Taiwan and Japan, <em>business happens on LINE</em>
            </h2>
            <p className="lead">
              GoHighLevel is one of the most complete sales and marketing platforms in the world,
              trusted by over a million businesses. But out of the box, it speaks English and
              doesn’t talk to LINE.
            </p>
          </div>
          <div className="ugrid">
            <div className="ucard reveal">
              <span className="utag">LINE</span>
              <h4>LINE inside your CRM</h4>
              <p>
                Send Flex Messages, tag contacts and trigger workflows from LINE Official Account
                conversations — <b>no Zapier glue required</b>.
              </p>
            </div>
            <div className="ucard reveal d1">
              <span className="utag">Localization</span>
              <h4>Your team’s language</h4>
              <p>
                A full localization suite for Traditional Chinese, Simplified Chinese and Japanese
                <b> lowers the learning curve</b> and lifts adoption.
              </p>
            </div>
            <div className="ucard reveal d2">
              <span className="utag">Onboarding</span>
              <h4>Set up with you, not for you</h4>
              <p>
                Online courses, in-person classes and hands-on setup so your system is
                <b> actually running</b>, not just purchased.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="compare">
        <div className="wrap">
          <div className="center reveal">
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              GOHIGHLEVEL VS iDEALFLOW
            </div>
            <h2 className="h2">
              Stock GoHighLevel vs <em>iDealFlow.ai</em>
            </h2>
            <p className="lead">Same engine. The difference is everything around it.</p>
          </div>
          <div className="cmp-table reveal">
            <div className="cmp-head">
              <div>Feature</div>
              <div>Stock GoHighLevel</div>
              <div className="hi-col">iDealFlow.ai</div>
            </div>
            {COMPARE.map((r) => (
              <div className="cmp-row" key={r.item}>
                <div className="cl">{r.item}</div>
                <div className="cm">{r.ghl}</div>
                <div className="cr">{r.idf}</div>
              </div>
            ))}
          </div>
          <p className="cmp-note reveal">
            HighLevel pricing as listed on its website in November 2026; check HighLevel for current
            plans.
          </p>
        </div>
      </section>

      <section className="morefeat">
        <div className="wrap">
          <div className="center reveal">
            <h2 className="h2">
              Everything in <em>GoHighLevel</em>, localized
            </h2>
            <p className="lead">Explore each module.</p>
          </div>
          <div className="mf-grid reveal">
            {featureLinks("en").map((f) => (
              <Link key={f.to} className="mf-card" to={f.to}>
                <span className="di">
                  <svg viewBox="0 0 24 24">{f.icon}</svg>
                </span>
                {f.label}
                <span className="arr">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="faq">
        <div className="wrap">
          <div className="center reveal">
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              FAQ
            </div>
            <h2 className="h2">GoHighLevel + LINE FAQ</h2>
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
            Ready to run GoHighLevel
            <br />
            <span>on LINE?</span>
          </h2>
          <p className="reveal d1">
            Book a free 30-minute demo and see it working for your business.
          </p>
          <div className="hero-ctas reveal d2">
            <Link to="/contact" className="btn btn-primary">
              Book a Demo <span className="arr">→</span>
            </Link>
            <Link to="/start" className="btn btn-ghost">
              14-Day Launch Program
            </Link>
          </div>
        </div>
      </section>
      <SiteFooter locale="en" />
    </>
  );
}
