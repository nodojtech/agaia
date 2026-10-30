import { Link, useNavigate } from "@tanstack/react-router";
import { CATEGORIES } from "@/components/site/Products";
import { Button } from "@/components/ui/button";
import { ShoppingBag, MessageCircle } from "lucide-react";
import { waLink } from "@/lib/site-config";

const selection = [
  { name: "Roll-On Calma", desc: "Aceite esencial de menta para una pausa de bienestar, estés donde estés.", tag: "Más vendido" },
  { name: "Agua de Linos Gratitud", desc: "Vainilla Bourbon para acompañar tus momentos de calma y descanso.", tag: "Favorito" },
  { name: "Agua de Linos Energía Vital", desc: "La frescura de la naranja para renovar los espacios de tu hogar.", tag: "Frescura y vitalidad" },
  { name: "Jabón Energía Vital", desc: "Aloe Vera, Vitamina E y aroma a naranja para tu ritual diario.", tag: "Ritual diario" },
  { name: "Kit Tres Pausas de Bienestar", desc: "Gratitud, Energía Vital y Equilibrio Natural en una caja de regalo.", tag: "Para regalar" },
  { name: "Sales Relajantes de Canela", desc: "Un aroma cálido y especiado para baños de pies y pausas de autocuidado.", tag: "Pausa de bienestar" },
];

const catalog = CATEGORIES.flatMap((category) => category.products);
const items = selection.flatMap((featured) => {
  const product = catalog.find((entry) => entry.name === featured.name);
  const image = product?.images?.[0];
  const presentation = product?.presentations[0];
  if (!product || !image || !presentation) return [];
  return [{ ...featured, name: product.name, img: image.src, alt: image.alt, ...presentation }];
});

export function BestSellers() {
  const navigate = useNavigate();
  return (
    <section id="mas-vendidos" className="pt-6 pb-12 md:pt-8 md:pb-16">
      <div className="container-prose">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <span className="eyebrow">Los más elegidos</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-primary leading-tight">
              Productos más vendidos
            </h2>
          </div>
          <p className="text-sm text-foreground/60 max-w-sm">
            Una selección de favoritos para empezar tu ritual Agaia.
          </p>
        </div>

        {/* Mobile: horizontal scroll · Desktop: grid */}
        <div className="-mx-5 lg:-mx-8 md:mx-0 overflow-hidden md:overflow-visible">
          <div className="flex md:grid md:grid-cols-3 lg:grid-cols-3 gap-5 md:gap-7 overflow-x-auto md:overflow-visible snap-x snap-mandatory px-5 md:px-0 pb-4 md:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {items.map((p) => (
              <article key={p.name} role="button" tabIndex={0} aria-label={`Ver detalles de ${p.name}`}
                onClick={(event) => { if (!(event.target instanceof Element) || !event.target.closest("a,button")) void navigate({ to: "/productos", hash: p.name }); }}
                onKeyDown={(event) => { if (event.target === event.currentTarget && (event.key === "Enter" || event.key === " ")) { event.preventDefault(); void navigate({ to: "/productos", hash: p.name }); } }}
                className="snap-start cursor-pointer min-w-0 shrink-0 w-full md:w-auto group rounded-lg bg-card border border-border/60 overflow-hidden shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-glow)] transition-all flex flex-col h-full focus-visible:ring-2 focus-visible:ring-ring">
                <div className="relative h-48 sm:h-52 overflow-hidden bg-secondary/40">
                  <img src={p.img} alt={p.alt} loading="lazy"
                    className="h-full w-full object-contain" />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-background/90 backdrop-blur text-[0.62rem] uppercase tracking-[0.2em] text-primary">
                    {p.tag}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-display text-xl text-primary leading-tight">{p.name}</h3>
                  <p className="mt-1.5 text-xs text-foreground/65 leading-relaxed">{p.desc}</p>
                  <div className="mt-4 flex items-center justify-between gap-3">
                    <span className="text-xs min-w-0 truncate text-foreground/65">{p.size}</span>
                    <span className="font-display text-lg text-primary">{p.price}</span>
                  </div>
                  <div className="mt-auto pt-4 flex items-center gap-2">
                    <Button asChild className="flex-1 h-auto px-3 py-2.5 rounded-full text-[0.7rem] uppercase tracking-[0.18em]">
                      <Link to="/productos" hash={p.name} hashScrollIntoView={{ behavior: "smooth", block: "start" }} aria-label={`Ver producto: ${p.name}`}>
                        <ShoppingBag size={13} /> Ver producto
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="icon" className="shrink-0 rounded-full border-primary/30 text-primary" >
                      <a href={waLink(`Hola, quiero consultar por ${p.name}.`)} target="_blank" rel="noopener noreferrer"
                        aria-label={`Consultar por WhatsApp: ${p.name}`}>
                      <MessageCircle size={14} />
                      </a>
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
