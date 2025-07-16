import { Waves, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/hero_video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 to-black/50"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-6 backdrop-blur-sm bg-black/10 rounded-2xl py-10 border border-white/10 shadow-xl">
        <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-full text-sm font-medium mb-8">
          <Waves className="h-4 w-4 mr-2" />
          Established Since 2007
        </div>
        <h1 className="text-6xl lg:text-8xl font-black text-white mb-8 leading-tight tracking-tight text-shadow">
          MARITIME
          <span className="block text-blue-200 text-shadow">EXCELLENCE</span>
        </h1>
        <p className="text-xl lg:text-2xl text-white mb-12 max-w-3xl mx-auto font-medium leading-relaxed text-shadow font-space-grotesk">
          Connecting Indonesia's archipelago with 29 state-of-the-art vessels,
          delivering reliable maritime transportation solutions across 17,000+
          islands.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button
            size="lg"
            className="bg-white text-blue-900 hover:bg-gray-100 text-lg px-10 py-4 font-semibold"
          >
            Explore Our Fleet
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-blue-900 text-lg px-10 py-4 font-semibold bg-transparent"
          >
            Contact Us
          </Button>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <a
          href="#about"
          className="flex flex-col items-center text-white opacity-80 hover:opacity-100 transition-opacity"
        >
          <span className="text-sm font-medium mb-2 font-space-grotesk">
            Scroll Down
          </span>
          <ChevronDown className="h-6 w-6" />
        </a>
      </div>
    </section>
  );
}
