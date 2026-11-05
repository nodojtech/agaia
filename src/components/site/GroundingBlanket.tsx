import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import mantaOrigenFlatlay from "@/assets/manta-origen-flatlay.png.asset.json";
import mantaOrigenKit from "@/assets/manta-origen-kit.png.asset.json";
import mantaOrigenUso from "@/assets/manta-origen-uso.png.asset.json";
import mantaOrigenPiedra from "@/assets/manta-origen-piedra.png.asset.json";
import mantaOrigenExterior from "@/assets/manta-origen-exterior.png.asset.json";
import { Sparkles, Moon, HeartPulse, Leaf, Wind, Repeat, ExternalLink, BookOpen, FlaskConical, Unplug } from "lucide-react";
import { waLink } from "@/lib/site-config";
import { Reveal } from "@/components/site/Reveal";
import imgCalma from "@/assets/beneficio-calma.jpg";
import imgTension from "@/assets/beneficio-tension.jpg";
import imgRecuperacion from "@/assets/beneficio-recuperacion.jpg";
import imgMeditacion from "@/assets/beneficio-meditacion.jpg";
import imgHabito from "@/assets/beneficio-habito.jpg";

const benefits = [
  { icon: Moon, title: "Calma y relajación", img: imgCalma, desc: "Favorece una sensación de calma y descanso profundo." },
  { icon: HeartPulse, title: "Mejor descanso", img: mantaOrigenUso.url, desc: "Contribuye a mejorar la calidad del sueño." },
  { icon: Wind, title: "Menos tensión", img: imgTension, desc: "Ayuda a disminuir la sensación de estrés acumulado." },
  { icon: Repeat, title: "Recuperación", img: imgRecuperacion, desc: "Acompaña la recuperación después de la actividad física." },
  { icon: Sparkles, title: "Meditación", img: imgMeditacion, desc: "Acompaña prácticas de meditación, respiración y bienestar." },
  { icon: Leaf, title: "Hábito consciente", img: imgHabito, desc: "Incorpora la conexión con la naturaleza en tu rutina diaria." },
];

const usos = [
  { emoji: "📖", label: "lees" },
  { emoji: "💻", label: "trabajas" },
  { emoji: "🧘", label: "meditas" },
  { emoji: "🛋️", label: "descansas" },
  { emoji: "📺", label: "ves televisión" },
  { emoji: "🌙", label: "duermes" },
];

const steps = [
  { n: "01", t: "Conecta el cable a tu Manta Origen." },
  { n: "02", t: "Conecta el otro extremo a una toma con polo a tierra." },
  { n: "03", t: "Coloca una parte de tu piel en contacto directo con la manta." },
  { n: "04", t: "Disfruta de tu momento de bienestar." },
];

const faq = [
  { q: "¿Es segura si duermo con otra persona o con mi mascota?", a: "Sí. Compartir la cama con otra persona o una mascota no representa un riesgo para el funcionamiento de la manta. Cada cuerpo interactúa de forma independiente con la superficie conductora." },
  { q: "¿Cómo debo lavar mi Manta Origen?", a: "Se recomienda lavarla a mano o en ciclo delicado con agua fría y jabón suave. Evita blanqueadores, suavizantes y secado a altas temperaturas para proteger los hilos de plata. Te recomendamos secarla al aire libre." },
  { q: "¿Existe riesgo de recibir una descarga eléctrica?", a: "No. La manta no genera ni transmite electricidad al cuerpo. Únicamente se conecta al polo a tierra para permitir la conexión con el potencial eléctrico natural de la Tierra." },
  { q: "¿Cuánto tiempo debo usarla para sentir resultados?", a: "No existe un tiempo único para todas las personas. Algunas reportan bienestar desde los primeros usos, otras la incorporan como parte de su rutina diaria. La constancia suele ser un factor importante." },
  { q: "¿Puedo usarla si tengo un marcapasos u otro dispositivo médico implantado?", a: "Si utilizas un marcapasos, desfibrilador u otro dispositivo médico implantado, te recomendamos consultar previamente con tu médico tratante antes de usar cualquier producto de conexión a tierra." },
];

// Ordenadas de más cortas a más largas para lograr filas simétricas.
const research = [
  { title: "Otras investigaciones en PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/31831261/" },
  { title: "The biologic effects of grounding the human body during sleep", url: "https://pubmed.ncbi.nlm.nih.gov/15650465/" },
  { title: "Practical applications of grounding to support health", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10105020/" },
  { title: "Earthing: Health Implications of Reconnecting the Human Body to the Earth's Surface Electrons", url: "https://pubmed.ncbi.nlm.nih.gov/22291721/" },
  { title: "The effects of grounding on inflammation, immune response, wound healing and chronic inflammatory diseases", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4378297/" },
];

export function GroundingBlanket() {
  const [photo, setPhoto] = useState<{src: string; alt: string} | null>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [activeBenefit, setActiveBenefit] = useState(0);
  const [activeLab, setActiveLab] = useState(0);
  return (
    <div className="pt-32 md:pt-40">
      {/* 1 · HERO */}
      <section className="container-prose grid lg:grid-cols-12 gap-12 items-center pb-20">
        <Reveal className="lg:col-span-6 order-2 lg:order-1">
          <span className="eyebrow">Manta Origen</span>
          <h1 className="mt-3 font-display text-4xl md:text-6xl text-primary leading-tight">
            Conecta con la naturaleza,<br />
            <em className="font-light italic">incluso desde casa.</em>
          </h1>
          <p className="mt-5 text-foreground/70 max-w-xl">
            Manta de conexión a tierra (Grounding) para incorporar el hábito de estar en contacto
            con la Tierra a tu rutina diaria, desde la comodidad de tu hogar.
          </p>
          <div className="mt-8 flex flex-wrap gap-2.5">
            <a
              href="#que-es"
              className="inline-flex items-center px-5 py-3 rounded-full border border-primary/30 text-primary text-xs uppercase tracking-[0.18em] hover:bg-primary/5 transition-colors"
            >
              ¿Qué es Manta Origen?
            </a>
            <a
              href="#como-funciona"
              className="inline-flex items-center px-5 py-3 rounded-full border border-primary/30 text-primary text-xs uppercase tracking-[0.18em] hover:bg-primary/5 transition-colors"
            >
              ¿Cómo funciona?
            </a>
            <a
              href="#laboratorio"
              className="inline-flex items-center px-5 py-3 rounded-full border border-primary/30 text-primary text-xs uppercase tracking-[0.18em] hover:bg-primary/5 transition-colors"
            >
              Laboratorio de Grounding
            </a>
          </div>
          <div className="mt-4">
            <a
              href={waLink("Hola, quiero comprar Manta Origen.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-7 py-3.5 rounded-full bg-secondary text-primary text-xs uppercase tracking-[0.22em] hover:bg-secondary/80 transition-colors shadow-[var(--shadow-soft)]"
            >
              Comprar Manta Origen
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
        </Reveal>
        <Reveal delay={120} className="lg:col-span-6 order-1 lg:order-2">
          <div className="rounded-[2rem] overflow-hidden shadow-[var(--shadow-glow)] aspect-[4/3]">
            <img
              src={mantaOrigenKit.url}
              alt="Kit Manta Origen completo: bolsa de lino, manta con el parche de conexión, folleto, bruma de ambiente y cable de tierra sobre fondo neutro"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="mt-3 grid grid-cols-3 gap-3">
            {[
              {
                src: mantaOrigenUso.url,
                alt: "Mujer durmiendo con la Manta Origen extendida y conectada a la toma de tierra",
              },
              {
                src: mantaOrigenPiedra.url,
                alt: "Bolsa de lino con la Manta Origen sobre repisas de piedra travertina con hojas verdes",
              },
              {
                src: mantaOrigenExterior.url,
                alt: "Kit Manta Origen sobre madera y raíces de árbol, acompañado de flores blancas",
              },
            ].map((foto) => (
              <Button key={foto.src} variant="ghost" onClick={() => setPhoto(foto)} aria-label={`Ampliar: ${foto.alt}`} className="h-auto w-full aspect-square overflow-hidden p-0 rounded-lg"><img
                src={foto.src}
                alt={foto.alt}
                loading="lazy"
                className="h-full w-full object-cover"
              /></Button>
            ))}
          </div>
        </Reveal>
      </section>

      {/* 2 · HISTORIA: qué es → cómo funciona */}
      <section className="py-20 md:py-24 bg-secondary/40">
        <div className="container-prose max-w-3xl text-center mb-14">
          <Reveal>
            <span className="eyebrow">La historia detrás de la manta</span>
            <h2 className="mt-3 font-display text-3xl md:text-5xl text-primary leading-tight">
              Volver al hábito de conectar
            </h2>
            <p className="mt-5 text-foreground/75 leading-relaxed">
              Cada vez pasamos más tiempo en interiores, rodeados de pantallas y alejados del
              contacto con la naturaleza. Manta Origen nace como una forma sencilla de recuperar
              ese hábito, sin necesidad de caminar descalzo sobre el césped, la arena o la tierra.
            </p>
          </Reveal>
        </div>
        <div className="container-prose grid md:grid-cols-2 gap-6">
          <Reveal>
            <div id="que-es" className="h-full p-7 md:p-9 rounded-3xl bg-card border border-border/60 scroll-mt-32">
              <div className="h-11 w-11 rounded-full bg-primary/10 text-primary inline-flex items-center justify-center">
                <BookOpen size={18} strokeWidth={1.4} />
              </div>
              <p className="eyebrow mt-4">¿Qué es?</p>
              <h3 className="mt-2 font-display text-2xl text-primary">Un puente con la Tierra</h3>
              <p className="mt-3 text-sm text-foreground/75 leading-relaxed">
                Una manta creada para acompañarte en momentos de descanso, lectura, trabajo o
                relajación, integrando la práctica del grounding a tu día a día.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div id="como-funciona" className="h-full p-7 md:p-9 rounded-3xl bg-card border border-border/60 scroll-mt-32">
              <div className="h-11 w-11 rounded-full bg-primary/10 text-primary inline-flex items-center justify-center">
                <FlaskConical size={18} strokeWidth={1.4} />
              </div>
              <p className="eyebrow mt-4">¿Cómo funciona?</p>
              <h3 className="mt-2 font-display text-2xl text-primary">Tejido conductor</h3>
              <p className="mt-3 text-sm text-foreground/75 leading-relaxed">
                <strong>95% algodón + 5% hilos de plata conductores.</strong> Conectada a una toma
                con polo a tierra, la manta permite establecer contacto con el potencial eléctrico
                natural de la Tierra.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3 · BENEFICIOS */}
      <section className="py-20 md:py-24">
        <div className="container-prose">
          <Reveal className="max-w-2xl mb-10 mx-auto text-center">
            <span className="eyebrow">Beneficios</span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl text-primary leading-tight">
              Bienestar asociado a la práctica
            </h2>
            <p className="mt-4 text-foreground/70 text-sm">
              Diversos estudios han explorado la relación entre el grounding y el bienestar general.
              Cada persona puede experimentar resultados diferentes; esta práctica se ha asociado con:
            </p>
          </Reveal>
          <div className="grid lg:grid-cols-2 gap-6 items-stretch">
            <Reveal className="relative min-h-80 overflow-hidden rounded-3xl">
              {benefits.map((b, i) => (<img key={b.title} src={b.img} alt={i === activeBenefit ? b.title : ""} aria-hidden={i !== activeBenefit} loading="lazy" width={1024} height={768} className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-out ${i === activeBenefit ? "opacity-100" : "opacity-0"}`} />))}
              <div className="absolute inset-0 plant-scrim" />
              {(() => { const B = benefits[activeBenefit]; const Icon = B.icon; return (
                <div key={B.title} className="absolute inset-x-0 bottom-0 p-6 md:p-8 text-primary-foreground animate-rise">
                  <div className="h-12 w-12 rounded-full bg-primary-foreground/15 backdrop-blur inline-flex items-center justify-center"><Icon size={20} strokeWidth={1.4} /></div>
                  <p className="mt-4 font-display text-2xl md:text-3xl">{B.title}</p>
                  <p className="mt-2 text-sm text-primary-foreground/85 max-w-md">{B.desc}</p>
                </div>); })()}
            </Reveal>
            <ul className="grid grid-cols-2 gap-3">
              {benefits.map((b, i) => {
                const Icon = b.icon; const on = i === activeBenefit;
                return (
                  <li key={b.title}>
                    <button type="button" onClick={() => setActiveBenefit(i)} onMouseEnter={() => setActiveBenefit(i)} aria-pressed={on}
                      className={`h-full w-full text-left p-5 rounded-2xl border transition-all duration-500 ${on ? "bg-primary text-primary-foreground border-primary shadow-[var(--shadow-glow)]" : "bg-card border-border/60 hover:border-primary/40"}`}>
                      <span className={`h-10 w-10 rounded-full inline-flex items-center justify-center transition-colors duration-500 ${on ? "bg-primary-foreground/15" : "bg-primary/10 text-primary"}`}><Icon size={18} strokeWidth={1.4} /></span>
                      <span className={`mt-3 block font-display text-base md:text-lg leading-tight ${on ? "" : "text-primary"}`}>{b.title}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
          <p className="mt-8 text-xs text-foreground/60 italic max-w-3xl">
            <strong>Importante:</strong> Manta Origen es un producto de bienestar y no sustituye
            tratamientos médicos, medicamentos ni el diagnóstico de profesionales de la salud.
          </p>
        </div>
      </section>

      {/* 4 · QUÉ INCLUYE + CÓMO USARLA (con simetría) */}
      <section className="py-20 md:py-24 bg-secondary/40">
        <div className="container-prose grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Composición + Kit */}
          <Reveal>
            <div className="h-full p-8 md:p-10 rounded-3xl bg-card border border-border/60">
              <img src={mantaOrigenFlatlay.url} alt="Kit completo Manta Origen" loading="lazy" className="mb-6 aspect-[4/3] w-full rounded-lg object-cover" />
              <span className="eyebrow">¿Qué incluye?</span>
              <h3 className="mt-3 font-display text-2xl md:text-3xl text-primary">Kit completo Manta Origen</h3>
              <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-foreground/80">
                <div className="p-4 rounded-2xl bg-secondary/50">🌿 95% Algodón</div>
                <div className="p-4 rounded-2xl bg-secondary/50">✨ 5% Hilos de plata</div>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-foreground/75">
                <li>✓ Tu Manta Origen</li>
                <li>✓ Cable de conexión a tierra</li>
                <li>✓ Bolsa de lino</li>
                <li>✓ Agua de Linos AGAIA</li>
                <li>✓ Guía de uso</li>
              </ul>
            </div>
          </Reveal>
          {/* Cómo usarla — sin título "4 pasos", verbos conjugados */}
          <Reveal delay={120}>
            <div className="h-full p-8 md:p-10 rounded-3xl bg-card border border-border/60">
              <span className="eyebrow">¿Cómo usarla?</span>
              <h3 className="mt-3 font-display text-2xl md:text-3xl text-primary">Instálala en minutos</h3>
              <div className="mt-6 grid grid-cols-4 gap-2" role="tablist" aria-label="Pasos de instalación">
                {steps.map((s, i) => <Button key={s.n} role="tab" aria-selected={activeStep === i} variant={activeStep === i ? "default" : "outline"} onClick={() => setActiveStep(i)} className="h-12 font-display text-xl">{s.n}</Button>)}
              </div>
              <div className="mt-5 min-h-28 bg-secondary/50 p-5 rounded-lg" role="tabpanel"><p className="eyebrow">Paso {steps[activeStep]?.n}</p><p className="mt-3 font-display text-xl text-primary">{steps[activeStep]?.t}</p></div>

              <div className="mt-8 pt-6 border-t border-border/60">
                <p className="text-[0.65rem] uppercase tracking-[0.22em] text-foreground/55 mb-3">
                  Puedes usarla mientras
                </p>
                <ul className="flex flex-wrap gap-2">
                  {usos.map((u) => (
                    <li key={u.label} className="px-3 py-1.5 rounded-full bg-secondary/60 text-xs text-primary/85">
                      {u.emoji} {u.label}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5 · FAQ */}
      <section className="py-20 md:py-24">
        <div className="container-prose max-w-3xl">
          <Reveal>
            <span className="eyebrow">Preguntas frecuentes</span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl text-primary leading-tight">
              Todo lo que quieres saber
            </h2>
          </Reveal>
          <div className="mt-8 space-y-3">
            {faq.map((f, i) => (
              <Reveal key={f.q} delay={i * 60}>
                <details className="group p-5 rounded-2xl bg-card border border-border/60">
                  <summary className="cursor-pointer font-display text-lg text-primary flex items-center justify-between gap-4 list-none">
                    <span>{f.q}</span>
                    <span className="text-primary/50 group-open:rotate-45 transition-transform text-xl">+</span>
                  </summary>
                  <p className="mt-4 text-sm text-foreground/75 leading-relaxed animate-fade-in">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6 · LABORATORIO DE GROUNDING — simétrico */}
      <section id="laboratorio" className="relative overflow-hidden scroll-mt-24 py-20 md:py-28 bg-primary text-primary-foreground">
        <img src={mantaOrigenExterior.url} alt="" aria-hidden="true" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-15 banner-image" />
        <div className="relative container-prose">
          <Reveal className="max-w-3xl mx-auto text-center">
            <span className="eyebrow text-secondary">Laboratorio de Grounding</span>
            <h2 className="mt-3 font-display text-3xl md:text-5xl leading-tight">
              Todo lo que necesitas saber sobre el Grounding
            </h2>
            <p className="mt-5 text-primary-foreground/80">
              Reunimos información basada en investigaciones, artículos científicos y recursos
              educativos para que puedas conocer más sobre la conexión a tierra y tomar una decisión informada.
            </p>
          </Reveal>

          {(() => { const labs = [
              {
                icon: BookOpen,
                eyebrow: "¿Qué es?",
                title: "Definición",
                body: '"El Grounding, también conocido como Earthing, consiste en establecer contacto directo entre el cuerpo humano y la superficie de la Tierra para favorecer el intercambio natural de cargas eléctricas."',
              },
              {
                icon: FlaskConical,
                eyebrow: "¿Qué dice la ciencia?",
                title: "Investigaciones",
                body: "Estudios han explorado la relación entre el Grounding y aspectos como el descanso, el estrés, la inflamación y el bienestar general. Presentamos este contenido con fines educativos.",
              },
              {
                icon: Unplug,
                eyebrow: "Nuestro mundo hoy",
                title: "¿Por qué dejamos de conectar?",
                body: "Cada vez vivimos más lejos de la naturaleza y más cerca de las pantallas. Manta Origen ayuda a recuperar ese pequeño hábito de conexión, integrándolo fácilmente a tu rutina diaria.",
              },
            ]; const L = labs[activeLab]; const LIcon = L.icon; return (
          <Reveal className="mt-12 max-w-4xl mx-auto">
            <div role="tablist" className="grid grid-cols-3 gap-2 md:gap-3">
              {labs.map((c, i) => { const Icon = c.icon; const on = i === activeLab; return (
                <button key={c.title} role="tab" aria-selected={on} type="button" onClick={() => setActiveLab(i)}
                  className={`flex flex-col items-center gap-2 p-3 md:p-5 rounded-2xl border transition-all duration-500 ${on ? "bg-secondary text-primary border-secondary" : "bg-primary-foreground/5 border-primary-foreground/15 hover:bg-primary-foreground/10"}`}>
                  <span className={`h-10 w-10 md:h-12 md:w-12 rounded-full inline-flex items-center justify-center ${on ? "bg-primary/10" : "bg-primary-foreground/10 text-secondary"}`}><Icon size={20} strokeWidth={1.4} /></span>
                  <span className="text-[0.65rem] md:text-xs uppercase tracking-[0.18em] text-center">{c.eyebrow}</span>
                </button>); })}
            </div>
            <div key={L.title} role="tabpanel" className="mt-4 grid md:grid-cols-[auto_1fr] gap-5 items-center p-6 md:p-8 rounded-3xl bg-primary-foreground/10 border border-primary-foreground/15 backdrop-blur animate-rise">
              <div className="h-16 w-16 rounded-full bg-secondary text-primary inline-flex items-center justify-center animate-float"><LIcon size={28} strokeWidth={1.3} /></div>
              <div><h3 className="font-display text-2xl">{L.title}</h3><p className="mt-2 text-sm md:text-base text-primary-foreground/85 leading-relaxed">{L.body}</p></div>
            </div>
          </Reveal>); })()}

          <Reveal className="mt-14">
            <p className="eyebrow text-secondary mb-4 text-center">Ver investigaciones</p>
            <ul className="grid sm:grid-cols-2 gap-3 max-w-5xl mx-auto items-stretch">
              {research.map((r) => (
                <li key={r.url} className="h-full">
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-full min-h-[88px] flex items-center gap-3 p-4 md:p-5 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors"
                  >
                    <ExternalLink size={16} className="text-secondary shrink-0" />
                    <span className="text-sm text-primary-foreground/85 leading-snug">{r.title}</span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[0.7rem] text-primary-foreground/60 italic text-center max-w-2xl mx-auto">
              Manta Origen es un producto de bienestar y no sustituye tratamientos médicos, medicamentos ni el diagnóstico de profesionales de la salud.
            </p>
          </Reveal>

          {/* 7 · Cierre: Aprende a usar tu manta */}
          <Reveal className="mt-14">
            <div className="p-8 md:p-10 rounded-3xl bg-primary-foreground/10 border border-primary-foreground/15 text-center max-w-3xl mx-auto">
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
          </Reveal>
        </div>
      </section>
      <Dialog open={photo !== null} onOpenChange={open => { if (!open) setPhoto(null); }}><DialogContent className="max-w-3xl max-h-[90dvh] overflow-y-auto w-[calc(100%-2rem)]"><DialogTitle className="font-display text-primary">{photo?.alt}</DialogTitle>{photo && <img src={photo.src} alt={photo.alt} className="max-h-[70dvh] w-full object-contain" />}</DialogContent></Dialog>
    </div>
  );
}
