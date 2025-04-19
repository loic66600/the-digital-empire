import { useState } from "react";
import Navbar from "@/components/ui/navbar";
import { EmailGate } from "@/components/EmailGate";
import { useToolsAccess } from "@/hooks/useToolsAccess";
import { List, Gift, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface IdeaType {
  id: number;
  title: string;
  description: string;
  example: string;
  platform: string;
}

const viralIdeas: IdeaType[] = [
  // Instagram
  {
    id: 1,
    title: "Avant/Après de transformation",
    description: "Montrez des résultats concrets de transformation en format avant/après pour démontrer votre expertise.",
    example: "Une photo avant/après d'un entrepreneur qui est passé de 0 à 10K€/mois grâce à votre méthode.",
    platform: "instagram"
  },
  {
    id: 2,
    title: "Série 'Saviez-vous que'",
    description: "Partagez des statistiques ou faits surprenants sur votre industrie que peu de gens connaissent.",
    example: "Saviez-vous que 87% des entrepreneurs qui réussissent sur Instagram ont commencé avec moins de 1000 abonnés ?",
    platform: "instagram"
  },
  {
    id: 3,
    title: "Mini-tutoriel en carrousel",
    description: "Créez un carrousel de 5-7 slides qui décompose un processus complexe en étapes simples.",
    example: "5 étapes pour créer une offre irrésistible qui se vend toute seule.",
    platform: "instagram"
  },
  
  // TikTok
  {
    id: 4,
    title: "Story-time avec twist surprenant",
    description: "Racontez une histoire personnelle avec un rebondissement inattendu qui capte l'attention jusqu'à la fin.",
    example: "Comment j'ai perdu tous mes clients en une semaine... et pourquoi c'était la meilleure chose qui me soit arrivée.",
    platform: "tiktok"
  },
  {
    id: 5,
    title: "POV: problème et solution",
    description: "Créez une vidéo 'point de vue' montrant un problème courant et votre solution unique.",
    example: "POV: Tu viens de te réveiller et tu vois que ta publication a généré 5 nouveaux clients pendant ton sommeil.",
    platform: "tiktok"
  },
  {
    id: 6,
    title: "Tendance détournée pour votre niche",
    description: "Utilisez un son ou une tendance virale du moment mais adaptez-la à votre expertise.",
    example: "Utiliser un son viral pour montrer les erreurs communes dans le marketing digital.",
    platform: "tiktok"
  },
  
  // YouTube
  {
    id: 7,
    title: "Étude de cas détaillée",
    description: "Analysez en profondeur un succès (le vôtre ou celui d'un client) avec des chiffres et stratégies concrètes.",
    example: "Comment j'ai généré 50K€ avec un seul produit numérique en 30 jours (stratégie complète dévoilée).",
    platform: "youtube"
  },
  {
    id: 8,
    title: "Débunk de mythes populaires",
    description: "Contestez les idées reçues dans votre domaine avec preuves et expériences à l'appui.",
    example: "Les 5 plus gros mythes du marketing d'influence qui ruinent votre croissance.",
    platform: "youtube"
  },
  {
    id: 9,
    title: "Day in the life",
    description: "Montrez une journée type dans votre vie d'entrepreneur pour inspirer et éduquer.",
    example: "Une journée dans la vie d'un entrepreneur digital qui gagne 6 chiffres (routines de productivité dévoilées).",
    platform: "youtube"
  },
  
  // LinkedIn
  {
    id: 10,
    title: "Analyse de tendance du marché",
    description: "Commentez une tendance actuelle dans votre secteur avec votre perspective unique.",
    example: "Pourquoi l'IA va transformer le métier de créateur de contenu (et comment vous adapter dès maintenant).",
    platform: "linkedin"
  },
  {
    id: 11,
    title: "Leçon tirée d'un échec",
    description: "Partagez une histoire d'échec professionnelle et les enseignements précieux que vous en avez tirés.",
    example: "J'ai perdu 15 000€ dans ma première formation en ligne. Voici les 3 leçons qui m'ont permis de rebondir.",
    platform: "linkedin"
  },
  {
    id: 12,
    title: "Checklist pratique",
    description: "Offrez une liste de vérification concrète pour accomplir une tâche spécifique dans votre domaine.",
    example: "Checklist : 7 éléments essentiels pour une page de vente qui convertit à plus de 5%.",
    platform: "linkedin"
  }
];

const Generateur = () => {
  const { hasAccess, grantAccess } = useToolsAccess();

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
          <EmailGate 
            source="ideas" 
            onSuccess={() => {/* Access is automatically granted by the hook */}} 
          />
        </div>
      </div>
    );
  }

  const [selectedPlatform, setSelectedPlatform] = useState("instagram");
  const [currentIdea, setCurrentIdea] = useState<IdeaType | null>(null);
  const [usedIdeas, setUsedIdeas] = useState<number[]>([]);
  
  const generateIdea = () => {
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
  
  const platformOptions = [
    { value: "instagram", label: "Instagram" },
    { value: "tiktok", label: "TikTok" },
    { value: "youtube", label: "YouTube" },
    { value: "linkedin", label: "LinkedIn" },
  ];

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
              <div className="mb-8">
                <label htmlFor="platform" className="block text-lg font-medium text-gray-700 mb-3">
                  Choisissez votre plateforme
                </label>
                <select
                  id="platform"
                  value={selectedPlatform}
                  onChange={(e) => {
                    setSelectedPlatform(e.target.value);
                    setCurrentIdea(null);
                    setUsedIdeas([]);
                  }}
                  className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-blue focus:border-custom-blue text-lg"
                >
                  {platformOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              
              {currentIdea ? (
                <div className="fade-in space-y-5">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-custom-blue/10 flex items-center justify-center">
                      <List className="h-5 w-5 text-custom-blue" />
                    </div>
                    <h2 className="text-xl font-bold text-custom-blue">
                      {currentIdea.title}
                    </h2>
                  </div>
                  
                  <p className="text-gray-700">
                    {currentIdea.description}
                  </p>
                  
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <p className="text-sm font-medium text-gray-500 mb-1">Exemple</p>
                    <p className="text-gray-800 italic">"{currentIdea.example}"</p>
                  </div>
                  
                  <div className="pt-5 flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={generateIdea}
                      className="btn-primary py-3 px-6 flex-1"
                    >
                      Générer une autre idée
                    </button>
                    
                    <Link
                      to="/offre"
                      className="btn-secondary py-3 px-6 flex-1 flex items-center justify-center"
                    >
                      Accéder aux idées premium <Gift className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="text-center py-10">
                  <div className="bg-custom-blue/10 inline-flex items-center justify-center w-16 h-16 rounded-full mb-4">
                    <List className="h-8 w-8 text-custom-blue" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Pas encore d'idée générée</h3>
                  <p className="text-gray-600 mb-8">
                    Cliquez sur le bouton ci-dessous pour obtenir une idée virale pour {platformOptions.find(p => p.value === selectedPlatform)?.label}
                  </p>
                  <button
                    onClick={generateIdea}
                    className="btn-primary py-3 px-6 inline-flex items-center"
                  >
                    Générer une idée <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              )}
            </div>
            
            <div className="bg-gray-100 px-6 py-4">
              <p className="text-center text-sm text-gray-600">
                Note: Ces idées sont basées sur des stratégies éprouvées. Adaptez-les à votre niche et à votre style personnel pour de meilleurs résultats.
              </p>
            </div>
          </div>
          
          <div className="mt-10 bg-gradient-to-r from-custom-blue to-custom-light-blue rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 md:p-8 text-white">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-bold mb-3">
                    Obtenez notre catalogue complet d'idées virales
                  </h2>
                  <p className="opacity-90 mb-4">
                    Accédez à notre banque de plus de 100 idées de contenu viral triées par niche et taux d'engagement. Mises à jour chaque mois selon les dernières tendances.
                  </p>
                  <Link
                    to="/offre"
                    className="bg-white text-custom-blue hover:bg-gray-100 transition-colors duration-300 inline-flex items-center font-medium py-2 px-4 rounded-md"
                  >
                    En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
                <div className="md:w-1/3 flex justify-center">
                  <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center">
                    <Gift className="h-12 w-12 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Generateur;
