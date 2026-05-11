"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { Arrow, Menu, Close } from "./Icons";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/why-choose-us", label: "Why Choose Us" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!ctaRef.current) return;
    
    const tl = gsap.to(ctaRef.current, {
      "--shine-pos": "150%",
      duration: 1.8,
      repeat: -1,
      repeatDelay: 3.5,
      ease: "power2.inOut",
    });

    return () => {
      tl.kill();
    };
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header className={`nav on-dark${scrolled ? " scrolled" : ""}`}>
        <div className="container">
          <div className="nav-inner">
            <Link href="/" className="logo" aria-label="Broad X Overseas — Home">
              <span className="logo-mark">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M5 5l14 14M19 5L5 19" />
                </svg>
              </span>
              <span className="logo-text">
                Broad <span className="accent">X</span> Overseas
              </span>
            </Link>

            <nav className="nav-links" aria-label="Primary">
              {LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={isActive(l.href) ? "active" : ""}
                >
                  {l.label}
                </Link>
              ))}
              <Link 
                href="/contact" 
                className="btn btn-primary nav-cta"
                ref={ctaRef}
              >
                Get Quote <Arrow size={14} />
              </Link>
            </nav>

            <button
              type="button"
              className="nav-toggle"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`nav-overlay${open ? " open" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />
      <aside
        className={`nav-drawer on-dark${open ? " open" : ""}`}
        role="dialog"
        aria-label="Navigation"
        aria-hidden={!open}
      >
        <div className="nav-drawer-head">
          <Link href="/" className="logo" onClick={() => setOpen(false)}>
            <span className="logo-mark">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M5 5l14 14M19 5L5 19" />
              </svg>
            </span>
            <span className="logo-text">
              Broad <span className="accent">X</span>
            </span>
          </Link>
          <button
            type="button"
            className="nav-toggle"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            style={{ display: "inline-flex", marginLeft: 0 }}
          >
            <Close size={22} />
          </button>
        </div>

        <nav className="nav-drawer-links" aria-label="Primary mobile">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={isActive(l.href) ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              <span>{l.label}</span>
              <Arrow size={14} className="arrow" />
            </Link>
          ))}
        </nav>

        <div className="nav-drawer-cta">
          <Link
            href="/contact"
            className="btn btn-primary"
            onClick={() => setOpen(false)}
          >
            Get Quote <Arrow size={14} />
          </Link>
        </div>
      </aside>
    </>
  );
}

