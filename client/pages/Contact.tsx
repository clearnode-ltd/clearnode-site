import Layout from "@/components/site/Layout";
import ContactForm from "@/components/site/ContactForm";

export default function Contact() {
  return (
    <Layout>
      <section className="pt-28 pb-16">
        <div className="container container-px">
          <h1 className="text-4xl font-bold">Let's talk</h1>
          <p className="mt-3 text-foreground/70 max-w-2xl">Tell us about your project. We'll get back within one business day.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <ContactForm />
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
