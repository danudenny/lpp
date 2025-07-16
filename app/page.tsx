"use client";

import { useState, useEffect } from "react";

// Import all section components
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/ui/floating-buttons/FloatingButtons";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import AboutSection from "@/components/sections/AboutSection";
import ValuesSection from "@/components/sections/ValuesSection";
import FleetSection from "@/components/sections/FleetSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TugboatServicesSection from "@/components/sections/TugboatServicesSection";
import BargeServicesSection from "@/components/sections/BargeServicesSection";
import SafetyTechnologySection from "@/components/sections/SafetyTechnologySection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import EnvironmentalCommitmentSection from "@/components/sections/EnvironmentalCommitmentSection";
import PartnershipsSection from "@/components/sections/PartnershipsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import Navbar from "@/components/layout/Navbar";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Floating buttons (WhatsApp and Back to Top) */}
      <FloatingButtons />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <StatsSection />

      {/* About Section */}
      <AboutSection />

      {/* Values Section */}
      <ValuesSection />

      {/* Fleet Section */}
      <FleetSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Tugboat Services Section */}
      {/* <TugboatServicesSection /> */}

      {/* Barge Services Section */}
      {/* <BargeServicesSection /> */}

      {/* Safety & Technology Section */}
      {/* <SafetyTechnologySection /> */}

      {/* Why Choose Us Section */}
      <WhyChooseUsSection />

      {/* Environmental Commitment Section */}
      <EnvironmentalCommitmentSection />

      {/* Partnerships Section */}
      <PartnershipsSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
