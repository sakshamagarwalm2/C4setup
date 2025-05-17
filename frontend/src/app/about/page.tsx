import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | GreenTrace",
  description: "Learn about our mission, vision, and the team behind GreenTrace.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">About GreenTrace</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg text-muted-foreground mb-4">
            At GreenTrace, we're on a mission to enable cost-effective and reliable access to green hydrogen, 
            accelerating the world's transition to sustainable energy solutions.
          </p>
          <p className="text-lg text-muted-foreground">
            We believe that green hydrogen is a critical component in the global effort to reduce carbon emissions 
            and combat climate change. Our innovative technologies are designed to make green hydrogen production 
            more efficient, affordable, and accessible to industries worldwide.
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Our Vision</h2>
          <p className="text-lg text-muted-foreground">
            We envision a future where green hydrogen powers industries, transportation, and energy systems, 
            creating a cleaner, more sustainable world for generations to come. Through continuous innovation 
            and collaboration, we aim to be at the forefront of the green hydrogen revolution.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Our Team</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our team consists of passionate engineers, scientists, and industry experts dedicated to pushing 
            the boundaries of green hydrogen technology. With diverse backgrounds and expertise, we bring a 
            unique perspective to solving the complex challenges of sustainable energy production.
          </p>
          
          {/* Team members could be added here */}
        </section>
      </div>
    </div>
  );
}