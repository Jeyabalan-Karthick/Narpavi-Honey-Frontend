import React from "react";
import { AboutUsSection } from "./sections/AboutUsSection";
import { CallToActionSection } from "./sections/CallToActionSection";
import { FAQSection } from "./sections/FAQSection";
import { FeaturedProductsSection } from "./sections/FeaturedProductsSection";
import { HeroSection } from "./sections/HeroSection";
import { MainContentSection } from "./sections/MainContentSection";
import { NewsletterSubscriptionSection } from "./sections/NewsletterSubscriptionSection";
import { ProductCategoriesSection } from "./sections/ProductCategoriesSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { WhyChooseUsSection } from "./sections/WhyChooseUsSection";

export const NarpavaiHoney = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-col items-center w-full">
      <div className="bg-white w-full max-w-[1440px] relative">
        {/* Background images */}
        <div className="relative w-full">
          <img
            className="w-full h-[879px]"
            alt="Untitled design"
            src="/figmaAssets/untitled-design--57--1.png"
          />

          <img
            className="absolute w-[669px] h-[669px] top-[170px] right-[126px] object-cover"
            alt="Untitled design"
            src="/figmaAssets/untitled-design--53--1.png"
          />

          <img
            className="absolute w-[258px] h-[228px] top-[537px] right-0 object-cover"
            alt="Bee"
            src="/figmaAssets/bee-3.png"
          />

          <img
            className="absolute w-full h-[260px] top-0 left-0"
            alt="Untitled design"
            src="/figmaAssets/untitled-design--52--1.png"
          />
        </div>

        <div className="w-full h-[413px] bg-[#fff7d2]" />

        {/* Main content sections */}
        <div className="flex flex-col w-full">
          <FAQSection />
          <TestimonialsSection />
          <ProductCategoriesSection />
          <HeroSection />
          <NewsletterSubscriptionSection />
          <MainContentSection />
          <CallToActionSection />
          <FeaturedProductsSection />
          <AboutUsSection />
          <WhyChooseUsSection />
        </div>
      </div>
    </div>
  );
};
