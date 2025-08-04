
import React from "react";
import { Play } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const VideoTourSection = (): JSX.Element => {
  return (
    <section className="w-full bg-gradient-to-b from-[#f5dc6f] to-[#fbd68f] py-8 md:py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <h2 className="font-['Alata',Helvetica] text-[#843503] text-lg md:text-xl lg:text-2xl xl:text-3xl mb-6 md:mb-8 lg:mb-12 text-center">
          Take a video tour to know our honey farm
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
          {/* Main video */}
          <Card className="md:col-span-1 rounded-2xl overflow-hidden shadow-lg">
            <CardContent className="p-0">
              <div className="relative h-48 md:h-64 lg:h-80 bg-cover bg-center" style={{backgroundImage: 'url(/figmaAssets/frame-1321314512.png)'}}>
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <button className="w-12 h-12 md:w-16 md:h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                    <Play className="w-6 h-6 md:w-8 md:h-8 text-[#843503] ml-1" />
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Side videos */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            <Card className="rounded-2xl overflow-hidden shadow-lg">
              <CardContent className="p-0">
                <div className="relative h-32 md:h-40 lg:h-48 bg-cover bg-center" style={{backgroundImage: 'url(/figmaAssets/frame-1321314514.png)'}}>
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <button className="w-10 h-10 md:w-12 md:h-12 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                      <Play className="w-5 h-5 md:w-6 md:h-6 text-[#843503] ml-1" />
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="rounded-2xl overflow-hidden shadow-lg">
              <CardContent className="p-0">
                <div className="relative h-32 md:h-40 lg:h-48 bg-cover bg-center" style={{backgroundImage: 'url(/figmaAssets/frame-1321314512.png)'}}>
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <button className="w-10 h-10 md:w-12 md:h-12 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                      <Play className="w-5 h-5 md:w-6 md:h-6 text-[#843503] ml-1" />
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
