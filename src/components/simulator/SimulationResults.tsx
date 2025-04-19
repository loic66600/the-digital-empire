
import { Calculator } from "lucide-react";
import { SimulationResult } from "@/types/simulator";

interface SimulationResultsProps {
  results: SimulationResult | null;
  revenuCible: number;
}

export const SimulationResults = ({ results, revenuCible }: SimulationResultsProps) => {
  if (!results) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center text-gray-500 space-y-4">
        <Calculator className="h-12 w-12 opacity-30" />
        <p>Remplissez le formulaire et cliquez sur "Calculer" pour voir vos résultats</p>
      </div>
    );
  }

  return (
    <div className="space-y-6 fade-in">
      <div className="bg-white border border-gray-200 rounded-lg p-4">
        <p className="text-sm text-gray-500 mb-1">Revenu mensuel potentiel</p>
        <p className="text-2xl font-bold text-custom-blue">
          {results.revenuMensuel.toLocaleString('fr-FR')} €
        </p>
      </div>
      
      <div className="bg-white border border-gray-200 rounded-lg p-4">
        <p className="text-sm text-gray-500 mb-1">Revenu annuel potentiel</p>
        <p className="text-2xl font-bold text-custom-blue">
          {results.revenuAnnuel.toLocaleString('fr-FR')} €
        </p>
      </div>
      
      <div className="bg-white border border-gray-200 rounded-lg p-4">
        <p className="text-sm text-gray-500 mb-1">Pour atteindre {revenuCible.toLocaleString('fr-FR')} € par mois</p>
        <p className="text-2xl font-bold text-custom-blue">
          {results.audienceRequisePourCible.toLocaleString('fr-FR')} abonnés requis
        </p>
      </div>
      
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <p className="text-sm text-gray-700">
          <strong>Note :</strong> Ces estimations sont basées sur des moyennes du secteur. Les résultats réels peuvent varier en fonction de nombreux facteurs comme la qualité de votre contenu, votre niche, et votre stratégie marketing.
        </p>
      </div>
    </div>
  );
};
