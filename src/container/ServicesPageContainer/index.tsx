"use client";

import {
  Baby,
  HeartPulse,
  Microscope,
  Scissors,
  Shield,
  Smile,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import ServicesHero from "./components/ServicesHero";
import ServicesList from "./components/ServicesList";
import ServicesProcess from "./components/ServicesProcess";
import ServicesFAQ from "./components/ServicesFAQ";
import ServicesCTA from "./components/ServicesCTA";

export default function ServicesPageContainer() {
  const allServices = [
    {
      title: "General Dentistry",
      description: "Comprehensive checkups, advanced cleanings, and digital diagnostics for lifelong oral health.",
      icon: Stethoscope,
      image: "https://images.unsplash.com/photo-1629909608185-40fccde6a172?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Cosmetic Artistry",
      description: "Custom veneers and smile contouring designed to enhance your natural facial aesthetics.",
      icon: Scissors,
      image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Dental Implants",
      description: "Titanium-reinforced restorations that provide the most stable and natural-looking tooth replacement.",
      icon: Shield,
      image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Emergency Care",
      description: "Immediate clinical intervention for acute pain, accidents, and urgent dental structural needs.",
      icon: HeartPulse,
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Digital Whitening",
      description: "AI-monitored professional whitening that achieves dramatic results without increasing sensitivity.",
      icon: Sparkles,
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Orthodontics",
      description: "Modern alignment solutions including clear aligners for a discreet and comfortable transformation.",
      icon: Smile,
      image: "https://images.unsplash.com/photo-1513412323491-0d25665f842a?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Pediatric Care",
      description: "Specialized, anxiety-free dental experiences designed to build positive health habits from childhood.",
      icon: Baby,
      image: "https://images.unsplash.com/photo-1460662136044-6453965905d4?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Micro-Endodontics",
      description: "High-precision root canal therapy utilizing microscopic technology for absolute saving of damaged teeth.",
      icon: Microscope,
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop"
    },
  ];

  return (
    <div className="bg-white">
      <ServicesHero />
      <ServicesList services={allServices} />
      <ServicesProcess />
      <ServicesFAQ />
      <ServicesCTA />
    </div>
  );
}
