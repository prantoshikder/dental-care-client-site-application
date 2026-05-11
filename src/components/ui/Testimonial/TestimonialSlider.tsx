"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard";

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

export default function TestimonialSlider({
  testimonials,
}: TestimonialSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isPaused, setPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1 >= testimonials.length ? 0 : prev + 1));
  }, [testimonials.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) =>
      prev - 1 < 0 ? testimonials.length - 1 : prev - 1
    );
  }, [testimonials.length]);

  // Adjust visible items based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-slide logic
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  // Get visible testimonials with wrap-around
  const getVisibleTestimonials = () => {
    const items = [];
    for (let i = 0; i < visibleCount; i++) {
      items.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return items;
  };

  return (
    <div
      className="relative group px-12"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="overflow-hidden">
        <div className="flex gap-8 transition-all duration-500 ease-in-out items-stretch min-h-80">
          <AnimatePresence mode="popLayout" initial={false}>
            {getVisibleTestimonials().map((testimonial, index) => (
              <motion.div
                key={`${currentIndex}-${index}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="flex-none w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-21.33px)] flex flex-col h-auto"
              >
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full border border-gray-100 shadow-lg flex items-center justify-center text-gray-600 hover:bg-sky-600 hover:text-white transition-all z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full border border-gray-100 shadow-lg flex items-center justify-center text-gray-600 hover:bg-sky-600 hover:text-white transition-all z-10"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-10">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              currentIndex === i ? "bg-sky-600 w-8" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
