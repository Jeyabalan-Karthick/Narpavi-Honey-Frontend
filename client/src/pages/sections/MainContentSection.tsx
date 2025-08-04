import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const MainContentSection = (): JSX.Element => {
  // Product data for mapping
  const products = [
    {
      id: 1,
      name: "Pure honey",
      price: "350",
      originalPrice: "550",
      discount: "70% off",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/figmaAssets/untitled-design--58--3-1.png",
      isNew: true,
    },
    {
      id: 2,
      name: "Multi Flower Honey",
      price: "650",
      originalPrice: "2500",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/figmaAssets/untitled-design--58--3-2.png",
      isNew: false,
    },
    {
      id: 3,
      name: "Malai Thaen",
      price: "950",
      originalPrice: "1850",
      discount: "70% off",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/figmaAssets/untitled-design--58--3-3.png",
      isNew: false,
    },
    {
      id: 4,
      name: "Pure honey",
      price: "350",
      originalPrice: "550",
      discount: "70% off",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/figmaAssets/untitled-design--58--3-4.png",
      isNew: true,
    },
  ];

  return (
    <section className="w-full bg-[#fcf4c6] py-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-12">
          <h1 className="font-normal text-[35px] text-[#843503] [font-family:'Alata',Helvetica] mb-8">
            Product List
          </h1>

          <Tabs defaultValue="best-seller" className="w-full max-w-[463px]">
            <TabsList className="w-full bg-transparent justify-between p-0 h-auto">
              <TabsTrigger
                value="best-seller"
                className="relative data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0"
              >
                <div className="[font-family:'Poppins',Helvetica] font-medium text-[#7e4a1d] text-2xl">
                  Best Seller
                </div>
                <Separator className="absolute bottom-0 w-[123px] h-0.5 bg-[#7e4a1d]" />
              </TabsTrigger>
              <TabsTrigger
                value="new-arrival"
                className="data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0"
              >
                <div className="[font-family:'Poppins',Helvetica] font-medium text-black text-2xl">
                  New Arrival
                </div>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="flex flex-wrap justify-center gap-[33px]">
          {products.map((product) => (
            <Card
              key={product.id}
              className="w-[287px] h-[426px] rounded-[10px] overflow-hidden relative"
            >
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    className="w-full h-[229px] object-cover"
                    alt={product.name}
                    src={product.image}
                  />

                  {product.isNew && (
                    <Badge className="absolute top-1.5 left-[9px] w-[72px] h-9 bg-[#7e4a1d] rounded [font-family:'Poppins',Helvetica] font-medium text-white text-[27px] flex items-center justify-center">
                      New
                    </Badge>
                  )}

                  <Separator className="absolute bottom-[51px] left-1/2 transform -translate-x-1/2 w-[180px] h-0.5" />
                </div>

                <div className="px-[9px] pt-[228px]">
                  <div className="flex justify-between items-start">
                    <h3 className="[font-family:'Poppins',Helvetica] font-medium text-black text-[26px]">
                      {product.name}
                    </h3>
                    {product.discount && (
                      <span className="[font-family:'Poppins',Helvetica] font-medium text-[#3f730a] text-sm">
                        ({product.discount})
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 mt-2">
                    <span className="[font-family:'Poppins',Helvetica] font-medium text-[#ff0000] text-2xl">
                      ₹ {product.price}/-
                    </span>
                    <span className="[font-family:'Poppins',Helvetica] font-medium text-[#adadad] text-sm line-through">
                      ₹ {product.originalPrice}/-
                    </span>
                  </div>

                  <p className="[font-family:'Poppins',Helvetica] font-medium text-[#adadad] text-xs mt-4">
                    {product.description}
                  </p>

                  <div className="flex items-center gap-[53px] mt-6">
                    <Select defaultValue="1">
                      <SelectTrigger className="w-[63px] h-10 pl-4 pr-2 border-[#8e95a2] [font-family:'Roboto',Helvetica] font-normal text-[#383a42] text-lg">
                        <SelectValue placeholder="1" />
                      </SelectTrigger>
                    </Select>

                    <Button className="bg-[#7e4a1d] text-[#ebf6ff] rounded-lg px-4 py-2.5 h-auto [font-family:'Poppins',Helvetica] font-normal text-lg">
                      ADD TO CART
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
