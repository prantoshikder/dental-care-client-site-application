"use client";

import { useState } from 'react';
import SectionHeader from '@/src/components/SectionHeader';
import { Mail, Phone, MapPin, Clock, Send, ShieldCheck, Headphones } from 'lucide-react';

export default function ContactPageContainer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'General Dentistry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! Our team will contact you shortly.');
    setFormData({ name: '', email: '', phone: '', service: 'General Dentistry', message: '' });
  };

  return (
    <div className="pb-20">
      {/* Contact Hero */}
      <section className="bg-sky-600 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Contact Us</h1>
          <p className="text-xl text-sky-100 max-w-3xl mx-auto leading-relaxed">
            Have a question or ready to schedule your visit? We're here to help you. Reach out to us through any of the channels below.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Contact Cards */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm space-y-8">
                <div className="flex gap-6 items-center">
                  <div className="w-14 h-14 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-600 shrink-0">
                    <Phone size={28} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Call Us</p>
                    <p className="text-xl font-bold text-gray-900">(123) 456-7890</p>
                  </div>
                </div>
                <div className="flex gap-6 items-center">
                  <div className="w-14 h-14 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-600 shrink-0">
                    <Mail size={28} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Email Us</p>
                    <p className="text-xl font-bold text-gray-900">hello@smilecare.com</p>
                  </div>
                </div>
                <div className="flex gap-6 items-center">
                  <div className="w-14 h-14 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-600 shrink-0">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Visit Us</p>
                    <p className="text-lg font-bold text-gray-900">123 Dental Lane, Smile City</p>
                  </div>
                </div>
              </div>

              <div className="bg-sky-600 p-8 rounded-[40px] text-white space-y-6 shadow-xl shadow-sky-200">
                <h3 className="text-2xl font-bold">Working Hours</h3>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-sky-100">Monday - Friday</span>
                    <span className="font-bold">9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-sky-100">Saturday</span>
                    <span className="font-bold">10:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sky-100">Sunday</span>
                    <span className="font-bold">Closed</span>
                  </div>
                </div>
                <div className="pt-4 flex items-center gap-3">
                  <ShieldCheck size={20} className="text-sky-300" />
                  <p className="text-xs font-medium text-sky-100 uppercase tracking-widest">24/7 Emergency Support</p>
                </div>
              </div>
            </div>

            {/* Form Section */}
            <div className="lg:col-span-2 space-y-12">
              <div className="bg-gray-50 p-8 md:p-16 rounded-[40px] border border-gray-100">
                <div className="mb-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Send a Message</h2>
                  <p className="text-gray-500">Fill out the form below and we'll get back to you within 24 hours.</p>
                </div>
                <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">Your Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Enter your name"
                      className="w-full px-6 py-5 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-sky-500/10 focus:border-sky-500 transition-all text-gray-900"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">Email Address</label>
                    <input 
                      type="email" 
                      required
                      placeholder="Enter your email"
                      className="w-full px-6 py-5 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-sky-500/10 focus:border-sky-500 transition-all text-gray-900"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="(123) 456-7890"
                      className="w-full px-6 py-5 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-sky-500/10 focus:border-sky-500 transition-all text-gray-900"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">Service Required</label>
                    <select 
                      className="w-full px-6 py-5 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-sky-500/10 focus:border-sky-500 transition-all text-gray-900 appearance-none cursor-pointer"
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                    >
                      <option>General Dentistry</option>
                      <option>Cosmetic Dentistry</option>
                      <option>Dental Implants</option>
                      <option>Orthodontics</option>
                    </select>
                  </div>
                  <div className="md:col-span-2 space-y-3">
                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">Your Message</label>
                    <textarea 
                      rows={6}
                      placeholder="How can we help you?"
                      className="w-full px-6 py-5 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-sky-500/10 focus:border-sky-500 transition-all text-gray-900 resize-none"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>
                  <div className="md:col-span-2">
                    <button 
                      type="submit"
                      className="w-full bg-gray-900 text-white px-10 py-6 rounded-2xl font-bold hover:bg-sky-600 transition-all flex items-center justify-center gap-3 shadow-xl"
                    >
                      Submit Message <Send size={20} />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
