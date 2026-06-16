import { createFileRoute } from "@tanstack/react-router";
import { Products } from "@/components/site/Products";
import { BestSellers } from "@/components/site/BestSellers";
import { RelatedCombos } from "@/components/site/RelatedCombos";
import { Gifts } from "@/components/site/Gifts";
import { Distributors } from "@/components/site/Distributors";

export const Route = createFileRoute("/productos")({
  head: () => ({
    meta: [
      { title: "Productos — Agaia" },
      { name: "description", content: "Explora las colecciones botánicas Agaia: rituales de calma, energía, equilibrio y naturaleza." },
      { property: "og:title", content: "Productos — Agaia" },
      { property: "og:description", content: "Cuatro líneas botánicas pensadas como rituales de bienestar." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ProductosPage,
});

function ProductosPage() {
  return (
    <div className="pt-32 md:pt-40">
      <Products />
      <BestSellers />
      <RelatedCombos />
      <Gifts />
      <Distributors />
    </div>
  );
}
