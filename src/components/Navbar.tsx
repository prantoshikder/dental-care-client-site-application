"use client";

import Link from "next/link";
import { Menu, X, Phone, Clock, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm py-3"
          : "bg-white md:bg-transparent py-5"
      }`}
    >
      {/* Top Info Bar (Hidden on scroll for cleaner look) */}
      <AnimatePresence>
        {!scrolled && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-sky-600 text-white text-xs overflow-hidden hidden md:block"
          >
            <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center font-medium">
              <div className="flex gap-6">
                <span className="flex items-center gap-2">
                  <Phone size={12} /> (123) 456-7890
                </span>
                <span className="flex items-center gap-2">
                  <Clock size={12} /> Mon - Sat: 9:00 AM - 6:00 PM
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span>Emergency: 24/7 Available</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <nav className="max-w-7xl mx-auto px-4 flex justify-between items-center mt-2">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <motion.div
            whileHover={{ rotate: 15 }}
            className="w-10 h-10 bg-sky-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-sky-200"
          >
            S
          </motion.div>
          <span className="text-2xl font-bold text-gray-900 tracking-tight">
            Smile<span className="text-sky-600">Care</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-600 font-semibold hover:text-sky-600 transition-colors relative group py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-600 transition-all group-hover:w-full"></span>
            </Link>
          ))}

          <Link
            href="/contact"
            className="ml-4 bg-sky-600 text-white px-6 py-2.5 rounded-full font-bold hover:bg-sky-700 transition-all shadow-md shadow-sky-100 flex items-center gap-2 group"
          >
            Book Now
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-gray-600 bg-gray-50 rounded-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl py-6 px-4 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-bold text-gray-800 hover:text-sky-600 py-2 border-b border-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-4 bg-sky-600 text-white px-6 py-4 rounded-xl font-bold text-center shadow-lg shadow-sky-100"
                onClick={() => setIsOpen(false)}
              >
                Book Appointment
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
