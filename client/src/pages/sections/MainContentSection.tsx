import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const MainContentSection = (): JSX.Element => {
  const products = [
    {
      id: 1,
      name: "Pure honey",
      price: "₹ 350/-",
      originalPrice: "₹ 550/-",
      discount: "70% off",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/figmaAssets/untitled-design--58--3-1.png",
      isNew: true,
    },
    {
      id: 2,
      name: "Multi Flower Honey",
      price: "₹ 650/-",
      originalPrice: "₹ 2500/-",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/figmaAssets/untitled-design--58--3-2.png",
      isNew: false,
    },
    {
      id: 3,
      name: "Malai Thaen",
      price: "₹ 950/-",
      originalPrice: "₹ 1850/-",
      discount: "70% off",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/figmaAssets/untitled-design--58--3-3.png",
      isNew: false,
    },
    {
      id: 4,
      name: "Pure honey",
      price: "₹ 350/-",
      originalPrice: "₹ 550/-",
      discount: "70% off",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/figmaAssets/untitled-design--58--3-4.png",
      isNew: true,
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-[#f5dc6f] to-[#fbd68f] py-8 md:py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 md:mb-8 lg:mb-12">
          <h2 className="font-['Alata',Helvetica] text-[#843503] text-xl md:text-2xl lg:text-3xl mb-4 md:mb-6">
            Product List
          </h2>

          <div className="flex justify-center space-x-8 md:space-x-12">
            <button className="font-['Poppins',Helvetica] font-semibold text-[#843503] text-sm md:text-base pb-2 border-b-2 border-[#843503]">
              Best Seller
            </button>
            <button className="font-['Poppins',Helvetica] text-[#666] text-sm md:text-base pb-2 hover:text-[#843503] transition-colors">
              New Arrival
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <Card key={product.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden">
              {product.isNew && (
                <Badge className="absolute top-3 left-3 bg-[#843503] text-white z-10 text-xs">
                  New
                </Badge>
              )}

              <CardContent className="p-4 md:p-6">
                <div className="mb-4 md:mb-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-32 md:h-40 object-contain mx-auto"
                  />
                </div>

                <h3 className="font-['Poppins',Helvetica] font-semibold text-[#843503] text-sm md:text-base mb-2">
                  {product.name}
                </h3>

                <div className="flex items-center space-x-2 mb-2">
                  <span className="font-['Poppins',Helvetica] font-bold text-[#e74c3c] text-sm md:text-base">
                    {product.price}
                  </span>
                  <span className="font-['Poppins',Helvetica] text-[#999] line-through text-xs md:text-sm">
                    {product.originalPrice}
                  </span>
                </div>

                {product.discount && (
                  <p className="font-['Poppins',Helvetica] text-[#27ae60] text-xs md:text-sm mb-3">
                    {product.discount}
                  </p>
                )}

                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center space-x-2">
                    <button className="w-6 h-6 md:w-8 md:h-8 rounded border border-[#ddd] flex items-center justify-center text-sm">
                      -
                    </button>
                    <span className="font-['Poppins',Helvetica] text-sm md:text-base">1</span>
                    <button className="w-6 h-6 md:w-8 md:h-8 rounded border border-[#ddd] flex items-center justify-center text-sm">
                      +
                    </button>
                  </div>

                  <Button className="bg-[#843503] hover:bg-[#6a3d18] text-white text-xs md:text-sm px-3 md:px-4 py-1 md:py-2 rounded">
                    ADD TO CART
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};