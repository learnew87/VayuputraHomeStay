"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MapPin, Navigation, Train, Plane, Car, ExternalLink, Compass, Clock, ArrowRight } from "lucide-react";
import { ATTRACTIONS, TRAVEL_DIRECTIONS, PROPERTY_DETAILS } from "@/data/propertyData";

export default function LocationSection() {
  const [activeAttraction, setActiveAttraction] = useState(ATTRACTIONS[0]);

  return (
    <section id="location" className="py-24 lg:py-32 bg-[#FCFAF6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/10 text-emerald-900 text-xs font-bold tracking-widest uppercase mb-4 border border-emerald-900/15">
            <MapPin className="w-3.5 h-3.5 text-emerald-700" />
            <span>Honnavar • Coastal Karnataka</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#182e24] mb-4">
            How to Reach Us & Explore Around.
          </h2>

          <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-light">
            Nestled peacefully on the banks of the Sharavati river at Mavinkurva island and Taribagilu, our homestay provides undisturbed backwater seclusion while being just 10–15 minutes from Honnavar town and key coastal sights.
          </p>
        </div>

        {/* Address Card and Map Embed Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-stretch">
          
          {/* Address Details & Quick Info */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xl flex flex-col justify-between">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-[#182e24] text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
                Homestay & Boat Jetty Location
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#182e24] mb-3">
                Vayuputra Boating & Island Homestays
              </h3>

              <div className="space-y-3 mb-6 text-sm text-stone-700">
                <p className="flex items-start gap-2.5">
                  <MapPin className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <span>{PROPERTY_DETAILS.contact.address}</span>
                </p>
                <p className="flex items-center gap-2.5">
                  <Train className="w-5 h-5 text-emerald-700 shrink-0" />
                  <span>Honnavar Railway Station (Konkan Railway): 5.5 km (12 mins)</span>
                </p>
                <p className="flex items-center gap-2.5">
                  <Navigation className="w-5 h-5 text-emerald-700 shrink-0" />
                  <span>Kasarkod Blue Flag Beach: 4.5 km (10 mins)</span>
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 space-y-1 mb-6">
                <strong className="block text-emerald-900 font-bold">Pick-up & Transfer Assistance</strong>
                Auto-rickshaws or private cab transfers from Honnavar railway station or bus depot can be arranged with our trusted local drivers. Just inform host Ganesh Gouda.
              </div>
            </div>

            <a
              href={PROPERTY_DETAILS.contact.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-[#182e24] hover:bg-[#254638] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all duration-200"
            >
              <ExternalLink className="w-4 h-4 text-amber-300" />
              <span>Open in Google Maps</span>
            </a>
          </div>

          {/* Interactive Map Visual */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-stone-200 shadow-xl relative min-h-[380px] bg-stone-100">
            <iframe
              title="Honnavar Sharavathi River Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.3262828628037!2d74.44186597510705!3d14.281232886285817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbc18671ce94dc9%3A0x6d90a7873b4dca8!2sHonnavar%2C%20Karnataka%20581334!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="w-full h-full min-h-[380px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>

        {/* Nearby Attractions Showcase */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase font-bold tracking-widest text-emerald-800 block mb-2">
              Day Trips from Vayuputra
            </span>
            <h3 className="font-serif text-3xl font-bold text-[#182e24]">
              Iconic Places Within 20 Minutes
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ATTRACTIONS.map((attraction) => (
              <div
                key={attraction.id}
                className="group bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={attraction.image}
                      alt={attraction.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute top-3 left-3 bg-[#182e24]/85 text-amber-200 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm">
                      {attraction.type}
                    </div>
                    <div className="absolute bottom-3 right-3 bg-black/60 text-white text-[11px] font-semibold px-2.5 py-1 rounded-full backdrop-blur-md">
                      {attraction.distance} ({attraction.driveTime})
                    </div>
                  </div>

                  <div className="p-5">
                    <h4 className="font-serif text-lg font-bold text-[#182e24] mb-2 group-hover:text-emerald-800 transition-colors">
                      {attraction.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {attraction.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
