import { Metadata } from "next";
import Image from "next/image";
import { AnimatedButton } from "@/components/ui/animated-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Products | GreenTrace",
  description: "Explore our innovative green hydrogen electrolyzer products and solutions.",
};

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

// This imports the Product page component from the Pages folder
import ProductPage from '@/Pages/Product';

export default function Page() {
  return <ProductPage />;
}