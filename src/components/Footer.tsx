import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/cleaningData.ts';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800 pb-20 lg:pb-8 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-700 to-sky-500 flex items-center justify-center text-white shadow-md">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xl font-extrabold text-white font-display block">
                  Mr Cleaner
                </span>
                <span className="text-[10px] font-bold text-teal-400 uppercase tracking-wider">
                  Clean Space · Better Living
                </span>
              </div>
            </Link>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Professional, reliable, and friendly cleaning service for homes, offices, and vehicles across Morley and greater Perth, Western Australia. 100% satisfaction guaranteed. We clean, you relax!
            </p>

            <div className="pt-2 text-[11px] text-slate-500 space-y-1">
              <p>📍 {BUSINESS_INFO.address}</p>
              <p>🕒 {BUSINESS_INFO.hours}</p>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-3">
            <span className="text-xs font-bold text-white uppercase tracking-wider block">
              Services
            </span>
            <ul className="space-y-2">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link to="/services" className="hover:text-teal-400 transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="space-y-3">
            <span className="text-xs font-bold text-white uppercase tracking-wider block">
              Explore Pages
            </span>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="hover:text-teal-400 transition-colors">
                  All Cleaning Services
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-teal-400 transition-colors">
                  Instant Quote Calculator
                </Link>
              </li>
              <li>
                <Link to="/transformations" className="hover:text-teal-400 transition-colors">
                  Before & After Transformations
                </Link>
              </li>
              <li>
                <Link to="/service-areas" className="hover:text-teal-400 transition-colors">
                  Morley & Suburbs Serviced
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-teal-400 transition-colors">
                  About Us & 5-Step Workflow
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="hover:text-teal-400 transition-colors">
                  Customer Reviews
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-teal-400 transition-colors">
                  Contact & Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Socials */}
          <div className="space-y-3">
            <span className="text-xs font-bold text-white uppercase tracking-wider block">
              Direct Contact
            </span>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="font-bold text-white hover:text-teal-400 transition-colors flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-teal-400" />
                  <span>{BUSINESS_INFO.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS_INFO.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  Chat on WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS_INFO.emailHref}
                  className="hover:text-teal-400 transition-colors break-all"
                >
                  {BUSINESS_INFO.email}
                </a>
              </li>
            </ul>

            <div className="pt-2 space-y-1">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                Social Media
              </span>
              <div className="flex flex-col gap-1 text-slate-300">
                <a
                  href={BUSINESS_INFO.socials.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-400 transition-colors"
                >
                  Facebook: {BUSINESS_INFO.socials.facebook.handle}
                </a>
                <a
                  href={BUSINESS_INFO.socials.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-400 transition-colors"
                >
                  Instagram: {BUSINESS_INFO.socials.instagram.handle}
                </a>
                <a
                  href={BUSINESS_INFO.socials.tiktok.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-400 transition-colors"
                >
                  TikTok: {BUSINESS_INFO.socials.tiktok.handle}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} Mr Cleaner. All rights reserved. 23 Hollett Road, Morley, Perth WA 6062.</p>
          <div className="flex items-center gap-4">
            <span>A clean space makes life feel easier! 🧹✨</span>
            <button
              onClick={scrollToTop}
              className="p-2 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
