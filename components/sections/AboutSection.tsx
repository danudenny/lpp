import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen">
      <div className="h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full min-h-screen">
          <div className="flex items-center px-6 lg:px-12 py-12 lg:py-24">
            <div>
              <Badge className="bg-blue-100 text-blue-800 px-4 py-2 text-sm font-semibold mb-6">
                About PT. LPP
              </Badge>
              <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight">
                Pioneering Indonesia's
                <span className="text-blue-600 block">Maritime Future</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed font-light">
                Since 2007, PT. Lintas Prima Perkasa has evolved from a
                visionary startup to Indonesia's premier maritime transportation
                company, operating 29 specialized vessels that connect our
                nation's vast archipelago.
              </p>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Our strategic alignment with Indonesia's maritime development
                goals positions us as a catalyst for economic growth,
                facilitating seamless distribution of goods and natural
                resources across 17,000+ islands.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4 font-semibold">
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="h-full min-h-screen bg-[url('/service2.jpg?height=1200&width=800')] bg-cover bg-center"></div>
        </div>
      </div>
    </section>
  );
}
