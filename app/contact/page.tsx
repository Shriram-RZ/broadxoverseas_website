import { Suspense } from "react";
import PageHero from "../components/PageHero";
import EnquiryForm from "../components/EnquiryForm";
import { ScrollReveal, Ornament } from "../components/Motion";
import { Phone, Mail, Globe, Pin, Clock, Calendar } from "../components/Icons";

export const metadata = {
  title: "Contact — Broad X Overseas",
  description:
    "Reach Broad X Overseas for sourcing, samples, pricing and partnerships. We typically respond within one business day.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
        title={
          <>
            Let&apos;s talk <em>sourcing.</em>
          </>
        }
        description="Your reliable supply partner is just a message away. Connect with our team to discuss your requirements, request samples, or get a competitive quotation."
      />

      <section>
        <div className="container">
          <div className="contact-layout">
            {/* Side panel — coordinates, hours, response promise */}
            <ScrollReveal className="contact-side">
              <div className="contact-side-card">
                <div className="eyebrow">Direct Lines</div>
                <h2 className="contact-side-title">
                  Talk to a real <em>sourcing lead.</em>
                </h2>
                <Ornament />

                <ul className="contact-channels">
                  <li>
                    <a href="mailto:info@broadxoverseas.com">
                      <span className="ico"><Mail size={18} /></span>
                      <span className="meta">
                        <span className="lbl">Email</span>
                        <span className="val">info@broadxoverseas.com</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="tel:+919791177883">
                      <span className="ico"><Phone size={18} /></span>
                      <span className="meta">
                        <span className="lbl">Phone / WhatsApp</span>
                        <span className="val">+91 97911 77883</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://broadxoverseas.com" target="_blank" rel="noreferrer">
                      <span className="ico"><Globe size={18} /></span>
                      <span className="meta">
                        <span className="lbl">Website</span>
                        <span className="val">broadxoverseas.com</span>
                      </span>
                    </a>
                  </li>
                </ul>

                <div className="contact-divider" />

                <div className="contact-meta-grid">
                  <div>
                    <div className="ico"><Pin size={16} /></div>
                    <div className="lbl">Headquarters</div>
                    <div className="val">
                      15 Gianun Nagar, Manamagoundar Layout,<br />
                      Jothipuram, Coimbatore — 641047,<br />
                      Tamil Nadu, India
                    </div>
                  </div>
                  <div>
                    <div className="ico"><Clock size={16} /></div>
                    <div className="lbl">Working Hours</div>
                    <div className="val">
                      Mon — Sat<br />
                      09:00 — 18:30 IST
                    </div>
                  </div>
                  <div>
                    <div className="ico"><Calendar size={16} /></div>
                    <div className="lbl">Response Time</div>
                    <div className="val">
                      Quotation within<br />
                      one business day
                    </div>
                  </div>
                  <div>
                    <div className="ico"><Globe size={16} /></div>
                    <div className="lbl">Active Markets</div>
                    <div className="val">
                      Middle East · SEA<br />
                      Europe · Africa · Americas
                    </div>
                  </div>
                </div>

                <div className="contact-ports">
                  <span className="lbl">Ports we ship from</span>
                  <div className="port-chips">
                    <span>Tuticorin</span>
                    <span>Chennai</span>
                    <span>Cochin</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Form */}
            <ScrollReveal className="contact-form-wrap" delay={0.08}>
              <Suspense fallback={<div style={{ minHeight: 480 }} />}>
                <EnquiryForm />
              </Suspense>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
