import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu on route change
    setMobileMenuOpen(false);
  }, [pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? "backdrop-blur-xl bg-background/60 border-b border-white/10" : "bg-transparent"
      }`}>
        <div className="container container-px flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="h-8 w-8 rounded-md bg-primary/90 ring-4 ring-primary/20 grid place-items-center text-primary-foreground font-black">C</div>
            <span className="font-semibold tracking-tight text-lg">Clearnode Consulting</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <NavLink to="/" className={({isActive})=>`hover:text-primary transition-colors ${isActive && pathname==='/'? 'text-primary' : 'text-foreground/80'}`}>Home</NavLink>
            <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="text-foreground/80 hover:text-primary transition-colors">Services</a>
            <a href="#industries" onClick={(e) => handleNavClick(e, 'industries')} className="text-foreground/80 hover:text-primary transition-colors">Industries</a>
            <a href="#process" onClick={(e) => handleNavClick(e, 'process')} className="text-foreground/80 hover:text-primary transition-colors">Process</a>
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild variant="secondary" className="hidden sm:inline-flex bg-secondary hover:bg-secondary/80">
              <Link to="/contact">Talk to us</Link>
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-foreground/80 hover:text-foreground transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div className={`fixed top-[73px] right-0 bottom-0 z-40 w-64 bg-background border-l border-white/10 transform transition-transform duration-300 ease-in-out md:hidden ${
        mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <nav className="flex flex-col p-6 gap-6">
          <NavLink
            to="/"
            className={({isActive})=>`text-lg hover:text-primary transition-colors ${isActive && pathname==='/'? 'text-primary' : 'text-foreground/80'}`}
          >
            Home
          </NavLink>
          <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="text-lg text-foreground/80 hover:text-primary transition-colors">Services</a>
          <a href="#industries" onClick={(e) => handleNavClick(e, 'industries')} className="text-lg text-foreground/80 hover:text-primary transition-colors">Industries</a>
          <a href="#process" onClick={(e) => handleNavClick(e, 'process')} className="text-lg text-foreground/80 hover:text-primary transition-colors">Process</a>
          <div className="mt-4 pt-4 border-t border-white/10">
            <Button asChild className="w-full">
              <Link to="/contact">Talk to us</Link>
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
}
