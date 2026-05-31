import { Leaf, Waves, Sparkles, Mountain, Wind, Sun } from "lucide-react";

const values = [
  { icon: Leaf, title: "Ingredientes naturales", text: "Selección consciente de elementos botánicos y minerales." },
  { icon: Waves, title: "Bienestar y calma", text: "Formulaciones que invitan a la pausa y a la presencia." },
  { icon: Sparkles, title: "Diseño consciente", text: "Una estética simple, honesta y reconocible." },
  { icon: Mountain, title: "Inspirado en la naturaleza", text: "Cada producto nace de un paisaje, una sensación, un instante." },
  { icon: Wind, title: "Experiencias sensoriales", text: "Aromas, texturas y rituales que despiertan los sentidos." },
  { icon: Sun, title: "Energía y equilibrio", text: "Acompañamos el ritmo de tu cuerpo y tu día." },
];

export function Values() {
  return (
    <section id="bienestar" className="py-24 md:py-32 bg-secondary/40">
      <div className="container-prose">
        <div className="max-w-2xl mb-16">
          <span className="eyebrow">Nuestra propuesta</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-primary leading-tight">
            Una nueva manera de habitar el bienestar.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border/60 rounded-3xl overflow-hidden border border-border/60">
          {values.map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-background p-8 md:p-10 group transition-colors hover:bg-secondary/60">
              <Icon className="text-primary" size={28} strokeWidth={1.2} />
              <h3 className="mt-6 font-display text-2xl text-primary">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
