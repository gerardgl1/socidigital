import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/soci-digital-logo.png";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const handleCTAClick = () => {
    // @ts-ignore - Plausible analytics
    window.plausible?.("cta_navbar_click");
    scrollToSection("contact");
  };

  const menuItems = [
    { label: "Com treballem", id: "how-we-work" },
    { label: "Casos", id: "cases" },
    { label: "FAQ", id: "faq" },
    { label: "Contacte", id: "contact" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5, rootMargin: "-100px 0px -50% 0px" }
    );

    menuItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center focus-visible:outline-2 focus-visible:outline-coral focus-visible:outline-offset-2"
          >
            <img 
              src={logo} 
              alt="SOCI DIGITAL" 
              className="h-10" 
              width={40} 
              height={40}
              decoding="async"
            />
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-navy hover:text-coral transition-colors duration-300 font-medium focus-visible:outline-2 focus-visible:outline-coral focus-visible:outline-offset-2"
                aria-current={activeSection === item.id ? "page" : undefined}
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={handleCTAClick}
              className="bg-coral hover:bg-navy text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 focus-visible:outline-2 focus-visible:outline-coral focus-visible:outline-offset-2"
            >
              Començar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-navy"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-3 text-navy hover:text-coral transition-colors duration-300 font-medium focus-visible:outline-2 focus-visible:outline-coral focus-visible:outline-offset-2"
                aria-current={activeSection === item.id ? "page" : undefined}
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={handleCTAClick}
              className="w-full mt-4 bg-coral hover:bg-navy text-white font-semibold py-3 rounded-lg transition-all duration-300 focus-visible:outline-2 focus-visible:outline-coral focus-visible:outline-offset-2"
            >
              Començar
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
