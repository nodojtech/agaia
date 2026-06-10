import { useState } from "react";
import { ArrowRight, RotateCcw } from "lucide-react";
import { waLink } from "@/lib/site-config";

type Option = { label: string; value: string };
type Question = { id: string; q: string; options: Option[] };

const QUESTIONS: Question[] = [
  { id: "estado", q: "¿Cómo te has sentido últimamente?",
    options: [
      { label: "Cansada/o", value: "descanso" },
      { label: "Estresada/o", value: "calma" },
      { label: "Desconectada/o", value: "naturaleza" },
      { label: "Con ganas de renovar energía", value: "energia" },
      { label: "En búsqueda de calma", value: "calma" },
    ] },
  { id: "momento", q: "¿Qué momento del día quieres transformar?",
    options: [
      { label: "Mañana", value: "energia" },
      { label: "Tarde", value: "calma" },
      { label: "Noche", value: "descanso" },
      { label: "Antes de dormir", value: "descanso" },
      { label: "Espacios de pausa", value: "calma" },
    ] },
  { id: "busqueda", q: "¿Qué buscas en tu ritual?",
    options: [
      { label: "Descanso", value: "descanso" },
      { label: "Calma", value: "calma" },
      { label: "Energía", value: "energia" },
      { label: "Conexión con la naturaleza", value: "naturaleza" },
      { label: "Regalar bienestar", value: "naturaleza" },
    ] },
  { id: "experiencia", q: "¿Qué tipo de experiencia prefieres?",
    options: [
      { label: "Aromas suaves", value: "calma" },
      { label: "Plantas e infusiones", value: "naturaleza" },
      { label: "Velas y ambiente", value: "descanso" },
      { label: "Productos para el cuerpo", value: "energia" },
      { label: "Un ritual completo", value: "naturaleza" },
    ] },
];

const RESULTS = {
  descanso: { name: "Ritual de descanso profundo", desc: "Para quienes buscan bajar el ritmo, preparar el cuerpo y crear una noche más tranquila.", products: ["Vela relajante", "Spray de almohada", "Infusión nocturna", "Aceite corporal"] },
  calma:    { name: "Ritual de calma diaria",      desc: "Para momentos de estrés, pausas conscientes y reconexión durante el día.",            products: ["Roll-on aromático", "Bruma botánica", "Sahumerio suave", "Infusión relajante"] },
  energia:  { name: "Ritual de energía natural",   desc: "Para iniciar el día con intención, frescura y presencia.",                              products: ["Bruma cítrica", "Aceite de romero", "Infusión vital", "Vela energizante"] },
  naturaleza:{ name: "Ritual de conexión botánica",desc: "Para quienes quieren sentirse más cerca de la naturaleza desde casa.",                  products: ["Sahumerio de palo santo", "Aceite de cedro", "Bruma de musgo", "Infusión herbal"] },
} as const;

type ResultKey = keyof typeof RESULTS;

export function RitualQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const reset = () => { setStep(0); setAnswers([]); };

  const pick = (val: string) => {
    const next = [...answers, val];
    if (step + 1 < QUESTIONS.length) {
      setAnswers(next);
      setStep(step + 1);
    } else {
      setAnswers(next);
      setStep(step + 1);
    }
  };

  const done = step >= QUESTIONS.length;
  const result: ResultKey = done
    ? (Object.entries(answers.reduce<Record<string, number>>((acc, v) => {
        acc[v] = (acc[v] ?? 0) + 1; return acc;
      }, {})).sort((a, b) => b[1] - a[1])[0]?.[0] as ResultKey) ?? "calma"
    : "calma";

  return (
    <section id="test" className="py-20 md:py-28 bg-secondary/40">
      <div className="container-prose">
        <div className="max-w-2xl mb-10">
          <span className="eyebrow">Test sensorial</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-primary leading-tight">
            Descubre tu ritual ideal
          </h2>
          <p className="mt-4 text-foreground/65 text-sm md:text-base">
            Responde unas preguntas simples y te recomendamos un ritual Agaia pensado para ti.
          </p>
        </div>

        <div className="max-w-3xl bg-card rounded-3xl border border-border/60 p-7 md:p-10 shadow-[var(--shadow-soft)]">
          {!done ? (
            <>
              <div className="flex items-center gap-2 mb-6">
                {QUESTIONS.map((_, i) => (
                  <span key={i} className={`h-1 flex-1 rounded-full ${i <= step ? "bg-primary" : "bg-border"}`} />
                ))}
              </div>
              <p className="eyebrow">Pregunta {step + 1} de {QUESTIONS.length}</p>
              <h3 className="mt-3 font-display text-2xl md:text-3xl text-primary">{QUESTIONS[step].q}</h3>
              <div className="mt-6 grid sm:grid-cols-2 gap-3">
                {QUESTIONS[step].options.map((o) => (
                  <button key={o.label} onClick={() => pick(o.value)}
                    className="text-left px-5 py-4 rounded-2xl border border-border/70 bg-background hover:border-primary/50 hover:bg-secondary/40 transition-all flex items-center justify-between group">
                    <span className="text-sm text-foreground/85">{o.label}</span>
                    <ArrowRight size={15} className="text-primary/40 group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center">
              <span className="eyebrow">Tu ritual recomendado</span>
              <h3 className="mt-3 font-display text-3xl md:text-4xl text-primary">{RESULTS[result].name}</h3>
              <p className="mt-4 text-foreground/70 max-w-xl mx-auto">{RESULTS[result].desc}</p>
              <ul className="mt-7 flex flex-wrap justify-center gap-2">
                {RESULTS[result].products.map((p) => (
                  <li key={p} className="px-4 py-2 rounded-full bg-secondary/60 text-xs text-primary/85">{p}</li>
                ))}
              </ul>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <a href="#mas-vendidos" className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground text-xs uppercase tracking-[0.22em] hover:bg-primary/90 transition-colors">
                  Comprar ritual
                </a>
                <a href={waLink(`Hola, hice el test y me recomendó el ${RESULTS[result].name}. Quiero asesoría.`)} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 rounded-full border border-primary/30 text-primary text-xs uppercase tracking-[0.22em] hover:bg-primary/5 transition-colors">
                  Asesoría por WhatsApp
                </a>
                <button onClick={reset} className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.22em] text-foreground/55 hover:text-primary transition-colors">
                  <RotateCcw size={12} /> Repetir
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
