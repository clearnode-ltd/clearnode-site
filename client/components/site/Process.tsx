export default function Process() {
  const steps = [
    { title: "Discover", text: "We clarify goals, constraints, and success metrics." },
    { title: "Design", text: "Architecture, UX, and delivery plans aligned with business." },
    { title: "Build", text: "Iterative engineering with quality gates and automation." },
    { title: "Operate", text: "Monitoring, security, and continuous improvement." },
  ];
  return (
    <section id="process" className="py-20">
      <div className="container container-px">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Our approach</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.title} className="group relative p-6 rounded-2xl glass">
              <div className="text-6xl font-black text-primary/20 absolute -top-2 -right-2">0{i+1}</div>
              <h3 className="font-semibold text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-foreground/70">{s.text}</p>
              <div className="mt-6 h-1 w-12 bg-primary/50 rounded-full group-hover:w-20 transition-all" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
