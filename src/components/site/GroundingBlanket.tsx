import grounding from "@/assets/grounding-blanket.jpg";
import { Sparkles, Moon, HeartPulse, Leaf, Wind, Repeat, ExternalLink } from "lucide-react";
import { waLink } from "@/lib/site-config";

const benefits = [
  { icon: Moon, title: "Calma y relajación", desc: "Favorece una sensación de calma y de descanso profundo." },
  { icon: HeartPulse, title: "Mejor descanso", desc: "Contribuye a mejorar la calidad del sueño." },
  { icon: Wind, title: "Menos tensión", desc: "Ayuda a disminuir la sensación de estrés acumulado." },
  { icon: Repeat, title: "Recuperación", desc: "Acompaña la recuperación después de la actividad física." },
  { icon: Sparkles, title: "Meditación", desc: "Acompaña prácticas de meditación, respiración y bienestar." },
  { icon: Leaf, title: "Hábito consciente", desc: "Incorpora la conexión con la naturaleza en tu rutina diaria." },
];

const usos = [
  { emoji: "🌙", label: "Dormir" },
  { emoji: "💻", label: "Trabajar" },
  { emoji: "📖", label: "Leer" },
  { emoji: "🧘", label: "Meditar" },
  { emoji: "📺", label: "Ver televisión" },
];

const faq = [
  {
    q: "¿Es segura si duermo con otra persona o con mi mascota?",
    a: "Sí. Compartir la cama con otra persona o una mascota no representa un riesgo para el funcionamiento de la manta. Cada cuerpo interactúa de forma independiente con la superficie conductora.",
  },
  {
    q: "¿Cómo debo lavar mi Manta Origen?",
    a: "Se recomienda lavarla a mano o en ciclo delicado con agua fría y jabón suave. Evita el uso de blanqueadores, suavizantes y el secado a altas temperaturas para proteger los hilos de plata conductores. Te recomendamos secarla al aire libre.",
  },
  {
    q: "¿Existe riesgo de recibir una descarga eléctrica?",
    a: "No. La manta no genera ni transmite electricidad al cuerpo. Únicamente se conecta al polo a tierra de la instalación eléctrica para permitir la conexión con el potencial eléctrico natural de la Tierra.",
  },
  {
    q: "¿Cuánto tiempo debo usarla para sentir resultados?",
    a: "No existe un tiempo único para todas las personas. Algunas reportan una sensación de bienestar desde los primeros usos, mientras que otras la incorporan como parte de su rutina diaria durante períodos más prolongados. La constancia suele ser un factor importante.",
  },
  {
    q: "¿Puedo usarla si tengo un marcapasos u otro dispositivo médico implantado?",
    a: "Si utilizas un marcapasos, desfibrilador u otro dispositivo médico implantado, te recomendamos consultar previamente con tu médico tratante antes de usar cualquier producto de conexión a tierra.",
  },
];

const research = [
  {
    title: "Practical applications of grounding to support health",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10105020/",
  },
  {
    title: "The effects of grounding on inflammation, immune response, wound healing and chronic inflammatory diseases",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4378297/",
  },
  {
    title: "Earthing: Health Implications of Reconnecting the Human Body to the Earth's Surface Electrons",
    url: "https://pubmed.ncbi.nlm.nih.gov/22291721/",
  },
  {
    title: "The biologic effects of grounding the human body during sleep",
    url: "https://pubmed.ncbi.nlm.nih.gov/15650465/",
  },
  {
    title: "Otras investigaciones en PubMed",
    url: "https://pubmed.ncbi.nlm.nih.gov/31831261/",
  },
];

export function GroundingBlanket() {
  return (
    <div className="pt-32 md:pt-40">
      {/* Hero */}
      <section className="container-prose grid lg:grid-cols-12 gap-12 items-center pb-20">
        <div className="lg:col-span-6 order-2 lg:order-1">
          <span className="eyebrow">Manta Origen</span>
          <h1 className="mt-3 font-display text-4xl md:text-6xl text-primary leading-tight">
            Conecta con la naturaleza,<br />
            <em className="font-light italic">incluso desde casa.</em>
          </h1>
          <p className="mt-5 text-foreground/70 max-w-xl">
            Una experiencia de bienestar inspirada en el contacto natural con la Tierra.
            Manta de conexión a tierra (Grounding) para incorporar este hábito a tu rutina diaria
            desde la comodidad de tu hogar.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={waLink("Hola, quiero comprar Manta Origen.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground text-xs uppercase tracking-[0.22em] hover:bg-primary/90 transition-colors"
            >
              Comprar Manta Origen
            </a>
            <a
              href="#laboratorio"
              className="inline-flex items-center px-6 py-3 rounded-full border border-primary/30 text-primary text-xs uppercase tracking-[0.22em] hover:bg-primary/5 transition-colors"
            >
              Laboratorio de Grounding
            </a>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 max-w-md">
            <div className="p-4 rounded-2xl bg-card border border-border/60">
              <p className="text-[0.65rem] uppercase tracking-[0.22em] text-foreground/55">Sencilla</p>
              <p className="mt-1 text-sm text-foreground/75">132 × 69 cm</p>
              <p className="mt-1 font-display text-lg text-primary">$230.000</p>
            </div>
            <div className="p-4 rounded-2xl bg-card border border-border/60">
              <p className="text-[0.65rem] uppercase tracking-[0.22em] text-foreground/55">Doble</p>
              <p className="mt-1 text-sm text-foreground/75">203 × 152 cm</p>
              <p className="mt-1 font-display text-lg text-primary">$350.000</p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-6 order-1 lg:order-2">
          <div className="rounded-[2rem] overflow-hidden shadow-[var(--shadow-glow)] aspect-[4/5]">
            <img src={grounding} alt="Manta Origen AGAIA" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {/* Qué es + Cómo funciona */}
      <section className="py-20 bg-secondary/40">
        <div className="container-prose grid lg:grid-cols-2 gap-12">
          <div>
            <span className="eyebrow">¿Qué es Manta Origen?</span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl text-primary leading-tight">
              Volver al hábito de conectar
            </h2>
            <p className="mt-5 text-sm md:text-base text-foreground/75 leading-relaxed">
              Cada vez pasamos más tiempo en interiores, rodeados de pantallas y alejados del
              contacto con la naturaleza. Manta Origen nace como una forma sencilla de volver a
              incorporar ese hábito a tu rutina diaria, sin necesidad de caminar descalzo sobre
              el césped, la arena o la tierra.
            </p>
            <p className="mt-4 text-sm md:text-base text-foreground/75 leading-relaxed">
              En AGAIA creemos que el bienestar también se cultiva a través de pequeños hábitos.
              Por eso, fue creada para acompañarte en momentos de descanso, lectura, trabajo o
              relajación.
            </p>
          </div>
          <div>
            <span className="eyebrow">¿Cómo funciona?</span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl text-primary leading-tight">
              Tejido conductor
            </h2>
            <p className="mt-5 text-sm md:text-base text-foreground/75 leading-relaxed">
              Manta Origen está elaborada con un tejido compuesto por <strong>95% algodón y 5%
              hilos de plata conductores.</strong> Cuando se conecta correctamente a una toma con
              polo a tierra, los hilos de plata permiten establecer la conexión con el potencial
              eléctrico natural de la Tierra.
            </p>
            <p className="mt-4 text-sm md:text-base text-foreground/75 leading-relaxed">
              Al entrar en contacto directo con la manta, puedes incorporar la práctica del
              grounding a tu rutina diaria de una forma sencilla, práctica y cómoda.
            </p>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-20 md:py-24">
        <div className="container-prose">
          <div className="max-w-2xl mb-10">
            <span className="eyebrow">Beneficios</span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl text-primary leading-tight">
              Bienestar asociado a la práctica
            </h2>
            <p className="mt-4 text-foreground/70 text-sm">
              Diversos estudios han explorado la relación entre el grounding y el bienestar general.
              Aunque cada persona puede experimentar resultados diferentes, esta práctica se ha asociado con:
            </p>
          </div>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
          <p className="mt-8 text-xs text-foreground/60 italic max-w-3xl">
            <strong>Importante:</strong> Manta Origen es un producto de bienestar y no sustituye
            tratamientos médicos, medicamentos ni el diagnóstico de profesionales de la salud.
          </p>
        </div>
      </section>

      {/* Composición + Incluye + Cómo usar */}
      <section className="py-20 bg-secondary/40">
        <div className="container-prose grid lg:grid-cols-3 gap-8">
          <div className="p-7 rounded-3xl bg-card border border-border/60">
            <span className="eyebrow">¿De qué está hecha?</span>
            <h3 className="mt-3 font-display text-2xl text-primary">Composición</h3>
            <ul className="mt-5 space-y-2 text-sm text-foreground/75">
              <li>🌿 95% Algodón</li>
              <li>✨ 5% Hilos de plata conductores</li>
            </ul>
          </div>
          <div className="p-7 rounded-3xl bg-card border border-border/60">
            <span className="eyebrow">¿Qué incluye tu compra?</span>
            <h3 className="mt-3 font-display text-2xl text-primary">Kit completo</h3>
            <ul className="mt-5 space-y-2 text-sm text-foreground/75">
              <li>✓ Tu Manta Origen</li>
              <li>✓ Cable de conexión a tierra</li>
              <li>✓ Bolsa de lino</li>
              <li>✓ Agua de Linos AGAIA</li>
              <li>✓ Guía de uso</li>
            </ul>
          </div>
          <div className="p-7 rounded-3xl bg-card border border-border/60">
            <span className="eyebrow">¿Cómo usarla?</span>
            <h3 className="mt-3 font-display text-2xl text-primary">4 pasos</h3>
            <ol className="mt-5 space-y-3 text-sm text-foreground/75">
              <li><span className="text-primary">01.</span> Conecta el cable a tu Manta Origen.</li>
              <li><span className="text-primary">02.</span> Conecta el otro extremo a una toma con polo a tierra.</li>
              <li><span className="text-primary">03.</span> Coloca una parte de tu piel en contacto directo con la manta.</li>
              <li><span className="text-primary">04.</span> Disfruta de tu momento de bienestar.</li>
            </ol>
            <div className="mt-6 pt-6 border-t border-border/60">
              <p className="text-[0.65rem] uppercase tracking-[0.22em] text-foreground/55 mb-2">
                Puedes usarla mientras
              </p>
              <ul className="flex flex-wrap gap-2">
                {usos.map((u) => (
                  <li key={u.label} className="px-3 py-1.5 rounded-full bg-secondary/60 text-xs text-primary/80">
                    {u.emoji} {u.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-24">
        <div className="container-prose max-w-3xl">
          <span className="eyebrow">Preguntas frecuentes</span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl text-primary leading-tight">
            Todo lo que quieres saber
          </h2>
          <div className="mt-8 space-y-3">
            {faq.map((f) => (
              <details key={f.q} className="group p-5 rounded-2xl bg-card border border-border/60">
                <summary className="cursor-pointer font-display text-lg text-primary flex items-center justify-between gap-4 list-none">
                  <span>{f.q}</span>
                  <span className="text-primary/50 group-open:rotate-45 transition-transform text-xl">+</span>
                </summary>
                <p className="mt-4 text-sm text-foreground/75 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Laboratorio de Grounding */}
      <section id="laboratorio" className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container-prose">
          <div className="max-w-3xl">
            <span className="eyebrow text-secondary">Laboratorio de Grounding</span>
            <h2 className="mt-3 font-display text-3xl md:text-5xl leading-tight">
              Todo lo que necesitas saber sobre el Grounding
            </h2>
            <p className="mt-5 text-primary-foreground/80">
              Creemos que el bienestar también comienza entendiendo cómo funciona nuestro cuerpo.
              Reunimos información basada en investigaciones, artículos científicos y recursos
              educativos para que puedas conocer más sobre la conexión a tierra y tomar una decisión informada.
            </p>
          </div>

          <div className="mt-12 grid lg:grid-cols-3 gap-6">
            <div className="p-7 rounded-3xl bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur">
              <p className="eyebrow text-secondary">¿Qué es?</p>
              <h3 className="mt-3 font-display text-xl">Definición</h3>
              <p className="mt-3 text-sm text-primary-foreground/80 italic leading-relaxed">
                "El Grounding, también conocido como Earthing, consiste en establecer contacto
                directo entre el cuerpo humano y la superficie de la Tierra para favorecer el
                intercambio natural de cargas eléctricas."
              </p>
              <p className="mt-3 text-xs text-primary-foreground/60">
                Definición basada en publicaciones de PubMed sobre Earthing (Grounding).
              </p>
            </div>
            <div className="p-7 rounded-3xl bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur">
              <p className="eyebrow text-secondary">¿Qué dice la ciencia?</p>
              <h3 className="mt-3 font-display text-xl">Investigaciones</h3>
              <p className="mt-3 text-sm text-primary-foreground/80 leading-relaxed">
                Investigaciones han estudiado la relación entre el Grounding y aspectos como el
                descanso, el estrés, la inflamación y el bienestar general. Presentamos este
                contenido con fines educativos.
              </p>
            </div>
            <div className="p-7 rounded-3xl bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur">
              <p className="eyebrow text-secondary">Nuestro mundo hoy</p>
              <h3 className="mt-3 font-display text-xl">¿Por qué dejamos de conectar?</h3>
              <p className="mt-3 text-sm text-primary-foreground/80 leading-relaxed">
                Cada vez vivimos más lejos de la naturaleza y más cerca de las pantallas. Manta
                Origen nace para ayudarte a recuperar ese pequeño hábito de conexión, integrándolo
                fácilmente a tu rutina diaria.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <p className="eyebrow text-secondary mb-4">Ver investigaciones</p>
            <ul className="grid md:grid-cols-2 gap-3">
              {research.map((r) => (
                <li key={r.url}>
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 p-4 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors"
                  >
                    <ExternalLink size={16} className="text-secondary shrink-0 mt-0.5" />
                    <span className="text-sm text-primary-foreground/85 leading-snug">{r.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 p-8 rounded-3xl bg-primary-foreground/10 border border-primary-foreground/15 text-center">
            <p className="eyebrow text-secondary">Aprende a usar tu Manta Origen</p>
            <h3 className="mt-3 font-display text-2xl md:text-3xl">Videos prácticos</h3>
            <p className="mt-3 text-sm text-primary-foreground/75 max-w-xl mx-auto">
              Te mostramos cómo instalarla, utilizarla y cuidarla correctamente.
              <span className="block mt-1 opacity-70">(Contenido en preparación)</span>
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href={waLink("Hola, quiero información sobre cómo usar Manta Origen.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-full bg-secondary text-primary text-xs uppercase tracking-[0.22em] hover:bg-secondary/90 transition-colors"
              >
                Ver video
              </a>
              <a
                href={waLink("Hola, quiero comprar Manta Origen.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-full border border-primary-foreground/30 text-primary-foreground text-xs uppercase tracking-[0.22em] hover:bg-primary-foreground/10 transition-colors"
              >
                Comprar Manta Origen
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
