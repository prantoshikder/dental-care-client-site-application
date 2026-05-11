"use client";

import { AnimatePresence, motion } from "framer-motion";
import { HelpCircle, Minus, Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What services do you provide?",
    answer:
      "We offer a wide range of dental services including general dentistry, cosmetic treatments, dental implants, orthodontics (braces & aligners), pediatric care, and emergency services.",
  },
  {
    question: "Do you accept dental insurance?",
    answer:
      "Yes, we accept most major dental insurance plans. Our team can help you verify your coverage and maximize your benefits before any treatment begins.",
  },
  {
    question: "How often should I visit the dentist?",
    answer:
      "For most patients, we recommend a professional cleaning and checkup every six months to maintain optimal oral health and catch potential issues early.",
  },
  {
    question: "Is teeth whitening safe for my enamel?",
    answer:
      "When performed by professionals, teeth whitening is completely safe. We use high-quality, clinical-grade products that protect your enamel while delivering superior results.",
  },
  {
    question: "What should I do in a dental emergency?",
    answer:
      "Call us immediately! We reserve time in our daily schedule for emergency appointments to ensure you get the relief you need as quickly as possible.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-sky-50 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Column: Title & Info */}
          <div className="lg:w-1/3 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-50 text-sky-600 rounded-full text-xs font-black uppercase tracking-widest">
                <HelpCircle size={14} />
                <span>Support Center</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                Frequently Asked <span className="text-sky-600">Questions</span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed">
                Can`&apos;`t find the answer you`&apos;`re looking for? Our
                friendly team is always here to help you with your dental
                journey.
              </p>
            </div>

            <div className="p-8 bg-sky-900 rounded-[2.5rem] text-white shadow-2xl shadow-sky-900/20">
              <h3 className="text-xl font-bold mb-4">Still have questions?</h3>
              <p className="text-sky-100/80 mb-6 text-sm leading-relaxed">
                Contact our support team for any specific inquiries or emergency
                assistance.
              </p>
              <button className="w-full py-4 bg-white text-sky-900 rounded-2xl font-black text-sm hover:bg-sky-50 transition-colors shadow-lg">
                Contact Support
              </button>
            </div>
          </div>

          {/* Right Column: FAQ Accordion */}
          <div className="lg:w-2/3 space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group rounded-3xl transition-all duration-500 border ${
                  openIndex === index
                    ? "bg-white border-sky-200 shadow-2xl shadow-sky-500/10"
                    : "bg-gray-50/50 border-transparent hover:bg-white hover:border-gray-100"
                }`}
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left outline-hidden"
                >
                  <div className="flex items-center gap-6">
                    <span
                      className={`text-2xl font-black transition-colors duration-300 ${
                        openIndex === index ? "text-sky-600" : "text-gray-300"
                      }`}
                    >
                      0{index + 1}
                    </span>
                    <span
                      className={`text-lg md:text-xl font-bold transition-colors duration-300 ${
                        openIndex === index ? "text-gray-900" : "text-gray-700"
                      }`}
                    >
                      {faq.question}
                    </span>
                  </div>
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 ${
                      openIndex === index
                        ? "bg-sky-600 text-white rotate-180 shadow-lg shadow-sky-600/30"
                        : "bg-white text-gray-400 border border-gray-100 group-hover:border-sky-200 group-hover:text-sky-600"
                    }`}
                  >
                    {openIndex === index ? (
                      <Minus size={20} />
                    ) : (
                      <Plus size={20} />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.4,
                        ease: [0.04, 0.62, 0.23, 0.98],
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-8 pt-0 ml-12 md:ml-16">
                        <div className="h-px w-full bg-sky-50 mb-6" />
                        <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
