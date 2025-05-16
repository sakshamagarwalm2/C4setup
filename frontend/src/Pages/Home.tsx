"use client";

import { useState } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { EnquiryModal } from "@/components/ui/enquiry-modal";
import { HeroSection } from "@/components/sections/hero-section";
import { ElectrolyzerFeaturesSection } from "@/components/sections/electrolyzer-features-section";
import { H2ElectrolyzersSection } from "@/components/sections/h2-electrolyzers-section";
import { SoftwareSection } from "@/components/sections/software-section";
import { NewsSection } from "@/components/sections/news-section";
import { SustainabilitySection } from "@/components/sections/sustainability-section";
import { IndustriesSection } from "@/components/sections/industries-section";
import { CtaBannerSection } from "@/components/sections/cta-banner-section";
import { JoinRevolutionSection } from "@/components/sections/join-revolution-section";
import { PartnersSection } from "@/components/sections/partners-section";
import { NewsletterSection } from "@/components/sections/newsletter-section";

export default function HomePage() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  
  const openEnquiryModal = () => setIsEnquiryModalOpen(true);
  const closeEnquiryModal = () => setIsEnquiryModalOpen(false);
  
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header onProductEnquiryClick={openEnquiryModal} />
      <main className="flex-grow">
        <HeroSection />
        <ElectrolyzerFeaturesSection />
        <H2ElectrolyzersSection />
        <SoftwareSection />
        <NewsSection />
        <SustainabilitySection />
        <IndustriesSection />
        <CtaBannerSection onProductEnquiryClick={openEnquiryModal} />
        <JoinRevolutionSection />
        <PartnersSection />
        <NewsletterSection />
      </main>
      <Footer />
      <EnquiryModal isOpen={isEnquiryModalOpen} onClose={closeEnquiryModal} />
    </div>
  );
}