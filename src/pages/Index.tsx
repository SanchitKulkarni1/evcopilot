import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ExpertsSection from "@/components/ExpertsSection";
import ProgramsSection from "@/components/ProgramsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <ExpertsSection />
        <ProgramsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
