import { useState } from "react";
import { Moon, Wind, Home, TreePine, Gift, Pause, Sun, Sparkles, Sunrise } from "lucide-react";
import { waLink } from "@/lib/site-config";

type Need = {
  id: string;
  icon: typeof Moon;
  label: string;
  ritual: string;
  moment: string;
  products: string[];
};

const NEEDS: Need[] = [
  { id: "dormir", icon: Moon, label: "Dormir mejor", ritual: "Ritual de descanso nocturno", moment: "Para acompañar la noche y preparar el cuerpo para descansar.", products: ["Vela relajante", "Spray de almohada", "Infusión botánica", "Aceite esencial de lavanda"] },
  { id: "estres", icon: Wind, label: "Reducir el estrés", ritual: "Ritual de calma diaria", moment: "Pausas conscientes en medio del día.", products: ["Roll-on aromático", "Sahumerio suave", "Bruma botánica", "Infusión relajante"] },
  { id: "espacio", icon: Home, label: "Crear un espacio de bienestar", ritual: "Ritual de hogar consciente", moment: "Transformar tu espacio con aromas e intención.", products: ["Vela aromática", "Difusor cerámico", "Sahumerio de palo santo"] },
  { id: "naturaleza", icon: TreePine, label: "Conectar con la naturaleza", ritual: "Ritual de conexión botánica", moment: "Volver al bosque desde casa.", products: ["Bruma de musgo", "Aceite de cedro", "Sahumerio botánico"] },
  { id: "regalar", icon: Gift, label: "Regalar algo especial", ritual: "Ritual para regalar", moment: "Un gesto con intención para alguien que cuidas.", products: ["Caja ritual personalizada", "Tarjeta a mano", "Selección de aromas"] },
  { id: "pausar", icon: Pause, label: "Pausar y respirar", ritual: "Ritual de pausa breve", moment: "Tres minutos para volver al cuerpo.", products: ["Roll-on de respiración", "Bruma facial", "Infusión calma"] },
  { id: "energia", icon: Sun, label: "Activar tu energía", ritual: "Ritual de energía natural", moment: "Para empezar con frescura y presencia.", products: ["Bruma cítrica", "Aceite de romero", "Infusión vital"] },
  { id: "noche", icon: Sparkles, label: "Crear un ritual de noche", ritual: "Ritual de cierre del día", moment: "Bajar el ritmo antes de descansar.", products: ["Vela ámbar", "Aceite corporal", "Infusión nocturna"] },
  { id: "mañana", icon: Sunrise, label: "Crear un ritual de mañana", ritual: "Ritual de inicio consciente", moment: "Despertar con calma e intención.", products: ["Bruma fresca", "Infusión matinal", "Aceite revitalizante"] },
];

export function NeedsToday() {
  const [active, setActive] = useState<Need>(NEEDS[0]);

  return (
    <section id="necesitas" className="py-20 md:py-28 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container-prose">
        <div className="max-w-2xl mb-12">
          <span className="eyebrow">Empieza aquí</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-primary leading-tight">
            ¿Qué necesitas hoy?
          </h2>
          <p className="mt-4 text-foreground/65 text-sm md:text-base">
            Elige una intención y te sugerimos un ritual con sus productos.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {NEEDS.map((n) => {
                const Icon = n.icon;
                const isActive = active.id === n.id;
                return (
                  <button
                    key={n.id}
                    onClick={() => setActive(n)}
                    className={`text-left p-4 rounded-2xl border transition-all ${
                      isActive
                        ? "bg-primary text-primary-foreground border-primary shadow-[var(--shadow-glow)]"
                        : "bg-card border-border/60 hover:border-primary/40 hover:-translate-y-0.5"
                    }`}
                  >
                    <Icon size={20} strokeWidth={1.3} className={isActive ? "text-secondary" : "text-primary"} />
                    <p className={`mt-3 text-sm font-medium leading-snug ${isActive ? "text-primary-foreground" : "text-foreground/85"}`}>
                      {n.label}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="sticky top-28 rounded-3xl p-7 md:p-9 bg-card border border-border/60 shadow-[var(--shadow-soft)]">
              <p className="eyebrow">Ritual sugerido</p>
              <h3 className="mt-3 font-display text-3xl text-primary">{active.ritual}</h3>
              <p className="mt-3 text-sm text-foreground/70 leading-relaxed">{active.moment}</p>

              <div className="mt-6 pt-6 border-t border-border/60">
                <p className="text-xs uppercase tracking-[0.22em] text-foreground/55 mb-3">Productos sugeridos</p>
                <ul className="space-y-2">
                  {active.products.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-foreground/80">
                      <span className="h-1 w-1 rounded-full bg-primary" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={waLink(`Hola, me interesa el ${active.ritual}.`)}
                target="_blank" rel="noopener noreferrer"
                className="mt-7 inline-flex items-center px-5 py-3 rounded-full bg-primary text-primary-foreground text-xs uppercase tracking-[0.22em] hover:bg-primary/90 transition-colors"
              >
                Recibir asesoría
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
