import { SearchIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export const FAQSection = (): JSX.Element => {
  // Navigation menu items
  const navItems = [
    { label: "Home", href: "#" },
    { label: "About us", href: "#" },
    { label: "Products", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <section className="relative w-full">
      {/* Background image */}
      <img
        className="absolute w-full h-full top-0 left-0 z-0"
        alt="Background design"
        src="/figmaAssets/untitled-design--12--1.svg"
      />

      {/* Navigation bar */}
      <header className="relative w-full bg-white z-10">
        <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between">
          {/* Logo */}
          <img
            className="w-24 h-24 object-cover"
            alt="Narpavai Honey Logo"
            src="/figmaAssets/add-a-little-bit-of-body-text--9--1-1.png"
          />

          {/* Navigation */}
          <div className="flex items-end gap-16">
            <NavigationMenu>
              <NavigationMenuList className="flex gap-6">
                {navItems.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink
                      className="px-0 py-2.5 [font-family:'Poppins',Helvetica] font-semibold text-[#7e4a1d] text-base"
                      href={item.href}
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* SearchIcon and icons */}
            <div className="flex items-end gap-[26px]">
              <div className="relative w-[292px] h-[46px]">
                <div className="relative w-[294px] h-[46px]">
                  <div className="absolute w-[292px] h-[35px] top-1.5 left-0.5">
                    <div className="relative w-[290px] h-[35px] bg-[#f9e482] rounded-[10px]">
                      <Input
                        className="absolute top-0 left-0 h-[35px] w-full bg-transparent border-none pl-12 [font-family:'Poppins',Helvetica] font-medium text-[#7e4a1d] text-base"
                        placeholder="Search"
                      />
                    </div>
                  </div>
                  <div className="absolute w-[46px] h-[46px] top-0 left-0 flex items-center justify-center">
                    <SearchIcon className="w-6 h-6 text-[#7e4a1d]" />
                  </div>
                </div>
              </div>

              {/* Notification icons */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-[46px] overflow-hidden">
                  <div className="inline-flex items-center gap-[5px] p-[15px] relative rounded-[37px] overflow-hidden">
                    <img
                      className="relative w-[26px] h-[26px]"
                      alt="Notification icon"
                      src="/figmaAssets/icn-settings-icn-xs-1.svg"
                    />
                    <span className="relative w-fit [font-family:'Poppins',Helvetica] font-normal text-black text-[22px] text-center tracking-[0.20px] leading-4 whitespace-nowrap">
                      1
                    </span>
                  </div>
                </div>

                <div className="w-14 h-[46px] overflow-hidden">
                  <div className="inline-flex items-center gap-[5px] p-[15px] relative rounded-[37px] overflow-hidden">
                    <img
                      className="relative w-[26px] h-[26px]"
                      alt="Cart icon"
                      src="/figmaAssets/icn-settings-icn-xs.svg"
                    />
                    <span className="relative w-fit [font-family:'Poppins',Helvetica] font-normal text-black text-[22px] text-center tracking-[0.20px] leading-4 whitespace-nowrap">
                      1
                    </span>
                  </div>
                </div>

                <img
                  className="relative w-10 h-10"
                  alt="User profile"
                  src="/figmaAssets/group-1000005080.png"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-36 pb-16">
        <Card className="border-none shadow-none bg-transparent">
          <CardContent className="p-0">
            <h1 className="[font-family:'Alata',Helvetica] font-normal text-[#a1510c] text-6xl leading-normal mb-12">
              Welcome to Narpavai Honey <br />
              Taste the Purity of Nature
            </h1>

            <p className="[font-family:'Poppins',Helvetica] font-normal text-[#595959] text-2xl text-justify leading-[34px] max-w-[683px] mb-12">
              Experience the pure essence of honey with Narpavai — raw,
              unprocessed, and ethically harvested.
              <br />
              Packed with natural flavor and nutrients, every drop delivers
              health, trust, and tradition.
            </p>

            <Button
              variant="outline"
              className="h-12 [font-family:'Alata',Helvetica] font-normal text-black text-xl border-[#843503] rounded-[5px]"
            >
              LEARN MORE
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
