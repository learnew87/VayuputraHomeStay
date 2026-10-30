"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Anchor,
  Clock,
  Users,
  Compass,
  Sparkles,
  MessageCircle,
  CheckCircle,
  ShieldCheck,
  LifeBuoy,
  MapPin,
  CalendarCheck,
  Waves,
  Navigation,
  ArrowRight,
  Sun,
  Eye,
} from "lucide-react";
import { BOATING_PACKAGES, BOATING_SAFETY_INFO, PROPERTY_DETAILS, BoatingPackage } from "@/data/propertyData";

const BACKWATER_STOPS = [
  {
    id: "jetty",
    name: "Taribagilu Private Boarding Jetty",
    tagline: "Direct departure • Zero tourist queues",
    duration: "Starting Point",
    description:
      "Unlike crowded public boat counters in Honnavar town, you board leisurely right from our family island riverfront. Free parking, life jacket fitting, and quiet boarding under coconut trees.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Personalized boarding time", "ISI certified life vests fitted", "No commercial tour bus crowds"],
  },
  {
    id: "mangroves",
    name: "Mavinkurva Mangrove Tunnels",
    tagline: "Natural green cathedrals & breathing roots",
    duration: "20–30 mins into tour",
    description:
      "Drift slowly under ancient overarching mangrove canopies. Watch fiddler crabs scuttle along stilt roots and listen to the peaceful flutter of kingfishers and purple herons in the tidal canopies.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Shaded tidal water channels", "Spot Brahminy Kites & Egrets", "Protected, ripple-free waters"],
  },
  {
    id: "long-bay",
    name: "Sharavati River Long Bay & Islands",
    tagline: "Wide horizons & group of secluded delta islands",
    duration: "30–60 mins into tour",
    description:
      "Cruise across the expansive bay where the Sharavati widens before meeting the sea. Glide past small uninhabited river sandbanks, traditional crab fishing boats, and lush river shores.",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Panoramic 360° river views", "Island hopping stops", "Traditional fishermen at work"],
  },
  {
    id: "lotus",
    name: "Lotus & Water Lily Sanctuary",
    tagline: "Hidden blooming lagoons (Best morning: 6:30–9 AM)",
    duration: "Morning expeditions",
    description:
      "A quiet, shallow lagoon where wild pink lotuses and white lilies carpet the water. In the soft early morning light, the flowers open up to reveal an untouched sanctuary known only to local boatmen.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Seasonal natural blooming spectacle", "Calm mirror reflections", "Dream photography paradise"],
  },
  {
    id: "sunset-point",
    name: "Estuary Sunset Vantage Point",
    tagline: "Golden hour where river approaches the sea",
    duration: "Evening expeditions (5:00–6:15 PM)",
    description:
      "Watch the sun dip behind the coastal coconut silhouettes in shades of fiery orange and magenta. We cut the motor to idle so you can soak in the silence, evening breeze, and golden water ripples.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Dazzling golden hour reflections", "Gentle evening coastal breezes", "Perfect for couple & family photos"],
  },
];

interface BoatingSectionProps {
  onSelectBoatingPackage?: (packageId: string) => void;
}

export default function BoatingSection({ onSelectBoatingPackage }: BoatingSectionProps) {
  const [selectedPkg, setSelectedPkg] = useState<BoatingPackage>(BOATING_PACKAGES[0]);
  const [activeStop, setActiveStop] = useState(BACKWATER_STOPS[0]);
  const [passengers, setPassengers] = useState<number>(4);

  const handleBookPackage = (pkgId: string) => {
    if (onSelectBoatingPackage) {
      onSelectBoatingPackage(pkgId);
    }
    const bookingSection = document.getElementById("booking");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWhatsAppBoating = (pkg: BoatingPackage) => {
    const message = encodeURIComponent(
      `Namaskara Ganesh Gouda! I want to book the "${pkg.title}" with Vayuputra Boating.\n• Approx. Passengers: ${passengers}\n• Duration: ${pkg.duration}\n• Price: ₹${pkg.price}\n\nPlease share availability for our dates.`
    );
    window.open(`https://wa.me/${PROPERTY_DETAILS.contact.whatsapp.replace(/\D/g, "")}?text=${message}`, "_blank");
  };

  return (
    <section id="boating" className="py-24 lg:py-32 bg-[#0d1a13] text-[#EDE7D9] relative overflow-hidden">
      {/* Dynamic ambient gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-xs sm:text-sm font-semibold tracking-widest uppercase text-emerald-300 mb-4 shadow-md">
            <Anchor className="w-4 h-4 text-amber-300" />
            <span>Vayuputra Private Boating & Island Tours</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Explore the Sharavati River & Group of Islands by Boat.
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-stone-300 font-light leading-relaxed">
            Private motorboat rides departing directly from Taribagilu & Mavinkurva island riverbank. Discover mangrove labyrinths, lotus lagoons, and golden hour vistas with native boatman Ganesh Gouda.
          </p>

          <div className="mt-5 inline-flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-stone-300">
            <span className="bg-white/10 px-4 py-1.5 rounded-full border border-white/15 flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-300" />
              <span>Boating: 6:00 AM – 6:00 PM (Ends by 6 PM)</span>
            </span>
            <span className="bg-white/10 px-4 py-1.5 rounded-full border border-white/15 flex items-center gap-2">
              <Users className="w-4 h-4 text-emerald-400" />
              <span>1 Boat: 8 Member Capacity</span>
            </span>
            <span className="bg-white/10 px-4 py-1.5 rounded-full border border-white/15 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>ISI Life Jackets Provided</span>
            </span>
          </div>
        </div>

        {/* OFFICIAL TARIFF HIGHLIGHT BOX */}
        <div className="mb-16 bg-gradient-to-r from-amber-500/15 via-emerald-600/15 to-amber-500/15 p-6 sm:p-8 rounded-3xl border-2 border-amber-400/40 backdrop-blur-md shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400 text-stone-950 text-xs font-bold uppercase tracking-wider mb-1 shadow-sm">
                <Anchor className="w-3.5 h-3.5" />
                <span>Official Private Boating Tariff</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Simple, Fixed Boat Pricing
              </h3>
              <p className="text-xs sm:text-sm text-stone-300">
                1 boat has an <strong>8-member capacity</strong>. Tariff covers your entire private group with certified ISI life vests.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-auto">
              {/* 1 Hour Option */}
              <div className="p-5 rounded-2xl bg-black/60 border border-white/15 text-center sm:text-left sm:min-w-[230px] hover:border-amber-400/50 transition-colors">
                <span className="text-[11px] uppercase font-bold tracking-wider text-amber-300 block mb-0.5">
                  1 Hour Tour
                </span>
                <div className="text-3xl font-bold font-serif text-white my-1">
                  ₹1,500<span className="text-xs font-normal text-stone-400"> / boat</span>
                </div>
                <div className="text-xs text-stone-300">
                  1 Boat • Up to 8 Member Capacity
                </div>
                <div className="text-[11px] text-emerald-400 font-medium mt-1">
                  ✓ Available 6:00 AM – 6:00 PM (Ends by 6 PM)
                </div>
              </div>

              {/* 2 Hour Option */}
              <div className="p-5 rounded-2xl bg-black/60 border border-amber-400/60 text-center sm:text-left sm:min-w-[230px] relative hover:border-amber-400 transition-colors shadow-lg">
                <div className="absolute -top-3 right-4 bg-red-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-md">
                  Closes at 5:00 PM
                </div>
                <span className="text-[11px] uppercase font-bold tracking-wider text-amber-300 block mb-0.5">
                  2 Hour Grand Tour
                </span>
                <div className="text-3xl font-bold font-serif text-amber-300 my-1">
                  ₹2,500<span className="text-xs font-normal text-stone-400"> / boat</span>
                </div>
                <div className="text-xs text-stone-300">
                  1 Boat • Up to 8 Member Capacity
                </div>
                <div className="text-[11px] text-red-400 font-semibold mt-1">
                  ⚠️ This package closes at 5:00 PM
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 1. INTERACTIVE BACKWATER ROUTE VISUALIZER */}
        <div className="mb-20 bg-stone-900/80 rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-amber-300 block mb-1">
                Interactive Journey Visualizer
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Stops Along Our Backwater Expeditions
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-stone-400 max-w-md">
              Click through the navigation points to preview what you will see during our private river cruises.
            </p>
          </div>

          {/* Stop Selection Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
            {BACKWATER_STOPS.map((stop, idx) => {
              const isActive = activeStop.id === stop.id;
              return (
                <button
                  key={stop.id}
                  onClick={() => setActiveStop(stop)}
                  className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 flex items-center gap-2 border ${
                    isActive
                      ? "bg-amber-400 text-stone-950 border-amber-300 shadow-lg shadow-amber-400/20 scale-102"
                      : "bg-white/5 text-stone-300 border-white/10 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                    isActive ? "bg-stone-950 text-amber-400" : "bg-white/10 text-stone-300"
                  }`}>
                    {idx + 1}
                  </span>
                  <span>{stop.name.split(" ")[0]} {stop.name.split(" ")[1] || ""}</span>
                </button>
              );
            })}
          </div>

          {/* Active Stop Showcase Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-black/40 rounded-2xl p-6 sm:p-8 border border-white/10">
            <div className="lg:col-span-6 relative aspect-[16/10] rounded-2xl overflow-hidden shadow-xl border border-white/10">
              <Image
                src={activeStop.image}
                alt={activeStop.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300 block mb-1">
                  {activeStop.duration}
                </span>
                <span className="text-lg font-bold text-white block">
                  {activeStop.name}
                </span>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <div className="inline-block px-3 py-1 rounded-md bg-emerald-900/60 text-emerald-300 text-xs font-semibold uppercase tracking-wider border border-emerald-500/30">
                {activeStop.tagline}
              </div>

              <h4 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                {activeStop.name}
              </h4>

              <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
                {activeStop.description}
              </p>

              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-300 block">
                  What You&apos;ll Experience:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeStop.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-stone-200 bg-white/5 p-2 rounded-lg border border-white/5">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. BOATING PACKAGES GRID */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase font-bold tracking-widest text-amber-300 block mb-2">
              Curated River Packages
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-3">
              Choose Your Backwater Cruise
            </h3>
            <p className="text-xs sm:text-sm text-stone-300">
              Private boat pricing for your entire family or group. No ticket counter queues or shared stranger seating.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BOATING_PACKAGES.map((pkg) => {
              const isSelected = selectedPkg.id === pkg.id;
              return (
                <div
                  key={pkg.id}
                  onClick={() => setSelectedPkg(pkg)}
                  className={`cursor-pointer rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 border ${
                    isSelected
                      ? "bg-gradient-to-b from-[#183124] to-[#11231a] border-amber-400 shadow-2xl shadow-amber-400/10 scale-102"
                      : "bg-stone-900/70 border-white/10 hover:border-white/30 hover:bg-stone-900"
                  }`}
                >
                  <div>
                    {/* Image Header */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={pkg.image}
                        alt={pkg.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      
                      {pkg.badge && (
                        <div className="absolute top-3 left-3 bg-amber-400 text-stone-950 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-md">
                          {pkg.badge}
                        </div>
                      )}

                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                        <span className="flex items-center gap-1 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full">
                          <Clock className="w-3.5 h-3.5 text-amber-300" />
                          <span>{pkg.duration}</span>
                        </span>
                        <span className="flex items-center gap-1 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full">
                          <Users className="w-3.5 h-3.5 text-emerald-400" />
                          <span>{pkg.capacity.split(" ")[0]}</span>
                        </span>
                      </div>
                    </div>

                    {/* Content Details */}
                    <div className="p-5">
                      <h4 className="font-serif text-lg font-bold text-white mb-2 leading-snug">
                        {pkg.title}
                      </h4>
                      <p className="text-xs text-stone-300 leading-relaxed mb-4">
                        {pkg.shortDesc}
                      </p>

                      <div className="space-y-1.5 text-[11px] text-stone-300 mb-4 border-t border-white/10 pt-3">
                        <div className="flex items-center gap-2">
                          <Sun className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                          <span><strong>Best Time:</strong> {pkg.bestTime.split("(")[0]}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>All passenger life vests included</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Price & Action Footer */}
                  <div className="p-5 pt-0 border-t border-white/10 flex flex-col gap-3">
                    <div className="flex items-baseline justify-between pt-3">
                      <div>
                        <span className="text-[10px] text-stone-400 uppercase tracking-wider block">Private Boat Price</span>
                        <div className="text-2xl font-bold text-amber-400 font-serif">
                          ₹{pkg.price.toLocaleString("en-IN")}
                        </div>
                      </div>
                      <span className="text-[11px] text-stone-400">Total for group</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleBookPackage(pkg.id);
                        }}
                        className="py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1 border border-white/15"
                      >
                        <span>Reserve</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleWhatsAppBoating(pkg);
                        }}
                        className="py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs shadow-md transition-colors flex items-center justify-center gap-1"
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-white" />
                        <span>WhatsApp</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. SAFETY & NATIVE BOATMAN BANNER */}
        <div className="rounded-3xl bg-gradient-to-r from-emerald-950/70 via-stone-900 to-emerald-950/70 p-6 sm:p-10 border border-emerald-500/30 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center shrink-0 text-amber-400">
                <LifeBuoy className="w-6 h-6" />
              </div>
              <div>
                <h5 className="font-bold text-white text-sm mb-1">Certified ISI Safety Gear</h5>
                <p className="text-xs text-stone-300 leading-relaxed">
                  High-buoyancy vests tailored for adults, teens, and children. Mandatory and comfortable for all passengers.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-400/20 border border-emerald-400/40 flex items-center justify-center shrink-0 text-emerald-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h5 className="font-bold text-white text-sm mb-1">Native Boatman Captain</h5>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Ganesh Gouda has 15+ years navigating Sharavati tides, submerged sandbars, and secret mangrove inlets safely.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-sky-400/20 border border-sky-400/40 flex items-center justify-center shrink-0 text-sky-400">
                <Waves className="w-6 h-6" />
              </div>
              <div>
                <h5 className="font-bold text-white text-sm mb-1">Smooth Inland Backwaters</h5>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Sheltered island waterways with zero sea-sickness or big waves. Perfect for elders, toddlers, and non-swimmers.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
