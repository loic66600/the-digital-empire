
import React from "react";
import Navbar from "@/components/ui/navbar";
import { EmailGate } from "@/components/EmailGate";
import { useToolsAccess } from "@/hooks/useToolsAccess";
import { IdeaDisplay } from "@/components/generator/IdeaDisplay";
import { PlatformSelector } from "@/components/generator/PlatformSelector";
import { PromotionalBanner } from "@/components/generator/PromotionalBanner";
import { viralIdeas, platformOptions, IdeaType } from "@/data/viralIdeas";

const Generateur = () => {
  const { hasAccess } = useToolsAccess();
  const [selectedPlatform, setSelectedPlatform] = React.useState("instagram");
  const [currentIdea, setCurrentIdea] = React.useState<IdeaType | null>(null);
  const [usedIdeas, setUsedIdeas] = React.useState<number[]>([]);
  
  const generateIdea = () => {
    if (!hasAccess) return;
    
    const platformIdeas = viralIdeas.filter(idea => idea.platform === selectedPlatform);
    const availableIdeas = platformIdeas.filter(idea => !usedIdeas.includes(idea.id));
    
    if (availableIdeas.length === 0) {
      setUsedIdeas([]);
      setCurrentIdea(platformIdeas[Math.floor(Math.random() * platformIdeas.length)]);
      return;
    }
    
    const randomIdea = availableIdeas[Math.floor(Math.random() * availableIdeas.length)];
    setCurrentIdea(randomIdea);
    setUsedIdeas([...usedIdeas, randomIdea.id]);
  };

  const handlePlatformChange = (platform: string) => {
    setSelectedPlatform(platform);
    setCurrentIdea(null);
    setUsedIdeas([]);
  };

  if (!hasAccess) {
    return (
      <div className="min-h-screen flex flex-col bg-custom-off-white">
        <Navbar />
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-custom-blue">
              Générateur d'idées virales
            </h1>
            <p className="text-lg text-gray-600">
              Trouvez l'inspiration pour votre prochain contenu à fort potentiel d'engagement
            </p>
          </div>
          <EmailGate source="ideas" onSuccess={() => {}} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-custom-off-white">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-custom-blue">
              Générateur d'idées virales
            </h1>
            <p className="text-lg text-gray-600">
              Trouvez l'inspiration pour votre prochain contenu à fort potentiel d'engagement
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 md:p-8">
              <PlatformSelector
                selectedPlatform={selectedPlatform}
                onChange={handlePlatformChange}
                options={platformOptions}
              />
              
              <IdeaDisplay
                currentIdea={currentIdea}
                onGenerateIdea={generateIdea}
              />
            </div>
            
            <div className="bg-gray-100 px-6 py-4">
              <p className="text-center text-sm text-gray-600">
                Note: Ces idées sont basées sur des stratégies éprouvées. Adaptez-les à votre niche et à votre style personnel pour de meilleurs résultats.
              </p>
            </div>
          </div>
          
          <PromotionalBanner />
        </div>
      </div>
    </div>
  );
};

export default Generateur;
