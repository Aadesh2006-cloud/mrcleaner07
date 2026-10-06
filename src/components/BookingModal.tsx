import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Phone, Calendar, Clock, Sparkles, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/cleaningData.ts';
import { CalculatedQuote } from './QuoteCalculator.tsx';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  calculatedQuote?: CalculatedQuote | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialService = 'Home Cleaning',
  calculatedQuote,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [suburb, setSuburb] = useState('Morley');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('Morning (8:00 AM - 12:00 PM)');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappMessage = () => {
    const serviceName = calculatedQuote ? calculatedQuote.serviceTitle : initialService;
    const priceText = calculatedQuote ? ` (Estimated $${calculatedQuote.totalPrice} AUD)` : '';
    const text = `Hi Mr Cleaner! I'd like to book a cleaning slot:%0A- Name: ${name || 'Customer'}%0A- Phone: ${phone}%0A- Service: ${serviceName}${priceText}%0A- Suburb: ${suburb || 'Morley'}%0A- Preferred Date: ${preferredDate || 'Earliest available'}`;
    return `https://wa.me/61406854593?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 my-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-teal-800 to-slate-900 text-white p-5 sm:p-6 flex items-start justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-teal-300 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Mr Cleaner Booking Request</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-display">
              {calculatedQuote ? calculatedQuote.serviceTitle : initialService}
            </h3>
            {calculatedQuote && (
              <p className="text-xs text-teal-200">
                Estimated Price: <strong className="text-white text-sm tabular-nums">${calculatedQuote.totalPrice} AUD</strong> · {calculatedQuote.estimatedHours}
              </p>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-300 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center space-y-4 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold font-display text-slate-900">
                Booking Request Received!
              </h4>
              <p className="text-sm text-slate-600 max-w-sm mx-auto">
                Thank you <strong>{name}</strong>! Our Morley cleaning team will call or SMS you at <strong>{phone}</strong> to confirm your slot for <strong>{suburb}</strong>.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row justify-center gap-2">
                <a
                  href={whatsappMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Confirm Faster via WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="modal-name" className="text-xs font-bold text-slate-800">
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="modal-name"
                    required
                    type="text"
                    placeholder="e.g. John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-teal-600 focus:outline-hidden"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="modal-phone" className="text-xs font-bold text-slate-800">
                    Phone Number (Mobile) <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="modal-phone"
                    required
                    type="tel"
                    placeholder="e.g. 0406 854 593"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-teal-600 focus:outline-hidden"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="modal-suburb" className="text-xs font-bold text-slate-800">
                    Suburb (Morley / Perth WA)
                  </label>
                  <input
                    id="modal-suburb"
                    type="text"
                    placeholder="e.g. Morley, Bayswater..."
                    value={suburb}
                    onChange={(e) => setSuburb(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-teal-600 focus:outline-hidden"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="modal-email" className="text-xs font-bold text-slate-800">
                    Email Address
                  </label>
                  <input
                    id="modal-email"
                    type="email"
                    placeholder="e.g. john@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-teal-600 focus:outline-hidden"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="modal-date" className="text-xs font-bold text-slate-800">
                    Preferred Cleaning Date
                  </label>
                  <input
                    id="modal-date"
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-teal-600 focus:outline-hidden"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="modal-time" className="text-xs font-bold text-slate-800">
                    Preferred Time Window
                  </label>
                  <select
                    id="modal-time"
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-teal-600 focus:outline-hidden"
                  >
                    <option value="Morning (8:00 AM - 12:00 PM)">Morning (8:00 AM - 12:00 PM)</option>
                    <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12:00 PM - 4:00 PM)</option>
                    <option value="Late Afternoon (4:00 PM - 7:00 PM)">Late Afternoon (4:00 PM - 7:00 PM)</option>
                    <option value="Flexible / Any Time">Flexible / Any Time</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="modal-notes" className="text-xs font-bold text-slate-800">
                  Address & Property Notes (Optional)
                </label>
                <textarea
                  id="modal-notes"
                  rows={2}
                  placeholder="Street address, key access instructions, pet on premises, etc."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-teal-600 focus:outline-hidden"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:flex-1 py-3 px-4 bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm rounded-xl transition-colors cursor-pointer"
                >
                  Confirm & Reserve Slot
                </button>
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="w-full sm:w-auto py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl text-center transition-colors"
                >
                  Call {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
