import logoAsset from "@/assets/agaia-logo-blue-bg.png.asset.json";
import { Instagram, Music2, Facebook, MessageCircle } from "lucide-react";
import { Link } from "@tanstack/react-router";

const navLinks: { label: string; to: string; hash?: string; exact?: boolean }[] = [
  { label: "Inicio", to: "/", exact: true },
  { label: "Productos", to: "/productos" },
  { label: "Tu Ritual", to: "/tu-ritual" },
  { label: "Manta Origen", to: "/manta-origen" },
  { label: "Bienestar Corporativo", to: "/regalos" },
  { label: "Conviértete en Distribuidor", to: "/distribuidor" },
  { label: "Nosotros", to: "/nosotros" },
  { label: "Contacto", to: "/", hash: "contacto" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-prose py-20 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <img
            src={logoAsset.url}
            alt="AGAIA — Laboratorio de Bienestar"
            className="w-full max-w-sm h-auto"
          />
          <p className="mt-6 text-sm text-primary-foreground/70 max-w-sm leading-relaxed">
            Elementos simples y naturales para acompañar momentos de calma, presencia y bienestar.
          </p>
        </div>
          <p className="mt-6 text-sm text-primary-foreground/70 max-w-sm leading-relaxed">
            Elementos simples y naturales para acompañar momentos de calma, presencia y bienestar.
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="eyebrow text-secondary">Navega</p>
          <ul className="mt-5 space-y-2.5 text-sm text-primary-foreground/80">
            {navLinks.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.to}
                  hash={l.hash}
                  className="hover:text-secondary transition-colors"
                >
                  {l.label}
                </Link>
              </li>
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
        <div className="container-prose py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/60">
          <p>© {new Date().getFullYear()} AGAIA · Laboratorio de bienestar</p>
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <li><a href="#" className="hover:text-secondary transition-colors">Política de privacidad</a></li>
            <li><a href="#" className="hover:text-secondary transition-colors">Términos y condiciones</a></li>
            <li><a href="#" className="hover:text-secondary transition-colors">Información legal</a></li>
          </ul>
          <p className="uppercase tracking-[0.22em] text-primary-foreground/50">Desarrollado con calma</p>
        </div>
      </div>
    </footer>
  );
}
