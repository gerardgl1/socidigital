import { Calendar, Star as StarIcon, Filter } from "lucide-react";

const CasePractice = () => {
  const cases = [
    {
      icon: Calendar,
      title: "Recordatoris automàtics per fisioterapeutes",
      result: "-35% d'absències",
      description: "Sistema de recordatoris intel·ligent que redueix les absències.",
    },
    {
      icon: StarIcon,
      title: "Respostes automàtiques a ressenyes",
      result: "Perruqueries",
      description: "Respostes personalitzades que mantenen la connexió amb clients.",
    },
    {
      icon: Filter,
      title: "DMs filtrats per estudis de tatuatges",
      result: "+40% converses útils",
      description: "Classifiquem automàticament consultes prioritàries.",
    },
  ];

  return (
    <section id="cases" className="py-20 sm:py-32 bg-off-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4">
            Resultats reals per a negocis locals
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cases.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-coral to-coral/80 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">
                {item.title}
              </h3>
              <div className="inline-block bg-coral/10 text-coral font-bold px-4 py-2 rounded-lg mb-4">
                {item.result}
              </div>
              <p className="text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasePractice;
