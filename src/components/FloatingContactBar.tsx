import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/cleaningData.ts';

interface FloatingContactBarProps {
  onOpenBooking: () => void;
}

export const FloatingContactBar: React.FC<FloatingContactBarProps> = ({ onOpenBooking }) => {
  return (
    <aside
      aria-label="Quick contact toolbar"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 shadow-lg"
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        {/* Quick Call */}
        <a
          href={BUSINESS_INFO.phoneHref}
          className="flex-1 flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg bg-teal-800 text-white font-bold text-xs shadow-xs active:scale-95 transition-transform"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Call 0406 854 593</span>
        </a>

        {/* WhatsApp */}
        <a
          href={BUSINESS_INFO.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-emerald-600 text-white font-bold text-xs active:scale-95 transition-transform"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>

        {/* Book Clean */}
        <button
          onClick={onOpenBooking}
          className="py-2 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs border border-slate-300 active:scale-95 transition-transform cursor-pointer"
        >
          <span>Quote</span>
        </button>
      </div>
    </aside>
  );
};
