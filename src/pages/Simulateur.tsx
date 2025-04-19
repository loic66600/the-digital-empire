
import { useState } from "react";
import Navbar from "@/components/ui/navbar";
import { EmailGate } from "@/components/EmailGate";
import { useToolsAccess } from "@/hooks/useToolsAccess";
import { SimulatorHeader } from "@/components/simulator/SimulatorHeader";
import { SimulationForm } from "@/components/simulator/SimulationForm";
import { SimulationResults } from "@/components/simulator/SimulationResults";
import { SimulationResult } from "@/types/simulator";

const platformOptions = [
  { value: "instagram", label: "Instagram", tauxConversion: 0.02, revenuMoyen: 25 },
  { value: "tiktok", label: "TikTok", tauxConversion: 0.015, revenuMoyen: 20 },
  { value: "youtube", label: "YouTube", tauxConversion: 0.03, revenuMoyen: 35 },
  { value: "linkedin", label: "LinkedIn", tauxConversion: 0.025, revenuMoyen: 50 },
  { value: "facebook", label: "Facebook", tauxConversion: 0.01, revenuMoyen: 15 },
];

const frequencyOptions = [
  { value: "1", label: "1 produit / mois", multiplicateur: 1 },
  { value: "2", label: "2 produits / mois", multiplicateur: 1.8 },
  { value: "4", label: "4 produits / mois", multiplicateur: 3 },
];

const Simulateur = () => {
  const { hasAccess } = useToolsAccess();
  const [resultats, setResultats] = useState<SimulationResult | null>(null);
  const [revenuCible, setRevenuCible] = useState(3000);

  const handleSimulationResult = (results: SimulationResult) => {
    setResultats(results);
  };

  if (!hasAccess) {
    return (
      <div className="min-h-screen flex flex-col bg-custom-off-white">
        <Navbar />
        <div className="container mx-auto px-4 py-12">
          <SimulatorHeader />
          <EmailGate source="simulator" onSuccess={() => {}} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-custom-off-white">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <SimulatorHeader />
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <SimulationForm 
                  platformOptions={platformOptions}
                  frequencyOptions={frequencyOptions}
                  onSimulate={handleSimulationResult}
                />
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h2 className="text-xl font-semibold mb-6">Résultats</h2>
                  <SimulationResults results={resultats} revenuCible={revenuCible} />
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 px-6 py-4 text-center">
              <p className="text-sm text-gray-600">
                Envie d'aller plus loin ? <a href="/offre" className="text-custom-blue font-medium">Découvrez notre formation complète</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Simulateur;
