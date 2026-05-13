"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [displayed, setDisplayed] = useState({ key: pathname, children });
  const [phase, setPhase] = useState<"idle" | "out" | "in">("idle");
  const lastPath = useRef(pathname);

  useEffect(() => {
    if (pathname === lastPath.current) return;
    lastPath.current = pathname;

    // Out → swap content → In
    setPhase("out");
    const swapTimer = setTimeout(() => {
      setDisplayed({ key: pathname, children });
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
      setPhase("in");
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setPhase("idle"));
      });
    }, 260);

    return () => clearTimeout(swapTimer);
  }, [pathname, children]);

  // Keep displayed.children in sync when not transitioning
  useEffect(() => {
    if (phase === "idle" && displayed.key === pathname) {
      setDisplayed({ key: pathname, children });
    }
  }, [children, pathname, phase, displayed.key]);

  return (
    <main data-transition={phase}>
      {displayed.children}
    </main>
  );
}
