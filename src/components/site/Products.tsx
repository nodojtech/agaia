import { useEffect, useRef, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { waLink } from "@/lib/site-config";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import equilibrioImg from "@/assets/product-equilibrio.jpg";
import rollOnCalmaFondo1 from "@/assets/roll-on-calma-fondo-1.jpeg.asset.json";
import rollOnCalmaFondo2 from "@/assets/roll-on-calma-fondo-2.png.asset.json";
import rollOnCalmaFrente from "@/assets/roll-on-calma-frente.png.asset.json";
import rollOnCalmaIncluye from "@/assets/roll-on-calma-incluye.png.asset.json";
import rollOnCalmaManos from "@/assets/roll-on-calma-manos.png.asset.json";
import energiaVitalTresAromas from "@/assets/agua-linos-energia-3-aromas.png.asset.json";
import energiaVitalFondo from "@/assets/agua-linos-energia-fondo.png.asset.json";
import energiaVitalFrente from "@/assets/agua-linos-energia-frente.png.asset.json";
import energiaVitalNaranja from "@/assets/agua-linos-energia-naranja.png.asset.json";
import energiaVitalUso from "@/assets/agua-linos-energia-uso.png.asset.json";
import equilibrioNaturalFondo from "@/assets/equilibrio-natural-fondo.png.asset.json";
import equilibrioNaturalFrente from "@/assets/equilibrio-natural-frente.png.asset.json";
import equilibrioNaturalReverso from "@/assets/equilibrio-natural-reverso.png.asset.json";
import equilibrioNaturalEucalipto from "@/assets/equilibrio-natural-eucalipto.png.asset.json";
import equilibrioNaturalUso from "@/assets/equilibrio-natural-uso.png.asset.json";
import equilibrioNaturalTresAromas from "@/assets/equilibrio-natural-tres-aromas.png.asset.json";
import gratitudFondo from "@/assets/agua-linos-gratitud-fondo.png.asset.json";
import gratitudFrente from "@/assets/agua-linos-gratitud-frente.png.asset.json";
import gratitudVainilla from "@/assets/agua-linos-gratitud-vainilla.png.asset.json";
import gratitudUso from "@/assets/agua-linos-gratitud-uso.png.asset.json";
import gratitudTresAromas from "@/assets/agua-linos-gratitud-tres-aromas.png.asset.json";
import jabonEnergiaNaranjas from "@/assets/jabon-energia-naranjas.png.asset.json";
import jabonEnergiaFrente from "@/assets/jabon-energia-frente.png.asset.json";
import jabonEquilibrioFondo from "@/assets/jabon-equilibrio-fondo.png.asset.json";
import jabonEquilibrioEucalipto from "@/assets/jabon-equilibrio-eucalipto.png.asset.json";
import jabonEquilibrioFrente from "@/assets/jabon-equilibrio-frente.png.asset.json";
import jabonGratitudFondo from "@/assets/jabon-gratitud-fondo.png.asset.json";
import jabonGratitudVainilla from "@/assets/jabon-gratitud-vainilla.png.asset.json";
import jabonGratitudFrente from "@/assets/jabon-gratitud-frente.png.asset.json";
import kitTresPausasFondo from "@/assets/kit-tres-pausas-fondo.png.asset.json";
import kitTresPausasRegalo from "@/assets/kit-tres-pausas-regalo.png.asset.json";
import kitTresPausasFrente from "@/assets/kit-tres-pausas-frente.png.asset.json";
import kitBienestarGratitudFondo from "@/assets/kit-bienestar-gratitud-fondo.png.asset.json";
import kitBienestarGratitudFrente from "@/assets/kit-bienestar-gratitud-frente.png.asset.json";
import kitBienestarEnergiaVitalFondo from "@/assets/kit-bienestar-energia-vital-fondo.png.asset.json";
import kitBienestarEquilibrioNaturalFondo from "@/assets/kit-bienestar-equilibrio-natural-fondo.png.asset.json";
import kitsEmpresarialesCajaAbierta from "@/assets/kits-empresariales-caja-abierta.png.asset.json";
import kitsEmpresarialesRegalo from "@/assets/kits-empresariales-regalo.png.asset.json";
import kitsEmpresarialesProduccion from "@/assets/kits-empresariales-produccion.png.asset.json";
import mantaOrigenKit from "@/assets/manta-origen-kit.png.asset.json";
import mantaOrigenUso from "@/assets/manta-origen-uso.png.asset.json";
import mantaOrigenFlatlay from "@/assets/manta-origen-flatlay.png.asset.json";
import mantaOrigenExterior from "@/assets/manta-origen-exterior.png.asset.json";
import mantaOrigenPiedra from "@/assets/manta-origen-piedra.png.asset.json";
import bonsaiFilodendro from "@/assets/bonsai-filodendro.png.asset.json";
import bonsaiPlatano from "@/assets/bonsai-platano.png.asset.json";
import bonsaiArrayan from "@/assets/bonsai-arrayan.png.asset.json";
import bonsaiJadeMacho from "@/assets/bonsai-jade-macho.webp.asset.json";
import bonsaiPinoAzul from "@/assets/bonsai-pino-azul.webp.asset.json";
import bonsaiJadeHembra from "@/assets/bonsai-jade-hembra.png.asset.json";
import bonsaiFilodendroFrente from "@/assets/bonsai-filodendro-frente.png.asset.json";
import kokedamaCalathea from "@/assets/kokedama-calathea.png.asset.json";
import kokedamaHelecho from "@/assets/kokedama-2.jpg.asset.json";
import kokedamaSuculenta from "@/assets/kokedama-3.jpg.asset.json";
import salesCanelaFondo from "@/assets/sales-canela-fondo.png.asset.json";
import salesCanelaFrente from "@/assets/sales-canela-frente.png.asset.json";

type Presentation = { size: string; price: string };
type ProductImage = { src: string; alt: string };
type Product = {
  name: string;
  tag?: string;
  desc: string;
  benefits: string[];
  ingredients: string[];
  use: string;
  presentations: Presentation[];
  image?: string;
  images?: ProductImage[];
};

type Category = {
  id: string;
  label: string;
  intro?: string;
  products: Product[];
};

function ProductGallery({ images, name, detail = false }: { images: ProductImage[]; name: string; detail?: boolean }) {
  const [activeImage, setActiveImage] = useState(0);
  const selectedImage = images[activeImage] ?? images[0];

  if (!selectedImage) return null;

  return (
    <div className="min-w-0 bg-secondary/40">
      <div className={detail ? "h-64 sm:h-80 overflow-hidden" : "h-48 sm:h-52 overflow-hidden"}>
        <img
          src={selectedImage.src}
          alt={selectedImage.alt}
          loading="lazy"
          className="h-full w-full object-cover transition-opacity duration-300"
        />
      </div>
      {images.length > 1 && (
        <div className="flex gap-1.5 overflow-x-auto border-t border-border/60 bg-card p-2">
          {images.map((image, index) => (
            <Button
              key={image.src}
              type="button"
              variant="ghost"
              onClick={(event) => { event.stopPropagation(); setActiveImage(index); }}
              onKeyDown={(event) => event.stopPropagation()}
              aria-label={`Ver foto ${index + 1} de ${name}`}
              aria-pressed={activeImage === index}
              className={`h-10 w-10 shrink-0 overflow-hidden rounded-md border p-0 ${
                activeImage === index ? "border-primary" : "border-transparent opacity-65 hover:opacity-100"
              }`}
            >
              <img src={image.src} alt="" className="h-full w-full object-cover" />
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}

export const CATEGORIES: Category[] = [
  {
    id: "aguas-de-linos",
    label: "Aguas de Linos",
    intro:
      "Nuestras Aguas de Linos fueron creadas para transformar espacios cotidianos en experiencias de bienestar. Ideales para aromatizar sábanas, almohadas, cortinas, sofás y espacios del hogar.",
    products: [
      {
        name: "Agua de Linos Gratitud",
        tag: "🤍 Vainilla Bourbon · Calma y descanso",
        images: [
          { src: gratitudFondo.url, alt: "Agua de Linos Gratitud AGAIA en ambiente cálido" },
          { src: gratitudFrente.url, alt: "Vista frontal del Agua de Linos Gratitud AGAIA" },
          { src: gratitudVainilla.url, alt: "Agua de Linos Gratitud AGAIA con vainas de vainilla" },
          { src: gratitudUso.url, alt: "Aplicación del Agua de Linos Gratitud en la habitación" },
          { src: gratitudTresAromas.url, alt: "Presentaciones del Agua de Linos Gratitud AGAIA" },
        ],
        desc:
          "Una invitación a bajar el ritmo y disfrutar los pequeños momentos. Su aroma cálido y envolvente de Vainilla Bourbon crea ambientes acogedores, ideales para acompañar momentos de descanso, lectura o desconexión al final del día.",
        benefits: [
          "Calmante y relajante: ideal para calmar la mente en momentos de tensión.",
          "Eleva el ánimo: libera endorfinas y serotonina.",
          "Mejora la concentración y la memoria.",
          "Favorece el sueño y un descanso reparador.",
        ],
        ingredients: ["Vainilla Bourbon"],
        use: "Rocía sobre sábanas, almohadas, cortinas, sofás o espacios que quieras aromatizar. Aplica a 20–30 cm.",
        presentations: [
          { size: "400 ml", price: "$38.000" },
          { size: "250 ml", price: "$30.000" },
          { size: "30 ml", price: "$10.000" },
        ],
      },
      {
        name: "Agua de Linos Energía Vital",
        tag: "🍊 Naranja · Frescura y vitalidad",
        images: [
          { src: energiaVitalFondo.url, alt: "Agua de Linos Energía Vital AGAIA en ambiente natural" },
          { src: energiaVitalFrente.url, alt: "Vista frontal del Agua de Linos Energía Vital AGAIA" },
          { src: energiaVitalNaranja.url, alt: "Agua de Linos Energía Vital AGAIA con naranjas" },
          { src: energiaVitalUso.url, alt: "Aplicación del Agua de Linos Energía Vital en el hogar" },
          { src: energiaVitalTresAromas.url, alt: "Presentaciones del Agua de Linos Energía Vital AGAIA" },
        ],
        desc:
          "Inspirada en la frescura y vitalidad de la naranja. Su aroma cítrico aporta una sensación de frescura, optimismo y bienestar, ideal para mañanas y momentos donde buscas renovar el ambiente.",
        benefits: [
          "Vitamina C: antioxidante y antienvejecimiento.",
          "Reduce el estrés y mejora el estado de ánimo.",
          "Mejora la circulación, la claridad mental y el enfoque.",
        ],
        ingredients: ["Naranja"],
        use: "Rocía sobre sábanas, almohadas, cortinas, sofás o espacios que quieras aromatizar. Aplica a 20–30 cm.",
        presentations: [
          { size: "400 ml", price: "$38.000" },
          { size: "250 ml", price: "$30.000" },
          { size: "30 ml", price: "$10.000" },
        ],
      },
      {
        name: "Agua de Linos Equilibrio Natural",
        tag: "🌿 Eucalipto · Renovación y equilibrio",
        images: [
          { src: equilibrioNaturalFondo.url, alt: "Agua de Linos Equilibrio Natural AGAIA en ambiente natural" },
          { src: equilibrioNaturalFrente.url, alt: "Vista frontal del Agua de Linos Equilibrio Natural AGAIA" },
          { src: equilibrioNaturalReverso.url, alt: "Etiqueta trasera del Agua de Linos Equilibrio Natural AGAIA" },
          { src: equilibrioNaturalEucalipto.url, alt: "Agua de Linos Equilibrio Natural AGAIA con ramas de eucalipto" },
          { src: equilibrioNaturalUso.url, alt: "Aplicación del Agua de Linos Equilibrio Natural sobre las sábanas" },
          { src: equilibrioNaturalTresAromas.url, alt: "Presentaciones de 400 ml, 250 ml y 30 ml del Agua de Linos Equilibrio Natural AGAIA" },
        ],
        desc:
          "Inspirada en el eucalipto, una planta reconocida por su frescura y carácter renovador. Ideal para quienes buscan incorporar la naturaleza a sus espacios.",
        benefits: [
          "Refrescante y descongestionante: alivia las vías respiratorias.",
          "Reduce la fatiga mental: aumenta la claridad y el enfoque.",
          "Mejora el bienestar emocional y físico.",
          "Ayuda a reducir ansiedad, estrés e insomnio.",
        ],
        ingredients: ["Eucalipto"],
        use: "Rocía sobre sábanas, almohadas, cortinas, sofás o espacios que quieras aromatizar. Aplica a 20–30 cm.",
        presentations: [
          { size: "400 ml", price: "$38.000" },
          { size: "250 ml", price: "$30.000" },
          { size: "30 ml", price: "$10.000" },
        ],
      },
    ],
  },
  {
    id: "jabones",
    label: "Jabones de Manos y Cuerpo",
    intro:
      "Nuestros Jabones de Manos y Cuerpo fueron creados para transformar una rutina cotidiana en una experiencia de bienestar. Enriquecidos con Aloe Vera y Vitamina E.",
    products: [
      {
        name: "Jabón Gratitud",
        tag: "🤍 Vainilla Bourbon",
        images: [
          {
            src: jabonGratitudFondo.url,
            alt: "Jabón Gratitud junto a una vela encendida, eucalipto y una pastilla de jabón",
          },
          {
            src: jabonGratitudVainilla.url,
            alt: "Manos enjabonándose junto al frasco de Jabón Gratitud y vainas de vainilla",
          },
          {
            src: jabonGratitudFrente.url,
            alt: "Frasco de Jabón Gratitud 400 ml sobre fondo claro",
          },
        ],
        desc:
          "Perfecto para antes de dormir. Transforma el momento del baño en una experiencia cálida y reconfortante que envuelve los sentidos.",
        benefits: [
          "Calmante y relajante.",
          "Eleva el ánimo.",
          "Mejora la concentración.",
          "Favorece el sueño.",
        ],
        ingredients: ["Aloe Vera", "Vitamina E", "Vainilla Bourbon"],
        use: "Aplica sobre las manos o el cuerpo húmedo, masajea suavemente hasta generar espuma y enjuaga con abundante agua.",
        presentations: [{ size: "400 ml", price: "$32.000" }],
      },
      {
        name: "Jabón Energía Vital",
        tag: "🍊 Naranja",
        images: [
          { src: jabonEnergiaNaranjas.url, alt: "Jabón Energía Vital junto al lavamanos con naranjas frescas" },
          { src: jabonEnergiaFrente.url, alt: "Frasco de Jabón Energía Vital 400 ml" },
        ],
        desc:
          "El inicio perfecto para tus mañanas. Inspirado en la frescura de la naranja, acompaña esos momentos en los que quieres comenzar el día renovad@.",
        benefits: [
          "Vitamina C: antioxidante y antienvejecimiento.",
          "Hidratación y suavidad.",
          "Estimula el colágeno y mejora la elasticidad.",
          "Reduce el estrés y mejora la circulación.",
        ],
        ingredients: ["Aloe Vera", "Vitamina E", "Naranja"],
        use: "Aplica sobre las manos o el cuerpo húmedo, masajea suavemente hasta generar espuma y enjuaga con abundante agua.",
        presentations: [{ size: "400 ml", price: "$32.000" }],
      },
      {
        name: "Jabón Equilibrio Natural",
        tag: "🌿 Eucalipto",
        images: [
          {
            src: jabonEquilibrioFondo.url,
            alt: "Jabón Equilibrio Natural junto a lavabo, vela encendida y eucalipto",
          },
          {
            src: jabonEquilibrioEucalipto.url,
            alt: "Manos enjabonándose junto al frasco de Jabón Equilibrio Natural",
          },
          {
            src: jabonEquilibrioFrente.url,
            alt: "Frasco de Jabón Equilibrio Natural 400 ml sobre fondo claro",
          },
        ],
        desc:
          "Inspirado en el eucalipto. Transforma el momento del baño en una experiencia que invita a respirar profundo y conectar con la naturaleza.",
        benefits: [
          "Refrescante y descongestionante.",
          "Antibacteriano y antiviral.",
          "Reduce la fatiga mental.",
          "Mejora el bienestar emocional y físico.",
        ],
        ingredients: ["Aloe Vera", "Vitamina E", "Eucalipto"],
        use: "Aplica sobre las manos o el cuerpo húmedo, masajea suavemente hasta generar espuma y enjuaga con abundante agua.",
        presentations: [{ size: "400 ml", price: "$32.000" }],
      },
    ],
  },
  {
    id: "kits",
    label: "Kits",
    intro:
      "Una experiencia botánica para el cuerpo y los espacios. Cada Kit de Bienestar combina Jabón de Manos y Cuerpo (400 ml) y Agua de Linos (400 ml) en la misma fragancia, presentado en una hermosa caja de madera con el sello AGAIA.",
    products: [
      {
        name: "Kit Bienestar Gratitud",
        tag: "🤍 Vainilla Bourbon",
        images: [
          {
            src: kitBienestarGratitudFondo.url,
            alt: "Kit Bienestar Gratitud con Agua de Linos y Jabón de Manos y Cuerpo sobre una bandeja negra en un baño cálido con vela, toalla y eucalipto",
          },
          {
            src: kitBienestarGratitudFrente.url,
            alt: "Kit Bienestar Gratitud: Agua de Linos y Jabón de Manos y Cuerpo Gratitud sobre fondo blanco en su bandeja negra",
          },
        ],
        desc: "Kit ritual con Jabón + Agua de Linos Gratitud (400 ml) en caja de madera AGAIA.",
        benefits: [
          "Calmante y relajante.",
          "Eleva el ánimo.",
          "Mejora la concentración.",
          "Favorece el sueño.",
        ],
        ingredients: ["Vainilla Bourbon", "Aloe Vera", "Vitamina E"],
        use: "Utiliza cada producto según el momento del día que quieras acompañar.",
        presentations: [{ size: "Kit completo", price: "$70.000" }],
      },
      {
        name: "Kit Bienestar Energía Vital",
        tag: "🍊 Naranja",
        images: [
          {
            src: kitBienestarEnergiaVitalFondo.url,
            alt: "Kit Bienestar Energía Vital con Agua de Linos y Jabón de Manos y Cuerpo en su bandeja negra sobre una encimera de piedra, junto a una toalla y hojas verdes",
          },
        ],
        desc: "Kit ritual con Jabón + Agua de Linos Energía Vital (400 ml) en base kit negra.",
        benefits: ["Frescura y vitalidad para las mañanas."],
        ingredients: ["Naranja", "Aloe Vera", "Vitamina E"],
        use: "Utiliza cada producto según el momento del día que quieras acompañar.",
        presentations: [{ size: "Kit completo", price: "$70.000" }],
      },
      {
        name: "Kit Bienestar Equilibrio Natural",
        tag: "🌿 Eucalipto",
        images: [
          {
            src: kitBienestarEquilibrioNaturalFondo.url,
            alt: "Kit Bienestar Equilibrio Natural con Agua de Linos y Jabón de Manos y Cuerpo en su bandeja negra sobre una encimera de madera, junto a una toalla, una vela encendida y una planta",
          },
        ],
        desc: "Kit ritual con Jabón + Agua de Linos Equilibrio Natural (400 ml) en base kit negra.",
        benefits: ["Renovación y equilibrio en tu espacio y en tu piel."],
        ingredients: ["Eucalipto", "Aloe Vera", "Vitamina E"],
        use: "Utiliza cada producto según el momento del día que quieras acompañar.",
        presentations: [{ size: "Kit completo", price: "$70.000" }],
      },
      {
        name: "Kit Tres Pausas de Bienestar",
        tag: "Tres aromas · Tres intenciones",
        images: [
          {
            src: kitTresPausasFondo.url,
            alt: "Caja de regalo AGAIA abierta con las tres brumas de ambiente mientras unas manos la presentan",
          },
          {
            src: kitTresPausasRegalo.url,
            alt: "Caja de regalo AGAIA cerrada entregándose entre dos manos junto a la tarjeta «Cosas buenas dentro»",
          },
          {
            src: kitTresPausasFrente.url,
            alt: "Caja de regalo AGAIA abierta sobre fondo blanco con las tres brumas de ambiente",
          },
        ],
        desc:
          "Tres aromas. Tres intenciones. Tres pausas para volver a ti. Reúne las versiones mini de las tres Aguas de Linos más representativas.",
        benefits: [
          "Descubre los tres aromas insignia de AGAIA.",
          "Ideal para acompañar diferentes momentos del día.",
          "Perfecto para llevar en el bolso, la oficina o durante viajes.",
        ],
        ingredients: ["Vainilla Bourbon", "Naranja", "Eucalipto"],
        use: "Rocía sobre almohadas, sábanas, cortinas, sofás o espacios de trabajo.",
        presentations: [
          { size: "Caja regalo · 🤍 Gratitud 30 ml + 🍊 Energía Vital 30 ml + 🌿 Equilibrio Natural 30 ml", price: "$32.000" },
        ],
      },
    ],
  },
  {
    id: "aceites-esenciales",
    label: "Aceites Esenciales",
    products: [
      {
        name: "Roll-On Calma",
        tag: "🌿 Aceite esencial de menta",
        images: [
          { src: rollOnCalmaFondo2.url, alt: "Roll-on Calma AGAIA con hojas de menta" },
          { src: rollOnCalmaFrente.url, alt: "Vista frontal del Roll-on Calma AGAIA" },
          { src: rollOnCalmaManos.url, alt: "Aplicación del Roll-on Calma sobre la muñeca" },
          { src: rollOnCalmaIncluye.url, alt: "Contenido incluido con el Roll-on Calma AGAIA" },
          { src: rollOnCalmaFondo1.url, alt: "Roll-on Calma AGAIA sobre fondo azul" },
        ],
        desc:
          "Creado para acompañarte durante días de estrés, ansiedad, sobrecarga mental o agotamiento. Su formato portátil te permite llevarlo contigo y utilizarlo siempre que necesites un instante de bienestar.",
        benefits: [
          "Desinflama espasmos.",
          "Potencia la capacidad respiratoria.",
          "Reduce el estrés y la ansiedad.",
          "Regula el calor corporal.",
          "Disminuye migrañas.",
          "Controla alergias.",
        ],
        ingredients: ["Aceite esencial de menta", "Aceite portador vegetal"],
        use: "Aplica suavemente sobre muñecas, sienes, cuello o detrás de las orejas. Respira profundamente y permite que su aroma te acompañe.",
        presentations: [{ size: "5 ml", price: "$42.000" }],
      },
    ],
  },
  {
    id: "sales",
    label: "Sales Relajantes",
    intro:
      "Ideales para disfrutar en baños de inmersión, baños de pies o cualquier ritual donde quieras bajar el ritmo y regalarte un momento para ti.",
    products: [
      {
        name: "Sales Relajantes de Canela",
        tag: "Aroma cálido y especiado",
        images: [
          {
            src: salesCanelaFondo.url,
            alt: "Bolsa de Sales Relajantes de Canela con rodajas de naranja y ramas de canela, junto a un cuenco de cerámica con sales en un ambiente de spa",
          },
          {
            src: salesCanelaFrente.url,
            alt: "Bolsa transparente de Sales Relajantes de Canela con su etiqueta frontal sobre fondo blanco con sombras de hojas",
          },
        ],
        desc:
          "Una invitación a hacer una pausa. Inspiradas en las propiedades aromáticas de la canela, ayudan a transformar pequeños espacios de tu rutina en experiencias cálidas y conscientes.",
        benefits: [
          "Aroma cálido y reconfortante.",
          "Ideal para rituales de descanso y baños de pies.",
          "Transforma una pausa cotidiana en experiencia sensorial.",
        ],
        ingredients: ["Sales minerales", "Canela"],
        use: "Agrega una cantidad generosa en agua tibia. Ideal para baños de inmersión, baños de pies o rituales de autocuidado.",
        presentations: [{ size: "380 g", price: "$32.000" }],
      },
      {
        name: "Sales Relajantes de Lavanda",
        tag: "Una invitación a respirar y descansar",
        image: equilibrioImg,
        desc:
          "Inspiradas en una de las plantas más reconocidas en aromaterapia, ayudan a transformar rituales cotidianos en experiencias de calma y desconexión.",
        benefits: [
          "Acompaña momentos de relajación y descanso.",
          "Ideal para desconectarse del ritmo acelerado del día.",
          "Perfecta para rituales de noche y preparación al descanso.",
        ],
        ingredients: ["Sales minerales", "Lavanda"],
        use: "Agrega una cantidad generosa en agua tibia. Ideal para baños de inmersión, baños de pies o rituales de autocuidado.",
        presentations: [{ size: "380 g", price: "$32.000" }],
      },
    ],
  },
  {
    id: "plantas",
    label: "Refugio de Bienestar · Plantas",
    intro:
      "Tu rincón natural. Especies seleccionadas para incorporar naturaleza a tus espacios. Producto válido sólo en Manizales — la disponibilidad cambia constantemente ya que cada planta es única.",
    products: [
      {
        name: "Bonsáis",
        tag: "🌿 Paciencia, equilibrio y crecimiento",
        images: [
          {
            src: bonsaiFilodendro.url,
            alt: "Bonsái de filodendro con raíces expuestas sobre una base de madera con gravilla, frente a una pared gris",
          },
          {
            src: bonsaiJadeMacho.url,
            alt: "Bonsái de jade macho acompañado de una fitonia de nervaduras rojas en la base, en el jardín",
          },
          {
            src: bonsaiPinoAzul.url,
            alt: "Bonsái de pino azul sobre una base de madera con gravilla blanca, en un vivero con flores rosadas de fondo",
          },
          {
            src: bonsaiPlatano.url,
            alt: "Bonsái de plátano enano con la etiqueta de AGAIA atada al tronco, frente a una pared de ladrillo",
          },
          {
            src: bonsaiArrayan.url,
            alt: "Bonsái de arrayán con copa densa y podada sobre una base de madera, frente a una pared de ladrillo",
          },
          {
            src: bonsaiJadeHembra.url,
            alt: "Bonsái de jade hembra sostenido en la mano, con la etiqueta de AGAIA y un jardín de fondo",
          },
          {
            src: bonsaiFilodendroFrente.url,
            alt: "Bonsái de filodendro con raíces expuestas sobre su base de madera, sobre fondo blanco",
          },
        ],
        desc:
          "Cada bonsái cuenta una historia. Seleccionamos especies cuidadosamente cultivadas para que puedas disfrutar de una experiencia única de conexión con la naturaleza.",
        benefits: ["Incluye guía digital de cuidado.", "Tarjeta de regalo (si deseas)."],
        ingredients: ["Especies según disponibilidad"],
        use: "Ubícalo en un espacio con luz indirecta. Sigue la guía de cuidado según su especie.",
        presentations: [{ size: "Consultar disponibilidad", price: "Solicitar" }],
      },
      {
        name: "Kokedamas",
        tag: "🌿 Técnica japonesa · Musgo natural",
        images: [
          {
            src: kokedamaCalathea.url,
            alt: "Kokedama de calathea variegada sobre su bola de fibra vegetal, con la etiqueta de AGAIA, frente a una pared de ladrillo",
          },
          {
            src: kokedamaHelecho.url,
            alt: "Kokedama de helecho nido de ave sobre una mesa de madera, frente a una pared de ladrillo",
          },
          {
            src: kokedamaSuculenta.url,
            alt: "Mini kokedama con una suculenta sostenida en la palma de la mano",
          },
        ],
        desc:
          "Las kokedamas reemplazan la maceta por una esfera de musgo natural, creando una forma diferente y elegante de disfrutar las plantas. Ideales para espacios minimalistas.",
        benefits: ["Incluye guía digital de cuidado.", "Tarjeta de regalo (si deseas)."],
        ingredients: ["Especies según disponibilidad"],
        use: "Sumerge la esfera en agua cada 7–10 días según la especie. Sigue la guía de cuidado.",
        presentations: [
          { size: "Kokedama Pequeño", price: "$30.000" },
          { size: "Kokedama Mediano", price: "$65.000" },
          { size: "Kokedama Grande", price: "$120.000" },
        ],
      },
    ],
  },
  {
    id: "manta-origen",
    label: "Manta Origen",
    intro:
      "Manta de conexión a tierra (Grounding) diseñada para ayudarte a experimentar los beneficios del contacto con la Tierra desde la comodidad de tu hogar.",
    products: [
      {
        name: "Manta Origen Sencilla",
        tag: "🏷️ 132 × 69 cm (52 × 27 in)",
        images: [
          {
            src: mantaOrigenKit.url,
            alt: "Kit Manta Origen completo: bolsa de lino, manta con el parche de conexión, folleto, bruma de ambiente y cable de tierra sobre fondo neutro",
          },
          {
            src: mantaOrigenFlatlay.url,
            alt: "Manta Origen doblada sobre tela de lino junto a su bolsa y un cojín terracota",
          },
          {
            src: mantaOrigenPiedra.url,
            alt: "Bolsa de lino con la Manta Origen sobre repisas de piedra travertina con hojas verdes",
          },
        ],
        desc: "Ideal para uso individual mientras trabajas, lees, meditas o descansas.",
        benefits: [
          "95% algodón + 5% hilos de plata conductores.",
          "Incluye cable de conexión a tierra, bolsa de lino, Agua de Linos AGAIA y guía de uso.",
        ],
        ingredients: ["Algodón", "Hilos de plata conductores"],
        use: "Conecta el cable a la manta y a una toma con polo a tierra. Pon una parte de tu piel en contacto directo con la manta.",
        presentations: [{ size: "Sencilla · 132 × 69 cm", price: "$230.000" }],
      },
      {
        name: "Manta Origen Doble",
        tag: "🏷️ 203 × 152 cm (80 × 60 in)",
        images: [
          {
            src: mantaOrigenUso.url,
            alt: "Mujer durmiendo con la Manta Origen extendida y conectada a la toma de tierra",
          },
          {
            src: mantaOrigenKit.url,
            alt: "Kit Manta Origen completo: bolsa de lino, manta con el parche de conexión, folleto, bruma de ambiente y cable de tierra sobre fondo neutro",
          },
          {
            src: mantaOrigenExterior.url,
            alt: "Kit Manta Origen sobre madera y raíces de árbol, acompañado de flores blancas",
          },
        ],
        desc: "Perfecta para usar en la cama durante el descanso o compartida en espacios amplios.",
        benefits: [
          "95% algodón + 5% hilos de plata conductores.",
          "Incluye cable de conexión a tierra, bolsa de lino, Agua de Linos AGAIA y guía de uso.",
        ],
        ingredients: ["Algodón", "Hilos de plata conductores"],
        use: "Conecta el cable a la manta y a una toma con polo a tierra. Ideal para usar durante el sueño.",
        presentations: [{ size: "Doble · 203 × 152 cm", price: "$350.000" }],
      },
    ],
  },
];

function normalizeProductQuery(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, " ").split(/\s+/).filter(word => word && word !== "de").join(" ");
}

export function findProductName(query: string): string | undefined {
  const normalized = normalizeProductQuery(query);
  if (!normalized) return undefined;
  const products = CATEGORIES.flatMap(category => category.products);
  return (products.find(product => normalizeProductQuery(product.name) === normalized) ?? products.find(product => normalizeProductQuery(product.name).startsWith(normalized)))?.name;
}

export function Products() {
  const [active, setActive] = useState<string>("todos");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [pendingProduct, setPendingProduct] = useState<string | null>(null);
  const lastCard = useRef<HTMLElement | null>(null);
  function openProduct(product: Product, card: HTMLElement) {
    lastCard.current = card;
    setSelectedProduct(product);
  }
  useEffect(() => {
    function readHash() {
      let query: string;
      try { query = decodeURIComponent(window.location.hash.slice(1)); } catch { return; }
      const name = findProductName(query);
      if (!name) return;
      const targetCategory = CATEGORIES.find(item => item.products.some(product => product.name === name));
      if (!targetCategory) return;
      setActive(targetCategory.id);
      setPendingProduct(name);
    }
    readHash();
    window.addEventListener("hashchange", readHash);
    return () => window.removeEventListener("hashchange", readHash);
  }, []);
  useEffect(() => {
    if (!pendingProduct) return;
    const targetCategory = CATEGORIES.find(item => item.id === active);
    if (!targetCategory) return;
    const index = targetCategory.products.findIndex(product => product.name === pendingProduct);
    const product = targetCategory.products[index];
    if (!product) return;
    if (targetCategory.products.length > 2 && !carouselApi) return;
    const frame = requestAnimationFrame(() => {
      const card = document.getElementById(pendingProduct);
      if (!card) return;
      if (targetCategory.products.length > 2) carouselApi?.scrollTo(index, true);
      window.scrollTo({ top: Math.max(0, card.getBoundingClientRect().top + window.scrollY - 120), behavior: "instant" });
      lastCard.current = card;
      setSelectedProduct(product);
      setPendingProduct(null);
    });
    return () => cancelAnimationFrame(frame);
  }, [active, carouselApi, pendingProduct]);
  const category =
    active === "todos"
      ? {
          id: "todos",
          label: "Todos",
          intro: undefined,
          products: CATEGORIES.flatMap((c) => c.products),
        }
      : CATEGORIES.find((c) => c.id === active) ?? CATEGORIES[0];
  const tabs = [{ id: "todos", label: "Todos" }, ...CATEGORIES.map((c) => ({ id: c.id, label: c.label }))];

  return (
    <section id="productos" className="pb-20 md:pb-24 pt-0">
      <div className="container-prose">
        <div className="max-w-2xl mb-10">
          <span className="eyebrow">Catálogo</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-primary leading-tight">
            Productos AGAIA
          </h2>
          <p className="mt-4 text-foreground/70">
            Explora nuestro laboratorio botánico por categoría: aguas de linos, jabones, kits,
            aceites, sales, plantas y Manta Origen.
          </p>
        </div>

        {/* Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-12 border-b border-border/60 pb-4">
          {tabs.map((c) => {
            const isActive = c.id === active;
            return (
              <Button variant="ghost"
                role="tab" aria-selected={isActive}
                key={c.id}
                onClick={() => setActive(c.id)}
                className={`h-auto whitespace-normal w-full px-4 py-2.5 rounded-full text-center text-xs uppercase tracking-[0.2em] transition-colors ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground/60 hover:text-primary hover:bg-secondary/40"
                }`}
              >
                {c.label}
              </Button>
            );
          })}
        </div>

        {category.intro && (
          <p className="max-w-3xl text-sm md:text-base text-foreground/70 mb-10 italic">
            {category.intro}
          </p>
        )}

        {(() => {
          const cards = category.products.map((p, i) => (
            <Reveal key={p.name} delay={i * 40} className="h-full min-w-0">
              <article id={p.name} role="button" tabIndex={0} aria-label={`Ver ${p.name}`} aria-haspopup="dialog"
                onClick={(event) => openProduct(p, event.currentTarget)}
                onKeyDown={(event) => { if (event.target === event.currentTarget && (event.key === "Enter" || event.key === " ")) { event.preventDefault(); openProduct(p, event.currentTarget); } }}
                className="group flex h-[450px] sm:h-[466px] w-full min-w-0 max-w-full cursor-pointer scroll-mt-36 flex-col overflow-hidden rounded-lg border border-border/60 bg-card shadow-[var(--shadow-soft)] transition-shadow hover:shadow-[var(--shadow-glow)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                <div className="h-[250px] sm:h-[266px] shrink-0 overflow-hidden bg-secondary/40">
                  {p.images?.length ? <ProductGallery images={p.images} name={p.name} /> : p.image ? <img src={p.image} alt={p.name} loading="lazy" className="h-48 sm:h-52 w-full object-cover" /> : null}
                </div>
                <div className="flex min-h-0 min-w-0 flex-1 flex-col p-4">
                  <p className="min-h-4 truncate text-xs text-muted-foreground">{p.tag ?? "Bienestar AGAIA"}</p>
                  <h3 className="mt-2 line-clamp-2 min-h-12 break-words font-display text-xl leading-6 text-primary">{p.name}</h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-5 text-foreground/75">{p.desc}</p>
                  <p className="mt-auto flex items-center justify-between gap-2 border-t border-border/60 pt-3 text-sm">
                    <span className="truncate text-muted-foreground">{p.presentations[0]?.size}</span>
                    <span className="shrink-0 font-medium text-primary">{p.presentations[0]?.price}</span>
                  </p>
                </div>
              </article>
            </Reveal>
          ));

          if (active !== "todos" && category.products.length > 2) {
            return (
              <Carousel key={active} setApi={setCarouselApi} opts={{ align: "start", loop: false }} className="w-full min-w-0">
                <CarouselContent className="-ml-4">
                  {cards.map((card, i) => (
                    <CarouselItem key={i} className="pl-4 min-w-0 md:basis-1/2 lg:basis-1/3 h-full">
                      {card}
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="mt-6 flex justify-end gap-2">
                  <CarouselPrevious className="static translate-y-0" />
                  <CarouselNext className="static translate-y-0" />
                </div>
              </Carousel>
            );
          }
          return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 items-stretch">{cards}</div>;
        })()}

        {/* Kits Empresariales — texto tal cual del brief */}
        {category.id === "kits" && (
          <Reveal className="mt-12">
            <div className="p-8 md:p-10 rounded-3xl bg-primary text-primary-foreground">
              <div className="max-w-3xl mx-auto text-center">
                <span className="eyebrow text-secondary">Kits Empresariales</span>
                <h3 className="mt-3 font-display text-2xl md:text-3xl">
                  Regalos con intención para empresas, equipos y eventos especiales
                </h3>
                <p className="mt-4 text-sm md:text-base text-primary-foreground/85 leading-relaxed">
                  Creamos regalos con intención para empresas, equipos y eventos especiales.
                </p>
                <p className="mt-3 text-sm md:text-base text-primary-foreground/85 leading-relaxed">
                  Diseñamos cada propuesta de forma personalizada, combinando nuestros productos
                  según las necesidades, presupuesto y objetivo de cada empresa. Porque creemos
                  que un buen regalo también puede convertirse en una experiencia de bienestar.
                </p>
                 <p className="mt-4 italic text-primary-foreground/90">
                   Hablemos y creemos juntos el detalle perfecto para tu equipo.
                 </p>
                 <div className="mt-8 grid grid-cols-3 gap-3">
                   {[
                     {
                       src: kitsEmpresarialesRegalo.url,
                       alt: "Caja de regalo kraft cerrada con lazo verde oliva, junto al Agua de Linos y el Jabón de Manos y Cuerpo Energía Vital en su bandeja negra y una tarjeta personalizada",
                     },
                     {
                       src: kitsEmpresarialesCajaAbierta.url,
                       alt: "Caja de regalo abierta con sales relajantes de canela, las tres brumas de ambiente en miniatura, un saquito de tela y una tarjeta de agradecimiento",
                     },
                     {
                       src: kitsEmpresarialesProduccion.url,
                       alt: "Cajas kraft abiertas con saquitos de tela y la guía de beneficios, usos y sugerencias del roll-on, preparadas para una entrega corporativa",
                     },
                   ].map((foto) => (
                     <img
                       key={foto.src}
                       src={foto.src}
                       alt={foto.alt}
                       loading="lazy"
                       className="aspect-[4/5] w-full rounded-2xl object-cover"
                     />
                   ))}
                 </div>
                 <a
                  href={waLink("Hola, quiero cotizar detalles o experiencias personalizadas para mi empresa.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center px-6 py-3 rounded-full bg-secondary text-primary text-xs uppercase tracking-[0.22em] hover:bg-secondary/90 transition-colors"
                >
                  Cotiza tus detalles o experiencias personalizados
                </a>
              </div>
            </div>
          </Reveal>
        )}
      </div>
      <Dialog open={selectedProduct !== null} onOpenChange={(open) => { if (!open) setSelectedProduct(null); }}>
        {selectedProduct && <DialogContent className="max-h-[90dvh] w-[calc(100%-2rem)] min-w-0 max-w-2xl overflow-y-auto rounded-lg p-5 sm:p-7" onCloseAutoFocus={(event) => { event.preventDefault(); lastCard.current?.focus({ preventScroll: true }); }}>
          <DialogTitle className="pr-6 font-display text-2xl text-primary">{selectedProduct.name}</DialogTitle>
          {selectedProduct.tag && <p className="text-sm text-muted-foreground">{selectedProduct.tag}</p>}
          {selectedProduct.images?.length ? <ProductGallery key={selectedProduct.name} images={selectedProduct.images} name={selectedProduct.name} detail /> : selectedProduct.image ? <img src={selectedProduct.image} alt={selectedProduct.name} className="h-64 w-full object-cover rounded-lg" /> : null}
          <DialogDescription className="text-sm leading-relaxed text-foreground/75">{selectedProduct.desc}</DialogDescription>
          <div><h4 className="font-medium text-primary">Beneficios y detalles</h4><ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-foreground/75">{selectedProduct.benefits.map(b => <li key={b}>{b}</li>)}</ul></div>
          <div><h4 className="font-medium text-primary">Ingredientes y materiales</h4><p className="mt-2 text-sm text-foreground/75">{selectedProduct.ingredients.join(" · ")}</p></div>
          <div><h4 className="font-medium text-primary">Modo de uso</h4><p className="mt-2 text-sm text-foreground/75">{selectedProduct.use}</p></div>
          <div><h4 className="font-medium text-primary">Presentaciones y precios</h4><ul className="mt-2 divide-y divide-border/60">{selectedProduct.presentations.map(pr => <li key={pr.size} className="flex justify-between gap-4 py-2 text-sm"><span className="min-w-0 break-words text-foreground/75">{pr.size}</span><span className="shrink-0 font-medium text-primary">{pr.price}</span></li>)}</ul></div>
          <Button asChild className="h-auto whitespace-normal py-3 text-center"><a href={waLink(`Hola, me interesa: ${selectedProduct.name}.`)} target="_blank" rel="noopener noreferrer">Consultar por WhatsApp</a></Button>
        </DialogContent>}
      </Dialog>
    </section>
  );
}
