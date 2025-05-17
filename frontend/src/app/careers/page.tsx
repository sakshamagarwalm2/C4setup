import { Metadata } from "next";
import Image from "next/image";
import { AnimatedButton } from "@/components/ui/animated-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Careers | GreenTrace",
  description: "Join our team and help build a sustainable future with green hydrogen technology.",
};

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

// This imports the Careers page component from the Pages folder
import CareersPage from '@/Pages/Careers';

export default function Page() {
  return <CareersPage />;
}