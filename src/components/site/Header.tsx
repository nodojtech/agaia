import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/agaia-logo-white-bg.png.asset.json";
import { waLink } from "@/lib/site-config";

const nav: { to: string; label: string }[] = [
  { to: "/productos", label: "Productos" },
  { to: "/tu-ritual", label: "Tu Ritual" },
  { to: "/manta-origen", label: "Manta Origen" },
  { to: "/regalos", label: "Bienestar Corporativo" },
  { to: "/distribuidor", label: "Conviértete en Distribuidor" },
  { to: "/nosotros", label: "Nosotros" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-8 inset-x-0 z-50 bg-background border-b border-border">
      <div className="w-full max-w-[1500px] mx-auto pl-4 pr-4 lg:pl-6 lg:pr-6 flex items-center justify-between h-20 md:h-24 gap-4">
        <Link to="/" aria-label="AGAIA — Inicio" className="flex items-center shrink-0">
          <img src={logoAsset.url} alt="AGAIA — Laboratorio de Bienestar" className="h-14 md:h-16 lg:h-20 w-auto" />
        </Link>
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6 whitespace-nowrap">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeProps={{ className: "text-primary" }}
              inactiveProps={{ className: "text-foreground/70 hover:text-primary" }}
              className="text-[0.68rem] xl:text-[0.72rem] uppercase tracking-[0.18em] transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex shrink-0 items-center px-4 xl:px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-[0.68rem] xl:text-xs uppercase tracking-[0.18em] hover:bg-primary/90 transition-colors"
        >
          Contacta
        </a>
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
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center px-5 py-3 rounded-full bg-primary text-primary-foreground text-xs uppercase tracking-[0.2em]"
            >
              Contacta
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
