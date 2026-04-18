import PageHero from "../components/PageHero";
import CTAStrip from "../components/CTAStrip";
import ProductsExplorer from "./ProductsExplorer";
import { PRODUCTS } from "../components/products-data";

export const metadata = {
  title: "Products — Broad X Overseas",
  description:
    "Explore eight lines of export-grade Indian agricultural produce — jaggery, turmeric, lemons, banana & curry leaves, groundnut, red banana and fresh coconut.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Products" }]}
        title={
          <>
            Eight lines of <em>export-grade</em> Indian produce.
          </>
        }
        description="Sourced from the most productive agricultural zones of South India, our product range embodies purity, freshness and global-grade standards. Each product is graded, processed and prepared to meet international market requirements."
      />

      <section className="bg-white">
        <div className="container">
          <ProductsExplorer />
        </div>
      </section>

      <section className="bg-wash" id="details">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">Detailed Specs</div>
              <h2 className="section-title" style={{ marginTop: 10 }}>
                Specifications <em>by product.</em>
              </h2>
            </div>
            <p className="lead">
              Every product is offered in multiple form factors and grading
              options. Request a spec sheet for the variant you need — we can
              tailor packaging and volumes to your market.
            </p>
          </div>

          <div style={{ display: "grid", gap: 24 }}>
            {PRODUCTS.map((p, i) => (
              <article
                key={p.slug}
                id={p.slug}
                style={{
                  display: "grid",
                  gridTemplateColumns: i % 2 === 0 ? "1fr 1fr" : "1fr 1fr",
                  gap: 48,
                  alignItems: "center",
                  background: "#fff",
                  border: "1px solid var(--border-1)",
                  borderRadius: "var(--r-xl)",
                  overflow: "hidden",
                  padding: 0,
                  boxShadow: "var(--shadow-1)",
                }}
                className="product-detail"
              >
                <div
                  style={{
                    aspectRatio: "4/3",
                    backgroundImage: `url(${p.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    order: i % 2 === 0 ? 0 : 1,
                    minHeight: 320,
                  }}
                />
                <div style={{ padding: "clamp(24px, 4vw, 48px)" }}>
                  <span className="badge">{p.tag}</span>
                  <h3
                    className="serif"
                    style={{
                      fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
                      margin: "14px 0 8px",
                      letterSpacing: "-0.02em",
                      lineHeight: 1.15,
                    }}
                  >
                    {p.name}
                  </h3>
                  <div
                    className="serif-italic"
                    style={{ color: "var(--saffron-600)", fontSize: 18, marginBottom: 16 }}
                  >
                    &ldquo;{p.tagline}&rdquo;
                  </div>
                  <p style={{ color: "var(--fg-2)", marginBottom: 18 }}>{p.long}</p>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 6,
                      marginBottom: 20,
                    }}
                  >
                    {p.highlights.map((h) => (
                      <span key={h} className="hl" style={{
                        fontSize: 11,
                        color: "var(--blue-600)",
                        background: "var(--blue-50)",
                        padding: "4px 9px",
                        borderRadius: "var(--r-pill)",
                        fontWeight: 600,
                        letterSpacing: ".02em",
                        border: "1px solid var(--blue-100)",
                      }}>{h}</span>
                    ))}
                  </div>
                  <a
                    className="btn btn-outline"
                    href={`/contact?product=${encodeURIComponent(p.name)}`}
                  >
                    Enquire about {p.name.split(" ")[0]}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip
        eyebrow="Need a custom grade?"
        title={<>Tell us your spec — <em>we&apos;ll source it.</em></>}
        description="If you need specific moisture content, shelf life, packaging format or certification, our team will coordinate with farmer partners to match."
        primaryLabel="Request a quote"
      />
    </>
  );
}
