import React, { useState } from 'react';
import { MapPin, Search, CheckCircle2, Navigation, ShieldCheck } from 'lucide-react';
import { SUBURBS_SERVICED, BUSINESS_INFO } from '../data/cleaningData.ts';

export const SuburbChecker: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSuburb, setSelectedSuburb] = useState<any>(SUBURBS_SERVICED[0]);

  const filteredSuburbs = SUBURBS_SERVICED.filter((s) =>
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.postcode.includes(searchTerm)
  );

  return (
    <section id="suburbs" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-teal-800 uppercase tracking-wider">
            <span>Local Presence</span>
            <span aria-hidden="true">·</span>
            <span>Morley Hub</span>
            <span aria-hidden="true">·</span>
            <span>Western Australia</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Serving Morley & Surrounding Areas
          </h2>

          <p className="text-base text-slate-600">
            Based at 23 Hollett Road, Morley WA. We provide fast, reliable dispatch throughout Morley and neighboring Perth suburbs.
          </p>
        </div>

        {/* Suburb Checker Interactive Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Search & Interactive Directory */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="space-y-2">
              <label htmlFor="suburb-search" className="text-sm font-bold text-slate-900 block">
                Check Your Suburb or Postcode
              </label>
              <div className="relative">
                <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  id="suburb-search"
                  type="text"
                  placeholder="e.g. Morley, Bayswater, Dianella, 6062..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-white border border-slate-300 rounded-xl text-sm font-medium focus:outline-hidden focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all"
                />
              </div>
            </div>

            {/* Quick Click Suburbs List */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                Popular Service Locations:
              </span>
              <div className="flex flex-wrap gap-2">
                {filteredSuburbs.slice(0, 10).map((suburb) => (
                  <button
                    key={suburb.name}
                    type="button"
                    onClick={() => setSelectedSuburb(suburb)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      selectedSuburb?.name === suburb.name
                        ? 'bg-teal-700 text-white shadow-xs'
                        : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-100'
                    }`}
                  >
                    {suburb.name} ({suburb.postcode})
                  </button>
                ))}
              </div>
            </div>

            {/* Suburb Status Confirmation */}
            {selectedSuburb && (
              <div className="p-4 rounded-xl bg-teal-50/80 border border-teal-200 space-y-2 animate-fadeIn">
                <div className="flex items-center gap-2 text-teal-900 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Yes! We proudly service {selectedSuburb.name} (WA {selectedSuburb.postcode})</span>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-xs text-teal-800">
                  <span>Distance from Morley Hub: <strong className="text-teal-950">{selectedSuburb.distance}</strong></span>
                  <span aria-hidden="true">·</span>
                  <span>Travel Fee: <strong className="text-teal-950">$0.00 (Standard Area)</strong></span>
                  <span aria-hidden="true">·</span>
                  <span>Booking Lead Time: <strong className="text-teal-950">24 – 48 Hours</strong></span>
                </div>
              </div>
            )}
          </div>

          {/* Right: Morley Base Location Card & Visual Map Pin */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-slate-950 text-white rounded-2xl p-6 sm:p-8 space-y-6 shadow-lg">
            <div className="space-y-1">
              <span className="text-xs font-semibold text-teal-400 uppercase tracking-wider">
                Home Headquarters
              </span>
              <h3 className="text-2xl font-bold font-display text-white">
                Mr Cleaner Morley Base
              </h3>
              <p className="text-xs text-slate-300">
                Centrally located for rapid response across all eastern & northern Perth suburbs.
              </p>
            </div>

            {/* Address & Quick Directions Box */}
            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-white">
                    {BUSINESS_INFO.address}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Perth Metropolitan Region, Western Australia
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-700/60 flex items-center justify-between text-xs text-slate-300">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Registered & Insured Local Cleaner
                </span>
              </div>
            </div>

            {/* Visual Coverage Radar Graphic */}
            <div className="relative h-44 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(#0d9488_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
              
              {/* Concentric coverage rings */}
              <div className="w-40 h-40 rounded-full border border-teal-500/20 absolute flex items-center justify-center">
                <div className="w-28 h-28 rounded-full border border-teal-500/30 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full border border-teal-500/50 flex items-center justify-center bg-teal-500/10">
                    <div className="w-4 h-4 rounded-full bg-teal-400 shadow-[0_0_12px_#2dd4bf] animate-ping opacity-75" />
                  </div>
                </div>
              </div>

              {/* Center Pin */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="bg-teal-500 text-slate-950 font-extrabold text-[11px] px-2.5 py-1 rounded-full shadow-md">
                  Morley Base
                </div>
                <span className="text-[10px] text-teal-200 mt-1 font-medium">
                  23 Hollett Rd, 6062
                </span>
              </div>
            </div>

            {/* Direct Contact Button */}
            <a
              href={BUSINESS_INFO.phoneHref}
              className="w-full py-3 px-4 bg-teal-500 hover:bg-teal-400 text-slate-950 font-extrabold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors"
            >
              <Navigation className="w-4 h-4" />
              <span>Call Local Team: {BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
