import Image from "next/image";
import { AnimatedButton } from "@/components/ui/animated-button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Zap, Scaling, Leaf } from "lucide-react"; // Placeholder icons

const features = [
  {
    iconUrl: "https://cdn.prod.website-files.com/63d35ccda0cfd5a1ddf98b4a/63da70a3b6f7142faf5bb717_Frame%20590.svg",
    title: "Innovative technology",
    description: "Our electrolyzer is based on a patent-pending precision fluid engineering design for gas separation which allows us to obtain ultrapure hydrogen with minimal processing.",
    dataAiHint: "innovation technology",
  },
  {
    iconUrl: "https://cdn.prod.website-files.com/63d35ccda0cfd5a1ddf98b4a/63da70b59517430bc4b3b5ce_Frame%20591.svg",
    title: "Capex reduction",
    description: "Our innovative electrolyzer technology leads to a 70% reduction in the number of core components with zero usage of rare earth metals and a 30% reduction in manufacturing cost.",
    dataAiHint: "finance graph",
  },
  {
    iconUrl: "https://cdn.prod.website-files.com/63d35ccda0cfd5a1ddf98b4a/63da70c7a385af3d13b88dbb_Frame%20592.svg",
    title: "Improved electrocatalyst",
    description: "We use abundant earth metal-based electrocatalysts which allows us to achieve performance close to that of PEM electrolyzers at or below the cost of an alkaline electrolyzer.",
    dataAiHint: "chemistry science",
  },
];

export function ElectrolyzerFeaturesSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              <span className="block text-primary">hydrogen</span>
              <span className="block ml-4 sm:ml-8 text-foreground">electro-</span>
              <span className="block ml-2 sm:ml-4 text-primary">lyzers</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore the most cost-effective and environmentally responsible electrolysis solution in the world that solves the fuel problem forever. Our high-performing hydrogen generator set new standards in the energy industry by producing green hydrogen in a zero-carbon process.
            </p>
             <AnimatedButton href="/product" variant="primary" className="mt-6">
                Explore more
            </AnimatedButton>
          </div>
          <div className="space-y-8">
            {features.map((feature) => (
              <Card key={feature.title} className="bg-card border shadow-lg overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                    <div className="flex-shrink-0">
                      <Image 
                        src={feature.iconUrl} 
                        alt={feature.title} 
                        width={60} 
                        height={60}
                        data-ai-hint={feature.dataAiHint}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-card-foreground mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
