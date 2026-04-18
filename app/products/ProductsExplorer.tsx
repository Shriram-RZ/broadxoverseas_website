"use client";

import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { PRODUCTS, PRODUCT_CATEGORIES } from "../components/products-data";

export default function ProductsExplorer() {
  const [cat, setCat] = useState<(typeof PRODUCT_CATEGORIES)[number]>("All");
  const list = cat === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.category === cat);

  return (
    <>
      <div style={{ marginBottom: 32, display: "flex", justifyContent: "center" }}>
        <div className="pill-tabs">
          {PRODUCT_CATEGORIES.map((c) => (
            <button
              key={c}
              className={c === cat ? "active" : ""}
              onClick={() => setCat(c)}
              type="button"
            >
              {c}
            </button>
          ))}
        </div>
      </div>
      <div className="products-grid">
        {list.map((p) => (
          <ProductCard key={p.slug} p={p} />
        ))}
      </div>
    </>
  );
}
