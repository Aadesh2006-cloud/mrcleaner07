import React, { useState, useMemo } from 'react';
import { Calculator, Check, ArrowRight, Sparkles, MessageCircle, Info } from 'lucide-react';
import { BUSINESS_INFO } from '../data/cleaningData.ts';

export interface CalculatedQuote {
  serviceId: string;
  serviceTitle: string;
  bedrooms: number;
  bathrooms: number;
  frequency: string;
  frequencyDiscount: number;
  addOns: string[];
  totalPrice: number;
  estimatedHours: string;
}

interface QuoteCalculatorProps {
  onSelectQuote: (quote: CalculatedQuote) => void;
}

export const QuoteCalculator: React.FC<QuoteCalculatorProps> = ({ onSelectQuote }) => {
  const [serviceType, setServiceType] = useState<'home' | 'bond' | 'carpet' | 'office' | 'windows' | 'car'>('home');
  const [bedrooms, setBedrooms] = useState<number>(3);
  const [bathrooms, setBathrooms] = useState<number>(2);
  const [frequency, setFrequency] = useState<'one-off' | 'fortnightly' | 'weekly'>('fortnightly');
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>(['oven']);

  const addOnOptions = [
    { id: 'oven', label: 'Oven & Stovetop Deep Degrease', price: 65, hint: 'Tough baked grease & racks' },
    { id: 'windows-inside', label: 'Interior Window Panes & Tracks', price: 50, hint: 'Streak-free crystal clear' },
    { id: 'carpet-steam', label: 'Carpet Steam Extraction (2 Rooms)', price: 80, hint: 'Hot water allergen rinse' },
    { id: 'fridge', label: 'Refrigerator Interior Sanitising', price: 35, hint: 'Shelves, drawers & seals' },
    { id: 'balcony', label: 'Balcony / Patio Wash & Sweep', price: 40, hint: 'Outdoor tiles & cobwebs' },
  ];

  const toggleAddOn = (id: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const calculatedQuote = useMemo<CalculatedQuote>(() => {
    let base = 110;
    let serviceTitle = 'Regular Home Clean';
    let baseHours = 2.5;

    if (serviceType === 'home') {
      base = 90 + (bedrooms * 20) + (bathrooms * 25);
      baseHours = 1.5 + (bedrooms * 0.5) + (bathrooms * 0.4);
      serviceTitle = 'Regular Home Cleaning';
    } else if (serviceType === 'bond') {
      base = 220 + (bedrooms * 55) + (bathrooms * 50);
      baseHours = 3.5 + (bedrooms * 0.8) + (bathrooms * 0.6);
      serviceTitle = 'End of Lease (Bond Back Guarantee)';
    } else if (serviceType === 'carpet') {
      base = 60 + (bedrooms * 30);
      baseHours = 1.5 + (bedrooms * 0.4);
      serviceTitle = 'Carpet Steam Hot Water Extraction';
    } else if (serviceType === 'office') {
      base = 140 + (bedrooms * 35);
      baseHours = 2.0 + (bedrooms * 0.6);
      serviceTitle = 'Office / Commercial Cleaning';
    } else if (serviceType === 'windows') {
      base = 85 + (bedrooms * 20);
      baseHours = 1.5 + (bedrooms * 0.3);
      serviceTitle = 'Full Window & Track Detailing';
    } else if (serviceType === 'car') {
      base = 75 + (bedrooms > 3 ? 30 : 0);
      baseHours = 1.5;
      serviceTitle = 'Mobile Vehicle Valeting & Wash';
    }

    // Add-on cost
    const addOnTotal = selectedAddOns.reduce((sum, id) => {
      const opt = addOnOptions.find((o) => o.id === id);
      return sum + (opt ? opt.price : 0);
    }, 0);

    let discountPercent = 0;
    if (frequency === 'weekly') discountPercent = 0.15;
    else if (frequency === 'fortnightly') discountPercent = 0.10;

    const subTotal = base + addOnTotal;
    const finalPrice = Math.round(subTotal * (1 - discountPercent));

    return {
      serviceId: serviceType,
      serviceTitle,
      bedrooms,
      bathrooms,
      frequency,
      frequencyDiscount: discountPercent * 100,
      addOns: selectedAddOns,
      totalPrice: finalPrice,
      estimatedHours: `${baseHours.toFixed(1)} – ${(baseHours + 1).toFixed(1)} hrs`,
    };
  }, [serviceType, bedrooms, bathrooms, frequency, selectedAddOns]);

  const whatsappMessage = useMemo(() => {
    const text = `Hi Mr Cleaner! I calculated an estimate on your website:%0A- Service: ${calculatedQuote.serviceTitle}%0A- Size: ${bedrooms} Bed / ${bathrooms} Bath%0A- Frequency: ${frequency}%0A- Add-ons: ${selectedAddOns.join(', ') || 'None'}%0A- Estimated: $${calculatedQuote.totalPrice} AUD%0A%0ACan you confirm availability for Morley / Perth?`;
    return `https://wa.me/61406854593?text=${text}`;
  }, [calculatedQuote, bedrooms, bathrooms, frequency, selectedAddOns]);

  return (
    <section id="calculator" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Anti-slop zero pill discipline */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-teal-800 uppercase tracking-wider">
            <span>Instant Estimate</span>
            <span aria-hidden="true">·</span>
            <span>Transparent Rates</span>
            <span aria-hidden="true">·</span>
            <span>No Hidden Surcharges</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Instant Cleaning Quote Calculator
          </h2>

          <p className="text-base text-slate-600">
            Tailor your requirements below for an upfront, transparent price estimate. We bring all equipment and eco-friendly products.
          </p>
        </div>

        {/* Calculator Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-7">
            {/* 1. Service Type Selector */}
            <div className="space-y-3">
              <label className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <span>1. Select Service Type</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  { id: 'home', label: 'Home Clean', desc: 'Routine or Deep' },
                  { id: 'bond', label: 'End of Lease', desc: '100% Bond Back' },
                  { id: 'carpet', label: 'Carpet Steam', desc: 'Deep Extraction' },
                  { id: 'office', label: 'Office Clean', desc: 'Commercial Space' },
                  { id: 'windows', label: 'Windows', desc: 'Interior & Tracks' },
                  { id: 'car', label: 'Car Detailing', desc: 'Mobile Driveway' },
                ].map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setServiceType(s.id as any)}
                    className={`p-3 text-left rounded-xl border transition-all cursor-pointer ${
                      serviceType === s.id
                        ? 'bg-teal-700 text-white border-teal-700 shadow-sm'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100/50'
                    }`}
                  >
                    <p className="text-xs sm:text-sm font-bold leading-tight">{s.label}</p>
                    <p className={`text-[11px] mt-0.5 ${serviceType === s.id ? 'text-teal-100' : 'text-slate-500'}`}>
                      {s.desc}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Property Size (Bedrooms & Bathrooms) */}
            {serviceType !== 'car' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-1">
                {/* Bedrooms */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-bold text-slate-800">
                    <span>{serviceType === 'office' ? 'Office Rooms / Zones' : 'Bedrooms'}</span>
                    <span className="text-teal-700 font-semibold">{bedrooms} {bedrooms === 5 ? '5+ rooms' : 'rooms'}</span>
                  </div>
                  <div className="flex items-center gap-1.5 p-1 bg-white border border-slate-200 rounded-xl">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setBedrooms(num)}
                        className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                          bedrooms === num
                            ? 'bg-teal-700 text-white'
                            : 'text-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        {num === 5 ? '5+' : num}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Bathrooms */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-bold text-slate-800">
                    <span>Bathrooms / Ensuites</span>
                    <span className="text-teal-700 font-semibold">{bathrooms} {bathrooms === 4 ? '4+ baths' : 'baths'}</span>
                  </div>
                  <div className="flex items-center gap-1.5 p-1 bg-white border border-slate-200 rounded-xl">
                    {[1, 2, 3, 4].map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setBathrooms(num)}
                        className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                          bathrooms === num
                            ? 'bg-teal-700 text-white'
                            : 'text-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        {num === 4 ? '4+' : num}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* 3. Frequency */}
            <div className="space-y-2 pt-1">
              <label className="text-sm font-bold text-slate-900">
                2. Cleaning Frequency (Save with recurring)
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'weekly', label: 'Weekly', discount: '15% OFF' },
                  { id: 'fortnightly', label: 'Fortnightly', discount: '10% OFF' },
                  { id: 'one-off', label: 'One-Off Clean', discount: 'Standard' },
                ].map((f) => (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => setFrequency(f.id as any)}
                    className={`py-2.5 px-3 rounded-xl border text-center transition-all cursor-pointer ${
                      frequency === f.id
                        ? 'bg-teal-800 text-white border-teal-800 shadow-xs'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100/60'
                    }`}
                  >
                    <p className="text-xs font-bold">{f.label}</p>
                    <p className={`text-[10px] font-semibold mt-0.5 ${frequency === f.id ? 'text-teal-200' : 'text-teal-700'}`}>
                      {f.discount}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Optional Add-ons */}
            <div className="space-y-2.5 pt-1">
              <label className="text-sm font-bold text-slate-900">
                3. Optional Deep Add-ons (Specialized Care)
              </label>
              <div className="space-y-2">
                {addOnOptions.map((addon) => {
                  const isChecked = selectedAddOns.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddOn(addon.id)}
                      className={`flex items-center justify-between p-3 rounded-xl border transition-all cursor-pointer ${
                        isChecked
                          ? 'bg-teal-50/80 border-teal-300 text-slate-900'
                          : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors ${
                            isChecked
                              ? 'bg-teal-700 border-teal-700 text-white'
                              : 'border-slate-300 bg-white'
                          }`}
                        >
                          {isChecked && <Check className="w-3.5 h-3.5" />}
                        </div>
                        <div>
                          <p className="text-xs sm:text-sm font-bold">{addon.label}</p>
                          <p className="text-[11px] text-slate-500">{addon.hint}</p>
                        </div>
                      </div>
                      <span className="text-xs sm:text-sm font-extrabold text-teal-800 tabular-nums">
                        +${addon.price}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Live Quote Summary Column */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-slate-950 text-white rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl sticky top-24">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-teal-400" />
                <span className="text-sm font-bold text-slate-200">Quote Estimate</span>
              </div>
              <span className="text-xs font-semibold text-teal-400">Morley & Perth WA</span>
            </div>

            {/* Big Price Display */}
            <div className="space-y-1">
              <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Estimated Total (AUD)
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-extrabold tracking-tight text-white font-display tabular-nums">
                  ${calculatedQuote.totalPrice}
                </span>
                <span className="text-xs text-slate-400">
                  {frequency !== 'one-off' ? `/ visit (${calculatedQuote.frequencyDiscount}% off)` : 'one-off visit'}
                </span>
              </div>
              <p className="text-xs text-teal-300 flex items-center gap-1.5 pt-1">
                <Sparkles className="w-3.5 h-3.5 text-teal-400" />
                Includes all eco-friendly supplies & high-grade equipment
              </p>
            </div>

            {/* Breakdown Specification */}
            <div className="space-y-2.5 text-xs border-y border-slate-800/80 py-4 text-slate-300">
              <div className="flex justify-between">
                <span className="text-slate-400">Selected Service</span>
                <span className="font-semibold text-white">{calculatedQuote.serviceTitle}</span>
              </div>
              {serviceType !== 'car' && (
                <div className="flex justify-between">
                  <span className="text-slate-400">Configuration</span>
                  <span className="font-semibold text-white">{bedrooms} Bed · {bathrooms} Bath</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-slate-400">Estimated Duration</span>
                <span className="font-semibold text-teal-300">{calculatedQuote.estimatedHours}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Quality Guarantee</span>
                <span className="font-semibold text-emerald-400">100% Satisfaction or free re-clean</span>
              </div>
              {selectedAddOns.length > 0 && (
                <div className="flex justify-between pt-1 border-t border-slate-800/60">
                  <span className="text-slate-400">Add-ons included</span>
                  <span className="font-semibold text-white">{selectedAddOns.length} selected</span>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5 pt-1">
              <button
                onClick={() => onSelectQuote(calculatedQuote)}
                className="w-full py-3.5 px-4 bg-teal-500 hover:bg-teal-400 text-slate-950 font-extrabold text-sm rounded-xl shadow-lg shadow-teal-500/20 flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
              >
                <span>Book With This Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={whatsappMessage}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-slate-800 hover:bg-slate-700 text-teal-300 hover:text-white font-semibold text-xs rounded-xl border border-slate-700 flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Send via WhatsApp for Instant Slot</span>
              </a>

              <a
                href={BUSINESS_INFO.phoneHref}
                className="text-center block text-xs text-slate-400 hover:text-teal-300 transition-colors pt-1"
              >
                Or call direct: <span className="font-bold text-white">{BUSINESS_INFO.phoneDisplay}</span>
              </a>
            </div>

            <div className="flex items-center gap-2 text-[11px] text-slate-500 bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
              <Info className="w-4 h-4 text-teal-400 shrink-0" />
              <span>Free quote confirmation. Final price confirmed on arrival based on property inspection.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
