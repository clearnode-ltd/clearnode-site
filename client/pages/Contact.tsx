import Layout from "@/components/site/Layout";
import ContactForm from "@/components/site/ContactForm";
import { Calendar } from "lucide-react";

export default function Contact() {
  return (
    <Layout>
      <section className="pt-28 pb-16">
        <div className="container container-px">
          <h1 className="text-4xl font-bold">Let's talk</h1>
          <p className="mt-3 text-foreground/70 max-w-2xl">Tell us about your project. We'll get back within one business day.</p>

          {/* Calendly CTA */}
          <div className="mt-6 glass rounded-xl p-4 inline-flex items-center gap-3">
            <Calendar className="text-primary" size={20} />
            <span className="text-sm text-foreground/80">Prefer a quick call?</span>
            <a
              href="https://calendly.com/okwudili-ezeoke-clearnode/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors font-medium text-sm underline"
            >
              Book 30min on my calendar
            </a>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <ContactForm />
            <div className="rounded-2xl glass p-6">
              <p className="font-medium">Prefer email?</p>
              <a href="mailto:hello@clearnode.co.uk" className="text-primary">hello@clearnode.co.uk</a>
              <div className="mt-6 h-px bg-white/10" />
              <p className="mt-4 text-sm text-foreground/70">By submitting, you agree to be contacted about your inquiry.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
