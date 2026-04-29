import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AcceleratorHero from "@/components/AcceleratorHero";
import PowerMovesTarget from "@/components/PowerMovesTarget";
import WhoPowerMovesIsFor from "@/components/WhoPowerMovesIsFor";
import LeadershipProgramsSection from "@/components/LeadershipProgramsSection";
import HowItWorks from "@/components/HowItWorks";
import CalmLeadershipAccelerator from "@/components/CalmLeadershipAccelerator";
import MakePowerMovesSection from "@/components/MakePowerMovesSection";
import QuizSectionAccelerator from "@/components/QuizSectionAccelerator"
export default function Accelerator() {
  return (
    <main className="relative min-h-screen bg-black">
      <Navbar />
      
      <AcceleratorHero />
      <PowerMovesTarget />
      <WhoPowerMovesIsFor />
      <LeadershipProgramsSection />
      <HowItWorks />
<CalmLeadershipAccelerator />
<MakePowerMovesSection />
<QuizSectionAccelerator />
      <Footer />
    </main>
  );
}
