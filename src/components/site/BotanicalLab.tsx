const plants = [
  { name: "Lavanda",     aroma: "Floral suave",       use: "Tradicionalmente asociada con la calma y el descanso.", product: "Vela ritual Calma" },
  { name: "Manzanilla",  aroma: "Herbal dulce",       use: "Inspirada en momentos de pausa y reconexión.",           product: "Aceite corporal Calma" },
  { name: "Romero",      aroma: "Verde, vibrante",    use: "Ayuda a crear una sensación de frescura y claridad.",    product: "Bruma Energía Cítrica" },
  { name: "Cedro",       aroma: "Amaderado cálido",   use: "Ideal para acompañar momentos de enraizamiento.",         product: "Sal mineral Equilibrio" },
  { name: "Palo santo",  aroma: "Resinoso, dulce",    use: "Pensado para rituales de limpieza y presencia.",          product: "Sahumerio Bosque" },
  { name: "Eucalipto",   aroma: "Fresco, mineral",    use: "Ayuda a crear una sensación de respiración amplia.",      product: "Sal mineral Equilibrio" },
  { name: "Vetiver",     aroma: "Terroso profundo",   use: "Inspirado en la quietud y el descanso.",                  product: "Aceite esencial Calma" },
  { name: "Musgo",       aroma: "Húmedo, boscoso",    use: "Conecta con la sensación del bosque.",                    product: "Bruma de naturaleza" },
];

export function BotanicalLab() {
  return (
    <section id="laboratorio" className="py-20 md:py-28 bg-gradient-to-b from-background to-secondary/30">
      <div className="container-prose">
        <div className="max-w-2xl mb-12">
          <span className="eyebrow">Laboratorio botánico</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-primary leading-tight">
            El poder de las plantas
          </h2>
          <p className="mt-4 text-foreground/65 text-sm md:text-base">
            Cada producto Agaia nace de elementos botánicos elegidos por su aroma, su historia
            y la sensación que invitan a habitar.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {plants.map((p) => (
            <article key={p.name} className="group p-6 rounded-3xl bg-card border border-border/60 hover:border-primary/40 hover:shadow-[var(--shadow-soft)] transition-all">
              <div className="h-12 w-12 rounded-full bg-secondary/60 inline-flex items-center justify-center">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.3" className="text-primary" aria-hidden>
                  <path d="M12 22c0-6 4-10 9-11-1 5-5 9-9 11Z M12 22c0-6-4-10-9-11 1 5 5 9 9 11Z M12 22V8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="mt-5 font-display text-2xl text-primary">{p.name}</h3>
              <p className="mt-1 text-[0.7rem] uppercase tracking-[0.2em] text-foreground/50">{p.aroma}</p>
              <p className="mt-3 text-xs text-foreground/70 leading-relaxed">{p.use}</p>
              <p className="mt-4 pt-4 border-t border-border/60 text-[0.7rem] italic text-primary/70">
                En: {p.product}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
