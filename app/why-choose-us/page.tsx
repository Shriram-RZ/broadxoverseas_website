import Link from "next/link";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { Ornament } from "../components/Motion";
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
  Box,
  Container,
  Check,
} from "../components/Icons";

export const metadata = {
  title: "Why Choose Us — Broad X Overseas",
  description:
    "Why international buyers choose Broad X Overseas — uncompromised quality, certified compliance, reliable logistics and transparent trade.",
};

const FEATURES = [
  { icon: <Shield />, title: "Uncompromised Quality", text: "Stringent checks at every stage — procurement to export — so you receive only the best." },
  { icon: <Award />, title: "Certified Compliance", text: "FSSAI · APEDA · IEC. Documentation and clearances handled end-to-end." },
  { icon: <Truck />, title: "Seamless Logistics", text: "End-to-end shipping — packaging, paperwork and freight forwarding under one roof." },
  { icon: <Users />, title: "Reliable Partnership", text: "Long-term buyer relationships grounded in transparency and consistent delivery." },
  { icon: <Leaf />, title: "Direct From Source", text: "Procured directly from farmers — no middlemen, full traceability, fair pricing." },
  { icon: <Globe />, title: "Global Reach", text: "Active across the Middle East, Southeast Asia, Europe and expanding markets." },
  { icon: <Sparkles />, title: "Premium Grade", text: "Machine-graded, specification-matched produce — season after season, batch after batch." },
  { icon: <FileCheck />, title: "Transparent Trade", text: "Pre-shipment samples, third-party lab reports and shipment-level updates." },
];

const PROCESS = [
  { n: "01", title: "Farmer Sourcing", text: "Direct relationships with verified farmer partners across Coimbatore and neighbouring belts." },
  { n: "02", title: "Inspection & Grading", text: "Machine-graded by size, colour, moisture and purity. Rejects diverted from export stock." },
  { n: "03", title: "Processing", text: "Cleaned, sorted and processed under FSSAI-compliant hygiene protocols." },
  { n: "04", title: "Packaging", text: "Moisture-controlled, tamper-evident packing tuned for long transit and retail shelves." },
  { n: "05", title: "Documentation", text: "Phyto-sanitary certificates, COAs, packing lists and BL — assembled pre-shipment." },
  { n: "06", title: "Dispatch", text: "Multi-modal logistics to Tuticorin, Chennai and Cochin ports — aligned to lead times." },
  { n: "07", title: "Traceability", text: "Every batch traceable to source, season and grading lot — full supply-chain transparency." },
  { n: "08", title: "After-ship Support", text: "Quality feedback loop with buyers. Issues logged by batch and corrected next season." },
];

const CERTS = [
  { tag: "FSSAI", title: "Food Safety Compliant", text: "Registered with the Food Safety and Standards Authority of India. Every step follows FSSAI hygiene protocols." },
  { tag: "APEDA", title: "Export Registered", text: "Registered with the Agricultural and Processed Food Products Export Development Authority — India's apex export body." },
  { tag: "IEC", title: "International Trade", text: "Import Export Code issued by the DGFT. Legally cleared for cross-border trade across all destinations." },
];

export default function WhyChooseUsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Why Choose Us" }]}
        title={
          <>
            Built on trust. <em>Engineered for global trade.</em>
          </>
        }
        description="Eight commitments behind every Broad X Overseas shipment — what international buyers expect from a premium agricultural exporter, delivered consistently."
      />

      {/* Feature cards */}
      <section>
        <div className="container">
          <div className="section-head">
            <Reveal>
              <div>
                <div className="eyebrow">Our Commitments</div>
                <h2 className="section-title" style={{ marginTop: 12 }}>
                  The buyer checklist — <em>covered.</em>
                </h2>
                <Ornament />
              </div>
            </Reveal>
            <Reveal delay={1}>
              <p className="lead">
                International buyers want consistency, reliability and transparency.
                Here&apos;s how each shows up in our workflow.
              </p>
            </Reveal>
          </div>

          <div className="feature-grid">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <div className="feature-card">
                  <div className="ico">{f.icon}</div>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-surface">
        <div className="container">
          <div className="section-head">
            <Reveal>
              <div>
                <div className="eyebrow">Certifications</div>
                <h2 className="section-title" style={{ marginTop: 12 }}>
                  Credentials that <em>travel with every crate.</em>
                </h2>
                <Ornament />
              </div>
            </Reveal>
            <Reveal delay={1}>
              <p className="lead">
                We handle the paperwork so you don&apos;t have to. Every shipment
                arrives with the documentation regulators and buyers expect.
              </p>
            </Reveal>
          </div>

          <div className="cert-grid">
            {CERTS.map((c, i) => (
              <Reveal key={c.tag} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div className="cert-card">
                  <div className="tag">{c.tag}</div>
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section>
        <div className="container">
          <div className="section-head">
            <Reveal>
              <div>
                <div className="eyebrow">Our Process</div>
                <h2 className="section-title" style={{ marginTop: 12 }}>
                  Eight steps between <em>farm and freight.</em>
                </h2>
                <Ornament />
              </div>
            </Reveal>
            <Reveal delay={1}>
              <p className="lead">
                Each product passes through a rigorous cycle — from the fields of
                South India to the deck of an outbound container.
              </p>
            </Reveal>
          </div>

          <div className="process-grid">
            {PROCESS.map((s, i) => (
              <Reveal key={s.n} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <div className="process-card">
                  <div className="n">{s.n}</div>
                  <h4>{s.title}</h4>
                  <p>{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bullets recap */}
      <section className="bg-surface">
        <div className="container">
          <div className="split">
            <Reveal>
              <div>
                <div className="eyebrow">What you get</div>
                <h2 className="section-title" style={{ marginTop: 12 }}>
                  Quality, paperwork and timing — <em>handled.</em>
                </h2>
                <Ornament />
                <p className="lead" style={{ marginTop: 18 }}>
                  Every Broad X Overseas shipment arrives ready for customs,
                  ready for retail and ready for your buyers.
                </p>
                <ul className="bullets">
                  <li>
                    <div className="check"><Check /></div>
                    <div>
                      <strong>Pre-shipment samples</strong>
                      <span>Quality match before you commit to the full order.</span>
                    </div>
                  </li>
                  <li>
                    <div className="check"><Check /></div>
                    <div>
                      <strong>Lab reports & COAs</strong>
                      <span>Third-party testing for regulated markets, on request.</span>
                    </div>
                  </li>
                  <li>
                    <div className="check"><Check /></div>
                    <div>
                      <strong>Shipment-level updates</strong>
                      <span>A dedicated point of contact tracks each container.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={1} className="feature-grid" >
              {[
                { icon: <Container />, title: "Container freight", text: "Tuticorin · Chennai · Cochin" },
                { icon: <Box />, title: "Custom packaging", text: "Retail · bulk · branded" },
                { icon: <Shield />, title: "Hygiene-led", text: "Food-grade, moisture-tested" },
                { icon: <Globe />, title: "22+ markets", text: "ME · SEA · EU · expanding" },
              ].map((it) => (
                <div key={it.title} className="feature-card">
                  <div className="ico">{it.icon}</div>
                  <h3>{it.title}</h3>
                  <p>{it.text}</p>
                </div>
              ))}
            </Reveal>
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
                  <div className="eyebrow">Looking for a spec sheet?</div>
                  <h2>
                    We&apos;ll share <em>a sample and the paperwork.</em>
                  </h2>
                  <p>
                    Tell us the product, the destination and the quantity —
                    we&apos;ll respond with a specification, pricing and timeline.
                  </p>
                </div>
                <div className="actions">
                  <Link href="/contact" className="btn btn-primary">
                    Get Quote <Arrow />
                  </Link>
                  <Link href="/products" className="btn btn-glass">
                    Browse Products
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
