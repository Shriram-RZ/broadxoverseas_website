"use client";

import { useState } from "react";
import { ScrollReveal, Ornament } from "./Motion";

const regions = [
  { name: "Middle East", markets: "UAE · KSA · Oman · Qatar", x: 62.5, y: 38 },
  { name: "Southeast Asia", markets: "Singapore · Malaysia · Indonesia", x: 80, y: 52 },
  { name: "South Asia", markets: "India · Sri Lanka · Bangladesh", x: 71.5, y: 44 },
  { name: "Europe", markets: "UK · Germany · Netherlands · France", x: 51, y: 22 },
  { name: "North America", markets: "USA · Canada", x: 20, y: 32 },
  { name: "Africa", markets: "Kenya · South Africa · Egypt", x: 53, y: 58 },
  { name: "East Asia", markets: "China · Japan · South Korea", x: 84, y: 36 },
  { name: "Australia & NZ", markets: "Australia · New Zealand", x: 87, y: 75 },
];
const origin = { x: 71.4, y: 43.9 };

export default function GlobalPresenceMap() {
  const [activeRegion, setActiveRegion] = useState<string | null>(null);

  return (
    <section className="bg-surface" id="routes">
      <div className="container">
        <div className="routes">
          <div className="routes-grid">
            <div>
              <div className="eyebrow">Global Presence</div>
              <h2 className="section-title" style={{ marginTop: 12 }}>
                One supplier. <em>Five continents.</em>
              </h2>
              <Ornament />
              <p className="lead" style={{ marginTop: 18 }}>
                Active trade lanes from Tuticorin, Chennai and Cochin — to the
                Middle East, Southeast Asia and Europe (with lanes expanding across
                Africa and the Americas). Every shipment backed by documentation
                and a single point of contact.
              </p>
              <div className="region-list">
                {regions.map((r) => (
                  <div
                    className={`region-row ${activeRegion === r.name ? "active" : ""}`}
                    key={r.name}
                    onMouseEnter={() => setActiveRegion(r.name)}
                    onMouseLeave={() => setActiveRegion(null)}
                  >
                    <span className="name">
                      <span className="pin" />
                      {r.name}
                    </span>
                    <span className="meta">{r.markets}</span>
                  </div>
                ))}
              </div>
            </div>

            <ScrollReveal className="world-map world-map-precise">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="world-map-img"
                src="/world-map.svg"
                alt=""
                width={950}
                height={620}
                decoding="async"
              />
              <svg
                className="world-map-overlay-svg"
                viewBox="0 0 950 620"
                preserveAspectRatio="xMidYMid meet"
                aria-hidden
              >
                <defs>
                  <linearGradient id="routeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(251,249,228,0.85)" />
                    <stop offset="100%" stopColor="rgba(91,136,178,0.65)" />
                  </linearGradient>
                </defs>
                <g
                  fill="none"
                  stroke="url(#routeGrad)"
                  strokeLinecap="round"
                  className="animated-routes"
                >
                  {regions.map((r) => {
                    const ox = (origin.x / 100) * 950;
                    const oy = (origin.y / 100) * 620;
                    const dx = (r.x / 100) * 950;
                    const dy = (r.y / 100) * 620;
                    const mx = (ox + dx) / 2;
                    const my = Math.min(oy, dy) - 40;

                    const isActive = activeRegion === r.name;
                    const isFaded = activeRegion !== null && !isActive;

                    return (
                      <path
                        key={r.name}
                        d={`M ${ox} ${oy} Q ${mx} ${my} ${dx} ${dy}`}
                        opacity={isFaded ? 0.2 : (isActive ? 1 : 0.65)}
                        strokeWidth={isActive ? 2 : 1.25}
                        style={{
                          transition: "opacity 0.4s ease, stroke-width 0.4s ease",
                        }}
                      />
                    );
                  })}
                </g>
                <circle
                  cx={(origin.x / 100) * 950}
                  cy={(origin.y / 100) * 620}
                  r={5}
                  fill="#FBF9E4"
                  opacity={0.95}
                />
                <circle
                  cx={(origin.x / 100) * 950}
                  cy={(origin.y / 100) * 620}
                  r={10}
                  fill="none"
                  stroke="rgba(91,136,178,0.45)"
                  strokeWidth={1}
                />
              </svg>
              {regions.map((r) => {
                const isActive = activeRegion === r.name;
                const isFaded = activeRegion !== null && !isActive;
                return (
                  <span
                    key={r.name}
                    className={`pin-dot ${isActive ? "active" : ""}`}
                    style={{
                      left: `${r.x}%`,
                      top: `${r.y}%`,
                      opacity: isFaded ? 0.3 : 1,
                      transform: `translate(-50%, -50%) scale(${isActive ? 1.25 : 1})`,
                      transition: "opacity 0.4s ease, transform 0.4s ease",
                      zIndex: isActive ? 10 : 3
                    }}
                  />
                );
              })}
              <span
                className="pin-dot pin-dot-origin"
                style={{ left: `${origin.x}%`, top: `${origin.y}%` }}
              />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
