import type { ReactNode } from "react";

const MATT_BOX = { tall: "top-24 md:top-28 h-[calc(100%-6rem)] md:h-[calc(100%-7rem)]", short: "top-0 h-full" };
const PHOTO_BOX = {
  tall: "top-[calc(6rem+4px)] md:top-[calc(7rem+6px)] h-[calc(100%-6rem-8px)] md:h-[calc(100%-7rem-10px)]",
  short: "top-0 h-[calc(100%-4px)] md:h-[calc(100%-6px)]",
};

export function PageBanner({ eyebrow, title, children, image, imageAlt, imagePosition = "center", tall = false }: { eyebrow: string; title: ReactNode; children?: ReactNode; image: string; imageAlt: string; imagePosition?: string; tall?: boolean }) {
  return <section className={`page-banner relative isolate overflow-hidden bg-primary text-primary-foreground ${tall ? "pt-36 pb-24 md:pt-40 md:pb-56" : "pt-40 pb-14 md:pt-44 md:pb-20"}`}>
    <img src={image} alt="" aria-hidden="true" style={{ objectPosition: imagePosition }} className={`banner-image absolute inset-x-0 bottom-0 -z-30 w-full object-cover ${tall ? MATT_BOX.tall : MATT_BOX.short}`} />
    <img src={image} alt={imageAlt} fetchPriority="high" style={{ objectPosition: imagePosition }} className={`banner-image absolute bottom-[4px] left-[5px] right-[5px] md:bottom-[6px] md:left-[8px] md:right-[8px] -z-20 w-[calc(100%-10px)] md:w-[calc(100%-16px)] object-cover ${tall ? PHOTO_BOX.tall : PHOTO_BOX.short}`} />
    <div aria-hidden="true" className="banner-scrim absolute inset-0 -z-10" />
    <div className="container-prose"><div className="max-w-2xl animate-rise">
      <span className="eyebrow text-secondary">{eyebrow}</span>
      <h1 className="mt-4 font-display text-4xl md:text-6xl leading-tight">{title}</h1>
      {children && <div className="mt-5 max-w-xl text-primary-foreground/90 leading-relaxed">{children}</div>}
    </div></div>
  </section>;
}
