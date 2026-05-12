"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, Globe, CheckCircle } from "lucide-react";

export default function AboutAccreditations() {
  const certifications = [
    { label: "ISO 9001:2015", icon: ShieldCheck, desc: "Quality Management Certified" },
    { label: "ADA Platinum", icon: Award, iconColor: "text-amber-500", desc: "Top Clinic Performance" },
    { label: "GDPR Compliant", icon: Globe, iconColor: "text-sky-500", desc: "Data Security Assurance" },
    { label: "HIPAA Verified", icon: CheckCircle, iconColor: "text-green-500", desc: "Patient Privacy Standards" }
  ];

  return (
    <section className="py-24 bg-gray-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center space-y-4 group"
            >
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-sky-500/50 transition-colors">
                <cert.icon size={32} className={`${cert.iconColor || 'text-white'} group-hover:scale-110 transition-transform duration-500`} />
              </div>
              <div>
                <h5 className="text-white font-black text-lg tracking-tight mb-1">{cert.label}</h5>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{cert.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
