"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Arrow, Check, ChevronDown } from "./Icons";
import { PRODUCTS } from "./products-data";

const PRODUCT_OPTIONS = [
  { slug: "general", name: "General inquiry" },
  ...PRODUCTS.map((p) => ({ slug: p.slug, name: p.name })),
];

export default function EnquiryForm() {
  const params = useSearchParams();
  const incoming = params.get("product");

  const [product, setProduct] = useState<string>("general");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!incoming) return;
    const match = PRODUCT_OPTIONS.find((p) => p.slug === incoming);
    if (match) setProduct(match.slug);
  }, [incoming]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <form className="contact-card" onSubmit={onSubmit} noValidate>
      <h3>Send Inquiry</h3>
      <p className="sub">
        We typically respond within one business day with sample availability,
        pricing and a timeline.
      </p>

      <div className="form-grid">
        <div className="form-field">
          <input id="name" name="name" type="text" required placeholder=" " autoComplete="name" />
          <label htmlFor="name">Name</label>
        </div>

        <div className="form-field">
          <input id="company" name="company" type="text" placeholder=" " autoComplete="organization" />
          <label htmlFor="company">Company</label>
        </div>

        <div className="form-field">
          <input id="email" name="email" type="email" required placeholder=" " autoComplete="email" />
          <label htmlFor="email">Email</label>
        </div>

        <div className="form-field">
          <input id="location" name="location" type="text" placeholder=" " autoComplete="country-name" />
          <label htmlFor="location">Country / Location</label>
        </div>
      </div>

      <div className="form-field">
        <input id="phone" name="phone" type="tel" placeholder=" " autoComplete="tel" />
        <label htmlFor="phone">Phone (optional)</label>
      </div>

      <div className="form-field form-field-select">
        <select
          id="product"
          name="product"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          required
        >
          {PRODUCT_OPTIONS.map((p) => (
            <option key={p.slug} value={p.slug}>
              {p.name}
            </option>
          ))}
        </select>
        <label htmlFor="product" className="float">Product of interest</label>
        <span className="select-chev" aria-hidden>
          <ChevronDown size={14} />
        </span>
      </div>

      <div className="form-field">
        <textarea id="requirement" name="requirement" required placeholder=" " rows={5} />
        <label htmlFor="requirement">Requirement — quantity, target port, packaging</label>
      </div>

      <div className="form-actions">
        <button type="submit" className="btn btn-primary">
          {sent ? (
            <>Inquiry sent <Check size={14} /></>
          ) : (
            <>Send Inquiry <Arrow size={14} /></>
          )}
        </button>
      </div>

      {sent && (
        <div className="form-success" role="status">
          <Check size={14} /> Thanks — we&apos;ll be in touch shortly.
        </div>
      )}
    </form>
  );
}
