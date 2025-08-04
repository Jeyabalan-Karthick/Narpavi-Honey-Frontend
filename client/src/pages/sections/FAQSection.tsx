import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = (): JSX.Element => {
  const faqItems = [
    {
      question: "Is Narpavai Honey 100% pure and natural?",
      answer: "Yes, our honey is 100% pure and natural. We ensure that our honey goes through no artificial processing or preservatives. We source our honey directly from trusted beekeepers who follow ethical and sustainable practices.",
    },
    {
      question: "How do I store honey properly?",
      answer: "Store honey in a cool, dry place at room temperature. Keep the container tightly sealed to prevent moisture absorption. Avoid refrigerating honey as it may crystallize faster.",
    },
    {
      question: "Is your honey safe for kids and elders?",
      answer: "Our honey is safe for most people, including children over 1 year old and elders. However, honey should not be given to infants under 12 months due to the risk of botulism.",
    },
    {
      question: "Does honey expire or crystallize over time?",
      answer: "Honey has an indefinite shelf life when stored properly. Crystallization is a natural process and doesn't indicate spoilage. You can gently warm crystallized honey to return it to liquid form.",
    },
  ];

  return (
    <section className="relative w-full bg-gradient-to-b from-[#fbd68f] to-[#f5dc6f] py-8 md:py-12 lg:py-16 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Bee decoration */}
        <img
          className="absolute top-4 right-4 md:top-8 md:right-8 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-cover z-20"
          alt="Bee"
          src="/figmaAssets/bee-3.png"
        />

        <h2 className="font-['Alata',Helvetica] text-[#843503] text-xl md:text-2xl lg:text-3xl mb-6 md:mb-8 lg:mb-12 text-center md:text-left">
          Frequently Asked Questions
        </h2>

        <div className="flex flex-col lg:flex-row items-start gap-6 md:gap-8 lg:gap-12">
          {/* Left side with bee and honeycomb image */}
          <div className="w-full lg:w-5/12 flex justify-center lg:justify-start">
            <div className="relative">
              <img
                className="w-64 md:w-80 lg:w-96 h-auto object-cover"
                alt="Bee on honeycomb"
                src="/figmaAssets/clip-path-group.png"
              />
            </div>
          </div>

          {/* Right side with FAQ accordion */}
          <div className="w-full lg:w-7/12">
            <Accordion type="single" collapsible defaultValue="item-0">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={`faq-${index}`}
                  value={`item-${index}`}
                  className="mb-4 md:mb-6 rounded-lg bg-white shadow-lg"
                >
                  <AccordionTrigger className="px-4 md:px-6 lg:px-8 py-4 md:py-5 lg:py-6 text-left font-['Poppins',Helvetica] font-semibold text-[#7e4a1d] text-sm md:text-base lg:text-lg leading-tight hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 md:px-6 lg:px-8 pb-4 md:pb-5 lg:pb-6 font-['Poppins',Helvetica] font-normal text-[#7e4a1d] text-xs md:text-sm lg:text-base leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Award images at bottom */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mt-8 md:mt-12 lg:mt-16">
          <img className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-cover rounded-lg" alt="Award 1" src="/figmaAssets/1101-1.png" />
          <img className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-cover rounded-lg" alt="Award 2" src="/figmaAssets/1101-1.png" />
          <img className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-cover rounded-lg" alt="Award 3" src="/figmaAssets/1101-1.png" />
          <img className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-cover rounded-lg" alt="Award 4" src="/figmaAssets/1101-1.png" />
          <img className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-cover rounded-lg" alt="Award 5" src="/figmaAssets/1101-1.png" />
        </div>
      </div>

      {/* Background image */}
      <img
        className="absolute top-0 left-0 -z-10 w-full h-full opacity-20"
        alt="Background design"
        src="/figmaAssets/untitled-design--12--1-2.svg"
      />
    </section>
  );
};