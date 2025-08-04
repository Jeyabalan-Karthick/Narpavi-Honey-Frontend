import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const MainContentSection = (): JSX.Element => {
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
    <section className="relative w-full bg-[#fbd68f] py-8 md:py-16 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-['Alata',Helvetica] font-normal text-[#843503] text-2xl md:text-3xl lg:text-[35px] mb-6">
            Product List
          </h2>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8">
            <button className="font-['Poppins',Helvetica] font-semibold text-[#843503] text-base md:text-lg border-b-2 border-[#843503] pb-1">
              Best Seller
            </button>
            <button className="font-['Poppins',Helvetica] font-normal text-[#843503] text-base md:text-lg hover:font-semibold transition-all">
              New Arrival
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <Card key={product.id} className="bg-white rounded-[15px] md:rounded-[20px] shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-4 md:p-6">
                <div className="relative mb-4">
                  {product.isNew && (
                    <span className="absolute top-2 left-2 bg-[#843503] text-white text-xs font-medium px-2 py-1 rounded">
                      New
                    </span>
                  )}
                  {product.discount && (
                    <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded">
                      {product.discount}
                    </span>
                  )}
                  <div className="w-full h-[150px] md:h-[180px] mb-4">
                    <img
                      className="w-full h-full object-cover rounded-lg"
                      alt={product.name}
                      src={product.image}
                    />
                  </div>
                  <div className="w-full h-px bg-gray-200 mb-4"></div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-['Poppins',Helvetica] font-medium text-black text-base md:text-lg">
                    {product.name}
                  </h3>

                  <div className="flex items-center gap-2">
                    <span className="font-['Poppins',Helvetica] font-bold text-[#843503] text-lg md:text-xl">
                      ₹ {product.price}/-
                    </span>
                    <span className="font-['Poppins',Helvetica] font-normal text-gray-500 text-sm line-through">
                      ₹ {product.originalPrice}/-
                    </span>
                  </div>

                  <p className="font-['Poppins',Helvetica] font-normal text-gray-600 text-xs md:text-sm leading-relaxed">
                    {product.description}
                  </p>

                  <div className="flex items-center gap-3 mt-4">
                    <Select defaultValue="1">
                      <SelectTrigger className="w-16 h-8 md:h-10 border-gray-300 text-sm">
                        <SelectValue placeholder="1" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1</SelectItem>
                        <SelectItem value="2">2</SelectItem>
                        <SelectItem value="3">3</SelectItem>
                      </SelectContent>
                    </Select>

                    <Button className="flex-1 bg-[#843503] hover:bg-[#6a3d18] text-white rounded-lg h-8 md:h-10 text-xs md:text-sm font-['Poppins',Helvetica] font-normal">
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