"use client";

import React from "react";
import {
  Compass,
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  ExternalLink,
  Heart,
  Anchor,
  Trees,
  Clock,
  ShieldCheck,
} from "lucide-react";
import { PROPERTY_DETAILS } from "@/data/propertyData";

export default function Footer() {
  const quickLinks = [
    { name: "Homestay Rooms", href: "#accommodation" },
    { name: "Boat Tours & Island Hopping", href: "#boating" },
    { name: "Why Us (Homestay vs Resort)", href: "#welcome" },
    { name: "Authentic Karavali Food", href: "#food" },
    { name: "Photo Gallery", href: "#gallery" },
    { name: "Location & Day Trips", href: "#location" },
    { name: "Book on WhatsApp", href: "#booking" },
  ];

  return (
    <footer className="bg-[#0b1711] text-[#EDE7D9] pt-20 pb-12 border-t-2 border-emerald-500/20 relative overflow-hidden">
      {/* Decorative organic top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-28 bg-emerald-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          
          {/* Brand & Introduction */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-amber-400 border border-amber-300 flex items-center justify-center text-stone-950 shadow-md">
                <Anchor className="w-5 h-5 text-stone-950" />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-wide text-white block leading-none">
                  Vayuputra
                </span>
                <span className="text-[11px] font-semibold tracking-widest uppercase text-amber-300 block mt-1">
                  Honnavar Sharavati Backwater Boating & Island Homestays
                </span>
              </div>
            </div>

            <p className="text-sm text-stone-300 leading-relaxed max-w-sm font-light">
              We operate at Honnavar - Mavinkurva backwater riverside, providing private boats, authentic island homestays, and personalized tours. Explore groups of islands, the long bay of Sharavati river, mangrove tunnels, and glorious sunrise & sunset views.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2 text-xs">
              <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/10 text-emerald-300">
                <Trees className="w-3.5 h-3.5" />
                <span>Village Homestay, Not a Resort</span>
              </span>
              <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/10 text-amber-300">
                <Anchor className="w-3.5 h-3.5" />
                <span>Private Jetty Boarding</span>
              </span>
              <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/10 text-stone-300">
                <Clock className="w-3.5 h-3.5 text-amber-300" />
                <span>Boating: 6 AM – 6 PM (Ends by 6 PM)</span>
              </span>
            </div>

            <p className="text-xs text-stone-400 pt-2 italic">
              &ldquo;Sharavati backwater is an untouched nature reservoir: feel and breath the natural beauty.&rdquo;
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-widest text-amber-300 mb-4">
              Explore Our Stay & Tours
            </h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-stone-300 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-amber-400">›</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details & Direct Host Info */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs uppercase font-bold tracking-widest text-amber-300 mb-4">
              Connect Directly with Host
            </h4>

            <div className="space-y-3 text-sm text-stone-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                <span className="text-xs leading-relaxed">
                  Taribagilu & Mavinkurva Island Riverside, Honnavar, Karwar / Uttara Kannada, Karnataka - 581334
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${PROPERTY_DETAILS.contact.phone}`} className="hover:text-white text-xs font-semibold">
                  +91 9739790357 (Call Ganesh Gouda)
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={`https://wa.me/${PROPERTY_DETAILS.contact.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white text-xs font-semibold text-emerald-400"
                >
                  WhatsApp: +91 9739790357
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-300 shrink-0" />
                <a href={`mailto:${PROPERTY_DETAILS.contact.email}`} className="hover:text-white text-xs">
                  ganeshgouda16@gmail.com
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`https://wa.me/${PROPERTY_DETAILS.contact.whatsapp.replace(/\D/g, "")}?text=Namaskara%20Ganesh%20Gouda!%20I%20want%20to%20inquire%20about%20Vayuputra%20Homestay%20and%20Boating%20in%20Honnavar.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-lg"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp Now</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} Vayuputra Boating & Homestays, Honnavar. All rights reserved.</p>
          <div className="flex items-center gap-4 text-stone-400">
            <span>Taribagilu • Mavinkurva Island • Sharavati Backwaters</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
