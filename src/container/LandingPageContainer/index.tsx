import TestimonialSlider from "@/components/TestimonialSlider";
import SectionHeader from "@/src/components/SectionHeader";
import ServiceCard from "@/src/components/ServiceCard";
import {
  ArrowRight,
  Clock,
  HeartPulse,
  Phone,
  Scissors,
  Shield,
  Star,
  Stethoscope,
  Users,
} from "lucide-react";
import Link from "next/link";

export default function LandingPageContainer() {
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

  const testimonials = [
    {
      name: "Sarah Williams",
      role: "Patient",
      content:
        "The best dental experience I've ever had. The staff is professional and the treatment was painless. Highly recommended!",
      rating: 5,
    },
    {
      name: "James Miller",
      role: "Patient",
      content:
        "I was nervous about my root canal, but Dr. Johnson made me feel at ease. The technology they use is truly impressive.",
      rating: 5,
    },
    {
      name: "Emily Davis",
      role: "Patient",
      content:
        "My teeth whitening results are incredible! I finally have the confidence to smile in photos again. Thank you SmileCare!",
      rating: 5,
    },
    {
      name: "Michael Brown",
      role: "Patient",
      content:
        "Exceptional service! The dental implants look and feel completely natural. It has changed my life.",
      rating: 5,
    },
    {
      name: "Linda Wilson",
      role: "Patient",
      content:
        "The pediatric care here is amazing. My kids actually look forward to their dental appointments now!",
      rating: 5,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-sky-50 rounded-l-[100px] hidden lg:block"></div>
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-sm font-semibold">
              <Star size={16} fill="currentColor" />
              Trusted by 5,000+ Happy Patients
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight">
              A Brighter Smile <br />
              <span className="text-sky-600">Starts Here.</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
              Experience world-class dental care with a gentle touch. Our expert
              team uses the latest technology to ensure your comfort and
              satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-sky-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-sky-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-sky-200"
              >
                Book Appointment <ArrowRight size={20} />
              </Link>
              <Link
                href="/services"
                className="bg-white text-gray-900 border-2 border-gray-200 px-8 py-4 rounded-xl font-bold hover:border-sky-600 hover:text-sky-600 transition-all flex items-center justify-center"
              >
                Explore Services
              </Link>
            </div>
            <div className="flex items-center gap-8 pt-4">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gray-900">15+</span>
                <span className="text-sm text-gray-500 font-medium">
                  Years Experience
                </span>
              </div>
              <div className="w-px h-10 bg-gray-200"></div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gray-900">10k+</span>
                <span className="text-sm text-gray-500 font-medium">
                  Successful Procedures
                </span>
              </div>
              <div className="w-px h-10 bg-gray-200"></div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gray-900">4.9/5</span>
                <span className="text-sm text-gray-500 font-medium">
                  Patient Rating
                </span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gray-200 rounded-3xl overflow-hidden shadow-2xl relative">
              {/* Placeholder for Hero Image */}
              <div className="absolute inset-0 bg-linear-to-br from-sky-200 to-sky-400 flex items-center justify-center">
                <div className="text-white text-center p-8">
                  <p className="text-4xl font-bold mb-4 italic">
                    Friendly Care for All Ages
                  </p>
                  <p className="text-lg opacity-90">
                    State-of-the-art facility located in the heart of the city.
                  </p>
                </div>
              </div>
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block border border-gray-100">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <Users size={24} />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Available Doctors
                  </p>
                  <p className="text-lg font-bold text-gray-900">
                    Consultant Ready
                  </p>
                </div>
              </div>
              <button className="w-full py-2 bg-gray-50 rounded-lg text-sm font-bold text-sky-600 hover:bg-sky-50 transition-colors">
                Chat with Specialist
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex gap-4 items-start p-6 bg-white rounded-2xl border border-gray-100">
              <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 shrink-0">
                <Shield size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Safety First
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We follow the strictest sterilization protocols to ensure your
                  safety and well-being.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start p-6 bg-white rounded-2xl border border-gray-100">
              <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 shrink-0">
                <Users size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Expert Team
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Our highly qualified dentists bring decades of combined
                  experience to every patient.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start p-6 bg-white rounded-2xl border border-gray-100">
              <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Flexible Timing
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Open on weekends and late evenings to accommodate your busy
                  schedule.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            title="What Our Patients Say"
            subtitle="Don't just take our word for it. Here is what our satisfied patients have to say about their experience."
          />
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-sky-600 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-sky-500/20 translate-x-1/2 rounded-full z-0"></div>
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 italic">
            Ready to transform your smile?
          </h2>
          <p className="text-xl text-sky-50 opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of satisfied patients who have achieved their dream
            smile with us. Your first consultation is just a click away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-sky-600 px-10 py-4 rounded-xl font-bold hover:bg-sky-50 transition-colors shadow-lg"
            >
              Schedule Appointment Now
            </Link>
            <div className="flex items-center gap-3 px-6 py-4 justify-center">
              <Phone size={24} />
              <span className="text-2xl font-bold">(123) 456-7890</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
