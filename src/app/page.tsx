"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WelcomeSection from "@/components/WelcomeSection";
import AccommodationSection from "@/components/AccommodationSection";
import BoatingSection from "@/components/BoatingSection";
import NatureSection from "@/components/NatureSection";
import FoodSection from "@/components/FoodSection";
import GallerySection from "@/components/GallerySection";
import ReviewsSection from "@/components/ReviewsSection";
import LocationSection from "@/components/LocationSection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

export default function Home() {
  const [selectedRoomId, setSelectedRoomId] = useState<string>("vayuputra-island-homestay");
  const [selectedBoatingId, setSelectedBoatingId] = useState<string>("one-hour-backwater-safari");

  const handleSelectRoom = (roomId: string) => {
    setSelectedRoomId(roomId);
  };

  const handleSelectBoating = (boatingId: string) => {
    setSelectedBoatingId(boatingId);
  };

  return (
    <main className="min-h-screen bg-[#FCFAF6] text-[#242924] relative selection:bg-[#647B54] selection:text-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Welcome to Our Homestay Section */}
      <WelcomeSection />

      {/* Accommodation Section */}
      <AccommodationSection onSelectRoomForBooking={handleSelectRoom} />

      {/* Boating Experience Section */}
      <BoatingSection onSelectBoatingPackage={handleSelectBoating} />

      {/* Nature & Surroundings Section */}
      <NatureSection />

      {/* Food and Hospitality Section */}
      <FoodSection />

      {/* Photo Gallery with Lightbox */}
      <GallerySection />

      {/* Guest Reviews Section */}
      <ReviewsSection />

      {/* Location & Directions Section */}
      <LocationSection />

      {/* Booking and Enquiry Section */}
      <BookingSection
        selectedRoomId={selectedRoomId}
        selectedBoatingId={selectedBoatingId}
      />

      {/* Footer */}
      <Footer />

      {/* Floating Quick Action Widget */}
      <FloatingActions />
    </main>
  );
}
