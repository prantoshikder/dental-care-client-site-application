import { ArrowRight, Star, Users } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
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
  );
}
