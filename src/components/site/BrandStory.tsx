import ingredients from "@/assets/ingredients.jpg";
import water from "@/assets/water-texture.jpg";

export function BrandStory() {
  return (
    <section id="historia" className="py-20 md:py-28">
      <div className="container-prose grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 relative">
          <div className="rounded-[2rem] overflow-hidden shadow-[var(--shadow-glow)] aspect-[4/5]">
            <img src={ingredients} alt="Composición botánica Agaia" className="h-full w-full object-cover" />
          </div>
          <div className="hidden md:block absolute -bottom-8 -right-6 w-44 h-44 rounded-3xl overflow-hidden shadow-[var(--shadow-soft)] border-4 border-background animate-float">
            <img src={water} alt="" className="h-full w-full object-cover" />
          </div>
        </div>
        <div className="lg:col-span-6">
          <span className="eyebrow">La historia de Agaia</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-primary leading-tight">
            Volver a lo esencial.
          </h2>
          <div className="mt-6 space-y-5 text-foreground/75 leading-relaxed">
            <p>
              Agaia nace como una invitación a respirar, pausar y reconectar con la naturaleza
              desde los pequeños rituales del día a día.
            </p>
            <p>
              Cada producto está pensado para crear momentos de bienestar, presencia y calma,
              transformando espacios cotidianos en experiencias sensoriales con intención.
            </p>
            <p className="italic text-primary/75 font-display text-xl">
              "Cuidar lo simple es cuidar lo esencial."
            </p>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border/60 pt-6">
            {[
              { k: "Botánica", v: "Origen natural" },
              { k: "Ritual",   v: "Hecho a mano" },
              { k: "Calma",    v: "Diseño sensorial" },
            ].map((s) => (
              <div key={s.k}>
                <p className="text-[0.65rem] uppercase tracking-[0.22em] text-foreground/50">{s.k}</p>
                <p className="mt-1 font-display text-base text-primary">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
