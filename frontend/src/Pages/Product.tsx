"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { useState } from "react";
import { EnquiryModal } from "@/components/ui/enquiry-modal";
import Image from "next/image";
import { AnimatedButton } from "@/components/ui/animated-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { NewsletterSection } from "@/components/sections/newsletter-section";

const productFeatures = [
  {
    title: "High Efficiency",
    description: "Our electrolyzers achieve industry-leading efficiency rates, maximizing hydrogen output while minimizing energy consumption.",
    icon: "https://placehold.co/100x100.png",
    iconAlt: "Efficiency icon"
  },
  {
    title: "Scalable Design",
    description: "Modular architecture allows for easy scaling from kilowatts to megawatts, adapting to your specific requirements.",
    icon: "https://placehold.co/100x100.png",
    iconAlt: "Scalability icon"
  },
  {
    title: "Advanced Monitoring",
    description: "Integrated IoT sensors and software provide real-time performance data and predictive maintenance alerts.",
    icon: "https://placehold.co/100x100.png",
    iconAlt: "Monitoring icon"
  },
  {
    title: "Rapid Deployment",
    description: "Pre-engineered systems enable quick installation and commissioning, reducing time-to-operation.",
    icon: "https://placehold.co/100x100.png",
    iconAlt: "Deployment icon"
  }
];

const productModels = [
  {
    name: "GreenTrace 100",
    capacity: "10-100kW",
    description: "Ideal for small-scale applications, research facilities, and pilot projects. Compact design with full automation capabilities.",
    image: "https://placehold.co/600x400.png",
    imageAlt: "GreenTrace 100 electrolyzer"
  },
  {
    name: "GreenTrace 500",
    capacity: "250-500kW",
    description: "Perfect for medium-sized industrial applications. Optimized for integration with renewable energy sources like solar and wind.",
    image: "https://placehold.co/600x400.png",
    imageAlt: "GreenTrace 500 electrolyzer"
  },
  {
    name: "GreenTrace Mega",
    capacity: ">1MW",
    description: "Our flagship product for large-scale hydrogen production. Designed for utility-scale projects and major industrial applications.",
    image: "https://placehold.co/600x400.png",
    imageAlt: "GreenTrace Mega electrolyzer"
  }
];

export default function ProductPage() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  
  const openEnquiryModal = () => setIsEnquiryModalOpen(true);
  const closeEnquiryModal = () => setIsEnquiryModalOpen(false);
  
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header onProductEnquiryClick={openEnquiryModal} />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative bg-primary text-primary-foreground py-24 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Advanced Green Hydrogen Electrolyzers
                </h1>
                <p className="text-xl mb-8 text-primary-foreground/90">
                  Our cutting-edge electrolyzers deliver efficient, reliable, and scalable green hydrogen production for a sustainable future.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <AnimatedButton href="#product-models" variant="onCardLime">
                    Explore Products
                  </AnimatedButton>
                  <AnimatedButton onClick={openEnquiryModal} variant="secondary">
                    Contact Sales
                  </AnimatedButton>
                </div>
              </div>
              <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden shadow-lg border-2 border-primary-foreground/20">
                <Image
                  src="https://placehold.co/800x600.png"
                  alt="GreenTrace Electrolyzer"
                  width={800}
                  height={600}
                  data-ai-hint="electrolyzer product"
                  className="rounded-md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Key Features</h2>
              <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
                Our electrolyzers combine innovative technology with robust engineering to deliver exceptional performance.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {productFeatures.map((feature, index) => (
                <Card key={index} className="bg-card shadow-lg overflow-hidden flex flex-col">
                  <CardHeader className="pb-2">
                    <div className="w-16 h-16 mb-4">
                      <Image
                        src={feature.icon}
                        alt={feature.iconAlt}
                        width={64}
                        height={64}
                        data-ai-hint={feature.iconAlt}
                      />
                    </div>
                    <CardTitle className="text-xl font-semibold text-foreground">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Product Models Section */}
        <section id="product-models" className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Our Product Range</h2>
              <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
                From small-scale applications to industrial-sized solutions, we have the right electrolyzer for your needs.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {productModels.map((model, index) => (
                <Card key={index} className="bg-card shadow-lg overflow-hidden flex flex-col group">
                  <div className="relative w-full aspect-[4/3] overflow-hidden">
                    <Image
                      src={model.image}
                      alt={model.imageAlt}
                      width={600}
                      height={400}
                      className="transition-transform duration-500 group-hover:scale-105"
                      data-ai-hint={model.imageAlt}
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-xl font-semibold text-foreground">{model.name}</CardTitle>
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        {model.capacity}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground mb-6">{model.description}</p>
                    <AnimatedButton onClick={openEnquiryModal} variant="secondary" className="w-full">
                      Request Information
                    </AnimatedButton>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-primary text-primary-foreground p-8 md:p-16 rounded-lg shadow-xl border-2 border-primary">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Transform Your Hydrogen Production?
                </h2>
                <p className="text-xl mb-8 text-primary-foreground/90">
                  Contact our team today to discuss how our electrolyzers can meet your specific requirements.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <AnimatedButton onClick={openEnquiryModal} variant="onCardLime" className="px-8 py-4 text-lg">
                    Contact Sales
                  </AnimatedButton>
                  <AnimatedButton href="#product-models" variant="secondary" className="px-8 py-4 text-lg">
                    View Products
                  </AnimatedButton>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <NewsletterSection />
      </main>
      <Footer />
      <EnquiryModal isOpen={isEnquiryModalOpen} onClose={closeEnquiryModal} />
    </div>
  );
}