import { Leaf, Waves, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function EnvironmentalCommitmentSection() {
  return (
    <section className="min-h-screen">
      <div className="h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full min-h-screen">
          <div className="flex items-center px-6 lg:px-12 py-12 lg:py-24">
            <div>
              <Badge className="bg-green-100 text-green-800 px-4 py-2 text-sm font-semibold mb-6">
                Environmental Commitment
              </Badge>
              <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight">
                Protecting
                <span className="text-green-600 block">Marine Ecosystems</span>
              </h2>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed font-light">
                We're committed to sustainable maritime operations that protect
                Indonesia's precious marine environment while supporting
                economic development.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 p-3 rounded-lg flex-shrink-0">
                    <Leaf className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Emission Control
                    </h3>
                    <p className="text-gray-600">
                      Advanced engine technology and fuel management systems to
                      minimize environmental impact.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 p-3 rounded-lg flex-shrink-0">
                    <Waves className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Marine Protection
                    </h3>
                    <p className="text-gray-600">
                      Strict protocols to prevent marine pollution and protect
                      underwater ecosystems.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 p-3 rounded-lg flex-shrink-0">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Certifications
                    </h3>
                    <p className="text-gray-600">
                      ISO 14001 environmental management and MARPOL compliance
                      certifications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-full min-h-screen bg-[url('/image1.jpg?height=1200&width=800')] bg-cover bg-center"></div>
        </div>
      </div>
    </section>
  );
}
