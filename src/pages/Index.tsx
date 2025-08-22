import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import InterviewDemo from "@/components/sections/InterviewDemo";
import FeaturesSection from "@/components/sections/FeaturesSection";
import CTASection from "@/components/sections/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <InterviewDemo />
        <FeaturesSection />
        <CTASection />
      </main>
    </div>
  );
};

export default Index;
