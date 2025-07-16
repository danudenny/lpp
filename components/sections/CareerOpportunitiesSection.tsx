import { Users, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function CareerOpportunitiesSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="bg-blue-100 text-blue-800 px-4 py-2 text-sm font-semibold mb-6">
              Career Opportunities
            </Badge>
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight">
              Join Our
              <span className="text-blue-600 block">Maritime Team</span>
            </h2>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed font-light">
              We're looking for talented professionals to join our growing maritime operations. Explore opportunities
              to build a rewarding career in Indonesia's maritime sector.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Maritime Operations</h3>
                  <p className="text-gray-600">Vessel crews, captains, and maritime specialists</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Technical Positions</h3>
                  <p className="text-gray-600">Engineers, maintenance specialists, and safety officers</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Corporate Roles</h3>
                  <p className="text-gray-600">Management, administration, and support positions</p>
                </div>
              </div>
            </div>

            <Button className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4 font-semibold">
              View Open Positions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <div className="h-full min-h-[400px] bg-[url('/placeholder.svg?height=800&width=600')] bg-cover bg-center rounded-2xl"></div>
        </div>
      </div>
    </section>
  )
}
