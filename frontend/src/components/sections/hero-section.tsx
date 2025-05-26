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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Text content section */}
        <div className="pt-24 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center w-full">
            <div className="md:col-span-7">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[100px] xl:text-[110px] font-bold tracking-tight leading-snug md:leading-tight text-left">
                <div><span className="text-primary">tracing</span></div>
                <div className="sm:pl-6 md:pl-10 lg:pl-12"><span className="text-foreground">a </span><span className="text-primary">greener</span></div>
                <div className="sm:pl-12 md:pl-20 lg:pl-24"><span className="text-primary">tomorrow</span></div>
              </h1>
            </div>
            <div className=" flex items-end  md:col-span-5 md:pl-8 h-full pb-6">
              <p className="text-base sm:text-lg text-muted-foreground text-left  font-bold">
                  Scaling the hydrogen economy for effective, affordable and accessible fuel for all
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Image section with blue border */}
      <div className="container mx-auto  pb-16">
        <div className="border-4 border-primary rounded-lg overflow-hidden">
          <div className="relative w-full h-[50vh] md:h-[60vh]">
            <Image
              src="/assests/forest-road.jpeg"
              alt="Aerial view of a road through a forest"
              fill
              className="object-cover"
              quality={90}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
