
import React from "react";
import { Play } from "lucide-react";

export const VideoTourSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-[#f5f2e8] py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-['Alata',Helvetica] font-normal text-[#843503] text-2xl md:text-3xl lg:text-4xl text-center mb-8 md:mb-12">
          Take a video tour to know our honey form
        </h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Video Container */}
          <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="aspect-video relative">
              <img
                src="/figmaAssets/group-1000005074.png"
                alt="Honey farm video preview"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                <button className="w-16 h-16 md:w-20 md:h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all group">
                  <Play className="w-8 h-8 md:w-10 md:h-10 text-[#843503] ml-1 group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Side Videos */}
          <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 -left-20 w-32 h-20">
            <div className="relative w-full h-full bg-white rounded-lg overflow-hidden shadow-md">
              <img
                src="/figmaAssets/untitled-design--58--3.png"
                alt="Side video 1"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <button className="w-8 h-8 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                  <Play className="w-4 h-4 text-[#843503] ml-0.5" />
                </button>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 -right-20 w-32 h-20">
            <div className="relative w-full h-full bg-white rounded-lg overflow-hidden shadow-md">
              <img
                src="/figmaAssets/untitled-design--59--1.png"
                alt="Side video 2"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <button className="w-8 h-8 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                  <Play className="w-4 h-4 text-[#843503] ml-0.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Side Videos */}
        <div className="lg:hidden grid grid-cols-2 gap-4 mt-6 max-w-md mx-auto">
          <div className="relative aspect-video bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src="/figmaAssets/untitled-design--58--3.png"
              alt="Side video 1"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <button className="w-10 h-10 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                <Play className="w-5 h-5 text-[#843503] ml-0.5" />
              </button>
            </div>
          </div>
          <div className="relative aspect-video bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src="/figmaAssets/untitled-design--59--1.png"
              alt="Side video 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <button className="w-10 h-10 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                <Play className="w-5 h-5 text-[#843503] ml-0.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
