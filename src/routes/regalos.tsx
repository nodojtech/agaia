import { createFileRoute } from "@tanstack/react-router";
import { Gifts } from "@/components/site/Gifts";
import { waLink } from "@/lib/site-config";

export const Route = createFileRoute("/regalos")({
  head: () => ({
    meta: [
      { title: "Bienestar Corporativo — Agaia" },
      { name: "description", content: "Regalos que dejan huella y experiencias corporativas de bienestar personalizadas: meditación, aromaterapia, pausas activas y rituales para equipos." },
      { property: "og:title", content: "Bienestar Corporativo — Agaia" },
      { property: "og:description", content: "Regalos con intención y experiencias de bienestar para empresas." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: RegalosPage,
});

const experiencias = [
  { emoji: "🧘", label: "Meditación guiada" },
  { emoji: "🌿", label: "Experiencias de aromaterapia" },
  { emoji: "🧪", label: "Creación de esencias personalizadas" },
  { emoji: "💚", label: "Pausas activas y momentos de bienestar" },
  { emoji: "✨", label: "Rituales de bienestar para equipos" },
];

function RegalosPage() {
  return (
    <div className="pt-32 md:pt-40">
      {/* Hero */}
      <section className="container-prose text-center pb-6">
        <span className="eyebrow">Bienestar Corporativo</span>
        <h1 className="mt-3 font-display text-4xl md:text-6xl text-primary leading-tight">
          Regalos que dejan huella
        </h1>
        <p className="mt-5 max-w-2xl mx-auto text-foreground/70">
          Cada empresa tiene una historia, un propósito y una forma única de agradecer. En AGAIA
          diseñamos experiencias de bienestar personalizadas para colaboradores, clientes, aliados
          y eventos especiales.
        </p>
      </section>

      <Gifts />

      {/* Experiencias corporativas */}
      <section id="experiencias" className="py-20 md:py-28">
        <div className="container-prose grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <span className="eyebrow">Experiencias corporativas</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-primary leading-tight">
              Porque el bienestar<br />
              <em className="font-light italic">también se vive.</em>
            </h2>
            <p className="mt-5 text-foreground/70">
              Además de nuestros regalos corporativos, diseñamos experiencias para empresas que
              buscan ofrecer momentos significativos a sus equipos. Cada experiencia se adapta a
              las necesidades y objetivos de tu empresa.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={waLink("Hola, quiero crear una experiencia de bienestar AGAIA para mi empresa.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground text-xs uppercase tracking-[0.22em] hover:bg-primary/90 transition-colors"
              >
                ✨ Crear una experiencia
              </a>
              <a
                href={waLink("Hola, quiero cotizar detalles de bienestar AGAIA para mi empresa.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-full border border-primary/30 text-primary text-xs uppercase tracking-[0.22em] hover:bg-primary/5 transition-colors"
              >
                Cotizar regalos corporativos
              </a>
            </div>
          </div>
          <ul className="lg:col-span-6 grid sm:grid-cols-2 gap-3">
            {experiencias.map((e) => (
              <li key={e.label} className="p-5 rounded-2xl bg-card border border-border/60">
                <p className="text-2xl">{e.emoji}</p>
                <p className="mt-2 font-display text-lg text-primary leading-tight">{e.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
