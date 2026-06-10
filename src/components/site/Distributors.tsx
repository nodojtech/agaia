import { Store, FileText, HeartHandshake, Sparkles, Gift, Headphones } from "lucide-react";
import { waLink } from "@/lib/site-config";

const benefits = [
  { icon: Store,         title: "Precios mayoristas",       desc: "Condiciones especiales para distribuidores." },
  { icon: FileText,      title: "Catálogo mayorista",       desc: "Acceso a línea completa y novedades." },
  { icon: HeartHandshake,title: "Acompañamiento comercial", desc: "Asesoría continua para tu negocio." },
  { icon: Sparkles,      title: "Identidad de marca",       desc: "Productos con narrativa y estética cuidada." },
  { icon: Gift,          title: "Regalos corporativos",     desc: "Cajas botánicas a medida para tu equipo." },
  { icon: Headphones,    title: "Asesoría directa",         desc: "Conversa con nuestro equipo cuando lo necesites." },
];

export function Distributors() {
  return (
    <section id="distribuidores" className="py-20 md:py-28">
      <div className="container-prose">
        <div className="rounded-[2rem] bg-primary text-primary-foreground p-8 md:p-14 overflow-hidden relative">
          <div aria-hidden className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-secondary/15 blur-3xl" />
          <div className="relative grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <span className="eyebrow text-secondary">Distribuidores</span>
              <h2 className="mt-3 font-display text-4xl md:text-5xl leading-tight">
                ¿Quieres distribuir Agaia?
              </h2>
              <p className="mt-5 text-primary-foreground/75 max-w-md">
                Lleva nuestros rituales botánicos a tu tienda, spa, hotel, concept store o
                comunidad de bienestar. Buscamos aliados que compartan nuestra filosofía.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={waLink("Hola, quiero recibir información para distribuir productos Agaia.")} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 rounded-full bg-secondary text-primary text-xs uppercase tracking-[0.22em] hover:bg-secondary/90 transition-colors">
                  Quiero ser distribuidor
                </a>
                <a href="#contacto"
                  className="inline-flex items-center px-6 py-3 rounded-full border border-primary-foreground/30 text-primary-foreground text-xs uppercase tracking-[0.22em] hover:bg-primary-foreground/10 transition-colors">
                  Solicitar información
                </a>
              </div>
            </div>

            <ul className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {benefits.map((b) => {
                const Icon = b.icon;
                return (
                  <li key={b.title} className="p-5 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur">
                    <Icon size={20} strokeWidth={1.3} className="text-secondary" />
                    <p className="mt-3 font-display text-lg">{b.title}</p>
                    <p className="mt-1 text-xs text-primary-foreground/70 leading-relaxed">{b.desc}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
