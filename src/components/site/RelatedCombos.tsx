import calma from "@/assets/product-calma.jpg";
import energia from "@/assets/product-energia.jpg";
import equilibrio from "@/assets/product-equilibrio.jpg";
import naturaleza from "@/assets/product-naturaleza.jpg";
import { Plus } from "lucide-react";
import { waLink } from "@/lib/site-config";

const combos = [
  { name: "Ritual de descanso", desc: "Vela + spray de almohada + infusión nocturna.", price: "$168.000", items: [calma, calma, naturaleza] },
  { name: "Ritual de calma", desc: "Roll-on + bruma botánica + sahumerio suave.", price: "$132.000", items: [calma, equilibrio, naturaleza] },
  { name: "Ritual de naturaleza", desc: "Palo santo + aceite de cedro + bruma de musgo.", price: "$148.000", items: [naturaleza, naturaleza, equilibrio] },
  { name: "Ritual para regalar", desc: "Caja con tres aromas + tarjeta personalizada.", price: "$195.000", items: [energia, calma, naturaleza] },
];

export function RelatedCombos() {
  return (
    <section id="combos" className="py-20 md:py-28">
      <div className="container-prose">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <span className="eyebrow">Combos y rituales</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-primary leading-tight">
              Completa tu ritual
            </h2>
            <p className="mt-3 text-sm text-foreground/60 max-w-md">
              Las personas suelen combinarlo con estos productos para crear una experiencia completa.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-7">
          {combos.map((c) => (
            <article key={c.name} className="rounded-3xl bg-gradient-to-b from-secondary/40 to-card border border-border/60 p-5 hover:shadow-[var(--shadow-glow)] hover:-translate-y-1 transition-all flex flex-col h-full">
              <div className="flex items-center gap-2">
                {c.items.map((img, i) => (
                  <div key={i} className="relative">
                    <div className="h-16 w-16 rounded-2xl overflow-hidden border border-background shadow-[var(--shadow-soft)]">
                      <img src={img} alt="" className="h-full w-full object-cover" />
                    </div>
                    {i < c.items.length - 1 && <Plus size={14} className="text-primary/50 -mx-1 inline-block" />}
                  </div>
                ))}
              </div>
              <h3 className="mt-5 font-display text-xl text-primary">{c.name}</h3>
              <p className="mt-1.5 text-xs text-foreground/65 leading-relaxed">{c.desc}</p>
              <div className="mt-auto pt-4 flex items-center justify-between">
                <span className="font-display text-lg text-primary">{c.price}</span>
                <a href={waLink(`Hola, me interesa el ${c.name}.`)} target="_blank" rel="noopener noreferrer"
                  className="text-[0.7rem] uppercase tracking-[0.2em] text-primary border-b border-primary/30 pb-0.5 hover:border-primary transition-colors">
                  Consultar
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
