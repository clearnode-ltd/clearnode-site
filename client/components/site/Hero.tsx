import { Button } from "@/components/ui/button";
import { ParallaxLayer } from "./Parallax";
import { Link } from "react-router-dom";

export default function Hero() {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-[.12]" />
        <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-primary/25 blur-3xl" />
        <div className="absolute top-40 -right-24 h-96 w-96 rounded-full bg-accent/25 blur-3xl" />
      </div>

      <div className="container container-px relative min-h-[70vh] sm:min-h-[60vh] flex flex-col justify-between">
        <ParallaxLayer depth={-0.08} className="max-w-3xl">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
            We architect, build, and operate modern software.
          </h1>
        </ParallaxLayer>

        <ParallaxLayer depth={-0.05} className="max-w-2xl mt-6">
          <p className="text-xl text-foreground/70">
            We eliminate technical risk. From cloud architecture to AI platforms, Clearnode delivers enterprise-grade software that scales with your business—across healthcare, fintech, and high-growth industries.
          </p>
        </ParallaxLayer>

        <ParallaxLayer depth={-0.03} className="mt-10 flex flex-wrap gap-3">
          <Button asChild size="lg" className="shadow-soft">
            <Link to="/contact">Start a project</Link>
          </Button>
          <Button asChild size="lg" variant="secondary" className="bg-secondary/80 hover:bg-secondary">
            <a href="#services" onClick={(e) => { e.preventDefault(); scrollToServices(); }}>Explore services</a>
          </Button>
        </ParallaxLayer>

        <ParallaxLayer depth={0.06} className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {["Cloud", "AI", "Fintech", "Healthcare"].map((t) => (
            <div key={t} className="glass rounded-xl p-4 text-base text-center animate-fadeUp" style={{animationDelay: `${Math.random()*0.3+0.05}s`}}>
              {t}
            </div>
          ))}
        </ParallaxLayer>
      </div>

      <button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground/40 hover:text-foreground/60 transition-colors cursor-pointer animate-float focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-full p-2"
        aria-label="Scroll to services"
      >
        <svg width="20" height="60" viewBox="0 0 20 60" fill="none">
          <circle cx="10" cy="10" r="4" fill="currentColor" />
          <rect x="9" y="18" width="2" height="36" fill="currentColor" />
        </svg>
      </button>
    </section>
  );
}
