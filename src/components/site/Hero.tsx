import hero from "@/assets/hero-wellness.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

export function Hero() {
  return (
    <section id="inicio" className="relative isolate pt-40 md:pt-44 pb-14 md:pb-20 overflow-hidden bg-secondary text-primary">
      <img src={hero} alt="Composición botánica Agaia con productos y plantas" fetchPriority="high" className="banner-image absolute inset-0 -z-20 h-full w-full object-cover" />
      <div aria-hidden className="banner-scrim absolute inset-0 -z-10" />
      <div className="container-prose">
        <div className="max-w-2xl animate-rise">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-secondary/60" />
            <span className="eyebrow text-secondary">Laboratorio botánico</span>
          </div>
          <h1 className="font-display text-[2.6rem] sm:text-6xl lg:text-7xl leading-[1.02] text-primary">
            Bienestar<br/>
            inspirado en<br/>
            <em className="font-light italic text-primary-foreground/90">las plantas.</em>
          </h1>
          <p className="mt-7 max-w-xl text-base md:text-lg text-primary-foreground/90 leading-relaxed">
            Aguas de linos, jabones, aceites esenciales, sales, plantas y Manta Origen:
            experiencias sensoriales creadas para acompañar tus rituales cotidianos.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild className="h-auto rounded-full bg-secondary text-primary hover:bg-secondary/90"><Link to="/tu-ritual"
              className="inline-flex items-center px-7 py-3.5 rounded-full bg-secondary text-primary text-sm tracking-wider hover:bg-primary/90 transition-all hover:translate-y-[-1px]">
              Descubre tu ritual
            </Link>
            <Button asChild variant="outline" className="h-auto rounded-full border-primary-foreground/50 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"><Link to="/productos"
              className="inline-flex items-center px-7 py-3.5 rounded-full border border-primary-foreground/50 text-primary-foreground text-sm tracking-wider hover:bg-primary/5 transition-colors">
              Ver productos
            </Link>
          </div>
          <div className="mt-12 flex items-center gap-8 text-xs uppercase tracking-[0.22em] text-primary-foreground/80">
            <span>Ingredientes botánicos</span>
            <span className="h-px w-6 bg-primary-foreground/40" />
            <span>Hecho con calma</span>
          </div>
        </div>

      </div>
    </section>
  );
}
