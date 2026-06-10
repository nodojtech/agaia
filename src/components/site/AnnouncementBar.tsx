import { ANNOUNCEMENTS } from "@/lib/site-config";
import { Leaf } from "lucide-react";

export function AnnouncementBar() {
  // duplicate for seamless loop
  const items = [...ANNOUNCEMENTS, ...ANNOUNCEMENTS];
  return (
    <div className="fixed top-0 inset-x-0 z-[60] bg-primary text-primary-foreground h-8 flex items-center overflow-hidden border-b border-primary-foreground/10">
      <div className="flex w-max animate-marquee whitespace-nowrap will-change-transform">
        {items.map((msg, i) => (
          <span key={i} className="flex items-center gap-3 px-6 text-[0.7rem] uppercase tracking-[0.22em] text-primary-foreground/90">
            <Leaf size={11} strokeWidth={1.4} className="text-secondary" />
            {msg}
          </span>
        ))}
      </div>
    </div>
  );
}
