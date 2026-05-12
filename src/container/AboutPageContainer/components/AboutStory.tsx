"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function AboutStory() {
  return (
    <section className="py-32 relative overflow-hidden bg-white">
      {/* Subtle Background Accent */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-sky-50 rounded-full blur-[100px] -translate-x-1/2 -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative z-10 aspect-[4/5] rounded-[4rem] overflow-hidden group shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop" 
                alt="Clinical Excellence" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-gray-950/80 via-transparent to-transparent"></div>
              
              {/* Floating Experience Badge */}
              <div className="absolute bottom-10 left-10 right-10 p-8 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[2.5rem] flex items-center gap-6">
                <div className="text-5xl font-black text-white leading-none">15</div>
                <div className="h-12 w-px bg-white/20"></div>
                <div>
                  <p className="text-white font-black text-lg">Years of Trust</p>
                  <p className="text-[10px] font-bold text-sky-400 uppercase tracking-widest">Global Healthcare Excellence</p>
                </div>
              </div>
            </motion.div>
            
            {/* Decorative Background Shape */}
            <div className="absolute -bottom-12 -right-12 w-64 h-64 border-[40px] border-gray-50 rounded-[4rem] -z-10"></div>
          </div>

          <div className="space-y-12">
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 text-sky-600 font-black text-[10px] uppercase tracking-[0.3em]"
              >
                <div className="w-8 h-px bg-sky-600"></div>
                Our Genesis
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-5xl md:text-6xl font-black text-gray-950 leading-[0.95] tracking-tighter"
              >
                Where Human Care <br />
                <span className="text-sky-600">Meets Digital Mastery.</span>
              </motion.h2>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              <p className="text-xl text-gray-600 leading-relaxed font-medium">
                Founded with a vision to normalize pain-free dentistry, DentalCare has evolved into a center of excellence. We bridge the gap between traditional medical wisdom and modern technological breakthroughs.
              </p>
              
              <div className="relative p-10 bg-gray-50 rounded-[3rem] border border-gray-100 overflow-hidden group">
                <Quote size={80} className="text-gray-200 absolute -top-4 -right-4 opacity-50 group-hover:text-sky-100 transition-colors" />
                <p className="text-gray-950 font-bold italic text-xl leading-relaxed relative z-10">
                  &quot;Our philosophy is simple: Treat every patient like family, but with the precision of a master architect.&quot;
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                      <img src="https://i.pravatar.cc/100?u=dr-sarah" alt="CEO" className="w-full h-full object-cover" />
                  </div>
                  <div>
                      <p className="font-black text-gray-900 text-sm">Dr. Sarah Johnson</p>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Founder & Principal Surgeon</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="flex flex-wrap gap-3">
              {["Digital Smile Design", "AI Diagnostics", "Painless Sedation", "3D Printing"].map((tech, idx) => (
                  <div key={idx} className="bg-white border border-gray-100 px-6 py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] text-gray-500 hover:border-sky-200 hover:text-sky-600 transition-all cursor-default shadow-sm">
                      {tech}
                  </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
