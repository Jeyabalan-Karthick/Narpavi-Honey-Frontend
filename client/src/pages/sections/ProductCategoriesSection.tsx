
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const ProductCategoriesSection = (): JSX.Element => {
  const categoryCards = [
    {
      id: 1,
      title: "Pure Honey",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imagePath: "/figmaAssets/add-a-little-bit-of-body-text--6--1.png",
      highlighted: false,
    },
    {
      id: 2,
      title: "Value Added Product",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imagePath: "/figmaAssets/add-a-little-bit-of-body-text--6--1-1.png",
      highlighted: true,
    },
    {
      id: 3,
      title: "Pure Honey",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imagePath: "/figmaAssets/add-a-little-bit-of-body-text--6--1-2.png",
      highlighted: false,
    },
  ];

  return (
    <section className="relative w-full bg-gradient-to-b from-[#f5dc6f] to-[#fbd68f] py-8 md:py-12 lg:py-16 overflow-hidden">
      {/* Bee decoration */}
      <img
        className="absolute w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 top-4 right-4 md:top-6 md:right-8 lg:top-8 lg:right-16 object-cover z-10"
        alt="Bee"
        src="/figmaAssets/bee-3.png"
      />

      <div className="container mx-auto px-4 relative z-20">
        <div className="text-center md:text-left mb-6 md:mb-8 lg:mb-12">
          <h2 className="font-['Alata',Helvetica] text-[#843503] text-xl md:text-2xl lg:text-3xl mb-2 md:mb-4">
            Shop By Category
          </h2>
          <p className="font-['Poppins',Helvetica] font-light text-sm md:text-lg lg:text-xl text-[#595959]">
            Ethically Sourced from Trusted Beekeepers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {categoryCards.map((card) => (
            <Card
              key={card.id}
              className={`rounded-2xl overflow-hidden bg-white shadow-lg transition-transform hover:scale-105 ${
                card.highlighted ? "border-2 border-[#7e4a1d] ring-2 ring-[#7e4a1d] ring-opacity-20" : "border border-gray-200"
              }`}
            >
              <CardContent className="p-4 md:p-6">
                <div className="relative mb-4 md:mb-6">
                  <div
                    className="w-full h-32 md:h-40 lg:h-48 rounded-xl bg-cover bg-center shadow-inner"
                    style={{ backgroundImage: `url(${card.imagePath})` }}
                  />
                </div>

                <h3 className="font-['Poppins',Helvetica] font-semibold text-base md:text-lg lg:text-xl text-[#843503] mb-2 md:mb-3 text-center">
                  {card.title}
                </h3>

                <p className="font-['Poppins',Helvetica] font-normal text-xs md:text-sm text-[#6b7280] mb-4 md:mb-6 text-center leading-relaxed">
                  {card.description}
                </p>

                <Button className="w-full h-10 md:h-12 bg-[#7e4a1d] rounded-lg text-white text-sm md:text-base font-['Poppins',Helvetica] font-medium hover:bg-[#6a3d18] transition-all duration-300 shadow-lg hover:shadow-xl">
                  View Collection
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
