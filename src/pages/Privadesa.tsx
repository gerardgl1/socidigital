import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Footer from "@/components/Footer";

const Privadesa = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    document.title = "Política de Privacitat · SOCI DIGITAL";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Política de privacitat de SOCI DIGITAL: tractament de dades personals, finalitats, base legal i drets RGPD.');
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Política de privacitat de SOCI DIGITAL: tractament de dades personals, finalitats, base legal i drets RGPD.');
    }
    
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', 'Política de privacitat de SOCI DIGITAL: tractament de dades personals, finalitats, base legal i drets RGPD.');
    }
  }, []);

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
          <h1 className="text-4xl font-bold text-navy mb-8">Política de Privacitat</h1>

          <p className="text-lg text-muted-foreground mb-8">
            A SOCI DIGITAL, ens prenem molt seriosament la teva privacitat i la protecció de les teves dades personals d'acord amb el Reglament General de Protecció de Dades (RGPD).
          </p>

          <div className="space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-navy mb-4">1. Responsable del tractament</h2>
              <p>
                <strong>Identitat:</strong> SOCI DIGITAL
                <br />
                <strong>Email de contacte:</strong> info@socidigital.cat
                <br />
                <strong>Web:</strong> https://socidigital.cat
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-navy mb-4">2. Tractament de dades del formulari</h2>
              <p className="mb-4">
                <strong>Finalitat:</strong> Gestionar les consultes rebudes a través del formulari de contacte i donar resposta a les teves preguntes sobre els nostres serveis d'automatització i IA.
              </p>
              <p className="mb-4">
                <strong>Base legal:</strong> El teu consentiment en acceptar la política de privacitat en el moment d'enviar el formulari.
              </p>
              <p className="mb-4">
                <strong>Temps de conservació:</strong> Les dades es conservaran mentre sigui necessari per donar resposta a la teva consulta i durant el temps que la llei obliga a mantenir la documentació comercial.
              </p>
              <p className="mb-4">
                <strong>Destinataris:</strong> Les dades es processen a través de Formspree (proveïdor de formularis) i no es cedeixen a tercers llevat d'obligació legal.
              </p>
              <p>
                <strong>Dades recollides:</strong> Nom, email i el missatge que ens enviïs.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-navy mb-4">3. Drets de l'usuari (RGPD)</h2>
              <p>
                Tens dret a:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Accedir a les teves dades personals</li>
                <li>Rectificar les dades inexactes</li>
                <li>Sol·licitar la seva supressió</li>
                <li>Sol·licitar la limitació del seu tractament</li>
                <li>Oposar-te al tractament</li>
                <li>Sol·licitar la portabilitat de les dades</li>
              </ul>
              <p className="mt-4">
                Per exercir aquests drets, pots contactar-nos a l'adreça de correu electrònic info@socidigital.cat.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-navy mb-4">4. Seguretat</h2>
              <p>
                SOCI DIGITAL ha adoptat les mesures tècniques i organitzatives necessàries per garantir la seguretat i integritat de les dades personals que tracta, així com per evitar la seva pèrdua, alteració i/o accés per part de tercers no autoritzats.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privadesa;
