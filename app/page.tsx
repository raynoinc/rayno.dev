import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { HowItWorks } from "@/components/sections/how-it-works";
import { WhyRayno } from "@/components/sections/why-rayno";
import { Products } from "@/components/sections/products";
import { Compare } from "@/components/sections/compare";
import { Modules } from "@/components/sections/modules";
import { Developers } from "@/components/sections/developers";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <WhyRayno />
        <Products />
        <Compare />
        <Modules />
        <Developers />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
