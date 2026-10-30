import { PageBanner } from "@/components/site/PageBanner";
import bannerPhoto from "@/assets/agua-linos-gratitud-fondo.png.asset.json";
import { createFileRoute } from "@tanstack/react-router";
import { Products } from "@/components/site/Products";
import { BestSellers } from "@/components/site/BestSellers";

export const Route = createFileRoute("/productos")({
  head: () => ({
    meta: [
      { title: "Productos — Agaia" },
      { name: "description", content: "Explora las colecciones botánicas Agaia: rituales de calma, energía, equilibrio y naturaleza." },
      { property: "og:title", content: "Productos — Agaia" },
      { property: "og:description", content: "Aguas de linos, jabones, kits, Roll-On Calma, sales relajantes, plantas y Manta Origen AGAIA." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ProductosPage,
});

function ProductosPage() {
  return (
    <div className="">
      <PageBanner eyebrow="Colección botánica" title="Productos AGAIA" image={bannerPhoto.url} imageAlt="Agua de Linos Gratitud AGAIA en un ambiente botánico" />
      <div className="pt-10"><Products /></div>
      <BestSellers />
    </div>
  );
}
