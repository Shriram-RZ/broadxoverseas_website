"use client";

import {
  forwardRef,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
  type CSSProperties,
} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const isBrowser = typeof window !== "undefined";
const useIsoLayoutEffect = isBrowser ? useLayoutEffect : useEffect;

let registered = false;
function ensureGsap() {
  if (!isBrowser || registered) return;
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ ignoreMobileResize: true });
  registered = true;
}

const prefersReducedMotion = () =>
  isBrowser && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ============= MotionProvider =============
   Mount once at the app root. Refreshes ScrollTrigger after web fonts
   resolve and after any image loads, so reveal positions are accurate. */
export function MotionProvider({ children }: { children: ReactNode }) {
  useIsoLayoutEffect(() => {
    ensureGsap();
    if (prefersReducedMotion()) return;

    const refresh = () => ScrollTrigger.refresh();

    if (typeof document !== "undefined" && "fonts" in document) {
      document.fonts.ready.then(refresh).catch(() => {});
    }
    window.addEventListener("load", refresh, { once: true });

    return () => {
      window.removeEventListener("load", refresh);
    };
  }, []);

  return <>{children}</>;
}

/* ============= ScrollReveal =============
   Drop-in scroll-driven fade + lift. Honors reduced motion. */
type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
  once?: boolean;
  style?: CSSProperties;
};

export const ScrollReveal = forwardRef<HTMLDivElement, RevealProps>(
  function ScrollReveal(
    { children, className = "", delay = 0, y = 28, duration = 0.85, once = true, style },
    forwardedRef
  ) {
    const innerRef = useRef<HTMLDivElement | null>(null);

    const setRef = (node: HTMLDivElement | null) => {
      innerRef.current = node;
      if (typeof forwardedRef === "function") forwardedRef(node);
      else if (forwardedRef) forwardedRef.current = node;
    };

    useIsoLayoutEffect(() => {
      ensureGsap();
      const el = innerRef.current;
      if (!el) return;

      if (prefersReducedMotion()) {
        gsap.set(el, { autoAlpha: 1, y: 0 });
        return;
      }

      gsap.set(el, { autoAlpha: 0, y });

      const tween = gsap.to(el, {
        autoAlpha: 1,
        y: 0,
        duration,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: once ? "play none none none" : "play none none reset",
        },
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    }, [delay, y, duration, once]);

    return (
      <div ref={setRef} className={className} style={style}>
        {children}
      </div>
    );
  }
);

/* ============= ParallaxLayer =============
   Translates an element on the Y axis as it scrolls past the viewport.
   Useful for hero backgrounds and decorative imagery. */
export function ParallaxLayer({
  children,
  speed = 0.3,
  className = "",
  style,
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useIsoLayoutEffect(() => {
    ensureGsap();
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    const tween = gsap.fromTo(
      el,
      { yPercent: -speed * 50 },
      {
        yPercent: speed * 50,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [speed]);

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}

/* ============= HeroReveal =============
   Hero-only entrance: split-line stagger fade-up. Runs on mount, no scroll. */
export function HeroReveal({
  children,
  className = "",
  stagger = 0.12,
  delay = 0.1,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useIsoLayoutEffect(() => {
    ensureGsap();
    const el = ref.current;
    if (!el) return;

    const targets = el.querySelectorAll<HTMLElement>("[data-hero-item]");
    if (targets.length === 0) return;

    if (prefersReducedMotion()) {
      gsap.set(targets, { autoAlpha: 1, y: 0 });
      return;
    }

    gsap.set(targets, { autoAlpha: 0, y: 28 });

    const tween = gsap.to(targets, {
      autoAlpha: 1,
      y: 0,
      duration: 1.1,
      ease: "power3.out",
      stagger,
      delay,
    });

    return () => {
      tween.kill();
    };
  }, [stagger, delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

/* ============= MagneticHover =============
   Lightweight cursor-follow for premium buttons. Disabled on touch / reduced motion. */
export function MagneticHover({
  children,
  strength = 0.25,
  className = "",
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ensureGsap();
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    if (window.matchMedia("(hover: none)").matches) return;

    const qx = gsap.quickTo(el, "x", { duration: 0.5, ease: "power3.out" });
    const qy = gsap.quickTo(el, "y", { duration: 0.5, ease: "power3.out" });

    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      qx((e.clientX - cx) * strength);
      qy((e.clientY - cy) * strength);
    };

    const onLeave = () => {
      qx(0);
      qy(0);
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [strength]);

  return (
    <div ref={ref} className={className} style={{ display: "inline-flex" }}>
      {children}
    </div>
  );
}

/* ============= AnimatedCounter =============
   Counts from 0 → value when it scrolls into view. */
export function AnimatedCounter({
  value,
  suffix = "",
  duration = 1.6,
  className = "",
}: {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useIsoLayoutEffect(() => {
    ensureGsap();
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      el.textContent = `${value}${suffix}`;
      return;
    }

    const obj = { n: 0 };
    el.textContent = `0${suffix}`;

    const tween = gsap.to(obj, {
      n: value,
      duration,
      ease: "power2.out",
      onUpdate: () => {
        el.textContent = `${Math.round(obj.n).toLocaleString()}${suffix}`;
      },
      scrollTrigger: { trigger: el, start: "top 92%", toggleActions: "play none none none" },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [value, suffix, duration]);

  return <span ref={ref} className={className}>0{suffix}</span>;
}

/* ============= Marquee =============
   Infinite-loop horizontal track. CSS-driven via custom property; pauses on hover. */
export function Marquee({
  children,
  speed = 30,
  className = "",
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  return (
    <div
      className={`marquee ${className}`}
      style={{ ["--marquee-duration" as string]: `${speed}s` }}
    >
      <div className="marquee-track">
        <div className="marquee-group" aria-hidden={false}>{children}</div>
        <div className="marquee-group" aria-hidden="true">{children}</div>
      </div>
    </div>
  );
}

/* ============= TiltCard =============
   Subtle 3D tilt on cards. Disabled on touch and reduced-motion devices. */
export function TiltCard({
  children,
  className = "",
  max = 6,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    if (window.matchMedia("(hover: none)").matches) return;

    const qrx = gsap.quickTo(el, "rotationX", { duration: 0.5, ease: "power3.out" });
    const qry = gsap.quickTo(el, "rotationY", { duration: 0.5, ease: "power3.out" });
    gsap.set(el, { transformPerspective: 800, transformStyle: "preserve-3d" });

    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      qry(px * max);
      qrx(-py * max);
    };
    const reset = () => {
      qrx(0);
      qry(0);
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", reset);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", reset);
    };
  }, [max]);

  return (
    <div ref={ref} className={className} style={{ willChange: "transform" }}>
      {children}
    </div>
  );
}

/* ============= SectionHeading =============
   Standard heading block with eyebrow, title and decorative ornament beneath.
   The ornament: a short ocean-gradient line with a diamond mark — per design brief. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  ornament = true,
  className = "",
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  ornament?: boolean;
  className?: string;
}) {
  return (
    <div className={`section-heading ${align === "center" ? "is-center" : ""} ${className}`}>
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <h2 className="section-title">{title}</h2>
      {ornament && <Ornament />}
      {description && <p className="lead">{description}</p>}
    </div>
  );
}

/* Ornament: gradient line with diamond accent, used under all major headings. */
export function Ornament({ className = "" }: { className?: string }) {
  return (
    <div className={`ornament ${className}`} aria-hidden="true">
      <span className="ornament-line" />
      <span className="ornament-diamond" />
      <span className="ornament-line" />
    </div>
  );
}

/* ============= ScrollProgress =============
   Thin gradient bar pinned at the top of the viewport that tracks scroll progress. */
export function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) return;
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const p = max > 0 ? h.scrollTop / max : 0;
      el.style.transform = `scaleX(${p})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [mounted]);

  return <div ref={ref} className="scroll-progress" aria-hidden="true" />;
}
