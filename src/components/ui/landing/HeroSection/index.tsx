"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const words = ["Starts Here.", "Is Our Passion.", "For Your Family."];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [words.length]);

  return (
    <section className="relative min-h-dvh lg:h-dvh flex items-center overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-linear-to-b from-sky-50 to-white rounded-l-[100px] hidden lg:block"></div>

      <div className="max-w-7xl mx-auto px-4 w-full grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 lg:space-y-8"
        >
          <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 px-4 py-1.5 rounded-full text-sm font-semibold">
            <Star size={14} fill="currentColor" />
            Trusted by 5,000+ Happy Patients
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-gray-900 leading-[1.1] tracking-tight min-h-[2.2em] lg:min-h-auto">
            A Brighter Smile <br />
            <span className="text-sky-600 inline-flex overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[index]}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  {words[index]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 max-w-lg leading-relaxed">
            Experience world-class dental care with a gentle touch. Our expert
            team uses the latest technology to ensure your comfort and
            satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-sky-600 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-sky-700 transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-sky-200"
            >
              Book Appointment <ArrowRight size={20} />
            </Link>
            <Link
              href="/services"
              className="bg-white text-gray-900 border-2 border-gray-100 px-8 py-3.5 rounded-xl font-bold hover:border-sky-600 hover:text-sky-600 transition-all flex items-center justify-center"
            >
              Explore Services
            </Link>
          </div>
          <div className="flex items-center gap-6 lg:gap-8 pt-2">
            <div className="flex flex-col">
              <span className="text-xl lg:text-2xl font-bold text-gray-900">
                15+
              </span>
              <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">
                Years Exp.
              </span>
            </div>
            <div className="w-px h-8 bg-gray-200"></div>
            <div className="flex flex-col">
              <span className="text-xl lg:text-2xl font-bold text-gray-900">
                10k+
              </span>
              <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">
                Procedures
              </span>
            </div>
            <div className="w-px h-8 bg-gray-200"></div>
            <div className="flex flex-col">
              <span className="text-xl lg:text-2xl font-bold text-gray-900">
                4.9/5
              </span>
              <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">
                Rating
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right Content - Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative hidden lg:block"
        >
          {/* Main Image Container */}
          <div className="relative z-10 aspect-4/5 xl:aspect-square rounded-[3rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border-8 border-white">
            <Image
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop"
              alt="Professional Dental Care"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-tr from-sky-500/10 to-transparent"></div>
          </div>

          {/* Floating Card 1: Health Safety */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -right-4 z-20 bg-white p-4 rounded-2xl shadow-xl border border-sky-50 flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center text-sky-600">
              <ShieldCheck size={24} />
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">
                Certified
              </p>
              <p className="text-sm font-bold text-gray-900">Health Safety</p>
            </div>
          </motion.div>

          {/* Floating Card 2: Satisfaction */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute -bottom-6 -left-6 z-20 bg-white p-5 rounded-2xl shadow-xl border border-sky-50"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">
                  99% Satisfaction
                </p>
                <p className="text-xs text-gray-500 font-medium">
                  5,000+ Verified Reviews
                </p>
              </div>
            </div>
          </motion.div>

          {/* Decorative Background Elements */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-sky-200/30 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -bottom-20 -right-10 w-60 h-60 bg-sky-100/50 rounded-full blur-3xl -z-10"></div>
        </motion.div>
      </div>
    </section>
  );
}
