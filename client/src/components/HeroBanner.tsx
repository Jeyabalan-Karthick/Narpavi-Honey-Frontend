
import React from "react";
import { Button } from "@/components/ui/button";

export const HeroBanner = (): JSX.Element => {
  return (
    <section className="relative w-full bg-gradient-to-r from-[#f5dc6f] to-[#fbd68f] overflow-hidden">
      {/* Background honey jars and bee image */}
      <div className="absolute right-0 top-0 w-full h-full">
        <img
          src="/figmaAssets/untitled-design--52--1.png"
          alt="Honey jars and bee"
          className="absolute right-0 top-0 h-full object-cover object-right"
        />
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
        <div className="max-w-2xl">
          <h1 className="font-['Alata',Helvetica] text-[#843503] text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            Welcome to Narpavai Honey<br />
            Taste the Purity of Nature
          </h1>

          <p className="font-['Poppins',Helvetica] text-[#595959] text-lg md:text-xl lg:text-2xl leading-relaxed mb-8 text-justify">
            Experience the pure essence of honey with Narpavai — raw, unprocessed, and ethically harvested. 
            Packed with natural flavor and nutrients, every drop delivers health, trust, and tradition.
          </p>

          <Button className="bg-[#843503] hover:bg-[#6a3d18] text-white px-8 py-3 rounded-lg font-['Poppins',Helvetica] font-medium text-lg transition-colors">
            LEARN MORE
          </Button>
        </div>
      </div>
    </section>
  );
};
