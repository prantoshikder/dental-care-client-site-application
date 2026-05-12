import { Mail, Send, Sparkles } from "lucide-react";

export default function Newsletter() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative bg-gray-900 rounded-[3.5rem] p-10 md:p-20 overflow-hidden text-center">
          {/* Abstract background shapes */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-sky-600 opacity-20 blur-[100px] -ml-32 -mt-32"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-600 opacity-20 blur-[100px] -mr-40 -mb-40"></div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="w-20 h-20 bg-white/10 rounded-[2rem] flex items-center justify-center mx-auto mb-8 backdrop-blur-xl border border-white/10">
              <Mail size={32} className="text-sky-400" />
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
              Join Our Healthy <br />
              <span className="text-sky-400 italic">Smile Community</span>
            </h2>

            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Subscribe to get expert dental tips, exclusive offers, and the
              latest updates delivered directly to your inbox.
            </p>

            <form
              className="relative group max-w-md mx-auto"
              // onSubmit={handleSubmit}
            >
              <div className="relative flex items-center bg-white/5 border border-white/10 rounded-2xl p-2 backdrop-blur-md focus-within:border-sky-500/50 transition-all duration-300">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full bg-transparent px-6 py-4 text-white placeholder-gray-500 outline-none text-sm font-medium"
                />
                <button className="bg-sky-600 text-white p-4 rounded-xl hover:bg-sky-500 transition-all duration-300 shadow-lg shadow-sky-600/20 group-hover:scale-105">
                  <Send size={20} />
                </button>
              </div>

              {/* Trust Badge */}
              <div className="flex items-center justify-center gap-2 mt-6 text-gray-500">
                <Sparkles size={14} className="text-yellow-500" />
                <span className="text-[10px] font-bold uppercase tracking-widest">
                  No Spam. Just Smiles.
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
