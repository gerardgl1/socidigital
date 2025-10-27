import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Instagram } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const FinalCTA = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to a backend
    toast.success("Missatge enviat! Ens posarem en contacte aviat.");
    setFormData({ name: "", email: "", message: "" });
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
              <Input
                placeholder="El teu nom"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="h-14 text-lg rounded-xl"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="El teu email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="h-14 text-lg rounded-xl"
              />
            </div>
            <div>
              <Textarea
                placeholder="Explica'ns una mica sobre el teu negoci..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="min-h-32 text-lg rounded-xl resize-none"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full bg-coral hover:bg-coral/90 text-white font-semibold py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Envia'ns un missatge
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
