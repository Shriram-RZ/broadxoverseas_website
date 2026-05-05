"use client";

import Link from "next/link";
import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Arrow, Globe, Shield, Container } from "./Icons";
import { MagneticHover } from "./Motion";

const isBrowser = typeof window !== "undefined";
const useIsoLayoutEffect = isBrowser ? useLayoutEffect : useEffect;
const reduced = () =>
  isBrowser && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function Hero() {
  const root = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<HTMLDivElement>(null);

  useIsoLayoutEffect(() => {
    if (!isBrowser) return;
    gsap.registerPlugin(ScrollTrigger);
    if (reduced()) return;

    const ctx = gsap.context(() => {
      // ---- Word-by-word kinetic reveal ----
      const words = wordsRef.current?.querySelectorAll<HTMLElement>(".w");
      if (words && words.length > 0) {
        gsap.set(words, { yPercent: 110, opacity: 0 });
        gsap.to(words, {
          yPercent: 0,
          opacity: 1,
          duration: 1.1,
          ease: "power4.out",
          stagger: 0.05,
          delay: 0.15,
        });
      }

      // ---- Hero items stagger (eyebrow, lead, ctas, cards) ----
      gsap.from("[data-hero-item]", {
        autoAlpha: 0,
        y: 24,
        duration: 1.0,
        ease: "power3.out",
        stagger: 0.08,
        delay: 0.35,
      });

      // ---- Parallax background on scroll ----
      gsap.to(bgRef.current, {
        yPercent: 18,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // ---- Hero content fades & lifts as user scrolls past ----
      gsap.to(".hero-content", {
        yPercent: -8,
        autoAlpha: 0.55,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // ---- Scroll cue bob ----
      gsap.to(".hero-scroll", {
        y: 6,
        duration: 1.6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, root);

    return () => ctx.revert();
  }, []);

  // Split heading into spans so each word can rise independently.
  const Words = ({ text }: { text: string }) => (
    <span className="words" aria-label={text}>
      {text.split(" ").map((w, i) => (
        <span key={`${w}-${i}`} className="w-wrap">
          <span className="w">{w}</span>
          {i < text.split(" ").length - 1 ? " " : ""}
        </span>
      ))}
    </span>
  );

  return (
    <section className="hero" id="home" ref={root}>
      <div className="hero-bg" ref={bgRef}>
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
      </div>
      <div className="hero-overlay" />

      <div className="hero-content">
        <div className="container">
          <span className="hero-eyebrow" data-hero-item>
            <span className="dot" /> Global Agricultural Exports
          </span>

          <h1 ref={wordsRef}>
            <span className="line">
              <Words text="GLOBAL REACH." />
            </span>
            <span className="line">
              <Words text="DELIVERING " />
              <span className="accent">
                <Words text="VALUE." />
              </span>
            </span>
          </h1>

          <p className="lead" data-hero-item>
            Premium Agricultural Exports from South India — Direct. Reliable.
            Certified. Fair.
          </p>

          <div className="hero-cta" data-hero-item>
            <MagneticHover strength={0.15}>
              <Link href="/contact" className="btn btn-primary">
                Get Quote <Arrow />
              </Link>
            </MagneticHover>
            <MagneticHover strength={0.15}>
              <Link href="/contact" className="btn btn-glass">
                Contact Us
              </Link>
            </MagneticHover>
          </div>
        </div>
      </div>

      <div className="container hero-bottom-section">
        <div className="hero-bottom-text" data-hero-item>
          <h3>Broad X Overseas</h3>
          <p>
            Your trusted partner in global agricultural trade, delivering premium produce directly from South India to the world.
          </p>
        </div>
        <div className="hero-cards" data-hero-item>
          <div className="hero-card">
            <div className="ico"><Globe size={18} /></div>
            <div>
              <div className="t">Global Network</div>
              <div className="d">22+ export markets</div>
            </div>
          </div>
          <div className="hero-card">
            <div className="ico"><Shield size={18} /></div>
            <div>
              <div className="t">Quality Assured</div>
              <div className="d">FSSAI · APEDA · IEC</div>
            </div>
          </div>
          <div className="hero-card">
            <div className="ico"><Container size={18} /></div>
            <div>
              <div className="t">Reliable Logistics</div>
              <div className="d">End-to-end shipping</div>
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
