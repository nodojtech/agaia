import { createFileRoute } from "@tanstack/react-router";
import { Products } from "@/components/site/Products";
import { BestSellers } from "@/components/site/BestSellers";
import { RelatedCombos } from "@/components/site/RelatedCombos";

export const Route = createFileRoute("/productos")({
  head: () => ({
    meta: [
      { title: "Productos — Agaia" },
      { name: "description", content: "Explora las colecciones botánicas Agaia: rituales de calma, energía, equilibrio y naturaleza." },
      { property: "og:title", content: "Productos — Agaia" },
      { property: "og:description", content: "Cuatro líneas botánicas pensadas como rituales de bienestar." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ProductosPage,
});

function ProductosPage() {
  return (
    <div className="pt-28 md:pt-32">
      <Products />
      <BestSellers />
      <RelatedCombos />
    </div>
  );
}
