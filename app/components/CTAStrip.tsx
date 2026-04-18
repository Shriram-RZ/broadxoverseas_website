import Link from "next/link";
import { Arrow } from "./Icons";

type Props = {
  eyebrow?: string;
  title?: React.ReactNode;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  background?: "wash" | "white";
};

export default function CTAStrip({
  eyebrow = "Ready to Source with Confidence?",
  title = (
    <>
      Your reliable supply partner <em>is just a message away.</em>
    </>
  ),
  description = "Connect with our team to discuss your requirements, request samples, or get a competitive quotation.",
  primaryLabel = "Send Enquiry",
  primaryHref = "/contact",
  secondaryLabel = "Download Brochure",
  secondaryHref = "#",
  background = "wash",
}: Props) {
  return (
    <section className={background === "white" ? "bg-white" : "bg-wash"} style={{ padding: "0 0 80px" }}>
      <div className="container">
        <div className="cta-strip">
          <div className="grid">
            <div>
              <div className="eyebrow">{eyebrow}</div>
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
            <div className="actions">
              <Link href={primaryHref} className="btn btn-accent">
                {primaryLabel} <Arrow />
              </Link>
              {secondaryLabel && (
                <Link href={secondaryHref} className="btn btn-ghost-dark">
                  {secondaryLabel}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
