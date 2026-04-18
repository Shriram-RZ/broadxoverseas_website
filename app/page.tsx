import Link from "next/link";
import ProductCard from "./components/ProductCard";
import CTAStrip from "./components/CTAStrip";
import ContactSection from "./components/ContactSection";
import { PRODUCTS } from "./components/products-data";
import { Arrow, Calendar, Globe, Shield, Users, Truck, Check } from "./components/Icons";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Values />
      <About />
      <ProductsPreview />
      <CTAStrip />
      <ContactSection />
    </>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-grid">
          <div>
            <span className="hero-eyebrow">
              <span className="dot" /> Global Trade Excellence
            </span>
            <h1>
              Nature&apos;s Finest,
              <br />
              <em>Globally Delivered.</em>
            </h1>
            <p className="lead">
              From Coimbatore&apos;s fertile belts to kitchens and businesses
              across the world — we export India&apos;s most trusted agricultural
              produce with precision, purity and transparency.
            </p>
            <div className="hero-cta">
              <Link href="/contact" className="btn btn-accent">
                Request a Quote <Arrow />
              </Link>
              <Link href="/products" className="btn btn-ghost-dark">
                Explore Products
              </Link>
            </div>
            <div className="hero-stats">
              <div className="s">
                <span className="n">8<em>+</em></span>
                <span className="l">Product Lines</span>
              </div>
              <div className="s">
                <span className="n">22<em>+</em></span>
                <span className="l">Export Markets</span>
              </div>
              <div className="s">
                <span className="n">100<em>%</em></span>
                <span className="l">FSSAI Compliant</span>
              </div>
            </div>
          </div>
          <EventCard />
        </div>
      </div>
    </section>
  );
}

function EventCard() {
  return (
    <aside className="event-card">
      <div className="event-pill">
        <Calendar size={14} /> Upcoming Event
      </div>
      <h3>Broad X Overseas × World Trade Virtual Summit 2026</h3>
      <p>
        Meet sourcing leads from 18 countries. Explore bulk contracts, sample
        logistics and the future of India&apos;s agri-exports.
      </p>
      <div className="event-meta">
        <div className="row">
          <div className="ico"><Calendar size={18} /></div>
          <div>
            <div className="t">22 March 2026</div>
            <div className="d">Sunday · 12:00 PM – 2:30 PM IST</div>
          </div>
        </div>
        <div className="row">
          <div className="ico"><Globe size={18} /></div>
          <div>
            <div className="t">Online Session</div>
            <div className="d">Digital · Virtual Access</div>
          </div>
        </div>
      </div>
      <div className="event-offer">
        <div>
          <span className="tag">Special Offer</span>
          <div className="price">
            ₹149 <span className="strike">₹299</span>
          </div>
        </div>
        <div className="off">50% OFF</div>
      </div>
      <div className="event-actions">
        <Link href="/contact" className="btn btn-ghost-dark">Event Details</Link>
        <Link href="/contact" className="btn btn-accent">
          Reserve Seat <Arrow size={14} />
        </Link>
      </div>
    </aside>
  );
}

function Values() {
  const items: Array<{
    icon: React.ReactNode;
    title: string;
    text: string;
    accent?: boolean;
  }> = [
    {
      icon: <Shield />,
      title: "Uncompromised Quality",
      text: "Stringent checks at every stage — procurement to export — so buyers receive only the best.",
    },
    {
      icon: <Users />,
      title: "Reliable Partnerships",
      text: "Long-term buyer relationships grounded in transparency and consistent delivery.",
      accent: true,
    },
    {
      icon: <Truck />,
      title: "Seamless Export",
      text: "End-to-end logistics — documentation, compliance, packaging — handled hassle-free.",
    },
    {
      icon: <Globe />,
      title: "Global Vision",
      text: "Carrying the richness of India's agricultural heritage to kitchens worldwide.",
      accent: true,
    },
  ];
  return (
    <section className="bg-white">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">Our Promise</div>
            <h2 className="section-title" style={{ marginTop: 10 }}>
              Four commitments
              <br />
              behind <em>every shipment.</em>
            </h2>
          </div>
          <p className="lead">
            We don&apos;t just export products — we export trust. From careful
            selection to final documentation, every step is handled with
            precision.
          </p>
        </div>
        <div className="values-grid">
          {items.map((v) => (
            <div key={v.title} className={`value-card${v.accent ? " accent" : ""}`}>
              <div className="ico">{v.icon}</div>
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-wash">
      <div className="container">
        <div className="split">
          <div className="split-media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1200&q=80"
              alt="Turmeric harvest in Coimbatore"
            />
            <div className="chip">
              <div>
                <div className="n">Coimbatore</div>
                <div className="l">South India · HQ</div>
              </div>
              <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "var(--success)",
                    boxShadow: "0 0 0 4px rgba(47,158,107,.2)",
                  }}
                />
              </div>
            </div>
          </div>
          <div>
            <div className="eyebrow">About Broad X Overseas</div>
            <h2 className="section-title" style={{ marginTop: 10 }}>
              Where nature&apos;s finest meets <em>global standards.</em>
            </h2>
            <p className="lead">
              Headquartered in Coimbatore — the heart of South India&apos;s most
              fertile agricultural belt — we bridge the finest produce of
              India&apos;s farms with discerning buyers across the world.
            </p>
            <ul className="bullets">
              <li>
                <div className="check"><Check /></div>
                <div>
                  <strong>Deep-rooted network</strong>
                  <span>Direct sourcing relationships with farmers across South India&apos;s most productive zones.</span>
                </div>
              </li>
              <li>
                <div className="check"><Check /></div>
                <div>
                  <strong>Rigorous quality process</strong>
                  <span>Graded, processed and packed under strict hygiene and documentation protocols.</span>
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
            <div style={{ marginTop: 32 }}>
              <Link href="/about" className="btn btn-outline">
                Read our story <Arrow size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductsPreview() {
  return (
    <section id="products" className="bg-white">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">Our Catalogue</div>
            <h2 className="section-title" style={{ marginTop: 10 }}>
              Eight lines of <em>export-grade</em> Indian produce.
            </h2>
          </div>
          <p className="lead">
            Sourced from South India&apos;s most productive agricultural zones.
            Every product is graded, processed and prepared to meet
            international market requirements.
          </p>
        </div>
        <div className="products-grid">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.slug} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
