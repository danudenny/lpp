import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile on component mount and window resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is typical md breakpoint
    };

    // Initial check
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile);

    // Clean up event listener
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      text: "PT. LPP has been our trusted maritime logistics partner for over 5 years. Their reliability and professionalism have been crucial for our inter-island supply chain operations.",
      name: "John Doe",
      position: "Logistics Manager, PT. Resource Indonesia",
      initials: "JD",
    },
    {
      id: 2,
      text: "The tugboat services provided by PT. LPP have significantly improved our port operations efficiency. Their crews are highly skilled and their vessels are well-maintained.",
      name: "Jane Smith",
      position: "Operations Director, Jakarta Port Authority",
      initials: "JS",
    },
    {
      id: 3,
      text: "We've been impressed by PT. LPP's commitment to safety and environmental protection. Their barge transportation services have been essential for our construction projects across Indonesia.",
      name: "Robert Wilson",
      position: "Project Manager, PT. Build Indonesia",
      initials: "RW",
    },
  ];

  // Navigation functions
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === testimonials.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="bg-blue-100 text-blue-800 px-4 py-2 text-sm font-semibold mb-6">
            Testimonials
          </Badge>
          <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
            Hear from businesses across Indonesia who rely on our maritime
            transportation services.
          </p>
        </div>

        {/* Mobile Carousel View */}
        <div className={`relative ${!isMobile ? "hidden" : ""}`}>
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 mx-auto max-w-md">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>
            <p className="text-gray-700 mb-6 italic">
              "{testimonials[currentIndex].text}"
            </p>
            <div className="flex items-center">
              <div className="h-12 w-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                {testimonials[currentIndex].initials}
              </div>
              <div className="ml-4">
                <div className="font-bold text-gray-900">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-sm text-gray-500">
                  {testimonials[currentIndex].position}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white p-2 rounded-full shadow-lg border border-gray-200"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-blue-600" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white p-2 rounded-full shadow-lg border border-gray-200"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-blue-600" />
          </button>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  currentIndex === index ? "w-6 bg-blue-600" : "w-2 bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid View */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${
            isMobile ? "hidden" : ""
          }`}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
              <div className="flex items-center">
                <div className="h-12 w-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.initials}
                </div>
                <div className="ml-4">
                  <div className="font-bold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.position}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
