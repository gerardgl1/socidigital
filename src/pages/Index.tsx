import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import HowWeWork from "@/components/HowWeWork";
import CasePractice from "@/components/CasePractice";
import Testimonial from "@/components/Testimonial";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <ValueProposition />
      <HowWeWork />
      <CasePractice />
      <Testimonial />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
