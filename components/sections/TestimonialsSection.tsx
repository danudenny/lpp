import { Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function TestimonialsSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="bg-blue-100 text-blue-800 px-4 py-2 text-sm font-semibold mb-6">Testimonials</Badge>
          <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
            Hear from businesses across Indonesia who rely on our maritime transportation services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <p className="text-gray-700 mb-6 italic">
              "PT. LPP has been our trusted maritime logistics partner for over 5 years. Their reliability and
              professionalism have been crucial for our inter-island supply chain operations."
            </p>
            <div className="flex items-center">
              <div className="h-12 w-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                JD
              </div>
              <div className="ml-4">
                <div className="font-bold text-gray-900">John Doe</div>
                <div className="text-sm text-gray-500">Logistics Manager, PT. Resource Indonesia</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <p className="text-gray-700 mb-6 italic">
              "The tugboat services provided by PT. LPP have significantly improved our port operations efficiency.
              Their crews are highly skilled and their vessels are well-maintained."
            </p>
            <div className="flex items-center">
              <div className="h-12 w-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                JS
              </div>
              <div className="ml-4">
                <div className="font-bold text-gray-900">Jane Smith</div>
                <div className="text-sm text-gray-500">Operations Director, Jakarta Port Authority</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <p className="text-gray-700 mb-6 italic">
              "We've been impressed by PT. LPP's commitment to safety and environmental protection. Their barge
              transportation services have been essential for our construction projects across Indonesia."
            </p>
            <div className="flex items-center">
              <div className="h-12 w-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                RW
              </div>
              <div className="ml-4">
                <div className="font-bold text-gray-900">Robert Wilson</div>
                <div className="text-sm text-gray-500">Project Manager, PT. Build Indonesia</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
