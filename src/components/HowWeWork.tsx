import { Search, Lightbulb, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const HowWeWork = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Analitzem el teu negoci",
      description: "Entenem els teus processos i identifiquem oportunitats d'automatització.",
    },
    {
      number: "02",
      icon: Lightbulb,
      title: "Definim les automatitzacions clau",
      description: "Dissenyem solucions específiques per optimitzar el teu temps i recursos.",
    },
    {
      number: "03",
      icon: Rocket,
      title: "T'ajudem a implementar-les",
      description: "Pas a pas, sense complicacions tècniques, amb suport continu.",
    },
  ];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 sm:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4">
            Com treballem
          </h2>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-start gap-6 md:gap-8"
            >
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-coral to-coral/80 flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                  {step.number}
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-navy/5 rounded-xl flex items-center justify-center">
                    <step.icon className="h-6 w-6 text-navy" />
                  </div>
                  <h3 className="text-2xl font-semibold text-navy">
                    {step.title}
                  </h3>
                </div>
                <p className="text-lg text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            onClick={scrollToContact}
            variant="outline"
            size="lg"
            className="border-2 border-navy text-navy hover:bg-navy hover:text-white font-semibold px-8 py-6 text-lg rounded-xl transition-all duration-300"
          >
            Parlem del teu cas
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
