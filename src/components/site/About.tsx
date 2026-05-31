import wordmark from "@/assets/agaia-wordmark.png";

export function About() {
  return (
    <section id="nosotros" className="py-24 md:py-32">
      <div className="container-prose max-w-4xl text-center">
        <span className="eyebrow">Sobre la marca</span>
        <h2 className="mt-5 font-display text-4xl md:text-6xl text-primary leading-[1.05]">
          Nacimos para crear elementos <em className="italic font-light">simples, naturales y visualmente honestos.</em>
        </h2>
        <p className="mt-8 text-foreground/70 leading-relaxed max-w-2xl mx-auto">
          Capaces de acompañar momentos de calma, presencia y bienestar. Creemos en el amor por
          la naturaleza, en el cuidado consciente y en la conexión entre cuerpo, mente, energía
          y entorno.
        </p>
        <div className="mt-14 inline-flex flex-col items-center gap-3 px-10 py-8 rounded-3xl bg-secondary/50 border border-border/60">
          <img src={wordmark} alt="Agaia" className="h-14 w-auto opacity-90" />
          <p className="text-xs uppercase tracking-[0.32em] text-primary/70">Laboratorio de bienestar</p>
        </div>
      </div>
    </section>
  );
}
