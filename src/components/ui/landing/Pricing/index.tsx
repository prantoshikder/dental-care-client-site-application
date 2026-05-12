import SectionHeader from "@/src/components/shared/SectionHeader";
import { Check, Zap } from "lucide-react";

const plans = [
  {
    name: "Standard Care",
    price: "49",
    description: "Perfect for routine maintenance and preventative care.",
    features: [
      "2 Professional Cleanings",
      "Comprehensive Oral Exam",
      "Digital X-Rays",
      "1 Emergency Visit",
      "10% Off Other Services",
    ],
    isPopular: false,
    color: "bg-gray-50",
    textColor: "text-gray-900",
  },
  {
    name: "Premium Smile",
    price: "89",
    description: "Enhanced care for those who want that extra sparkle.",
    features: [
      "Everything in Standard",
      "Professional Whitening",
      "Fluoride Treatment",
      "No-Wait Appointments",
      "20% Off Other Services",
    ],
    isPopular: true,
    color: "bg-sky-600",
    textColor: "text-white",
  },
  {
    name: "Family Plus",
    price: "159",
    description: "Complete dental coverage for the entire family.",
    features: [
      "Up to 4 Family Members",
      "Priority Booking",
      "Orthodontic Consultation",
      "Annual Cosmetic Credit",
      "25% Off Other Services",
    ],
    isPopular: false,
    color: "bg-gray-900",
    textColor: "text-white",
  },
];

export default function Pricing() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader
          title="Affordable Membership Plans"
          subtitle="No insurance? No problem. Our membership plans provide comprehensive dental care with clear, upfront pricing."
        />

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-[3rem] p-10 flex flex-col h-full border border-gray-100 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl ${
                plan.isPopular ? "shadow-xl shadow-sky-500/20" : "shadow-sm"
              } ${plan.color}`}
            >
              {plan.isPopular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 font-black text-[10px] uppercase tracking-widest px-6 py-2 rounded-full shadow-lg flex items-center gap-2">
                  <Zap size={14} fill="currentColor" />
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className={`text-xl font-black mb-2 ${plan.textColor}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className={`text-5xl font-black ${plan.textColor}`}>
                    ${plan.price}
                  </span>
                  <span className={`text-sm font-bold opacity-60 ${plan.textColor}`}>
                    /month
                  </span>
                </div>
                <p className={`mt-4 text-sm leading-relaxed opacity-70 ${plan.textColor}`}>
                  {plan.description}
                </p>
              </div>

              <div className="space-y-4 mb-10 grow">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                        plan.isPopular ? "bg-white/20" : "bg-sky-100"
                      }`}
                    >
                      <Check
                        size={12}
                        className={plan.isPopular ? "text-white" : "text-sky-600"}
                      />
                    </div>
                    <span className={`text-sm font-medium ${plan.textColor}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                  plan.isPopular
                    ? "bg-white text-sky-600 hover:bg-gray-100 shadow-xl"
                    : "bg-gray-900 text-white hover:bg-sky-600 shadow-lg"
                }`}
              >
                Choose This Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
