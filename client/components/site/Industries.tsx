export default function Industries() {
  const items = [
    "Finance","Retail","Healthcare","Energy","Telecom","Public Sector","Logistics","SaaS","Education","Media"
  ];
  return (
    <section id="industries" className="py-16 border-t border-white/10">
      <div className="container container-px">
        <p className="text-sm uppercase tracking-widest text-foreground/60">Industries</p>
        <h2 className="text-2xl sm:text-3xl font-bold mt-2">We build across domains</h2>
      </div>
      <div className="mt-6 overflow-hidden">
        <div className="flex gap-8 whitespace-nowrap will-change-transform animate-marquee">
          {[...items, ...items].map((x, i) => (
            <div key={i} className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-sm">
              {x}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
