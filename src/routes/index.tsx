import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Values } from "@/components/site/Values";
import { Products } from "@/components/site/Products";
import { Ingredients } from "@/components/site/Ingredients";
import { Ritual } from "@/components/site/Ritual";
import { About } from "@/components/site/About";
import { Community } from "@/components/site/Community";
import { Contact } from "@/components/site/Contact";
import { Faq } from "@/components/site/Faq";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Agaia — Laboratorio de bienestar natural" },
      { name: "description", content: "Elementos naturales para cuidar tu cuerpo, tu energía y tu calma. Productos de bienestar inspirados en la naturaleza." },
      { property: "og:title", content: "Agaia — Laboratorio de bienestar" },
      { property: "og:description", content: "Bienestar natural para reconectar con tu esencia." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <Hero />
      <Values />
      <Products />
      <Ingredients />
      <Ritual />
      <About />
      <Community />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}
