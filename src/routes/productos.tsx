import { PageBanner } from "@/components/site/PageBanner";
import bannerPhoto from "@/assets/productos-banner-kit-v3.jpg";
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
      <PageBanner eyebrow="Colección botánica" title="Productos AGAIA" image={bannerPhoto} imagePosition="85% 70%" tall imageAlt="Jabón Energía Vital, Agua de Linos Gratitud y Roll-On Calma AGAIA sobre piedras naturales" />
      <div className="pt-10"><Products /></div>
      <BestSellers />
    </div>
  );
}
