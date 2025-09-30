export default function Services() {
  const services = [
    {
      title: "Architecture & Strategy",
      desc: "System design, platform roadmaps, and technical governance.",
    },
    {
      title: "Product Engineering",
      desc: "Full‑stack delivery with CI/CD, testing and scalability in mind.",
    },
    {
      title: "Cloud & DevOps",
      desc: "Infra as code, platform engineering, and cost optimization.",
    },
    {
      title: "AI & Data Platforms",
      desc: "ML workflows, data pipelines, and intelligent applications.",
    },
  ];

  return (
    <section id="services" className="relative py-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>
      <div className="container container-px">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">What we do</h2>
        <p className="text-foreground/70 mt-3 max-w-2xl">End‑to‑end consulting and engineering to turn complex requirements into resilient products.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <article key={s.title} className="group rounded-2xl p-6 glass relative overflow-hidden">
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/0 via-primary/10 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="h-10 w-10 rounded-md bg-primary/20 text-primary grid place-items-center font-bold">{i+1}</div>
                <h3 className="mt-4 font-semibold text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-foreground/70">{s.desc}</p>
                <div className="mt-5 h-px bg-gradient-to-r from-white/10 to-transparent" />
                <p className="mt-3 text-xs text-foreground/60">Engagements from discovery to ongoing ownership.</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
