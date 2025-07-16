import { Eye, Target, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ValuesSection() {
  return (
    <section className="min-h-screen bg-gray-50">
      <div className="h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full min-h-screen">
          <div className="h-full min-h-screen bg-[url('/service1.jpg?height=1200&width=800')] bg-cover bg-center"></div>
          <div className="flex items-center px-6 lg:px-12 py-12 lg:py-24">
            <div>
              <Badge className="bg-blue-100 text-blue-800 px-4 py-2 text-sm font-semibold mb-6">
                Our Values
              </Badge>
              <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight">
                Built on
                <span className="text-blue-600 block">Trust & Excellence</span>
              </h2>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 p-3 rounded-lg flex-shrink-0">
                    <Eye className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Vision
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      To be Indonesia's leading maritime transportation company,
                      connecting islands and driving economic prosperity.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 p-3 rounded-lg flex-shrink-0">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Mission
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Delivering reliable, safe, and efficient maritime
                      solutions that support Indonesia's inter-island
                      connectivity and economic growth.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 p-3 rounded-lg flex-shrink-0">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Values
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Safety first, environmental responsibility, operational
                      excellence, and unwavering commitment to our clients'
                      success.
                    </p>
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
