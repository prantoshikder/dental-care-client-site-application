"use client";

import { motion } from "framer-motion";
import { CalendarCheck, ClipboardList, Zap, Heart } from "lucide-react";

export default function ServicesProcess() {
  const steps = [
    {
      title: "Digital Consultation",
      desc: "Book your session online. We use AI diagnostics to preview your dental future.",
      icon: CalendarCheck,
    },
    {
      title: "Precision Planning",
      desc: "Our specialists create a custom 3D map for your specific treatment path.",
      icon: ClipboardList,
    },
    {
      title: "Advanced Treatment",
      desc: "Minimally invasive procedures powered by the latest clinical technology.",
      icon: Zap,
    },
    {
      title: "Continuous Aftercare",
      desc: "Long-term support and follow-ups to ensure your smile stays perfect.",
      icon: Heart,
    }
  ];

  return (
    <section className="py-32 bg-gray-50/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-sky-600 font-black text-[10px] uppercase tracking-[0.4em] mb-4"
          >
            The Patient Journey
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black text-gray-950 tracking-tighter"
          >
            How We Care <br />
            <span className="text-sky-600">For Your Smile.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group"
            >
              {/* Connector Line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] right-[-40%] h-px bg-gray-200 group-hover:bg-sky-500 transition-colors duration-500"></div>
              )}
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-[2rem] bg-white shadow-xl flex items-center justify-center text-sky-600 mb-8 group-hover:bg-sky-600 group-hover:text-white transition-all duration-500">
                  <step.icon size={36} />
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gray-900 text-white text-[10px] font-black flex items-center justify-center border-4 border-white">
                    0{i + 1}
                  </div>
                </div>
                
                <h4 className="text-xl font-black text-gray-950 mb-3 tracking-tight">{step.title}</h4>
                <p className="text-sm text-gray-500 font-medium leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
