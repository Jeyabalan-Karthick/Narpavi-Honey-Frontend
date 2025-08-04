
import React from "react";
import { Button } from "@/components/ui/button";

export const GetOfferSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#fbd68f] to-[#f5dc6f] py-8 md:py-12 lg:py-16 overflow-hidden">
      {/* Honeycomb and bee decorations */}
      <div className="absolute left-0 bottom-0 w-32 md:w-48 lg:w-64 h-32 md:h-48 lg:h-64">
        <img
          src="/figmaAssets/group-1000005080.png"
          alt="Honeycomb"
          className="w-full h-full object-cover opacity-60"
        />
      </div>
      
      <div className="absolute right-0 top-0 w-24 md:w-32 lg:w-40 h-24 md:h-32 lg:h-40">
        <img
          src="/figmaAssets/bee-3.png"
          alt="Bee"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute right-0 bottom-0 w-32 md:w-48 lg:w-64 h-32 md:h-48 lg:h-64">
        <img
          src="/figmaAssets/group-1000005080.png"
          alt="Honeycomb"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <h2 className="font-['Alata',Helvetica] text-[#843503] text-xl md:text-2xl lg:text-3xl mb-4 md:mb-6">
            Get Offer
          </h2>
          
          <h3 className="font-['Poppins',Helvetica] font-bold text-[#333] text-lg md:text-xl lg:text-2xl mb-2 md:mb-4">
            Save upto 20% on
          </h3>
          
          <p className="font-['Poppins',Helvetica] text-[#666] text-base md:text-lg lg:text-xl mb-6 md:mb-8">
            Fresh Honey
          </p>
          
          <Button className="bg-[#843503] hover:bg-[#6a3d18] text-white px-6 md:px-8 py-2 md:py-3 rounded-lg font-['Poppins',Helvetica] font-medium text-sm md:text-base">
            Add to cart
          </Button>
        </div>
      </div>
    </section>
  );
};
