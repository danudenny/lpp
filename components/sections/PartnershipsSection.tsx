import { Handshake, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function PartnershipsSection() {
  return (
    <section className="min-h-screen bg-gray-50">
      <div className="h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full min-h-screen">
          <div className="h-full min-h-screen bg-[url('/image2.jpg?height=1200&width=800')] bg-cover bg-center"></div>
          <div className="flex items-center px-6 lg:px-12 py-12 lg:py-24">
            <div>
              <Badge className="bg-blue-100 text-blue-800 px-4 py-2 text-sm font-semibold mb-6">
                Strategic Partnerships
              </Badge>
              <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight">
                Trusted by
                <span className="text-blue-600 block">Industry Leaders</span>
              </h2>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed font-light">
                We collaborate with Indonesia's leading companies, government
                agencies, and international partners to deliver exceptional
                maritime solutions.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-center space-x-4">
                  <Handshake className="h-8 w-8 text-blue-600" />
                  <span className="text-lg text-gray-700 font-medium">
                    Government Maritime Agencies
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <Handshake className="h-8 w-8 text-blue-600" />
                  <span className="text-lg text-gray-700 font-medium">
                    Major Port Operators
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <Handshake className="h-8 w-8 text-blue-600" />
                  <span className="text-lg text-gray-700 font-medium">
                    International Shipping Companies
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <Handshake className="h-8 w-8 text-blue-600" />
                  <span className="text-lg text-gray-700 font-medium">
                    Construction & Mining Companies
                  </span>
                </div>
              </div>

              <Button className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4 font-semibold">
                Become a Partner
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
