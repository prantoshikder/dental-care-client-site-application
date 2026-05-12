"use client";

import { motion } from "framer-motion";
import { LucideIcon, ArrowRight } from "lucide-react";

interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
}

interface ServicesListProps {
  services: ServiceItem[];
}

export default function ServicesList({ services }: ServicesListProps) {
  return (
    <section className="py-32 bg-white relative z-20 -mt-10 rounded-t-[5rem]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative h-[500px] rounded-[3.5rem] overflow-hidden bg-gray-100 isolate border border-gray-100 hover:border-sky-100 transition-colors shadow-xl"
            >
              {/* Image Background */}
              <div className="absolute inset-0 -z-10 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-linear-to-t from-gray-950 via-gray-950/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <div className="w-14 h-14 bg-sky-500 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-sky-500/40">
                  <service.icon size={28} />
                </div>
                
                <h3 className="text-3xl font-black text-white mb-4 tracking-tight group-hover:text-sky-400 transition-colors">{service.title}</h3>
                <p className="text-gray-300 font-medium leading-relaxed mb-8 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {service.description}
                </p>

                <button className="flex items-center gap-3 text-white font-black text-[11px] uppercase tracking-widest group-hover:text-sky-400 transition-colors">
                  Learn More
                  <div className="w-8 h-px bg-white/20 group-hover:w-12 group-hover:bg-sky-400 transition-all"></div>
                  <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
