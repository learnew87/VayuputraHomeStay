"use client";

import React, { useState, useEffect } from "react";
import {
  Anchor,
  Trees,
  Compass,
  MapPin,
  Clock,
  MessageCircle,
  Sparkles,
  ChevronRight,
  Sun,
  Waves,
  ShieldCheck,
  Calendar,
} from "lucide-react";
import { PROPERTY_DETAILS } from "@/data/propertyData";

const HERO_SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=2200&q=85",
    tag: "Sharavati Backwaters",
    title: "Untouched Mangrove Canals & Delta Islands",
    sub: "Private motorboat safari departing directly from our island shore with local boatman Ganesh Gouda",
  },
  {
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2200&q=85",
    tag: "Golden Hour Wonder",
    title: "Sunset Across the Sharavati Long Bay",
    sub: "Watch fiery amber horizons melt into still waters without noisy commercial tourist crowds",
  },
  {
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2200&q=85",
    tag: "Mavinkurva Island Homestay",
    title: "A Quiet Village Home Under Coconut Palms",
    sub: "Authentic Karavali home cooking, fresh river breezes, and the peace of genuine island living",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent(
      `Namaskara Ganesh Gouda! I want to inquire about Vayuputra Island Homestay & Boating packages in Honnavar.`
    );
    window.open(
      `https://wa.me/${PROPERTY_DETAILS.contact.whatsapp.replace(/\D/g, "")}?text=${text}`,
      "_blank"
    );
  };

  return (
    <section
      id="hero"
      className="relative min-h-[96vh] flex items-center justify-center overflow-hidden pt-28 pb-16"
    >
      {/* Background Slides with crossfade transition */}
      {HERO_SLIDES.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out transform ${
            index === currentSlide
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105 pointer-events-none"
          }`}
          style={{ backgroundImage: `url('${slide.image}')` }}
        >
          {/* Layered cinematic vignette and dark emerald tint */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e1d15] via-[#14281f]/75 to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
          <div className="absolute inset-0 bg-radial from-transparent via-[#0e1d15]/30 to-[#0e1d15]/90" />
        </div>
      ))}

      {/* Floating Ambient Shimmer */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-emerald-500/10 to-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-8 sm:py-12">
        
        {/* Top Badges & Service Hours */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold tracking-wider uppercase text-[#EDE7D9] shadow-lg">
            <MapPin className="w-3.5 h-3.5 text-amber-300" />
            <span>Taribagilu & Mavinkurva Island • Honnavar</span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/70 backdrop-blur-md border border-emerald-500/30 text-xs font-medium text-emerald-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Boating Service: 6:00 AM – 6:00 PM (Ends by 6 PM)</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-400/20 backdrop-blur-md border border-amber-300/40 text-xs font-semibold text-amber-200">
            <Anchor className="w-3.5 h-3.5 text-amber-300" />
            <span>Boat: 1 hr ₹1,500 | 2 hr ₹2,500 • Room: ₹1,500/day</span>
          </div>
        </div>

        {/* Main Brand Title & Tagline */}
        <div className="mb-6">
          <span className="font-serif italic text-xl sm:text-2xl md:text-3xl text-amber-200/90 font-light tracking-wide block mb-3">
            ವಾಯುಪುತ್ರ • Vayuputra Boating & Homestays
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.12] max-w-5xl mx-auto drop-shadow-md">
            Feel and Breathe the Untouched Natural Reservoir of Sharavati.
          </h1>
        </div>

        {/* Genuine Homestay Notice Banner (Editorial Framing) */}
        <div className="inline-flex flex-col sm:flex-row items-center gap-2 max-w-3xl mx-auto mb-8 px-5 py-3 rounded-2xl bg-black/45 backdrop-blur-md border border-amber-400/30 text-xs sm:text-sm text-stone-200 leading-relaxed shadow-xl">
          <div className="flex items-center gap-1.5 text-amber-300 font-bold uppercase tracking-wider shrink-0">
            <Trees className="w-4 h-4 text-emerald-400" />
            <span>Authentic Homestay Notice:</span>
          </div>
          <span>
            We are a genuine island family home and private boat service, <strong>not a commercial luxury resort</strong>. Come for peaceful backwaters, private boat rides, and home-cooked Karavali food.
          </span>
        </div>

        {/* Primary Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12">
          <a
            href="#boating"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-sm sm:text-base shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-amber-400/25"
          >
            <Anchor className="w-5 h-5 text-stone-950" />
            <span>Explore Boating Packages</span>
          </a>

          <a
            href="#accommodation"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base border border-white/30 backdrop-blur-md shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <Trees className="w-5 h-5 text-emerald-300" />
            <span>View Homestay Rooms</span>
          </a>

          <button
            onClick={handleWhatsAppClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm sm:text-base shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-emerald-500/30"
          >
            <MessageCircle className="w-5 h-5 fill-white text-white" />
            <span>WhatsApp Ganesh (9739790357)</span>
          </button>
        </div>

        {/* Slide Indicators & Quick Caption */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {HERO_SLIDES.map((slide, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-500 ${
                currentSlide === idx ? "w-8 bg-amber-400" : "w-2 bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Highlight feature tiles with glassmorphic cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto pt-6 border-t border-white/15 text-left">
          
          <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-amber-400/40 transition-all duration-300 group">
            <div className="flex items-center gap-2 text-amber-300 mb-1">
              <Anchor className="w-4 h-4 text-emerald-400 group-hover:rotate-12 transition-transform" />
              <span className="text-xs uppercase font-bold tracking-wider">Private Jetty</span>
            </div>
            <p className="text-xs text-stone-300 font-light">Zero queues. Step straight from homestay into private boat.</p>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-amber-400/40 transition-all duration-300 group">
            <div className="flex items-center gap-2 text-amber-300 mb-1">
              <Compass className="w-4 h-4 text-amber-300 group-hover:rotate-45 transition-transform" />
              <span className="text-xs uppercase font-bold tracking-wider">Group of Islands</span>
            </div>
            <p className="text-xs text-stone-300 font-light">Mavinkurva & secret river lagoons across the long bay.</p>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-amber-400/40 transition-all duration-300 group">
            <div className="flex items-center gap-2 text-amber-300 mb-1">
              <Sun className="w-4 h-4 text-orange-400 group-hover:scale-110 transition-transform" />
              <span className="text-xs uppercase font-bold tracking-wider">Sunrise & Sunset</span>
            </div>
            <p className="text-xs text-stone-300 font-light">6 AM to 6 PM departures (all boating concludes by 6 PM).</p>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-amber-400/40 transition-all duration-300 group">
            <div className="flex items-center gap-2 text-amber-300 mb-1">
              <Sparkles className="w-4 h-4 text-yellow-300 group-hover:scale-110 transition-transform" />
              <span className="text-xs uppercase font-bold tracking-wider">Karavali Food</span>
            </div>
            <p className="text-xs text-stone-300 font-light">Fresh cloud-soft Neer Dosa, fish fry & sweet tender coconuts.</p>
          </div>

        </div>

      </div>
    </section>
  );
}
