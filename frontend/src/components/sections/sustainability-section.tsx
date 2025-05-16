import Image from "next/image";
import { AnimatedButton } from "@/components/ui/animated-button";
import { Card, CardContent } from "@/components/ui/card";

const sustainabilityPoints = [
  {
    iconUrl: "https://cdn.prod.website-files.com/63d35ccda0cfd5a1ddf98b4a/63da70ff624c0e64fe4a7d39_Frame%20594.svg",
    title: "Renewable",
    description: "The most crucial thing is that this process is powered entirely by renewable energy.",
    dataAiHint: "renewable energy icon",
  },
  {
    iconUrl: "https://cdn.prod.website-files.com/63d35ccda0cfd5a1ddf98b4a/63da710e3b129b4f9fcda7cc_Frame%20595.svg",
    title: "Eco-friendly",
    description: "It is produced by splitting water (H2O) into hydrogen and oxygen. This means that no CO2 is created during production.",
    dataAiHint: "eco friendly icon",
  },
];

export function SustainabilitySection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Sustainability</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          <div className="relative aspect-[4/3] md:aspect-auto w-full rounded-lg overflow-hidden shadow-lg border-2 border-primary">
            <Image
              src="https://cdn.prod.website-files.com/63d35ccea0cfd57bdaf98b69/63fdd74b760da500a56a057b_Sustainability%20img.png"
              alt="Sustainable green energy concept"
              layout="fill"
              objectFit="cover"
              data-ai-hint="nature sustainability"
              className="transition-transform duration-500 hover:scale-105 rounded-md"
            />
          </div>
          <div className="space-y-8 flex flex-col">
            {sustainabilityPoints.map((point) => (
              <Card key={point.title} className="bg-card shadow-md flex-grow"> {/* Will get 1px blue border from globals.css */}
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-4">
                    <Image 
                      src={point.iconUrl} 
                      alt={point.title} 
                      width={48} 
                      height={48} 
                      data-ai-hint={point.dataAiHint}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">{point.title}</h3>
                  <p className="text-sm text-muted-foreground flex-grow">{point.description}</p>
                </CardContent>
              </Card>
            ))}
            <Card className="bg-primary/90 text-primary-foreground shadow-lg flex-grow rounded-lg"> {/* Will get 1px blue border from globals.css */}
              <CardContent className="p-8 flex flex-col justify-center h-full">
                <p className="text-xs font-semibold uppercase tracking-wider mb-1 text-primary-foreground/80">Collaborate with Us</p>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">To create a Greener tomorrow</h3>
                <AnimatedButton href="/contact" variant="onCardLime" className="self-start mt-auto">
                  Get in touch
                </AnimatedButton>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
