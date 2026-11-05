import type { ReactNode } from "react";

export function PageBanner({ eyebrow, title, children, image, imageAlt, imagePosition = "center", tall = false }: { eyebrow: string; title: ReactNode; children?: ReactNode; image: string; imageAlt: string; imagePosition?: string; tall?: boolean }) {
  return <section className={`page-banner relative isolate overflow-hidden bg-primary text-primary-foreground ${tall ? "pt-36 pb-14 md:pt-40 md:pb-24" : "pt-40 pb-14 md:pt-44 md:pb-20"}`}>
    <img src={image} alt={imageAlt} fetchPriority="high" style={{ objectPosition: imagePosition }} className={`banner-image absolute inset-x-0 bottom-0 -z-20 w-full object-cover ${tall ? "top-24 md:top-28 h-[calc(100%-6rem)] md:h-[calc(100%-7rem)]" : "top-0 h-full"}`} />
    <div aria-hidden="true" className="banner-scrim absolute inset-0 -z-10" />
    <div className="container-prose"><div className="max-w-2xl animate-rise">
      <span className="eyebrow text-secondary">{eyebrow}</span>
      <h1 className="mt-4 font-display text-4xl md:text-6xl leading-tight">{title}</h1>
      {children && <div className="mt-5 max-w-xl text-primary-foreground/90 leading-relaxed">{children}</div>}
    </div></div>
  </section>;
}