import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const TestimonialsSection = (): JSX.Element => {
  // Data for testimonial cards
  const testimonialCards = [
    {
      id: 1,
      title: "100% Raw & Unprocessed",
      backgroundImage: "..//figmaAssets/frame-1321314512.png",
      overlayOpacity: "opacity-80",
    },
    {
      id: 2,
      title: "Ethically Sourced from Trusted Beekeepers",
      backgroundImage: null, // This card uses an SVG background
      overlayOpacity: "",
    },
    {
      id: 3,
      title: "Lab-Tested for Purity",
      backgroundImage: "..//figmaAssets/frame-1321314514.png",
      overlayOpacity: "opacity-80",
    },
  ];

  return (
    <section className="relative w-full py-12 bg-[linear-gradient(180deg,rgba(255,246,209,1)_0%,rgba(252,244,197,1)_100%)]">
      <div className="container mx-auto px-4">
        <h2 className="font-['Alata',Helvetica] font-normal text-[#843503] text-[35px] mb-6">
          The Narpavai Promise
        </h2>

        <div className="flex flex-col lg:flex-row gap-6 relative">
          {/* First Card */}
          <Card className="w-full lg:w-[411px] h-[249px] rounded-[40px_0px_40px_0px] border-none overflow-hidden">
            <CardContent className="p-0 h-full">
              <div
                className="w-full h-full rounded-[40px_0px_40px_0px] relative bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.4) 100%), url(${testimonialCards[0].backgroundImage})`,
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center px-8">
                  <p
                    className={`${testimonialCards[0].overlayOpacity} font-['Poppins',Helvetica] font-bold text-white text-[25px] text-center`}
                  >
                    {testimonialCards[0].title}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Middle Card */}
          <Card className="w-full lg:w-[432px] h-[249px] rounded-[40px_0px_40px_0px] border-none overflow-hidden relative">
            <CardContent className="p-0 h-full relative">
              <img
                className="absolute w-[407px] h-[249px]"
                alt="Rectangle"
                src="/figmaAssets/rectangle-3463898.svg"
              />
              <div className="absolute inset-0 flex items-center justify-center px-8">
                <p className="font-['Poppins',Helvetica] font-bold text-white text-[25px] text-center">
                  {testimonialCards[1].title}
                </p>
              </div>
              <img
                className="absolute w-[166px] h-[169px] -top-[70px] right-0"
                alt="Honey illustration"
                src="/figmaAssets/add-a-little-bit-of-body-text--3--1.png"
              />
            </CardContent>
          </Card>

          {/* Third Card */}
          <Card className="w-full lg:w-[415px] h-[249px] rounded-[40px_0px_40px_0px] border-none overflow-hidden">
            <CardContent className="p-0 h-full">
              <div
                className="w-full h-full rounded-[40px_0px_40px_0px] relative bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.3) 100%), url(${testimonialCards[2].backgroundImage})`,
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center px-8">
                  <p
                    className={`${testimonialCards[2].overlayOpacity} font-['Poppins',Helvetica] font-bold text-white text-[25px] text-center`}
                  >
                    {testimonialCards[2].title}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Bee decoration */}
          <img
            className="w-[66px] h-[54px] absolute -top-[25px] left-1/2 transform -translate-x-1/2 object-cover"
            alt="Bee"
            src="/figmaAssets/bee-3.png"
          />
        </div>
      </div>
    </section>
  );
};
