import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import React from "react";

export const WhyChooseUsSection = (): JSX.Element => {
  // Pages navigation links
  const pageLinks = [
    { title: "Home" },
    { title: "About Us" },
    { title: "Products" },
    { title: "Blog" },
    { title: "Contact" },
  ];

  // Useful links
  const usefulLinks = [
    { title: "Privacy Policy" },
    { title: "Cookies Policy" },
    { title: "Terms and Condition" },
  ];

  return (
    <footer className="relative w-full py-8 bg-[url(/figmaAssets/clip-path-group.png)] bg-cover">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <img
              className="w-[111px] h-[111px] object-cover mb-4"
              alt="Narpavai Logo"
              src="/figmaAssets/add-a-little-bit-of-body-text--9--1-1.png"
            />
            <p className="text-black text-xs text-justify leading-[18px] font-['Poppins',Helvetica] font-normal">
              Experience the pure essence of honey with Narpavai — raw,
              unprocessed, and ethically harvested.
              <br />
              Packed with natural flavor and nutrients, every drop delivers
              health, trust, and tradition.
            </p>
          </div>

          {/* Pages */}
          <div className="lg:col-span-1">
            <h3 className="font-['Poppins',Helvetica] font-semibold text-[#0e0f1d] text-xl mb-4">
              Pages
            </h3>
            <nav className="flex flex-col space-y-2">
              {pageLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="font-['Poppins',Helvetica] font-light text-[#0e0f1d] text-sm hover:underline"
                >
                  {link.title}
                </a>
              ))}
            </nav>
          </div>

          {/* Useful Links */}
          <div className="lg:col-span-1">
            <h3 className="font-['Poppins',Helvetica] font-semibold text-[#0e0f1d] text-xl mb-4">
              Useful Link
            </h3>
            <nav className="flex flex-col space-y-2">
              {usefulLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="font-['Poppins',Helvetica] font-light text-[#0e0f1d] text-sm hover:underline"
                >
                  {link.title}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="lg:col-span-1">
            <h3 className="font-['Poppins',Helvetica] font-semibold text-[#0e0f1d] text-xl mb-4">
              Contact
            </h3>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center">
                <PhoneIcon className="w-[15px] h-[15px] mr-2" />
                <span className="font-['Poppins',Helvetica] font-light text-[#0e0f1d] text-sm">
                  +91 9876543210
                </span>
              </div>
              <div className="flex items-center">
                <MailIcon className="w-[15px] h-[15px] mr-2" />
                <span className="font-['Poppins',Helvetica] font-light text-[#0e0f1d] text-sm">
                  narpavai123@gmail.com
                </span>
              </div>
              <div className="flex items-center">
                <MapPinIcon className="w-[15px] h-[15px] mr-2" />
                <span className="font-['Poppins',Helvetica] font-light text-[#0e0f1d] text-sm">
                  123, North main road
                </span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="lg:col-span-1">
            <h3 className="font-['Poppins',Helvetica] font-semibold text-[#0e0f1d] text-xl mb-4">
              Social media
            </h3>
            <div className="flex space-x-2">
              <a href="#" aria-label="Facebook">
                <img
                  className="w-6 h-[25px]"
                  alt="Facebook"
                  src="/figmaAssets/group-85.svg"
                />
              </a>
              <a href="#" aria-label="Twitter">
                <img
                  className="w-6 h-[25px]"
                  alt="Twitter"
                  src="/figmaAssets/group-86.svg"
                />
              </a>
              <a href="#" aria-label="Instagram">
                <img
                  className="w-6 h-[25px]"
                  alt="Instagram"
                  src="/figmaAssets/group-87.svg"
                />
              </a>
              <a href="#" aria-label="LinkedIn">
                <img
                  className="w-6 h-[25px]"
                  alt="LinkedIn"
                  src="/figmaAssets/group-88.svg"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
