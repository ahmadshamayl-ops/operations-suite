import Hero from "@/components/Hero";
import ArchitectureOverview from "@/components/ArchitectureOverview";
import PredictiveMaintenance from "@/components/PredictiveMaintenance";
import FinanceLeakage from "@/components/FinanceLeakage";
import CentralDashboard from "@/components/CentralDashboard";
import ROISection from "@/components/ROISection";
import ClosingBrand from "@/components/ClosingBrand";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <ArchitectureOverview />
      <PredictiveMaintenance />
      <FinanceLeakage />
      <CentralDashboard />
      <ROISection />
      <ClosingBrand />
    </main>
  );
};

export default Index;
