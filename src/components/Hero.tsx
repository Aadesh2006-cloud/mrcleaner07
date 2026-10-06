import React from 'react';
import { Phone, ArrowRight, ShieldCheck, Sparkles, CheckCircle2, Star, Clock, Home, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/cleaningData.ts';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-teal-50/70 via-white to-slate-50 pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200/60">
      {/* Subtle background decorative grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#0d9488_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.04] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Trust Kicker - Zero pill: unboxed text */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs font-semibold text-teal-800 tracking-wide uppercase">
              <span>Morley, WA</span>
              <span className="text-teal-400" aria-hidden="true">·</span>
              <span>Police-Checked Cleaners</span>
              <span className="text-teal-400" aria-hidden="true">·</span>
              <span>Eco-Friendly Supplies</span>
              <span className="text-teal-400" aria-hidden="true">·</span>
              <span>100% Bond Back Ready</span>
            </div>

            {/* Marquee Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.1] font-display text-balance">
              A clean space makes life feel easier.
            </h1>

            {/* Subhead based on flyer */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              Mr Cleaner is here to make your home, office, or space fresh, clean & comfortable.
              Reliable service, meticulous attention to detail, and quality you can count on.
            </p>

            {/* Checklist highlights directly from the flyer */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 max-w-xl mx-auto lg:mx-0 text-left">
              {[
                'Professional & Reliable Service',
                'Trained & Police-Checked Team',
                'Attention to Detail in Every Corner',
                'Eco-Friendly, Non-Toxic Products',
                '100% Satisfaction Guarantee',
                'Serving Morley & Surrounding Areas',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-4">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-bold text-white bg-teal-700 hover:bg-teal-800 rounded-xl shadow-md shadow-teal-700/25 transition-all hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Book Your Cleaning</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#calculator"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl shadow-xs transition-colors"
              >
                <span>Instant Pricing Estimate</span>
              </a>

              <a
                href={BUSINESS_INFO.phoneHref}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-base font-semibold text-teal-800 bg-teal-50 hover:bg-teal-100/80 border border-teal-200 rounded-xl transition-colors"
              >
                <Phone className="w-4 h-4 text-teal-700" />
                <span>{BUSINESS_INFO.phoneDisplay}</span>
              </a>
            </div>

            {/* Local Proof Bar */}
            <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-teal-600" />
                <span className="font-medium text-slate-700">23 Hollett Road, Morley WA</span>
              </div>
              <span className="hidden sm:inline text-slate-300" aria-hidden="true">·</span>
              <div className="flex items-center gap-1">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <span className="font-semibold text-slate-700 ml-1">5.0 / 5.0 Rating</span>
              </div>
              <span className="hidden sm:inline text-slate-300" aria-hidden="true">·</span>
              <div className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-500" />
                <span>Mon – Sat, 7:00 AM – 7:00 PM</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Feature Showcase */}
          <div className="lg:col-span-5 relative">
            {/* Main Interactive Showcase Card */}
            <div className="relative bg-white rounded-2xl border border-slate-200/90 shadow-xl p-6 sm:p-7 space-y-6">
              {/* Card Header with Brand Seal */}
              <div className="flex items-start justify-between border-b border-slate-100 pb-5">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                      Available This Week
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mt-1 font-display">
                    Mr Cleaner Guarantee
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    "We clean. You relax!"
                  </p>
                </div>

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-teal-800 to-sky-600 flex flex-col items-center justify-center text-white shadow-md text-center p-1">
                  <ShieldCheck className="w-6 h-6 mb-0.5" />
                  <span className="text-[9px] font-extrabold uppercase leading-none">100% Clean</span>
                </div>
              </div>

              {/* Service Capabilities Quick Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex flex-col gap-1.5">
                  <span className="text-xs font-semibold text-slate-500">Residential</span>
                  <span className="text-sm font-bold text-slate-900">Home & Apartment</span>
                  <span className="text-[11px] text-teal-700 font-medium">From $120 / clean</span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex flex-col gap-1.5">
                  <span className="text-xs font-semibold text-slate-500">Moving Out?</span>
                  <span className="text-sm font-bold text-slate-900">End of Lease Bond</span>
                  <span className="text-[11px] text-teal-700 font-medium">100% Bond Approved</span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex flex-col gap-1.5">
                  <span className="text-xs font-semibold text-slate-500">Commercial</span>
                  <span className="text-sm font-bold text-slate-900">Office & Retail</span>
                  <span className="text-[11px] text-teal-700 font-medium">After-Hours Slots</span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex flex-col gap-1.5">
                  <span className="text-xs font-semibold text-slate-500">Restoration</span>
                  <span className="text-sm font-bold text-slate-900">Oven & Carpet Steam</span>
                  <span className="text-[11px] text-teal-700 font-medium">Grease & Allergen Free</span>
                </div>
              </div>

              {/* Quick Contact Prompt inside Hero card */}
              <div className="p-4 rounded-xl bg-teal-50 border border-teal-200/80 space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-teal-900">
                  <span>Fast Booking & Quote</span>
                  <span>Direct to Local Team</span>
                </div>
                <p className="text-xs text-teal-700 leading-relaxed">
                  Call or WhatsApp our team right now with your property details for an immediate custom quote.
                </p>
                <div className="flex items-center gap-2 pt-1">
                  <a
                    href={BUSINESS_INFO.phoneHref}
                    className="flex-1 py-2 px-3 text-center text-xs font-bold text-white bg-teal-700 hover:bg-teal-800 rounded-lg transition-colors"
                  >
                    Call: {BUSINESS_INFO.phoneDisplay}
                  </a>
                  <a
                    href={BUSINESS_INFO.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-3 text-xs font-bold text-emerald-800 bg-white border border-emerald-300 hover:bg-emerald-50 rounded-lg transition-colors"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>

              {/* Bottom Quote Seal */}
              <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                <span>📍 Serving Morley & surrounding WA areas</span>
                <span className="font-semibold text-slate-700">Police Checked</span>
              </div>
            </div>

            {/* Decorative Floating Card Indicator */}
            <div className="hidden sm:flex items-center gap-3 absolute -bottom-5 -left-5 bg-white border border-slate-200 shadow-lg rounded-xl py-2.5 px-4">
              <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center font-bold">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">Eco-Friendly Solutions</p>
                <p className="text-[10px] text-slate-500">Tough on dirt, safe for pets</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
