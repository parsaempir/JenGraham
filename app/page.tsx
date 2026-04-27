import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemReframe from "@/components/ProblemReframe";
import SilentSuccess from "@/components/SilentSuccess";
import MethodSnapshot from "@/components/MethodSnapshot";
import CalmLeadership from "@/components/CalmLeadership";
import PersonalPower from "@/components/PersonalPower";
import FAQ from "@/components/FAQ";
import QuizSection from "@/components/QuizSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black">
      <Navbar />
      <Hero />
      <ProblemReframe />
      <SilentSuccess />
      <MethodSnapshot />
      <CalmLeadership />
      <PersonalPower />
      <FAQ />
      <QuizSection />
      <Footer />
    </main>
  );
}
