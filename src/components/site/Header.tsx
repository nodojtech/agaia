import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/agaia-isotipo.png";

const nav = [
  { href: "#inicio", label: "Inicio" },
  { href: "#productos", label: "Productos" },
  { href: "#bienestar", label: "Bienestar" },
  { href: "#ingredientes", label: "Ingredientes" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-8 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/60">
      <div className="container-prose flex items-center justify-between h-16 md:h-20">
        <a href="#inicio" className="flex items-center gap-3">
          <img src={logo} alt="Agaia" className="h-9 w-auto" width={36} height={44} />
          <span className="font-display text-lg tracking-[0.2em] text-primary">AGAIA</span>
        </a>
        <nav className="hidden lg:flex items-center gap-9">
          {nav.map((n) => (
            <a key={n.href} href={n.href}
              className="text-[0.78rem] uppercase tracking-[0.22em] text-foreground/70 hover:text-primary transition-colors">
              {n.label}
            </a>
          ))}
        </nav>
        <a href="#contacto"
          className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-xs uppercase tracking-[0.2em] hover:bg-primary/90 transition-colors">
          Conecta
        </a>
        <button onClick={() => setOpen(!open)} className="lg:hidden text-primary p-2" aria-label="Menú">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-prose py-6 flex flex-col gap-4">
            {nav.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-[0.22em] text-foreground/80 hover:text-primary">
                {n.label}
              </a>
            ))}
            <a href="#contacto" onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center px-5 py-3 rounded-full bg-primary text-primary-foreground text-xs uppercase tracking-[0.2em]">
              Conecta con nosotros
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
