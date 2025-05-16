import Image from "next/image";
import { AnimatedButton } from "@/components/ui/animated-button";
import { Card, CardContent } from "@/components/ui/card";

export function JoinRevolutionSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Join the revolution</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden shadow-lg border-2 border-primary">
            <Image
              src="https://placehold.co/600x450.png" 
              alt="Team working on green hydrogen technology"
              layout="fill"
              objectFit="cover"
              data-ai-hint="team collaboration office"
              className="transition-transform duration-500 hover:scale-105 rounded-md"
            />
          </div>
          <Card className="bg-card shadow-lg"> {/* Will get 1px blue border from globals.css */}
            <CardContent className="p-8 md:p-10">
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Passionate about green hydrogen?
              </h3>
              <p className="text-muted-foreground mb-8">
                At Newtrace, we are determined and relentless in our pursuit of excellence to develop commercially viable and scalable green hydrogen technology. Join us and work on innovations that deliver impact by enabling a more responsible and sustainable de-carbonized future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <AnimatedButton 
                  href="https://newtrace.zohorecruit.in/jobs/Careers" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  variant="primary"
                  className="w-full sm:w-auto"
                >
                  View Openings
                </AnimatedButton>
                <AnimatedButton 
                  href="/careers" 
                  variant="secondary"
                  className="w-full sm:w-auto"
                >
                  Careers @Newtrace
                </AnimatedButton>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
