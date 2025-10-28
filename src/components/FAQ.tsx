import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Quant trigueu a implantar una automatització?",
      answer:
        "Depèn de la complexitat del projecte, però normalment entre 1 i 3 setmanes. Primer analitzem el teu flux de treball, després creem l'automatització i finalment t'ajudem a implementar-la i assegurem que tot funcioni correctament.",
    },
    {
      question: "Quines eines feu servir?",
      answer:
        "Treballem amb eines potents però senzilles d'utilitzar: Make (Integromat), n8n, Zapier per automatitzacions, i models d'IA personalitzats segons les teves necessitats. Sempre triem la millor eina per al teu cas específic.",
    },
    {
      question: "Quin cost té?",
      answer:
        "Cada projecte és diferent. Treballem amb pressupostos personalitzats segons les teves necessitats. El primer pas és una consulta gratuïta on analitzem el teu negoci i et fem una proposta ajustada. Sense sorpreses ni costos ocults.",
    },
    {
      question: "Doneu suport després de la implementació?",
      answer:
        "Sí! Oferim suport continu per assegurar que tot funcioni correctament. També et formem per utilitzar les automatitzacions de manera autònoma i estem disponibles per a qualsevol dubte o millora que necessitis.",
    },
    {
      question: "Necessito coneixements tècnics per utilitzar les automatitzacions?",
      answer:
        "No! Precisament aquest és el nostre objectiu: crear solucions senzilles que funcionin soles. Et formem en tot el que necessitis saber i dissenyem les automatitzacions perquè siguin intuïtives i fàcils d'utilitzar.",
    },
  ];

  return (
    <section id="faq" className="py-20 sm:py-32 bg-off-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Accent bar */}
          <div className="w-24 h-1 bg-coral mx-auto mb-8"></div>

          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4">
              Preguntes freqüents
            </h2>
            <p className="text-xl text-muted-foreground">
              Tot el que necessites saber sobre les nostres automatitzacions.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold text-navy hover:text-coral">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
