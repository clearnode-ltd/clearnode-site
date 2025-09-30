import Hero from "@/components/site/Hero";
import Services from "@/components/site/Services";
import Industries from "@/components/site/Industries";
import Process from "@/components/site/Process";
import CTA from "@/components/site/CTA";
import Layout from "@/components/site/Layout";
import { GlowField } from "@/components/site/Parallax";

export default function Index() {
  return (
    <Layout>
      <GlowField />
      <Hero />
      <Services />
      <Industries />
      <Process />
      <CTA />
    </Layout>
  );
}
