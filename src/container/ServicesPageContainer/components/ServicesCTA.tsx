"use client";

import { motion } from "framer-motion";
import { Phone, Calendar } from "lucide-react";

export default function ServicesCTA() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-sky-600 rounded-[5rem] p-12 md:p-24 text-center text-white relative overflow-hidden isolate shadow-2xl shadow-sky-600/40">
          {/* Decorative Orbs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 blur-[120px] -mr-48 -mt-48 -z-10 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500 opacity-20 blur-[120px] -ml-48 -mb-48 -z-10"></div>
          
          <div className="relative z-10 space-y-12">
            <div className="space-y-6">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-black leading-[0.85] tracking-tighter"
              >
                Ready for Your <br />
                <span className="italic text-sky-200">New Smile?</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-sky-100 font-medium max-w-2xl mx-auto"
              >
                Schedule your consultation today and experience the future of professional dental care.
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-6"
            >
              <button className="px-10 py-5 bg-white text-sky-600 font-black text-sm uppercase tracking-widest rounded-2xl flex items-center gap-3 hover:bg-sky-50 transition-all shadow-xl">
                <Calendar size={18} />
                Book Appointment
              </button>
              <button className="px-10 py-5 bg-sky-500 text-white border border-sky-400 font-black text-sm uppercase tracking-widest rounded-2xl flex items-center gap-3 hover:bg-sky-400 transition-all shadow-xl">
                <Phone size={18} />
                Contact Support
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
