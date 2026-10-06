import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Phone, MessageCircle, Menu, X, Sparkles, MapPin, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/cleaningData.ts';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Services', to: '/services' },
    { label: 'Pricing', to: '/pricing' },
    { label: 'Before & After', to: '/transformations' },
    { label: 'Areas', to: '/service-areas' },
    { label: 'About', to: '/about' },
    { label: 'Reviews', to: '/reviews' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <>
      {/* Top Announcement Ribbon */}
      <div className="bg-teal-900 text-teal-100 text-xs py-2 px-4 border-b border-teal-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 font-medium">
              <MapPin className="w-3.5 h-3.5 text-teal-300" />
              Serving Morley & Greater Perth WA
            </span>
            <span className="hidden md:inline text-teal-400/60" aria-hidden="true">·</span>
            <span className="hidden md:flex items-center gap-1 text-teal-200">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-300" />
              Police Checked & Insured
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={BUSINESS_INFO.phoneHref}
              className="flex items-center gap-1.5 font-semibold text-white hover:text-teal-200 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-teal-400" />
              <span>{BUSINESS_INFO.phoneDisplay}</span>
            </a>
            <span className="text-teal-400/60" aria-hidden="true">·</span>
            <a
              href={BUSINESS_INFO.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-teal-200 hover:text-white transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Zone 1: Brand Wordmark */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-teal-700 via-teal-600 to-sky-500 flex items-center justify-center text-white shadow-md shadow-teal-700/20 group-hover:scale-105 transition-transform">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 font-display">
                Mr Cleaner
              </span>
              <span className="text-[11px] font-semibold text-teal-700 tracking-wider uppercase -mt-1">
                Clean Space · Better Living
              </span>
            </div>
          </Link>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `transition-colors py-1 relative whitespace-nowrap ${
                    isActive
                      ? 'text-teal-800 font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-teal-700'
                      : 'hover:text-teal-700'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Zone 3: Actions */}
          <div className="flex items-center gap-3">
            <a
              href={BUSINESS_INFO.phoneHref}
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-teal-600" />
              <span>{BUSINESS_INFO.phoneDisplay}</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-teal-700 hover:bg-teal-800 rounded-lg shadow-sm shadow-teal-700/25 transition-all hover:shadow-md active:scale-95 whitespace-nowrap cursor-pointer"
            >
              <span>Get Free Quote</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-lg">
            <div className="grid grid-cols-2 gap-2 text-sm font-medium text-slate-700 pb-3 border-b border-slate-100">
              <NavLink
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg transition-colors ${
                    isActive ? 'bg-teal-50 text-teal-800 font-bold' : 'hover:bg-slate-50'
                  }`
                }
              >
                Home
              </NavLink>
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-lg transition-colors ${
                      isActive ? 'bg-teal-50 text-teal-800 font-bold' : 'hover:bg-slate-50'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            <div className="flex flex-col gap-2 pt-2">
              <a
                href={BUSINESS_INFO.phoneHref}
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-sm font-semibold text-slate-800 bg-slate-100 rounded-lg"
              >
                <Phone className="w-4 h-4 text-teal-600" />
                Call {BUSINESS_INFO.phoneDisplay}
              </a>

              <a
                href={BUSINESS_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-sm font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-lg"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                Chat on WhatsApp
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 px-4 text-sm font-bold text-white bg-teal-700 hover:bg-teal-800 rounded-lg shadow-sm text-center cursor-pointer"
              >
                Book a Clean Now
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
