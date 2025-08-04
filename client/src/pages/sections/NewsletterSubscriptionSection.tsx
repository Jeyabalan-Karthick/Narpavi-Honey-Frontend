import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const NewsletterSubscriptionSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-[#fcf4c6] py-10">
      <div className="container relative mx-auto">
        {/* Left decorative image */}
        <img
          className="absolute left-0 bottom-0 h-[390px] w-auto object-cover"
          alt="Honey decoration"
          src="/figmaAssets/add-a-little-bit-of-body-text--10--2.png"
        />

        {/* Right decorative image */}
        <img
          className="absolute right-0 top-0 h-[429px] w-auto object-cover"
          alt="Honey decoration"
          src="/figmaAssets/add-a-little-bit-of-body-text--10--2.png"
        />

        {/* Background pattern */}
        <img
          className="absolute inset-0 h-full w-full"
          alt="Background pattern"
          src="/figmaAssets/untitled-design--12--1-3.svg"
        />

        {/* Content container */}
        <div className="relative mx-auto flex flex-col items-center justify-center">
          {/* Heading */}
          <h2 className="mb-6 font-['Alata',Helvetica] text-[35px] font-normal text-[#843503]">
            Get Offer
          </h2>

          {/* Offer card */}
          <Card className="border-none bg-transparent shadow-none">
            <CardContent className="flex flex-col items-center p-0">
              <div className="text-center">
                <p className="font-['Poppins',Helvetica] text-[35px] font-medium leading-normal tracking-[0] text-black">
                  Save upto 20% on
                </p>
                <p className="mt-4 font-['Poppins',Helvetica] text-3xl font-normal leading-normal tracking-[0] text-black">
                  Fresh Honey
                </p>
              </div>

              {/* Custom button with gradient border */}
              <div className="mt-8">
                <div className="relative h-[52px] w-[185px] rounded-[20px] before:absolute before:inset-0 before:z-[1] before:rounded-[20px] before:p-0.5 before:content-[''] before:[background:linear-gradient(97deg,rgba(126,74,29,1)_0%,rgba(126,74,29,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude]">
                  <Button
                    variant="ghost"
                    className="h-full w-full rounded-[20px] font-['Poppins',Helvetica] text-2xl font-medium text-[#843503]"
                  >
                    Add to cart
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
