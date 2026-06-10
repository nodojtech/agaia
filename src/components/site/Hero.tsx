import hero from "@/assets/hero-wellness.jpg";
import isotipo from "@/assets/agaia-isotipo.png";

export function Hero() {
  return (
    <section id="inicio" className="relative pt-36 md:pt-44 pb-20 md:pb-28 overflow-hidden">
      {/* soft gradient backdrop */}
      <div aria-hidden className="absolute inset-0 -z-10"
        style={{ background: "radial-gradient(60% 50% at 80% 20%, var(--mist) 0%, transparent 70%), radial-gradient(50% 40% at 10% 90%, var(--mist) 0%, transparent 70%)" }} />
      <div className="container-prose grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 animate-rise">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-primary/40" />
            <span className="eyebrow">Laboratorio de bienestar</span>
          </div>
          <h1 className="font-display text-[2.6rem] sm:text-6xl lg:text-7xl leading-[1.02] text-primary">
            Bienestar natural<br/>
            para reconectar<br/>
            <em className="font-light italic text-primary/80">con tu esencia.</em>
          </h1>
          <p className="mt-7 max-w-xl text-base md:text-lg text-foreground/70 leading-relaxed">
            Creamos elementos inspirados en la naturaleza, los ingredientes limpios y las
            sensaciones que acompañan una vida más consciente.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#productos"
              className="inline-flex items-center px-7 py-3.5 rounded-full bg-primary text-primary-foreground text-sm tracking-wider hover:bg-primary/90 transition-all hover:translate-y-[-1px]">
              Explorar productos
            </a>
            <a href="#nosotros"
              className="inline-flex items-center px-7 py-3.5 rounded-full border border-primary/30 text-primary text-sm tracking-wider hover:bg-primary/5 transition-colors">
              Conocer la marca
            </a>
          </div>
          <div className="mt-12 flex items-center gap-8 text-xs uppercase tracking-[0.22em] text-foreground/50">
            <span>Ingredientes limpios</span>
            <span className="h-px w-6 bg-foreground/20" />
            <span>Hecho con calma</span>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[var(--shadow-glow)]">
            <img src={hero} alt="Composición de bienestar natural" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
          </div>
          {/* floating brand mark */}
          <div className="absolute -top-6 -left-6 md:-left-12 w-28 h-28 md:w-36 md:h-36 rounded-full bg-primary flex items-center justify-center shadow-[var(--shadow-glow)] animate-float">
            <img src={isotipo} alt="" className="w-3/5 h-3/5 object-contain" />
          </div>
          <div className="absolute -bottom-5 right-6 px-5 py-4 rounded-2xl bg-background/95 backdrop-blur border border-border shadow-[var(--shadow-soft)] max-w-[220px]">
            <p className="text-xs uppercase tracking-[0.22em] text-primary">Calma · Energía · Equilibrio</p>
            <p className="mt-2 text-sm text-foreground/70 italic">Rituales pensados para acompañar tu día.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
