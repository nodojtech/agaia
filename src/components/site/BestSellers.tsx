import calma from "@/assets/product-calma.jpg";
import energia from "@/assets/product-energia.jpg";
import equilibrio from "@/assets/product-equilibrio.jpg";
import naturaleza from "@/assets/product-naturaleza.jpg";
import { ShoppingBag, MessageCircle } from "lucide-react";
import { waLink } from "@/lib/site-config";

const items = [
  { img: calma, name: "Vela ritual Calma", desc: "Cera vegetal con lavanda y vetiver.", price: "$78.000", tag: "Más vendido" },
  { img: energia, name: "Bruma Energía Cítrica", desc: "Mandarina, jengibre y romero.", price: "$62.000", tag: "Favorito" },
  { img: equilibrio, name: "Sal mineral Equilibrio", desc: "Sal marina con eucalipto y cedro.", price: "$54.000", tag: "Nuevo" },
  { img: naturaleza, name: "Sahumerio Bosque", desc: "Palo santo, musgo y resinas.", price: "$48.000", tag: "Ritual recomendado" },
  { img: calma, name: "Aceite corporal Calma", desc: "Hidrata y suaviza con manzanilla.", price: "$96.000", tag: "Más vendido" },
  { img: equilibrio, name: "Roll-on Equilibrio", desc: "Aroma portátil para el día a día.", price: "$38.000", tag: "Favorito" },
];

export function BestSellers() {
  return (
    <section id="mas-vendidos" className="py-20 md:py-28">
      <div className="container-prose">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <span className="eyebrow">Los más elegidos</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-primary leading-tight">
              Productos más vendidos
            </h2>
          </div>
          <p className="text-sm text-foreground/60 max-w-sm">
            Una selección de favoritos para empezar tu ritual Agaia.
          </p>
        </div>

        {/* Mobile: horizontal scroll · Desktop: grid */}
        <div className="-mx-6 md:mx-0">
          <div className="flex md:grid md:grid-cols-3 lg:grid-cols-3 gap-5 md:gap-7 overflow-x-auto md:overflow-visible snap-x snap-mandatory px-6 md:px-0 pb-4 md:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {items.map((p) => (
              <article key={p.name}
                className="snap-start shrink-0 w-[78%] sm:w-[55%] md:w-auto group rounded-3xl bg-card border border-border/60 overflow-hidden shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-glow)] hover:-translate-y-1 transition-all">
                <div className="relative aspect-[4/5] overflow-hidden bg-secondary/40">
                  <img src={p.img} alt={p.name} loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-background/90 backdrop-blur text-[0.62rem] uppercase tracking-[0.2em] text-primary">
                    {p.tag}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl text-primary leading-tight">{p.name}</h3>
                  <p className="mt-1.5 text-xs text-foreground/65 leading-relaxed">{p.desc}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-display text-lg text-primary">{p.price}</span>
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <button className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-full bg-primary text-primary-foreground text-[0.7rem] uppercase tracking-[0.18em] hover:bg-primary/90 transition-colors">
                      <ShoppingBag size={13} /> Ver producto
                    </button>
                    <a href={waLink(`Hola, quiero consultar por ${p.name}.`)} target="_blank" rel="noopener noreferrer"
                      aria-label="Consultar por WhatsApp"
                      className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-primary/30 text-primary hover:bg-primary/5 transition-colors">
                      <MessageCircle size={14} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
