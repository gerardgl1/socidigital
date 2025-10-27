import logo from "@/assets/soci-digital-logo.png";
import { Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-8">
            <img src={logo} alt="SOCI DIGITAL" className="h-16 mb-6 brightness-0 invert" />
            <p className="text-white/90 text-lg font-medium mb-2">
              Simplifica. Automatitza. Creix.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <a
              href="https://instagram.com/soci.digital"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/80 hover:text-coral transition-colors duration-300"
            >
              <Instagram className="h-5 w-5" />
              <span>@soci.digital</span>
            </a>
            <span className="hidden sm:inline text-white/30">·</span>
            <a
              href="mailto:info@socidigital.cat"
              className="flex items-center gap-2 text-white/80 hover:text-coral transition-colors duration-300"
            >
              <Mail className="h-5 w-5" />
              <span>info@socidigital.cat</span>
            </a>
          </div>

          <div className="border-t border-white/10 pt-8">
            <p className="text-white/50 text-sm text-center">
              © {new Date().getFullYear()} SOCI DIGITAL. Tots els drets reservats.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
