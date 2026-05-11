"use client";

import SectionHeader from "@/src/components/shared/SectionHeader";
import { motion } from "framer-motion";
import { Maximize2 } from "lucide-react";
import Image from "next/image";

const galleryItems = [
  {
    title: "Teeth Whitening",
    image:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Dental Implants",
    image:
      "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Smile Makeover",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Orthodontics",
    image:
      "https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Pediatric Care",
    image:
      "https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Modern Clinic",
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
  },
];

export default function Gallery() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader
          title="Our Smile Showcase"
          subtitle="Real results from our happy patients. Experience the transformation and find inspiration for your own smile journey."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-square rounded-4xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl hover:shadow-sky-500/20 transition-all duration-500 bg-gray-100"
            >
              {/* Next.js Optimized Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 33vw"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-sky-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6 text-center backdrop-blur-[2px]">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-sky-600 mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <Maximize2 size={24} />
                </div>
                <h3 className="text-white font-bold text-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {item.title}
                </h3>
                <p className="text-sky-100 text-sm mt-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  View Case Study
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
