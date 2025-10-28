import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";

const Privadesa = () => {
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
          <h1 className="text-4xl font-bold text-navy mb-8">Política de Privacitat</h1>

          <div className="space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-navy mb-4">1. Informació general</h2>
              <p>
                SOCI DIGITAL (d'ara endavant, el Responsable) posa a la teva disposició la present Política de Privacitat amb la finalitat d'informar-te sobre el tractament de les teves dades personals quan navegues pel nostre lloc web socidigital.cat.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-navy mb-4">2. Responsable del tractament</h2>
              <p>
                <strong>Identitat:</strong> SOCI DIGITAL
                <br />
                <strong>Email de contacte:</strong> info@socidigital.cat
                <br />
                <strong>Web:</strong> https://socidigital.cat
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-navy mb-4">3. Dades que recollim</h2>
              <p>
                Quan ens contactes a través del formulari de contacte, recollirem les següents dades personals:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Nom complet</li>
                <li>Adreça de correu electrònic</li>
                <li>Missatge o consulta que ens enviïs</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-navy mb-4">4. Finalitat del tractament</h2>
              <p>
                Les teves dades personals seran tractades amb les següents finalitats:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Respondre les teves consultes i sol·licituds d'informació</li>
                <li>Gestionar i mantenir la relació comercial amb tu</li>
                <li>Enviar-te informació sobre els nostres serveis, si ens has donat el teu consentiment</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-navy mb-4">5. Legitimació</h2>
              <p>
                La base legal per al tractament de les teves dades és el teu consentiment, que ens dones quan ens envies el formulari de contacte.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-navy mb-4">6. Conservació de les dades</h2>
              <p>
                Les teves dades personals es conservaran mentre sigui necessari per complir amb les finalitats per a les quals es van recollir i, en tot cas, durant el temps que exigeixi la legislació aplicable.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-navy mb-4">7. Destinataris de les dades</h2>
              <p>
                Les teves dades personals no seran comunicades a tercers, excepte obligació legal.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-navy mb-4">8. Drets de l'usuari</h2>
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
              <h2 className="text-2xl font-semibold text-navy mb-4">9. Seguretat</h2>
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
