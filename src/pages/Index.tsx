import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import HowWeWork from "@/components/HowWeWork";
import CasePractice from "@/components/CasePractice";
import Testimonial from "@/components/Testimonial";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      {/* Skip to main content - Accessibility */}
      <a 
        href="#main" 
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 bg-white text-navy px-3 py-2 rounded z-50 focus:outline-none focus:ring-2 focus:ring-coral"
      >
        Salta al contingut
      </a>
      <Navbar />
      <main id="main" className="min-h-screen">
      <Hero />
      <ValueProposition />
      <HowWeWork />
      <CasePractice />
      <Testimonial />
      <FAQ />
      <FinalCTA />
      <Footer />
      </main>
    </>
  );
};

export default Index;
