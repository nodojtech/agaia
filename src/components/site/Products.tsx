import calma from "@/assets/product-calma.jpg";
import energia from "@/assets/product-energia.jpg";
import equilibrio from "@/assets/product-equilibrio.jpg";
import naturaleza from "@/assets/product-naturaleza.jpg";
import { ArrowUpRight } from "lucide-react";

const products = [
  { img: calma, line: "Línea Calma", desc: "Aromas suaves para acompañar el descanso y la pausa.",
    ingredients: "Lavanda · Manzanilla · Vetiver", feel: "Calma · Descanso" },
  { img: energia, line: "Línea Energía", desc: "Una mezcla luminosa para activar los sentidos.",
    ingredients: "Cítricos · Jengibre · Romero", feel: "Frescura · Vitalidad" },
  { img: equilibrio, line: "Línea Equilibrio", desc: "Una composición mineral que armoniza el día.",
    ingredients: "Sal marina · Eucalipto · Cedro", feel: "Claridad · Equilibrio" },
  { img: naturaleza, line: "Línea Naturaleza", desc: "El bosque como ritual: tierra, madera y resina.",
    ingredients: "Palo santo · Musgo · Arcilla", feel: "Conexión · Origen" },
];

export function Products() {
  return (
    <section id="productos" className="py-24 md:py-32">
      <div className="container-prose">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <span className="eyebrow">Colecciones</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-primary leading-tight">
              Cuatro líneas, una misma intención.
            </h2>
          </div>
          <p className="text-sm text-foreground/60 max-w-sm">
            Cada línea está pensada como un ritual: un gesto sencillo para cuidar el cuerpo,
            la energía y la calma.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((p) => (
            <article key={p.line}
              className="group rounded-3xl bg-card border border-border/60 overflow-hidden shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-glow)] transition-all duration-500 hover:-translate-y-1">
              <div className="aspect-[4/5] overflow-hidden bg-secondary/40">
                <img src={p.img} alt={p.line} loading="lazy" width={1024} height={1280}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <p className="eyebrow">{p.feel}</p>
                <h3 className="mt-3 font-display text-2xl text-primary">{p.line}</h3>
                <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{p.desc}</p>
                <p className="mt-4 text-xs italic text-foreground/55">{p.ingredients}</p>
                <a href="#contacto"
                  className="mt-6 inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.22em] text-primary border-b border-primary/30 pb-1 hover:border-primary transition-colors">
                  Consultar <ArrowUpRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
