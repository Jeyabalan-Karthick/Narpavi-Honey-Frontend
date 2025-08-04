import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const HeroSection = (): JSX.Element => {
  // Product data for mapping
  const products = [
    {
      id: 1,
      name: "Murungai Honey",
      price: "Rs. 300/-",
      image: "/figmaAssets/untitled-design--58--3.png",
      linePosition: { top: "219px", left: "37px" },
    },
    {
      id: 2,
      name: "Malai Thaen",
      price: "Rs. 670/-",
      image: "/figmaAssets/untitled-design--59--1.png",
      linePosition: { top: "242px", left: "79px" },
    },
  ];

  return (
    <section className="relative w-full bg-[#fbd68f] py-11 px-[86px]">
      <h2 className="font-['Alata',Helvetica] font-normal text-[#843503] text-[35px] mb-10">
        Product List
      </h2>

      <div className="flex gap-6">
        {/* Promotional Banner */}
        <Card className="w-[542px] h-[528px] bg-[url(/figmaAssets/rectangle-3463901.png)] bg-cover bg-[50%_50%] border-none rounded-[30px]">
          <CardContent className="p-0">
            <div className="relative w-full h-full pt-[87px] px-[27px]">
              <div className="flex flex-col items-center">
                <h3 className="font-['Poppins',Helvetica] font-bold text-white text-[35px] text-center mb-[62px]">
                  Deal end soon
                </h3>

                <p className="text-white text-2xl leading-[34px] font-['Poppins',Helvetica] font-normal mb-[69px]">
                  Experience the pure essence of honey with Narpavai — raw,
                  unprocessed, and ethically harvested.
                </p>

                <Button className="w-[268px] h-[89px] bg-[#dda12f] rounded-[20px] text-white text-[35px] font-['Poppins',Helvetica] font-medium hover:bg-[#c9860c] relative before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-[20px] before:[background:linear-gradient(96deg,rgba(201,134,12,1)_0%,rgba(99,66,6,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1]">
                  LEARN MORE
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation arrow left */}
        <div className="flex items-center">
          <ChevronLeftIcon className="w-6 h-12 text-[#843503]" />
        </div>

        {/* Product Cards */}
        {products.map((product) => (
          <div key={product.id} className="relative">
            <Card className="w-[313px] h-[528px] bg-white rounded-[30px]">
              <CardContent className="flex flex-col items-center pt-[34px]">
                <div className="relative w-[222px] h-[222px]">
                  <div className="absolute w-[126px] h-7 bottom-[30px] left-1/2 -translate-x-1/2 bg-[#5e5e5e] rounded-[63px/14px] blur-lg" />
                  <img
                    className="w-full h-full object-cover"
                    alt={product.name}
                    src={product.image}
                  />
                </div>

                <img
                  className="w-[156px] h-px object-cover my-2"
                  alt="Line"
                  src="/figmaAssets/line-61.svg"
                />

                <div className="mt-2 w-full px-4">
                  <h3 className="font-['Poppins',Helvetica] font-light text-black text-[28px]">
                    {product.name}
                  </h3>
                  <p className="font-['Poppins',Helvetica] font-semibold text-black text-[28px] text-center mt-[34px]">
                    {product.price}
                  </p>
                  <div className="mt-[30px] flex justify-center">
                    <Button className="w-[185px] h-[52px] rounded-[20px] bg-transparent text-[#843503] text-2xl font-['Poppins',Helvetica] font-medium relative before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-[20px] before:[background:linear-gradient(97deg,rgba(126,74,29,1)_0%,rgba(126,74,29,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] hover:bg-[#f8f8f8]">
                      Add to cart
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}

        {/* Navigation arrow right */}
        <div className="flex items-center">
          <ChevronRightIcon className="w-6 h-12 text-[#843503]" />
        </div>
      </div>
    </section>
  );
};
