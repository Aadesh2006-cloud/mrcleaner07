import React from 'react';
import { Star, CheckCircle, Quote, ThumbsUp } from 'lucide-react';
import { TESTIMONIALS } from '../data/cleaningData.ts';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-teal-800 uppercase tracking-wider">
            <span>Customer Testimonials</span>
            <span aria-hidden="true">·</span>
            <span>Local Perth Feedback</span>
            <span aria-hidden="true">·</span>
            <span>100% Satisfaction</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Loved by Homes & Offices Across Morley
          </h2>

          <p className="text-base text-slate-600">
            Read what our neighbors in Morley, Bayswater, Dianella and Noranda have to say about our cleaning standard.
          </p>

          {/* Social Proof Metric Lockup */}
          <div className="flex items-center justify-center gap-4 pt-2">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <span className="text-xs font-bold text-slate-700">
              5.0 Star Local Reputation · 100% Verified Reviews
            </span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:shadow-md transition-shadow relative"
            >
              <div className="space-y-4">
                {/* Header of review card */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-medium text-slate-500">
                    {review.date}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-sm text-slate-700 leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Author & Service meta */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    {review.author}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {review.suburb} · <span className="text-teal-700 font-medium">{review.service}</span>
                  </p>
                </div>

                {review.verified && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                    <CheckCircle className="w-3 h-3" />
                    Verified Customer
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
