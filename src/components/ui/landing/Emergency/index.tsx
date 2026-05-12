import { Phone, Clock, AlertCircle, ArrowRight } from "lucide-react";

export default function Emergency() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative overflow-hidden bg-rose-600 rounded-[3rem] p-8 md:p-16 text-white shadow-2xl shadow-rose-500/20">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32 blur-2xl"></div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30">
                <AlertCircle size={18} className="animate-pulse" />
                <span className="text-xs font-black uppercase tracking-[0.2em]">Urgent Care Available</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
                Dental Emergency? <br />
                <span className="text-rose-200">We&apos;re Here to Help.</span>
              </h2>
              
              <p className="text-lg text-rose-50 opacity-90 leading-relaxed max-w-xl">
                Severe pain, broken teeth, or lost fillings? Don&apos;t wait. We prioritize emergency cases and offer same-day appointments to get you out of pain fast.
              </p>

              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center border border-white/20">
                        <Clock size={24} />
                    </div>
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-rose-200">Response Time</p>
                        <p className="text-lg font-bold italic">Within 15 Mins</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center border border-white/20">
                        <AlertCircle size={24} />
                    </div>
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-rose-200">Availability</p>
                        <p className="text-lg font-bold italic">24/7 Support</p>
                    </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] p-10 text-gray-900 shadow-xl">
              <h3 className="text-2xl font-black mb-6">Immediate Assistance</h3>
              <div className="space-y-6">
                <a href="tel:1234567890" className="flex items-center justify-between p-6 bg-gray-50 rounded-3xl border border-gray-100 group hover:bg-rose-50 hover:border-rose-100 transition-all duration-300">
                    <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-rose-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-rose-600/20 group-hover:scale-110 transition-transform">
                            <Phone size={28} />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-gray-400 uppercase tracking-tighter">Emergency Hotline</p>
                            <p className="text-2xl font-black text-gray-900">(123) 456-7890</p>
                        </div>
                    </div>
                    <ArrowRight size={24} className="text-gray-300 group-hover:text-rose-600 transition-colors" />
                </a>

                <div className="grid grid-cols-2 gap-4">
                    <div className="p-5 bg-gray-50 rounded-3xl border border-gray-100">
                        <p className="text-[10px] font-black text-gray-400 uppercase mb-2">Office Status</p>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
                            <span className="font-bold text-gray-900">Open Now</span>
                        </div>
                    </div>
                    <div className="p-5 bg-gray-50 rounded-3xl border border-gray-100">
                        <p className="text-[10px] font-black text-gray-400 uppercase mb-2">Wait Time</p>
                        <span className="font-bold text-gray-900">~10 Mins</span>
                    </div>
                </div>

                <button className="w-full py-5 rounded-2xl bg-gray-900 text-white font-black text-sm uppercase tracking-widest hover:bg-rose-600 transition-all duration-300 shadow-lg shadow-gray-900/10">
                  Request Emergency Slot
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
