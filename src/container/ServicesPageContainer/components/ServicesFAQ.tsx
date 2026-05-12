"use client";

import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

export default function ServicesFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Do you accept dental insurance?",
      a: "Yes, we partner with most major insurance providers. Our administrative team will handle the direct billing and ensure you maximize your benefits."
    },
    {
      q: "Are the dental procedures painful?",
      a: "We prioritize patient comfort by using advanced sedation dentistry and minimally invasive laser technology, ensuring a nearly pain-free experience for even complex treatments."
    },
    {
      q: "How often should I visit for a checkup?",
      a: "For most patients, we recommend a professional cleaning and examination every 6 months to prevent complex issues and maintain optimal oral health."
    },
    {
      q: "Do you offer emergency dental care?",
      a: "Absolutely. We keep dedicated slots open for same-day emergency appointments to handle pain, accidents, or urgent repairs."
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-gray-950 tracking-tighter"
          >
            Common <span className="text-sky-600">Questions.</span>
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-[2rem] border transition-all duration-500 overflow-hidden ${openIndex === i ? 'bg-gray-50 border-sky-100 shadow-lg' : 'bg-white border-gray-100'}`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-8 flex items-center justify-between text-left"
              >
                <span className="text-lg font-black text-gray-900 pr-8">{faq.q}</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${openIndex === i ? 'bg-sky-600 text-white rotate-180' : 'bg-gray-100 text-gray-400'}`}>
                  {openIndex === i ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>
              
              <motion.div 
                initial={false}
                animate={{ height: openIndex === i ? 'auto' : 0, opacity: openIndex === i ? 1 : 0 }}
                className="overflow-hidden"
              >
                <div className="p-8 pt-0 text-gray-600 font-medium leading-relaxed">
                  {faq.a}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
