"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Heart,
  Sun,
  Waves,
  Coffee,
  CheckCircle2,
  Sparkles,
  MapPin,
  Compass,
  Trees,
  ShieldCheck,
  Phone,
  MessageCircle,
} from "lucide-react";
import { PROPERTY_DETAILS, HOMESTAY_VS_RESORT } from "@/data/propertyData";

export default function WelcomeSection() {
  const [activeTab, setActiveTab] = useState<"homestay" | "resort">("homestay");

  return (
    <section id="welcome" className="py-24 lg:py-32 bg-[#FCFAF6] relative overflow-hidden">
      {/* Decorative organic blurs */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-[500px] h-[500px] rounded-full bg-emerald-100/50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-[500px] h-[500px] rounded-full bg-amber-100/50 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Story Section: Images + Personal Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          
          {/* Visual Showcase (Left) */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Primary Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/4.5] group">
                <Image
                  src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
                  alt="Vayuputra rustic island homestay surrounded by backwaters and palms on Mavinkurva"
                  fill
                  className="object-cover group-hover:scale-103 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-5 left-5 right-5 text-white bg-black/50 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                  <div className="flex items-center gap-1.5 text-amber-300 font-bold text-sm mb-1">
                    <MapPin className="w-4 h-4 text-emerald-400" />
                    <span>Mavinkurva Main Island & Taribagilu</span>
                  </div>
                  <p className="text-xs text-stone-200 leading-relaxed">
                    &ldquo;Sharavati backwater is an untouched nature reservoir: feel and breath the natural beauty.&rdquo;
                  </p>
                </div>
              </div>

              {/* Overlapping Secondary Image */}
              <div className="absolute -bottom-10 -right-6 sm:-right-8 w-56 sm:w-64 aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white hidden sm:block">
                <Image
                  src="https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=800&q=80"
                  alt="Riverside sit-out veranda at Vayuputra homestay"
                  fill
                  className="object-cover"
                  sizes="300px"
                />
              </div>

              {/* Native Host Profile Badge */}
              <div className="absolute -top-6 -left-4 sm:-left-6 bg-[#182e24] text-white p-5 rounded-2xl shadow-2xl border border-emerald-600/40 max-w-[260px]">
                <div className="flex items-center gap-2 mb-1.5">
                  <Heart className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-200">Native Island Host</span>
                </div>
                <p className="text-xs text-stone-200 italic leading-snug">
                  &ldquo;Namaskara! We welcome your family to our island home and backwaters.&rdquo;
                </p>
                <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between text-[11px]">
                  <span className="text-emerald-300 font-bold">Ganesh Gouda</span>
                  <span className="text-stone-400">9739790357</span>
                </div>
              </div>

            </div>
          </div>

          {/* Text Content (Right) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/10 text-emerald-900 text-xs font-bold tracking-widest uppercase border border-emerald-900/15">
              <Sun className="w-3.5 h-3.5 text-amber-600" />
              <span>Welcome to Vayuputra</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#182e24] leading-[1.16]">
              Authentic Island Homestays & Backwater Boating in Honnavar.
            </h2>

            <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-light">
              We operate at Honnavar - Mavinkurva backwater riverside, offering private boats and genuine homestays at Mavinkurva main island and peaceful small islands. Whether you want to drift through mangrove forests, view lotus clusters, visit a group of islands, or simply relax under palm trees away from city chaos, our family warmly welcomes you.
            </p>

            {/* Direct quote from Vayuputra Google Site */}
            <div className="p-5 rounded-2xl bg-amber-50/80 border-2 border-amber-200/80 text-sm text-stone-800 space-y-2">
              <div className="flex items-center gap-2 text-stone-900 font-bold">
                <Compass className="w-4 h-4 text-emerald-700" />
                <span>Our Island & River Offerings</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic">
                &ldquo;We are a private tour operator, we provide boat service, home stay and extra activities with attractive packages. We serve visits to groups of islands, the long bay of Sharavati river, watching sunrise and sunset from perfect locations and water-based activities.&rdquo;
              </p>
            </div>

            {/* Feature Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span>Private boat rides with no queues or crowded counters</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span>Island hopping to Mavinkurva & secluded delta islands</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span>Stone-ground Karavali home cooking prepared fresh daily</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span>Boating service operates 6:00 AM – 6:00 PM (ends strictly by 6 PM)</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. THE HOMESTAY VS. RESORT COMPARISON MODULE */}
        <div className="rounded-3xl bg-gradient-to-br from-[#182e24] via-[#12241c] to-[#0e1d16] p-8 sm:p-12 text-white shadow-2xl border-2 border-emerald-600/30">
          
          <div className="max-w-3xl mb-10 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400 text-stone-950 text-xs font-bold uppercase tracking-wider mb-4 shadow-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Honest Expectations & Pure Authenticity</span>
            </div>
            
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-3">
              This is a Village Homestay — Not a Commercial Resort
            </h3>

            <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-light">
              We want every guest to arrive with joyful, clear expectations. At Vayuputra, you won&apos;t find bellhops, marble lobbies, or artificial nightclub music. Instead, you step into pure, unpretentious backwater beauty, heartfelt coastal hospitality, and genuine serenity.
            </p>
          </div>

          {/* Interactive Comparison Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {HOMESTAY_VS_RESORT.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-5 border border-white/10 hover:border-amber-400/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] uppercase font-bold tracking-widest text-amber-300 block mb-3 pb-2 border-b border-white/10">
                    {item.feature}
                  </span>

                  <div className="space-y-3">
                    {/* Homestay Point */}
                    <div className="p-3.5 rounded-xl bg-emerald-950/70 border border-emerald-500/30 text-stone-200">
                      <div className="flex items-center gap-1.5 text-emerald-300 font-bold text-xs mb-1">
                        <Trees className="w-3.5 h-3.5" />
                        <span>🌿 At Vayuputra Homestay</span>
                      </div>
                      <p className="text-xs text-stone-300 leading-relaxed">
                        {item.homestay}
                      </p>
                    </div>

                    {/* Resort Point */}
                    <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-stone-400 text-xs">
                      <span className="block font-medium text-stone-400 mb-0.5">
                        🏨 Commercial Resorts
                      </span>
                      <p className="leading-relaxed">
                        {item.resort}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Direct host inquiry CTA strip inside the banner */}
          <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-stone-300 text-xs sm:text-sm">
              <Phone className="w-4 h-4 text-amber-300 shrink-0" />
              <span>Directly speak with host Ganesh Gouda before booking: <strong>9739790357</strong></span>
            </div>

            <a
              href="#booking"
              className="px-6 py-3 rounded-full bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-lg"
            >
              Plan Your Homestay & Boating
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
