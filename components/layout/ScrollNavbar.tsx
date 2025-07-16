"use client";

import { useState, useEffect } from "react";
import { Ship, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { MobileThemeToggle } from "@/components/ui/mobile-theme-toggle";
import { cn } from "@/lib/utils";

export default function ScrollNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    // Add event listener
    window.addEventListener("scroll", handleScroll);
    
    // Call handler right away to update state with initial scroll position
    handleScroll();
    
    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-40 transition-all duration-300",
        scrolled
          ? "bg-white/90 dark:bg-gray-950/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 shadow-sm"
          : "bg-transparent border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="bg-blue-600 p-2.5 rounded-lg">
              <Ship className="h-7 w-7 text-white" />
            </div>
            <div>
              <h1
                className={cn(
                  "text-xl font-bold tracking-tight",
                  scrolled
                    ? "text-gray-900 dark:text-gray-100"
                    : "text-white"
                )}
              >
                PT. LINTAS PRIMA PERKASA
              </h1>
              <p
                className={cn(
                  "text-sm font-medium",
                  scrolled
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-blue-300"
                )}
              >
                One Stop Marine Transportation
              </p>
            </div>
          </div>
          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className={cn(
                "p-2 rounded-md",
                scrolled
                  ? "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  : "text-white hover:bg-white/20"
              )}
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
              className={cn(
                "font-medium transition-colors",
                scrolled
                  ? "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  : "text-white hover:text-blue-200"
              )}
            >
              About
            </a>
            <a
              href="#fleet"
              className={cn(
                "font-medium transition-colors",
                scrolled
                  ? "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  : "text-white hover:text-blue-200"
              )}
            >
              Fleet
            </a>
            <a
              href="#services"
              className={cn(
                "font-medium transition-colors",
                scrolled
                  ? "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  : "text-white hover:text-blue-200"
              )}
            >
              Services
            </a>
            <a
              href="#contact"
              className={cn(
                "font-medium transition-colors",
                scrolled
                  ? "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  : "text-white hover:text-blue-200"
              )}
            >
              Contact
            </a>
            <Button
              className={cn(
                scrolled
                  ? "bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800"
                  : "bg-white text-blue-900 hover:bg-blue-50",
                "px-6 py-2.5"
              )}
            >
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
