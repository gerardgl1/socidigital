import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Instagram } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const FinalCTA = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [consent, setConsent] = useState(false);
  const [hp, setHp] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (hp) return; // Anti-spam honeypot
    
    if (!consent) {
      toast.error("Has d'acceptar la política de privacitat per continuar.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("https://formspree.io/f/mnnovvnn", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          ...formData,
          page: window.location.pathname,
          utm: Object.fromEntries(new URLSearchParams(window.location.search))
        }),
      });
      
      if (res.ok) {
        toast.success("Missatge enviat correctament! Ens posarem en contacte amb tu aviat.");
        setFormData({ name: "", email: "", message: "" });
        setConsent(false);
        // @ts-ignore - Plausible analytics
        window.plausible?.("form_submit");
      } else {
        toast.error("Hi ha hagut un error en l'enviament. Si us plau, torna-ho a provar més tard.");
      }
    } catch {
      toast.error("Error de connexió. Si us plau, revisa la teva connexió a Internet.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Accent bar */}
          <div className="w-24 h-1 bg-coral mx-auto mb-8"></div>
          
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4">
              Vols aplicar-ho al teu negoci?
            </h2>
            <p className="text-xl text-muted-foreground">
              Parlem i t'ajudem a implementar-ho pas a pas.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 mb-12">
            <div>
              <label htmlFor="name" className="sr-only">
                El teu nom
              </label>
              <Input
                id="name"
                name="name"
                placeholder="El teu nom"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                autoComplete="name"
                className="h-14 text-lg rounded-xl"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                El teu email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="El teu email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                autoComplete="email"
                className="h-14 text-lg rounded-xl"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Missatge
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Explica'ns una mica sobre el teu negoci..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="min-h-32 text-lg rounded-xl resize-none"
              />
            </div>
            {/* Honeypot anti-spam field */}
            <input
              type="text"
              name="_gotcha"
              value={hp}
              onChange={(e) => setHp(e.target.value)}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />
            <div className="flex items-start gap-3">
              <Checkbox
                id="consent"
                checked={consent}
                onCheckedChange={(checked) => setConsent(checked as boolean)}
                required
                className="mt-1"
              />
              <label htmlFor="consent" className="text-sm text-muted-foreground cursor-pointer">
                Accepto la{" "}
                <a href="/privadesa" className="underline hover:text-coral transition-colors">
                  política de privacitat
                </a>
                .
              </label>
            </div>
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full bg-coral hover:bg-navy text-white font-semibold py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Enviant..." : "Envia'ns un missatge"}
            </Button>
          </form>

          <div className="text-center space-y-4">
            <p className="text-muted-foreground">O contacta'ns directament:</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://instagram.com/soci.digital"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-navy hover:text-coral transition-colors duration-300"
              >
                <Instagram className="h-5 w-5" />
                <span className="font-medium">@soci.digital</span>
              </a>
              <span className="hidden sm:inline text-muted-foreground">·</span>
              <a
                href="mailto:info@socidigital.cat"
                className="flex items-center gap-2 text-navy hover:text-coral transition-colors duration-300"
              >
                <Mail className="h-5 w-5" />
                <span className="font-medium">info@socidigital.cat</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
