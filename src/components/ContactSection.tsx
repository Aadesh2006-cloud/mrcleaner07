import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  MessageCircle,
  CheckCircle2,
  Clock,
  Sparkles,
} from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/cleaningData.ts';

export const ContactSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    suburb: 'Morley',
    service: 'Home Cleaning',
    preferredDate: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-teal-400 uppercase tracking-wider">
                <span>Fast Local Response</span>
                <span aria-hidden="true">·</span>
                <span>Morley & Perth WA</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
                Need a clean? Send us a message today!
              </h2>

              <p className="text-base text-slate-300">
                A cleaner space is just a call or message away. We clean. You relax!
              </p>
            </div>

            {/* Direct Cards */}
            <div className="space-y-4">
              {/* Phone Card */}
              <a
                href={BUSINESS_INFO.phoneHref}
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 hover:border-teal-500 hover:bg-slate-800 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Phone & SMS</span>
                  <span className="text-lg font-bold text-white group-hover:text-teal-300 transition-colors">
                    {BUSINESS_INFO.phoneDisplay}
                  </span>
                </div>
              </a>

              {/* WhatsApp Card */}
              <a
                href={BUSINESS_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 hover:border-emerald-500 hover:bg-slate-800 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-medium">WhatsApp Direct Chat</span>
                  <span className="text-base font-bold text-emerald-400">
                    Chat with Mr Cleaner (+61 406 854 593)
                  </span>
                </div>
              </a>

              {/* Email Card */}
              <a
                href={BUSINESS_INFO.emailHref}
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 hover:border-teal-500 hover:bg-slate-800 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Email Enquiries</span>
                  <span className="text-sm sm:text-base font-bold text-white group-hover:text-teal-300 transition-colors">
                    {BUSINESS_INFO.email}
                  </span>
                </div>
              </a>

              {/* Location Card */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/80 border border-slate-700/80">
                <div className="w-12 h-12 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Head Office Location</span>
                  <span className="text-sm sm:text-base font-bold text-white">
                    {BUSINESS_INFO.address}
                  </span>
                </div>
              </div>
            </div>

            {/* Social Media Follow Section - Directly from the flyer */}
            <div className="p-5 rounded-xl bg-slate-800/50 border border-slate-800 space-y-3">
              <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                📲 Follow Us & See Our Latest Cleaning Work:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                <a
                  href={BUSINESS_INFO.socials.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors block text-center border border-slate-700"
                >
                  <strong className="block text-teal-400">Facebook</strong>
                  <span>mr.cleaner.07</span>
                </a>
                <a
                  href={BUSINESS_INFO.socials.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors block text-center border border-slate-700"
                >
                  <strong className="block text-teal-400">Instagram</strong>
                  <span>@mr.cleaner.07</span>
                </a>
                <a
                  href={BUSINESS_INFO.socials.tiktok.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors block text-center border border-slate-700"
                >
                  <strong className="block text-teal-400">TikTok</strong>
                  <span>@mr.cleaner.07</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Capture Form */}
          <div className="lg:col-span-7 bg-white text-slate-900 rounded-2xl p-6 sm:p-8 shadow-2xl">
            {formSubmitted ? (
              <div className="py-12 text-center space-y-4 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold font-display text-slate-900">
                  Message Sent to Mr Cleaner!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>. Our local team in Morley will review your request for <strong>{formData.service}</strong> in <strong>{formData.suburb}</strong> and call or text you at <strong>{formData.phone}</strong> shortly.
                </p>
                <div className="pt-4 flex justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        suburb: 'Morley',
                        service: 'Home Cleaning',
                        preferredDate: '',
                        message: '',
                      });
                    }}
                    className="px-5 py-2.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg cursor-pointer"
                  >
                    Send Another Inquiry
                  </button>
                  <a
                    href={BUSINESS_INFO.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg"
                  >
                    Open WhatsApp Chat
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-slate-100 pb-4 mb-2">
                  <h3 className="text-xl font-bold font-display text-slate-900">
                    Request a Cleaning Quote
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Fill out the form below for a free estimate and date reservation.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1">
                    <label htmlFor="contact-name" className="text-xs font-bold text-slate-800">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      required
                      type="text"
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-teal-600"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1">
                    <label htmlFor="contact-phone" className="text-xs font-bold text-slate-800">
                      Phone Number (Mobile) <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-phone"
                      required
                      type="tel"
                      placeholder="e.g. 0400 000 000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-teal-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div className="space-y-1">
                    <label htmlFor="contact-email" className="text-xs font-bold text-slate-800">
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="e.g. sarah@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-teal-600"
                    />
                  </div>

                  {/* Suburb */}
                  <div className="space-y-1">
                    <label htmlFor="contact-suburb" className="text-xs font-bold text-slate-800">
                      Property Suburb (WA)
                    </label>
                    <input
                      id="contact-suburb"
                      type="text"
                      placeholder="e.g. Morley, Bayswater, Dianella..."
                      value={formData.suburb}
                      onChange={(e) => setFormData({ ...formData, suburb: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-teal-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Service Type */}
                  <div className="space-y-1">
                    <label htmlFor="contact-service" className="text-xs font-bold text-slate-800">
                      Required Service
                    </label>
                    <select
                      id="contact-service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-teal-600"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Custom Clean">Custom / Combination Clean</option>
                    </select>
                  </div>

                  {/* Preferred Date */}
                  <div className="space-y-1">
                    <label htmlFor="contact-date" className="text-xs font-bold text-slate-800">
                      Preferred Date
                    </label>
                    <input
                      id="contact-date"
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-teal-600"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label htmlFor="contact-message" className="text-xs font-bold text-slate-800">
                    Cleaning Details / Special Requests
                  </label>
                  <textarea
                    id="contact-message"
                    rows={3}
                    placeholder="Tell us about the property (e.g. 3 bedrooms, 2 bathrooms, oven deep clean needed, moving out on Friday)..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-teal-600"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 text-sm font-extrabold text-white bg-teal-700 hover:bg-teal-800 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Quote Request</span>
                  </button>
                  <p className="text-[11px] text-slate-500 text-center mt-2">
                    🔒 No obligation. We will respond within 1–2 hours during business hours.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
