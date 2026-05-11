"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="fixed top-0 w-full z-50 px-4 py-4 pointer-events-none">
      <header
        className={`max-w-7xl mx-auto w-full pointer-events-auto transition-all duration-500 rounded-4xl overflow-hidden ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-2xl shadow-sky-900/10 border border-white/20 py-3"
            : "bg-white/50 backdrop-blur-sm border border-white/30 py-4"
        }`}
      >
        <nav className="px-6 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative">
              <motion.div
                whileHover={{ rotate: 15, scale: 1.1 }}
                className="w-10 h-10 bg-linear-to-tr from-sky-600 to-sky-400 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-sky-200"
              >
                D
              </motion.div>
              <div className="absolute -inset-1 bg-sky-400/20 blur-lg rounded-full -z-10 group-hover:bg-sky-400/40 transition-colors"></div>
            </div>
            <span className="text-xl font-black text-gray-900 tracking-tight">
              Dental<span className="text-sky-600 font-extrabold">Care</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center bg-gray-100/50 p-1.5 rounded-2xl border border-gray-200/50">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-6 py-2.5 text-sm font-bold transition-all duration-300 rounded-xl ${
                    isActive
                      ? "text-sky-700"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-white shadow-sm border border-gray-100 rounded-xl"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+1234567890"
              className="hidden lg:flex items-center gap-2 text-gray-600 hover:text-sky-600 transition-colors mr-2"
            >
              <div className="w-8 h-8 bg-sky-50 rounded-full flex items-center justify-center text-sky-600">
                <Phone size={14} fill="currentColor" />
              </div>
              <span className="text-sm font-bold">(123) 456-7890</span>
            </a>
            <Link
              href="/contact"
              className="bg-gray-900 text-white px-7 py-3 rounded-2xl font-bold hover:bg-sky-600 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 shadow-lg shadow-gray-200 group"
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
            className="md:hidden w-11 h-11 flex items-center justify-center text-gray-700 bg-gray-100/80 rounded-xl hover:bg-gray-200 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden border-t border-gray-100 bg-white"
            >
              <div className="px-6 py-8 flex flex-col gap-3">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`text-xl font-black p-4 rounded-2xl flex items-center justify-between transition-all ${
                        isActive
                          ? "bg-sky-50 text-sky-600"
                          : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                      }`}
                    >
                      {link.name}
                      {isActive && (
                        <div className="w-2 h-2 bg-sky-600 rounded-full" />
                      )}
                    </Link>
                  );
                })}
                <Link
                  href="/contact"
                  className="mt-4 bg-sky-600 text-white px-6 py-5 rounded-2xl font-bold text-center text-lg shadow-xl shadow-sky-100"
                >
                  Book Appointment
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}
