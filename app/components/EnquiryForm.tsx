"use client";

import { useEffect, useRef, useState } from "react";
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
  const [sending, setSending] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const [open, setOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!incoming) return;
    const match = PRODUCT_OPTIONS.find((p) => p.slug === incoming);
    if (match) setProduct(match.slug);
  }, [incoming]);

  useEffect(() => {
    if (!open) return;
    const idx = PRODUCT_OPTIONS.findIndex((p) => p.slug === product);
    setActiveIdx(idx >= 0 ? idx : 0);
  }, [open, product]);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        triggerRef.current?.contains(target) ||
        listRef.current?.contains(target)
      ) {
        return;
      }
      setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const selectIdx = (i: number) => {
    const opt = PRODUCT_OPTIONS[i];
    if (!opt) return;
    setProduct(opt.slug);
    setOpen(false);
    triggerRef.current?.focus();
  };

  const onTriggerKey = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpen(true);
    }
  };

  const onListKey = (e: React.KeyboardEvent<HTMLUListElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIdx((i) => (i + 1) % PRODUCT_OPTIONS.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIdx((i) => (i - 1 + PRODUCT_OPTIONS.length) % PRODUCT_OPTIONS.length);
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      selectIdx(activeIdx);
    } else if (e.key === "Home") {
      e.preventDefault();
      setActiveIdx(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setActiveIdx(PRODUCT_OPTIONS.length - 1);
    }
  };

  useEffect(() => {
    if (!open || !listRef.current) return;
    const li = listRef.current.querySelectorAll<HTMLLIElement>("li")[activeIdx];
    li?.scrollIntoView({ block: "nearest" });
  }, [open, activeIdx]);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (sending) return;
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") ?? ""),
      company: String(fd.get("company") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      location: String(fd.get("location") ?? ""),
      product: String(fd.get("product") ?? "general"),
      requirement: String(fd.get("requirement") ?? ""),
      website: String(fd.get("website") ?? ""),
    };
    setSending(true);
    setErrorMsg(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) throw new Error(data.error || "Failed to send");
      setSent(true);
      (e.target as HTMLFormElement).reset();
      setProduct("general");
      setTimeout(() => setSent(false), 6000);
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Failed to send");
    } finally {
      setSending(false);
    }
  };

  const current = PRODUCT_OPTIONS.find((p) => p.slug === product);

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

      <div className={`form-field form-field-combo${open ? " open" : ""}`}>
        <input type="hidden" name="product" value={product} />
        <button
          ref={triggerRef}
          type="button"
          id="product"
          className="combo-trigger"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-labelledby="product-label"
          onClick={() => setOpen((v) => !v)}
          onKeyDown={onTriggerKey}
        >
          <span className="combo-value">{current?.name}</span>
          <span className="combo-chev" aria-hidden>
            <ChevronDown size={14} />
          </span>
        </button>
        <label id="product-label" htmlFor="product" className="float">Product of interest</label>

        <ul
          ref={listRef}
          className="combo-list"
          role="listbox"
          tabIndex={-1}
          aria-activedescendant={open ? `product-opt-${activeIdx}` : undefined}
          onKeyDown={onListKey}
          aria-hidden={!open}
        >
          {PRODUCT_OPTIONS.map((p, i) => {
            const selected = p.slug === product;
            const active = i === activeIdx;
            return (
              <li
                key={p.slug}
                id={`product-opt-${i}`}
                role="option"
                aria-selected={selected}
                className={`combo-option${selected ? " selected" : ""}${active ? " active" : ""}`}
                onMouseEnter={() => setActiveIdx(i)}
                onClick={() => selectIdx(i)}
                style={{ ["--i" as string]: i }}
              >
                <span className="combo-option-name">{p.name}</span>
                {selected && (
                  <span className="combo-option-check" aria-hidden>
                    <Check size={12} />
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="form-field">
        <textarea id="requirement" name="requirement" required placeholder=" " rows={5} />
        <label htmlFor="requirement">Requirement — quantity, target port, packaging</label>
      </div>

      {/* honeypot — hidden from real users */}
      <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}>
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="form-actions">
        <button type="submit" className="btn btn-primary" disabled={sending}>
          {sending ? (
            <>Sending…</>
          ) : sent ? (
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
      {errorMsg && (
        <div className="form-success" role="alert" style={{ color: "#b91c1c" }}>
          {errorMsg}
        </div>
      )}
    </form>
  );
}
