import { PageBanner } from "@/components/site/PageBanner";
import bannerPhoto from "@/assets/kit-tres-pausas-fondo.png.asset.json";
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
      { name: "twitter:card", content: "summary" },
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
    <div className="pb-20">
      {/* Hero */}
      <PageBanner eyebrow="Bienestar Corporativo" title={<>Regalos que dejan huella</>} image={bannerPhoto.url} imageAlt="Fotografía oficial de productos AGAIA"><p>Cada empresa tiene una historia, un propósito y una forma única de agradecer.</p></PageBanner>

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
        <div className="container-prose">
          <Reveal className="max-w-2xl mx-auto text-center">
            <span className="eyebrow">Experiencias corporativas de Bienestar</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-primary leading-tight">
              Porque el bienestar<br />
              <em className="font-light italic">también se vive.</em>
            </h2>
            <p className="mt-5 text-foreground/75 leading-relaxed">
              Además de nuestros regalos corporativos, diseñamos experiencias para empresas que
              buscan ofrecer momentos significativos a sus equipos, combinando actividades como:
            </p>
          </Reveal>

          <ul className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
            {experiencias.map((e, i) => (
              <Reveal as="li" key={e} delay={i * 70} className="h-full">
                <div className="h-full min-h-[150px] p-6 rounded-3xl bg-card border border-border/60 flex flex-col">
                  <span className="font-display text-2xl text-primary/60 leading-none">
                    0{i + 1}
                  </span>
                  <p className="mt-3 text-sm text-foreground/80 leading-relaxed">{e}</p>
                </div>
              </Reveal>
            ))}
          </ul>

          <Reveal className="mt-12">
            <div className="p-8 md:p-10 rounded-3xl bg-primary text-primary-foreground text-center max-w-3xl mx-auto">
              <p className="italic text-primary-foreground/85">
                Cada experiencia se adapta a las necesidades y objetivos de tu empresa.
              </p>
              <p className="mt-4 font-display text-2xl">¿Hablamos?</p>
              <a
                href={waLink("Hola, quiero crear una experiencia de bienestar con AGAIA.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center px-6 py-3 rounded-full bg-secondary text-primary text-xs uppercase tracking-[0.22em] hover:bg-secondary/90 transition-colors"
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
