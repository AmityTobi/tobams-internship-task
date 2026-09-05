import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import LMSBlock from "@/components/lmsBlock";
import ServicesSection from "@/components/servicesSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <LMSBlock />
      <ServicesSection />
    </main>
  );
}
