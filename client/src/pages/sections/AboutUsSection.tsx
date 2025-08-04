import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const AboutUsSection = (): JSX.Element => {
  // FAQ data for mapping
  const faqItems = [
    {
      question: "Is Narpavai Honey 100% pure and natural?",
      answer:
        "Yes, Narpavai Honey is 100% pure, unprocessed, and free from any additives or preservatives. We source our honey directly from trusted beekeepers to ensure natural goodness in every drop.",
      defaultOpen: true,
    },
    {
      question: "How do I store honey properly?",
      answer: "",
      defaultOpen: false,
    },
    {
      question: "Is your honey safe for kids and elders?",
      answer: "",
      defaultOpen: false,
    },
    {
      question: "Does honey expire or crystallize over time?",
      answer: "",
      defaultOpen: false,
    },
  ];

  return (
    <section className="relative w-full bg-[#fffbe2] py-14">
      <div className="container relative mx-auto">
        <h2 className="mb-10 font-['Alata',Helvetica] text-5xl text-[#7e4a1d] leading-[57.6px]">
          Frequently Asked Questions
        </h2>

        <div className="flex flex-wrap items-start justify-between">
          {/* Left side with images */}
          <div className="relative mb-8 md:mb-0 md:w-5/12">
            <img
              className="w-full max-w-[435px]"
              alt="Honey jar illustration"
              src="/figmaAssets/group-1000005074.png"
            />
            <img
              className="absolute right-4 bottom-0 w-40"
              alt="Decorative element"
              src="/figmaAssets/untitled-design--58--3-5.png"
            />
            <img
              className="absolute bottom-[-20px] right-12 w-[117px]"
              alt="Decorative element"
              src="/figmaAssets/untitled-design--58--4.png"
            />
          </div>

          {/* Right side with FAQ accordion */}
          <div className="md:w-6/12">
            <Accordion type="single" collapsible defaultValue="item-0">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={`faq-${index}`}
                  value={`item-${index}`}
                  className="mb-8 rounded-[4.91px] bg-white shadow-[0px_24.56px_32.74px_-14.73px_#7e4a1d80]"
                >
                  <AccordionTrigger className="px-9 py-6 text-left opacity-[0.88] font-['Poppins',Helvetica] font-semibold text-[#7e4a1d] text-lg leading-[23.4px]">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-9 pb-6 opacity-70 font-['Poppins',Helvetica] font-normal text-[#7e4a1d] text-sm tracking-[0.10px] leading-[21.1px]">
                    {item.answer || "Content coming soon..."}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Decorative bee image */}
        <img
          className="absolute top-0 right-0 w-[113px] h-[109px] object-cover"
          alt="Bee"
          src="/figmaAssets/bee-3.png"
        />

        {/* Background image */}
        <img
          className="absolute top-0 left-0 -z-10 w-full h-full"
          alt="Background design"
          src="/figmaAssets/untitled-design--12--1-2.svg"
        />
      </div>
    </section>
  );
};
