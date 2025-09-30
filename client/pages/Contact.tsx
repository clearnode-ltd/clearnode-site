import Layout from "@/components/site/Layout";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <Layout>
      <section className="pt-28 pb-16">
        <div className="container container-px">
          <h1 className="text-4xl font-bold">Let’s talk</h1>
          <p className="mt-3 text-foreground/70 max-w-2xl">Tell us about your project. We’ll get back within one business day.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <form className="glass rounded-2xl p-6 grid gap-4">
              <input required placeholder="Name" className="h-11 px-3 rounded-md bg-transparent border focus:outline-none focus:ring-2 focus:ring-primary/50" />
              <input required type="email" placeholder="Email" className="h-11 px-3 rounded-md bg-transparent border focus:outline-none focus:ring-2 focus:ring-primary/50" />
              <textarea required placeholder="Project details" rows={6} className="px-3 py-2 rounded-md bg-transparent border focus:outline-none focus:ring-2 focus:ring-primary/50" />
              <Button type="submit" className="w-full">Send</Button>
            </form>
            <div className="rounded-2xl glass p-6">
              <p className="font-medium">Prefer email?</p>
              <a href="mailto:hello@clearnode.consulting" className="text-primary">hello@clearnode.consulting</a>
              <div className="mt-6 h-px bg-white/10" />
              <p className="mt-4 text-sm text-foreground/70">By submitting, you agree to be contacted about your inquiry.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
