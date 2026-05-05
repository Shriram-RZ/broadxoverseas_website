import Link from "next/link";
import { Arrow } from "./Icons";
import { Ornament, ScrollReveal, MagneticHover } from "./Motion";

type Props = {
  eyebrow?: string;
  title?: React.ReactNode;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export default function CTAStrip({
  eyebrow = "Ready to source with confidence?",
  title = (
    <>
      Your reliable supply partner is{" "}
      <em>just a message away.</em>
    </>
  ),
  description = "Connect with our team to discuss your requirements, request samples, or get a competitive quotation.",
  primaryLabel = "Get Quote",
  primaryHref = "/contact",
  secondaryLabel = "Send Requirement",
  secondaryHref = "/contact",
}: Props) {
  return (
    <section>
      <div className="container">
        <ScrollReveal>
          <div className="cta-strip">
            <div className="grid">
              <div>
                <div className="eyebrow">{eyebrow}</div>
                <h2>{title}</h2>
                <Ornament />
                <p>{description}</p>
              </div>
              <div className="actions">
                <MagneticHover strength={0.15}>
                  <Link href={primaryHref} className="btn btn-primary">
                    {primaryLabel} <Arrow />
                  </Link>
                </MagneticHover>
                {secondaryLabel && (
                  <MagneticHover strength={0.15}>
                    <Link href={secondaryHref} className="btn btn-glass">
                      {secondaryLabel}
                    </Link>
                  </MagneticHover>
                )}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
