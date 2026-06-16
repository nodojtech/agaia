import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { NeedsToday } from "@/components/site/NeedsToday";
import { BestSellers } from "@/components/site/BestSellers";
import { Values } from "@/components/site/Values";
import { Community } from "@/components/site/Community";
import { Contact } from "@/components/site/Contact";
import { Faq } from "@/components/site/Faq";

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
    <>
      <Hero />
      <NeedsToday />
      <Values />
      <BestSellers />
      <Community />
      <Faq />
      <Contact />
    </>
  );
}
