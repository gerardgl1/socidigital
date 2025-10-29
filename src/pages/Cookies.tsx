import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Footer from "@/components/Footer";

const Cookies = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    document.title = "Política de Cookies · SOCI DIGITAL";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Política de cookies de SOCI DIGITAL: fem servir Plausible sense cookies i no utilitzem cookies no essencials.');
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Política de cookies de SOCI DIGITAL: fem servir Plausible sense cookies i no utilitzem cookies no essencials.');
    }
    
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', 'Política de cookies de SOCI DIGITAL: fem servir Plausible sense cookies i no utilitzem cookies no essencials.');
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
          <h1 className="text-4xl font-bold text-navy mb-8">Política de Cookies</h1>

          <div className="space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-navy mb-4">1. Què són les cookies?</h2>
              <p>
                Les cookies són petits arxius de text que els llocs web col·loquen al teu dispositiu quan els visites. S'utilitzen àmpliament per fer que els llocs web funcionin de manera més eficient, així com per proporcionar informació als propietaris del lloc.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-navy mb-4">2. Ús de Plausible Analytics (sense cookies)</h2>
              <p className="mb-4">
                Aquest lloc web utilitza <strong>Plausible Analytics</strong>, una eina d'analítica web que respecta la teva privacitat i <strong>no utilitza cookies</strong>.
              </p>
              <p className="mb-4">
                Plausible recull dades estadístiques agregades i anònimes sobre l'ús del lloc (com ara pàgines visitades, temps de permanència, origen del tràfic, dispositiu utilitzat) sense identificar-te personalment ni emmagatzemar informació al teu dispositiu.
              </p>
              <p className="mb-4">
                Aquesta solució compleix plenament amb el <strong>RGPD (Reglament General de Protecció de Dades)</strong> i no requereix el teu consentiment explícit perquè no s'emmagatzemen dades personals ni cookies de seguiment.
              </p>
              <p>
                Les dades recollides són totalment anònimes i s'utilitzen exclusivament per millorar l'experiència dels usuaris i el contingut del lloc web.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-navy mb-4">3. Contacte</h2>
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
