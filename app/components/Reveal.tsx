"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  delay?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  once?: boolean;
};

export default function Reveal({
  children,
  delay = 0,
  className = "",
  once = true,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(
    () =>
      typeof window !== "undefined" &&
      typeof window.IntersectionObserver === "undefined"
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            if (once) io.unobserve(entry.target);
          } else if (!once) {
            setShown(false);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -8% 0px" }
    );

    io.observe(el);

    // Safety net — if IO never fires (rare browsers, bfcache, race conditions),
    // make sure content is visible after a short delay so the page is never
    // stuck at opacity:0.
    const fallback = window.setTimeout(() => setShown(true), 250);

    return () => {
      window.clearTimeout(fallback);
      io.disconnect();
    };
  }, [once]);

  const cls = [
    "reveal",
    delay > 0 ? `delay-${delay}` : "",
    shown ? "in" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div ref={ref} className={cls}>
      {children}
    </div>
  );
}
