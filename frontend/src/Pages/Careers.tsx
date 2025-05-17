"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { useState } from "react";
import { EnquiryModal } from "@/components/ui/enquiry-modal";
import Image from "next/image";
import { AnimatedButton } from "@/components/ui/animated-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { NewsletterSection } from "@/components/sections/newsletter-section";

const benefits = [
  {
    title: "Innovative Environment",
    description: "Work on cutting-edge green hydrogen technology that's making a real impact on climate change.",
    icon: "https://placehold.co/100x100.png",
    iconAlt: "Innovation icon"
  },
  {
    title: "Professional Growth",
    description: "Continuous learning opportunities, mentorship programs, and career advancement paths.",
    icon: "https://placehold.co/100x100.png",
    iconAlt: "Growth icon"
  },
  {
    title: "Work-Life Balance",
    description: "Flexible work arrangements, generous time off, and wellness programs to keep you at your best.",
    icon: "https://placehold.co/100x100.png",
    iconAlt: "Balance icon"
  },
  {
    title: "Inclusive Culture",
    description: "A diverse and supportive workplace where every voice is valued and respected.",
    icon: "https://placehold.co/100x100.png",
    iconAlt: "Diversity icon"
  }
];

const openPositions = [
  {
    title: "Senior Electrochemical Engineer",
    department: "R&D",
    location: "Bangalore, India",
    type: "Full-time"
  },
  {
    title: "Software Developer - IoT Systems",
    department: "Software",
    location: "Bangalore, India",
    type: "Full-time"
  },
  {
    title: "Manufacturing Process Engineer",
    department: "Production",
    location: "Bangalore, India",
    type: "Full-time"
  },
  {
    title: "Business Development Manager",
    department: "Sales",
    location: "Bangalore, India",
    type: "Full-time"
  },
  {
    title: "Product Marketing Specialist",
    department: "Marketing",
    location: "Bangalore, India",
    type: "Full-time"
  },
  {
    title: "Quality Assurance Engineer",
    department: "Quality",
    location: "Bangalore, India",
    type: "Full-time"
  }
];

export default function CareersPage() {
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
                  Join Our Mission for a Greener Future
                </h1>
                <p className="text-xl mb-8 text-primary-foreground/90">
                  At GreenTrace, we're building the technology that will power a sustainable world. Join our team of innovators, engineers, and changemakers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <AnimatedButton href="#open-positions" variant="onCardLime">
                    View Open Positions
                  </AnimatedButton>
                  <AnimatedButton 
                    href="https://newtrace.zohorecruit.in/jobs/Careers" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    variant="secondary"
                  >
                    Apply Now
                  </AnimatedButton>
                </div>
              </div>
              <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden shadow-lg border-2 border-primary-foreground/20">
                <Image
                  src="https://placehold.co/800x600.png"
                  alt="GreenTrace team working together"
                  width={800}
                  height={600}
                  data-ai-hint="team collaboration"
                  className="rounded-md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Culture Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden shadow-lg border-2 border-primary">
                <Image
                  src="https://placehold.co/800x600.png"
                  alt="GreenTrace office culture"
                  width={800}
                  height={600}
                  data-ai-hint="office culture"
                  className="rounded-md"
                />
              </div>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Our Culture</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  At GreenTrace, we foster a culture of innovation, collaboration, and impact. We're passionate about our mission to accelerate the world's transition to green hydrogen and are looking for team members who share our vision.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  We believe in empowering our employees to take ownership of their work, encouraging creative problem-solving, and celebrating diverse perspectives. Our team is united by a common purpose: creating technology that makes a difference.
                </p>
                <p className="text-lg text-muted-foreground">
                  If you're excited about tackling climate change through innovative engineering and want to be part of a fast-growing team, we'd love to hear from you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Why Work With Us</h2>
              <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
                We offer more than just a job. Join us for a rewarding career with these benefits and more.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="bg-card shadow-lg overflow-hidden flex flex-col">
                  <CardHeader className="pb-2">
                    <div className="w-16 h-16 mb-4">
                      <Image
                        src={benefit.icon}
                        alt={benefit.iconAlt}
                        width={64}
                        height={64}
                        data-ai-hint={benefit.iconAlt}
                      />
                    </div>
                    <CardTitle className="text-xl font-semibold text-foreground">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section id="open-positions" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Open Positions</h2>
              <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
                Explore our current openings and find your place in our team.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {openPositions.map((position, index) => (
                <Card key={index} className="bg-card shadow-lg overflow-hidden flex flex-col group hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-xl font-semibold text-foreground">{position.title}</CardTitle>
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        {position.department}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex flex-col space-y-2 mb-6">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <span className="font-medium mr-2">Location:</span> {position.location}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <span className="font-medium mr-2">Type:</span> {position.type}
                      </div>
                    </div>
                    <AnimatedButton 
                      href="https://newtrace.zohorecruit.in/jobs/Careers" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      variant="secondary"
                      className="w-full"
                    >
                      Apply Now
                    </AnimatedButton>
                  </CardContent>
                </Card>
              ))}
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