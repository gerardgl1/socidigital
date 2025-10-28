import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";

const AvisLegal = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-off-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Button
          onClick={() => navigate("/")}
          variant="ghost"
          className="mb-8 text-navy hover:text-coral"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Tornar a l'inici
        </Button>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 sm:p-12 shadow-md">
          <h1 className="text-4xl font-bold text-navy mb-8">Avís Legal</h1>

          <div className="space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-navy mb-4">1. Dades identificatives</h2>
              <p>
                SOCI DIGITAL
                <br />
                Email: info@socidigital.cat
                <br />
                Web: https://socidigital.cat
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-navy mb-4">2. Objecte</h2>
              <p>
                El present avís legal regula l'ús i utilització del lloc web socidigital.cat, del qual és titular SOCI DIGITAL.
              </p>
              <p className="mt-4">
                La navegació pel lloc web atribueix la condició d'usuari i implica l'acceptació plena de totes les condicions incloses en aquest avís legal.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-navy mb-4">3. Propietat intel·lectual i industrial</h2>
              <p>
                Tots els continguts del lloc web, incloent textos, fotografies, gràfics, imatges, icones, tecnologia, programari, així com el seu disseny gràfic i codis font, constitueixen una obra la propietat de la qual pertany a SOCI DIGITAL, sense que puguin entendre's cedits a l'usuari cap dels drets d'explotació sobre els mateixos més enllà del que sigui estrictament necessari per al correcte ús del web.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-navy mb-4">4. Responsabilitat</h2>
              <p>
                SOCI DIGITAL no es fa responsable de la informació i continguts emmagatzemats en fòrums, xats, generadors de blogs, comentaris, xarxes socials o qualsevol altre mitjà que permeti a tercers publicar continguts de forma independent a la pàgina web de l'empresa.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-navy mb-4">5. Modificacions</h2>
              <p>
                SOCI DIGITAL es reserva el dret d'efectuar sense previ avís les modificacions que consideri oportunes al seu web, podent canviar, suprimir o afegir tant els continguts i serveis que es prestin a través de la mateixa com la forma en què aquests apareguin presentats o localitzats al seu web.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-navy mb-4">6. Llei aplicable i jurisdicció</h2>
              <p>
                Per a la resolució de totes les controvèrsies o qüestions relacionades amb el present lloc web o de les activitats en ell desenvolupades, serà d'aplicació la legislació espanyola, a la qual se sotmeten expressament les parts.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AvisLegal;
