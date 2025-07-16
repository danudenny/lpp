import { Award, Clock, Users, Target, Globe, Lightbulb } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function WhyChooseUsSection() {
  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="bg-blue-600 text-white px-4 py-2 text-sm font-semibold mb-6">Why Choose PT. LPP</Badge>
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
            Your Trusted Maritime Partner
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
            17+ years of maritime excellence, delivering reliable solutions that drive Indonesia's economic growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 text-center hover:bg-gray-750 transition-colors">
            <Award className="h-16 w-16 text-blue-400 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Proven Excellence</h3>
            <p className="text-gray-300 leading-relaxed">
              17+ years of industry leadership with successful operations across Indonesia's maritime sector.
            </p>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 text-center hover:bg-gray-750 transition-colors">
            <Clock className="h-16 w-16 text-blue-400 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">24/7 Operations</h3>
            <p className="text-gray-300 leading-relaxed">
              Round-the-clock availability ensuring continuous support for time-critical shipments.
            </p>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 text-center hover:bg-gray-750 transition-colors">
            <Users className="h-16 w-16 text-blue-400 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Expert Team</h3>
            <p className="text-gray-300 leading-relaxed">
              Highly skilled maritime professionals with deep knowledge of Indonesian waters and regulations.
            </p>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 text-center hover:bg-gray-750 transition-colors">
            <Target className="h-16 w-16 text-blue-400 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Reliability</h3>
            <p className="text-gray-300 leading-relaxed">
              Consistent, on-time delivery that businesses across Indonesia trust for critical transportation.
            </p>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 text-center hover:bg-gray-750 transition-colors">
            <Globe className="h-16 w-16 text-blue-400 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">National Coverage</h3>
            <p className="text-gray-300 leading-relaxed">
              Comprehensive service network covering all major Indonesian ports and waterways.
            </p>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 text-center hover:bg-gray-750 transition-colors">
            <Lightbulb className="h-16 w-16 text-blue-400 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Innovation</h3>
            <p className="text-gray-300 leading-relaxed">
              Continuous investment in modern technology and innovative maritime solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
