import { Ship } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-blue-600 p-3 rounded-lg">
                <Ship className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-black">
                  PT. LINTAS PRIMA PERKASA
                </h3>
                <p className="text-blue-400 font-medium">
                  One Stop Marine Transportation
                </p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed text-lg mb-8">
              Connecting Indonesia's 17,000+ islands through reliable maritime
              transportation services since 2007. Your trusted partner for
              comprehensive maritime solutions.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Our Services</h4>
            <ul className="space-y-3 text-gray-300">
              <li>Tugboat Operations</li>
              <li>Barge Transportation</li>
              <li>Inter-Island Distribution</li>
              <li>Maritime Logistics</li>
              <li>24/7 Operations</li>
              <li>Specialized Transport</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Contact Info</h4>
            <div className="space-y-3 text-gray-300">
              <p>Jakarta Utara, DKI Jakarta 14470</p>
              <p>(021) 22574474</p>
              <p>24/7 Operations Available</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} PT. Lintas Prima Perkasa.
            </p>
            <p className="text-gray-400 mb-4 md:mb-0">All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
