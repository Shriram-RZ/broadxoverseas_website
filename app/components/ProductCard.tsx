import Link from "next/link";
import type { Product } from "./products-data";
import { Arrow } from "./Icons";

export default function ProductCard({ p }: { p: Product }) {
  return (
    <Link href={`/products#${p.slug}`} className="product-card" id={p.slug}>
      <div className="media" style={{ backgroundImage: `url(${p.img})` }}>
        <span className="tag">{p.tag}</span>
        <div className="cap">&ldquo;{p.tagline}&rdquo;</div>
      </div>
      <div className="body">
        <h3>{p.name}</h3>
        <p>{p.desc}</p>
        <div className="highlights">
          {p.highlights.map((h) => (
            <span className="hl" key={h}>{h}</span>
          ))}
        </div>
        <div className="foot">
          <span className="price">Quote on request</span>
          <span className="more">Explore <Arrow size={14} /></span>
        </div>
      </div>
    </Link>
  );
}
