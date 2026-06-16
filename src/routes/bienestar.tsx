import { createFileRoute } from "@tanstack/react-router";
import { Values } from "@/components/site/Values";
import { Ritual } from "@/components/site/Ritual";
import { RitualQuiz } from "@/components/site/RitualQuiz";
import { NeedsToday } from "@/components/site/NeedsToday";

export const Route = createFileRoute("/bienestar")({
  head: () => ({
    meta: [
      { title: "Bienestar — Agaia" },
      { name: "description", content: "Rituales, valores y prácticas Agaia para acompañar tu calma, energía y equilibrio cada día." },
      { property: "og:title", content: "Bienestar — Agaia" },
      { property: "og:description", content: "Rituales y prácticas para volver a lo esencial." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: BienestarPage,
});

function BienestarPage() {
  return (
    <div className="pt-32 md:pt-40">
      <Values />
      <NeedsToday />
      <Ritual />
      <RitualQuiz />
    </div>
  );
}
