import Link from "next/link";
import { Mail } from "./Icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer footer-slim on-dark">
      <div className="footer-glow" aria-hidden />

      <div className="container">
        <div className="footer-cols footer-cols-4">
          <div className="footer-col footer-col-brand">
            <Link href="/" className="logo" aria-label="Broad X Overseas — Home">
              <span className="logo-mark">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/brand/icon.svg" alt="" aria-hidden />
              </span>
              <span className="logo-text">
                Broad <span className="accent">X</span> Overseas
              </span>
            </Link>
            <p className="tagline">
              Premium agricultural exports from South India. Trusted, certified, fair.
            </p>
            <div className="ft-certs">
              <span className="cert-chip">FSSAI</span>
              <span className="cert-chip">APEDA</span>
              <span className="cert-chip">IEC</span>
            </div>
          </div>

          <div className="footer-col">
            <h4>Navigate</h4>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/why-choose-us">Why Us</Link>
            <Link href="/products">Products</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <a href="tel:+919791177883" className="ft-contact">
              <span className="val">+91 97911 77883</span>
            </a>
            <a href="mailto:info@broadxoverseas.com" className="ft-contact">
              <span className="val">info@broadxoverseas.com</span>
            </a>
            <div className="ft-contact ft-contact-static">
              <span className="val">Coimbatore, IN — 641047</span>
            </div>
          </div>

          <div className="footer-col">
            <h4>Follow</h4>
            <div className="socials">
              <a href="#" aria-label="LinkedIn" className="social">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zM8 8h4.37v1.91h.06c.61-1.15 2.1-2.37 4.32-2.37 4.62 0 5.47 3.04 5.47 7V22h-4.55v-6.2c0-1.48-.03-3.38-2.06-3.38-2.06 0-2.38 1.6-2.38 3.27V22H8V8z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="social">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
              </a>
              <a href="#" aria-label="WhatsApp" className="social">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M17.5 14.4c-.3-.1-1.7-.9-2-1s-.5-.1-.7.2-.8 1-1 1.2-.4.2-.7.1c-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5 0-.2 0-.4-.1-.5s-.7-1.7-.9-2.3c-.2-.6-.5-.5-.7-.5H7.6c-.2 0-.5.1-.8.4s-1 1-1 2.4.1 2.9 1.8 4.7c1.7 1.8 3.8 2.9 5.3 3.2 1.5.3 2.3.2 3.2-.1 1-.4 1.7-1.1 1.9-1.5.2-.4.2-.8.1-.9-.1-.2-.3-.3-.6-.5zM12 2a10 10 0 00-8.7 15l-1.3 4.8 4.9-1.3A10 10 0 1012 2z" />
                </svg>
              </a>
              <a href="mailto:info@broadxoverseas.com" aria-label="Email" className="social">
                <Mail size={14} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-divider" aria-hidden />

        <div className="footer-bottom">
          <div className="copy">© {year} Broad X Overseas. All rights reserved.</div>
          <div className="legal-links">
            <Link href="/contact">Privacy</Link>
            <span className="sep" aria-hidden>·</span>
            <Link href="/contact">Terms</Link>
            <span className="sep" aria-hidden>·</span>
            <Link href="/contact">Compliance</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
