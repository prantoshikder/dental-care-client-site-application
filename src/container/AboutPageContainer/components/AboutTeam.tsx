"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, GraduationCap, Star, Users } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  specialty: string;
  education: string;
  color: string;
}

interface AboutTeamProps {
  team: TeamMember[];
}

export default function AboutTeam({ team }: AboutTeamProps) {
  return (
    <section className="py-32 bg-gray-50/50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-sky-100/30 rounded-full blur-[140px] -mr-40 -mt-40"></div>
      <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-indigo-100/20 rounded-full blur-[120px] -ml-40 -mb-40"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 text-sky-600 font-black text-[10px] uppercase tracking-[0.4em] mb-6"
          >
            <Users size={16} />
            The Specialists
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-gray-950 leading-[0.9] tracking-tighter"
          >
            Masters of <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-600 to-indigo-600">Clinical Artistry.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {team.map((doctor, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative flex flex-col h-full"
            >
              <div className="aspect-[3/4] relative overflow-hidden rounded-[3rem] bg-gray-200 isolate shadow-xl group-hover:shadow-2xl transition-all duration-700">
                  <img 
                    src={`https://i.pravatar.cc/600?u=${doctor.name}`} 
                    alt={doctor.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-gray-950/90 via-gray-950/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                  
                  <div className="absolute top-6 right-6 w-14 h-14 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      <ArrowUpRight size={24} className="text-white" />
                  </div>

                  <div className="absolute bottom-8 left-8 right-8">
                      <p className="text-sky-400 font-black text-[10px] uppercase tracking-[0.2em] mb-2">{doctor.role}</p>
                      <h3 className="text-3xl font-black text-white tracking-tight group-hover:text-sky-400 transition-colors">{doctor.name}</h3>
                  </div>
              </div>

              <div className="mt-8 px-4 space-y-6">
                  <div className="space-y-4 pb-6 border-b border-gray-100">
                      <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-sky-600 shadow-sm">
                              <Star size={18} fill="currentColor" />
                          </div>
                          <p className="text-sm font-bold text-gray-700">{doctor.specialty}</p>
                      </div>
                      <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 shadow-sm">
                              <GraduationCap size={18} />
                          </div>
                          <p className="text-sm font-bold text-gray-500 line-clamp-1">{doctor.education}</p>
                      </div>
                  </div>

                  <button className="flex items-center gap-3 text-gray-950 font-black text-[11px] uppercase tracking-widest group-hover:text-sky-600 transition-colors">
                      Read Full Profile
                      <div className="w-8 h-px bg-gray-200 group-hover:w-12 group-hover:bg-sky-600 transition-all"></div>
                  </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
