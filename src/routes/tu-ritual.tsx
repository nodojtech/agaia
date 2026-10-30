import { PageBanner } from "@/components/site/PageBanner";
import bannerPhoto from "@/assets/plant-lavanda.jpg";
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
    <div className="">
      <PageBanner eyebrow="Tu Ritual" title={<>Un ritual para cada momento</>} image={bannerPhoto} imageAlt="Campo de lavanda en flor, inspiración del universo botánico AGAIA"><p>Elige tu intención de hoy o haz el test sensorial para descubrir el ritual botánico
          que mejor te acompaña.</p></PageBanner>
      <NeedsToday />
      <RitualQuiz />
      <Values />
    </div>
  );
}
