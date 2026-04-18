import PageHero from "../components/PageHero";
import CTAStrip from "../components/CTAStrip";
import { Check, Shield, Award, FileCheck, Sparkles, Box, Truck, Leaf } from "../components/Icons";

export const metadata = {
  title: "Quality & Compliance — Broad X Overseas",
  description:
    "FSSAI, APEDA and IEC compliant. Learn how Broad X Overseas grades, processes, packages and ships every batch — traceable, hygienic and export-ready.",
};

export default function QualityPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Quality" }]}
        title={
          <>
            Compliance-led. <em>Quality-obsessed.</em>
          </>
        }
        description="Every product leaving our facility is carefully graded, processed under strict hygiene standards, and packed to preserve freshness and nutritional integrity."
      />

      <section className="bg-white">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">Certifications</div>
              <h2 className="section-title" style={{ marginTop: 10 }}>
                Credentials that <em>travel with every crate.</em>
              </h2>
            </div>
            <p className="lead">
              We handle the paperwork so you don&apos;t have to. Every shipment
              arrives with the documentation regulators and buyers expect.
            </p>
          </div>
          <div className="compliance-grid">
            <div className="compliance-card">
              <div className="badge-big">FSSAI</div>
              <h3>Food Safety Compliant</h3>
              <p>Registered with the Food Safety and Standards Authority of India. Every processing step follows FSSAI hygiene protocols.</p>
            </div>
            <div className="compliance-card">
              <div className="badge-big">APEDA</div>
              <h3>Export Registered</h3>
              <p>Registered with the Agricultural and Processed Food Products Export Development Authority — India&apos;s apex export body.</p>
            </div>
            <div className="compliance-card">
              <div className="badge-big">IEC</div>
              <h3>International Trade</h3>
              <p>Import Export Code issued by the DGFT. Legally cleared for cross-border trade across all destinations.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-wash">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">Our Process</div>
              <h2 className="section-title" style={{ marginTop: 10 }}>
                Six steps between <em>farm and freight.</em>
              </h2>
            </div>
            <p className="lead">
              Each product passes through a rigorous cycle — from the fields of
              South India to the deck of an outbound container.
            </p>
          </div>
          <div className="process">
            <Step n={1} title="Farmer sourcing" text="Direct relationships with verified farmer partners across Coimbatore and neighbouring belts." />
            <Step n={2} title="Inspection & grading" text="Machine-graded by size, colour, moisture and purity. Rejects diverted from export stock." />
            <Step n={3} title="Processing" text="Cleaned, sorted and processed under FSSAI-compliant hygiene protocols." />
            <Step n={4} title="Packaging" text="Moisture-controlled, tamper-evident packing tuned for long transit and retail-ready shelves." />
          </div>
          <div className="process" style={{ marginTop: 32 }}>
            <Step n={5} title="Documentation" text="Phyto-sanitary certificates, COAs, packing lists and BL — assembled and shared pre-shipment." />
            <Step n={6} title="Dispatch" text="Multi-modal logistics to Tuticorin, Chennai and Cochin ports — aligned to buyer lead times." />
            <Step n={7} title="Traceability" text="Every batch traceable to source, season and grading lot — for full supply-chain transparency." />
            <Step n={8} title="After-ship support" text="Quality feedback loop with buyers. We log issues by batch and course-correct the next season." />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">Why it matters</div>
              <h2 className="section-title" style={{ marginTop: 10 }}>
                The buyer checklist — <em>covered.</em>
              </h2>
            </div>
            <p className="lead">
              International buyers want consistency, reliability and
              transparency. Here&apos;s how each shows up in our workflow.
            </p>
          </div>
          <div className="values-grid">
            <Cover icon={<Sparkles />} title="Consistency" text="Machine-graded, specification-matched produce, season after season — not batch-to-batch gambles." />
            <Cover icon={<Shield />} accent title="Hygiene" text="Food-grade processing; moisture and aflatoxin limits tested against international norms." />
            <Cover icon={<Box />} title="Packing integrity" text="Transit-proof packaging preserves freshness, colour and nutritional integrity across continents." />
            <Cover icon={<FileCheck />} accent title="Documentation" text="COAs, phyto certs and export docs bundled per shipment — so customs doesn&apos;t hold your cargo." />
            <Cover icon={<Leaf />} title="Sustainability" text="Farmer-first procurement, biodegradable banana-leaf lines and minimal secondary packaging." />
            <Cover icon={<Award />} accent title="Responsiveness" text="A dedicated point of contact per account, responses within a business day, shipment-level updates." />
            <Cover icon={<Truck />} title="Logistics partners" text="Tie-ups with established freight forwarders for reliable cold-chain and ambient routes." />
            <Cover icon={<Check />} accent title="Proof of quality" text="Pre-shipment samples available on request, and third-party lab reports for regulated markets." />
          </div>
        </div>
      </section>

      <CTAStrip
        eyebrow="Looking for a spec sheet?"
        title={<>We&apos;ll share <em>a sample and the paperwork.</em></>}
        description="Tell us the product, the destination and the quantity — we'll respond with a specification, pricing and timeline."
        primaryLabel="Request spec sheet"
      />
    </>
  );
}

function Step({ n, title, text }: { n: number; title: string; text: string }) {
  return (
    <div className="step">
      <div className="n">{n}</div>
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
}

function Cover({
  icon, title, text, accent,
}: {
  icon: React.ReactNode; title: string; text: string; accent?: boolean;
}) {
  return (
    <div className={`value-card${accent ? " accent" : ""}`}>
      <div className="ico">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
