"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Users,
  Bed,
  Eye,
  Check,
  ArrowRight,
  Coffee,
  Trees,
  MessageCircle,
  MapPin,
  ShieldCheck,
  Clock,
  Sparkles,
} from "lucide-react";
import { ROOMS, Room, PROPERTY_DETAILS } from "@/data/propertyData";

interface AccommodationProps {
  onSelectRoomForBooking?: (roomId: string) => void;
}

export default function AccommodationSection({ onSelectRoomForBooking }: AccommodationProps) {
  const homestay = ROOMS[0];
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleSelectRoom = (roomId: string) => {
    if (onSelectRoomForBooking) {
      onSelectRoomForBooking(roomId);
    }
    const bookingSection = document.getElementById("booking");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWhatsAppRoom = () => {
    const text = encodeURIComponent(
      `Namaskara Ganesh Gouda! I am inquiring about booking Vayuputra Island Homestay in Honnavar.\n• Tariff: ₹1,500/- per day (includes home breakfast)\n\nPlease share availability for our dates.`
    );
    window.open(`https://wa.me/${PROPERTY_DETAILS.contact.whatsapp.replace(/\D/g, "")}?text=${text}`, "_blank");
  };

  return (
    <section id="accommodation" className="py-24 lg:py-32 bg-[#F6F3EB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/10 text-emerald-900 text-xs font-bold tracking-widest uppercase mb-4 border border-emerald-800/15">
            <Bed className="w-3.5 h-3.5 text-emerald-700" />
            <span>Honest & Peaceful Island Living</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#182e24] mb-4">
            Vayuputra Island Homestay Accommodation.
          </h2>

          <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-light">
            Stay in our authentic village home on Mavinkurva island along the Sharavati backwaters. Clean, comfortable, and peaceful living under coconut palms with home-cooked meals and river cross-breezes.
          </p>

          <div className="mt-4 inline-block text-xs text-emerald-900 font-bold bg-emerald-100 px-4 py-1.5 rounded-full border border-emerald-300">
            ✓ Flat Homestay Tariff: ₹1,500/- per day (includes complimentary home-cooked Karavali breakfast & morning tea)
          </div>
        </div>

        {/* Focused Single Homestay Showcase Card */}
        <div className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
            
            {/* Left: Photographic Gallery with thumbnail selector */}
            <div className="lg:col-span-7 bg-stone-900 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                {/* Main Active Photo */}
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-xl mb-4 bg-stone-800">
                  <Image
                    src={homestay.images[selectedImageIndex]}
                    alt="Vayuputra Island Homestay"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-amber-200 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1.5 border border-white/15">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Mavinkurva Main Island • Taribagilu</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                    <div>
                      <span className="text-[11px] text-amber-300 uppercase font-bold tracking-wider block">
                        Authentic Island Living
                      </span>
                      <span className="text-lg font-serif font-bold">
                        Vayuputra Backwater Homestay
                      </span>
                    </div>
                    <span className="text-xs bg-emerald-900/90 backdrop-blur-md px-3 py-1 rounded-full border border-emerald-500/40">
                      30 sec to Boat Jetty
                    </span>
                  </div>
                </div>

                {/* Thumbnails Row */}
                <div className="grid grid-cols-5 gap-2">
                  {homestay.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImageIndex(idx)}
                      className={`relative aspect-[4/3] rounded-xl overflow-hidden transition-all duration-200 border-2 ${
                        selectedImageIndex === idx ? "border-amber-400 scale-102" : "border-transparent opacity-60 hover:opacity-100"
                      }`}
                      aria-label={`View photo ${idx + 1}`}
                    >
                      <Image src={img} alt="Thumbnail" fill className="object-cover" sizes="120px" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Bottom features bar */}
              <div className="mt-6 pt-4 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
                <div className="text-stone-300 text-xs">
                  <span className="text-amber-300 font-bold block text-sm">₹1,500</span>
                  <span className="text-[11px]">per day flat</span>
                </div>
                <div className="text-stone-300 text-xs">
                  <span className="text-emerald-400 font-bold block text-sm">Included</span>
                  <span className="text-[11px]">Home Breakfast</span>
                </div>
                <div className="text-stone-300 text-xs">
                  <span className="text-sky-300 font-bold block text-sm">24/7 Hot Water</span>
                  <span className="text-[11px]">Western Bathroom</span>
                </div>
                <div className="text-stone-300 text-xs">
                  <span className="text-amber-300 font-bold block text-sm">Direct Boarding</span>
                  <span className="text-[11px]">Private Boat Dock</span>
                </div>
              </div>
            </div>

            {/* Right: Stay Details & Booking Options */}
            <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between bg-white">
              <div>
                <div className="inline-block px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3 border border-emerald-200">
                  Island Homestay Experience
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#182e24] mb-2">
                  Vayuputra Island Homestay
                </h3>

                <p className="text-xs font-semibold text-emerald-800 mb-4">
                  {homestay.tagline}
                </p>

                {/* Price Display */}
                <div className="p-4 rounded-2xl bg-amber-50 border-2 border-amber-300 mb-6">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-[11px] text-stone-600 uppercase font-bold tracking-wider block">
                        Room Tariff
                      </span>
                      <div className="text-3xl font-serif font-bold text-[#182e24]">
                        ₹1,500 <span className="text-xs font-sans font-normal text-stone-600">/ day</span>
                      </div>
                    </div>
                    <span className="text-xs bg-emerald-700 text-white font-bold px-3 py-1 rounded-full shadow-sm">
                      Breakfast Included
                    </span>
                  </div>
                  <p className="text-xs text-stone-600 mt-2 pt-2 border-t border-amber-200">
                    Complimentary handmade Neer Dosa, fresh coconut chutney, and morning river herbal tea prepared by host family.
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6">
                  {homestay.description}
                </p>

                {/* Amenities List */}
                <div className="space-y-2 mb-6">
                  <span className="text-xs uppercase font-bold tracking-wider text-[#182e24] block">
                    What&apos;s Included in Your Stay:
                  </span>
                  <div className="space-y-1.5 text-xs text-stone-700">
                    {homestay.amenities.map((amenity, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => handleSelectRoom(homestay.id)}
                  className="flex-1 py-3.5 px-5 rounded-2xl bg-[#182e24] hover:bg-[#254638] text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-md"
                >
                  <span>Book Stay (₹1,500/day)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={handleWhatsAppRoom}
                  className="py-3.5 px-5 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs shadow-md transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>WhatsApp Ganesh</span>
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* 4 Island Features Ribbon */}
        <div className="rounded-3xl bg-[#182e24] p-8 sm:p-10 text-white shadow-xl border border-emerald-600/30">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
            <div className="space-y-1">
              <span className="text-amber-400 font-bold text-2xl font-serif">₹1,500</span>
              <h4 className="font-semibold text-sm text-stone-200">Per Day Homestay</h4>
              <p className="text-xs text-stone-400">Fixed, honest rate with complimentary Karavali family breakfast.</p>
            </div>
            <div className="space-y-1">
              <span className="text-amber-400 font-bold text-2xl font-serif">30 Sec</span>
              <h4 className="font-semibold text-sm text-stone-200">To Private Boat Jetty</h4>
              <p className="text-xs text-stone-400">Step straight from the homestay compound into our private boat.</p>
            </div>
            <div className="space-y-1">
              <span className="text-amber-400 font-bold text-2xl font-serif">6 AM – 6 PM</span>
              <h4 className="font-semibold text-sm text-stone-200">Boating Hours</h4>
              <p className="text-xs text-stone-400">All boating safely operates during daylight and concludes by 6:00 PM.</p>
            </div>
            <div className="space-y-1">
              <span className="text-amber-400 font-bold text-2xl font-serif">100%</span>
              <h4 className="font-semibold text-sm text-stone-200">Untouched Nature</h4>
              <p className="text-xs text-stone-400">Zero city pollution, calm river breezes, and starlit quiet nights.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
