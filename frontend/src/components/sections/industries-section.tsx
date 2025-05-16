import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const industries = [
  {
    imageUrl: "https://cdn.prod.website-files.com/63d35ccea0cfd57bdaf98b69/63d767529c1d37eb854f02ec_oil%20refinery.png",
    title: "Oil Refineries",
    description: "Newtrace's green hydrogen can reduce up to 360 Mt of CO2 emissions in refineries by replacing traditional hydrogen used for crude oil desulfurization.",
    dataAiHint: "oil refinery"
  },
  {
    imageUrl: "https://cdn.prod.website-files.com/63d35ccea0cfd57bdaf98b69/63d35ccea0cfd5f1cff98c3f_post-06-preview.webp",
    title: "Chemical Industry",
    description: "Newtrace's green hydrogen helps the chemical industry offset 441 Mt of CO2 emissions in the production of ammonia and methanol.",
    dataAiHint: "chemical plant"
  },
  {
    imageUrl: "https://cdn.prod.website-files.com/63d35ccea0cfd57bdaf98b69/63d7699454c09d5fd489951b_Steel%20and%20cement.png",
    title: "Steel and Cement",
    description: "Green hydrogen offsets CO2 emissions and leads to energy security in the Steel and Cement industries by producing hydrogen on-site instead of burning coke.",
    dataAiHint: "steel factory"
  },
  {
    imageUrl: "https://cdn.prod.website-files.com/63d35ccea0cfd57bdaf98b69/63d76a0220934a78034c302e_storage.png",
    title: "Renewable Energy Storage",
    description: "Green hydrogen is the best option for long-term energy storage, converting excess renewable energy into hydrogen for use during periods of low renewable generation.",
    dataAiHint: "battery storage"
  },
  {
    imageUrl: "https://cdn.prod.website-files.com/63d35ccea0cfd57bdaf98b69/63d76a313d52f5df9471b0d2_mobility.png",
    title: "Mobility",
    description: "Converting long-haul transport such as freight, shipping and aviation to green hydrogen fuel cells or engines can significantly reduce global CO2 emissions by addressing 52% of transportation emissions.",
    dataAiHint: "electric truck"
  },
];

export function IndustriesSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Industries and Green Hydrogen</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <Card key={index} className="bg-card shadow-lg overflow-hidden flex flex-col group">
              <div className="relative w-full aspect-[16/9] overflow-hidden">
                <Image
                  src={industry.imageUrl}
                  alt={industry.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-105"
                  data-ai-hint={industry.dataAiHint}
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-foreground">{industry.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground">{industry.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
