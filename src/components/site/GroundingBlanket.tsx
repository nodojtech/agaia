import grounding from "@/assets/grounding-blanket.jpg";
import { Sparkles, Moon, HeartPulse, Leaf } from "lucide-react";
import { waLink } from "@/lib/site-config";

const benefits = [
  { icon: Moon,       title: "Sueño más profundo",     desc: "Favorece el descanso reparador al regular el ritmo natural del cuerpo." },
  { icon: HeartPulse, title: "Calma el sistema nervioso", desc: "Ayuda a reducir la tensión acumulada y a encontrar equilibrio." },
  { icon: Sparkles,   title: "Energía equilibrada",    desc: "Reconecta con la frecuencia natural de la tierra durante el día." },
  { icon: Leaf,       title: "Materiales conscientes", desc: "Algodón orgánico tejido con hilos conductores de cobre puro." },
];

export function GroundingBlanket() {
  return (
    <div className="pt-32 md:pt-40">
      {/* Hero */}
      <section className="container-prose grid lg:grid-cols-12 gap-12 items-center pb-20">
        <div className="lg:col-span-6 order-2 lg:order-1">
          <span className="eyebrow">Nuevo · Edición limitada</span>
          <h1 className="mt-3 font-display text-4xl md:text-6xl text-primary leading-tight">
            Manta de grounding
          </h1>
          <p className="mt-5 text-foreground/70 max-w-xl">
            Una pieza diseñada para reconectarte con la tierra. Tejida en algodón orgánico
            con hilos de cobre puro, la manta de grounding canaliza la energía natural del
            suelo para devolverte calma, descanso y presencia.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={waLink("Hola, quiero información sobre la Manta de grounding de Agaia.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground text-xs uppercase tracking-[0.22em] hover:bg-primary/90 transition-colors"
            >
              Consultar por WhatsApp
            </a>
            <a
              href="#detalles"
              className="inline-flex items-center px-6 py-3 rounded-full border border-primary/30 text-primary text-xs uppercase tracking-[0.22em] hover:bg-primary/5 transition-colors"
            >
              Conocer detalles
            </a>
          </div>
        </div>
        <div className="lg:col-span-6 order-1 lg:order-2">
          <div className="rounded-[2rem] overflow-hidden shadow-[var(--shadow-glow)] aspect-[4/5]">
            <img src={grounding} alt="Manta de grounding Agaia" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="detalles" className="py-20 md:py-24 bg-secondary/40">
        <div className="container-prose">
          <div className="max-w-2xl">
            <span className="eyebrow">Beneficios sensoriales</span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl text-primary leading-tight">
              Una práctica diaria para volver al cuerpo
            </h2>
            <p className="mt-4 text-foreground/70">
              Inspirada en la tradición ancestral del earthing, la manta acompaña tus momentos
              de descanso, meditación o lectura, recordándote que la calma también se cultiva
              en lo cotidiano.
            </p>
          </div>
          <ul className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <li key={b.title} className="p-6 rounded-2xl bg-card border border-border/60">
                  <div className="h-11 w-11 rounded-full bg-primary/10 text-primary inline-flex items-center justify-center">
                    <Icon size={18} strokeWidth={1.4} />
                  </div>
                  <p className="mt-4 font-display text-lg text-primary leading-tight">{b.title}</p>
                  <p className="mt-2 text-xs text-foreground/65 leading-relaxed">{b.desc}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Specs + Ritual */}
      <section className="py-20 md:py-28">
        <div className="container-prose grid lg:grid-cols-2 gap-12">
          <div>
            <span className="eyebrow">Materiales</span>
            <h3 className="mt-3 font-display text-3xl text-primary leading-tight">
              Tejida con consciencia
            </h3>
            <ul className="mt-6 space-y-3 text-sm text-foreground/75">
              <li>· 95% algodón orgánico certificado</li>
              <li>· 5% hilos conductores de cobre puro</li>
              <li>· Medidas: 1.50 m × 2.00 m</li>
              <li>· Tonos tierra inspirados en la paleta Agaia</li>
              <li>· Empacada en bolsa de lino reutilizable</li>
            </ul>
          </div>
          <div>
            <span className="eyebrow">Ritual sugerido</span>
            <h3 className="mt-3 font-display text-3xl text-primary leading-tight">
              Tu pausa para volver
            </h3>
            <ol className="mt-6 space-y-4 text-sm text-foreground/75">
              <li><span className="text-primary">01.</span> Extiende la manta sobre una superficie cómoda, preferiblemente cerca de una planta o ventana.</li>
              <li><span className="text-primary">02.</span> Respira profundo tres veces, sintiendo el peso del cuerpo.</li>
              <li><span className="text-primary">03.</span> Permanece entre 10 y 20 minutos en silencio, lectura o meditación.</li>
              <li><span className="text-primary">04.</span> Cierra el ritual agradeciendo el momento de calma.</li>
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
}
