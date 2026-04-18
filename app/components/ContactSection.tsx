import EnquiryForm from "./EnquiryForm";
import { Phone, Mail, Pin, Clock } from "./Icons";

export default function ContactSection({ withHeading = true }: { withHeading?: boolean }) {
  return (
    <section id="contact" className="bg-white">
      <div className="container">
        {withHeading && (
          <div className="section-head">
            <div>
              <div className="eyebrow">Contact</div>
              <h2 className="section-title" style={{ marginTop: 10 }}>
                Let&apos;s talk <em>sourcing.</em>
              </h2>
            </div>
            <p className="lead">
              Reach out for samples, pricing or a partnership discussion. We
              typically respond within one business day.
            </p>
          </div>
        )}
        <div className="contact-grid">
          <div className="contact-card">
            <h3>Your reliable supply partner — just a message away.</h3>
            <p>Based in Coimbatore, serving the Middle East, SE Asia, Europe and beyond.</p>
            <div className="contact-list">
              <div className="row">
                <div className="ico"><Phone size={18} /></div>
                <div>
                  <div className="lbl">Phone</div>
                  <div className="val">+91 97911 77883</div>
                </div>
              </div>
              <div className="row">
                <div className="ico"><Mail size={18} /></div>
                <div>
                  <div className="lbl">Email</div>
                  <div className="val">info@broadxoverseas.com</div>
                </div>
              </div>
              <div className="row">
                <div className="ico"><Pin size={18} /></div>
                <div>
                  <div className="lbl">Address</div>
                  <div className="val">
                    15 Gianun Nagar, Manamagoundar Layout,
                    <br />
                    Jothipuram, Coimbatore — 641047
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="ico"><Clock size={18} /></div>
                <div>
                  <div className="lbl">Hours</div>
                  <div className="val">Mon – Sat · 9:00 AM – 7:00 PM IST</div>
                </div>
              </div>
            </div>
          </div>
          <EnquiryForm />
        </div>
      </div>
    </section>
  );
}
