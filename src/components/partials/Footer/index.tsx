import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Share2,
  Globe,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2 text-white">
            <div className="w-8 h-8 bg-sky-600 rounded flex items-center justify-center text-white font-bold text-lg">
              S
            </div>
            <span className="text-xl font-bold tracking-tight">SmileCare</span>
          </Link>
          <p className="text-sm leading-relaxed">
            Providing high-quality dental care with the latest technology and a
            patient-first approach. Your smile is our priority.
          </p>
          <div className="flex gap-4 pt-2">
            <Link href="#" className="hover:text-sky-500 transition-colors">
              <Share2 size={20} />
            </Link>
            <Link href="#" className="hover:text-sky-500 transition-colors">
              <Globe size={20} />
            </Link>
            <Link href="#" className="hover:text-sky-500 transition-colors">
              <MessageCircle size={20} />
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-6">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-white transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-white transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-white transition-colors"
              >
                Book Appointment
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-6">Services</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link
                href="/services"
                className="hover:text-white transition-colors"
              >
                General Dentistry
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-white transition-colors"
              >
                Cosmetic Dentistry
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-white transition-colors"
              >
                Orthodontics
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-white transition-colors"
              >
                Teeth Whitening
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-6">Contact Info</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin size={18} className="text-sky-500 shrink-0" />
              <span>123 Dental Lane, Smile City, SC 12345</span>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="text-sky-500 shrink-0" />
              <span>(123) 456-7890</span>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="text-sky-500 shrink-0" />
              <span>hello@smilecare.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-gray-800 text-center text-xs">
        <p>
          &copy; {new Date().getFullYear()} SmileCare Dental Clinic. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
