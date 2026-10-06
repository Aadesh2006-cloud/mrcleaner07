import React from 'react';
import {
  Clock,
  ShieldCheck,
  Leaf,
  Tag,
  ThumbsUp,
  MapPin,
  Heart,
  CheckCircle2,
} from 'lucide-react';
import { WHY_CHOOSE_US, BUSINESS_INFO } from '../data/cleaningData.ts';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Clock':
        return <Clock className="w-6 h-6 text-teal-700" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-teal-700" />;
      case 'Leaf':
        return <Leaf className="w-6 h-6 text-teal-700" />;
      case 'Tag':
        return <Tag className="w-6 h-6 text-teal-700" />;
      case 'ThumbsUp':
        return <ThumbsUp className="w-6 h-6 text-teal-700" />;
      case 'MapPin':
        return <MapPin className="w-6 h-6 text-teal-700" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-teal-700" />;
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Why Choose Overview */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold text-teal-800 uppercase tracking-wider">
              <span>Why Choose Us</span>
              <span aria-hidden="true">·</span>
              <span>Local Morley Pride</span>
              <span aria-hidden="true">·</span>
              <span>Verified Standards</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
              Why Morley & Perth Trust Mr Cleaner
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              We are proud to serve our local community in Morley and surrounding suburbs.
              Your support means the world to us and motivates us to keep delivering the best cleaning experience.
            </p>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-teal-800 font-bold text-sm">
                <Heart className="w-4 h-4 fill-teal-600 text-teal-600" />
                <span>"Thank you for trusting Mr Cleaner!"</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed italic">
                "Our mission is simple: to deliver high-quality cleaning services that make your home, office, or car fresh, clean, and comfortable. We are committed to providing you with reliable service, professional care, and 100% satisfaction every time."
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="font-semibold text-slate-800">Kind Regards, The Mr Cleaner Team</span>
                <span>Morley, WA</span>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={BUSINESS_INFO.socials.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-teal-800 hover:text-teal-950 underline underline-offset-4"
              >
                Facebook: Mr Cleaner on Facebook
              </a>
              <span className="text-slate-300" aria-hidden="true">·</span>
              <a
                href={BUSINESS_INFO.socials.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-teal-800 hover:text-teal-950 underline underline-offset-4"
              >
                Instagram: {BUSINESS_INFO.socials.instagram.handle}
              </a>
            </div>
          </div>

          {/* Right Column: Key Trust Pillars Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {WHY_CHOOSE_US.map((item) => (
              <div
                key={item.title}
                className="bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 space-y-3 hover:border-slate-300 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center">
                  {getIcon(item.iconName)}
                </div>

                <h3 className="text-base font-bold text-slate-900 font-display">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
