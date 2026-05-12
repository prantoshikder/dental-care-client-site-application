"use client";

import { motion } from "framer-motion";
import { Globe, Heart, Shield, Sparkles } from "lucide-react";

export default function AboutValues() {
  const values = [
    { title: "Patient-First Approach", desc: "Prioritizing your comfort with high-end sedation and luxury amenities.", icon: Heart },
    { title: "Advanced Technology", desc: "Digital scanning and 3D diagnostics for absolute clinical precision.", icon: Sparkles },
    { title: "Continuous Innovation", desc: "Our surgeons participate in global research to bring you the best.", icon: Globe }
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gray-950 rounded-[5rem] p-12 md:p-24 text-white relative overflow-hidden shadow-[0_80px_160px_-40px_rgba(0,0,0,0.4)] isolate">
          {/* Animated Background Decor */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-600/20 rounded-full blur-[140px] -mr-80 -mt-80 -z-10 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] -ml-40 -mb-40 -z-10"></div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <div className="space-y-6">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-3 text-sky-400 font-black text-[10px] uppercase tracking-[0.4em]"
                >
                  <Shield size={16} />
                  Our Commitment
                </motion.div>
                <motion.h2 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-6xl md:text-8xl font-black leading-[0.85] tracking-tighter"
                >
                  Built on <br />
                  <span className="text-sky-400 italic">Integrity.</span>
                </motion.h2>
              </div>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-xl text-gray-400 leading-relaxed font-medium max-w-lg"
              >
                We believe that a healthy smile is a fundamental right. Our core values drive every surgical incision and every patient interaction we perform.
              </motion.p>
              
              <div className="flex gap-12 pt-4">
                <div className="space-y-3">
                  <p className="text-4xl font-black text-white">100%</p>
                  <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Ethical Sourcing</p>
                </div>
                <div className="h-16 w-px bg-white/10"></div>
                <div className="space-y-3">
                  <p className="text-4xl font-black text-white">Top 1%</p>
                  <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Clinical Rating</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {values.map((value, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-10 bg-white/5 rounded-[3rem] border border-white/10 backdrop-blur-2xl group hover:bg-white/10 transition-all duration-500"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-sky-500/10 rounded-2xl flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform">
                      <value.icon size={28} />
                    </div>
                    <div>
                      <h4 className="text-2xl font-black mb-3 text-white tracking-tight">{value.title}</h4>
                      <p className="text-gray-400 font-medium text-sm leading-relaxed">{value.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
