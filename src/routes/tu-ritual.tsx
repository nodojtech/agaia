import { createFileRoute } from "@tanstack/react-router";
import { NeedsToday } from "@/components/site/NeedsToday";
import { RitualQuiz } from "@/components/site/RitualQuiz";
import { Values } from "@/components/site/Values";

export const Route = createFileRoute("/tu-ritual")({
  head: () => ({
    meta: [
      { title: "Tu Ritual — Agaia" },
      { name: "description", content: "¿Qué necesitas hoy? Descubre tu ritual AGAIA: dormir mejor, calma, energía, conexión con la naturaleza o regalar bienestar." },
      { property: "og:title", content: "Tu Ritual — Agaia" },
      { property: "og:description", content: "Descubre el ritual botánico ideal para ti." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: TuRitualPage,
});

function TuRitualPage() {
  return (
    <div className="pt-32 md:pt-40">
      <section className="container-prose text-center pb-4">
        <span className="eyebrow">Tu Ritual</span>
        <h1 className="mt-3 font-display text-4xl md:text-6xl text-primary leading-tight">
          Un ritual para cada momento
        </h1>
        <p className="mt-5 max-w-2xl mx-auto text-foreground/70">
          Elige tu intención de hoy o haz el test sensorial para descubrir el ritual botánico
          que mejor te acompaña.
        </p>
      </section>
      <NeedsToday />
      <RitualQuiz />
      <Values />
    </div>
  );
}
