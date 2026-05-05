import Link from "next/link";
import type { Product } from "./products-data";
import { Arrow } from "./Icons";

export default function ProductCard({ p }: { p: Product }) {
  return (
    <Link
      href={`/products?p=${p.slug}`}
      className="product-card"
      id={p.slug}
      aria-label={`View details for ${p.name}`}
    >
      <div className="media-wrap">
        <span className="tag">{p.tag}</span>
        <div className="media" style={{ backgroundImage: `url(${p.img})` }} />
      </div>
      <div className="body">
        <h3>{p.name}</h3>
        <p>{p.desc}</p>
        <div className="foot">
          <span className="more">
            View Details <Arrow size={14} />
          </span>
        </div>
      </div>
    </Link>
  );
}
