import { createFileRoute } from "@tanstack/react-router";
import { Ingredients } from "@/components/site/Ingredients";
import { BotanicalLab } from "@/components/site/BotanicalLab";

export const Route = createFileRoute("/ingredientes")({
  head: () => ({
    meta: [
      { title: "Ingredientes — Agaia" },
      { name: "description", content: "Conoce el laboratorio botánico Agaia: aceites esenciales, plantas, minerales y resinas seleccionadas con conciencia." },
      { property: "og:title", content: "Ingredientes — Agaia" },
      { property: "og:description", content: "De la tierra, al ritual." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: IngredientesPage,
});

function IngredientesPage() {
  return (
    <div className="pt-32 md:pt-40">
      <Ingredients />
      <BotanicalLab />
    </div>
  );
}
