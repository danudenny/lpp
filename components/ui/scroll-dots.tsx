"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ScrollDotsProps {
  sectionIds: string[];
}

export default function ScrollDots({ sectionIds }: ScrollDotsProps) {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      for (const sectionId of sectionIds) {
        const section = document.getElementById(sectionId);
        if (!section) continue;
        
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(sectionId);
          break;
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set initial active section
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionIds]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50 flex flex-col space-y-4">
      {sectionIds.map((sectionId) => (
        <button
          key={sectionId}
          onClick={() => scrollToSection(sectionId)}
          className={cn(
            "w-3 h-3 rounded-full transition-all duration-300 focus:outline-none",
            activeSection === sectionId
              ? "bg-blue-600 scale-125"
              : "bg-gray-400 hover:bg-gray-600"
          )}
          aria-label={`Scroll to ${sectionId} section`}
        />
      ))}
    </div>
  );
}
