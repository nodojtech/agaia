import { useState } from "react";
import { ArrowRight, RotateCcw } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { waLink } from "@/lib/site-config";
import { Button } from "@/components/ui/button";

type Letter = "A" | "B" | "C" | "D";
type Option = { label: string; value: Letter; emoji: string };
type Question = { q: string; options: Option[] };

const QUESTIONS: Question[] = [
  {
    q: "¿Qué te gustaría mejorar en este momento?",
    options: [
      { emoji: "🌙", label: "Dormir mejor", value: "A" },
      { emoji: "😌", label: "Sentirme más tranquil@", value: "B" },
      { emoji: "⚡", label: "Tener más energía durante el día", value: "C" },
      { emoji: "🌿", label: "Sentirme más conectad@ con la naturaleza", value: "D" },
    ],
  },
  {
    q: "¿Cuál de estas situaciones te describe mejor?",
    options: [
      { emoji: "🌙", label: "Me cuesta desconectarme al final del día y no descanso", value: "A" },
      { emoji: "😌", label: "Siento que mi mente no para y vivo acelerad@", value: "B" },
      { emoji: "⚡", label: "Me despierto cansad@ o sin mucha energía", value: "C" },
      { emoji: "🌿", label: "Paso demasiado tiempo entre pantallas y espacios cerrados", value: "D" },
    ],
  },
  {
    q: "Si tuvieras 15 minutos libres hoy, ¿qué harías?",
    options: [
      { emoji: "🌙", label: "Tomar un baño relajante o descansar", value: "A" },
      { emoji: "😌", label: "Respirar profundo y hacer una pausa mental", value: "B" },
      { emoji: "⚡", label: "Salir a caminar o activar mi cuerpo", value: "C" },
      { emoji: "🌿", label: "Estar entre plantas o en contacto con la naturaleza", value: "D" },
    ],
  },
  {
    q: "¿Qué te gustaría sentir con más frecuencia?",
    options: [
      { emoji: "🌙", label: "Descanso", value: "A" },
      { emoji: "😌", label: "Calma", value: "B" },
      { emoji: "⚡", label: "Vitalidad", value: "C" },
      { emoji: "🌿", label: "Conexión", value: "D" },
    ],
  },
];

const RESULTS: Record<Letter, { emoji: string; title: string; desc: string; products: string[] }> = {
  A: {
    emoji: "🌙",
    title: "Tu ritual ideal está enfocado en el descanso",
    desc: "Parece que tu cuerpo está pidiendo más momentos de desconexión y recuperación.",
    products: ["Manta Origen", "Sales Relajantes", "Agua de Linos Gratitud", "Roll-on Calma"],
  },
  B: {
    emoji: "😌",
    title: "Tu ritual ideal está enfocado en la calma",
    desc: "Parece que necesitas incorporar pausas conscientes y herramientas que te ayuden a bajar el ritmo.",
    products: ["Roll-On Calma", "Agua de Linos Gratitud", "Sales Relajantes", "Manta Origen"],
  },
  C: {
    emoji: "⚡",
    title: "Tu ritual ideal está enfocado en el bienestar diario",
    desc: "Parece que buscas comenzar tus días con más intención, energía y presencia.",
    products: [
      "Jabón Energía Vital",
      "Agua de Linos Energía Vital",
      "Manta Origen",
      "Roll-on Calma",
    ],
  },
  D: {
    emoji: "🍃",
    title: "Tu ritual ideal está enfocado en la conexión con la naturaleza",
    desc: "Las plantas y los rituales inspirados en ellas pueden ayudarte a crear espacios más armoniosos, presentes y significativos.",
    products: ["Bonsáis", "Kokedamas", "Manta Origen", "Agua de Linos Equilibrio Natural"],
  },
};

export function RitualQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Letter[]>([]);

  const reset = () => {
    setStep(0);
    setAnswers([]);
  };

  const pick = (val: Letter) => {
    setAnswers([...answers, val]);
    setStep(step + 1);
  };

  const done = step >= QUESTIONS.length;
  const majority: Letter = done
    ? ((Object.entries(
        answers.reduce<Record<string, number>>((acc, v) => {
          acc[v] = (acc[v] ?? 0) + 1;
          return acc;
        }, {}),
      ).sort((a, b) => b[1] - a[1])[0]?.[0] as Letter) ?? "B")
    : "B";
  const result = RESULTS[majority];

  return (
    <section id="test" className="py-20 md:py-28 bg-secondary/40 scroll-mt-32">
      <div className="container-prose">
        <div className="max-w-2xl mb-10">
          <span className="eyebrow">Test sensorial</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-primary leading-tight">
            Descubre tu ritual ideal
          </h2>
          <p className="mt-4 text-foreground/65 text-sm md:text-base">
            Responde cuatro preguntas y nuestro Laboratorio Botánico te sugerirá un ritual pensado para ti.
          </p>
        </div>

        <div className="max-w-3xl bg-card rounded-3xl border border-border/60 p-7 md:p-10 shadow-[var(--shadow-soft)]">
          {!done ? (
            <>
              <div className="flex items-center gap-2 mb-6">
                {QUESTIONS.map((_, i) => (
                  <span
                    key={i}
                    className={`h-1 flex-1 rounded-full ${i <= step ? "bg-primary" : "bg-border"}`}
                  />
                ))}
              </div>
              <p className="eyebrow">
                Pregunta {step + 1} de {QUESTIONS.length}
              </p>
              <h3 className="mt-3 font-display text-2xl md:text-3xl text-primary">
                {QUESTIONS[step].q}
              </h3>
              <div className="mt-6 grid sm:grid-cols-2 gap-3">
                {QUESTIONS[step].options.map((o) => (
                  <Button variant="ghost"
                    key={o.label}
                    onClick={() => pick(o.value)}
                    className="h-auto whitespace-normal text-left px-5 py-4 rounded-2xl border border-border/70 bg-background hover:border-primary/50 hover:bg-secondary/40 transition-all flex items-center justify-between gap-3 group"
                  >
                    <span className="text-sm text-foreground/85 flex items-center gap-2">
                      <span className="text-lg">{o.emoji}</span>
                      {o.label}
                    </span>
                    <ArrowRight
                      size={15}
                      className="text-primary/40 group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0"
                    />
                  </Button>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center">
              <span className="eyebrow">🍃 Según tus respuestas</span>
              <h3 className="mt-3 font-display text-3xl md:text-4xl text-primary">
                <span className="mr-2">{result.emoji}</span>
                {result.title}
              </h3>
              <p className="mt-4 text-foreground/70 max-w-xl mx-auto">{result.desc}</p>
              <p className="mt-6 eyebrow">Productos recomendados</p>
              <ul className="mt-3 flex flex-wrap justify-center gap-2">
                {result.products.map((p) => (
                  <li
                    key={p}
                    className="text-sm text-primary/85"
                  >
                    <Link to="/productos" hash={p} className="inline-flex px-3 py-2 underline decoration-primary/30 underline-offset-4 hover:decoration-primary">🌿 {p}</Link>
                  </li>
                ))}
              </ul>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <Link
                  to="/productos"
                  className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground text-xs uppercase tracking-[0.22em] hover:bg-primary/90 transition-colors"
                >
                  Ver productos relacionados
                </Link>
                <a
                  href={waLink(`Hola, hice el test y me recomendó: ${result.title}. Quiero asesoría.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 rounded-full border border-primary/30 text-primary text-xs uppercase tracking-[0.22em] hover:bg-primary/5 transition-colors"
                >
                  Asesoría por WhatsApp
                </a>
                <Button variant="ghost"
                  onClick={reset}
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.22em] text-foreground/55 hover:text-primary transition-colors"
                >
                  <RotateCcw size={12} /> Repetir
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
