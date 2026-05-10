import Link from "next/link";
import type { Product } from "./products-data";
import { Arrow } from "./Icons";

export default function ProductCard({ p }: { p: Product }) {
  return (
    <div className="product-card" id={p.slug}>
      <Link href={`/products?p=${p.slug}`} className="product-card-link" aria-label={`View details for ${p.name}`}>
        <div className="media-wrap">
          <span className="tag">{p.tag}</span>
          <div className="media" style={{ backgroundImage: `url(${p.img})` }} />
        </div>
        <div className="body">
          <h3>{p.name}</h3>
          <p>{p.desc}</p>
        </div>
      </Link>
      <div className="foot">
        <Link href={`/products?p=${p.slug}`} className="more">
          View Details <Arrow size={14} />
        </Link>
        <Link 
          href={`/contact?product=${encodeURIComponent(p.slug)}`} 
          className="btn btn-primary btn-sm card-cta"
        >
          Get Quote
        </Link>
      </div>
    </div>
  );
}
