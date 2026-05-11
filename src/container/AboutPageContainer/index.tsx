import SectionHeader from "@/src/components/shared/SectionHeader";
import {
  Award,
  CheckCircle,
  Globe,
  Heart,
  Shield,
  Star,
  Users,
} from "lucide-react";

export default function AboutPageContainer() {
  const stats = [
    { label: "Successful Surgeries", value: "2,500+", icon: Award },
    { label: "Happy Patients", value: "10,000+", icon: Heart },
    { label: "Years of Service", value: "15+", icon: CheckCircle },
    { label: "Expert Doctors", value: "12", icon: Users },
  ];

  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Principal Dentist",
      specialty: "Cosmetic & Implant Dentistry",
    },
    {
      name: "Dr. Michael Chen",
      role: "Orthodontist",
      specialty: "Invisalign & Braces Expert",
    },
    {
      name: "Dr. Elena Rodriguez",
      role: "Pediatric Dentist",
      specialty: "Gentle Care Specialist",
    },
  ];

  return (
    <div className="pb-20">
      {/* About Hero */}
      <section className="bg-sky-600 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Excellence in Dental Care
          </h1>
          <p className="text-xl text-sky-100 max-w-3xl mx-auto leading-relaxed">
            Our mission is to provide high-quality dental care in a comfortable
            and friendly environment. We believe everyone deserves a beautiful,
            healthy smile.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-4/5 bg-sky-100 rounded-[40px] overflow-hidden shadow-2xl relative">
              <div className="absolute inset-0 bg-linear-to-br from-sky-600/20 to-transparent"></div>
              {/* Floating Badge */}
              <div className="absolute top-8 left-8 bg-white p-6 rounded-2xl shadow-xl border border-sky-50 flex items-center gap-4">
                <div className="w-12 h-12 bg-sky-600 rounded-xl flex items-center justify-center text-white">
                  <Star size={24} fill="currentColor" />
                </div>
                <div>
                  <p className="text-gray-900 font-bold">Award Winning</p>
                  <p className="text-gray-500 text-sm">Clinic Since 2015</p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">
                Your Journey to a Perfect Smile Starts Here
              </h2>
              <div className="h-1.5 w-20 bg-sky-600 rounded-full"></div>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              Founded in 2008, DentalCare Clinic has grown from a small family
              practice to a state-of-the-art dental facility. We&apos;ve stayed
              true to our roots: providing personalized, compassionate care to
              every member of your family.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed font-medium">
              We understand that visiting the dentist can be stressful for many.
              That&apos;s why we&apos;ve designed our clinic to be a soothing
              space, where technology and comfort meet.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-6 border-t border-gray-100">
              {stats.map((stat, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex items-center gap-2 text-sky-600">
                    <stat.icon size={18} />
                    <span className="text-2xl font-bold text-gray-900">
                      {stat.value}
                    </span>
                  </div>
                  <p className="text-gray-500 font-bold text-sm uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <SectionHeader
            title="Meet Our Experts"
            subtitle="Our team of board-certified dentists is committed to continuous education and clinical excellence."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((doctor, i) => (
              <div
                key={i}
                className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="w-24 h-24 bg-sky-50 rounded-3xl mx-auto mb-8 flex items-center justify-center text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                  <Users size={40} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {doctor.name}
                </h3>
                <p className="text-sky-600 font-bold mb-4">{doctor.role}</p>
                <div className="bg-gray-50 py-3 px-6 rounded-full inline-block text-gray-500 text-sm font-medium">
                  {doctor.specialty}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-gray-900 rounded-[60px] p-10 md:p-20 text-white text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-600/10 rounded-full -mr-32 -mt-32"></div>
            <div className="relative z-10 space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold italic">
                &quot;We don&apos;t just fix teeth, we build confidence.&quot;
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Every smile we restore is a testament to our commitment to
                excellence and our passion for dental health. Join our family of
                happy patients today.
              </p>
              <div className="flex justify-center gap-8 pt-4">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <Shield size={24} className="text-sky-400" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
                    Trusted
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <Globe size={24} className="text-sky-400" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
                    Global Standards
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
