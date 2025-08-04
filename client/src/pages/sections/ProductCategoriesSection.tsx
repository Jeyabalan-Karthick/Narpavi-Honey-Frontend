
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const ProductCategoriesSection = (): JSX.Element => {
  // Data for product category cards
  const categoryCards = [
    {
      id: 1,
      title: "Pure Honey",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imagePath: "/figmaAssets/add-a-little-bit-of-body-text--6--1.png",
      highlighted: false,
    },
    {
      id: 2,
      title: "Value Added Product",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imagePath: "/figmaAssets/add-a-little-bit-of-body-text--6--1-1.png",
      highlighted: true,
    },
    {
      id: 3,
      title: "Pure Honey",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imagePath: "/figmaAssets/add-a-little-bit-of-body-text--6--1-2.png",
      highlighted: false,
    },
  ];

  return (
    <section className="relative w-full bg-gradient-to-b from-[#ffefd2] to-[#fbd690] py-16 overflow-hidden">
      {/* Bee decoration */}
      <img
        className="absolute w-24 h-20 lg:w-[178px] lg:h-[172px] top-4 right-4 lg:top-[16px] lg:right-[200px] object-cover z-10"
        alt="Bee"
        src="/figmaAssets/bee-3.png"
      />

      <div className="container mx-auto px-4 relative z-20">
        <div className="text-center lg:text-left mb-12">
          <h2 className="font-['Alata',Helvetica] text-[#843503] text-3xl lg:text-[35px] mb-4">
            Shop By Category
          </h2>

          <p className="font-['Poppins',Helvetica] font-light text-xl lg:text-2xl text-[#595959]">
            Ethically Sourced from Trusted Beekeepers
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-8">
          {categoryCards.map((card) => (
            <Card
              key={card.id}
              className={`w-full max-w-[331px] rounded-[20px] overflow-hidden bg-white shadow-lg transition-transform hover:scale-105 ${
                card.highlighted ? "border-2 border-[#7e4a1d] ring-2 ring-[#7e4a1d] ring-opacity-20" : "border border-gray-200"
              }`}
            >
              <CardContent className="p-6 lg:p-8">
                <div className="relative mb-6">
                  <div
                    className="w-full h-[200px] lg:h-[158px] rounded-[15px] bg-cover bg-center shadow-inner"
                    style={{ backgroundImage: `url(${card.imagePath})` }}
                  />
                </div>

                <h3 className="font-['Poppins',Helvetica] font-semibold text-xl lg:text-xl text-[#843503] mb-3 text-center">
                  {card.title}
                </h3>

                <p className="font-['Poppins',Helvetica] font-normal text-sm text-[#6b7280] mb-6 text-center leading-relaxed">
                  {card.description}
                </p>

                <Button className="w-full h-12 bg-[#7e4a1d] rounded-[10px] text-white text-lg font-['Poppins',Helvetica] font-medium hover:bg-[#6a3d18] transition-all duration-300 shadow-lg hover:shadow-xl">
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
