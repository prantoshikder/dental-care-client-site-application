import SectionHeader from "@/src/components/SectionHeader";
import ServiceCard from "@/src/components/ServiceCard";
import { 
  Stethoscope, 
  Scissors, 
  Shield, 
  HeartPulse, 
  Sparkles, 
  Smile, 
  Baby, 
  Microscope,
  ArrowRight
} from 'lucide-react';
import Link from "next/link";

export default function ServicesPageContainer() {
  const allServices = [
    {
      title: "General Dentistry",
      description: "Comprehensive checkups, cleanings, and digital X-rays to maintain your oral health.",
      icon: Stethoscope
    },
    {
      title: "Cosmetic Dentistry",
      description: "Veneers, bonding, and contouring to give you the perfect smile you've always wanted.",
      icon: Scissors
    },
    {
      title: "Dental Implants",
      description: "State-of-the-art implant solutions to replace missing teeth with natural-looking results.",
      icon: Shield
    },
    {
      title: "Emergency Services",
      description: "Same-day appointments for dental pain, accidents, and urgent dental needs.",
      icon: HeartPulse
    },
    {
      title: "Teeth Whitening",
      description: "Professional whitening treatments that can brighten your smile by several shades in one visit.",
      icon: Sparkles
    },
    {
      title: "Orthodontics",
      description: "Modern teeth straightening options including clear aligners and traditional braces.",
      icon: Smile
    },
    {
      title: "Pediatric Dentistry",
      description: "Gentle and fun dental care specifically designed for our younger patients.",
      icon: Baby
    },
    {
      title: "Root Canal Therapy",
      description: "Pain-free root canal treatments to save damaged teeth and eliminate infection.",
      icon: Microscope
    }
  ];

  return (
    <div className="pb-20">
      {/* Services Hero */}
      <section className="bg-sky-600 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Our Dental Services</h1>
          <p className="text-xl text-sky-100 max-w-3xl mx-auto leading-relaxed">
            From routine checkups to advanced cosmetic procedures, we offer a full range of dental services to keep your smile healthy and beautiful.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {allServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-sky-50 rounded-[40px] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Advanced Technology for Better Care</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We invest in the latest dental technology to provide more accurate diagnoses, more comfortable treatments, and faster recovery times for our patients.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["Digital 3D Imaging", "Laser Dentistry", "Intraoral Cameras", "Pain-Free Anesthesia"].map((tech, i) => (
                <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-2xl shadow-sm border border-sky-100">
                  <div className="w-8 h-8 bg-sky-600 rounded-lg flex items-center justify-center text-white shrink-0">
                    <ArrowRight size={16} />
                  </div>
                  <span className="font-bold text-gray-800">{tech}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/3 aspect-square bg-sky-200 rounded-3xl overflow-hidden relative shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-600/40 to-transparent flex items-center justify-center p-8 text-center text-white">
               <p className="text-2xl font-bold italic">Precision. Comfort. Results.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
