import { createFileRoute } from "@tanstack/react-router";
import { GroundingBlanket } from "@/components/site/GroundingBlanket";

export const Route = createFileRoute("/manta-grounding")({
  head: () => ({
    meta: [
      { title: "Manta de grounding — Agaia" },
      { name: "description", content: "Manta de grounding Agaia: algodón orgánico e hilos de cobre para reconectar con la tierra y calmar el sistema nervioso." },
      { property: "og:title", content: "Manta de grounding — Agaia" },
      { property: "og:description", content: "Reconecta con la tierra: descanso profundo, calma y presencia." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: GroundingBlanket,
});
