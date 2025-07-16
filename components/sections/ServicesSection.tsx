import { Ship, Truck, Globe, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";

export default function ServicesSection() {
  // State to track if device is mobile
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if device is mobile on component mount and window resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is typical md breakpoint
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Clean up event listener
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);
  // Define services with images
  const services = [
    {
      id: 1,
      title: "Tugboat Services",
      description:
        "Professional harbor assistance, vessel escort, and emergency maritime support operations.",
      icon: <Ship className="h-10 w-10 text-white" />,
      image: "/service1.jpg",
      defaultWidth: "25%",
    },
    {
      id: 2,
      title: "Barge Transportation",
      description:
        "Heavy-duty cargo transport for bulk goods, construction materials, and specialized equipment.",
      icon: <Truck className="h-10 w-10 text-white" />,
      image: "/service2.jpg",
      defaultWidth: "25%",
    },
    {
      id: 3,
      title: "Inter-Island Logistics",
      description:
        "Seamless distribution of goods and natural resources across Indonesia's archipelago.",
      icon: <Globe className="h-10 w-10 text-white" />,
      image: "/service3.jpg",
      defaultWidth: "25%",
    },
    {
      id: 4,
      title: "Maritime Consulting",
      description:
        "Expert advisory services for maritime operations, safety protocols, and regulatory compliance.",
      icon: <ArrowRight className="h-10 w-10 text-white" />,
      image: "/service4.jpg",
      defaultWidth: "25%",
    },
  ];

  const [hoveredId, setHoveredId] = useState<number | null>(null);
  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-b from-blue-700 to-blue-900"
    >
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <Badge className="bg-white/20 text-white px-4 py-2 text-sm font-semibold mb-6">
          Our Services
        </Badge>
        <h2 className="text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
          Comprehensive Maritime Solutions
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-4xl mx-auto font-light leading-relaxed">
          From tugboat operations to specialized logistics, we deliver
          end-to-end maritime transportation services.
        </p>
      </div>

      {/* Expandable Image Gallery */}
      <div className="flex flex-col lg:flex-row h-auto lg:h-[500px] mb-16 overflow-hidden">
        {services.map((service) => (
          <div
            key={service.id}
            className="relative transition-all duration-500 ease-in-out overflow-hidden bg-cover bg-center h-[250px] lg:h-full"
            style={{
              backgroundImage: `url(${service.image})`,
              width: isMobile 
                ? "100%" // Full width on mobile
                : hoveredId === service.id
                  ? "40%"
                  : hoveredId === null
                  ? service.defaultWidth
                  : "20%",
            }}
            onMouseEnter={() => !isMobile && setHoveredId(service.id)}
            onMouseLeave={() => !isMobile && setHoveredId(null)}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-800/70 to-blue-700/50 flex flex-col justify-end p-8">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-white text-2xl font-bold mb-3">
                {service.title}
              </h3>
              <p
                className="text-white/80 mb-4 transition-opacity duration-300"
                style={{ opacity: isMobile || hoveredId === service.id ? 1 : 0 }}
              >
                {service.description}
              </p>
              <div
                className="flex items-center transition-opacity duration-300"
                style={{ opacity: isMobile || hoveredId === service.id ? 1 : 0 }}
              >
                <span className="text-white font-medium mr-2">Learn more</span>
                <ArrowRight className="h-5 w-5 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-xl text-white/90 mb-8 max-w-4xl mx-auto font-light leading-relaxed">
          Our comprehensive suite of services ensures that your maritime
          logistics needs are met with precision, reliability, and the highest
          standards of safety.
        </p>
      </div>
    </section>
  );
}
