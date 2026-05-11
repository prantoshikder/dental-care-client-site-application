"use client";

import SectionHeader from "@/src/components/shared/SectionHeader";
import { motion } from "framer-motion";
import { CalendarCheck, ClipboardList, Stethoscope, Sparkles } from "lucide-react";

const steps = [
  {
    title: "Book Appointment",
    description: "Easily schedule your visit online or by phone at your convenience.",
    icon: CalendarCheck,
  },
  {
    title: "Expert Consultation",
    description: "Meet our specialists for a thorough examination and personalized plan.",
    icon: ClipboardList,
  },
  {
    title: "Comfortable Treatment",
    description: "Receive high-quality care using our advanced, pain-free technology.",
    icon: Stethoscope,
  },
  {
    title: "Your New Smile",
    description: "Walk out with a healthy, confident smile you'll love to show off.",
    icon: Sparkles,
  },
];

export default function Process() {
  return (
    <section className="py-24 bg-sky-50/50">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader
          title="How It Works"
          subtitle="Your journey to a perfect smile is simple, transparent, and completely focused on your comfort."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-sky-100 -translate-y-12" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative flex flex-col items-center text-center group"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-sky-600 font-black shadow-lg border border-sky-50 z-10 group-hover:bg-sky-600 group-hover:text-white transition-colors duration-500">
                0{index + 1}
              </div>

              {/* Icon Container */}
              <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center text-sky-600 mb-8 shadow-xl shadow-sky-500/5 relative z-1 group-hover:-translate-y-2 transition-transform duration-500 border border-sky-50">
                <step.icon size={40} />
              </div>

              <h3 className="text-xl font-extrabold text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm max-w-[240px]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
