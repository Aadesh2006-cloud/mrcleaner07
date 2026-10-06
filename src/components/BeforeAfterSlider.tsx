import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, ArrowLeftRight, CheckCircle2, ShieldAlert } from 'lucide-react';
import { BEFORE_AFTER_ITEMS, BeforeAfterItem } from '../data/cleaningData.ts';

export const BeforeAfterSlider: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('stovetop');
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage 0 - 100
  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef<boolean>(false);

  const activeItem: BeforeAfterItem = BEFORE_AFTER_ITEMS.find((item) => item.id === selectedId) || BEFORE_AFTER_ITEMS[0];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.min(Math.max((x / rect.width) * 100, 5), 95);
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = () => {
    isDraggingRef.current = true;
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDraggingRef.current) {
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <section id="transformations" className="py-16 lg:py-24 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Zero pill discipline */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-teal-400 uppercase tracking-wider">
            <span>Real Local Results</span>
            <span aria-hidden="true">·</span>
            <span>Morley & Perth Homes</span>
            <span aria-hidden="true">·</span>
            <span>100% Satisfaction</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Proof in Every Detail: Before & After
          </h2>

          <p className="text-base text-slate-300">
            Slide horizontally to reveal the real transformation. We tackle deep grease, burnt grime, and mineral buildup that standard wiping can't touch.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {BEFORE_AFTER_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setSelectedId(item.id);
                setSliderPosition(50);
              }}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                selectedId === item.id
                  ? 'bg-teal-500 text-slate-950 font-bold shadow-md shadow-teal-500/20'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Interactive Comparison Arena */}
        <div className="max-w-4xl mx-auto bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
          {/* Top Title Bar */}
          <div className="px-6 py-4 bg-slate-900/90 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs font-semibold text-teal-400 uppercase tracking-wider">
                {activeItem.category}
              </span>
              <h3 className="text-lg font-bold text-white font-display">
                {activeItem.title}
              </h3>
            </div>
            <div className="flex items-center gap-3 text-xs text-slate-400">
              <span className="flex items-center gap-1">
                <ArrowLeftRight className="w-3.5 h-3.5 text-teal-400" />
                Drag slider to compare
              </span>
            </div>
          </div>

          {/* Visual Canvas Area with Draggable Divider */}
          <div
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative w-full h-[360px] sm:h-[460px] select-none cursor-ew-resize overflow-hidden bg-slate-950"
          >
            {/* AFTER Layer (Background / Full Width) */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-slate-900 via-teal-950/40 to-slate-800 flex flex-col justify-between p-6 sm:p-8">
              {/* Pattern simulating sparkling clean stainless/surface */}
              <div className="absolute inset-0 bg-[radial-gradient(#0d9488_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
              
              {/* After Content Simulation Graphic */}
              <div className="relative z-10 flex flex-col items-end text-right max-w-xs ml-auto">
                <div className="bg-emerald-950/90 border border-emerald-500/40 text-emerald-200 px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-lg">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>AFTER: {activeItem.afterLabel}</span>
                </div>
                <p className="text-xs text-slate-300 mt-2 bg-slate-900/80 p-2.5 rounded-lg border border-slate-800/80">
                  {activeItem.afterDesc}
                </p>
              </div>

              {/* Sparkling clean visual effect banner */}
              <div className="relative z-10 flex items-center gap-2 text-xs font-semibold text-teal-300 bg-slate-900/80 py-1.5 px-3 rounded-lg w-fit border border-teal-500/30">
                <Sparkles className="w-4 h-4 text-teal-400 animate-pulse" />
                <span>Restored by Mr Cleaner Team</span>
              </div>
            </div>

            {/* BEFORE Layer (Clipped Overlay) */}
            <div
              className="absolute inset-0 h-full overflow-hidden bg-gradient-to-tr from-stone-950 via-amber-950/70 to-stone-900 flex flex-col justify-between p-6 sm:p-8 border-r-2 border-white"
              style={{ width: `${sliderPosition}%` }}
            >
              {/* Grimy texture simulation */}
              <div className="absolute inset-0 bg-[radial-gradient(#b45309_1.5px,transparent_1.5px)] [background-size:12px_12px] opacity-30" />

              {/* Before Content Tag */}
              <div className="relative z-10 max-w-xs">
                <div className="bg-amber-950/90 border border-amber-600/40 text-amber-200 px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-lg w-fit">
                  <ShieldAlert className="w-4 h-4 text-amber-400" />
                  <span>BEFORE: {activeItem.beforeLabel}</span>
                </div>
                <p className="text-xs text-stone-300 mt-2 bg-stone-950/85 p-2.5 rounded-lg border border-stone-800 w-fit">
                  {activeItem.beforeDesc}
                </p>
              </div>

              <div className="relative z-10 text-xs text-stone-400 bg-stone-950/80 py-1.5 px-3 rounded-lg w-fit">
                <span>Original State Upon Arrival</span>
              </div>
            </div>

            {/* Draggable Divider Handle */}
            <div
              className="absolute top-0 bottom-0 z-30 pointer-events-none flex flex-col items-center justify-center"
              style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            >
              <div className="w-0.5 h-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.7)]" />
              <div className="w-10 h-10 rounded-full bg-white text-slate-900 shadow-xl flex items-center justify-center border-2 border-teal-500 pointer-events-auto cursor-ew-resize hover:scale-110 active:scale-95 transition-transform">
                <ArrowLeftRight className="w-4 h-4 text-teal-800" />
              </div>
            </div>
          </div>

          {/* Quick Slider Adjustment Buttons */}
          <div className="px-6 py-4 bg-slate-900 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <p className="text-slate-300">
              <span className="font-bold text-white">Technique:</span> {activeItem.details}
            </p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setSliderPosition(15)}
                className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 rounded text-slate-300 cursor-pointer"
              >
                Show After
              </button>
              <button
                type="button"
                onClick={() => setSliderPosition(50)}
                className="px-2.5 py-1 bg-teal-800 text-teal-100 rounded font-semibold cursor-pointer"
              >
                50 / 50 Split
              </button>
              <button
                type="button"
                onClick={() => setSliderPosition(85)}
                className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 rounded text-slate-300 cursor-pointer"
              >
                Show Before
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
