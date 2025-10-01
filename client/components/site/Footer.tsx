import { Calendar } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-16">
      <div className="container container-px py-10 grid gap-6 md:grid-cols-3 text-sm text-foreground/70">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="h-7 w-7 rounded-md bg-primary/90 grid place-items-center text-primary-foreground font-black">C</div>
            <span className="font-semibold">Clearnode Consulting Ltd</span>
          </div>
          <p className="max-w-sm">
            Clearnode Consulting Ltd - We build intelligent software solutions. Specializing in AI integration, SaaS platforms, and full-stack development for growing businesses. Based in the UK.
          </p>
        </div>
        <div>
          <p className="font-medium text-foreground/90 mb-2">Offices</p>
          <p>Remote-first, global delivery</p>
          <p>71-75 Shelton Street, Covent Garden, London, United Kingdom, WC2H 9JQ</p>
        </div>
        <div>
          <p className="font-medium text-foreground/90 mb-2">Contact</p>
          <a href="mailto:hello@clearnode.co.uk" className="hover:text-primary block mb-2">hello@clearnode.co.uk</a>
          <a
            href="https://calendly.com/okwudili-ezeoke-clearnode/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <Calendar size={16} />
            <span>Book a 30min call</span>
          </a>
        </div>
      </div>
      <div className="container container-px py-6 border-t border-white/10 text-xs text-foreground/60">
        © {new Date().getFullYear()} Clearnode Consulting Ltd. All rights reserved.
      </div>
    </footer>
  );
}