import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const WhyChooseUsSection = (): JSX.Element => {
  const features = [
    {
      id: 1,
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: "/figmaAssets/group-1000005062.png",
      position: "top-8 left-8",
    },
    {
      id: 2,
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: "/figmaAssets/group-1000005062.png",
      position: "top-8 right-8",
    },
    {
      id: 3,
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: "/figmaAssets/group-1000005062.png",
      position: "middle-left",
    },
    {
      id: 4,
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: "/figmaAssets/group-1000005062.png",
      position: "middle-right",
    },
    {
      id: 5,
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: "/figmaAssets/group-1000005062.png",
      position: "bottom-8 left-8",
    },
    {
      id: 6,
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: "/figmaAssets/group-1000005062.png",
      position: "bottom-8 right-8",
    },
  ];

  return (
    <section className="relative w-full bg-gradient-to-b from-[#fbd68f] to-[#f5dc6f] py-8 md:py-12 lg:py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="font-['Alata',Helvetica] text-[#843503] text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-8 md:mb-12 lg:mb-16 text-center md:text-left">
          Why choose Us ?
        </h2>

        <div className="relative max-w-6xl mx-auto">
          {/* Center product image */}
          <div className="flex justify-center mb-8 lg:mb-0">
            <img 
              className="w-64 md:w-96 lg:w-[500px] xl:w-[600px] h-auto object-contain" 
              alt="Honey jar with honeycomb" 
              src="/figmaAssets/artboard-3-4x-1.png"
            />
          </div>

          {/* Feature cards - Mobile stacked, Desktop positioned around product */}
          <div className="lg:absolute lg:inset-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-6 lg:gap-0">
            {features.map((feature, index) => (
              <Card 
                key={feature.id} 
                className={`
                  bg-white/90 backdrop-blur-sm rounded-xl shadow-lg max-w-xs mx-auto lg:mx-0 lg:absolute
                  ${index === 0 ? 'lg:top-8 lg:left-8' : ''}
                  ${index === 1 ? 'lg:top-8 lg:right-8' : ''}
                  ${index === 2 ? 'lg:top-1/2 lg:left-0 lg:-translate-y-1/2' : ''}
                  ${index === 3 ? 'lg:top-1/2 lg:right-0 lg:-translate-y-1/2' : ''}
                  ${index === 4 ? 'lg:bottom-8 lg:left-8' : ''}
                  ${index === 5 ? 'lg:bottom-8 lg:right-8' : ''}
                `}
              >
                <CardContent className="p-4 md:p-6 text-center">
                  <div className="mb-3 md:mb-4">
                    <img 
                      src={feature.icon} 
                      alt={feature.title}
                      className="w-8 h-8 md:w-10 md:h-10 mx-auto"
                    />
                  </div>
                  <h3 className="font-['Poppins',Helvetica] font-semibold text-[#843503] text-sm md:text-base mb-2">
                    {feature.title}
                  </h3>
                  <p className="font-['Poppins',Helvetica] text-[#666] text-xs md:text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};