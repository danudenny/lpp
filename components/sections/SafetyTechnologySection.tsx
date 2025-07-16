import { Shield, Settings, Leaf } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function SafetyTechnologySection() {
  return (
    <section className="min-h-screen">
      <div className="h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full min-h-screen">
          <div className="h-full min-h-screen bg-[url('/placeholder.svg?height=1200&width=800')] bg-cover bg-center"></div>
          <div className="flex items-center px-6 lg:px-12 py-12 lg:py-24">
            <div>
              <Badge className="bg-blue-100 text-blue-800 px-4 py-2 text-sm font-semibold mb-6">
                Safety & Technology
              </Badge>
              <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight">
                Advanced
                <span className="text-blue-600 block">Maritime Technology</span>
              </h2>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed font-light">
                Our vessels are equipped with cutting-edge navigation systems, safety equipment, and environmental
                monitoring technology to ensure optimal performance and compliance.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 p-3 rounded-lg flex-shrink-0">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Safety Standards</h3>
                    <p className="text-gray-600">
                      ISO 9001 certified operations with comprehensive safety protocols and regular crew training
                      programs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 p-3 rounded-lg flex-shrink-0">
                    <Settings className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Modern Equipment</h3>
                    <p className="text-gray-600">
                      State-of-the-art navigation systems, GPS tracking, and real-time communication technology.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 p-3 rounded-lg flex-shrink-0">
                    <Leaf className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Environmental Care</h3>
                    <p className="text-gray-600">
                      Eco-friendly operations with emission monitoring and marine environment protection measures.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
