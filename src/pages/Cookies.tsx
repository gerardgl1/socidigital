import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";

const Cookies = () => {
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
          <h1 className="text-4xl font-bold text-navy mb-8">Política de Cookies</h1>

          <div className="space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-navy mb-4">1. Què són les cookies?</h2>
              <p>
                Les cookies són petits arxius de text que els llocs web col·loquen al teu dispositiu quan els visites. S'utilitzen àmpliament per fer que els llocs web funcionin de manera més eficient, així com per proporcionar informació als propietaris del lloc.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-navy mb-4">2. Com utilitzem les cookies?</h2>
              <p>
                Al lloc web socidigital.cat utilitzem cookies per:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Garantir el correcte funcionament del lloc web</li>
                <li>Millorar la navegació i l'experiència de l'usuari</li>
                <li>Analitzar com els usuaris utilitzen el nostre lloc web</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-navy mb-4">3. Tipus de cookies que utilitzem</h2>
              
              <h3 className="text-xl font-semibold text-navy mt-6 mb-3">Cookies tècniques</h3>
              <p>
                Són necessàries per al funcionament del lloc web. Sense aquestes cookies, el lloc web no pot funcionar correctament.
              </p>

              <h3 className="text-xl font-semibold text-navy mt-6 mb-3">Cookies analítiques</h3>
              <p>
                Ens permeten analitzar l'ús del lloc web per poder mesurar i millorar el rendiment.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-navy mb-4">4. Com gestionar les cookies?</h2>
              <p>
                Pots configurar el teu navegador per acceptar o rebutjar les cookies de manera predeterminada o per rebre un avís cada vegada que s'enviï una cookie. També pots eliminar les cookies que ja s'han instal·lat al teu dispositiu.
              </p>
              <p className="mt-4">
                Per gestionar les cookies, hauràs de configurar les opcions del teu navegador. A continuació, et proporcionem enllaços a les instruccions per als navegadors més comuns:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>
                  <a 
                    href="https://support.google.com/chrome/answer/95647" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-coral hover:underline"
                  >
                    Google Chrome
                  </a>
                </li>
                <li>
                  <a 
                    href="https://support.mozilla.org/ca/kb/cookies" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-coral hover:underline"
                  >
                    Mozilla Firefox
                  </a>
                </li>
                <li>
                  <a 
                    href="https://support.apple.com/ca-es/guide/safari/sfri11471/mac" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-coral hover:underline"
                  >
                    Safari
                  </a>
                </li>
                <li>
                  <a 
                    href="https://support.microsoft.com/ca-es/microsoft-edge/eliminar-les-cookies-a-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-coral hover:underline"
                  >
                    Microsoft Edge
                  </a>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-navy mb-4">5. Actualitzacions i canvis</h2>
              <p>
                SOCI DIGITAL pot modificar aquesta Política de Cookies en funció d'exigències legislatives, reglamentàries, o amb la finalitat d'adaptar aquesta política a les instruccions dictades per l'Agència Espanyola de Protecció de Dades.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-navy mb-4">6. Contacte</h2>
              <p>
                Si tens qualsevol dubte sobre aquesta Política de Cookies, pots contactar-nos a través de l'adreça de correu electrònic info@socidigital.cat.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cookies;
