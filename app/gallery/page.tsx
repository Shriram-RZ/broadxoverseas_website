import PageHero from "../components/PageHero";
import CTAStrip from "../components/CTAStrip";

export const metadata = {
  title: "Gallery — Broad X Overseas",
  description:
    "Scenes from the source: farms, harvests, packaging and ports that power Broad X Overseas' global agricultural exports.",
};

const IMAGES: Array<{ src: string; title: string; tag: string; tall?: boolean }> = [
  {
    src: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?auto=format&fit=crop&w=1200&q=80",
    title: "Turmeric — India's golden spice",
    tag: "Harvest",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1616684000067-36952fde56ec?auto=format&fit=crop&w=1200&q=80",
    title: "Natural jaggery blocks",
    tag: "Processing",
  },
  {
    src: "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&w=1200&q=80",
    title: "Banana leaves — fresh cut",
    tag: "Eco packaging",
  },
  {
    src: "https://images.unsplash.com/photo-1587496679742-bad432fe8cc0?auto=format&fit=crop&w=1200&q=80",
    title: "Fresh lemons from South Indian groves",
    tag: "Fresh",
  },
  {
    src: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1200&q=80",
    title: "Farmers sorting turmeric roots",
    tag: "Sourcing",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1599909533733-32b9097a1ce6?auto=format&fit=crop&w=1200&q=80",
    title: "Curry leaves — aromatic and authentic",
    tag: "Aromatic",
  },
  {
    src: "https://images.unsplash.com/photo-1567892737950-30c4db37a4e0?auto=format&fit=crop&w=1200&q=80",
    title: "Raw groundnut — bulk grade",
    tag: "Protein",
  },
  {
    src: "https://images.unsplash.com/photo-1580984969071-a8da5656c2fb?auto=format&fit=crop&w=1200&q=80",
    title: "Fresh coconuts from the growing belt",
    tag: "Bulk",
  },
  {
    src: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&w=1200&q=80",
    title: "Red bananas — exotic superfruit",
    tag: "Superfruit",
  },
  {
    src: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1200&q=80",
    title: "Port loading — container freight",
    tag: "Logistics",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1530507629858-e4977d30e9e4?auto=format&fit=crop&w=1200&q=80",
    title: "Hands sorting fresh produce",
    tag: "Grading",
  },
  {
    src: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=1200&q=80",
    title: "Warehouse — export-ready stock",
    tag: "Packaging",
  },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
        title={
          <>
            Scenes from <em>the source.</em>
          </>
        }
        description="Fields, harvests, processing lines and ports — the everyday workflow behind every Broad X Overseas shipment."
      />

      <section>
        <div className="container">
          <div className="gallery-grid">
            {IMAGES.map((img, i) => (
              <div
                key={i}
                className={`gallery-item${img.tall ? " tall" : ""}`}
                style={{ backgroundImage: `url(${img.src})` }}
                role="img"
                aria-label={img.title}
              >
                <div className="overlay">
                  <span>{img.tag}</span>
                  <h4>{img.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip
        eyebrow="Want to visit the source?"
        title={<>Buyers are welcome — <em>walk our facility.</em></>}
        description="Planning a procurement visit to India? We'll arrange a facility tour, farm visits and tastings across the Coimbatore belt."
        primaryLabel="Plan a visit"
      />
    </>
  );
}
