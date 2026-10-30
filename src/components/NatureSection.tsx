"use client";

import React from "react";
import Image from "next/image";
import { Trees, Sun, Bird, Waves, Wind, Compass, Sparkles } from "lucide-react";

export default function NatureSection() {
  const natureHighlights = [
    {
      title: "Sharavati River Backwaters",
      subtitle: "Glassy Waters & Coconut Shores",
      description:
        "Formed as the magnificent Sharavati river meets the Arabian Sea estuary, creating hundreds of serene waterways, isolated islets, and mirrored reflections that calm the mind.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80",
      icon: Waves,
    },
    {
      title: "Dense Mangrove Forests",
      subtitle: "Nature's Coastal Guardians",
      description:
        "Honnavara features some of Karnataka's healthiest mangrove ecosystems. The breathing roots (pneumatophores) filter tidal waters and shelter thousands of juvenile fish and crabs.",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=80",
      icon: Trees,
    },
    {
      title: "Coastal Bird Sanctuary",
      subtitle: "Brahminy Kites & Kingfishers",
      description:
        "Wake up to the sharp call of the White-throated Kingfisher and watch Brahminy Kites soar above the tree line. Cormorants, river terns, and egrets feed along the banks all morning.",
      image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=1000&q=80",
      icon: Bird,
    },
    {
      title: "Golden Hour Backwater Sunsets",
      subtitle: "Amber Horizons Over Mavinkurva",
      description:
        "Every evening paints a unique canvas across the water. As dusk descends, local fishermen paddle home and the coconut silhouettes turn pitch black against vivid orange skies.",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
      icon: Sun,
    },
  ];

  return (
    <section id="nature" className="py-24 lg:py-32 bg-[#FCFAF6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/10 text-emerald-900 text-xs font-bold tracking-widest uppercase mb-4 border border-emerald-900/15">
            <Trees className="w-3.5 h-3.5 text-emerald-700" />
            <span>Untouched Coastal Ecology</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#182e24] mb-4">
            Nature All Around You.
          </h2>

          <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-light">
            Honnavar remains one of the quietest coastal towns of Karnataka. Here, nature is not a backdrop—it is your daily companion from sunrise to starlight.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {natureHighlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <div className="absolute top-3 left-3 bg-[#182e24]/85 text-amber-300 p-2 rounded-xl backdrop-blur-sm border border-white/10">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="p-5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 block mb-1">
                      {item.subtitle}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-[#182e24] mb-2 group-hover:text-emerald-800 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-0">
                  <div className="h-1 w-8 bg-amber-400 rounded-full group-hover:w-full transition-all duration-300" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
