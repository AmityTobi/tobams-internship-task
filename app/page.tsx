import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import LMSBlock from "@/components/lmsBlock";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <LMSBlock />
    </main>
  );
}
