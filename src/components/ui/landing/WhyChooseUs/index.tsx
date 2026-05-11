import { Clock, Shield, Users } from "lucide-react";

export default function WhyChooseUs() {
  return (
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
  );
}
