import { useEffect, useState } from "react";
import { ANNOUNCEMENTS } from "@/lib/site-config";
import { Leaf } from "lucide-react";

export function AnnouncementBar() {
  const [i, setI] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Fade in on mount.
    const inId = setTimeout(() => setVisible(true), 60);

    const HOLD = 5500;
    const FADE = 1200;
    const id = setInterval(() => {
      // Fade out current message.
      setVisible(false);
      // After fade-out finishes, swap text while invisible, then fade in.
      setTimeout(() => {
        setI((prev) => (prev + 1) % ANNOUNCEMENTS.length);
        // small delay so the new text starts at opacity 0 before transitioning to 1
        setTimeout(() => setVisible(true), 40);
      }, FADE);
    }, HOLD + FADE * 2);

    return () => {
      clearTimeout(inId);
      clearInterval(id);
    };
  }, []);

  return (
    <div className="fixed top-0 inset-x-0 z-[60] bg-primary text-primary-foreground h-8 flex items-center justify-center overflow-hidden border-b border-primary-foreground/10">
      <span
        className="flex items-center gap-3 px-6 text-[0.7rem] uppercase tracking-[0.28em] text-primary-foreground/90 transition-opacity duration-[1200ms] ease-in-out"
        style={{ opacity: visible ? 1 : 0 }}
      >
        <Leaf size={11} strokeWidth={1.4} className="text-secondary" />
        {ANNOUNCEMENTS[i]}
      </span>
    </div>
  );
}
