import img from "@/assets/ingredients.jpg";

const list = [
  { k: "Aceites esenciales", v: "Extracción en frío" },
  { k: "Botánicos", v: "Origen consciente" },
  { k: "Minerales", v: "Sal marina, arcilla" },
  { k: "Maderas y resinas", v: "Cedro, palo santo" },
];

export function Ingredients() {
  return (
    <section id="ingredientes" className="py-24 md:py-32 bg-gradient-to-b from-background to-secondary/40">
      <div className="container-prose grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 order-2 lg:order-1">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-[var(--shadow-soft)]">
            <img src={img} alt="Ingredientes naturales" loading="lazy" width={1280} height={1536}
              className="h-full w-full object-cover" />
          </div>
        </div>
        <div className="lg:col-span-7 order-1 lg:order-2">
          <span className="eyebrow">Ingredientes</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-primary leading-tight">
            De la tierra, al ritual.
          </h2>
          <p className="mt-6 text-foreground/70 leading-relaxed max-w-xl">
            Cada elemento nace de una selección consciente de ingredientes naturales, pensados
            para acompañar rituales de bienestar, autocuidado y conexión con lo esencial.
          </p>
          <dl className="mt-10 grid sm:grid-cols-2 gap-px bg-border/60 rounded-2xl overflow-hidden border border-border/60">
            {list.map(({ k, v }) => (
              <div key={k} className="bg-background p-6">
                <dt className="text-xs uppercase tracking-[0.22em] text-primary">{k}</dt>
                <dd className="mt-1 text-sm text-foreground/60 italic">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
