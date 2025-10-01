import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { pathname, hash } = useLocation();
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

    // Scroll to top when navigating to different pages
    if (pathname === '/' || pathname === '/contact') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname]);

  // Track active section based on scroll position
  useEffect(() => {
    if (pathname !== '/') {
      setActiveSection("");
      return;
    }

    const handleScroll = () => {
      const sections = ['services', 'industries', 'process'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            return;
          }
        }
      }

      // If we're at the top or above all sections, no section is active
      if (window.scrollY < 200) {
        setActiveSection("");
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (pathname === '/') {
      // Already on home, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Navigate to home
      navigate('/');
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (pathname !== '/') {
      // Navigate to home with hash
      navigate('/#' + sectionId);
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

  const isActiveLink = (section: string) => {
    return pathname === '/' && activeSection === section;
  };

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? "backdrop-blur-xl bg-background/60 border-b border-white/10" : "bg-transparent"
      }`}>
        <div className="container container-px flex items-center justify-between py-4">
          <a href="/" onClick={handleHomeClick} className="flex items-center gap-2 group cursor-pointer">
            <div className="h-8 w-8 rounded-md bg-primary/90 ring-4 ring-primary/20 grid place-items-center text-primary-foreground font-black">C</div>
            <span className="font-semibold tracking-tight text-lg">Clearnode Consulting</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a
              href="/"
              onClick={handleHomeClick}
              className={`hover:text-primary transition-colors ${pathname === '/' && !activeSection ? 'text-primary' : 'text-foreground/80'}`}
            >
              Home
            </a>
            <a
              href="#services"
              onClick={(e) => handleNavClick(e, 'services')}
              className={`hover:text-primary transition-colors ${isActiveLink('services') ? 'text-primary' : 'text-foreground/80'}`}
            >
              Services
            </a>
            <a
              href="#industries"
              onClick={(e) => handleNavClick(e, 'industries')}
              className={`hover:text-primary transition-colors ${isActiveLink('industries') ? 'text-primary' : 'text-foreground/80'}`}
            >
              Industries
            </a>
            <a
              href="#process"
              onClick={(e) => handleNavClick(e, 'process')}
              className={`hover:text-primary transition-colors ${isActiveLink('process') ? 'text-primary' : 'text-foreground/80'}`}
            >
              Process
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild variant="secondary" className="hidden sm:inline-flex bg-secondary hover:bg-secondary/80">
              <Link to="/contact">Talk to us</Link>
            </Button>

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

      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <div className={`fixed top-[73px] right-0 bottom-0 z-40 w-64 transform transition-transform duration-300 ease-in-out md:hidden ${
        mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="relative h-full glass overflow-hidden">
          <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute top-1/2 -left-20 h-40 w-40 rounded-full bg-accent/15 blur-3xl" />

          <nav className="relative flex flex-col p-6 gap-6 h-full">
            <a
              href="/"
              onClick={handleHomeClick}
              className={`text-lg hover:text-primary transition-colors ${pathname === '/' && !activeSection ? 'text-primary' : 'text-foreground/80'}`}
            >
              Home
            </a>
            <a
              href="#services"
              onClick={(e) => handleNavClick(e, 'services')}
              className={`text-lg hover:text-primary transition-colors ${isActiveLink('services') ? 'text-primary' : 'text-foreground/80'}`}
            >
              Services
            </a>
            <a
              href="#industries"
              onClick={(e) => handleNavClick(e, 'industries')}
              className={`text-lg hover:text-primary transition-colors ${isActiveLink('industries') ? 'text-primary' : 'text-foreground/80'}`}
            >
              Industries
            </a>
            <a
              href="#process"
              onClick={(e) => handleNavClick(e, 'process')}
              className={`text-lg hover:text-primary transition-colors ${isActiveLink('process') ? 'text-primary' : 'text-foreground/80'}`}
            >
              Process
            </a>
            <div className="mt-auto pt-4 border-t border-white/10">
              <Button asChild className="w-full">
                <Link to="/contact">Talk to us</Link>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
