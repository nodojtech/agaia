import plantNaranja from "@/assets/plant-naranja.jpg";
import plantCanela from "@/assets/plant-canela.jpg";
import plantVainilla from "@/assets/plant-vainilla.jpg";
import plantEucalipto from "@/assets/plant-eucalipto.jpg";
import plantMenta from "@/assets/plant-menta.jpg";
import plantLavanda from "@/assets/plant-lavanda.jpg";
import { PageBanner } from "@/components/site/PageBanner";
import bannerPhoto from "@/assets/plant-eucalipto.jpg";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import rollOn from "@/assets/roll-on-calma-manos.png.asset.json";
import aguaLinos from "@/assets/agua-linos-energia-naranja.png.asset.json";
import kit from "@/assets/kit-tres-pausas-regalo.png.asset.json";
import bonsai from "@/assets/bonsai-filodendro.png.asset.json";
import kokedama from "@/assets/kokedama-calathea.png.asset.json";
import manta from "@/assets/manta-origen-exterior.png.asset.json";

const galeria = [
  { src: rollOn.url, alt: "Aplicación del Roll-On Calma AGAIA en la muñeca" },
  { src: aguaLinos.url, alt: "Agua de Linos Energía Vital AGAIA con naranjas" },
  { src: kit.url, alt: "Kit Tres Pausas de Bienestar AGAIA entregado como regalo" },
  { src: bonsai.url, alt: "Bonsái de filodendro AGAIA con raíces expuestas sobre una base de madera" },
  { src: kokedama.url, alt: "Kokedama de calathea AGAIA con hojas variegadas" },
  { src: manta.url, alt: "Kit Manta Origen AGAIA sobre madera y raíces de árbol con flores blancas" },
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

const plantImages = [plantLavanda, plantMenta, plantEucalipto, plantVainilla, plantCanela, plantNaranja];

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
    <div className="">
      {/* Historia */}
      <PageBanner eyebrow="Nuestra historia" title={<>Un laboratorio botánico<br />
            <em className="font-light italic">nacido del bienestar.</em></>} image={bannerPhoto} imageAlt="Rama de eucalipto fresco, parte del universo botánico AGAIA"><p>AGAIA nació a finales del año 2024 como una búsqueda personal de bienestar y hoy se ha
            convertido en un laboratorio botánico que acompaña los rituales de cientos de personas.</p></PageBanner>

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
                <div className="relative isolate min-h-[340px] h-full p-7 rounded-lg overflow-hidden border border-border/60 shadow-[var(--shadow-soft)] flex flex-col text-primary-foreground">
                  <img src={plantImages[i]} alt={h.name} width={816} height={816} loading="lazy" className="absolute inset-0 -z-20 h-full w-full object-cover" />
                  <div aria-hidden className="plant-scrim absolute inset-0 -z-10" />
                  <h3 className="mt-3 font-display text-2xl text-primary-foreground">{h.name}</h3>
                  <p className="mt-2 text-sm text-primary-foreground/90 leading-relaxed">{h.desc}</p>
                  <ul className="mt-4 space-y-1.5 text-xs text-primary-foreground/90">
                    {h.benefits.map((b) => (
                      <li key={b}>✨ {b}</li>
                    ))}
                  </ul>
                  <Link
                    to="/productos"
                    className="mt-6 inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.22em] text-primary-foreground border-b border-primary-foreground/50 pb-1 hover:border-primary-foreground transition-colors self-start"
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

