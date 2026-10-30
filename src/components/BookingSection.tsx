"use client";

import React, { useState, useEffect } from "react";
import {
  Calendar,
  Users,
  MessageCircle,
  Phone,
  Mail,
  Send,
  Bed,
  Anchor,
  CheckCircle2,
  Clock,
  Sparkles,
  AlertCircle,
  MapPin,
  Calculator,
  ShieldCheck,
  Check,
} from "lucide-react";
import { ROOMS, BOATING_PACKAGES, PROPERTY_DETAILS } from "@/data/propertyData";

interface BookingSectionProps {
  selectedRoomId?: string;
  selectedBoatingId?: string;
}

export default function BookingSection({
  selectedRoomId,
  selectedBoatingId,
}: BookingSectionProps) {
  const [formData, setFormData] = useState({
    guestName: "",
    phone: "",
    email: "",
    checkInDate: "",
    checkOutDate: "",
    nights: 1,
    guests: "2 Guests (Couple / Friends)",
    enquiryType: "both", // 'both' | 'accommodation' | 'boating'
    roomId: selectedRoomId || "vayuputra-island-homestay",
    boatingId: selectedBoatingId || "one-hour-backwater-safari",
    additionalMessage: "",
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedRoomId) {
      setFormData((prev) => ({
        ...prev,
        roomId: selectedRoomId,
        enquiryType: prev.enquiryType === "boating" ? "both" : prev.enquiryType,
      }));
    }
  }, [selectedRoomId]);

  useEffect(() => {
    if (selectedBoatingId) {
      setFormData((prev) => ({
        ...prev,
        boatingId: selectedBoatingId,
        enquiryType: prev.enquiryType === "accommodation" ? "both" : prev.enquiryType,
      }));
    }
  }, [selectedBoatingId]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const currentRoom = ROOMS.find((r) => r.id === formData.roomId) || ROOMS[0];
  const currentBoating = BOATING_PACKAGES.find((b) => b.id === formData.boatingId) || BOATING_PACKAGES[0];

  // Estimated Price Calculation
  const roomCost = formData.enquiryType !== "boating" ? currentRoom.pricePerNight * Number(formData.nights || 1) : 0;
  const boatingCost = formData.enquiryType !== "accommodation" ? currentBoating.price : 0;
  const totalEstimatedCost = roomCost + boatingCost;

  // WhatsApp Message Generator
  const generateWhatsAppMessage = () => {
    let details = `Namaskara Ganesh Gouda! I would like to check availability and book with Vayuputra in Honnavar:\n\n`;
    details += `👤 Guest Name: ${formData.guestName || "Guest"}\n`;
    details += `📞 Phone: ${formData.phone || "Not provided"}\n`;
    details += `👥 Guests: ${formData.guests}\n`;
    if (formData.checkInDate) details += `📅 Check-in Date: ${formData.checkInDate}\n`;
    if (formData.checkOutDate) details += `📅 Check-out Date: ${formData.checkOutDate}\n`;

    if (formData.enquiryType !== "boating") {
      details += `🏡 Homestay Room: ${currentRoom.name} (${formData.nights} night(s))\n`;
    }
    if (formData.enquiryType !== "accommodation") {
      details += `⛵ Boating Package: ${currentBoating.title}\n`;
    }

    details += `💰 Est. Total: ₹${totalEstimatedCost.toLocaleString("en-IN")}\n`;
    if (formData.additionalMessage) {
      details += `📝 Note/Request: ${formData.additionalMessage}\n`;
    }
    details += `\nPlease let us know if these dates are open. Thank you!`;

    return encodeURIComponent(details);
  };

  const handleSendWhatsApp = () => {
    const text = generateWhatsAppMessage();
    window.open(`https://wa.me/${PROPERTY_DETAILS.contact.whatsapp.replace(/\D/g, "")}?text=${text}`, "_blank");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="booking" className="py-24 lg:py-32 bg-[#FCFAF6] relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/10 text-emerald-900 text-xs font-bold tracking-widest uppercase mb-4 border border-emerald-900/15">
            <Calculator className="w-3.5 h-3.5 text-emerald-700" />
            <span>Interactive Booking & Estimation</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#182e24] mb-4">
            Plan Your Homestay & Boating Package.
          </h2>

          <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-light">
            We confirm bookings directly with host <strong>Ganesh Gouda</strong> on WhatsApp or phone call. No intermediary service fees or hidden platform surcharges.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 text-xs text-amber-900 font-medium bg-amber-100 px-4 py-1.5 rounded-full border border-amber-300">
            <Clock className="w-3.5 h-3.5 text-amber-800" />
            <span>Note: All boating service ends strictly by 6:00 PM daily (2-hr cruise closes at 5:00 PM)</span>
          </div>
        </div>

        {/* Main 2-Column Grid: Form + Live Estimator Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Interactive Preferences Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-stone-200">
            
            {/* Enquiry Type Selector Tabs */}
            <div className="mb-8">
              <label className="block text-xs uppercase font-bold tracking-wider text-stone-600 mb-2">
                What are you planning?
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setFormData((prev) => ({ ...prev, enquiryType: "both" }))}
                  className={`py-3 px-2 rounded-2xl text-xs sm:text-sm font-bold transition-all border ${
                    formData.enquiryType === "both"
                      ? "bg-[#182e24] text-white border-[#182e24] shadow-md"
                      : "bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100"
                  }`}
                >
                  🏡 Stay + ⛵ Boating
                </button>
                <button
                  type="button"
                  onClick={() => setFormData((prev) => ({ ...prev, enquiryType: "accommodation" }))}
                  className={`py-3 px-2 rounded-2xl text-xs sm:text-sm font-bold transition-all border ${
                    formData.enquiryType === "accommodation"
                      ? "bg-[#182e24] text-white border-[#182e24] shadow-md"
                      : "bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100"
                  }`}
                >
                  🏡 Homestay Only
                </button>
                <button
                  type="button"
                  onClick={() => setFormData((prev) => ({ ...prev, enquiryType: "boating" }))}
                  className={`py-3 px-2 rounded-2xl text-xs sm:text-sm font-bold transition-all border ${
                    formData.enquiryType === "boating"
                      ? "bg-[#182e24] text-white border-[#182e24] shadow-md"
                      : "bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100"
                  }`}
                >
                  ⛵ Boating Tour Only
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Row 1: Name and Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="guestName"
                    required
                    value={formData.guestName}
                    onChange={handleChange}
                    placeholder="e.g. Nagaraj Bhat"
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 text-sm text-stone-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. 9876543210"
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 text-sm text-stone-900"
                  />
                </div>
              </div>

              {/* Row 2: Homestay Selection (if applicable) */}
              {formData.enquiryType !== "boating" && (
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5 flex items-center justify-between">
                    <span>Homestay Accommodation</span>
                    <span className="text-emerald-700 font-semibold lowercase">includes home breakfast</span>
                  </label>
                  <div className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-stone-50 text-sm font-semibold text-stone-900 flex items-center justify-between">
                    <span>Vayuputra Island Homestay</span>
                    <span className="text-emerald-800 font-bold">₹1,500 / day</span>
                  </div>
                </div>
              )}

              {/* Row 3: Boating Selection (if applicable) */}
              {formData.enquiryType !== "accommodation" && (
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5 flex items-center justify-between">
                    <span>Select Boating Package</span>
                    <span className="text-emerald-700 font-semibold lowercase">1 boat: 8 member capacity</span>
                  </label>
                  <select
                    name="boatingId"
                    value={formData.boatingId}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 text-sm text-stone-900 bg-white"
                  >
                    {BOATING_PACKAGES.map((b) => (
                      <option key={b.id} value={b.id}>
                        {b.title} — ₹{b.price}/boat ({b.duration})
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Row 4: Dates and Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                    Check-in Date
                  </label>
                  <input
                    type="date"
                    name="checkInDate"
                    value={formData.checkInDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 text-sm text-stone-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                    Number of Nights
                  </label>
                  <select
                    name="nights"
                    value={formData.nights}
                    onChange={handleChange}
                    disabled={formData.enquiryType === "boating"}
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 text-sm text-stone-900 bg-white disabled:bg-stone-100"
                  >
                    {[1, 2, 3, 4, 5, 7, 10].map((n) => (
                      <option key={n} value={n}>
                        {n} Night{n > 1 ? "s" : ""}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                    Number of Guests
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 text-sm text-stone-900 bg-white"
                  >
                    <option value="1 Guest (Solo Traveler)">1 Guest (Solo Traveler)</option>
                    <option value="2 Guests (Couple / Friends)">2 Guests (Couple / Friends)</option>
                    <option value="3 Guests">3 Guests</option>
                    <option value="4 Guests (Family)">4 Guests (Family)</option>
                    <option value="5-6 Guests (Group)">5–6 Guests (Group)</option>
                    <option value="7+ Guests (Large Family)">7+ Guests (Large Family)</option>
                  </select>
                </div>
              </div>

              {/* Special Note */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                  Questions or Special Requests (Optional)
                </label>
                <textarea
                  name="additionalMessage"
                  rows={2}
                  value={formData.additionalMessage}
                  onChange={handleChange}
                  placeholder="e.g. Vegetarian food preference, Honnavar railway station pick-up assistance, early morning boat ride..."
                  className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 text-sm text-stone-900"
                />
              </div>

              {/* Primary Action: Send to WhatsApp */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleSendWhatsApp}
                  className="w-full py-4 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-base shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>Send Enquiry to Host Ganesh on WhatsApp (9739790357)</span>
                </button>
              </div>

            </form>
          </div>

          {/* Right Column: Live Package Estimate Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#182e24] via-[#12241c] to-[#0e1d16] text-white rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-emerald-600/30 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-amber-300 font-bold block">
                    Vayuputra Live Estimate
                  </span>
                  <h4 className="font-serif text-xl font-bold text-white">
                    Summary of Your Selection
                  </h4>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-amber-300">
                  <Calculator className="w-5 h-5" />
                </div>
              </div>

              {/* Itemized Breakdown */}
              <div className="space-y-4 mb-6">
                {formData.enquiryType !== "boating" && (
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <div className="flex items-center gap-2 text-xs font-bold text-emerald-300 uppercase">
                        <Bed className="w-4 h-4 text-emerald-400" />
                        <span>Homestay Room</span>
                      </div>
                      <span className="font-serif font-bold text-amber-300 text-sm">
                        ₹{(currentRoom.pricePerNight * Number(formData.nights || 1)).toLocaleString("en-IN")}
                      </span>
                    </div>
                    <p className="text-xs text-stone-200 font-semibold">{currentRoom.name}</p>
                    <p className="text-[11px] text-stone-400">
                      ₹{currentRoom.pricePerNight} × {formData.nights} day(s) • Breakfast included
                    </p>
                  </div>
                )}

                {formData.enquiryType !== "accommodation" && (
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <div className="flex items-center gap-2 text-xs font-bold text-amber-300 uppercase">
                        <Anchor className="w-4 h-4 text-amber-400" />
                        <span>Private Boat Cruise</span>
                      </div>
                      <span className="font-serif font-bold text-amber-300 text-sm">
                        ₹{currentBoating.price.toLocaleString("en-IN")}
                      </span>
                    </div>
                    <p className="text-xs text-stone-200 font-semibold">{currentBoating.title}</p>
                    <p className="text-[11px] text-stone-400">
                      Duration: {currentBoating.duration} • 1 Boat (8 Member Capacity)
                    </p>
                  </div>
                )}
              </div>

              {/* Total Calculation */}
              <div className="p-5 rounded-2xl bg-amber-400 text-stone-950 mb-6 shadow-lg">
                <span className="text-[11px] uppercase font-bold tracking-wider text-stone-800 block mb-0.5">
                  Estimated Total
                </span>
                <div className="flex items-baseline justify-between">
                  <div className="text-3xl font-bold font-serif">
                    ₹{totalEstimatedCost.toLocaleString("en-IN")}
                  </div>
                  <span className="text-xs font-semibold text-stone-800">
                    Direct host pricing • No hidden fees
                  </span>
                </div>
              </div>

              {/* Inclusions checklist */}
              <div className="space-y-2 text-xs text-stone-300 mb-6">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Complimentary Karavali family breakfast with stay</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>ISI certified life vests provided for all boat passengers</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Zero tourist queues — private jetty boarding</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Free cancellation with 48 hours advance notice</span>
                </div>
              </div>
            </div>

            {/* Direct Call Strip */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-stone-300">
              <span>Prefer speaking directly?</span>
              <a
                href={`tel:${PROPERTY_DETAILS.contact.phone.replace(/\s+/g, "")}`}
                className="font-bold text-amber-300 hover:text-white flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call: 9739790357</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
