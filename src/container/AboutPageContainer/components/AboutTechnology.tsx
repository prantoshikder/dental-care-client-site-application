"use client";

import { motion } from "framer-motion";
import { Scan, Cpu, Radio, Zap } from "lucide-react";

export default function AboutTechnology() {
  const techs = [
    {
      title: "Digital 3D Scanning",
      desc: "High-precision intraoral scanners that eliminate the need for messy traditional molds, providing a 1:1 digital map of your smile.",
      icon: Scan,
      color: "from-sky-400 to-sky-600"
    },
    {
      title: "AI-Driven Diagnostics",
      desc: "Utilizing advanced algorithms to detect early-stage dental issues with 99.9% accuracy before they become visible to the naked eye.",
      icon: Cpu,
      color: "from-indigo-400 to-indigo-600"
    },
    {
      title: "Laser Precision",
      desc: "Minimally invasive laser technology for faster healing, reduced discomfort, and absolute surgical accuracy in soft tissue treatments.",
      icon: Zap,
      color: "from-cyan-400 to-cyan-600"
    },
    {
      title: "Low-Dose Digital Imaging",
      desc: "Modern digital X-rays that reduce radiation exposure by up to 90% compared to traditional films while providing instant, HD clarity.",
      icon: Radio,
      color: "from-blue-400 to-blue-600"
    }
  ];

  return (
    <section className="py-32 bg-gray-50/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-10 mb-20">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 text-sky-600 font-black text-[10px] uppercase tracking-[0.4em] mb-6"
            >
              <Cpu size={16} />
              The Digital Frontier
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black text-gray-950 leading-[0.9] tracking-tighter"
            >
              Precision Through <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-600 to-indigo-600">Pure Innovation.</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-gray-500 font-medium max-w-sm"
          >
            We invest in the world's most advanced dental technologies to ensure your treatment is faster, safer, and completely pain-free.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techs.map((tech, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-10 bg-white rounded-[3rem] border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className={`w-16 h-16 rounded-2xl bg-linear-to-br ${tech.color} flex items-center justify-center text-white mb-8 shadow-lg shadow-sky-500/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                <tech.icon size={32} />
              </div>
              <h4 className="text-xl font-black text-gray-950 mb-4 tracking-tight">{tech.title}</h4>
              <p className="text-sm text-gray-500 font-medium leading-relaxed">
                {tech.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
