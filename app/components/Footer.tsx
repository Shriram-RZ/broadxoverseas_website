import Link from "next/link";
import { Mail } from "./Icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link href="/" className="logo">
              <span className="logo-mark">B</span>Broad X <em>Overseas</em>
            </Link>
            <p className="tagline">
              Exporting India&apos;s agricultural excellence to the world with
              precision and trust.
            </p>
            <div className="socials">
              <a href="#" aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zM8 8h4.37v1.91h.06c.61-1.15 2.1-2.37 4.32-2.37 4.62 0 5.47 3.04 5.47 7V22h-4.55v-6.2c0-1.48-.03-3.38-2.06-3.38-2.06 0-2.38 1.6-2.38 3.27V22H8V8z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
              </a>
              <a href="#" aria-label="WhatsApp">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.5 14.4c-.3-.1-1.7-.9-2-1s-.5-.1-.7.2-.8 1-1 1.2-.4.2-.7.1c-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5 0-.2 0-.4-.1-.5s-.7-1.7-.9-2.3c-.2-.6-.5-.5-.7-.5H7.6c-.2 0-.5.1-.8.4s-1 1-1 2.4.1 2.9 1.8 4.7c1.7 1.8 3.8 2.9 5.3 3.2 1.5.3 2.3.2 3.2-.1 1-.4 1.7-1.1 1.9-1.5.2-.4.2-.8.1-.9-.1-.2-.3-.3-.6-.5zM12 2a10 10 0 00-8.7 15l-1.3 4.8 4.9-1.3A10 10 0 1012 2zm0 18.3a8.3 8.3 0 01-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.3 8.3 0 1112 20.3z" />
                </svg>
              </a>
              <a href="mailto:info@broadxoverseas.com" aria-label="Email">
                <Mail size={16} />
              </a>
            </div>
          </div>
          <div>
            <h4>Quick Links</h4>
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/products">Products</Link>
            <Link href="/quality">Quality</Link>
            <Link href="/gallery">Gallery</Link>
          </div>
          <div>
            <h4>Products</h4>
            <Link href="/products#turmeric">Turmeric</Link>
            <Link href="/products#jaggery">Jaggery</Link>
            <Link href="/products#lemon">Lemon &amp; Coconut</Link>
            <Link href="/products#leaves">Banana &amp; Curry Leaves</Link>
            <Link href="/products#groundnut">Groundnut</Link>
          </div>
          <div>
            <h4>Contact</h4>
            <a href="tel:+919791177883">+91 97911 77883</a>
            <a href="mailto:info@broadxoverseas.com">info@broadxoverseas.com</a>
            <Link href="/contact">Coimbatore, IN</Link>
          </div>
        </div>
        <div className="copyright">
          <div>© {new Date().getFullYear()} Broad X Overseas. All rights reserved.</div>
          <div>Exporting with trust · FSSAI · APEDA · IEC</div>
        </div>
      </div>
    </footer>
  );
}
