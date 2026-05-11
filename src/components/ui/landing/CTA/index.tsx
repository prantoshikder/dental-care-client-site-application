import { Phone } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
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
  );
}
