import CTA from "@/src/components/ui/landing/CTA";
import HeroSection from "@/src/components/ui/landing/HeroSection";
import Services from "@/src/components/ui/landing/Services";
import WhyChooseUs from "@/src/components/ui/landing/WhyChooseUs";
import Testimonial from "@/src/components/ui/Testimonial";

export default function LandingPageContainer() {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <Services />
      <Testimonial />
      <CTA />
    </>
  );
}
