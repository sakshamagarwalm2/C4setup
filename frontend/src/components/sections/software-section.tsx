import Image from "next/image";
import { AnimatedButton } from "@/components/ui/animated-button";

export function SoftwareSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative aspect-[16/7] w-full rounded-lg overflow-hidden shadow-2xl border-2 border-primary">
          <Image
            src="https://placehold.co/1200x525.png" 
            alt="Software application interface"
            layout="fill"
            objectFit="cover"
            data-ai-hint="software interface"
            className="opacity-80 rounded-md"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/50 to-transparent flex items-center p-8 md:p-16">
            <div className="max-w-md text-white">
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-2 text-primary-foreground/80">Software</h3>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
                Software application powering the system
              </h2>
              <AnimatedButton href="/product" variant="onCardLime">
                Explore more
              </AnimatedButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
