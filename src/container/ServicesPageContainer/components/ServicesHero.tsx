"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight, ShieldCheck, Star, Activity } from "lucide-react";

export default function ServicesHero() {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-32 pb-24 overflow-hidden bg-gray-950 isolate">
      {/* Dynamic Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#1e293b,transparent)] opacity-50"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
        
        {/* Animated Orbs with higher vibrancy */}
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 100, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-sky-500/20 rounded-full blur-[140px]"
        />
        <motion.div 
          animate={{ 
            scale: [1.3, 1, 1.3],
            opacity: [0.2, 0.5, 0.2],
            x: [0, -100, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-indigo-500/10 rounded-full blur-[160px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          {/* Content Layer */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-4 bg-sky-500/10 border border-sky-500/20 px-5 py-2.5 rounded-full"
              >
                <div className="flex gap-1">
                    {[1, 2, 3].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>)}
                </div>
                <span className="text-[10px] font-black text-sky-400 uppercase tracking-[0.4em]">Advanced Clinical Solutions</span>
              </motion.div>
              
              <div className="space-y-6">
                <motion.h1 
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="text-6xl md:text-8xl lg:text-[7.5rem] font-black text-white leading-[0.85] tracking-tighter"
                >
                  Expertise <br />
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-400 via-indigo-400 to-sky-400 bg-[length:200%_auto] animate-gradient-x italic">Perfected.</span>
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-xl text-gray-400 leading-relaxed max-w-xl font-medium"
                >
                  Transforming lives through a sophisticated fusion of medical science and artistic precision. Discover a new standard in specialized dental care.
                </motion.p>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-8 items-center"
            >
              <button className="group relative px-12 py-6 bg-white text-gray-950 font-black text-xs uppercase tracking-[0.2em] rounded-2xl overflow-hidden transition-all hover:bg-sky-500 hover:text-white shadow-[0_20px_40px_-10px_rgba(255,255,255,0.1)]">
                <span className="relative z-10 flex items-center gap-3">
                  View Treatments <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </span>
              </button>
              
              <div className="flex items-center gap-6">
                <div className="flex flex-col">
                    <span className="text-2xl font-black text-white leading-none">ISO</span>
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">Certified</span>
                </div>
                <div className="w-px h-10 bg-white/10"></div>
                <div className="flex flex-col">
                    <span className="text-2xl font-black text-white leading-none">24/7</span>
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">Support</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Premium Visual Composition */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="relative z-10"
            >
                {/* Main Image Frame with Premium Styling */}
                <div className="relative aspect-[4/5] rounded-[5rem] overflow-hidden border border-white/10 p-3 bg-white/5 backdrop-blur-3xl shadow-2xl group isolate">
                    {/* Glass Overlay on Hover */}
                    <div className="absolute inset-0 bg-linear-to-br from-sky-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
                    
                    <motion.img 
                      initial={{ scale: 1.2 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
                      src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2070&auto=format&fit=crop" 
                      alt="Modern Dental Surgery" 
                      className="w-full h-full object-cover rounded-[4.2rem] transition-all duration-1000 group-hover:scale-105"
                    />
                </div>

                {/* Floating Elements */}
                <motion.div 
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-8 -left-8 p-6 bg-gray-900/80 backdrop-blur-3xl border border-white/10 rounded-3xl shadow-2xl flex items-center gap-4"
                >
                    <div className="w-12 h-12 bg-sky-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-sky-500/40">
                        <ShieldCheck size={24} />
                    </div>
                    <div>
                        <p className="text-white font-black text-sm">Verified Care</p>
                        <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Global Standards</p>
                    </div>
                </motion.div>

                <motion.div 
                    animate={{ y: [0, 15, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-10 -right-10 p-8 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[3rem] shadow-2xl"
                >
                    <div className="flex flex-col items-center gap-2">
                        <Activity size={32} className="text-sky-400 mb-2" />
                        <div className="flex text-amber-400 gap-1">
                            {[1, 2, 3, 4, 5].map(s => <Star key={s} size={12} fill="currentColor" />)}
                        </div>
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1">99% Success</p>
                    </div>
                </motion.div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] -z-10 opacity-30">
              <div className="absolute inset-0 border border-dashed border-sky-500/20 rounded-full animate-[spin_40s_linear_infinite]"></div>
              <div className="absolute inset-20 border border-dashed border-indigo-500/10 rounded-full animate-[spin_30s_linear_infinite_reverse]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
