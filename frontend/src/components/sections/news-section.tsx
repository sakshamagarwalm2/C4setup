import Image from "next/image";
import Link from "next/link";

const newsLogos = [
  { name: "Inc42", href: "https://inc42.com/buzz/sequoia-aavishkaar-capital-backed-cleantech-startup-newtrace-bags-5-65-mn-funding/", imageUrl: "https://cdn.prod.website-files.com/63d35ccea0cfd57bdaf98b69/64b50af1ba379a33b5b0f8ce_Logo-Inc42.png", dataAiHint: "news logo" },
  { name: "TechInAsia", href: "https://www.techinasia.com/sequoia-leads-57m-round-for-climate-tech-startup-newtrace", imageUrl: "https://cdn.prod.website-files.com/63d35ccea0cfd57bdaf98b69/64882c86360411e37aca0c70_Logo-Newlinks-TechInAsia.png", dataAiHint: "news logo" },
  { name: "Economic Times", href: "https://economictimes.indiatimes.com/tech/funding/climate-tech-startup-newtrace-raises-5-6-million-in-funding-from-sequoia-others/articleshow/100656277.cms", imageUrl: "https://cdn.prod.website-files.com/63d35ccea0cfd57bdaf98b69/64882a84c2a298c710a9e312_Logo-Newlinks-ET.png", dataAiHint: "news logo" },
  { name: "YourStory", href: "https://yourstory.com/2023/05/climate-tech-startup-newtrace-sequoia-capital-aavishkaar-seed-funding", imageUrl: "https://cdn.prod.website-files.com/63d35ccea0cfd57bdaf98b69/641999bbfd363ec3ef51a5b4_Logo-YourStory.png", dataAiHint: "news logo" },
  { name: "Indian Express", href: "https://indianexpress.com/article/business/companies/newtrace-seed-funding-round-sequoia-capital-8638813/", imageUrl: "https://cdn.prod.website-files.com/63d35ccea0cfd57bdaf98b69/64881f6044dbd8a025d27da8_Logo-Newlinks-IndianExpress.png", dataAiHint: "news logo" },
  { name: "Business Line", href: "https://www.thehindubusinessline.com/companies/climate-tech-start-up-newtrace-raises-565-m-in-seed-funding/article66915847.ece", imageUrl: "https://cdn.prod.website-files.com/63d35ccea0cfd57bdaf98b69/64199a55897c1d59b4247e02_Logo-BusinessLine.png", dataAiHint: "news logo" },
];

export function NewsSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Newtrace in News</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {newsLogos.map((logo) => (
            <Link key={logo.name} href={logo.href} target="_blank" rel="noopener noreferrer" className="group">
              <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 aspect-[3/2] flex items-center justify-center">
                <Image
                  src={logo.imageUrl}
                  alt={logo.name}
                  width={120}
                  height={80}
                  objectFit="contain"
                  className="transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={logo.dataAiHint}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
