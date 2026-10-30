"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, Menu, X, Compass, Phone, Clock, Anchor, Sparkles } from "lucide-react";
import SoundscapeButton from "./SoundscapeButton";
import { PROPERTY_DETAILS } from "@/data/propertyData";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Homestay", href: "#accommodation" },
    { name: "Boating Tours", href: "#boating" },
    { name: "Why Us", href: "#welcome" },
    { name: "Karavali Food", href: "#food" },
    { name: "Gallery", href: "#gallery" },
    { name: "Location", href: "#location" },
    { name: "Book / Estimate", href: "#booking" },
  ];

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent(
      `Namaskara Ganesh Gouda! I am inquiring about staying at Vayuputra Island Homestay and booking a Sharavati backwater boat tour in Honnavar. Please let me know availability.`
    );
    window.open(`https://wa.me/${PROPERTY_DETAILS.contact.whatsapp.replace(/\D/g, "")}?text=${text}`, "_blank");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0d1a13]/95 backdrop-blur-md shadow-xl border-b border-emerald-500/20 py-3"
          : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand */}
          <a href="#hero" className="group flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-400 border border-amber-300 flex items-center justify-center text-stone-950 shadow-md group-hover:scale-105 transition-transform">
              <Anchor className="w-5 h-5 text-stone-950" />
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-wide text-white block leading-none">
                Vayuputra
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase text-amber-300 block mt-1">
                Boating & Island Homestays • Honnavar
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-wider font-semibold text-stone-200 hover:text-amber-300 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-amber-400 hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <SoundscapeButton />

            <button
              onClick={handleWhatsAppClick}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#25D366] hover:bg-[#20ba59] text-white shadow-lg hover:shadow-emerald-500/30 transition-all duration-200 transform hover:-translate-y-0.5"
              title="Chat directly on WhatsApp with Ganesh Gouda"
            >
              <MessageCircle className="w-4 h-4 fill-white text-white" />
              <span>WhatsApp Ganesh</span>
            </button>
          </div>

          {/* Mobile Menu & Sound toggle button */}
          <div className="flex items-center gap-2 lg:hidden">
            <SoundscapeButton />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white/10 text-white hover:bg-white/20 border border-white/20"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-amber-300" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-[#0d1a13] border-b border-emerald-500/30 shadow-2xl px-6 py-6 transition-all animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-xs uppercase tracking-wider text-amber-300 font-bold">
                Vayuputra Boating & Homestays
              </span>
              <span className="text-[11px] text-stone-400 flex items-center gap-1">
                <Clock className="w-3 h-3 text-amber-300" /> Boating: 6 AM – 6 PM
              </span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-stone-200 hover:text-amber-300 py-1 transition-colors"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleWhatsAppClick();
                }}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow-lg"
              >
                <MessageCircle className="w-5 h-5 fill-white text-white" />
                <span>Chat & Book on WhatsApp (9739790357)</span>
              </button>

              <a
                href={`tel:${PROPERTY_DETAILS.contact.phone.replace(/\s+/g, "")}`}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-stone-200 text-sm border border-white/15 font-semibold"
              >
                <Phone className="w-4 h-4 text-amber-300" />
                <span>Call Host Ganesh Gouda: {PROPERTY_DETAILS.contact.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
