import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      
      {/* Additional sections would go here */}
      <div className="bg-black py-20">
        {/* Placeholder for content below hero */}
      </div>
    </main>
  );
}
