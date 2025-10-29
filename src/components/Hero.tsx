import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/soci-digital-logo.png";

const Hero = () => {
  const scrollToContact = () => {
    // @ts-ignore - Plausible analytics
    window.plausible?.("cta_hero_click");
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy via-navy to-primary">
      {/* Abstract background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-coral/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-coral/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-coral/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-12 fade-in">
            <img 
              src={logo} 
              alt="SOCI DIGITAL" 
              className="h-24 sm:h-32 mx-auto brightness-0 invert" 
              width={128} 
              height={128}
              decoding="async"
            />
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 fade-in-delay leading-tight">
            Fem que el teu negoci treballi per tu.
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-white/90 mb-12 fade-in-delay max-w-2xl mx-auto">
            Automatitzacions i IA en català per eliminar tasques repetitives i reduir errors.
          </p>

          {/* CTA Button */}
          <div className="fade-in-delay">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-coral hover:bg-navy text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Explica'm com treballes i t'ajudaré a automatitzar-ho
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
