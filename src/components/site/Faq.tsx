import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "¿Los productos son naturales?", a: "Sí. Trabajamos con ingredientes de origen natural seleccionados de forma consciente, priorizando formulaciones limpias y sensoriales." },
  { q: "¿Dónde puedo comprarlos?", a: "Puedes escribirnos por nuestros canales de contacto y te indicamos puntos de venta y disponibilidad actualizada." },
  { q: "¿Hacen envíos?", a: "Sí, realizamos envíos nacionales. Cuéntanos tu ubicación y coordinamos el método más conveniente." },
  { q: "¿Puedo venderlos en mi tienda?", a: "Sí, contamos con un programa para distribuidores y aliados comerciales. Escríbenos seleccionando 'Distribución' en el formulario." },
  { q: "¿Cómo se usan los productos?", a: "Cada línea incluye una guía sencilla de uso pensada como un pequeño ritual diario." },
  { q: "¿Los productos tienen contraindicaciones?", a: "Nuestros productos son de uso cosmético y de bienestar. Recomendamos realizar siempre una prueba de sensibilidad antes del primer uso." },
  { q: "¿Cómo puedo contactar a la marca?", a: "A través del formulario de esta página, WhatsApp o nuestras redes sociales. Respondemos en horario laboral." },
];

export function Faq() {
  return (
    <section className="py-24 md:py-32 bg-secondary/40">
      <div className="container-prose grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <span className="eyebrow">Preguntas</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-primary leading-tight">
            Lo que más nos preguntan.
          </h2>
          <p className="mt-6 text-foreground/70">Si no encuentras lo que buscas, escríbenos directamente.</p>
        </div>
        <div className="lg:col-span-8">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`}
                className="bg-background rounded-2xl border border-border/60 px-6">
                <AccordionTrigger className="text-left font-display text-lg text-primary hover:no-underline py-5">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-foreground/70 leading-relaxed pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
