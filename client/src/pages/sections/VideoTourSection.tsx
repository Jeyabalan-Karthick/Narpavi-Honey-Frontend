
import React, { useState } from "react";
import { Play } from "lucide-react";

export const VideoTourSection = (): JSX.Element => {
  const [centerVideo, setCenterVideo] = useState(0);

  const videos = [
    {
      id: 0,
      title: "Main Honey Farm Tour",
      image: "/figmaAssets/group-1000005074.png",
    },
    {
      id: 1,
      title: "Beekeeping Process",
      image: "/figmaAssets/untitled-design--58--3.png",
    },
    {
      id: 2,
      title: "Honey Extraction",
      image: "/figmaAssets/untitled-design--59--1.png",
    }
  ];

  const handleVideoClick = (videoId: number) => {
    setCenterVideo(videoId);
  };

  const getLeftVideo = () => {
    return videos[(centerVideo + 2) % 3];
  };

  const getRightVideo = () => {
    return videos[(centerVideo + 1) % 3];
  };

  return (
    <section className="relative w-full bg-[#f5f2e8] py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-['Alata',Helvetica] font-normal text-[#843503] text-2xl md:text-3xl lg:text-4xl text-center mb-8 md:mb-12">
          Take a video tour to know our honey form
        </h2>

        <div className="relative max-w-6xl mx-auto">
          {/* Desktop Layout */}
          <div className="hidden lg:flex items-center justify-center gap-8">
            {/* Left Video */}
            <div 
              className="w-48 h-32 cursor-pointer transform transition-all duration-300 hover:scale-105"
              onClick={() => handleVideoClick(getLeftVideo().id)}
            >
              <div className="relative w-full h-full bg-white rounded-lg overflow-hidden shadow-md">
                <img
                  src={getLeftVideo().image}
                  alt={getLeftVideo().title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <button className="w-10 h-10 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all">
                    <Play className="w-5 h-5 text-[#843503] ml-0.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Center Video (Main) */}
            <div className="w-96 h-64">
              <div className="relative w-full h-full bg-white rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={videos[centerVideo].image}
                  alt={videos[centerVideo].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                  <button className="w-20 h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all group">
                    <Play className="w-10 h-10 text-[#843503] ml-1 group-hover:scale-110 transition-transform" />
                  </button>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-['Poppins',Helvetica] font-semibold text-lg">
                    {videos[centerVideo].title}
                  </h3>
                </div>
              </div>
            </div>

            {/* Right Video */}
            <div 
              className="w-48 h-32 cursor-pointer transform transition-all duration-300 hover:scale-105"
              onClick={() => handleVideoClick(getRightVideo().id)}
            >
              <div className="relative w-full h-full bg-white rounded-lg overflow-hidden shadow-md">
                <img
                  src={getRightVideo().image}
                  alt={getRightVideo().title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <button className="w-10 h-10 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all">
                    <Play className="w-5 h-5 text-[#843503] ml-0.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden">
            {/* Main Video */}
            <div className="relative max-w-md mx-auto mb-6">
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className="aspect-video relative">
                  <img
                    src={videos[centerVideo].image}
                    alt={videos[centerVideo].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                    <button className="w-16 h-16 md:w-20 md:h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all group">
                      <Play className="w-8 h-8 md:w-10 md:h-10 text-[#843503] ml-1 group-hover:scale-110 transition-transform" />
                    </button>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-['Poppins',Helvetica] font-semibold text-base md:text-lg">
                      {videos[centerVideo].title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Side Videos Grid */}
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
              <div 
                className="cursor-pointer transform transition-all duration-300 hover:scale-105"
                onClick={() => handleVideoClick(getLeftVideo().id)}
              >
                <div className="relative aspect-video bg-white rounded-lg overflow-hidden shadow-md">
                  <img
                    src={getLeftVideo().image}
                    alt={getLeftVideo().title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <button className="w-10 h-10 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                      <Play className="w-5 h-5 text-[#843503] ml-0.5" />
                    </button>
                  </div>
                </div>
              </div>
              <div 
                className="cursor-pointer transform transition-all duration-300 hover:scale-105"
                onClick={() => handleVideoClick(getRightVideo().id)}
              >
                <div className="relative aspect-video bg-white rounded-lg overflow-hidden shadow-md">
                  <img
                    src={getRightVideo().image}
                    alt={getRightVideo().title}
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
          </div>
        </div>
      </div>
    </section>
  );
};
