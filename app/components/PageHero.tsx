import Link from "next/link";
import { Ornament } from "./Motion";

type Crumb = { label: string; href?: string };

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  crumbs?: Crumb[];
};

export default function PageHero({ eyebrow, title, description, crumbs }: Props) {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="inner">
          {crumbs && crumbs.length > 0 && (
            <div className="crumbs">
              {crumbs.map((c, i) => (
                <span key={`${c.label}-${i}`}>
                  {c.href ? <Link href={c.href}>{c.label}</Link> : <span>{c.label}</span>}
                  {i < crumbs.length - 1 && <span className="sep"> / </span>}
                </span>
              ))}
            </div>
          )}
          {eyebrow && !crumbs && <div className="crumbs">{eyebrow}</div>}
          <h1>{title}</h1>
          <Ornament />
          {description && <p>{description}</p>}
        </div>
      </div>
    </section>
  );
}
