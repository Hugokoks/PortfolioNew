// useActiveSection.ts
import { useEffect, useRef, useState } from "react";

const sections = [
  { id: "hero", label: "Hero" },
  { id: "values", label: "What I do" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About me" },
  { id: "contact", label: "Contact" },
];

export function getSections() {
  return sections;
}

export default function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>(sections[0].id);

  const manualTargetRef = useRef<string | null>(null);
  const manualTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      let current = sections[0].id;
      for (const { id } of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        // tweak: kdy považujeme sekci za "active"
        if (
          rect.top <= window.innerHeight * 0.45 &&
          rect.bottom >= window.innerHeight * 0.15
        ) {
          current = id;
          break;
        }
      }

      const manualTarget = manualTargetRef.current;
      if (manualTarget) {
        if (current === manualTarget) {
          setActiveSection(current);
          manualTargetRef.current = null;
          if (manualTimerRef.current) {
            window.clearTimeout(manualTimerRef.current);
            manualTimerRef.current = null;
          }
        }
        return;
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (manualTimerRef.current) window.clearTimeout(manualTimerRef.current);
    };
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    manualTargetRef.current = id;
    if (manualTimerRef.current) window.clearTimeout(manualTimerRef.current);
    manualTimerRef.current = window.setTimeout(() => {
      manualTargetRef.current = null;
      manualTimerRef.current = null;
    }, 2000);
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return { activeSection, scrollTo };
}
