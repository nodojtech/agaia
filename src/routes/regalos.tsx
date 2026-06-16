import { createFileRoute } from "@tanstack/react-router";
import { Gifts } from "@/components/site/Gifts";
import { Distributors } from "@/components/site/Distributors";

export const Route = createFileRoute("/regalos")({
  head: () => ({
    meta: [
      { title: "Regalos — Agaia" },
      { name: "description", content: "Regalos personales y corporativos Agaia: rituales botánicos preparados a mano con intención." },
      { property: "og:title", content: "Regalos — Agaia" },
      { property: "og:description", content: "Regalos botánicos personalizados y cajas corporativas." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: RegalosPage,
});

function RegalosPage() {
  return (
    <div className="pt-32 md:pt-40">
      <section className="container-prose text-center pb-6">
        <span className="eyebrow">Regalos con intención</span>
        <h1 className="mt-3 font-display text-4xl md:text-6xl text-primary leading-tight">
          Regala una experiencia Agaia
        </h1>
        <p className="mt-5 max-w-2xl mx-auto text-foreground/70">
          Cajas personales y corporativas preparadas a mano, con detalles botánicos
          y una tarjeta escrita pensando en quien la recibe.
        </p>
      </section>
      <Gifts />
      <Distributors />
    </div>
  );
}
