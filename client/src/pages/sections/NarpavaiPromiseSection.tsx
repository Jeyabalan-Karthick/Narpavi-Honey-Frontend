
import React from "react";

export const NarpavaiPromiseSection = (): JSX.Element => {
  const promises = [
    {
      title: "100% Raw & Unprocessed",
      image: "/figmaAssets/untitled-design--52--1.png",
      description: "Pure honey straight from the hive"
    },
    {
      title: "Ethically Sourced from Trusted Beekeepers",
      image: "/figmaAssets/untitled-design--53--1.png", 
      description: "Supporting local beekeepers with fair practices"
    },
    {
      title: "Lab-Tested for Purity",
      image: "/figmaAssets/untitled-design--57--1.png",
      description: "Quality assured through rigorous testing"
    }
  ];

  return (
    <section className="relative w-full bg-[#f5f2e8] py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-['Alata',Helvetica] font-normal text-[#843503] text-2xl md:text-3xl lg:text-4xl mb-8 md:mb-12">
          The Narpavai Promise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {promises.map((promise, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={promise.image}
                  alt={promise.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="font-['Poppins',Helvetica] font-semibold text-lg md:text-xl mb-2">
                      {promise.title}
                    </h3>
                    <p className="font-['Poppins',Helvetica] text-sm opacity-90">
                      {promise.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
