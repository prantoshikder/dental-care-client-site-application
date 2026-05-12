import CTA from "@/src/components/ui/landing/CTA";
import Emergency from "@/src/components/ui/landing/Emergency";
import FAQ from "@/src/components/ui/landing/FAQ";
import Gallery from "@/src/components/ui/landing/Gallery";
import HeroSection from "@/src/components/ui/landing/HeroSection";
import Newsletter from "@/src/components/ui/landing/Newsletter";
import Pricing from "@/src/components/ui/landing/Pricing";
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
      <Emergency />
      <WhyChooseUs />
      <Services />
      <Pricing />
      <Process />
      <Gallery />
      <Testimonial />
      <FAQ />
      <Newsletter />
      <CTA />
    </>
  );
}
