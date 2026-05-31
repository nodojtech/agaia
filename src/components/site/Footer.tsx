import logo from "@/assets/agaia-isotipo.png";
import { Instagram, Music2, Facebook, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-prose py-20 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Agaia" className="h-12 w-auto" />
            <div>
              <p className="font-display text-2xl tracking-[0.2em]">AGAIA</p>
              <p className="text-[0.65rem] uppercase tracking-[0.32em] text-primary-foreground/60">Laboratorio de bienestar</p>
            </div>
          </div>
          <p className="mt-6 text-sm text-primary-foreground/70 max-w-sm leading-relaxed">
            Elementos simples y naturales para acompañar momentos de calma, presencia y bienestar.
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="eyebrow text-secondary">Navega</p>
          <ul className="mt-5 space-y-2.5 text-sm text-primary-foreground/80">
            {["Inicio","Productos","Bienestar","Ingredientes","Nosotros","Contacto"].map(l => (
              <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-secondary transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="eyebrow text-secondary">Contacto</p>
          <ul className="mt-5 space-y-2.5 text-sm text-primary-foreground/80">
            <li>hola@agaia.com</li>
            <li>+57 300 000 0000</li>
          </ul>
          <div className="mt-6 flex gap-3">
            {[Instagram, Music2, Facebook, MessageCircle].map((Icon, i) => (
              <a key={i} href="#" className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-primary-foreground/20 hover:bg-primary-foreground/10 transition-colors">
                <Icon size={16} strokeWidth={1.4} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container-prose py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-primary-foreground/50">
          <p>© {new Date().getFullYear()} Agaia · Laboratorio de bienestar</p>
          <p className="uppercase tracking-[0.22em]">Hecho con calma</p>
        </div>
      </div>
    </footer>
  );
}
