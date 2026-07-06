import { createFileRoute } from "@tanstack/react-router";
import { waLink } from "@/lib/site-config";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/regalos")({
  head: () => ({
    meta: [
      { title: "Bienestar Corporativo — Agaia" },
      { name: "description", content: "Regalos que dejan huella y experiencias corporativas de bienestar: meditación, aromaterapia, pausas activas y rituales para equipos." },
      { property: "og:title", content: "Bienestar Corporativo — Agaia" },
      { property: "og:description", content: "Regalos con intención y experiencias de bienestar para empresas." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: RegalosPage,
});

const experiencias = [
  "Meditación guiada.",
  "Experiencias de aromaterapia.",
  "Creación de esencias o mezcla aromática personalizada.",
  "Pausas activas y momentos de bienestar.",
  "Rituales de bienestar para equipos.",
];

function RegalosPage() {
  return (
    <div className="pt-32 md:pt-40 pb-20">
      {/* Hero */}
      <section className="container-prose text-center pb-16">
        <Reveal>
          <span className="eyebrow">Bienestar Corporativo</span>
          <h1 className="mt-3 font-display text-4xl md:text-6xl text-primary leading-tight">
            Regalos que dejan huella
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-foreground/70">
            Cada empresa tiene una historia, un propósito y una forma única de agradecer.
          </p>
        </Reveal>
      </section>

      {/* 1. Regalos que dejan huella — texto tal cual */}
      <section className="py-14 bg-secondary/40">
        <div className="container-prose max-w-3xl">
          <Reveal>
            <p className="text-foreground/80 leading-relaxed">
              En AGAIA diseñamos experiencias de bienestar personalizadas para colaboradores,
              clientes, aliados y eventos especiales. Creamos cada detalle de acuerdo con las
              necesidades, el presupuesto y la identidad de cada empresa, convirtiendo cada
              regalo en una experiencia memorable.
            </p>
            <div className="mt-8 p-6 md:p-8 rounded-3xl bg-card border border-border/60 text-center">
              <p className="font-display text-2xl text-primary">¿Hablamos?</p>
              <a
                href={waLink("Hola, quiero cotizar detalles de bienestar con AGAIA.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground text-xs uppercase tracking-[0.22em] hover:bg-primary/90 transition-colors"
              >
                ➔ Quiero cotizar detalles de bienestar con AGAIA
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. Experiencias corporativas — texto tal cual */}
      <section className="py-20 md:py-24">
        <div className="container-prose grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-6">
            <span className="eyebrow">Experiencias corporativas de Bienestar</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-primary leading-tight">
              Porque el bienestar<br />
              <em className="font-light italic">también se vive.</em>
            </h2>
            <p className="mt-5 text-foreground/75 leading-relaxed">
              Además de nuestros regalos corporativos, diseñamos experiencias para empresas que
              buscan ofrecer momentos significativos a sus equipos.
            </p>
            <p className="mt-4 text-foreground/75 leading-relaxed">
              Podemos crear jornadas enfocadas en el bienestar, combinando actividades como:
            </p>
            <p className="mt-6 italic text-foreground/70">
              Cada experiencia se adapta a las necesidades y objetivos de tu empresa.
            </p>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-6">
            <ul className="grid sm:grid-cols-1 gap-3">
              {experiencias.map((e, i) => (
                <li
                  key={e}
                  className="p-5 rounded-2xl bg-card border border-border/60 flex gap-4 items-start"
                >
                  <span className="font-display text-primary text-lg leading-none">0{i + 1}</span>
                  <p className="text-sm text-foreground/80">{e}</p>
                </li>
              ))}
            </ul>
            <div className="mt-8 p-6 rounded-3xl bg-primary text-primary-foreground text-center">
              <p className="font-display text-xl">¿Hablamos?</p>
              <a
                href={waLink("Hola, quiero crear una experiencia de bienestar con AGAIA.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center px-6 py-3 rounded-full bg-secondary text-primary text-xs uppercase tracking-[0.22em] hover:bg-secondary/90 transition-colors"
              >
                ➔ Quiero crear una experiencia de bienestar con AGAIA
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
