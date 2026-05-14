import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { Ornament, ScrollReveal } from "../components/Motion";
import CTAStrip from "../components/CTAStrip";
import ReadMore from "./ReadMore";
import {
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
                src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1400&q=80"
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
                    Broad X Overseas is a Coimbatore-based international agricultural
                    trade company, built on a foundation of quality, compliance and
                    consistency. Headquartered in the heart of Tamil Nadu — one of India&apos;s
                    most productive and diverse agricultural regions — we specialise in
                    delivering export-grade produce to discerning buyers across 22+
                    global markets.
                  </p>
                  <p>
                    Every product that carries the Broad X name meets the strictest
                    international food safety benchmarks. Certified under FSSAI,
                    registered with APEDA and IEC approved, we operate with the
                    documentation discipline, grade consistency and shipment
                    transparency that serious global buyers demand — from first enquiry
                    to final delivery.
                  </p>
                  <p>
                    From the Middle East to Southeast Asia, Europe to the Americas —
                    Broad X Overseas is the single point of contact that importers,
                    wholesalers and retail chains trust for reliable supply, competitive
                    pricing and shipments that arrive exactly as specified. Because your
                    buyers deserve the best.
                  </p>
                </ReadMore>
              </Reveal>

              <Reveal delay={2}>
                <ul className="bullets" style={{ marginTop: 28 }}>
                  <li>
                    <div className="check"><Check /></div>
                    <div>
                      <strong>Strong regional presence</strong>
                      <span>Export-grade produce from South India&apos;s most productive and diverse agricultural belts.</span>
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
                The principles that decide which farms we partner with, how we package and
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
                partner with to how a crate leaves the port.
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

      <CTAStrip />

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
    title: "Origin Integrity",
    text: "Traceable produce from certified origins across South India — consistent quality, season after season.",
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
