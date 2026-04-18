"use client";

import { useState } from "react";
import { Arrow, Check } from "./Icons";
import { PRODUCTS } from "./products-data";

type Props = { defaultProduct?: string };

export default function EnquiryForm({ defaultProduct }: Props) {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="row">
        <div className="field">
          <label htmlFor="name">Name *</label>
          <input id="name" required placeholder="Your full name" />
        </div>
        <div className="field">
          <label htmlFor="email">Email *</label>
          <input id="email" required type="email" placeholder="you@company.com" />
        </div>
      </div>
      <div className="row">
        <div className="field">
          <label htmlFor="phone">Phone *</label>
          <input id="phone" required placeholder="+971 ··· ····" />
        </div>
        <div className="field">
          <label htmlFor="company">Company</label>
          <input id="company" placeholder="Company name" />
        </div>
      </div>
      <div className="row">
        <div className="field">
          <label htmlFor="location">Location *</label>
          <input id="location" required placeholder="City, Country" />
        </div>
        <div className="field">
          <label htmlFor="product">Product Interest</label>
          <select id="product" defaultValue={defaultProduct ?? PRODUCTS[0].name}>
            {PRODUCTS.map((p) => (
              <option key={p.slug}>{p.name}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          rows={4}
          placeholder="Tell us about volumes, timelines and shipping destination…"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        {sent ? (
          <>
            Enquiry sent <Check size={14} />
          </>
        ) : (
          <>
            Send enquiry <Arrow />
          </>
        )}
      </button>
    </form>
  );
}
