"use client";

import { 
  Mail, 
  MapPin, 
  Phone, 
  Send, 
  Clock, 
  MessageSquare, 
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Globe
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPageContainer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "General Dentistry",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! Our team will contact you shortly.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "General Dentistry",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Call Us",
      value: "(123) 456-7890",
      subValue: "Mon-Fri, 9am-6pm",
      color: "bg-blue-50 text-blue-600",
      hover: "hover:border-blue-200"
    },
    {
      icon: Mail,
      label: "Email Us",
      value: "hello@dentalcare.com",
      subValue: "Online Support 24/7",
      color: "bg-sky-50 text-sky-600",
      hover: "hover:border-sky-200"
    },
    {
      icon: MapPin,
      label: "Visit Us",
      value: "123 Dental Lane, Smile City",
      subValue: "Get Directions",
      color: "bg-indigo-50 text-indigo-600",
      hover: "hover:border-indigo-200"
    }
  ];

  return (
    <div className="bg-white">
      {/* Ultra-Modern Contact Hero Redesign */}
      <section className="relative min-h-[70vh] flex items-center pt-24 pb-16 overflow-hidden bg-gray-900 isolate">
        {/* Animated Background Elements */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-linear-to-bl from-sky-600/20 to-transparent -skew-x-12 translate-x-1/4 -z-10"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            {/* Left Column: Content */}
            <div className="relative z-10">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-2xl mb-10"
              >
                <div className="w-2.5 h-2.5 bg-sky-400 rounded-full animate-pulse shadow-[0_0_15px_rgba(56,189,248,0.5)]"></div>
                <span className="text-[10px] font-black text-sky-400 uppercase tracking-[0.3em]">Direct Patient Link</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-6xl md:text-[7rem] font-black text-white leading-[0.85] mb-10 tracking-tighter"
              >
                Let&apos;s Build <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-400 to-indigo-400 italic">Your Smile</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-400 leading-relaxed max-w-xl font-medium mb-12"
              >
                Exceptional care is just a message away. Our world-class specialists are ready to transform your dental experience with precision and compassion.
              </motion.p>

              {/* Floating Quick Contact Bar */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-flex flex-wrap gap-8 p-6 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] shadow-2xl"
              >
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-sky-500/10 rounded-2xl flex items-center justify-center text-sky-400">
                        <Phone size={24} />
                    </div>
                    <div>
                        <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Call Now</p>
                        <p className="text-lg font-black text-white">(123) 456-7890</p>
                    </div>
                </div>
                <div className="w-px h-12 bg-white/10 hidden md:block"></div>
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-400">
                        <Clock size={24} />
                    </div>
                    <div>
                        <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Wait Time</p>
                        <p className="text-lg font-black text-white">~10 Mins</p>
                    </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Premium Visual Placeholder */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className="relative hidden lg:block"
            >
              <div className="aspect-square relative rounded-[4rem] overflow-hidden group">
                {/* Main Visual */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                  style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1629909608185-40fccde6a172?q=80&w=2070&auto=format&fit=crop")' }}
                ></div>
                <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                
                {/* Glassmorphism Overlays */}
                <div className="absolute top-10 left-10 p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-sky-500 rounded-2xl flex items-center justify-center text-white">
                            <ShieldCheck size={28} />
                        </div>
                        <div>
                            <p className="text-white font-black text-lg">99.9% Safe</p>
                            <p className="text-sky-300 text-xs font-bold uppercase tracking-widest">Certified Clinic</p>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-10 right-10 p-6 bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl max-w-[240px]">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="flex -space-x-3">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-gray-900 bg-sky-600 flex items-center justify-center text-white text-[10px] font-black">
                                    {String.fromCharCode(64 + i)}
                                </div>
                            ))}
                        </div>
                        <span className="text-white font-black text-xs">+2k Patients</span>
                    </div>
                    <p className="text-gray-300 text-[11px] leading-relaxed font-medium">
                        &quot;The best dental experience I&apos;ve ever had. Truly modern care.&quot;
                    </p>
                </div>
              </div>
              
              {/* Floating Decorative Rings */}
              <div className="absolute -top-10 -right-10 w-40 h-40 border-[20px] border-sky-500/10 rounded-full -z-10 animate-bounce transition-all duration-[3000ms]"></div>
            </motion.div>

          </div>
        </div>

        {/* Bottom Curve */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-white to-transparent z-10"></div>
      </section>

      {/* Main Content */}
      <section className="pb-32 relative isolate">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-16">
            
            {/* Left Column: Contact Info & Meta */}
            <div className="lg:col-span-5 space-y-12">
              <div className="grid gap-6">
                {contactInfo.map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 + 0.3 }}
                    className={`group p-8 rounded-[2.5rem] border border-gray-100 bg-white transition-all duration-500 ${item.hover} hover:shadow-2xl hover:shadow-gray-200/50 cursor-pointer`}
                  >
                    <div className="flex items-center gap-6">
                      <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 duration-500 shadow-sm`}>
                        <item.icon size={28} />
                      </div>
                      <div className="grow">
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{item.label}</p>
                        <p className="text-xl font-black text-gray-900 group-hover:text-sky-600 transition-colors">{item.value}</p>
                        <p className="text-sm text-gray-400 font-medium mt-1">{item.subValue}</p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                         <ArrowRight size={18} className="text-gray-400" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Working Hours Premium Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="relative overflow-hidden bg-gray-900 rounded-[3rem] p-10 text-white shadow-2xl shadow-gray-900/20"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500 opacity-20 blur-3xl -mr-16 -mt-16"></div>
                
                <div className="relative z-10 space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md">
                      <Clock size={24} className="text-sky-400" />
                    </div>
                    <h3 className="text-2xl font-black">Clinic Hours</h3>
                  </div>

                  <div className="space-y-4">
                    {[
                      { days: "Mon - Thu", time: "09:00 AM - 08:00 PM", active: true },
                      { days: "Friday", time: "09:00 AM - 06:00 PM", active: false },
                      { days: "Saturday", time: "10:00 AM - 04:00 PM", active: false },
                      { days: "Sunday", time: "Emergency Only", active: false, color: "text-rose-400" },
                    ].map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center py-3 border-b border-white/10 last:border-0">
                        <span className={`font-bold ${item.color || 'text-gray-400'}`}>{item.days}</span>
                        <span className="font-black tracking-tight">{item.time}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/5">
                    <ShieldCheck size={20} className="text-sky-400" />
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-sky-400">
                      24/7 Priority Emergency Support
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Modern Contact Form */}
            <div className="lg:col-span-7">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="bg-gray-50/50 backdrop-blur-sm p-8 md:p-16 rounded-[4rem] border border-gray-100 relative shadow-xs"
              >
                {/* Floating Decoration */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-50 rounded-full blur-3xl -z-10"></div>

                <div className="mb-12">
                  <div className="w-16 h-16 bg-white rounded-[1.5rem] flex items-center justify-center shadow-xl shadow-gray-200/50 mb-8 border border-gray-50">
                    <MessageSquare size={32} className="text-sky-600" />
                  </div>
                  <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">
                    Send us a Message
                  </h2>
                  <p className="text-gray-500 font-medium">
                    Have a specific inquiry? Fill out the form below and <br className="hidden md:block" />
                    our specialists will reach out within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. John Doe"
                        className="w-full px-8 py-5 bg-white border border-transparent rounded-3xl focus:outline-none focus:ring-4 focus:ring-sky-500/10 focus:bg-white focus:border-sky-500 transition-all text-gray-900 font-bold shadow-sm"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="w-full px-8 py-5 bg-white border border-transparent rounded-3xl focus:outline-none focus:ring-4 focus:ring-sky-500/10 focus:bg-white focus:border-sky-500 transition-all text-gray-900 font-bold shadow-sm"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-8 py-5 bg-white border border-transparent rounded-3xl focus:outline-none focus:ring-4 focus:ring-sky-500/10 focus:bg-white focus:border-sky-500 transition-all text-gray-900 font-bold shadow-sm"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Service Type</label>
                      <div className="relative">
                        <select
                          className="w-full px-8 py-5 bg-white border border-transparent rounded-3xl focus:outline-none focus:ring-4 focus:ring-sky-500/10 focus:bg-white focus:border-sky-500 transition-all text-gray-900 font-bold shadow-sm appearance-none cursor-pointer"
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        >
                          <option>General Dentistry</option>
                          <option>Cosmetic Dentistry</option>
                          <option>Dental Implants</option>
                          <option>Orthodontics</option>
                        </select>
                        <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                           <ArrowRight size={18} className="rotate-90" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Your Message</label>
                    <textarea
                      rows={5}
                      placeholder="Tell us about your dental goals..."
                      className="w-full px-8 py-5 bg-white border border-transparent rounded-3xl focus:outline-none focus:ring-4 focus:ring-sky-500/10 focus:bg-white focus:border-sky-500 transition-all text-gray-900 font-bold shadow-sm resize-none"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="group/btn relative w-full h-20 bg-gray-900 rounded-[2rem] overflow-hidden transition-all duration-300 shadow-2xl shadow-gray-900/20 hover:shadow-sky-600/40"
                    >
                      <div className="absolute inset-0 bg-sky-600 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-out"></div>
                      <div className="relative flex items-center justify-center gap-3">
                        <span className="text-white font-black text-lg uppercase tracking-widest">Send Message</span>
                        <Send size={24} className="text-white group-hover/btn:translate-x-1 transition-transform" />
                      </div>
                    </button>
                    
                    <div className="flex items-center justify-center gap-6 mt-8 text-gray-400">
                        <div className="flex items-center gap-2">
                            <Globe size={14} />
                            <span className="text-[9px] font-bold uppercase tracking-widest">Global Standards</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <ShieldCheck size={14} />
                            <span className="text-[9px] font-bold uppercase tracking-widest">Secure Handling</span>
                        </div>
                    </div>
                  </div>
                </form>
              </motion.div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
