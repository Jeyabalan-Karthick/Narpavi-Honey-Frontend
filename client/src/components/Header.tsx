
import React from "react";
import { Search, ShoppingCart, Heart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Header = (): JSX.Element => {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/figmaAssets/add-a-little-bit-of-body-text--9--1-1.png"
              alt="Narpavai Logo"
              className="w-16 h-16 object-cover"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-[#843503] font-medium hover:text-[#6a3d18] transition-colors">
              Home
            </a>
            <a href="#" className="text-[#843503] font-medium hover:text-[#6a3d18] transition-colors">
              About us
            </a>
            <a href="#" className="text-[#843503] font-medium hover:text-[#6a3d18] transition-colors">
              Products
            </a>
            <a href="#" className="text-[#843503] font-medium hover:text-[#6a3d18] transition-colors">
              Blog
            </a>
            <a href="#" className="text-[#843503] font-medium hover:text-[#6a3d18] transition-colors">
              Contact
            </a>
          </nav>

          {/* Search and Icons */}
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <div className="relative hidden sm:block">
              <Input
                type="text"
                placeholder="Search"
                className="w-48 bg-[#f5dc6f] border-none rounded-full pl-4 pr-10 placeholder:text-[#843503] text-[#843503]"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#843503]" />
            </div>

            {/* Cart Icon */}
            <div className="flex items-center space-x-1">
              <ShoppingCart className="w-6 h-6 text-[#843503]" />
              <span className="text-[#843503] font-medium">1</span>
            </div>

            {/* Heart Icon */}
            <div className="flex items-center space-x-1">
              <Heart className="w-6 h-6 text-[#843503]" />
              <span className="text-[#843503] font-medium">1</span>
            </div>

            {/* User Icon */}
            <User className="w-6 h-6 text-[#843503]" />
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className="md:hidden mt-4 flex flex-wrap justify-center space-x-4">
          <a href="#" className="text-[#843503] font-medium text-sm hover:text-[#6a3d18] transition-colors">
            Home
          </a>
          <a href="#" className="text-[#843503] font-medium text-sm hover:text-[#6a3d18] transition-colors">
            About us
          </a>
          <a href="#" className="text-[#843503] font-medium text-sm hover:text-[#6a3d18] transition-colors">
            Products
          </a>
          <a href="#" className="text-[#843503] font-medium text-sm hover:text-[#6a3d18] transition-colors">
            Blog
          </a>
          <a href="#" className="text-[#843503] font-medium text-sm hover:text-[#6a3d18] transition-colors">
            Contact
          </a>
        </nav>

        {/* Mobile Search */}
        <div className="sm:hidden mt-4">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search"
              className="w-full bg-[#f5dc6f] border-none rounded-full pl-4 pr-10 placeholder:text-[#843503] text-[#843503]"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#843503]" />
          </div>
        </div>
      </div>
    </header>
  );
};
