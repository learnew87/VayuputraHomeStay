"use client";

import React from "react";
import { Star, MessageSquare, Heart, Quote, CheckCircle2 } from "lucide-react";
import { REVIEWS, PROPERTY_DETAILS } from "@/data/propertyData";

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-24 lg:py-32 bg-[#F6F3EB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/10 text-emerald-900 text-xs font-bold tracking-widest uppercase mb-4 border border-emerald-900/15">
            <MessageSquare className="w-3.5 h-3.5 text-emerald-700" />
            <span>Honest Guest Impressions</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#182e24] mb-4">
            Memories Shared by Our Wonderful Guests.
          </h2>

          <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-light">
            The joy of hearing travelers say they felt at home, slowed down, and fell in love with Honnavar&apos;s quiet waters and genuine hospitality.
          </p>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-stone-200 pointer-events-none" />

              <div>
                {/* Star rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-[#182e24] ml-2">
                    5.0 • Verified Guest
                  </span>
                </div>

                {/* Highlight banner */}
                <div className="inline-block px-3 py-1 rounded-md bg-emerald-50 text-emerald-900 text-xs font-bold mb-4 border border-emerald-200">
                  {rev.highlight}
                </div>

                {/* Quote */}
                <p className="text-sm sm:text-base text-stone-700 italic leading-relaxed mb-6 font-light">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              {/* Guest Profile Details */}
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-[#182e24] text-sm">
                    {rev.guestName}
                  </h4>
                  <p className="text-xs text-stone-500">
                    {rev.location} • {rev.travelType}
                  </p>
                </div>
                <span className="text-xs text-stone-400">
                  {rev.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Direct Host Review Note */}
        <div className="text-center text-xs text-stone-500">
          ⭐ 100% genuine feedback from guests visiting Vayuputra Boating & Homestays on Mavinkurva island.
        </div>

      </div>
    </section>
  );
}
