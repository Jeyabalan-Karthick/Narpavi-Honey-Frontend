
import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="w-full bg-[#f5dc6f] py-8 md:py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <img 
              className="w-20 h-20 md:w-24 md:h-24 object-cover mb-4 mx-auto md:mx-0" 
              alt="Narpavai Logo" 
              src="/figmaAssets/add-a-little-bit-of-body-text--9--1-1.png"
            />
            <p className="text-[#0e0f1d] text-xs md:text-sm text-justify leading-relaxed font-['Poppins',Helvetica]">
              Experience the pure essence of honey with Narpavai — raw, unprocessed, and ethically harvested.<br/>
              Packed with natural flavor and nutrients, every drop delivers health, trust, and tradition.
            </p>
          </div>

          {/* Pages */}
          <div className="text-center md:text-left">
            <h3 className="font-['Poppins',Helvetica] font-semibold text-[#0e0f1d] text-lg md:text-xl mb-4">
              Pages
            </h3>
            <nav className="flex flex-col space-y-2">
              <a href="#home" className="font-['Poppins',Helvetica] font-light text-[#0e0f1d] text-sm hover:underline transition-colors">
                Home
              </a>
              <a href="#about" className="font-['Poppins',Helvetica] font-light text-[#0e0f1d] text-sm hover:underline transition-colors">
                About Us
              </a>
              <a href="#products" className="font-['Poppins',Helvetica] font-light text-[#0e0f1d] text-sm hover:underline transition-colors">
                Products
              </a>
              <a href="#blog" className="font-['Poppins',Helvetica] font-light text-[#0e0f1d] text-sm hover:underline transition-colors">
                Blog
              </a>
              <a href="#contact" className="font-['Poppins',Helvetica] font-light text-[#0e0f1d] text-sm hover:underline transition-colors">
                Contact
              </a>
            </nav>
          </div>

          {/* Useful Links */}
          <div className="text-center md:text-left">
            <h3 className="font-['Poppins',Helvetica] font-semibold text-[#0e0f1d] text-lg md:text-xl mb-4">
              Useful Link
            </h3>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="font-['Poppins',Helvetica] font-light text-[#0e0f1d] text-sm hover:underline transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="font-['Poppins',Helvetica] font-light text-[#0e0f1d] text-sm hover:underline transition-colors">
                Return Policy
              </a>
              <a href="#" className="font-['Poppins',Helvetica] font-light text-[#0e0f1d] text-sm hover:underline transition-colors">
                Terms and Condition
              </a>
            </nav>
          </div>

          {/* Contact & Social */}
          <div className="text-center md:text-left">
            <h3 className="font-['Poppins',Helvetica] font-semibold text-[#0e0f1d] text-lg md:text-xl mb-4">
              Contact
            </h3>
            <div className="space-y-2 mb-4">
              <p className="font-['Poppins',Helvetica] font-light text-[#0e0f1d] text-sm">
                +91 9876543210
              </p>
              <p className="font-['Poppins',Helvetica] font-light text-[#0e0f1d] text-sm">
                +91 9876543210
              </p>
              <p className="font-['Poppins',Helvetica] font-light text-[#0e0f1d] text-sm">
                info@narpavai.com
              </p>
            </div>
            
            <h4 className="font-['Poppins',Helvetica] font-semibold text-[#0e0f1d] text-lg mb-3">
              Social media
            </h4>
            <div className="flex justify-center md:justify-start space-x-3">
              <a href="#" className="text-[#0e0f1d] hover:text-[#843503] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#0e0f1d] hover:text-[#843503] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#0e0f1d] hover:text-[#843503] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#0e0f1d] hover:text-[#843503] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-[#843503]/20 mt-8 pt-6 text-center">
          <p className="font-['Poppins',Helvetica] text-[#0e0f1d] text-xs md:text-sm">
            © 2024 Narpavai Honey. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
