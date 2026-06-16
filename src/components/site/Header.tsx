import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/agaia-isotipo.png";

const nav: { to: string; label: string; exact?: boolean }[] = [
  { to: "/productos", label: "Productos" },
  { to: "/bienestar", label: "Bienestar" },
  { to: "/manta-grounding", label: "Manta grounding" },
  { to: "/ingredientes", label: "Ingredientes" },
  { to: "/regalos", label: "Regalos" },
  { to: "/nosotros", label: "Nosotros" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-8 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/60">
      <div className="container-prose flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Agaia" className="h-9 w-auto" width={36} height={44} />
          <span className="font-display text-lg tracking-[0.2em] text-primary">AGAIA</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-9">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.exact ?? false }}
              activeProps={{ className: "text-primary" }}
              inactiveProps={{ className: "text-foreground/70 hover:text-primary" }}
              className="text-[0.78rem] uppercase tracking-[0.22em] transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/"
          hash="contacto"
          hashScrollIntoView={{ behavior: "smooth", block: "start" }}
          className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-xs uppercase tracking-[0.2em] hover:bg-primary/90 transition-colors"
        >
          Contacta
        </Link>
        <button onClick={() => setOpen(!open)} className="lg:hidden text-primary p-2" aria-label="Menú">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-prose py-6 flex flex-col gap-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-[0.22em] text-foreground/80 hover:text-primary"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/"
              hash="contacto"
              onClick={() => setOpen(false)}
              className="text-sm uppercase tracking-[0.22em] text-foreground/80 hover:text-primary"
            >
              Contacto
            </Link>
            <Link
              to="/"
              hash="contacto"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center px-5 py-3 rounded-full bg-primary text-primary-foreground text-xs uppercase tracking-[0.2em]"
            >
              Conecta con nosotros
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
