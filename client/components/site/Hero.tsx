import { Button } from "@/components/ui/button";
import { ParallaxLayer } from "./Parallax";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-[.12]" />
        <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-primary/25 blur-3xl" />
        <div className="absolute top-40 -right-24 h-96 w-96 rounded-full bg-accent/25 blur-3xl" />
      </div>

      <div className="container container-px relative">
        <ParallaxLayer depth={-0.08} className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            We architect, build, and operate modern software.
          </h1>
        </ParallaxLayer>

        <ParallaxLayer depth={-0.05} className="max-w-2xl mt-6">
          <p className="text-lg text-foreground/70">
            Clearnode Consulting Ltd partners with teams to deliver reliable, secure, and scalable products across industries.
          </p>
        </ParallaxLayer>

        <ParallaxLayer depth={-0.03} className="mt-10 flex flex-wrap gap-3">
          <Button asChild size="lg" className="shadow-soft">
            <Link to="/contact">Start a project</Link>
          </Button>
          <Button asChild size="lg" variant="secondary" className="bg-secondary/80 hover:bg-secondary">
            <a href="#services">Explore services</a>
          </Button>
        </ParallaxLayer>

        <ParallaxLayer depth={0.06} className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {["Cloud", "AI", "Fintech", "Healthcare"].map((t) => (
            <div key={t} className="glass rounded-xl p-4 text-sm text-center animate-fadeUp" style={{animationDelay: `${Math.random()*0.3+0.05}s`}}>
              {t}
            </div>
          ))}
        </ParallaxLayer>
      </div>

      <svg className="absolute bottom-0 left-1/2 -translate-x-1/2 text-foreground/40 animate-float" width="20" height="60" viewBox="0 0 20 60" fill="none" aria-hidden>
        <circle cx="10" cy="10" r="4" fill="currentColor" />
        <rect x="9" y="18" width="2" height="36" fill="currentColor" />
      </svg>
    </section>
  );
}
