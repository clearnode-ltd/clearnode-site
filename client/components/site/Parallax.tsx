import { PropsWithChildren, useEffect, useRef } from "react";

export function ParallaxLayer({ depth = 0.2, className = "", children }: PropsWithChildren<{ depth?: number; className?: string }>) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const handle = () => {
      const y = window.scrollY;
      el.style.transform = `translate3d(0, ${y * depth}px, 0)`;
      raf = requestAnimationFrame(handle);
    };
    raf = requestAnimationFrame(handle);
    return () => cancelAnimationFrame(raf);
  }, [depth]);

  return <div ref={ref} className={className}>{children}</div>;
}

export function GlowField() {
  // Track mouse to move a radial glow background
  useEffect(() => {
    const move = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--glow-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--glow-y", `${e.clientY}px`);
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);
  return <div className="pointer-events-none fixed inset-0 -z-10 bg-glow" />;
}
