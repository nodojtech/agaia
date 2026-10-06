import { createFileRoute } from "@tanstack/react-router";
import { GroundingBlanket } from "@/components/site/GroundingBlanket";

export const Route = createFileRoute("/manta-origen")({
  head: () => ({
    meta: [
      { title: "Manta Origen — Agaia" },
      { name: "description", content: "Manta Origen AGAIA: manta de conexión a tierra (Grounding) en 95% algodón y 5% hilos de plata para incorporar el bienestar del contacto con la Tierra a tu rutina." },
      { property: "og:title", content: "Manta Origen — Agaia" },
      { property: "og:description", content: "Conecta con la naturaleza, incluso desde casa." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: GroundingBlanket,
});
