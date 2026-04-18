import PageHero from "../components/PageHero";
import ContactSection from "../components/ContactSection";
import { Phone, Mail, Pin, Clock, Globe } from "../components/Icons";

export const metadata = {
  title: "Contact — Broad X Overseas",
  description:
    "Reach Broad X Overseas for sourcing, samples, pricing and partnerships. We typically respond within one business day.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        title={
          <>
            Let&apos;s talk <em>sourcing.</em>
          </>
        }
        description="Your reliable supply partner is just a message away. Connect with our team to discuss your requirements, request samples, or get a competitive quotation."
      />

      <section className="bg-white">
        <div className="container">
          <div className="values-grid">
            <Info icon={<Phone />} label="Phone" value="+91 97911 77883" href="tel:+919791177883" />
            <Info icon={<Mail />} label="Email" value="info@broadxoverseas.com" href="mailto:info@broadxoverseas.com" accent />
            <Info icon={<Pin />} label="Address" value="15 Gianun Nagar, Manamagoundar Layout, Jothipuram, Coimbatore — 641047" />
            <Info icon={<Clock />} label="Hours" value="Mon – Sat · 9:00 AM – 7:00 PM IST" accent />
          </div>
        </div>
      </section>

      <ContactSection withHeading={false} />

      <section className="bg-wash">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">Global Reach</div>
              <h2 className="section-title" style={{ marginTop: 10 }}>
                Serving buyers <em>across four continents.</em>
              </h2>
            </div>
            <p className="lead">
              We ship regularly to the Middle East, Southeast Asia and Europe.
              Africa, Oceania and the Americas are active expansion markets.
            </p>
          </div>
          <div className="values-grid">
            <Region title="Middle East" places="UAE · Saudi Arabia · Oman · Qatar" />
            <Region title="Southeast Asia" places="Singapore · Malaysia · Indonesia · Vietnam" accent />
            <Region title="Europe" places="United Kingdom · Germany · Netherlands · France" />
            <Region title="Beyond" places="Australia · Canada · East Africa · USA" accent />
          </div>
        </div>
      </section>
    </>
  );
}

function Info({
  icon, label, value, href, accent,
}: {
  icon: React.ReactNode; label: string; value: string; href?: string; accent?: boolean;
}) {
  const body = (
    <div className={`value-card${accent ? " accent" : ""}`} style={{ cursor: href ? "pointer" : "default" }}>
      <div className="ico">{icon}</div>
      <h3 style={{ fontSize: 13, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--fg-3)", marginBottom: 6, fontWeight: 600 }}>
        {label}
      </h3>
      <p style={{ color: "var(--fg-1)", fontSize: 15, fontWeight: 500 }}>{value}</p>
    </div>
  );
  return href ? (
    <a href={href} style={{ display: "block" }}>
      {body}
    </a>
  ) : body;
}

function Region({ title, places, accent }: { title: string; places: string; accent?: boolean }) {
  return (
    <div className={`value-card${accent ? " accent" : ""}`}>
      <div className="ico"><Globe /></div>
      <h3>{title}</h3>
      <p>{places}</p>
    </div>
  );
}
