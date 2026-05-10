"use client";

import { useEffect, useLayoutEffect, useMemo, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import {
  PRODUCTS,
  PRODUCT_CATEGORIES,
  type Product,
} from "../components/products-data";
import { Arrow, Close, ChevronDown, Check } from "../components/Icons";
import ProductCard from "../components/ProductCard";

const isBrowser = typeof window !== "undefined";
const useIsoLayoutEffect = isBrowser ? useLayoutEffect : useEffect;
const reducedMotion = () =>
  isBrowser && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

type SortKey = "default" | "name-asc" | "name-desc" | "category";

const SORTS: { key: SortKey; label: string }[] = [
  { key: "default", label: "Curated order" },
  { key: "name-asc", label: "Name · A–Z" },
  { key: "name-desc", label: "Name · Z–A" },
  { key: "category", label: "By category" },
];

export default function ProductsExplorer() {
  const pathname = typeof window !== "undefined" ? window.location.pathname : "/products";

  const [cat, setCat] = useState<(typeof PRODUCT_CATEGORIES)[number]>("All");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortKey>("default");
  const [sortOpen, setSortOpen] = useState(false);
  const [displayed, setDisplayed] = useState<Product | null>(null);

  const list = useMemo(() => {
    let out: Product[] =
      cat === "All" ? [...PRODUCTS] : PRODUCTS.filter((p) => p.category === cat);

    const q = query.trim().toLowerCase();
    if (q) {
      out = out.filter((p) => {
        const hay = [
          p.name,
          p.tag,
          p.tagline,
          p.desc,
          p.long,
          p.category,
          ...p.highlights,
        ]
          .join(" ")
          .toLowerCase();
        return hay.includes(q);
      });
    }

    if (sort === "name-asc") out.sort((a, b) => a.name.localeCompare(b.name));
    else if (sort === "name-desc") out.sort((a, b) => b.name.localeCompare(a.name));
    else if (sort === "category") out.sort((a, b) => a.category.localeCompare(b.category));

    return out;
  }, [cat, query, sort]);

  const overlayRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const swapSlugRef = useRef<string | null>(null);
  const modalWasOpenRef = useRef(false);

  const clearUrl = useCallback(() => {
    if (typeof window === "undefined") return;
    const url = new URL(window.location.href);
    url.searchParams.delete("p");
    window.history.replaceState(null, "", url.toString());
  }, []);

  const openProduct = useCallback(
    (p: Product) => {
      setDisplayed(p);
      if (typeof window === "undefined") return;
      const url = new URL(window.location.href);
      url.searchParams.set("p", p.slug);
      window.history.pushState(null, "", url.toString());
    },
    []
  );

  // Initial load from URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const slug = params.get("p");
    if (slug) {
      const p = PRODUCTS.find((item) => item.slug === slug);
      if (p) setDisplayed(p);
    }
  }, []);

  // Back button handling
  useEffect(() => {
    const onPop = () => {
      const params = new URLSearchParams(window.location.search);
      const slug = params.get("p");
      if (!slug) {
        setDisplayed(null);
      } else {
        const p = PRODUCTS.find((item) => item.slug === slug);
        if (p) setDisplayed(p);
      }
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const closeModal = useCallback(() => {
    const overlay = overlayRef.current;
    const card = cardRef.current;
    const grid = gridRef.current;
    const strip = stripRef.current;

    if (reducedMotion()) {
      gsap.set([grid, strip].filter(Boolean), { clearProps: "transform,opacity,filter" });
      setDisplayed(null);
      clearUrl();
      return;
    }

    if (!overlay || !card) {
      setDisplayed(null);
      clearUrl();
      return;
    }

    const els = [overlay, card, grid, strip].filter(Boolean) as HTMLElement[];
    gsap.killTweensOf(els);

    const tl = gsap.timeline({
      onComplete: () => {
        if (grid) gsap.set(grid, { clearProps: "transform,opacity,filter" });
        if (strip) gsap.set(strip, { clearProps: "transform,opacity" });
        setDisplayed(null);
        clearUrl();
      },
    });

    tl.to(card, {
      autoAlpha: 0,
      y: 40,
      scale: 0.95,
      duration: 0.45,
      ease: "power4.inOut",
    });
    tl.to(overlay, { autoAlpha: 0, duration: 0.4, ease: "power2.inOut" }, "-=0.3");
    if (strip) {
      tl.to(strip, { yPercent: 100, duration: 0.36, ease: "power3.in" }, "-=0.32");
    }
    if (grid) {
      tl.to(
        grid,
        {
          y: 0,
          scale: 1,
          autoAlpha: 1,
          filter: "saturate(1)",
          duration: 0.52,
          ease: "power2.out",
        },
        "-=0.38"
      );
    }
  }, [clearUrl]);



  useEffect(() => {
    if (!displayed) {
      swapSlugRef.current = null;
      modalWasOpenRef.current = false;
    }
  }, [displayed]);

  /* Modal open + grid recedes + strip rises — only on first open, not when switching product */
  useIsoLayoutEffect(() => {
    if (!displayed) return;
    const overlay = overlayRef.current;
    const card = cardRef.current;
    const grid = gridRef.current;
    const strip = stripRef.current;
    if (!overlay || !card) return;

    const alreadyOpen = modalWasOpenRef.current;
    modalWasOpenRef.current = true;

    if (reducedMotion()) {
      gsap.set(overlay, { autoAlpha: 1 });
      gsap.set(card, { autoAlpha: 1, y: 0, scale: 1 });
      return;
    }

    if (alreadyOpen) {
      return;
    }

    const els = [overlay, card, grid, strip].filter(Boolean) as HTMLElement[];
    gsap.killTweensOf(els);

    gsap.set(overlay, { autoAlpha: 0 });
    gsap.set(card, { autoAlpha: 0, y: 48, scale: 0.93 });
    if (strip) gsap.set(strip, { yPercent: 100, autoAlpha: 1 });
    if (grid) gsap.set(grid, { y: 0, scale: 1, autoAlpha: 1, filter: "saturate(1)" });

    const tl = gsap.timeline();
    tl.to(overlay, { autoAlpha: 1, duration: 0.5, ease: "power2.out" });
    tl.to(card, { autoAlpha: 1, y: 0, scale: 1, duration: 0.8, ease: "back.out(1.2)" }, "-=0.4");

    if (grid) {
      tl.to(
        grid,
        {
          y: 36,
          scale: 0.96,
          autoAlpha: 0.38,
          filter: "saturate(0.78)",
          duration: 0.5,
          ease: "power2.in",
        },
        0
      );
    }
    if (strip) {
      tl.to(strip, { yPercent: 0, duration: 0.55, ease: "power3.out" }, 0.08);
      const thumbs = strip.querySelectorAll<HTMLElement>(".modal-strip-thumb");
      if (thumbs.length) {
        tl.fromTo(
          thumbs,
          { y: 10, autoAlpha: 0, scale: 0.94 },
          { y: 0, autoAlpha: 1, scale: 1, duration: 0.28, stagger: 0.04, ease: "power2.out" },
          "-=0.35"
        );
      }
    }

    return () => {
      tl.kill();
    };
  }, [displayed?.slug]);

  /* Switching product while modal open — fluid content refresh */
  useIsoLayoutEffect(() => {
    if (!displayed || reducedMotion() || !cardRef.current) return;
    const prev = swapSlugRef.current;
    if (prev && prev !== displayed.slug) {
      gsap.fromTo(
        cardRef.current,
        { y: 14, autoAlpha: 0.72, scale: 0.99 },
        { y: 0, autoAlpha: 1, scale: 1, duration: 0.42, ease: "power3.out" }
      );
    }
    swapSlugRef.current = displayed.slug;
  }, [displayed?.slug]);

  useEffect(() => {
    document.body.style.overflow = displayed ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [displayed]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && displayed) closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [displayed, closeModal]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest(".sort-control")) setSortOpen(false);
    };
    if (sortOpen) {
      document.addEventListener("click", onClick);
      return () => document.removeEventListener("click", onClick);
    }
  }, [sortOpen]);

  useIsoLayoutEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const cards = grid.querySelectorAll<HTMLElement>(".product-card");
    if (cards.length === 0) return;

    if (reducedMotion()) {
      gsap.set(cards, { autoAlpha: 1, y: 0 });
      return;
    }

    if (displayed) return;

    gsap.fromTo(
      cards,
      { autoAlpha: 0, y: 18, scale: 0.985 },
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 0.55,
        ease: "power3.out",
        stagger: 0.05,
        overwrite: "auto",
      }
    );
  }, [list, displayed]);

  return (
    <>
      <div className="explorer-toolbar">
        <label className="search-field" aria-label="Search products">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <input
            type="search"
            placeholder="Search products, e.g. turmeric, jaggery, eco-friendly…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <button
              type="button"
              className="search-clear"
              aria-label="Clear search"
              onClick={() => setQuery("")}
            >
              <Close size={14} />
            </button>
          )}
        </label>

        <div className="sort-control">
          <button
            type="button"
            className={`sort-trigger${sortOpen ? " open" : ""}`}
            aria-haspopup="listbox"
            aria-expanded={sortOpen}
            onClick={() => setSortOpen((v) => !v)}
          >
            <span className="lbl">Sort</span>
            <span className="val">{SORTS.find((s) => s.key === sort)?.label}</span>
            <ChevronDown size={14} />
          </button>
          <div className={`sort-menu${sortOpen ? " open" : ""}`} role="listbox">
            {SORTS.map((s) => (
              <button
                key={s.key}
                type="button"
                role="option"
                aria-selected={sort === s.key}
                className={sort === s.key ? "active" : ""}
                onClick={() => {
                  setSort(s.key);
                  setSortOpen(false);
                }}
              >
                <span>{s.label}</span>
                {sort === s.key && <Check size={14} />}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="pill-tabs explorer-tabs">
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

      <div className="explorer-meta">
        <span>
          Showing <strong>{list.length}</strong>{" "}
          {list.length === 1 ? "product" : "products"}
          {cat !== "All" && (
            <>
              {" "}
              in <em>{cat}</em>
            </>
          )}
          {query && (
            <>
              {" "}
              matching “<em>{query}</em>”
            </>
          )}
        </span>
        {(query || cat !== "All" || sort !== "default") && (
          <button
            type="button"
            className="explorer-reset"
            onClick={() => {
              setQuery("");
              setCat("All");
              setSort("default");
            }}
          >
            Reset filters
          </button>
        )}
      </div>

      <div
        className={`products-grid${displayed ? " products-grid-modal-open" : ""}`}
        ref={gridRef}
      >
        {list.map((p) => (
          <ProductCard key={p.slug} p={p} />
        ))}
      </div>

      {list.length === 0 && (
        <div className="explorer-empty">
          <h3>No products match.</h3>
          <p>Try a different keyword or reset the filters.</p>
          <button
            type="button"
            className="btn btn-glass"
            onClick={() => {
              setQuery("");
              setCat("All");
            }}
          >
            Reset filters
          </button>
        </div>
      )}

      {displayed && (
        <>
          <div
            ref={overlayRef}
            className="modal-overlay open"
            onClick={closeModal}
            role="presentation"
          >
            <div
              ref={cardRef}
              className="modal modal-split"
              role="dialog"
              aria-modal="true"
              aria-labelledby="product-modal-title"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-split-media" style={{ backgroundImage: `url(${displayed.img})` }}>
                <button type="button" className="modal-close" onClick={closeModal} aria-label="Close">
                  <Close size={18} />
                </button>
                <div className="modal-split-tag">{displayed.tag}</div>
              </div>
              <div className="modal-split-body">
                <div className="modal-eyebrow">{displayed.category}</div>
                <h3 id="product-modal-title">{displayed.name}</h3>
                <div className="tagline">&ldquo;{displayed.tagline}&rdquo;</div>
                <p className="modal-desc">{displayed.long}</p>

                <div className="modal-highlights">
                  <span className="modal-section-lbl">Key Highlights</span>
                  <div className="highlight-tags">
                    {displayed.highlights.map((h) => (
                      <span className="tag" key={h}>
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="modal-actions">
                  <Link
                    href={`/contact?product=${encodeURIComponent(displayed.slug)}`}
                    className="btn btn-primary"
                  >
                    Send Enquiry <Arrow size={14} />
                  </Link>
                  <button type="button" className="btn btn-glass" onClick={closeModal}>
                    Back
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            ref={stripRef}
            className="modal-product-strip"
            role="navigation"
            aria-label="Browse products"
          >
            <div className="modal-product-strip-inner">
              {list.map((p) => (
                <button
                  key={p.slug}
                  type="button"
                  className={`modal-strip-thumb${p.slug === displayed.slug ? " active" : ""}`}
                  onClick={() => openProduct(p)}
                  aria-current={p.slug === displayed.slug ? "true" : undefined}
                >
                  <span
                    className="modal-strip-img"
                    style={{ backgroundImage: `url(${p.img})` }}
                  />
                  <span className="modal-strip-name">{p.name}</span>
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}
