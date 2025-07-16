import { CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function TugboatServicesSection() {
  return (
    <section className="min-h-screen">
      <div className="h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full min-h-screen">
          <div className="h-full min-h-screen bg-[url('/service3.jpg?height=1200&width=800')] bg-cover bg-center"></div>
          <div className="flex items-center px-6 lg:px-12 py-12 lg:py-24">
            <div>
              <Badge className="bg-blue-100 text-blue-800 px-4 py-2 text-sm font-semibold mb-6">
                Tugboat Services
              </Badge>
              <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight">
                Professional
                <span className="text-blue-600 block">Harbor Operations</span>
              </h2>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed font-light">
                Our tugboat fleet provides essential maritime services with
                unmatched reliability and safety standards across Indonesian
                ports and waterways.
              </p>

              <div className="space-y-4 mb-10">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0" />
                  <span className="text-lg text-gray-700">
                    Harbor assistance and vessel maneuvering
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0" />
                  <span className="text-lg text-gray-700">
                    Emergency response and rescue operations
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0" />
                  <span className="text-lg text-gray-700">
                    Vessel escort through challenging waters
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0" />
                  <span className="text-lg text-gray-700">
                    24/7 operational availability
                  </span>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-black text-blue-600 mb-1">
                      65T
                    </div>
                    <div className="text-gray-600 font-medium">
                      Max Bollard Pull
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-blue-600 mb-1">
                      3,500
                    </div>
                    <div className="text-gray-600 font-medium">
                      Max Horsepower
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
