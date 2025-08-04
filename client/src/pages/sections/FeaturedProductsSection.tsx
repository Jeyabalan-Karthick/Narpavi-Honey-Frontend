
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const FeaturedProductsSection = (): JSX.Element => {
  // Feature card data for mapping
  const featureCards = [
    {
      id: 1,
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      iconSrc: "/figmaAssets/group-1000005062.png",
      position: "top-4 left-4 md:top-8 md:left-8 lg:top-16 lg:left-16",
    },
    {
      id: 2,
      title: "Lorem ipsum", 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      iconSrc: "/figmaAssets/group-1000005062-1.png",
      position: "top-1/2 -translate-y-1/2 left-0 md:left-4 lg:left-8",
    },
    {
      id: 3,
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
      iconSrc: "/figmaAssets/group-1000005062-2.png",
      position: "bottom-4 left-4 md:bottom-8 md:left-8 lg:bottom-16 lg:left-16",
    },
    {
      id: 4,
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      iconSrc: "/figmaAssets/group-1000005062-3.png",
      position: "top-4 right-4 md:top-8 md:right-8 lg:top-16 lg:right-16",
    },
    {
      id: 5,
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      iconSrc: "/figmaAssets/group-1000005062-4.png", 
      position: "top-1/2 -translate-y-1/2 right-0 md:right-4 lg:right-8",
    },
    {
      id: 6,
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      iconSrc: "/figmaAssets/group-1000005062-5.png",
      position: "bottom-4 right-4 md:bottom-8 md:right-8 lg:bottom-16 lg:right-16",
    },
  ];

  return (
    <section className="relative w-full py-8 md:py-14 bg-[#fffbe2] overflow-hidden">
      <div className="container relative mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-[#7e4a1d] [font-family:'Alata',Helvetica] leading-tight mb-8 md:mb-10">
          Why choose Us ?
        </h2>

        <div className="relative flex justify-center items-center min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">
          {/* Center honey jar image */}
          <div className="relative z-10 flex justify-center items-center">
            <img
              className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] object-contain"
              alt="Honey jar with honeycomb background"
              src="/figmaAssets/artboard-3-4x-1.png"
            />
          </div>

          {/* Feature cards positioned around the honey jar */}
          {featureCards.map((card) => (
            <Card
              key={card.id}
              className={`absolute w-[280px] md:w-[320px] lg:w-[350px] bg-transparent border-none shadow-none ${card.position}`}
            >
              <CardContent className="p-0 flex items-start gap-3 md:gap-4">
                <div className="flex-shrink-0">
                  <img
                    className="w-10 h-12 md:w-12 md:h-14 lg:w-14 lg:h-16 object-contain"
                    alt="Feature icon"
                    src={card.iconSrc}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg md:text-xl lg:text-[22px] font-medium text-black [font-family:'Poppins',Helvetica] leading-tight mb-2 md:mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm md:text-base lg:text-lg font-medium text-[#7e7d7d] [font-family:'Poppins',Helvetica] leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
