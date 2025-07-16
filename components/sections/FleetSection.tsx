import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function FleetSection() {
  return (
    <section id="fleet" className="min-h-screen">
      <div className="h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full min-h-screen">
          <div className="flex items-center px-6 lg:px-12 py-12 lg:py-24">
            <div>
              <Badge className="bg-blue-100 text-blue-800 px-4 py-2 text-sm font-semibold mb-6">
                Our Fleet
              </Badge>
              <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight">
                State-of-the-Art
                <span className="text-blue-600 block">Maritime Vessels</span>
              </h2>

              <div className="grid grid-cols-2 gap-8 mb-10">
                <div className="text-center">
                  <div className="text-4xl font-black text-blue-600 mb-2">
                    15
                  </div>
                  <div className="text-gray-600 font-medium">Tugboats</div>
                  <div className="text-sm text-gray-500">1,200-3,500 HP</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-blue-600 mb-2">
                    14
                  </div>
                  <div className="text-gray-600 font-medium">Barges</div>
                  <div className="text-sm text-gray-500">500-5,000 DWT</div>
                </div>
              </div>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed font-light">
                Our modern fleet represents the pinnacle of maritime
                engineering, designed for efficiency, safety, and environmental
                responsibility across Indonesian waters.
              </p>

              <Button className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4 font-semibold">
                View Fleet Details
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="h-full min-h-screen bg-[url('/service4.jpg?height=1200&width=800')] bg-cover bg-center"></div>
        </div>
      </div>
    </section>
  );
}
