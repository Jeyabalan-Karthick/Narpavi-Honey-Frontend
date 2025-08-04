import React from "react";
import { Header } from "../components/Header";
import { HeroBanner } from "../components/HeroBanner";
import { FAQSection } from "./sections/FAQSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { ProductCategoriesSection } from "./sections/ProductCategoriesSection";
import { HeroSection } from "./sections/HeroSection";
import { NewsletterSubscriptionSection } from "./sections/NewsletterSubscriptionSection";
import { MainContentSection } from "./sections/MainContentSection";
import { CallToActionSection } from "./sections/CallToActionSection";
import { FeaturedProductsSection } from "./sections/FeaturedProductsSection";
import { AboutUsSection } from "./sections/AboutUsSection";
import { WhyChooseUsSection } from "./sections/WhyChooseUsSection";

export const NarpavaiHoney = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-full max-w-[1440px] relative">
        {/* Header */}
        <Header />

        {/* Hero Banner */}
        <HeroBanner />

        {/* Main content sections */}
        <div className="flex flex-col w-full">
          <ProductCategoriesSection />
          <HeroSection />
          <MainContentSection />
          <FeaturedProductsSection />
          <WhyChooseUsSection />
          <AboutUsSection />
          <TestimonialsSection />
          <FAQSection />
          <CallToActionSection />
          <NewsletterSubscriptionSection />
        </div>
      </div>
    </div>
  );
};