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
    <section className="relative w-full overflow-hidden">
      <div className="w-full bg-[#ffefd2] py-16">
        <img
          className="absolute w-[178px] h-[172px] top-[16px] right-[200px] object-cover"
          alt="Bee"
          src="/figmaAssets/bee-3.png"
        />

        <div className="container mx-auto px-4">
          <h2 className="font-['Alata',Helvetica] text-[35px] text-[#843503] mb-4">
            Shop By Category
          </h2>

          <p className="font-['Poppins',Helvetica] font-light text-2xl mb-12">
            Ethically Sourced from Trusted Beekeepers
          </p>

          <div className="flex flex-wrap justify-center gap-8 md:gap-[105px]">
            {categoryCards.map((card) => (
              <Card
                key={card.id}
                className={`w-[331px] rounded-[10px] overflow-hidden ${
                  card.highlighted ? "border-2 border-[#7e4a1d]" : ""
                }`}
              >
                <CardContent className="p-8">
                  <div
                    className="w-[266px] h-[158px] mb-4 bg-cover bg-center"
                    style={{ backgroundImage: `url(${card.imagePath})` }}
                  />

                  <h3 className="font-['Poppins',Helvetica] font-medium text-xl text-black mb-2">
                    {card.title}
                  </h3>

                  <p className="font-['Poppins',Helvetica] font-medium text-xs text-[#adadad] mb-6">
                    {card.description}
                  </p>

                  <Button className="w-full h-12 bg-[#7e4a1d] rounded-[5px] text-white text-2xl font-['Poppins',Helvetica] font-medium hover:bg-[#6a3d18] relative before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-[5px] before:[background:linear-gradient(97deg,rgba(126,74,29,1)_0%,rgba(126,74,29,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
                    View Collection
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute w-full h-[416px] bottom-0 bg-[#fbd690]" />
    </section>
  );
};
