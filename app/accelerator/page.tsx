import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AcceleratorHero from "@/components/AcceleratorHero";
import PowerMovesTarget from "@/components/PowerMovesTarget";
import WhoPowerMovesIsFor from "@/components/WhoPowerMovesIsFor";

export default function Accelerator() {
  return (
    <main className="relative min-h-screen bg-black">
      <Navbar />
      
      <AcceleratorHero />
      <PowerMovesTarget />
      <WhoPowerMovesIsFor />

      <Footer />
    </main>
  );
}
