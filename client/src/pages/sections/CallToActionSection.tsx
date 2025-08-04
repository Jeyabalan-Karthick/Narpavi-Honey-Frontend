import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const CallToActionSection = (): JSX.Element => {
  // Testimonial data for mapping
  const testimonials = [
    {
      id: 1,
      name: "Francis George",
      role: "Customer",
      image: "/figmaAssets/frame-39.svg",
      text: "our valued customers share their honest experiences with Narpavai Honey—from taste to trust, and everything in between.",
      stars: "/figmaAssets/frame-531686.svg",
    },
    {
      id: 2,
      name: "JASMINE ALBERT",
      role: "Customer",
      image: "/figmaAssets/frame-39-1.svg",
      text: "Discover what our valued customers are saying about their experience with Narpavai Honey—pure, flavorful, and trusted by families nationwide.",
      stars: "/figmaAssets/frame-531686.svg",
    },
  ];

  return (
    <section className="relative w-full bg-[#fffae2] py-12">
      <div className="container relative mx-auto bg-[url(/figmaAssets/untitled-design--12--1-1.svg)] bg-cover bg-center">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Left content - Heading and description */}
          <div className="lg:w-1/3 space-y-8">
            <h2 className="font-['Alata',Helvetica] font-normal text-[#7e4a1d] text-5xl leading-[57.6px]">
              What Our <br />
              Customer Say&apos;s
            </h2>

            <p className="font-['Poppins',Helvetica] font-normal text-black text-lg text-justify leading-[27px]">
              Here&apos;s what our happy customers have to say about their
              experience with Narpavai Honey. We take pride in delivering pure,
              high-quality honey that&apos;s loved and trusted by families
              across the country. Your feedback inspires us to keep it natural,
              honest, and sweet—just like our honey!
            </p>
          </div>

          {/* Right content - Testimonial cards */}
          <div className="lg:w-2/3 flex flex-col md:flex-row gap-6 justify-center">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="w-full max-w-[346px] h-[459px] rounded-[5px] overflow-hidden"
              >
                <CardContent className="p-0 relative h-full">
                  <div
                    className="w-[156px] h-[156px] mx-auto mt-12 rounded-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${testimonial.image})` }}
                  />

                  <p className="w-[302px] mx-auto mt-6 font-['Poppins',Helvetica] font-normal text-[#131313] text-base text-center leading-[20.8px]">
                    {testimonial.text}
                  </p>

                  <div className="absolute bottom-[116px] left-1/2 transform -translate-x-1/2">
                    <img
                      className="w-[82px] h-4"
                      alt="Five star rating"
                      src={testimonial.stars}
                    />
                  </div>

                  <div className="absolute bottom-9 left-1/2 transform -translate-x-1/2 text-center">
                    <p className="font-['Poppins',Helvetica] font-medium text-[#131313] text-lg leading-[30px]">
                      {testimonial.name}
                    </p>
                    <p className="font-['Poppins',Helvetica] font-normal text-[#131313] text-sm leading-[30px]">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
