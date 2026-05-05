"use client";

import { useState } from "react";
import { ChevronDown } from "../components/Icons";

export default function ReadMore({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`expandable${open ? " open" : ""}`}>
      <div className="text-clamp">{children}</div>
      <button
        type="button"
        className="toggle"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        {open ? "Show less" : "Read more"} <ChevronDown size={14} />
      </button>
    </div>
  );
}
