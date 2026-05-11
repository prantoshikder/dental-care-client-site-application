import CTA from "@/src/components/ui/landing/CTA";
import FAQ from "@/src/components/ui/landing/FAQ";
import Gallery from "@/src/components/ui/landing/Gallery";
import HeroSection from "@/src/components/ui/landing/HeroSection";
import Process from "@/src/components/ui/landing/Process";
import Services from "@/src/components/ui/landing/Services";
import Stats from "@/src/components/ui/landing/Stats";
import WhyChooseUs from "@/src/components/ui/landing/WhyChooseUs";
import Testimonial from "@/src/components/ui/Testimonial";

export default function LandingPageContainer() {
  return (
    <>
      <HeroSection />
      <Stats />
      <WhyChooseUs />
      <Services />
      <Process />
      <Gallery />
      <Testimonial />
      <FAQ />
      <CTA />
    </>
  );
}
