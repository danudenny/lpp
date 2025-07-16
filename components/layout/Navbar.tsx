import { useState } from "react";
import { Ship, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { MobileThemeToggle } from "@/components/ui/mobile-theme-toggle";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  return (
    <nav className="fixed top-0 w-full bg-white/90 dark:bg-gray-950/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 z-40">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="bg-blue-600 p-2 sm:p-2.5 rounded-lg">
              <Ship className="h-5 w-5 sm:h-7 sm:w-7 text-white" />
            </div>
            <div>
              <h1 className="text-sm sm:text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">
                PT. LPP
                <span className="hidden md:inline"> - LINTAS PRIMA PERKASA</span>
              </h1>
              <p className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 font-medium">
                One Stop Marine Transportation
              </p>
            </div>
          </div>
          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <a
              href="#about"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
            >
              About
            </a>
            <a
              href="#fleet"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
            >
              Fleet
            </a>
            <a
              href="#services"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
            >
              Contact
            </a>
            <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 px-6 py-2.5">
              Get Quote
            </Button>
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800 py-4 px-6 shadow-lg">
            <div className="flex flex-col space-y-4">
              <a
                href="#about"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#fleet"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Fleet
              </a>
              <a
                href="#services"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#contact"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <div className="flex items-center justify-between py-2">
                <Button
                  className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 px-6 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Quote
                </Button>
                <MobileThemeToggle />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
