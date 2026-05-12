"use client";

import { motion } from "framer-motion";
import { History, Target, TrendingUp, Award } from "lucide-react";

export default function AboutMilestones() {
  const milestones = [
    {
      year: "2008",
      title: "The Visionary Start",
      desc: "Founded as a small specialized clinic in the city center with a goal to redefine patient comfort.",
      icon: History,
      align: "left"
    },
    {
      year: "2012",
      title: "Surgical Center Expansion",
      desc: "Inaugurated our dedicated oral surgery wing with state-of-the-art sterile environments.",
      icon: Target,
      align: "right"
    },
    {
      year: "2018",
      title: "Digital Transformation",
      desc: "Fully integrated AI diagnostics and 3D printing into our core clinical workflows.",
      icon: TrendingUp,
      align: "left"
    },
    {
      year: "2024",
      title: "Global Recognition",
      desc: "Awarded as the 'Top Clinical Innovator' and reaching the milestone of 15,000+ happy smiles.",
      icon: Award,
      align: "right"
    }
  ];

  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 text-sky-600 font-black text-[10px] uppercase tracking-[0.4em] mb-6"
          >
            The Journey
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-gray-950 leading-[0.9] tracking-tighter"
          >
            Evolution of <br />
            <span className="italic text-sky-600">Excellence.</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gray-100 hidden lg:block"></div>

          <div className="space-y-12 lg:space-y-0 relative">
            {milestones.map((item, i) => (
              <div key={i} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-0 ${item.align === 'right' ? 'lg:flex-row-reverse' : ''}`}>
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-end px-12 group">
                  <motion.div 
                    initial={{ opacity: 0, x: item.align === 'left' ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={`p-10 bg-gray-50 rounded-[3rem] border border-gray-100 group-hover:bg-sky-600 group-hover:text-white transition-all duration-700 max-w-md ${item.align === 'right' ? 'lg:text-left' : 'lg:text-right'}`}
                  >
                    <p className="text-4xl font-black mb-4 tracking-tighter text-sky-600 group-hover:text-white transition-colors">{item.year}</p>
                    <h4 className="text-2xl font-black mb-4 tracking-tight">{item.title}</h4>
                    <p className={`text-gray-500 font-medium leading-relaxed group-hover:text-sky-50 transition-colors`}>
                      {item.desc}
                    </p>
                  </motion.div>
                </div>

                <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-white border-4 border-gray-50 rounded-full text-sky-600 shadow-xl hidden lg:flex">
                  <item.icon size={24} />
                </div>

                <div className="w-full lg:w-1/2 px-12 hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
