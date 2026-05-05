import Link from "next/link";
import ProductCard from "./components/ProductCard";
import Hero from "./components/Hero";
import {
  ScrollReveal,
  SectionHeading,
  Ornament,
  Marquee,
  AnimatedCounter,
} from "./components/Motion";
import { PRODUCTS } from "./components/products-data";
import {
  Arrow,
  Globe,
  Shield,
  Users,
  Truck,
  Check,
  Award,
  Leaf,
  FileCheck,
  Sparkles,
  Anchor,
  Container,
  Plus,
} from "./components/Icons";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee30Strip />
      <StatsBlock />
      <AboutPreview />
      <WhyChooseUs />
      <GlobalRoutes />
      <ProductsPreview />
      <ProcessTimeline />
      <Testimonials />
      <FAQ />
      <CTASection />
    </>
  );
}

/* ============== Marquee strip — anchors trust ============== */
function Marquee30Strip() {
  const items = [
    "FSSAI Certified",
    "APEDA Registered",
    "IEC Approved",
    "Phyto-Sanitary",
    "ISO Audited",
    "Direct Farmer Sourcing",
    "22+ Export Markets",
    "Tuticorin · Chennai · Cochin",
  ];
  return (
    <section className="bg-deep" style={{ padding: "32px 0" }}>
      <Marquee speed={36}>
        {items.map((t) => (
          <span key={t} className="marquee-item">
            {t} <span className="dot" />
          </span>
        ))}
      </Marquee>
    </section>
  );
}

/* ============== Stats counters ============== */
function StatsBlock() {
  const stats: { num: number; suffix?: string; label: string; desc: string }[] = [
    { num: 22, suffix: "+", label: "Export Markets", desc: "Active across the Middle East, SEA and Europe" },
    { num: 8, label: "Product Lines", desc: "Each tuned to international buyer specs" },
    { num: 100, suffix: "%", label: "Direct Sourcing", desc: "Farmer-direct — no middlemen, full traceability" },
    { num: 24, suffix: "h", label: "Quote Window", desc: "First response within one business day" },
  ];
  return (
    <section style={{ paddingTop: "clamp(48px, 6vw, 80px)" }}>
      <div className="container">
        <ScrollReveal>
          <div className="stat-row">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="num">
                  <AnimatedCounter value={s.num} suffix={s.suffix ?? ""} />
                </div>
                <div className="lbl">{s.label}</div>
                <div className="desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ============== About preview ============== */
function AboutPreview() {
  return (
    <section className="bg-surface" id="about">
      <div className="container">
        <div className="split">
          <ScrollReveal className="split-media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1400&q=80"
              alt="Turmeric harvest in Coimbatore"
            />
            <div className="chip">
              <div>
                <div className="n">Coimbatore</div>
                <div className="l">South India · HQ</div>
              </div>
              <div className="pulse" />
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal>
              <div className="eyebrow">About Broad X Overseas</div>
              <h2 className="section-title" style={{ marginTop: 12 }}>
                Where nature&apos;s finest meets <em>global standards.</em>
              </h2>
              <Ornament />
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <p className="lead" style={{ marginTop: 18 }}>
                Headquartered in Coimbatore — the heart of South India&apos;s
                most fertile agricultural belt — we bridge premium Indian
                produce with discerning buyers across the world.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.16}>
              <ul className="bullets">
                <li>
                  <div className="check"><Check /></div>
                  <div>
                    <strong>Deep-rooted farmer network</strong>
                    <span>Direct sourcing across South India&apos;s most productive zones.</span>
                  </div>
                </li>
                <li>
                  <div className="check"><Check /></div>
                  <div>
                    <strong>Rigorous quality process</strong>
                    <span>Graded, processed and packed under strict hygiene protocols.</span>
                  </div>
                </li>
                <li>
                  <div className="check"><Check /></div>
                  <div>
                    <strong>Global reach</strong>
                    <span>Serving the Middle East, Southeast Asia, Europe — and expanding.</span>
                  </div>
                </li>
              </ul>
            </ScrollReveal>
            <ScrollReveal delay={0.24}>
              <div style={{ marginTop: 28 }}>
                <Link href="/about" className="btn btn-outline">
                  Read our story <Arrow size={14} />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============== Why Choose Us ============== */
function WhyChooseUs() {
  const items = [
    { icon: <Shield />, title: "Uncompromised Quality", text: "Stringent checks at every stage — procurement to export — so you receive only the best." },
    { icon: <Award />, title: "Certified Compliance", text: "FSSAI · APEDA · IEC. Documentation and clearances handled end-to-end for every shipment." },
    { icon: <Truck />, title: "Seamless Logistics", text: "End-to-end shipping — packaging, paperwork and freight forwarding under one roof." },
    { icon: <Users />, title: "Reliable Partnership", text: "Long-term buyer relationships grounded in transparency and consistent delivery." },
    { icon: <Leaf />, title: "Direct From Source", text: "Procured directly from farmers — no middlemen, full traceability, fair pricing." },
    { icon: <Globe />, title: "Global Reach", text: "Active across the Middle East, Southeast Asia, Europe and expanding markets." },
    { icon: <Sparkles />, title: "Premium Grade", text: "Machine-graded, specification-matched produce — season after season, batch after batch." },
    { icon: <FileCheck />, title: "Transparent Trade", text: "Pre-shipment samples, third-party lab reports and shipment-level updates on request." },
  ];

  return (
    <section id="why-us">
      <div className="container">
        <div className="section-head">
          <ScrollReveal>
            <div>
              <div className="eyebrow">Why Choose Us</div>
              <h2 className="section-title" style={{ marginTop: 12 }}>
                Built on trust.
                <br />
                <em>Engineered for global trade.</em>
              </h2>
              <Ornament />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <p className="lead">
              Eight commitments behind every Broad X Overseas shipment — what
              international buyers expect, delivered consistently.
            </p>
          </ScrollReveal>
        </div>

        <div className="feature-grid">
          {items.map((it, i) => (
            <ScrollReveal key={it.title} delay={(i % 4) * 0.08}>
              <div className="feature-card">
                <div className="ico">{it.icon}</div>
                <h3>{it.title}</h3>
                <p>{it.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============== Global trade routes ============== */
function GlobalRoutes() {
  // Approximate normalized coordinates (% of viewBox 100x60) for pin placement
  const regions: { name: string; markets: string; x: number; y: number }[] = [
    { name: "Middle East", markets: "UAE · KSA · Oman · Qatar", x: 60, y: 38 },
    { name: "Southeast Asia", markets: "Singapore · Malaysia · Indonesia", x: 76, y: 50 },
    { name: "Europe", markets: "UK · Germany · Netherlands · France", x: 51, y: 24 },
    { name: "Africa", markets: "Kenya · South Africa · Egypt", x: 55, y: 50 },
    { name: "Americas", markets: "USA · Canada · expanding", x: 22, y: 30 },
  ];
  return (
    <section className="bg-surface" id="routes">
      <div className="container">
        <div className="routes">
          <div className="routes-grid">
            <div>
              <div className="eyebrow">Global Presence</div>
              <h2 className="section-title" style={{ marginTop: 12 }}>
                One supplier. <em>Five continents.</em>
              </h2>
              <Ornament />
              <p className="lead" style={{ marginTop: 18 }}>
                Active trade lanes from Tuticorin, Chennai and Cochin — to the
                Middle East, Southeast Asia, Europe, Africa and the Americas.
                Every container backed by full documentation and a single point
                of contact.
              </p>
              <div className="region-list">
                {regions.map((r) => (
                  <div className="region-row" key={r.name}>
                    <span className="name">
                      <span className="pin" />
                      {r.name}
                    </span>
                    <span className="meta">{r.markets}</span>
                  </div>
                ))}
              </div>
            </div>

            <ScrollReveal className="world-map">
              <svg viewBox="0 0 100 60" aria-hidden="true">
                <defs>
                  <pattern id="dots" x="0" y="0" width="1.6" height="1.6" patternUnits="userSpaceOnUse">
                    <circle cx="0.4" cy="0.4" r="0.18" fill="rgba(91,136,178,0.22)" />
                  </pattern>
                </defs>
                {/* Continent silhouettes — simplified, recognizable shapes */}
                <g fill="url(#dots)" stroke="rgba(91,136,178,0.18)" strokeWidth="0.1">
                  {/* North America */}
                  <path d="M 8,12 L 26,8 L 30,16 L 28,28 L 18,34 L 10,28 Z" />
                  {/* South America */}
                  <path d="M 22,36 L 30,34 L 32,46 L 26,56 L 22,52 Z" />
                  {/* Europe */}
                  <path d="M 46,12 L 56,10 L 58,18 L 52,22 L 46,20 Z" />
                  {/* Africa */}
                  <path d="M 48,24 L 58,24 L 62,40 L 56,52 L 50,50 L 46,36 Z" />
                  {/* Asia */}
                  <path d="M 58,8 L 84,10 L 90,22 L 82,30 L 70,28 L 60,22 Z" />
                  {/* Australia */}
                  <path d="M 78,42 L 90,42 L 92,50 L 84,52 L 78,48 Z" />
                </g>
                {/* Origin marker — Coimbatore, India */}
                <circle cx="68" cy="28" r="0.7" fill="#FBF9E4" />
                {/* Trade arcs to each region */}
                <g fill="none" stroke="rgba(91,136,178,0.55)" strokeWidth="0.18" strokeDasharray="0.6 0.4">
                  <path d="M 68 28 Q 64 18 51 24" />
                  <path d="M 68 28 Q 65 32 60 38" />
                  <path d="M 68 28 Q 72 38 76 50" />
                  <path d="M 68 28 Q 60 40 55 50" />
                  <path d="M 68 28 Q 45 18 22 30" />
                </g>
              </svg>
              {/* Pin overlays */}
              {regions.map((r) => (
                <span
                  key={r.name}
                  className="pin-dot"
                  style={{ left: `${r.x}%`, top: `${r.y}%` }}
                />
              ))}
              {/* Origin pin */}
              <span className="pin-dot" style={{ left: "68%", top: "47%" }} />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============== Products preview ============== */
function ProductsPreview() {
  return (
    <section id="products">
      <div className="container">
        <div className="section-head">
          <ScrollReveal>
            <div>
              <div className="eyebrow">Our Catalogue</div>
              <h2 className="section-title" style={{ marginTop: 12 }}>
                Eight lines of <em>export-grade</em> Indian produce.
              </h2>
              <Ornament />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <p className="lead">
              Sourced from South India&apos;s most productive agricultural zones.
              Every product is graded, processed and prepared to meet
              international standards.
            </p>
          </ScrollReveal>
        </div>

        <div className="products-grid">
          {PRODUCTS.map((p, i) => (
            <ScrollReveal key={p.slug} delay={(i % 4) * 0.06}>
              <ProductCard p={p} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.1}>
          <div style={{ display: "flex", justifyContent: "center", marginTop: 40 }}>
            <Link href="/products" className="btn btn-outline">
              View all products <Arrow size={14} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ============== Process timeline (4 stops) ============== */
function ProcessTimeline() {
  const steps = [
    { n: "01", icon: <Leaf />, title: "Source", text: "Direct relationships with verified farmer partners across Coimbatore." },
    { n: "02", icon: <Sparkles />, title: "Grade & Process", text: "Machine-graded by size, colour, moisture; FSSAI hygiene protocols." },
    { n: "03", icon: <Container />, title: "Pack & Document", text: "Moisture-controlled packing, COAs, phyto-sanitary, packing lists." },
    { n: "04", icon: <Anchor />, title: "Ship & Trace", text: "Multi-modal logistics from Tuticorin · Chennai · Cochin. Full traceability." },
  ];
  return (
    <section className="bg-surface" id="process">
      <div className="container">
        <ScrollReveal>
          <SectionHeading
            eyebrow="From farm to freight"
            title={<>A four-stop journey, <em>logged at every step.</em></>}
            description="Every batch you receive carries a paper trail back to a specific farmer, a specific season and a specific grading lot."
            align="center"
          />
        </ScrollReveal>
        <ScrollReveal>
          <div className="timeline" style={{ marginTop: 56 }}>
            {steps.map((s) => (
              <div key={s.n} className="timeline-step">
                <div className="marker">{s.n}</div>
                <h4>{s.title}</h4>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ============== Testimonials ============== */
function Testimonials() {
  const quotes = [
    {
      q: "Three seasons of consistent grade. Their pre-shipment samples and lab reports give us everything our retail partners ask for.",
      who: "Procurement Lead",
      role: "Health-food retail · UAE",
      a: "RA",
    },
    {
      q: "Banana leaves arrive in retail-ready condition with predictable lead times. We've moved most of our packaging volume to them.",
      who: "Operations Director",
      role: "Eco-packaging · Singapore",
      a: "JL",
    },
    {
      q: "What sets Broad X apart is the after-ship feedback loop. They log issues by batch and you can feel the improvement next season.",
      who: "Sourcing Manager",
      role: "Spice trader · Germany",
      a: "MK",
    },
  ];
  return (
    <section>
      <div className="container">
        <div className="section-head">
          <ScrollReveal>
            <div>
              <div className="eyebrow">Buyers on Broad X</div>
              <h2 className="section-title" style={{ marginTop: 12 }}>
                Feedback that <em>keeps shipments moving.</em>
              </h2>
              <Ornament />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <p className="lead">
              Long-term buyer relationships grounded in transparency, consistent
              grade and a single point of accountability.
            </p>
          </ScrollReveal>
        </div>

        <div className="test-grid">
          {quotes.map((t, i) => (
            <ScrollReveal key={t.who} delay={i * 0.08}>
              <div className="test-card">
                <div className="quote-mark">&ldquo;</div>
                <blockquote>{t.q}</blockquote>
                <div className="by">
                  <div className="avatar">{t.a}</div>
                  <div>
                    <div className="who">{t.who}</div>
                    <div className="role">{t.role}</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============== FAQ ============== */
function FAQ() {
  const items = [
    {
      q: "What's the minimum order quantity?",
      a: "MOQs vary by product. For most spices and dry produce we work from a single 20-foot container; for perishables we can do partial loads with consolidation partners. Tell us your destination and we'll quote both options.",
    },
    {
      q: "Which ports do you ship from?",
      a: "Tuticorin, Chennai and Cochin — chosen per destination based on lead time and freight optimization. We coordinate end-to-end with the freight forwarder of your choice or arrange one for you.",
    },
    {
      q: "Can you provide samples before a full order?",
      a: "Yes. We send pre-shipment samples by courier on request, and for repeat lanes we maintain a rolling sample inventory so you can compare batches across seasons.",
    },
    {
      q: "What documentation comes with each shipment?",
      a: "Phyto-sanitary certificate, certificate of origin, COA / lab reports where required, packing list, commercial invoice and B/L. We pre-assemble the documentation pack before vessel cut-off.",
    },
    {
      q: "Do you handle private-label packaging?",
      a: "Yes — branded packaging, retail-ready bags, bulk drums and food-grade liners. Share your brand assets and target unit size and we'll spec it with our packing partners.",
    },
  ];
  return (
    <section className="bg-surface" id="faq">
      <div className="container">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Frequently Asked"
            title={<>What <em>buyers ask first.</em></>}
            description="The five questions our team handles most often before a first order."
            align="center"
          />
        </ScrollReveal>
        <ScrollReveal>
          <div className="faq-list" style={{ marginTop: 40 }}>
            {items.map((f) => (
              <details className="faq-item" key={f.q}>
                <summary>
                  <span>{f.q}</span>
                  <span className="icn"><Plus size={14} /></span>
                </summary>
                <div className="ans">{f.a}</div>
              </details>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ============== Final CTA ============== */
function CTASection() {
  return (
    <section>
      <div className="container">
        <ScrollReveal>
          <div className="cta-strip">
            <div className="grid">
              <div>
                <div className="eyebrow">Ready to source with confidence?</div>
                <h2>
                  Your reliable supply partner is{" "}
                  <em>just a message away.</em>
                </h2>
                <Ornament />
                <p>
                  Connect with our team to discuss your requirements, request
                  samples, or get a competitive quotation — typically within
                  one business day.
                </p>
              </div>
              <div className="actions">
                <Link href="/contact" className="btn btn-primary">
                  Get Quote <Arrow />
                </Link>
                <Link href="/contact" className="btn btn-glass">
                  Send Requirement
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

