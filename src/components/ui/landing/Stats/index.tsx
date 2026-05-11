"use client";

import { motion } from "framer-motion";
import { Award, Calendar, Smile, Users } from "lucide-react";

const stats = [
  {
    label: "Happy Patients",
    value: "15,000+",
    icon: Users,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    label: "Years Experience",
    value: "25+",
    icon: Calendar,
    color: "text-sky-600",
    bgColor: "bg-sky-50",
  },
  {
    label: "Expert Specialists",
    value: "18+",
    icon: Award,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
  },
  {
    label: "Smile Makeovers",
    value: "8,000+",
    icon: Smile,
    color: "text-cyan-600",
    bgColor: "bg-cyan-50",
  },
];

export default function Stats() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-8 rounded-4xl border border-gray-50 hover:border-sky-100 hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-500 group"
            >
              <div
                className={`w-16 h-16 ${stat.bgColor} rounded-2xl flex items-center justify-center ${stat.color} mb-6 group-hover:scale-110 transition-transform duration-500`}
              >
                <stat.icon size={32} />
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
