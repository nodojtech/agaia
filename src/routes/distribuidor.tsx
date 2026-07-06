import { createFileRoute } from "@tanstack/react-router";
import { Store, Gift, TreePine, Coffee, Sparkles, Home, Heart, PersonStanding, Check } from "lucide-react";
import { waLink } from "@/lib/site-config";

export const Route = createFileRoute("/distribuidor")({
  head: () => ({
    meta: [
      { title: "Conviértete en Distribuidor — Agaia" },
      { name: "description", content: "Lleva el bienestar de AGAIA a más personas. Descubre cómo distribuir nuestros productos botánicos en tu tienda, concept store, spa o emprendimiento." },
      { property: "og:title", content: "Distribuidor AGAIA" },
      { property: "og:description", content: "Únete a nuestra comunidad de aliados de bienestar." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: DistribuidorPage,
});

const perfiles = [
  { icon: TreePine, label: "Viveros" },
  { icon: Gift, label: "Tiendas de regalos" },
  { icon: Store, label: "Concept stores" },
  { icon: PersonStanding, label: "Estudios de yoga y pilates" },
  { icon: Heart, label: "Centros de bienestar y spas" },
  { icon: Coffee, label: "Cafés y espacios conscientes" },
  { icon: Home, label: "Tiendas de decoración" },
  { icon: Sparkles, label: "Emprendedores del bienestar" },
];

const beneficios = [
  "Precios preferenciales para distribuidores.",
  "Portafolio de productos en constante crecimiento.",
  "Material de apoyo y capacitación sobre nuestros productos.",
  "Acompañamiento comercial.",
  "Una marca con propósito y una comunidad en crecimiento.",
];

const pasos = [
  { n: "01", t: "Escríbenos por WhatsApp", d: "Cuéntanos sobre tu tienda, emprendimiento o proyecto." },
  { n: "02", t: "Solicita nuestra información", d: "Te compartiremos requisitos, beneficios y condiciones." },
  { n: "03", t: "Conoce nuestro portafolio", d: "Te enviaremos nuestro catálogo exclusivo para distribuidores." },
  { n: "04", t: "Elige tus productos", d: "Preparamos tu pedido y lo enviamos hasta donde estés." },
  { n: "05", t: "Comencemos a crecer juntos", d: "Contarás con el acompañamiento de AGAIA para impulsar tu negocio." },
];

function DistribuidorPage() {
  const cta = waLink("Hola, quiero ser distribuidor AGAIA.");
  return (
    <div className="pt-32 md:pt-40">
      <section className="container-prose text-center pb-16">
        <span className="eyebrow">Conviértete en distribuidor</span>
        <h1 className="mt-3 font-display text-4xl md:text-6xl text-primary leading-tight">
          Lleva el bienestar de AGAIA<br />
          <em className="font-light italic">a más personas.</em>
        </h1>
        <p className="mt-5 max-w-2xl mx-auto text-foreground/70">
          Si compartes nuestra pasión por el bienestar, las plantas y las experiencias con
          propósito, nos encantará conocerte. Buscamos aliados que quieran llevar nuestros
          productos a nuevos espacios, ciudades y personas.
        </p>
        <a href={cta} target="_blank" rel="noopener noreferrer"
          className="mt-8 inline-flex items-center px-7 py-3.5 rounded-full bg-primary text-primary-foreground text-xs uppercase tracking-[0.22em] hover:bg-primary/90 transition-colors">
          ✨ Quiero ser distribuidor
        </a>
      </section>

      <section className="py-20 bg-secondary/40">
        <div className="container-prose">
          <div className="max-w-2xl mb-10">
            <span className="eyebrow">¿Quién puede distribuir AGAIA?</span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl text-primary">Nuestros productos son ideales para</h2>
          </div>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {perfiles.map((p) => {
              const Icon = p.icon;
              return (
                <li key={p.label} className="p-5 rounded-2xl bg-card border border-border/60 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 text-primary inline-flex items-center justify-center">
                    <Icon size={18} strokeWidth={1.4} />
                  </div>
                  <p className="text-sm text-foreground/80">{p.label}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="py-20">
        <div className="container-prose grid lg:grid-cols-2 gap-12">
          <div>
            <span className="eyebrow">¿Por qué distribuir AGAIA?</span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl text-primary leading-tight">
              Acceso a un ecosistema de bienestar
            </h2>
            <ul className="mt-6 space-y-3">
              {beneficios.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-foreground/80">
                  <Check size={16} className="text-primary shrink-0 mt-1" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="eyebrow">¿Cómo funciona?</span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl text-primary leading-tight">
              Cinco pasos sencillos
            </h2>
            <ol className="mt-6 space-y-4">
              {pasos.map((p) => (
                <li key={p.n} className="flex gap-4 p-4 rounded-2xl bg-card border border-border/60">
                  <span className="font-display text-2xl text-primary/70 shrink-0">{p.n}</span>
                  <div>
                    <p className="font-display text-lg text-primary">{p.t}</p>
                    <p className="mt-1 text-xs text-foreground/65 leading-relaxed">{p.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground text-center">
        <div className="container-prose max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl">¿Listo para crecer con AGAIA?</h2>
          <a href={cta} target="_blank" rel="noopener noreferrer"
            className="mt-6 inline-flex items-center px-7 py-3.5 rounded-full bg-secondary text-primary text-xs uppercase tracking-[0.22em] hover:bg-secondary/90 transition-colors">
            ✨ Quiero ser distribuidor
          </a>
        </div>
      </section>
    </div>
  );
}
