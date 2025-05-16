import Image from "next/image";
import { AnimatedButton } from "@/components/ui/animated-button";

export function H2ElectrolyzersSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">H2 Electrolyzers</h2>
        </div>
        <div className="relative aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl group border-2 border-primary">
          <Image
            src="https://cdn.prod.website-files.com/63d35ccea0cfd57bdaf98b69/63dcb1a1bd5fd11b5ae3d6a5_Group%20484.png"
            alt="H2 Electrolyzer Unit"
            layout="fill"
            objectFit="cover"
            data-ai-hint="industrial equipment"
            className="rounded-md" 
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300 flex items-end p-8">
            <div className="text-white">
              <h3 className="text-3xl md:text-4xl font-semibold mb-2">Versatile</h3>
              <p className="text-lg md:text-xl opacity-90">Best of engineering for a better tomorrow.</p>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <AnimatedButton href="/product" variant="primary">
            View all Features
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
}
