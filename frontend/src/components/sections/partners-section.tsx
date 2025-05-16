import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card"; 
import { Megaphone, ArrowUpRight } from "lucide-react"; // Updated icons
import { AnimatedButton } from "../ui/animated-button";


const partnersLogos = [
  { name: "Sequoia", imageUrl: "https://cdn.prod.website-files.com/63d35ccda0cfd5a1ddf98b4a/6480a7a8e0ff262bec9b4e3e_Logo-Partners-Sequoia.png", dataAiHint: "company logo" },
  { name: "Speciale Invest", imageUrl: "https://cdn.prod.website-files.com/63d35ccda0cfd5a1ddf98b4a/646c97377964a3d34e8ecebf_Logo-Partners-SPINV.png", dataAiHint: "company logo" },
  { name: "Micelio", imageUrl: "https://cdn.prod.website-files.com/63d35ccda0cfd5a1ddf98b4a/646c9a72119fb89ec36f8735_Logo-Partners-Micelio.png", dataAiHint: "company logo" },
  { name: "Aavishkaar Group", imageUrl: "https://cdn.prod.website-files.com/63d35ccda0cfd5a1ddf98b4a/647f61e6290c93d0d308d7ab_Logo-Partners-AvishkarGrp.png", dataAiHint: "company logo" },
  { name: "Startup India", imageUrl: "https://cdn.prod.website-files.com/63d35ccda0cfd5a1ddf98b4a/646c9a716881390c1064b639_Logo-Partners-StartupIND.png", dataAiHint: "company logo" },
  { name: "NSRCEL", imageUrl: "https://cdn.prod.website-files.com/63d35ccda0cfd5a1ddf98b4a/646c9a724ceb1cb290ea5995_Logo-Partners-NSRCEL.png", dataAiHint: "company logo" },
];

export function PartnersSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-primary text-primary-foreground shadow-lg mb-12 overflow-hidden rounded-lg border-2 border-primary">
            <CardContent className="p-8 md:p-10"> 
                <p className="text-lg font-semibold text-primary-foreground/90 mb-2">Partners</p> {/* Reduced font size */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground">Partners in our Growth</h3>
                    <AnimatedButton href="/contact" variant="onCardLime" className="mt-4 md:mt-0 flex-shrink-0">
                        Get in touch
                    </AnimatedButton>
                </div>
            </CardContent>
        </Card>

        <Link 
          href="https://www.crunchbase.com/organization/newtrace" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex items-center justify-between bg-accent text-accent-foreground p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-12 border-2 border-primary"
        >
          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="bg-primary rounded-full p-2 flex-shrink-0">
              <Megaphone className="h-5 w-5 text-primary-foreground" />
            </div>
            <p className="text-sm sm:text-base">
              We are pleased to announce our latest fundraise of $5.65M. Head over to our <span className="font-semibold hover:underline">Crunchbase</span> to know more.
            </p>
          </div>
          <div className="bg-primary rounded-full p-2 flex-shrink-0">
            <ArrowUpRight className="h-5 w-5 text-primary-foreground" />
          </div>
        </Link>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {partnersLogos.map((logo) => (
            <Card key={logo.name} className="bg-card p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 aspect-square flex items-center justify-center">
              <Image
                src={logo.imageUrl}
                alt={logo.name}
                width={100}
                height={100}
                objectFit="contain"
                className="transition-transform duration-300 hover:scale-105"
                data-ai-hint={logo.dataAiHint}
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
