import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const FeaturedProductsSection = (): JSX.Element => {
  // Feature card data for mapping
  const featureCards = [
    {
      id: 1,
      position: "top-[161px] left-[115px]",
      iconSrc: "/figmaAssets/group-1000005062.png",
    },
    {
      id: 2,
      position: "top-[437px] left-[55px]",
      iconSrc: "/figmaAssets/group-1000005062-1.png",
    },
    {
      id: 3,
      position: "top-[667px] left-[216px]",
      iconSrc: "/figmaAssets/group-1000005062-2.png",
    },
    {
      id: 4,
      position: "top-[667px] left-[930px]",
      iconSrc: "/figmaAssets/group-1000005062-3.png",
    },
    {
      id: 5,
      position: "top-[437px] left-[1002px]",
      iconSrc: "/figmaAssets/group-1000005062-4.png",
    },
    {
      id: 6,
      position: "top-[161px] left-[951px]",
      iconSrc: "/figmaAssets/group-1000005062-5.png",
    },
  ];

  return (
    <section className="relative w-full py-14 bg-[#fffbe2] overflow-hidden">
      <div className="container relative mx-auto px-4 max-w-[1324px]">
        <h2 className="text-5xl font-normal text-[#7e4a1d] [font-family:'Alata',Helvetica] leading-[57.6px] mb-10">
          Why choose Us ?
        </h2>

        <div className="relative">
          {/* Center product image */}
          <div className="flex justify-center">
            <img
              className="w-[743px] h-[705px] object-cover"
              alt="Artboard"
              src="/figmaAssets/artboard-3-4x-1.png"
            />
          </div>

          {/* Feature cards positioned around the product */}
          {featureCards.map((card) => (
            <Card
              key={card.id}
              className={`absolute w-[322px] h-[109px] bg-transparent border-none shadow-none ${card.position}`}
            >
              <CardContent className="p-0 flex">
                <div className="relative">
                  <img
                    className="w-14 h-[66px] -mt-1 -ml-1"
                    alt="Feature icon"
                    src={card.iconSrc}
                  />
                </div>
                <div className="ml-[59px] mt-3">
                  <h3 className="text-[22px] font-medium text-black [font-family:'Poppins',Helvetica] leading-normal">
                    Lorem ipsum
                  </h3>
                  <p className="mt-[43px] text-lg font-medium text-[#7e7d7d] [font-family:'Poppins',Helvetica] leading-normal w-[263px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
