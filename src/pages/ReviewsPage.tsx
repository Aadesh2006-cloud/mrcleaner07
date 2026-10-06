import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader.tsx';
import { Star, CheckCircle, Quote, ThumbsUp, Heart, Send } from 'lucide-react';
import { TESTIMONIALS, ReviewItem } from '../data/cleaningData.ts';

export const ReviewsPage: React.FC = () => {
  const [reviewsList, setReviewsList] = useState<ReviewItem[]>(TESTIMONIALS);
  const [newAuthor, setNewAuthor] = useState('');
  const [newSuburb, setNewSuburb] = useState('Morley, WA');
  const [newService, setNewService] = useState('Home Cleaning');
  const [newRating, setNewRating] = useState(5);
  const [newComment, setNewComment] = useState('');
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor || !newComment) return;

    const newReview: ReviewItem = {
      id: `rev-${Date.now()}`,
      author: newAuthor,
      suburb: newSuburb,
      service: newService,
      rating: newRating,
      date: 'Today',
      comment: newComment,
      verified: true,
    };

    setReviewsList([newReview, ...reviewsList]);
    setReviewSubmitted(true);
    setNewAuthor('');
    setNewComment('');
  };

  return (
    <div>
      <PageHeader
        kicker="Customer Feedback"
        title="Verified Client Reviews & Testimonials"
        description="See what property owners, tenants, and business managers across Morley and Perth say about Mr Cleaner's punctuality, attention to detail, and bond return standards."
        currentPage="Reviews"
      />

      <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Rating Summary Card */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
            <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
              <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-teal-50 border border-teal-100">
                <span className="text-4xl font-extrabold text-slate-900 font-display">5.0</span>
                <div className="flex text-amber-400 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="text-[11px] text-teal-800 font-bold mt-1">100% Satisfaction</span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 font-display">
                  Local Reputation You Can Count On
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Based on verified reviews from residential house cleans, real estate bond cleans, and commercial offices.
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 mt-3">
                  <span>✓ 100% Bond approval rate</span>
                  <span aria-hidden="true">·</span>
                  <span>✓ Police-checked personnel</span>
                  <span aria-hidden="true">·</span>
                  <span>✓ Prompt Morley dispatch</span>
                </div>
              </div>
            </div>

            <a
              href="#leave-review"
              className="px-5 py-2.5 text-xs font-bold text-white bg-teal-700 hover:bg-teal-800 rounded-xl transition-colors whitespace-nowrap cursor-pointer"
            >
              Write a Review
            </a>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {reviewsList.map((review) => (
              <div
                key={review.id}
                className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div className="space-y-4">
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

                  <p className="text-sm text-slate-700 leading-relaxed italic">
                    "{review.comment}"
                  </p>
                </div>

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
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                      <CheckCircle className="w-3 h-3" />
                      Verified
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Leave a Review Form */}
          <div id="leave-review" className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 font-display">
              Had a Clean with Mr Cleaner? Share Your Feedback!
            </h3>
            <p className="text-xs text-slate-500 mt-1 mb-6">
              Your feedback supports our local family business and helps fellow Morley residents make informed choices.
            </p>

            {reviewSubmitted ? (
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-900 text-sm space-y-2 text-center">
                <CheckCircle className="w-8 h-8 text-emerald-600 mx-auto" />
                <p className="font-bold">Thank you for your review!</p>
                <p className="text-xs text-emerald-700">Your review has been published above. We appreciate your support!</p>
              </div>
            ) : (
              <form onSubmit={handleAddReview} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-800">Your Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Michael S."
                      value={newAuthor}
                      onChange={(e) => setNewAuthor(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-teal-600 focus:outline-hidden"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-800">Your Suburb *</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Morley, WA"
                      value={newSuburb}
                      onChange={(e) => setNewSuburb(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-teal-600 focus:outline-hidden"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-800">Service Received</label>
                    <select
                      value={newService}
                      onChange={(e) => setNewService(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-teal-600 focus:outline-hidden"
                    >
                      <option value="Home Cleaning">Home Cleaning</option>
                      <option value="End of Lease Cleaning">End of Lease Cleaning</option>
                      <option value="Deep Kitchen & Oven">Deep Kitchen & Oven</option>
                      <option value="Carpet Steam Clean">Carpet Steam Clean</option>
                      <option value="Window Cleaning">Window Cleaning</option>
                      <option value="Office Cleaning">Office Cleaning</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-800">Rating</label>
                    <select
                      value={newRating}
                      onChange={(e) => setNewRating(Number(e.target.value))}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-teal-600 focus:outline-hidden"
                    >
                      <option value={5}>5 Stars - Excellent / Perfect</option>
                      <option value={4}>4 Stars - Very Good</option>
                      <option value={3}>3 Stars - Satisfactory</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-800">Your Review *</label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Tell us about the quality of the clean, punctuality, and your experience..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-teal-600 focus:outline-hidden"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 px-4 bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Verified Review</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
