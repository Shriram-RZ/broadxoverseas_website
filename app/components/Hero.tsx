"use client";

import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Arrow, Globe, Shield, Truck, Users } from "./Icons";
import { MagneticHover } from "./Motion";

const isBrowser = typeof window !== "undefined";
const useIsoLayoutEffect = isBrowser ? useLayoutEffect : useEffect;

export default function Hero() {
  const root = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  /* Mark mounted so CSS entrance class triggers */
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  useIsoLayoutEffect(() => {
    if (!isBrowser) return;
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  // Detect mobile device — set after mount to avoid hydration mismatch
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 760);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section
      className={`hero hero-reference on-dark ${mounted ? "hero-entered" : ""}`}
      id="home"
      ref={root}
    >
      <div className="hero-bg" ref={bgRef}>
        {isMobile ? (
          <img
            src="/hero_mobile.jpg"
            alt="Broad X Overseas Hero"
            className="hero-video"
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
            loading="lazy"
          />
        ) : (
          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src="/hero_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
      {/* <div className="hero-overlay" /> */}

      <div className="hero-stack">
        {/* ---- Left-aligned text content ---- */}
        <div className="container hero-content-wrap">
          <div className="hero-main">
            <h1 className="hero-title-sans hero-anim hero-anim-2">
              <span className="line">Global Reach.</span>
              <span className="line">Delivering Value.</span>
            </h1>

            <p className="lead hero-lead hero-anim hero-anim-4">
              Broad X connects businesses worldwide with reliable export solutions.
            </p>

            <div className="hero-cta hero-anim hero-anim-5">
              <MagneticHover strength={0.15}>
                <Link href="/products" className="btn btn-outline hero-cta-ghost">
                  Our Services
                </Link>
              </MagneticHover>
            </div>
          </div>
        </div>

        {/* ---- Bottom glass stat cards ---- */}
        <div className="hero-bottom-strip hero-anim hero-anim-6">
          <div className="container">
            <div className="hero-three-boxes">
              <div className="hero-card">
                <div className="ico"><Globe size={20} /></div>
                <div><div className="t">Global Network</div></div>
              </div>
              <div className="hero-card">
                <div className="ico"><Truck size={20} /></div>
                <div><div className="t">Reliable Shipping</div></div>
              </div>
              <div className="hero-card">
                <div className="ico"><Shield size={20} /></div>
                <div><div className="t">Quality Assurance</div></div>
              </div>
              <div className="hero-card">
                <div className="ico"><Users size={20} /></div>
                <div><div className="t">Customer Focus</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll" aria-hidden="true">
        <span>Scroll</span>
        <div className="line" />
      </div>
    </section>
  );
}
