import SectionHeader from "@/src/components/shared/SectionHeader";
import ServiceCard from "@/src/components/ui/landing/Services/ServiceCard";
import {
  ArrowRight,
  HeartPulse,
  Scissors,
  Shield,
  Stethoscope,
} from "lucide-react";
import Link from "next/link";

export default function Services() {
  const featuredServices = [
    {
      title: "General Dentistry",
      description:
        "Routine checkups, cleanings, and fillings to keep your smile healthy and strong.",
      icon: Stethoscope,
    },
    {
      title: "Cosmetic Dentistry",
      description:
        "Enhance your smile with teeth whitening, veneers, and other aesthetic treatments.",
      icon: Scissors,
    },
    {
      title: "Dental Implants",
      description:
        "Permanent solutions for missing teeth that look and feel completely natural.",
      icon: Shield,
    },
    {
      title: "Emergency Care",
      description:
        "Immediate assistance for dental pain, broken teeth, and other urgent issues.",
      icon: HeartPulse,
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader
          title="Our Professional Services"
          subtitle="We provide a wide range of dental services to ensure your oral health is always at its best."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredServices.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sky-600 font-bold hover:gap-4 transition-all group text-lg"
          >
            View All Dental Services{" "}
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
