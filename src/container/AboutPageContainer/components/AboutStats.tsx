"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface StatItem {
  label: string;
  value: string;
  icon: LucideIcon;
  color: string;
  bg: string;
}

interface AboutStatsProps {
  stats: StatItem[];
}

export default function AboutStats({ stats }: AboutStatsProps) {
  return (
    <section className="relative z-30 -mt-20 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-white p-10 rounded-[3rem] border border-gray-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] flex flex-col items-center text-center transition-all hover:-translate-y-2 hover:shadow-[0_48px_80px_-24px_rgba(0,0,0,0.12)]"
            >
              <div className={`w-16 h-16 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                <stat.icon size={32} />
              </div>
              <div className="space-y-2">
                <h3 className="text-4xl font-black text-gray-950 tracking-tighter">{stat.value}</h3>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">{stat.label}</p>
              </div>
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-8 h-1 bg-gray-100 rounded-full group-hover:w-16 group-hover:bg-sky-500 transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
