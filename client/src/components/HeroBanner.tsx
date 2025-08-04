
import React from "react";
import { Button } from "@/components/ui/button";

export const HeroBanner = (): JSX.Element => {
  return (
    <section className="relative w-full bg-gradient-to-r from-[#f5dc6f] to-[#fbd68f] overflow-hidden pt-20 md:pt-24">
      {/* Background honey jars and bee image */}
      <div className="absolute right-0 top-0 w-full h-full">
        <img
          src="/figmaAssets/untitled-design--52--1.png"
          alt="Honey jars and bee"
          className="absolute right-0 top-0 h-full w-auto object-cover object-right"
        />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-24 relative z-10">
        <div className="max-w-lg md:max-w-2xl">
          <h1 className="font-['Alata',Helvetica] text-[#843503] text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-4 md:mb-6">
            Welcome to Narpavai Honey<br />
            Taste the Purity of Nature
          </h1>

          <p className="font-['Poppins',Helvetica] text-[#595959] text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed mb-6 md:mb-8 text-justify max-w-md md:max-w-lg lg:max-w-xl">
            Experience the pure essence of honey with Narpavai — raw, unprocessed, and ethically harvested. 
            Packed with natural flavor and nutrients, every drop delivers health, trust, and tradition.
          </p>

          <Button className="bg-transparent border-2 border-[#843503] text-[#843503] hover:bg-[#843503] hover:text-white px-6 md:px-8 py-2 md:py-3 rounded-lg font-['Poppins',Helvetica] font-medium text-base md:text-lg transition-colors">
            LEARN MORE
          </Button>
        </div>
      </div>
    </section>
  );
};
