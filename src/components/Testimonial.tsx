import { Quote } from "lucide-react";

const Testimonial = () => {
  return (
    <section className="py-20 sm:py-32 bg-gradient-to-br from-coral to-coral/90">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Quote className="h-12 w-12 text-white/50 mx-auto mb-8" />
          
          <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white mb-8 leading-relaxed">
            "Amb Soci Digital hem guanyat temps i tranquil·litat. Ara el nostre equip pot centrar-se en els clients."
          </blockquote>
          
          <div className="border-t-2 border-white/30 pt-6 inline-block">
            <p className="text-white font-semibold text-lg">
              Centre de Fisioteràpia Moviment BCN
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
