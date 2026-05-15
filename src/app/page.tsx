import Hero from "@/components/Hero";
import ExecutiveProfile from "@/components/ExecutiveProfile";
import CoreCompetencies from "@/components/CoreCompetencies";
import ExecutiveDashboard from "@/components/ExecutiveDashboard";
import StrategicProjects from "@/components/StrategicProjects";
import ExperienceContact from "@/components/ExperienceContact";

export default function Home() {
  return (
    <main className="min-h-screen bg-deep-900 text-foreground overflow-x-hidden">
      <Hero />
      <ExecutiveProfile />
      <CoreCompetencies />
      <ExecutiveDashboard />
      <StrategicProjects />
      <ExperienceContact />
    </main>
  );
}
