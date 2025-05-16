import Image from "next/image";

export function HeroSection() {
  return (
    <section 
      className="bg-background" 
      style={{ 
        backgroundImage: "url('https://cdn.prod.website-files.com/63d35ccda0cfd5a1ddf98b4a/63d8920eb6b66d075f176d99_Grid%20for%20website.svg')",
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto',
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8"> {/* Container for text content */}
        {/* Adjusted pt to be slightly more than header height (5rem = 80px, pt-24 = 96px) 
            min-h ensures content area has space, pb gives space before image */}
        <div className="min-h-[calc(70vh-5rem)] md:min-h-[calc(75vh-5rem)] flex items-center pt-24 pb-12 md:pb-16"> 
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center w-full">
            <div className="md:col-span-3">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[100px] xl:text-[110px] font-bold tracking-tight leading-snug md:leading-tight text-left">
                <div><span className="text-primary">tracing</span></div>
                <div className="sm:pl-6 md:pl-10 lg:pl-12"><span className="text-foreground">a </span><span className="text-primary">greener</span></div>
                <div className="sm:pl-12 md:pl-20 lg:pl-24"><span className="text-primary">tomorrow</span></div>
              </h1>
            </div>
            <div className="md:col-span-2 md:pl-8">
              <p className="text-base sm:text-lg text-muted-foreground text-left">
                Scaling the hydrogen economy for effective, affordable and accessible fuel for all
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Full-width image section below the text content */}
      <div className="w-full h-[30vh] md:h-[25vh] relative"> 
        <Image
          src="https://cdn.prod.website-files.com/63d35ccea0cfd57bdaf98b69/63e0c595a919b054e651457c_HeroBanner%20img.png"
          alt="Aerial view of a road through a forest"
          data-ai-hint="nature road forest"
          layout="fill"
          objectFit="cover"
          quality={90}
          priority
        />
      </div>
    </section>
  );
}
