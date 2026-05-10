"use client";

import { useState } from "react";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import Hero from "./components/Hero";
import GlobalPresenceMap from "./components/GlobalPresenceMap";
import {
  ScrollReveal,
  SectionHeading,
  Ornament,
  Marquee,
  AnimatedCounter,
} from "./components/Motion";
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
      <GlobalPresenceMap />
      <ProcessTimeline />
      
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
    "Direct Farm Partnerships",
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
    { num: 100, suffix: "%", label: "Farm-Direct Supply", desc: "Farmer-direct — no middlemen, full traceability" },
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
                    <span>Direct procurement across South India&apos;s most productive zones.</span>
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







/* ============== Process timeline (4 stops) ============== */
function ProcessTimeline() {
  const steps = [
    { n: "01", icon: <Leaf />, title: "Farm Intake", text: "Direct relationships with verified farmer partners across Coimbatore." },
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
      who: "Trade Manager",
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
function FAQItem({ q, a }: { q: string; a: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq-item${isOpen ? " open" : ""}`}>
      <button
        type="button"
        className="faq-trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{q}</span>
        <span className="icn">
          <Plus size={14} />
        </span>
      </button>
      <div className="faq-content">
        <div className="ans-inner">
          <div className="ans-text">{a}</div>
        </div>
      </div>
    </div>
  );
}

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
            title={
              <>
                What <em>buyers ask first.</em>
              </>
            }
            description="The five questions our team handles most often before a first order."
            align="center"
          />
        </ScrollReveal>
        <ScrollReveal>
          <div className="faq-list" style={{ marginTop: 40 }}>
            {items.map((f) => (
              <FAQItem key={f.q} q={f.q} a={f.a} />
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
                <div className="eyebrow">Ready to ship with confidence?</div>
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

