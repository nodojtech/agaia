import { useState } from "react";
import { Moon, Wind, Sun, TreePine, Gift } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

type Need = {
  id: string;
  icon: typeof Moon;
  label: string;
  intro: string;
  products: { name: string; note: string }[];
};

const NEEDS: Need[] = [
  {
    id: "dormir",
    icon: Moon,
    label: "Dormir mejor",
    intro:
      "Si buscas crear una rutina de noche, te cuesta desconectarte del día o simplemente quieres mejorar tu experiencia de descanso.",
    products: [
      { name: "Manta Origen", note: "Ayuda a crear una experiencia de descanso y bienestar mientras duermes." },
      { name: "Sales Relajantes", note: "Ideales para acompañar una pausa antes de dormir y relajar el cuerpo." },
      { name: "Agua de Linos Gratitud", note: "Aromatiza almohadas y sábanas para crear un ambiente de calma." },
      { name: "Roll-on Calma", note: "Su aroma a menta acompaña tu rutina antes de dormir." },
    ],
  },
  {
    id: "estres",
    icon: Wind,
    label: "Reducir el estrés y la sobrecarga mental",
    intro:
      "Si sientes que tu mente no para, atraviesas días acelerados o buscas momentos de calma durante la jornada.",
    products: [
      { name: "Roll-On Calma", note: "A base de menta. Ideal para momentos de estrés, ansiedad o sobrecarga mental." },
      { name: "Agua de Linos Gratitud", note: "Ayuda a crear pausas conscientes y transformar cualquier espacio." },
      { name: "Sales Relajantes", note: "Perfectas para cerrar el día y liberar la tensión acumulada." },
      { name: "Manta Origen", note: "Aliada para crear momentos de descanso al finalizar la jornada." },
    ],
  },
  {
    id: "energia",
    icon: Sun,
    label: "Más energía",
    intro:
      "Si quieres comenzar tus días con más intención, incorporar hábitos positivos o sentirte más presente y enfocad@.",
    products: [
      { name: "Jabón Energía Vital", note: "Con aloe vera y vitamina E. Aroma a naranja para mañanas revitalizantes." },
      { name: "Agua de Linos Energía Vital", note: "Aromas cítricos, ideales para mañanas y espacios de trabajo." },
      { name: "Manta Origen", note: "Diseñada para acompañar el descanso y la recuperación." },
      { name: "Roll-on Calma", note: "Úsalo en pausas conscientes para recuperar claridad." },
    ],
  },
  {
    id: "naturaleza",
    icon: TreePine,
    label: "Conectar con la naturaleza",
    intro:
      "Si disfrutas rodearte de plantas, crear espacios más conscientes o incorporar momentos de conexión con la naturaleza.",
    products: [
      { name: "Bonsáis", note: "Un recordatorio vivo de que el bienestar también se cultiva." },
      { name: "Kokedamas", note: "Naturaleza viva para acompañar tus espacios." },
      { name: "Manta Origen", note: "Una invitación a reconectar con la tierra desde casa." },
      { name: "Agua de Linos Equilibrio Natural", note: "Inspirada en el eucalipto, para ambientes de renovación." },
    ],
  },
  {
    id: "regalar",
    icon: Gift,
    label: "Regalar bienestar",
    intro: "Si buscas un regalo con significado, estos son algunos de nuestros favoritos.",
    products: [
      { name: "Kit de Bienestar", note: "La combinación perfecta para quienes disfrutan los pequeños rituales diarios." },
      { name: "Kit Tres Pausas de Bienestar", note: "Ideal para quienes quieren descubrir el universo AGAIA." },
      { name: "Bonsáis", note: "Un regalo vivo, lleno de simbolismo y crecimiento." },
      { name: "Manta Origen", note: "Para quienes valoran el descanso y el bienestar." },
      { name: "Roll-On Calma", note: "Un detalle lleno de intención para momentos de estrés." },
    ],
  },
];

export function NeedsToday() {
  const [active, setActive] = useState<Need>(NEEDS[0]);

  return (
    <section id="necesitas" className="py-20 md:py-28 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container-prose">
        <div className="max-w-2xl mb-12">
          <span className="eyebrow">Tu Ritual · Empieza aquí</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-primary leading-tight">
            ¿Qué necesitas hoy?
          </h2>
          <p className="mt-4 text-foreground/65 text-sm md:text-base">
            Elige una intención y te sugerimos los productos AGAIA que mejor la acompañan.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5">
            <div className="grid gap-3">
              {NEEDS.map((n) => {
                const Icon = n.icon;
                const isActive = active.id === n.id;
                return (
                  <Button variant="ghost"
                    key={n.id}
                    onClick={() => setActive(n)}
                    className={`h-auto whitespace-normal justify-start text-left p-4 md:p-5 rounded-2xl border transition-all flex items-center gap-4 ${
                      isActive
                        ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground border-primary shadow-[var(--shadow-glow)]"
                        : "bg-card border-border/60 hover:border-primary/40 hover:-translate-y-0.5"
                    }`}
                  >
                    <div className={`shrink-0 h-10 w-10 rounded-full inline-flex items-center justify-center ${isActive ? "bg-primary-foreground/10 text-secondary" : "bg-secondary/50 text-primary"}`}>
                      <Icon size={18} strokeWidth={1.4} />
                    </div>
                    <p className={`text-sm font-medium leading-snug ${isActive ? "text-primary-foreground" : "text-foreground/85"}`}>
                      {n.label}
                    </p>
                  </Button>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="sticky top-28 rounded-3xl p-7 md:p-9 bg-card border border-border/60 shadow-[var(--shadow-soft)]">
              <p className="eyebrow">Recomendación del Laboratorio</p>
              <h3 className="mt-3 font-display text-3xl text-primary">{active.label}</h3>
              <p className="mt-3 text-sm text-foreground/70 leading-relaxed">{active.intro}</p>

              <ul className="mt-7 space-y-4">
                {active.products.map((p) => (
                  <li key={p.name} className="pl-4 border-l-2 border-primary/30">
                    <Link to="/productos" hash={p.name} className="font-display text-lg text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary">🌿 {p.name}</Link>
                    <p className="mt-1 text-xs text-foreground/65 leading-relaxed">{p.note}</p>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/productos"
                  className="inline-flex items-center px-5 py-3 rounded-full bg-primary text-primary-foreground text-xs uppercase tracking-[0.22em] hover:bg-primary/90 transition-colors"
                >
                  Ver productos
                </Link>
                <Link
                  to="/tu-ritual"
                  hash="test"
                  hashScrollIntoView={{ behavior: "smooth", block: "start" }}
                  className="inline-flex items-center px-5 py-3 rounded-full border border-primary/30 text-primary text-xs uppercase tracking-[0.22em] hover:bg-primary/5 transition-colors"
                >
                  Test: Descubre tu ritual ideal
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
