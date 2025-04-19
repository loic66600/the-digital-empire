import { useState } from "react";
import Navbar from "@/components/ui/navbar";
import { Calculator } from "lucide-react";
import { EmailGate } from "@/components/EmailGate";

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
  const [plateforme, setPlateforme] = useState(platformOptions[0].value);
  const [abonnes, setAbonnes] = useState(1000);
  const [frequence, setFrequence] = useState(frequencyOptions[0].value);
  const [revenuCible, setRevenuCible] = useState(3000);
  const [resultats, setResultats] = useState<SimulationResult | null>(null);
  const [hasAccess, setHasAccess] = useState(false);

  if (!hasAccess) {
    return (
      <div className="min-h-screen flex flex-col bg-custom-off-white">
        <Navbar />
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-custom-blue">
              Simulateur de revenus
            </h1>
            <p className="text-lg text-gray-600">
              Estimez votre potentiel de revenus en fonction de votre audience et votre stratégie
            </p>
          </div>
          <EmailGate source="simulator" onSuccess={() => setHasAccess(true)} />
        </div>
      </div>
    );
  }

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
    
    setResultats({
      revenuMensuel,
      revenuAnnuel,
      audienceRequisePourCible
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-custom-off-white">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-custom-blue">
              Simulateur de revenus
            </h1>
            <p className="text-lg text-gray-600">
              Estimez votre potentiel de revenus en fonction de votre audience et votre stratégie
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-8">
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
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h2 className="text-xl font-semibold mb-6">Résultats</h2>
                  
                  {resultats ? (
                    <div className="space-y-6 fade-in">
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <p className="text-sm text-gray-500 mb-1">Revenu mensuel potentiel</p>
                        <p className="text-2xl font-bold text-custom-blue">
                          {resultats.revenuMensuel.toLocaleString('fr-FR')} €
                        </p>
                      </div>
                      
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <p className="text-sm text-gray-500 mb-1">Revenu annuel potentiel</p>
                        <p className="text-2xl font-bold text-custom-blue">
                          {resultats.revenuAnnuel.toLocaleString('fr-FR')} €
                        </p>
                      </div>
                      
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <p className="text-sm text-gray-500 mb-1">Pour atteindre {revenuCible.toLocaleString('fr-FR')} € par mois</p>
                        <p className="text-2xl font-bold text-custom-blue">
                          {resultats.audienceRequisePourCible.toLocaleString('fr-FR')} abonnés requis
                        </p>
                      </div>
                      
                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                        <p className="text-sm text-gray-700">
                          <strong>Note :</strong> Ces estimations sont basées sur des moyennes du secteur. Les résultats réels peuvent varier en fonction de nombreux facteurs comme la qualité de votre contenu, votre niche, et votre stratégie marketing.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full text-center text-gray-500 space-y-4">
                      <Calculator className="h-12 w-12 opacity-30" />
                      <p>Remplissez le formulaire et cliquez sur "Calculer" pour voir vos résultats</p>
                    </div>
                  )}
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
