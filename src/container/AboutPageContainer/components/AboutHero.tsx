"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Shield, Star } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-24 overflow-hidden bg-gray-950 isolate">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Technical Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
        
        {/* Animated Orbs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-sky-600/30 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-1/4 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[140px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Professional Content Layer */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-4 bg-sky-500/10 border border-sky-500/20 px-5 py-2 rounded-full"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                </span>
                <span className="text-[10px] font-black text-sky-400 uppercase tracking-[0.3em]">The Benchmark of Clinical Excellence</span>
              </motion.div>
              
              <div className="space-y-4">
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter"
                >
                  Legacy of <br />
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-400 to-indigo-400">Precision.</span> <br />
                  Future of Care.
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-xl text-gray-400 leading-relaxed max-w-2xl font-medium"
                >
                  Since 2008, we have been at the forefront of dental innovation, merging advanced clinical diagnostics with a patient-centric philosophy that prioritizes your comfort and long-term health.
                </motion.p>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid sm:grid-cols-2 gap-8 py-8 border-y border-white/5"
            >
              {[
                { label: "Clinical Success", value: "99.8%", desc: "In complex procedures" },
                { label: "Global Standards", value: "ISO 9001", desc: "Certified excellence" }
              ].map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <p className="text-3xl font-black text-white tracking-tight">{item.value}</p>
                  <p className="text-[10px] font-black text-sky-500 uppercase tracking-widest">{item.label}</p>
                  <p className="text-xs text-gray-500 font-medium">{item.desc}</p>
                </div>
              ))}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-8 items-center pt-4"
            >
              <button className="group relative px-10 py-5 bg-white text-gray-950 font-black text-sm uppercase tracking-widest rounded-2xl overflow-hidden transition-all hover:bg-sky-500 hover:text-white shadow-2xl">
                <span className="relative z-10 flex items-center gap-3">
                  Our Philosophy <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              </button>
              
              <div className="flex flex-col gap-3">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-gray-950 bg-gray-800 overflow-hidden ring-1 ring-white/10">
                      <img src={`https://i.pravatar.cc/100?u=${i + 50}`} alt="Patient" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex text-amber-400">
                    {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={12} fill="currentColor" />)}
                  </div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">15,000+ Verified Reviews</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Visual Composition */}
          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="relative z-10"
            >
              {/* Main Image Frame */}
              <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden border border-white/10 p-3 bg-white/5 backdrop-blur-3xl shadow-2xl group">
                <motion.img 
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
                  src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=2070&auto=format&fit=crop" 
                  alt="Modern Dental Clinic" 
                  className="w-full h-full object-cover rounded-[3.2rem] grayscale group-hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 rounded-[3.2rem] bg-linear-to-t from-gray-950/40 to-transparent opacity-60"></div>
              </div>

              {/* Floating Glass Cards */}
              <motion.div 
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="absolute -top-10 -right-10 p-6 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[2rem] shadow-2xl max-w-[200px] group hover:bg-white/15 transition-colors"
              >
                <div className="w-12 h-12 bg-sky-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-sky-500/40 group-hover:scale-110 transition-transform">
                  <Shield size={24} className="text-white" />
                </div>
                <p className="text-white font-black text-lg leading-tight mb-1">Safety First</p>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-relaxed">Clinical Grade Sterilization</p>
              </motion.div>

              <motion.div 
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute -bottom-10 -left-10 p-6 bg-gray-900/80 backdrop-blur-2xl border border-white/10 rounded-[2rem] shadow-2xl group hover:border-sky-500/30 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="text-sky-400 group-hover:rotate-12 transition-transform">
                    <Star size={32} fill="currentColor" />
                  </div>
                  <div>
                    <p className="text-2xl font-black text-white leading-none">4.9/5</p>
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">Global Rating</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Decorative Geometric Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] -z-10 opacity-30">
              <div className="absolute inset-0 border-[2px] border-dashed border-sky-500/20 rounded-full animate-[spin_30s_linear_infinite]"></div>
              <div className="absolute inset-20 border-[2px] border-dashed border-indigo-500/10 rounded-full animate-[spin_20s_linear_infinite_reverse]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
