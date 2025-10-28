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
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ValueProposition />
      <HowWeWork />
      <CasePractice />
      <Testimonial />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
