
import React from "react";
import { Header } from "../components/Header";
import { HeroBanner } from "../components/HeroBanner";
import { NarpavaiPromiseSection } from "./sections/NarpavaiPromiseSection";
import { ProductCategoriesSection } from "./sections/ProductCategoriesSection";
import { HeroSection } from "./sections/HeroSection";
import { GetOfferSection } from "./sections/GetOfferSection";
import { MainContentSection } from "./sections/MainContentSection";
import { WhyChooseUsSection } from "./sections/WhyChooseUsSection";
import { VideoTourSection } from "./sections/VideoTourSection";
import { FAQSection } from "./sections/FAQSection";
import { FooterSection } from "./sections/FooterSection";

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
          <NarpavaiPromiseSection />
          <ProductCategoriesSection />
          <HeroSection />
          <GetOfferSection />
          <MainContentSection />
          <WhyChooseUsSection />
          <VideoTourSection />
          <FAQSection />
          <FooterSection />
        </div>
      </div>
    </div>
  );
};
