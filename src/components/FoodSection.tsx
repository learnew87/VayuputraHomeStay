"use client";

import React from "react";
import Image from "next/image";
import { Utensils, Heart, Sparkles, Coffee, Fish, Flame, Sun, CheckCircle } from "lucide-react";
import { FOOD_HIGHLIGHTS, PROPERTY_DETAILS } from "@/data/propertyData";

export default function FoodSection() {
  return (
    <section id="food" className="py-24 lg:py-32 bg-[#F6F3EB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/10 text-emerald-900 text-xs font-bold tracking-widest uppercase mb-4 border border-emerald-900/15">
            <Utensils className="w-3.5 h-3.5 text-emerald-700" />
            <span>Pure Karavali Flavors</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#182e24] mb-4">
            Authentic Karavali Home Cooking from Our Family Kitchen.
          </h2>

          <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-light">
            No frozen buffet platters or commercial restaurant menus. Enjoy simple, delicious coastal Karnataka home cooking prepared with freshly harvested coconuts, local spices, garden herbs, and fresh seafood sourced right from Honnavar harbor.
          </p>

          <div className="mt-4 inline-block text-xs text-amber-900 font-semibold bg-amber-100/80 px-4 py-1.5 rounded-full border border-amber-300">
            🌿 Traditional wood-fired cooking & freshly ground coastal masalas
          </div>
        </div>

        {/* 4 Food Highlight Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {FOOD_HIGHLIGHTS.map((item, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute top-3 left-3 bg-[#182e24]/85 text-amber-200 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">
                    {item.type}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#182e24] mb-2 group-hover:text-emerald-800 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-3 text-[11px] text-emerald-800 font-semibold flex items-center gap-1.5 border-t border-stone-100">
                <Heart className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600" />
                <span>Cooked fresh in family kitchen</span>
              </div>
            </div>
          ))}
        </div>

        {/* Dining Story Banner with Warm Earthen Tones */}
        <div className="bg-[#182e24] rounded-3xl p-8 sm:p-12 text-white shadow-2xl border-2 border-emerald-600/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold text-amber-300 uppercase tracking-widest block">
                Open Veranda Dining by the Backwaters
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                How Meals Work at Vayuputra Island Homestay
              </h3>
              <p className="text-sm text-stone-300 leading-relaxed font-light">
                Because we are an authentic family homestay and not a commercial restaurant, meals are freshly planned every morning based on our guests&apos; preferences and what is freshly available in Honnavar markets. Breakfast is included with your stay; lunch and dinner can be customized with our hosts.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs text-stone-200">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Vegetarian, Jain, and Coastal Seafood options</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-stone-200">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>No frozen ingredients — prepared from scratch</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-stone-200">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Fresh coconut water cut straight from garden palms</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-stone-200">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Filtered RO drinking water always available</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/15 text-center sm:text-left">
              <span className="text-[11px] uppercase font-bold text-amber-300 tracking-wider block mb-1">
                Special Dining Request?
              </span>
              <p className="text-xs text-stone-300 leading-relaxed mb-4">
                Let Ganesh Gouda know your dietary preferences or meal timings when booking your stay.
              </p>
              <a
                href="#booking"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-lg"
              >
                <span>Reserve Stay with Food</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
