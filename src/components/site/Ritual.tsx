import img from "@/assets/ritual.jpg";

const steps = [
  { n: "01", t: "Respira", d: "Detén el ritmo. Una inhalación profunda inicia el ritual." },
  { n: "02", t: "Aplica", d: "Un gesto sencillo, presente, atento a la piel y al aroma." },
  { n: "03", t: "Conecta", d: "Permite que el cuerpo y los sentidos vuelvan a su centro." },
  { n: "04", t: "Siente", d: "Habita la calma que queda después del ritual." },
];

export function Ritual() {
  return (
    <section className="py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 opacity-[0.07]"
        style={{ backgroundImage: "radial-gradient(circle at 30% 20%, white 0%, transparent 50%)" }} />
      <div className="container-prose grid lg:grid-cols-12 gap-12 lg:gap-20 items-center relative">
        <div className="lg:col-span-5">
          <div className="aspect-[3/4] rounded-3xl overflow-hidden">
            <img src={img} alt="Ritual de bienestar" loading="lazy" width={1280} height={1536}
              className="h-full w-full object-cover" />
          </div>
        </div>
        <div className="lg:col-span-7">
          <span className="eyebrow text-secondary">El ritual</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight">
            Cuatro gestos para volver a ti.
          </h2>
          <p className="mt-6 text-primary-foreground/70 max-w-xl">
            Más que productos, ofrecemos un ritmo. Una secuencia simple que convierte un
            momento cotidiano en una pausa significativa.
          </p>
          <ol className="mt-12 space-y-px bg-primary-foreground/10 rounded-2xl overflow-hidden">
            {steps.map((s) => (
              <li key={s.n} className="bg-primary p-6 md:p-7 flex gap-6 md:gap-8 items-start hover:bg-primary/80 transition-colors">
                <span className="font-display text-3xl text-secondary">{s.n}</span>
                <div>
                  <h3 className="font-display text-2xl">{s.t}</h3>
                  <p className="mt-1 text-sm text-primary-foreground/70">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
