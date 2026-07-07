import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { waLink } from "@/lib/site-config";
import { Reveal } from "@/components/site/Reveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import calmaImg from "@/assets/product-calma.jpg";
import energiaImg from "@/assets/product-energia.jpg";
import equilibrioImg from "@/assets/product-equilibrio.jpg";
import naturalezaImg from "@/assets/product-naturaleza.jpg";
import grounding from "@/assets/grounding-blanket.jpg";

type Presentation = { size: string; price: string };
type Product = {
  name: string;
  tag?: string;
  desc: string;
  benefits: string[];
  ingredients: string[];
  use: string;
  presentations: Presentation[];
  image?: string;
};

type Category = {
  id: string;
  label: string;
  intro?: string;
  products: Product[];
};

const CATEGORIES: Category[] = [
  {
    id: "aguas-de-linos",
    label: "Aguas de Linos",
    intro:
      "Nuestras Aguas de Linos fueron creadas para transformar espacios cotidianos en experiencias de bienestar. Ideales para aromatizar sábanas, almohadas, cortinas, sofás y espacios del hogar.",
    products: [
      {
        name: "Agua de Linos Gratitud",
        tag: "🤍 Vainilla Bourbon · Calma y descanso",
        image: calmaImg,
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
        image: energiaImg,
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
        image: equilibrioImg,
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
        image: calmaImg,
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
        image: energiaImg,
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
        image: equilibrioImg,
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
        image: calmaImg,
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
        image: energiaImg,
        desc: "Kit ritual con Jabón + Agua de Linos Energía Vital (400 ml) en base kit negra.",
        benefits: ["Frescura y vitalidad para las mañanas."],
        ingredients: ["Naranja", "Aloe Vera", "Vitamina E"],
        use: "Utiliza cada producto según el momento del día que quieras acompañar.",
        presentations: [{ size: "Kit completo", price: "$70.000" }],
      },
      {
        name: "Kit Bienestar Equilibrio Natural",
        tag: "🌿 Eucalipto",
        image: equilibrioImg,
        desc: "Kit ritual con Jabón + Agua de Linos Equilibrio Natural (400 ml) en base kit negra.",
        benefits: ["Renovación y equilibrio en tu espacio y en tu piel."],
        ingredients: ["Eucalipto", "Aloe Vera", "Vitamina E"],
        use: "Utiliza cada producto según el momento del día que quieras acompañar.",
        presentations: [{ size: "Kit completo", price: "$70.000" }],
      },
      {
        name: "Kit Tres Pausas de Bienestar",
        tag: "Tres aromas · Tres intenciones",
        image: naturalezaImg,
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
        image: naturalezaImg,
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
        image: calmaImg,
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
        image: naturalezaImg,
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
        image: equilibrioImg,
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
        image: grounding,
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
        image: grounding,
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

export function Products() {
  const [active, setActive] = useState<string>(CATEGORIES[0].id);
  const category = CATEGORIES.find((c) => c.id === active) ?? CATEGORIES[0];

  return (
    <section id="productos" className="py-20 md:py-24">
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
        <div className="flex flex-wrap gap-2 mb-12 border-b border-border/60 pb-4">
          {CATEGORIES.map((c) => {
            const isActive = c.id === active;
            return (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-[0.2em] transition-colors ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground/60 hover:text-primary hover:bg-secondary/40"
                }`}
              >
                {c.label}
              </button>
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
            <Reveal key={p.name} delay={i * 80} className="h-full">
              <article className="group h-full rounded-3xl bg-card border border-border/60 overflow-hidden shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-glow)] transition-all flex flex-col">
                {p.image && (
                  <div className="aspect-[16/10] overflow-hidden bg-secondary/40">
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  {p.tag && <p className="eyebrow">{p.tag}</p>}
                  <h3 className="mt-3 font-display text-2xl text-primary">{p.name}</h3>
                  <p className="mt-3 text-sm text-foreground/75 leading-relaxed">{p.desc}</p>

                  <details className="mt-5 group/details">
                    <summary className="cursor-pointer text-xs uppercase tracking-[0.22em] text-primary/80 hover:text-primary select-none">
                      Ver detalle
                    </summary>
                    <div className="mt-4 space-y-4 animate-fade-in">
                      <div>
                        <p className="text-[0.65rem] uppercase tracking-[0.22em] text-foreground/55 mb-2">Beneficios</p>
                        <ul className="space-y-1.5 text-sm text-foreground/75">
                          {p.benefits.map((b) => (
                            <li key={b}>✨ {b}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-[0.65rem] uppercase tracking-[0.22em] text-foreground/55 mb-2">Ingredientes destacados</p>
                        <p className="text-sm text-foreground/75">🌿 {p.ingredients.join(" · ")}</p>
                      </div>
                      <div>
                        <p className="text-[0.65rem] uppercase tracking-[0.22em] text-foreground/55 mb-2">Modo de uso</p>
                        <p className="text-sm text-foreground/75">{p.use}</p>
                      </div>
                    </div>
                  </details>

                  <div className="mt-5 pt-5 border-t border-border/60">
                    <p className="text-[0.65rem] uppercase tracking-[0.22em] text-foreground/55 mb-2">Presentaciones</p>
                    <ul className="space-y-1.5">
                      {p.presentations.map((pr) => (
                        <li key={pr.size} className="flex items-start justify-between gap-3 text-sm">
                          <span className="text-foreground/75">{pr.size}</span>
                          <span className="text-primary font-medium whitespace-nowrap">{pr.price}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    <a
                      href={waLink(`Hola, me interesa: ${p.name}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2.5 rounded-full bg-primary text-primary-foreground text-xs uppercase tracking-[0.22em] hover:bg-primary/90 transition-colors"
                    >
                      Consultar
                    </a>
                    {category.id === "manta-origen" && (
                      <Link
                        to="/manta-origen"
                        className="inline-flex items-center px-4 py-2.5 rounded-full border border-primary/30 text-primary text-xs uppercase tracking-[0.22em] hover:bg-primary/5 transition-colors"
                      >
                        Conoce Manta Origen
                      </Link>
                    )}
                    {category.id === "plantas" && (
                      <a
                        href={waLink("Hola, quiero conocer las plantas disponibles.")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2.5 rounded-full border border-primary/30 text-primary text-xs uppercase tracking-[0.22em] hover:bg-primary/5 transition-colors"
                      >
                        Quiero conocer plantas disponibles
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ));

          if (category.products.length > 2) {
            return (
              <Carousel opts={{ align: "start", loop: true }} className="w-full">
                <CarouselContent className="-ml-4">
                  {cards.map((card, i) => (
                    <CarouselItem key={i} className="pl-4 md:basis-1/2 lg:basis-1/2">
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
          return <div className="grid md:grid-cols-2 gap-8">{cards}</div>;
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
    </section>
  );
}
