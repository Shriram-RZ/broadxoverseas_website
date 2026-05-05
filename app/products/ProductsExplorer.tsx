"use client";

import { useEffect, useLayoutEffect, useMemo, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { gsap } from "gsap";
import {
  PRODUCTS,
  PRODUCT_CATEGORIES,
  type Product,
} from "../components/products-data";
import { Arrow, Close, ChevronDown, Check } from "../components/Icons";

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
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const slug = params.get("p");

  const [cat, setCat] = useState<(typeof PRODUCT_CATEGORIES)[number]>("All");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortKey>("default");
  const [sortOpen, setSortOpen] = useState(false);

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

  const fromUrl = slug ? PRODUCTS.find((p) => p.slug === slug) ?? null : null;

  // `displayed` drives the modal render — independent of URL so we can animate
  // close before unmounting.
  const [displayed, setDisplayed] = useState<Product | null>(fromUrl);

  const clearUrl = useCallback(() => {
    router.replace(pathname, { scroll: false });
  }, [router, pathname]);

  const openProduct = useCallback(
    (p: Product) => {
      router.replace(`${pathname}?p=${p.slug}`, { scroll: false });
    },
    [router, pathname]
  );

  /* Modal refs */
  const overlayRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  /* Close that animates first, then unmounts and clears the URL */
  const closeModal = useCallback(() => {
    const overlay = overlayRef.current;
    const card = cardRef.current;
    if (!overlay || !card || reducedMotion()) {
      setDisplayed(null);
      clearUrl();
      return;
    }
    gsap.killTweensOf([overlay, card]);
    const tl = gsap.timeline({
      onComplete: () => {
        setDisplayed(null);
        clearUrl();
      },
    });
    tl.to(card, {
      autoAlpha: 0,
      y: 24,
      scale: 0.96,
      duration: 0.32,
      ease: "power3.in",
    });
    tl.to(overlay, { autoAlpha: 0, duration: 0.22, ease: "power2.in" }, "-=0.18");
  }, [clearUrl]);

  /* Open: when URL slug points to a product, set it as displayed (mounts modal) */
  useEffect(() => {
    if (fromUrl && fromUrl.slug !== displayed?.slug) {
      setDisplayed(fromUrl);
    } else if (!fromUrl && displayed) {
      // External clear (browser back, etc.) — animate close
      closeModal();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fromUrl?.slug]);

  /* Open animation runs once the modal is in the DOM */
  useIsoLayoutEffect(() => {
    if (!displayed) return;
    const overlay = overlayRef.current;
    const card = cardRef.current;
    if (!overlay || !card) return;

    if (reducedMotion()) {
      gsap.set(overlay, { autoAlpha: 1 });
      gsap.set(card, { autoAlpha: 1, y: 0, scale: 1 });
      return;
    }

    gsap.killTweensOf([overlay, card]);
    gsap.set(overlay, { autoAlpha: 0 });
    gsap.set(card, { autoAlpha: 0, y: 32, scale: 0.96 });

    const tl = gsap.timeline();
    tl.to(overlay, { autoAlpha: 1, duration: 0.32, ease: "power2.out" });
    tl.to(
      card,
      { autoAlpha: 1, y: 0, scale: 1, duration: 0.55, ease: "power3.out" },
      "-=0.18"
    );

    return () => {
      tl.kill();
    };
  }, [displayed?.slug]);

  /* Body lock + ESC */
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

  /* Close sort menu on outside click */
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest(".sort-control")) setSortOpen(false);
    };
    if (sortOpen) {
      document.addEventListener("click", onClick);
      return () => document.removeEventListener("click", onClick);
    }
  }, [sortOpen]);

  /* Animate the grid items each time the filter/search/sort changes. */
  const gridRef = useRef<HTMLDivElement>(null);
  useIsoLayoutEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const cards = grid.querySelectorAll<HTMLElement>(".product-card");
    if (cards.length === 0) return;

    if (reducedMotion()) {
      gsap.set(cards, { autoAlpha: 1, y: 0 });
      return;
    }

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
  }, [list]);

  return (
    <>
      {/* Toolbar — search · sort · category */}
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

      <div className="products-grid" ref={gridRef}>
        {list.map((p) => (
          <button
            key={p.slug}
            id={p.slug}
            type="button"
            className="product-card"
            onClick={() => openProduct(p)}
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
          </button>
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

      {/* Modal */}
      {displayed && (
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
              <button
                type="button"
                className="modal-close"
                onClick={closeModal}
                aria-label="Close"
              >
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
                    <span className="tag" key={h}>{h}</span>
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
      )}
    </>
  );
}
