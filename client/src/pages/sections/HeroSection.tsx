
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
    },
    {
      id: 2,
      name: "Malai Thaen",
      price: "Rs. 670/-",
      image: "/figmaAssets/untitled-design--59--1.png",
    },
  ];

  return (
    <section className="relative w-full bg-[#fbd68f] py-8 md:py-16 px-4 md:px-8 lg:px-16">
      <h2 className="font-['Alata',Helvetica] font-normal text-[#843503] text-2xl md:text-3xl lg:text-[35px] mb-6 md:mb-10 text-center md:text-left">
        Product List
      </h2>

      <div className="flex flex-col lg:flex-row gap-4 md:gap-6 items-center justify-center">
        {/* Promotional Banner */}
        <Card className="w-full max-w-md lg:w-[400px] xl:w-[542px] h-[400px] md:h-[450px] lg:h-[528px] bg-[url(/figmaAssets/rectangle-3463901.png)] bg-cover bg-center border-none rounded-[20px] md:rounded-[30px] order-2 lg:order-1">
          <CardContent className="p-0">
            <div className="relative w-full h-full pt-12 md:pt-16 lg:pt-[87px] px-6 md:px-8 lg:px-[27px] flex flex-col items-center justify-center text-center">
              <h3 className="font-['Poppins',Helvetica] font-bold text-white text-2xl md:text-3xl lg:text-[35px] mb-8 md:mb-12 lg:mb-[62px]">
                Deal end soon
              </h3>

              <p className="text-white text-base md:text-lg lg:text-2xl leading-6 md:leading-8 lg:leading-[34px] font-['Poppins',Helvetica] font-normal mb-8 md:mb-12 lg:mb-[69px] max-w-xs md:max-w-sm">
                Experience the pure essence of honey with Narpavai — raw, unprocessed, and ethically harvested.
              </p>

              <Button className="w-full max-w-[200px] md:max-w-[240px] lg:w-[268px] h-12 md:h-16 lg:h-[89px] bg-[#dda12f] rounded-[15px] md:rounded-[20px] text-white text-xl md:text-2xl lg:text-[35px] font-['Poppins',Helvetica] font-medium hover:bg-[#c9860c] border-2 border-[#c9860c]">
                LEARN MORE
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Navigation and Products Container */}
        <div className="flex items-center gap-2 md:gap-4 order-1 lg:order-2">
          {/* Left Arrow */}
          <button className="hidden md:flex items-center justify-center w-8 h-8 md:w-10 md:h-10">
            <ChevronLeftIcon className="w-6 h-6 md:w-8 md:h-8 text-[#843503]" />
          </button>

          {/* Product Cards */}
          <div className="flex gap-3 md:gap-4 overflow-x-auto md:overflow-visible">
            {products.map((product) => (
              <Card key={product.id} className="min-w-[250px] md:min-w-[280px] lg:w-[313px] h-[400px] md:h-[450px] lg:h-[528px] bg-white rounded-[20px] md:rounded-[30px] flex-shrink-0">
                <CardContent className="flex flex-col items-center p-4 md:p-6 lg:pt-[34px]">
                  <div className="relative w-[180px] md:w-[200px] lg:w-[222px] h-[180px] md:h-[200px] lg:h-[222px] mb-4">
                    <div className="absolute w-[100px] md:w-[110px] lg:w-[126px] h-6 md:h-7 bottom-4 md:bottom-6 lg:bottom-[30px] left-1/2 -translate-x-1/2 bg-[#5e5e5e] rounded-[63px/14px] blur-lg" />
                    <img
                      className="w-full h-full object-cover"
                      alt={product.name}
                      src={product.image}
                    />
                  </div>

                  <img
                    className="w-[120px] md:w-[140px] lg:w-[156px] h-px object-cover my-2"
                    alt="Line"
                    src="/figmaAssets/line-61.svg"
                  />

                  <div className="mt-2 w-full text-center">
                    <h3 className="font-['Poppins',Helvetica] font-light text-black text-xl md:text-2xl lg:text-[28px] mb-4 md:mb-6 lg:mb-8">
                      {product.name}
                    </h3>
                    <p className="font-['Poppins',Helvetica] font-semibold text-black text-xl md:text-2xl lg:text-[28px] mb-4 md:mb-6 lg:mb-[30px]">
                      {product.price}
                    </p>
                    <Button className="w-full max-w-[160px] md:max-w-[170px] lg:w-[185px] h-10 md:h-12 lg:h-[52px] rounded-[15px] md:rounded-[20px] bg-transparent border-2 border-[#843503] text-[#843503] text-base md:text-lg lg:text-2xl font-['Poppins',Helvetica] font-medium hover:bg-[#843503] hover:text-white transition-colors">
                      Add to cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Right Arrow */}
          <button className="hidden md:flex items-center justify-center w-8 h-8 md:w-10 md:h-10">
            <ChevronRightIcon className="w-6 h-6 md:w-8 md:h-8 text-[#843503]" />
          </button>
        </div>
      </div>
    </section>
  );
};
