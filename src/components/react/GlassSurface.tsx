import type { CSSProperties, ReactNode } from "react";

type GlassSurfaceProps = {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
};

export default function GlassSurface({ children, className = "", contentClassName = "" }: GlassSurfaceProps) {
  const filterId = "glass-filter-nav";

  return (
    <div
      className={`glass-surface glass-surface--fallback ${className}`}
      style={{ "--filter-id": `url(#${filterId})` } as CSSProperties}
    >
      <svg className="glass-surface__filter" aria-hidden="true" focusable="false">
        <filter id={filterId} colorInterpolationFilters="sRGB">
          <feTurbulence type="fractalNoise" baseFrequency="0.012 0.018" numOctaves="2" seed="8" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="16" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>
      <div className={`glass-surface__content ${contentClassName}`}>{children}</div>
    </div>
  );
}
