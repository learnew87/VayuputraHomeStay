"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, Anchor, ArrowUp, Phone } from "lucide-react";
import { PROPERTY_DETAILS } from "@/data/propertyData";

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      "Namaskara Ganesh Gouda! I am inquiring about Vayuputra Island Homestay & Boating tour in Honnavar. Please share availability."
    );
    window.open(`https://wa.me/${PROPERTY_DETAILS.contact.whatsapp.replace(/\D/g, "")}?text=${text}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Scroll to Top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="w-11 h-11 rounded-full bg-[#182e24] text-white hover:bg-emerald-800 shadow-xl flex items-center justify-center transition-all duration-300 border border-white/20 hover:-translate-y-1"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Quick Boating Jump Button */}
      <a
        href="#boating"
        className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#182e24] text-stone-200 hover:text-white hover:bg-emerald-950 border border-emerald-500/30 shadow-xl text-xs font-bold tracking-wide transition-all duration-300 hover:-translate-y-1"
      >
        <Anchor className="w-3.5 h-3.5 text-amber-300" />
        <span>Boat Packages</span>
      </a>

      {/* Direct Call Button */}
      <a
        href={`tel:${PROPERTY_DETAILS.contact.phone.replace(/\s+/g, "")}`}
        className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-stone-900 text-stone-200 hover:text-white border border-white/20 shadow-xl text-xs font-bold tracking-wide transition-all duration-300 hover:-translate-y-1"
      >
        <Phone className="w-3.5 h-3.5 text-amber-300" />
        <span>Call Host: 9739790357</span>
      </a>

      {/* Floating WhatsApp Action Pill */}
      <button
        onClick={handleWhatsApp}
        className="group flex items-center gap-3 px-5 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 border-2 border-white/40"
        aria-label="Chat on WhatsApp with host Ganesh Gouda"
      >
        <div className="relative">
          <MessageCircle className="w-6 h-6 fill-white text-white" />
          <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-300 animate-ping" />
          <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-200" />
        </div>
        <div className="flex flex-col text-left leading-tight">
          <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-100">
            Chat with Ganesh
          </span>
          <span className="text-xs font-bold text-white">
            WhatsApp (9739790357)
          </span>
        </div>
      </button>
    </div>
  );
}
