import { MessageCircle, Settings, Star } from "lucide-react";

const ValueProposition = () => {
  const features = [
    {
      icon: MessageCircle,
      title: "Respon automàticament DMs i reserves",
      description: "Estalvia fins a 5 hores setmanals en recordatoris i confirmacions.",
    },
    {
      icon: Settings,
      title: "Processos intel·ligents amb IA",
      description: "Automatitza factures, inventari i seguiment de clients.",
    },
    {
      icon: Star,
      title: "Ressenyes en 1 clic",
      description: "Simplifica la recollida de feedback després de cada servei.",
    },
  ];

  return (
    <section className="py-20 sm:py-32 bg-off-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4">
            Simplifica. Automatitza. Creix.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-coral/10 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="h-8 w-8 text-coral" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
