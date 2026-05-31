import { MessageCircle, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contacto" className="py-24 md:py-32">
      <div className="container-prose grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <span className="eyebrow">Contacto</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-primary leading-tight">
            Conectemos.
          </h2>
          <p className="mt-6 text-foreground/70 max-w-md">
            ¿Quieres conocer más sobre nuestros productos o trabajar con nosotros? Escríbenos
            y conversemos sobre bienestar, distribución o colaboración.
          </p>
          <a href="#" className="mt-10 inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-primary text-primary-foreground text-sm hover:bg-primary/90 transition-colors">
            <MessageCircle size={16} />
            <span className="uppercase tracking-[0.22em] text-xs">Escribir por WhatsApp</span>
          </a>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); }}
          className="lg:col-span-7 bg-secondary/40 rounded-3xl p-8 md:p-10 border border-border/60 space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Nombre" name="name" />
            <Field label="Correo" name="email" type="email" />
            <Field label="Teléfono" name="phone" />
            <Select label="Motivo" name="reason"
              options={["Comprar", "Distribución", "Colaboración", "Información general"]} />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-[0.22em] text-primary mb-2">Mensaje</label>
            <textarea name="message" rows={5}
              className="w-full rounded-xl bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary/60 transition-colors resize-none" />
          </div>
          <button type="submit"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground text-xs uppercase tracking-[0.22em] hover:bg-primary/90 transition-colors">
            Enviar mensaje <Send size={14} />
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.22em] text-primary mb-2">{label}</label>
      <input name={name} type={type}
        className="w-full rounded-xl bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary/60 transition-colors" />
    </div>
  );
}
function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.22em] text-primary mb-2">{label}</label>
      <select name={name}
        className="w-full rounded-xl bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary/60 transition-colors">
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}
