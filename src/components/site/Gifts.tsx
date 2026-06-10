import ritual from "@/assets/ritual.jpg";
import { Gift, PenLine, Package, Send } from "lucide-react";
import { waLink } from "@/lib/site-config";

const steps = [
  { icon: Gift,    title: "Elige el producto o ritual", desc: "Selecciona la experiencia que quieres regalar." },
  { icon: PenLine, title: "Escribe tu mensaje",         desc: "Una tarjeta personalizada hecha a mano." },
  { icon: Package, title: "Lo preparamos con intención", desc: "Empacado con cuidado y detalles botánicos." },
  { icon: Send,    title: "Lo enviamos como regalo",    desc: "Llega directo a quien quieres sorprender." },
];

export function Gifts() {
  return (
    <section id="regalos" className="py-20 md:py-28 bg-secondary/40">
      <div className="container-prose grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 order-2 lg:order-1">
          <div className="rounded-[2rem] overflow-hidden shadow-[var(--shadow-glow)] aspect-[4/5]">
            <img src={ritual} alt="Regalo botánico personalizado" className="h-full w-full object-cover" />
          </div>
        </div>
        <div className="lg:col-span-7 order-1 lg:order-2">
          <span className="eyebrow">Regalos con intención</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-primary leading-tight">
            Regala un ritual personalizado
          </h2>
          <p className="mt-4 text-foreground/70 max-w-xl">
            Envía productos Agaia como regalo, acompañados de una tarjeta personalizada con un mensaje especial.
            Cada caja se prepara a mano con cuidado y detalles botánicos.
          </p>

          <ol className="mt-8 grid sm:grid-cols-2 gap-4">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <li key={s.title} className="flex gap-3 p-4 rounded-2xl bg-card border border-border/60">
                  <div className="h-10 w-10 shrink-0 rounded-full bg-primary/10 text-primary inline-flex items-center justify-center">
                    <Icon size={16} strokeWidth={1.4} />
                  </div>
                  <div>
                    <p className="text-[0.65rem] uppercase tracking-[0.22em] text-primary/60">Paso {i + 1}</p>
                    <p className="mt-1 font-display text-lg text-primary leading-tight">{s.title}</p>
                    <p className="mt-1 text-xs text-foreground/65">{s.desc}</p>
                  </div>
                </li>
              );
            })}
          </ol>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={waLink("Hola, quiero crear un regalo personalizado de Agaia.")} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground text-xs uppercase tracking-[0.22em] hover:bg-primary/90 transition-colors">
              Armar regalo por WhatsApp
            </a>
            <a href="#contacto"
              className="inline-flex items-center px-6 py-3 rounded-full border border-primary/30 text-primary text-xs uppercase tracking-[0.22em] hover:bg-primary/5 transition-colors">
              Enviar un regalo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
