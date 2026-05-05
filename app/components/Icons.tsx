import type { SVGProps } from "react";

type BaseSvgProps = Omit<SVGProps<SVGSVGElement>, "stroke">;
type IconProps = BaseSvgProps & { size?: number; stroke?: number };

const make = (path: string, defaultSize = 20, defaultStroke = 1.8) =>
  function Icon({ size = defaultSize, stroke = defaultStroke, ...rest }: IconProps) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        {...rest}
      >
        <path d={path} />
      </svg>
    );
  };

export const Arrow = make("M5 12h14M13 5l7 7-7 7", 16);
export const ArrowLeft = make("M19 12H5M11 5l-7 7 7 7", 16);
export const Check = make("M5 12l5 5L20 7", 12, 2.5);
export const Shield = make("M12 2L4 7v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V7l-8-5z", 22);
export const Users = make(
  "M17 20h5v-2a3 3 0 00-5.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  22
);
export const Truck = make(
  "M3 7h11v10H3zM14 10h4l3 3v4h-7zM7 20a2 2 0 100-4 2 2 0 000 4zm11 0a2 2 0 100-4 2 2 0 000 4z",
  22
);
export const Globe = make(
  "M12 2a10 10 0 100 20 10 10 0 000-20zM2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20",
  22
);
export const Calendar = make(
  "M8 2v4M16 2v4M3 10h18M5 6h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z",
  18
);
export const Pin = make(
  "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0zM12 13a3 3 0 100-6 3 3 0 000 6z",
  18
);
export const Phone = make(
  "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.13.92.37 1.82.72 2.68a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.4-1.3a2 2 0 012.11-.45c.86.35 1.76.59 2.68.72a2 2 0 011.72 2.04z",
  18
);
export const Mail = make(
  "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm18 2l-10 7L2 6",
  18
);
export const Clock = make("M12 22a10 10 0 100-20 10 10 0 000 20zM12 6v6l4 2", 18);
export const Leaf = make("M6 21c0-9 5-14 15-14-1 11-6 14-15 14zM6 21l8-8", 20);
export const Award = make(
  "M12 15a6 6 0 100-12 6 6 0 000 12zM8.21 13.89L7 22l5-3 5 3-1.21-8.12",
  22
);
export const Sparkles = make(
  "M12 3l2.09 4.26L18 8l-3.91 2.26L12 14l-2.09-3.74L6 8l3.91-.74L12 3zM19 15l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2zM5 17l.7 1.4L7 19l-1.3.6L5 21l-.7-1.4L3 19l1.3-.6L5 17z",
  22
);
export const Box = make(
  "M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16zM3.27 6.96L12 12.01l8.73-5.05M12 22.08V12",
  22
);
export const FileCheck = make(
  "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zM14 2v6h6M9 15l2 2 4-4",
  22
);
export const Menu = make("M3 12h18M3 6h18M3 18h18", 22, 2);
export const Close = make("M18 6L6 18M6 6l12 12", 22, 2);
export const MapIcon = make(
  "M1 6l7-3 8 3 7-3v15l-7 3-8-3-7 3V6zM8 3v15M16 6v15",
  22
);
export const Anchor = make(
  "M12 22V8M12 8a3 3 0 100-6 3 3 0 000 6zM5 12H2a10 10 0 0020 0h-3M8 12h8",
  22
);
export const Ship = make(
  "M2 20a4 4 0 003-1 4 4 0 003 1 4 4 0 003-1 4 4 0 003 1 4 4 0 003-1 4 4 0 003 1M4 18l-2-6h20l-2 6M6 12V6h12v6M9 6V3h6v3",
  22
);
export const Container = make(
  "M3 6h18v12H3zM7 6v12M11 6v12M15 6v12M19 6v12",
  22
);
export const ChevronDown = make("M6 9l6 6 6-6", 16, 2.2);
export const Plus = make("M12 5v14M5 12h14", 16, 2.2);
