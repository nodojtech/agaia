import { createFileRoute } from "@tanstack/react-router";
import { AnnouncementBar } from "@/components/site/AnnouncementBar";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { NeedsToday } from "@/components/site/NeedsToday";
import { BestSellers } from "@/components/site/BestSellers";
import { RitualQuiz } from "@/components/site/RitualQuiz";
import { Values } from "@/components/site/Values";
import { Products } from "@/components/site/Products";
import { RelatedCombos } from "@/components/site/RelatedCombos";
import { Gifts } from "@/components/site/Gifts";
import { Distributors } from "@/components/site/Distributors";
import { BotanicalLab } from "@/components/site/BotanicalLab";
import { Ingredients } from "@/components/site/Ingredients";
import { Ritual } from "@/components/site/Ritual";
import { BrandStory } from "@/components/site/BrandStory";
import { About } from "@/components/site/About";
import { Community } from "@/components/site/Community";
import { Contact } from "@/components/site/Contact";
import { Faq } from "@/components/site/Faq";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Agaia — Laboratorio de bienestar natural" },
      { name: "description", content: "Rituales botánicos, productos naturales y experiencias sensoriales para cuidar tu calma, tu energía y tu equilibrio." },
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
      <AnnouncementBar />
      <Header />
      <Hero />
      <NeedsToday />
      <BestSellers />
      <RitualQuiz />
      <Values />
      <Products />
      <RelatedCombos />
      <Gifts />
      <Distributors />
      <BotanicalLab />
      <Ingredients />
      <Ritual />
      <BrandStory />
      <About />
      <Community />
      <Faq />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
