import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="py-20">
      <div className="container container-px">
        <div className="rounded-3xl glass p-8 md:p-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">Ready to build what’s next?</h2>
          <p className="mt-3 text-foreground/70 max-w-2xl mx-auto">Let’s discuss your goals and craft a roadmap that delivers value fast.</p>
          <div className="mt-6 flex justify-center gap-3">
            <Button asChild size="lg"><Link to="/contact">Book a call</Link></Button>
            <Button asChild size="lg" variant="secondary" className="bg-secondary hover:bg-secondary/80">
              <a href="#services">View services</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
