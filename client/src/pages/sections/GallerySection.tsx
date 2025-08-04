
import React, { useEffect, useRef } from "react";

export const GallerySection = (): JSX.Element => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const galleryImages = [
    "/figmaAssets/untitled-design--58--3-1.png",
    "/figmaAssets/untitled-design--58--3-2.png", 
    "/figmaAssets/untitled-design--58--3-3.png",
    "/figmaAssets/untitled-design--58--3-4.png",
    "/figmaAssets/untitled-design--58--3-5.png",
    "/figmaAssets/group-1000005062-1.png",
    "/figmaAssets/group-1000005062-2.png",
    "/figmaAssets/group-1000005062-3.png",
    "/figmaAssets/group-1000005062-4.png",
    "/figmaAssets/group-1000005062-5.png"
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 1;
    const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;

    const scroll = () => {
      scrollPosition += scrollSpeed;
      if (scrollPosition >= maxScroll) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
    };

    const intervalId = setInterval(scroll, 20);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="relative w-full bg-[#fbd68f] py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="font-['Alata',Helvetica] font-normal text-[#843503] text-2xl md:text-3xl lg:text-4xl text-center mb-8 md:mb-12">
          Our Journey & Achievements
        </h2>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-hidden scrollbar-hide"
          style={{ scrollBehavior: 'smooth' }}
        >
          {/* Duplicate images for seamless loop */}
          {[...galleryImages, ...galleryImages].map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-64 h-48 md:w-80 md:h-60 bg-white rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
