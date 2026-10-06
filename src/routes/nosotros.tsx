import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import ingredients from "@/assets/ingredients.jpg";
import ritual from "@/assets/ritual.jpg";
import waterTexture from "@/assets/water-texture.jpg";
import productCalma from "@/assets/product-calma.jpg";
import productEnergia from "@/assets/product-energia.jpg";
import productNaturaleza from "@/assets/product-naturaleza.jpg";

const galeria = [
  { src: ingredients, alt: "Ingredientes botánicos AGAIA" },
  { src: ritual, alt: "Ritual de bienestar AGAIA" },
  { src: waterTexture, alt: "Textura de agua de linos AGAIA" },
  { src: productCalma, alt: "Producto AGAIA Calma" },
  { src: productEnergia, alt: "Producto AGAIA Energía" },
  { src: productNaturaleza, alt: "Producto AGAIA Naturaleza" },
];

export const Route = createFileRoute("/nosotros")({
  head: () => ({
    meta: [
      { title: "Nosotros — Agaia" },
      { name: "description", content: "AGAIA nació en 2024 como una búsqueda personal de bienestar y hoy es un laboratorio botánico. Conoce nuestra historia y el Herbario AGAIA." },
      { property: "og:title", content: "Nosotros — Agaia" },
      { property: "og:description", content: "Historia, Laboratorio Botánico y Herbario AGAIA." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: NosotrosPage,
});

const herbario = [
  { name: "Lavanda", desc: "Reconocida en aromaterapia por sus propiedades calmantes.", benefits: ["Favorece la relajación y el descanso.", "Ayuda a crear una sensación de calma y bienestar.", "Ideal para acompañar rituales de noche."] },
  { name: "Menta", desc: "Una de las plantas más utilizadas en aromaterapia por su frescura.", benefits: ["Favorece la claridad mental y la concentración.", "Proporciona una agradable sensación refrescante.", "Ideal para momentos de estrés o sobrecarga mental."] },
  { name: "Eucalipto", desc: "Una planta apreciada por su frescura y carácter renovador.", benefits: ["Favorece una sensación de respiración fresca y amplitud.", "Ayuda a crear ambientes de renovación y equilibrio.", "Ideal para conectar con la naturaleza."] },
  { name: "Vainilla Bourbon", desc: "Conocida por su aroma cálido y envolvente.", benefits: ["Ayuda a crear una sensación de confort y tranquilidad.", "Favorece ambientes acogedores y relajantes.", "Ideal para momentos de descanso y bienestar."] },
  { name: "Canela", desc: "Tradicionalmente valorada por su aroma cálido y especiado.", benefits: ["Aporta una sensación de calidez y confort.", "Favorece experiencias de relajación y autocuidado.", "Ideal para acompañar rituales de bienestar."] },
  { name: "Naranja", desc: "Los aromas cítricos son ampliamente utilizados para revitalizar los espacios.", benefits: ["Aporta una sensación de frescura y vitalidad.", "Favorece estados de ánimo positivos y optimistas.", "Ideal para comenzar el día con energía."] },
];

function NosotrosPage() {
  return (
    <div className="pt-32 md:pt-40">
      {/* Historia */}
      <section className="container-prose max-w-4xl text-center pb-16">
        <Reveal>
          <span className="eyebrow">Nuestra historia</span>
          <h1 className="mt-4 font-display text-4xl md:text-6xl text-primary leading-tight">
            Un laboratorio botánico<br />
            <em className="font-light italic">nacido del bienestar.</em>
          </h1>
          <p className="mt-6 text-foreground/70 leading-relaxed max-w-2xl mx-auto">
            AGAIA nació a finales del año 2024 como una búsqueda personal de bienestar y hoy se ha
            convertido en un laboratorio botánico que acompaña los rituales de cientos de personas.
          </p>
        </Reveal>
      </section>

      {/* Laboratorio Botánico */}
      <section className="py-20 bg-secondary/40">
        <div className="container-prose max-w-3xl text-center">
          <Reveal>
            <span className="eyebrow">Nuestro Laboratorio Botánico</span>
            <h2 className="mt-3 font-display text-3xl md:text-5xl text-primary leading-tight">
              Creemos en el poder de las plantas
            </h2>
            <p className="mt-5 text-foreground/70 leading-relaxed">
              En nuestro Laboratorio Botánico seleccionamos cuidadosamente especies reconocidas por
              sus beneficios para desarrollar experiencias que acompañen tu bienestar.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Herbario */}
      <section id="herbario" className="py-20 md:py-24">
        <div className="container-prose">
          <Reveal className="max-w-2xl mb-12">
            <span className="eyebrow">Herbario AGAIA</span>
            <h2 className="mt-3 font-display text-3xl md:text-5xl text-primary leading-tight">
              Las plantas que nos inspiran
            </h2>
            <p className="mt-4 text-foreground/70">
              Conoce las plantas que inspiran cada una de nuestras experiencias de bienestar.
            </p>
          </Reveal>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {herbario.map((h, i) => (
              <Reveal as="li" key={h.name} delay={i * 70}>
                <div className="h-full p-7 rounded-3xl bg-card border border-border/60 shadow-[var(--shadow-soft)] flex flex-col">
                  <p className="text-3xl">🌿</p>
                  <h3 className="mt-3 font-display text-2xl text-primary">{h.name}</h3>
                  <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{h.desc}</p>
                  <ul className="mt-4 space-y-1.5 text-xs text-foreground/70">
                    {h.benefits.map((b) => (
                      <li key={b}>✨ {b}</li>
                    ))}
                  </ul>
                  <Link
                    to="/productos"
                    className="mt-6 inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.22em] text-primary border-b border-primary/30 pb-1 hover:border-primary transition-colors self-start"
                  >
                    ➔ Ver productos con {h.name}
                  </Link>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Galería */}
      <section className="py-20 md:py-24 bg-secondary/40">
        <div className="container-prose">
          <Reveal className="max-w-2xl mx-auto text-center mb-12">
            <span className="eyebrow">Galería AGAIA</span>
            <h2 className="mt-3 font-display text-3xl md:text-5xl text-primary leading-tight">
              Nuestro mundo botánico
            </h2>
            <p className="mt-4 text-foreground/70">
              Momentos, texturas e ingredientes que dan vida a cada experiencia AGAIA.
            </p>
          </Reveal>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galeria.map((g, i) => (
              <Reveal as="li" key={g.src} delay={i * 70}>
                <div className="aspect-square overflow-hidden rounded-3xl bg-card border border-border/60">
                  <img
                    src={g.src}
                    alt={g.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

