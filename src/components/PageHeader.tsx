import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Sparkles } from 'lucide-react';

interface PageHeaderProps {
  kicker: string;
  title: string;
  description: string;
  currentPage: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  kicker,
  title,
  description,
  currentPage,
}) => {
  return (
    <div className="bg-gradient-to-b from-teal-900 via-slate-900 to-slate-950 text-white pt-10 pb-14 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        {/* Breadcrumb - Clean unboxed text */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400">
          <Link to="/" className="hover:text-teal-300 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-teal-400 font-medium">{currentPage}</span>
        </nav>

        {/* Kicker */}
        <div className="flex items-center gap-2 text-xs font-semibold text-teal-400 uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{kicker}</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display text-balance">
          {title}
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};
