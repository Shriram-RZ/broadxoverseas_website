"use client";

import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Arrow, Globe, Shield, Container } from "./Icons";
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

  // Detect mobile device
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 760;

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
      <div className="hero-overlay" />

      <div className="hero-stack">
        {/* ---- Left-aligned text content ---- */}
        <div className="container hero-content-wrap">
          <div className="hero-main">
            {/* Eyebrow badge */}
            <div className="hero-eyebrow hero-anim hero-anim-1">
              <span className="dot" />
              Trusted Agricultural Exporter
            </div>

            <h1 className="hero-title-serif hero-anim hero-anim-2">
              <span className="line">Global Reach,</span>
              <span className="line">Delivering <span className="accent-text">Value</span></span>
            </h1>

            <p className="hero-elegant-line hero-anim hero-anim-3">
              Premium produce, elevated for international markets.
            </p>

            <p className="lead hero-lead hero-anim hero-anim-4">
              Broad X Overseas connects buyers worldwide with dependable agricultural
              exports from South India — transparent procurement, certified quality,
              and end-to-end logistics you can trust.
            </p>

            <div className="hero-cta hero-anim hero-anim-5">
              <MagneticHover strength={0.15}>
                <Link href="/products" className="btn btn-outline hero-cta-ghost">
                  Our Products
                </Link>
              </MagneticHover>
              <MagneticHover strength={0.15}>
                <Link href="/contact" className="btn btn-primary">
                  Get Quote <Arrow />
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
                <div className="ico">
                  <Globe size={20} />
                </div>
                <div>
                  <div className="t">Global Network</div>
                  <div className="d">22+ export markets</div>
                </div>
              </div>
              <div className="hero-card">
                <div className="ico">
                  <Shield size={20} />
                </div>
                <div>
                  <div className="t">Quality Assured</div>
                  <div className="d">FSSAI · APEDA · IEC</div>
                </div>
              </div>
              <div className="hero-card">
                <div className="ico">
                  <Container size={20} />
                </div>
                <div>
                  <div className="t">Reliable Logistics</div>
                  <div className="d">End-to-end shipping</div>
                </div>
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
