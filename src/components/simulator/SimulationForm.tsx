
import { useState } from "react";
import { Calculator } from "lucide-react";
import { SimulationResult, PlatformOption, FrequencyOption } from "@/types/simulator";

interface SimulationFormProps {
  platformOptions: PlatformOption[];
  frequencyOptions: FrequencyOption[];
  onSimulate: (result: SimulationResult) => void;
}

export const SimulationForm = ({ 
  platformOptions, 
  frequencyOptions, 
  onSimulate 
}: SimulationFormProps) => {
  const [plateforme, setPlateforme] = useState(platformOptions[0].value);
  const [abonnes, setAbonnes] = useState(1000);
  const [frequence, setFrequence] = useState(frequencyOptions[0].value);
  const [revenuCible, setRevenuCible] = useState(3000);

  const handleSimulation = () => {
    const plateformeSelectionnee = platformOptions.find(p => p.value === plateforme);
    const frequenceSelectionnee = frequencyOptions.find(f => f.value === frequence);
    
    if (!plateformeSelectionnee || !frequenceSelectionnee) return;
    
    const tauxConversion = plateformeSelectionnee.tauxConversion;
    const revenuMoyen = plateformeSelectionnee.revenuMoyen;
    const multiplicateur = frequenceSelectionnee.multiplicateur;
    
    // Calcul du revenu mensuel potentiel
    const clientsPotentiels = abonnes * tauxConversion;
    const revenuMensuel = Math.round(clientsPotentiels * revenuMoyen * multiplicateur);
    const revenuAnnuel = revenuMensuel * 12;
    
    // Calcul de l'audience requise pour atteindre le revenu cible
    const audienceRequisePourCible = Math.ceil(
      (revenuCible / (revenuMoyen * tauxConversion * multiplicateur))
    );
    
    onSimulate({
      revenuMensuel,
      revenuAnnuel,
      audienceRequisePourCible
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold flex items-center">
        <Calculator className="mr-2 h-5 w-5 text-custom-blue" />
        Paramètres
      </h2>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="plateforme" className="block text-sm font-medium text-gray-700 mb-1">
            Plateforme
          </label>
          <select
            id="plateforme"
            value={plateforme}
            onChange={(e) => setPlateforme(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-custom-blue"
          >
            {platformOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label htmlFor="abonnes" className="block text-sm font-medium text-gray-700 mb-1">
            Nombre d'abonnés
          </label>
          <input
            type="number"
            id="abonnes"
            min="100"
            value={abonnes}
            onChange={(e) => setAbonnes(parseInt(e.target.value) || 0)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-custom-blue"
          />
        </div>
        
        <div>
          <label htmlFor="frequence" className="block text-sm font-medium text-gray-700 mb-1">
            Fréquence de lancement
          </label>
          <select
            id="frequence"
            value={frequence}
            onChange={(e) => setFrequence(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-custom-blue"
          >
            {frequencyOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label htmlFor="revenuCible" className="block text-sm font-medium text-gray-700 mb-1">
            Revenu mensuel cible (€)
          </label>
          <input
            type="number"
            id="revenuCible"
            min="500"
            value={revenuCible}
            onChange={(e) => setRevenuCible(parseInt(e.target.value) || 0)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-custom-blue"
          />
        </div>
        
        <button
          onClick={handleSimulation}
          className="w-full btn-primary py-3"
        >
          Calculer mon potentiel
        </button>
      </div>
    </div>
  );
};
