import PageHero from "../components/PageHero";
import CTAStrip from "../components/CTAStrip";
import { Check, Shield, Users, Truck, Globe, Leaf, Award, MapIcon } from "../components/Icons";

export const metadata = {
  title: "About — Broad X Overseas",
  description:
    "Coimbatore-based agricultural exporter bridging South India's finest produce with global buyers. Learn our story, promise and reach.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        title={
          <>
            Where nature&apos;s finest meets <em>global standards.</em>
          </>
        }
        description="Broad X Overseas is a trusted name in the global agricultural trade, headquartered in Coimbatore — the heart of South India's most fertile and resource-rich agricultural belt."
      />

      <section className="bg-white">
        <div className="container">
          <div className="split">
            <div className="split-media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1530507629858-e4977d30e9e4?auto=format&fit=crop&w=1200&q=80"
                alt="Hands holding fresh turmeric roots"
              />
              <div className="chip">
                <div>
                  <div className="n">Est. 2019</div>
                  <div className="l">Coimbatore, South India</div>
                </div>
              </div>
            </div>
            <div>
              <div className="eyebrow">Our Story</div>
              <h2 className="section-title" style={{ marginTop: 10 }}>
                We don&apos;t just export products — <em>we export trust.</em>
              </h2>
              <p className="lead">
                Our strength lies in our deep-rooted network with the finest
                agricultural regions of India, combined with a rigorous quality
                process that ensures every shipment reflects our promise —
                pure, consistent, and reliable.
              </p>
              <p>
                From the careful selection of raw materials to final packaging
                and documentation, every step is handled with precision and
                professionalism. We understand the expectations of
                international buyers: consistency in quality, reliability in
                supply, and transparency in trade — that&apos;s exactly what we
                deliver, shipment after shipment.
              </p>
              <ul className="bullets">
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
            </div>
          </div>
        </div>
      </section>

      <section className="bg-wash">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">Our Core Values</div>
              <h2 className="section-title" style={{ marginTop: 10 }}>
                Four commitments behind <em>every shipment.</em>
              </h2>
            </div>
            <p className="lead">
              The principles that shape every decision — from which farm we
              source from to how a crate leaves the port.
            </p>
          </div>
          <div className="values-grid">
            <Value icon={<Shield />} title="Uncompromised Quality" text="Stringent checks at every stage — procurement to export — so buyers receive only the best." />
            <Value icon={<Users />} accent title="Reliable Partnerships" text="Long-term relationships grounded in transparency, honest communication and consistent delivery." />
            <Value icon={<Truck />} title="Seamless Export" text="End-to-end logistics — documentation, compliance, packaging — handled hassle-free for buyers." />
            <Value icon={<Globe />} accent title="Global Vision" text="Carrying the richness of India's agricultural heritage to kitchens and businesses across the globe." />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">Our Promise</div>
              <h2 className="section-title" style={{ marginTop: 10 }}>
                Every product leaves our facility <em>ready for the world.</em>
              </h2>
            </div>
            <p className="lead">
              Carefully graded, processed under strict hygiene standards, and
              packed to preserve freshness and nutritional integrity —
              ensuring you receive only what meets your highest expectations.
            </p>
          </div>
          <div className="values-grid">
            <Value icon={<Leaf />} title="Farm-to-port provenance" text="Sourced from the most productive agricultural belts of South India — traceable by shipment." />
            <Value icon={<Award />} accent title="Export-grade sorting" text="Machine-graded by size, moisture and colour; hygienically cleaned and moisture-controlled." />
            <Value icon={<MapIcon />} title="Strategic logistics" text="Positioned near Tuticorin, Cochin and Chennai ports — reducing lead times across hemispheres." />
            <Value icon={<Shield />} accent title="Compliance-led" text="FSSAI · APEDA · IEC compliant. Documentation handled end-to-end, so buyers avoid surprises." />
          </div>
        </div>
      </section>

      <CTAStrip
        title={<>Source with us — <em>and ship with confidence.</em></>}
        eyebrow="Ready to partner?"
        description="Tell us what you need, and our team will respond with sample availability, pricing and a timeline — usually within one business day."
        primaryLabel="Start a conversation"
      />
    </>
  );
}

function Value({
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
