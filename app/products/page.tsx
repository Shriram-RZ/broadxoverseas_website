import Link from "next/link";
import { Suspense } from "react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import ProductsExplorer from "./ProductsExplorer";
import { Arrow } from "../components/Icons";

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
        description="Sourced from the most productive agricultural zones of South India. Each product is graded, processed and prepared to meet international market requirements."
      />

      <section>
        <div className="container">
          <Suspense fallback={<div style={{ minHeight: 400 }} />}>
            <ProductsExplorer />
          </Suspense>
        </div>
      </section>

      <section>
        <div className="container">
          <Reveal>
            <div className="cta-strip">
              <div className="grid">
                <div>
                  <div className="eyebrow">Need a custom grade?</div>
                  <h2>
                    Tell us your spec — <em>we&apos;ll source it.</em>
                  </h2>
                  <p>
                    If you need specific moisture content, shelf life, packaging
                    format or certification, our team will coordinate with
                    farmer partners to match.
                  </p>
                </div>
                <div className="actions">
                  <Link href="/contact" className="btn btn-primary">
                    Get Quote <Arrow />
                  </Link>
                  <Link href="/why-choose-us" className="btn btn-glass">
                    Why choose us
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
