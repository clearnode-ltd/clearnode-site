export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-16">
      <div className="container container-px py-10 grid gap-6 md:grid-cols-3 text-sm text-foreground/70">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="h-7 w-7 rounded-md bg-primary/90 grid place-items-center text-primary-foreground font-black">C</div>
            <span className="font-semibold">Clearnode Consulting Ltd</span>
          </div>
          <p className="max-w-sm">Architecting, building, and managing software for all industries.</p>
        </div>
        <div>
          <p className="font-medium text-foreground/90 mb-2">Offices</p>
          <p>Remote-first, global delivery</p>
        </div>
        <div>
          <p className="font-medium text-foreground/90 mb-2">Contact</p>
          <a href="mailto:hello@clearnode.consulting" className="hover:text-primary">hello@clearnode.consulting</a>
        </div>
      </div>
      <div className="container container-px py-6 border-t border-white/10 text-xs text-foreground/60">© {new Date().getFullYear()} Clearnode Consulting Ltd. All rights reserved.</div>
    </footer>
  );
}
