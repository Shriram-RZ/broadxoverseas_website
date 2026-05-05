import Link from "next/link";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { Ornament, ScrollReveal } from "../components/Motion";
import ReadMore from "./ReadMore";
import {
  Arrow,
  Shield,
  Award,
  Truck,
  Globe,
  Users,
  Leaf,
  FileCheck,
  Sparkles,
  Check,
  Anchor,
  Container,
} from "../components/Icons";

export const metadata = {
  title: "About — Broad X Overseas",
  description:
    "Coimbatore-based agricultural exporter bridging South India's finest produce with global buyers. Direct. Reliable. Certified. Fair.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
        title={
          <>
            Where nature&apos;s finest meets <em>global standards.</em>
          </>
        }
        description="A trusted name in global agricultural trade, headquartered in Coimbatore — the heart of South India's most fertile and resource-rich agricultural belt."
      />

      {/* Intro with Read More */}
      <section className="bg-surface">
        <div className="container">
          <div className="split">
            <Reveal className="split-media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1530507629858-e4977d30e9e4?auto=format&fit=crop&w=1400&q=80"
                alt="Hands holding fresh turmeric roots"
              />
              <div className="chip">
                <div>
                  <div className="n">Est. 2019</div>
                  <div className="l">Coimbatore, South India</div>
                </div>
                <div className="pulse" />
              </div>
            </Reveal>

            <div>
              <Reveal>
                <div className="eyebrow">Our Story</div>
                <h2 className="section-title" style={{ marginTop: 12 }}>
                  We don&apos;t just export products —{" "}
                  <em>we export trust.</em>
                </h2>
                <Ornament />
              </Reveal>

              <Reveal delay={1}>
                <ReadMore>
                  <p className="lead">
                    Our strength lies in our deep-rooted network with the finest
                    agricultural regions of India, combined with a rigorous
                    quality process that ensures every shipment reflects our
                    promise — pure, consistent, and reliable.
                  </p>
                  <p>
                    From the careful selection of raw materials to final
                    packaging and documentation, every step is handled with
                    precision and professionalism. We understand the
                    expectations of international buyers: consistency in
                    quality, reliability in supply, and transparency in trade —
                    that&apos;s exactly what we deliver, shipment after
                    shipment.
                  </p>
                  <p>
                    Coimbatore offers the perfect launchpad — a city renowned
                    for agricultural connectivity, port access via Tuticorin,
                    Cochin and Chennai, and a long-standing trade
                    infrastructure that lets us move produce to the Middle
                    East, Southeast Asia and Europe with predictable lead
                    times.
                  </p>
                </ReadMore>
              </Reveal>

              <Reveal delay={2}>
                <ul className="bullets" style={{ marginTop: 28 }}>
                  <li>
                    <div className="check"><Check /></div>
                    <div>
                      <strong>Based in Coimbatore</strong>
                      <span>A city renowned for agricultural connectivity and trade infrastructure.</span>
                    </div>
                  </li>
                  <li>
                    <div className="check"><Check /></div>
                    <div>
                      <strong>Strategic global reach</strong>
                      <span>Serving the Middle East, Southeast Asia, Europe — and beyond.</span>
                    </div>
                  </li>
                  <li>
                    <div className="check"><Check /></div>
                    <div>
                      <strong>End-to-end accountability</strong>
                      <span>Sourcing, quality, logistics and documentation — all under one roof.</span>
                    </div>
                  </li>
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section>
        <div className="container">
          <div className="section-head">
            <ScrollReveal>
              <div>
                <div className="eyebrow">What we stand for</div>
                <h2 className="section-title" style={{ marginTop: 12 }}>
                  Four values, <em>shipped in every container.</em>
                </h2>
                <Ornament />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <p className="lead">
                The principles that decide who we source from, how we package and
                what we put in writing.
              </p>
            </ScrollReveal>
          </div>

          <div className="feature-grid">
            {[
              { icon: <Anchor />, title: "Rooted in trust", text: "Buyer relationships measured in seasons, not transactions." },
              { icon: <Sparkles />, title: "Quality without exception", text: "Reject batches stay home; only export-grade leaves the dock." },
              { icon: <Container />, title: "Logistics with intent", text: "Packed, papered and routed for the destination — not just shipped." },
              { icon: <Globe />, title: "Open to the world", text: "Active across continents. Curious about new markets. Always learning." },
            ].map((it, i) => (
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

      {/* Why Choose Us — feature grid */}
      <section className="bg-surface">
        <div className="container">
          <div className="section-head">
            <Reveal>
              <div>
                <div className="eyebrow">Why Choose Us</div>
                <h2 className="section-title" style={{ marginTop: 12 }}>
                  Eight commitments behind <em>every shipment.</em>
                </h2>
                <Ornament />
              </div>
            </Reveal>
            <Reveal delay={1}>
              <p className="lead">
                The principles that shape every decision — from which farm we
                source from to how a crate leaves the port.
              </p>
            </Reveal>
          </div>

          <div className="feature-grid">
            {WHY_ITEMS.map((it, i) => (
              <Reveal key={it.title} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <div className="feature-card">
                  <div className="ico">{it.icon}</div>
                  <h3>{it.title}</h3>
                  <p>{it.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="container">
          <Reveal>
            <div className="cta-strip">
              <div className="grid">
                <div>
                  <div className="eyebrow">Ready to partner?</div>
                  <h2>
                    Ready to partner with{" "}
                    <em>a reliable exporter?</em>
                  </h2>
                  <p>
                    Tell us what you need and our team will respond with sample
                    availability, pricing and a timeline — usually within one
                    business day.
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
          </Reveal>
        </div>
      </section>
    </>
  );
}

const WHY_ITEMS = [
  {
    icon: <Shield />,
    title: "Uncompromised Quality",
    text: "Stringent checks at every stage — procurement to export — so buyers receive only the best.",
  },
  {
    icon: <Award />,
    title: "Certified Compliance",
    text: "FSSAI · APEDA · IEC. Documentation handled end-to-end for every shipment.",
  },
  {
    icon: <Truck />,
    title: "Seamless Logistics",
    text: "End-to-end shipping — packaging, paperwork and freight forwarding under one roof.",
  },
  {
    icon: <Users />,
    title: "Reliable Partnerships",
    text: "Long-term relationships grounded in transparency and consistent delivery.",
  },
  {
    icon: <Leaf />,
    title: "Direct From Source",
    text: "Procured directly from farmers — no middlemen, full traceability, fair pricing.",
  },
  {
    icon: <Globe />,
    title: "Global Reach",
    text: "Active across the Middle East, Southeast Asia, Europe and expanding markets.",
  },
  {
    icon: <Sparkles />,
    title: "Premium Grade",
    text: "Machine-graded, specification-matched produce — season after season.",
  },
  {
    icon: <FileCheck />,
    title: "Transparent Trade",
    text: "Pre-shipment samples, lab reports and shipment-level updates on request.",
  },
];
