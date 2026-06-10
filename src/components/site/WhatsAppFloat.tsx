import { waLink } from "@/lib/site-config";

export function WhatsAppFloat() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed z-[55] bottom-5 right-5 md:bottom-7 md:right-7 group inline-flex items-center gap-2.5 pl-3 pr-4 py-3 rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-8px_rgb(37_211_102/0.55)] hover:shadow-[0_14px_40px_-8px_rgb(37_211_102/0.7)] hover:-translate-y-0.5 transition-all animate-wa-pulse"
    >
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/15">
        <svg viewBox="0 0 32 32" width="16" height="16" fill="currentColor" aria-hidden>
          <path d="M19.11 17.39c-.28-.14-1.64-.81-1.9-.9-.25-.1-.44-.14-.62.14-.18.28-.71.9-.87 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.43-2.25-1.39-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.49.14-.16.18-.28.28-.46.09-.18.05-.35-.02-.49-.07-.14-.62-1.5-.85-2.05-.22-.54-.45-.46-.62-.47l-.53-.01c-.18 0-.46.07-.7.35-.25.28-.92.9-.92 2.2 0 1.3.94 2.55 1.07 2.73.13.18 1.85 2.83 4.49 3.97.63.27 1.12.43 1.5.55.63.2 1.2.17 1.66.1.51-.08 1.56-.64 1.78-1.26.22-.62.22-1.15.16-1.26-.07-.11-.25-.18-.53-.32zM16.03 5.34c-5.9 0-10.7 4.8-10.7 10.7 0 1.88.49 3.72 1.43 5.35L5 27l5.78-1.71a10.66 10.66 0 0 0 5.24 1.37h.01c5.9 0 10.7-4.8 10.7-10.7 0-2.86-1.11-5.55-3.13-7.57a10.63 10.63 0 0 0-7.57-3.05zm0 19.6h-.01a8.89 8.89 0 0 1-4.53-1.24l-.32-.19-3.43 1.01 1.03-3.34-.21-.34a8.87 8.87 0 0 1-1.36-4.74c0-4.9 4-8.9 8.9-8.9 2.38 0 4.61.93 6.29 2.61a8.83 8.83 0 0 1 2.6 6.29c.01 4.9-3.98 8.9-8.88 8.9z"/>
        </svg>
      </span>
      <span className="text-xs font-medium tracking-wide hidden sm:inline">Asesoría</span>
    </a>
  );
}
