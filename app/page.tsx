import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import LMSBlock from "@/components/lmsBlock";
import ServicesSection from "@/components/servicesSection";
import ManagementProgram from "@/components/managementProgram";
import TransformationHub from "@/components/transformationHub";
import TrainingConsultant from "@/components/trainingConsultant";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <LMSBlock />
      <ServicesSection />
      <ManagementProgram />
      <TransformationHub />
      <TrainingConsultant />
    </main>
  );
}
