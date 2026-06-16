import { useEffect, useState } from "react";
import { ANNOUNCEMENTS } from "@/lib/site-config";
import { Leaf } from "lucide-react";

export function AnnouncementBar() {
  const [i, setI] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Each cycle: hold visible ~5.5s, fade out ~0.9s, swap, fade in.
    const HOLD = 5500;
    const FADE = 900;
    const id = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setI((prev) => (prev + 1) % ANNOUNCEMENTS.length);
        setVisible(true);
      }, FADE);
    }, HOLD + FADE);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="fixed top-0 inset-x-0 z-[60] bg-primary text-primary-foreground h-8 flex items-center justify-center overflow-hidden border-b border-primary-foreground/10">
      <span
        key={i}
        className="flex items-center gap-3 px-6 text-[0.7rem] uppercase tracking-[0.28em] text-primary-foreground/90 transition-opacity duration-[900ms] ease-in-out"
        style={{ opacity: visible ? 1 : 0 }}
      >
        <Leaf size={11} strokeWidth={1.4} className="text-secondary" />
        {ANNOUNCEMENTS[i]}
      </span>
    </div>
  );
}
