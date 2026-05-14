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
    "Phytosanitary Certified",
    "Export-Grade Quality",
    "Tuticorin Port",
    "Chennai Port",
    "Cochin Port",
    "22+ Export Markets",
    "Middle East",
    "Southeast Asia",
    "Europe",
    "Africa",
    "Americas",
    "Third-Party Lab Tested",
    "Pre-Shipment Samples",
    "Custom Packaging",
  ];
  return (
    <section className="bg-deep home-marquee" style={{ padding: "44px 0" }}>
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
    { num: 100, suffix: "%", label: "Origin Verified", desc: "Certified quality from South India's finest agri belts" },
    { num: 24, suffix: "h", label: "Quote Window", desc: "First response within one business day" },
  ];
  return (
    <section className="band-mist" style={{ paddingTop: "clamp(48px, 6vw, 80px)" }}>
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
    <section className="band-ivory" id="about">
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
                Broad X Overseas is a Coimbatore-based international agricultural
                trade company, built on quality, compliance and consistency. We
                deliver export-grade produce to discerning buyers across 22+
                global markets.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.16}>
              <ul className="bullets">
                <li>
                  <div className="check"><Check /></div>
                  <div>
                    <strong>Strong regional presence</strong>
                    <span>Export-grade produce from South India&apos;s most productive agricultural belts.</span>
                  </div>
                </li>
                <li>
                  <div className="check"><Check /></div>
                  <div>
                    <strong>Rigorous quality process</strong>
                    <span>Every lot inspected, graded and packed under strict hygiene protocols before shipment.</span>
                  </div>
                </li>
                <li>
                  <div className="check"><Check /></div>
                  <div>
                    <strong>Global reach</strong>
                    <span>Serving the Middle East, Southeast Asia, Europe and the Americas — and expanding.</span>
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
    { n: "01", icon: <Leaf />, title: "Inspect & Select", text: "Every lot assessed against export-grade specifications — only quality-cleared produce moves forward." },
    { n: "02", icon: <Sparkles />, title: "Grade & Process", text: "Machine-graded by size, colour and moisture — FSSAI hygiene protocols maintained throughout." },
    { n: "03", icon: <Container />, title: "Pack & Certify", text: "Moisture-controlled packing with COAs, phytosanitary certificates and full shipment documentation." },
    { n: "04", icon: <Anchor />, title: "Ship & Track", text: "Multi-modal freight from Tuticorin · Chennai · Cochin with end-to-end traceability to destination." },
  ];
  return (
    <section className="band-cream" id="process">
      <div className="container">
        <ScrollReveal>
          <SectionHeading
            eyebrow="The Broad X Process"
            title={<>Four Steps. Zero Compromise. <em>Built for the world&apos;s standards.</em></>}
            description="The standard behind every batch — inspected, graded, certified and shipped with precision at every stage. One process. Every shipment."
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
      a: "Minimum order quantities vary by product. For most lines, we accept from 1 MT for samples and trial orders, with standard commercial orders from 5 MT. Contact us for product-specific MOQs.",
    },
    {
      q: "Which ports do you ship from?",
      a: "We operate from three major South Indian ports — Tuticorin (V.O. Chidambaranar), Chennai and Cochin — giving us flexibility on routing and lead times depending on your destination.",
    },
    {
      q: "Can you provide samples before a full order?",
      a: "Yes. We provide pre-shipment samples for all product lines. Sample shipments are dispatched within 3–5 business days of confirmation, along with relevant lab reports and grade specifications.",
    },
    {
      q: "What documentation comes with each shipment?",
      a: "Every shipment includes: Commercial Invoice, Packing List, Bill of Lading, Certificate of Origin, Phytosanitary Certificate, FSSAI Certificate and third-party lab COA on request.",
    },
    {
      q: "Do you handle private-label packaging?",
      a: "Yes. We offer custom packaging as per buyer specifications — including branded bags, carton printing and retail-ready formats. Minimum quantities apply for custom packaging runs.",
    },
    {
      q: "What certifications do your products carry?",
      a: "Our operations are FSSAI certified, APEDA registered and IEC approved. All export shipments carry phytosanitary certificates. Third-party lab testing (pesticide residue, heavy metals, microbial) is available on request.",
    },
    {
      q: "What are your standard payment terms?",
      a: "We accept Telegraphic Transfer (T/T), Letter of Credit (L/C) and advance payment depending on order size and buyer relationship. Terms are discussed and confirmed at the quotation stage.",
    },
    {
      q: "Can you handle both FCL and LCL shipments?",
      a: "Yes. We manage both Full Container Load (FCL) and Less than Container Load (LCL) shipments. Our logistics team advises the most cost-effective option based on your order volume and destination.",
    },
  ];

  return (
    <section className="band-mist" id="faq">
      <div className="container">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Frequently Asked"
            title={
              <>
                What <em>buyers ask first.</em>
              </>
            }
            description="The questions our team handles most often before a first order."
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
                <div className="eyebrow">Because your buyers deserve the best</div>
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

