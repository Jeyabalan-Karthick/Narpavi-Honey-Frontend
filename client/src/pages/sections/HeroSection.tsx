import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const HeroSection = (): JSX.Element => {
  const products = [
    {
      id: 1,
      name: "Murungai Honey",
      price: "Rs. 300/-",
      image: "/figmaAssets/untitled-design--58--3.png",
      action: "Add to cart",
    },
    {
      id: 2,
      name: "Malai Thaen",
      price: "Rs. 670/-",
      image: "/figmaAssets/untitled-design--59--1.png",
      action: "Add to cart",
    },
  ];

  return (
    <section className="relative w-full bg-[#fbd68f] py-6 md:py-8 lg:py-12">
      <div className="container mx-auto px-4">
        <h2 className="font-['Alata',Helvetica] font-normal text-[#843503] text-xl md:text-2xl lg:text-3xl mb-6 md:mb-8 lg:mb-10">
          Product List
        </h2>

        <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
          {/* Promotional Banner */}
          <Card className="w-full lg:w-1/2 h-64 md:h-80 lg:h-96 bg-[url(/figmaAssets/rectangle-3463901.png)] bg-cover bg-center border-none rounded-2xl md:rounded-3xl">
            <CardContent className="p-0">
              <div className="relative w-full h-full flex flex-col justify-center items-center text-center p-4 md:p-6 lg:p-8">
                <h3 className="font-['Poppins',Helvetica] font-bold text-white text-xl md:text-2xl lg:text-3xl mb-4 md:mb-6 lg:mb-8">
                  Deal end soon
                </h3>
                <p className="font-['Poppins',Helvetica] text-white text-xs md:text-sm lg:text-base mb-4 md:mb-6 lg:mb-8 max-w-xs">
                  Experience the pure essence of honey with Narpavai — raw, unprocessed, and ethically harvested.
                </p>
                <Button className="bg-[#f5dc6f] hover:bg-[#f0d147] text-[#843503] px-4 md:px-6 lg:px-8 py-2 md:py-3 rounded-lg font-['Poppins',Helvetica] font-medium text-sm md:text-base">
                  LEARN MORE
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Product Cards */}
          <div className="w-full lg:w-1/2 flex gap-4">
            {products.map((product) => (
              <Card key={product.id} className="flex-1 bg-white rounded-2xl shadow-lg">
                <CardContent className="p-4 md:p-6 text-center">
                  <div className="mb-4 md:mb-6">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-24 md:h-32 lg:h-40 object-contain mx-auto"
                    />
                  </div>
                  <h4 className="font-['Poppins',Helvetica] font-semibold text-[#843503] text-sm md:text-base lg:text-lg mb-2">
                    {product.name}
                  </h4>
                  <p className="font-['Poppins',Helvetica] font-bold text-[#843503] text-sm md:text-base lg:text-lg mb-4">
                    {product.price}
                  </p>
                  <Button className="w-full bg-[#843503] hover:bg-[#6a3d18] text-white text-xs md:text-sm py-2 rounded-lg">
                    {product.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Navigation arrows */}
        <div className="flex justify-center mt-4 md:mt-6 space-x-4">
          <button className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow">
            <ChevronLeftIcon className="w-5 h-5 md:w-6 md:h-6 text-[#843503]" />
          </button>
          <button className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow">
            <ChevronRightIcon className="w-5 h-5 md:w-6 md:h-6 text-[#843503]" />
          </button>
        </div>
      </div>
    </section>
  );
};