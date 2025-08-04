
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const NarpavaiPromiseSection = (): JSX.Element => {
  const promiseCards = [
    {
      id: 1,
      title: "100% Raw & Unprocessed",
      image: "/figmaAssets/group-1000005062-1.png",
    },
    {
      id: 2,
      title: "Ethically Sourced from Trusted Beekeepers",
      image: "/figmaAssets/group-1000005062-2.png",
    },
    {
      id: 3,
      title: "Lab Tested for Purity",
      image: "/figmaAssets/group-1000005062-3.png",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-[#fbd68f] to-[#f5dc6f] py-8 md:py-12">
      <div className="container mx-auto px-4">
        <h2 className="font-['Alata',Helvetica] text-[#843503] text-xl md:text-2xl lg:text-3xl mb-6 md:mb-8 text-center md:text-left">
          The Narpavai Promise
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {promiseCards.map((card) => (
            <Card key={card.id} className="rounded-2xl overflow-hidden bg-white/80 backdrop-blur-sm shadow-lg">
              <CardContent className="p-0">
                <div className="relative h-32 md:h-40 lg:h-48">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 md:p-4">
                    <h3 className="font-['Poppins',Helvetica] font-semibold text-white text-xs md:text-sm lg:text-base leading-tight">
                      {card.title}
                    </h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
