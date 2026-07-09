import { Instagram, Music2, MessageCircle, Facebook } from "lucide-react";

const socials = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Music2, label: "TikTok", href: "#" },
  { icon: MessageCircle, label: "WhatsApp", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
];

export function Community() {
  return (
    <section className="py-24 md:py-32 bg-secondary/40">
      <div className="container-prose grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="eyebrow">Comunidad</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-primary leading-tight">
            Síguenos y descubre rituales de bienestar natural.
          </h2>
          <p className="mt-6 text-foreground/70 max-w-lg">
            Comparte tu experiencia, descubre nuevas formas de pausa y conéctate con una
            comunidad que celebra lo simple, lo limpio y lo esencial.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            {socials.map(({ icon: Icon, label, href }) => (
              <a key={label} href={href}
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-background border border-border hover:border-primary/40 hover:text-primary transition-all">
                <Icon size={16} strokeWidth={1.4} />
                <span className="text-xs uppercase tracking-[0.22em]">{label}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[
            "from-secondary to-primary/40",
            "from-primary/20 to-primary",
            "from-secondary to-mist",
            "from-primary to-primary/60",
            "from-mist to-secondary",
            "from-primary/30 to-secondary",
          ].map((g, i) => (
            <div key={i} className={`aspect-square rounded-2xl bg-gradient-to-br ${g} shadow-[var(--shadow-soft)]`} />
          ))}
        </div>
      </div>
    </section>
  );
}
