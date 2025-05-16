import { AnimatedButton } from "@/components/ui/animated-button";

interface CtaBannerSectionProps {
  onProductEnquiryClick: () => void;
}

export function CtaBannerSection({ onProductEnquiryClick }: CtaBannerSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary text-primary-foreground p-8 md:p-16 rounded-lg shadow-xl border-2 border-primary">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center lg:text-left max-w-2xl">
              See how H2 Electrolyzers can disrupt your industry
            </h2>
            <AnimatedButton 
              onClick={onProductEnquiryClick} 
              variant="onCardLime" 
              className="flex-shrink-0 px-8 py-4 text-lg"
            >
              Product Enquiry
            </AnimatedButton>
          </div>
        </div>
      </div>
    </section>
  );
}
