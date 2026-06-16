import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/site/About";
import { BrandStory } from "@/components/site/BrandStory";
import { Community } from "@/components/site/Community";

export const Route = createFileRoute("/nosotros")({
  head: () => ({
    meta: [
      { title: "Nosotros — Agaia" },
      { name: "description", content: "La historia, los valores y la filosofía detrás de Agaia, laboratorio de bienestar natural." },
      { property: "og:title", content: "Nosotros — Agaia" },
      { property: "og:description", content: "Volver a lo esencial." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: NosotrosPage,
});

function NosotrosPage() {
  return (
    <div className="pt-32 md:pt-40">
      <About />
      <BrandStory />
      <Community />
    </div>
  );
}
