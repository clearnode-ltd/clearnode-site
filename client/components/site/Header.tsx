import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${
      scrolled ? "backdrop-blur-xl bg-background/60 border-b border-white/10" : "bg-transparent"
    }`}>
      <div className="container container-px flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="h-8 w-8 rounded-md bg-primary/90 ring-4 ring-primary/20 grid place-items-center text-primary-foreground font-black">C</div>
          <span className="font-semibold tracking-tight text-lg">Clearnode Consulting</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <NavLink to="/" className={({isActive})=>`hover:text-primary transition-colors ${isActive && pathname==='/'? 'text-primary' : 'text-foreground/80'}`}>Home</NavLink>
          <a href="#services" className="text-foreground/80 hover:text-primary transition-colors">Services</a>
          <a href="#industries" className="text-foreground/80 hover:text-primary transition-colors">Industries</a>
          <a href="#process" className="text-foreground/80 hover:text-primary transition-colors">Process</a>
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="secondary" className="hidden sm:inline-flex bg-secondary hover:bg-secondary/80">
            <Link to="/contact">Talk to us</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
