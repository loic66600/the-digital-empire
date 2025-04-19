
import { useState, useEffect } from "react";
import Navbar from "@/components/ui/navbar";
import { EmailGate } from "@/components/EmailGate";
import { useToolsAccess } from "@/hooks/useToolsAccess";
import { ArrowRight, BookOpen, CheckCircle2 } from "lucide-react";

interface CourseDay {
  id: number;
  title: string;
  description: string;
  action: string;
  tips: string[];
}

const courseDays: CourseDay[] = [
  {
    id: 1,
    title: "Définir votre niche",
    description: "Aujourd'hui, nous allons explorer comment choisir une niche rentable et alignée avec vos passions. La clé du succès sur les réseaux sociaux est de se spécialiser dans un domaine précis.",
    action: "Listez 3 niches qui vous intéressent, puis recherchez leur potentiel sur Google Trends et en analysant la concurrence sur les réseaux sociaux.",
    tips: [
      "Cherchez l'intersection entre ce que vous aimez, ce que vous savez faire et ce qui peut être monétisé",
      "Évitez les niches trop larges ou trop saturées",
      "Pensez à des sous-niches spécifiques pour vous démarquer"
    ]
  },
  {
    id: 2,
    title: "Choisir vos plateformes",
    description: "Chaque réseau social a ses spécificités. Aujourd'hui, nous verrons comment choisir les plateformes les plus adaptées à votre niche et à votre style de contenu.",
    action: "Créez un compte professionnel sur 2 plateformes maximum en fonction de votre audience cible et du type de contenu que vous souhaitez créer.",
    tips: [
      "Instagram est idéal pour le visuel et le lifestyle",
      "TikTok est parfait pour les contenus courts et divertissants",
      "LinkedIn convient aux services B2B et au personal branding professionnel",
      "YouTube est excellent pour les tutoriels et contenus de fond"
    ]
  },
  {
    id: 3,
    title: "Créer votre identité visuelle",
    description: "Une identité visuelle cohérente renforce votre professionnalisme et votre reconnaissance de marque. Aujourd'hui, nous élaborerons votre signature visuelle.",
    action: "Définissez votre palette de couleurs, choisissez vos polices et créez des modèles de publications cohérents pour vos réseaux sociaux.",
    tips: [
      "Limitez-vous à 2-3 couleurs principales",
      "Utilisez des outils gratuits comme Canva pour créer vos visuels",
      "Gardez une cohérence dans votre esthétique",
      "Créez des modèles réutilisables pour gagner du temps"
    ]
  },
  {
    id: 4,
    title: "Planifier votre contenu",
    description: "La régularité est essentielle pour développer votre présence en ligne. Aujourd'hui, nous mettrons en place une stratégie de contenu efficace.",
    action: "Créez un calendrier éditorial pour le mois à venir avec des thématiques et des types de contenus variés.",
    tips: [
      "Équilibrez contenu de valeur, divertissement et promotion",
      "Prévoyez 3 à 5 piliers de contenu récurrents",
      "Utilisez un outil de planification comme Later ou Buffer",
      "Créez votre contenu par lot pour optimiser votre temps"
    ]
  },
  {
    id: 5,
    title: "Engager votre audience",
    description: "L'engagement est la clé pour développer une communauté fidèle. Aujourd'hui, nous verrons comment favoriser les interactions avec votre audience.",
    action: "Passez 30 minutes à répondre aux commentaires sur vos posts et à interagir avec des comptes similaires dans votre niche.",
    tips: [
      "Posez des questions dans vos publications",
      "Répondez rapidement aux commentaires et messages",
      "Organisez des sessions de questions-réponses",
      "Montrez les coulisses de votre activité pour créer une connexion authentique"
    ]
  },
  {
    id: 6,
    title: "Analyser vos performances",
    description: "Les données vous aident à affiner votre stratégie. Aujourd'hui, nous apprendrons à interpréter les statistiques de vos réseaux sociaux.",
    action: "Consultez les statistiques de vos dernières publications et identifiez les tendances en termes d'engagement, de portée et de conversion.",
    tips: [
      "Concentrez-vous sur l'engagement plutôt que sur le nombre d'abonnés",
      "Notez quels types de contenus performent le mieux",
      "Identifiez les meilleurs moments pour publier",
      "Ajustez régulièrement votre stratégie selon les résultats"
    ]
  },
  {
    id: 7,
    title: "Monétiser votre présence",
    description: "Votre audience a de la valeur. Aujourd'hui, nous explorerons différentes stratégies de monétisation adaptées à votre profil.",
    action: "Choisissez une méthode de monétisation et créez un plan d'action concret pour l'implémenter dans les 30 prochains jours.",
    tips: [
      "L'affiliation est idéale pour démarrer rapidement",
      "La création de contenu pour marques (UGC) ne nécessite pas une grande audience",
      "Les produits numériques offrent les meilleures marges",
      "Combinez plusieurs sources de revenus pour plus de stabilité"
    ]
  }
];

const MiniCours = () => {
  const { hasAccess } = useToolsAccess();
  const [accessGranted, setAccessGranted] = useState(false);
  const [activeDay, setActiveDay] = useState(1);
  const [completedDays, setCompletedDays] = useState<number[]>([]);

  // Vérifie l'accès au chargement de la page
  useEffect(() => {
    if (hasAccess) {
      setAccessGranted(true);
    }
  }, [hasAccess]);

  const markAsCompleted = (dayId: number) => {
    if (!completedDays.includes(dayId)) {
      setCompletedDays([...completedDays, dayId]);
    } else {
      setCompletedDays(completedDays.filter(id => id !== dayId));
    }
  };

  const nextDay = () => {
    if (activeDay < 7) {
      setActiveDay(activeDay + 1);
      window.scrollTo(0, 0);
    }
  };

  const previousDay = () => {
    if (activeDay > 1) {
      setActiveDay(activeDay - 1);
      window.scrollTo(0, 0);
    }
  };

  const activeContent = courseDays.find(day => day.id === activeDay);
  
  // Gérer l'accès accordé via EmailGate
  const handleAccessSuccess = () => {
    setAccessGranted(true);
  };
  
  // Vérifier si l'utilisateur doit voir le contenu ou le formulaire d'email
  const showContent = hasAccess || accessGranted;

  if (!showContent) {
    return (
      <div className="min-h-screen flex flex-col bg-custom-off-white">
        <Navbar />
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-custom-blue">
              Mini-Cours : Lancer votre business en 7 jours
            </h1>
            <p className="text-lg text-gray-600">
              Un guide pratique pour créer votre présence en ligne et commencer à la monétiser
            </p>
          </div>
          <EmailGate 
            source="mini-course" 
            onSuccess={handleAccessSuccess}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-custom-off-white">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-custom-blue">
            Mini-Cours : Lancer votre business en 7 jours
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Un guide pratique pour créer votre présence en ligne et commencer à la monétiser, même avec une petite audience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="md:col-span-1">
            <div className="bg-white rounded-xl shadow-md overflow-hidden sticky top-24">
              <div className="p-4 bg-custom-blue text-white">
                <h2 className="font-semibold text-lg flex items-center">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Programme du cours
                </h2>
              </div>
              
              <div className="p-4">
                <div className="space-y-1">
                  {courseDays.map(day => (
                    <button
                      key={day.id}
                      onClick={() => setActiveDay(day.id)}
                      className={`w-full text-left px-3 py-2 rounded-md flex items-center ${
                        activeDay === day.id
                          ? "bg-custom-blue text-white"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      <span className="w-6 h-6 flex-shrink-0 rounded-full bg-gray-100 flex items-center justify-center mr-2 text-sm font-medium border border-gray-200 shadow-sm">
                        {day.id}
                      </span>
                      <span className="font-medium truncate">{day.title}</span>
                      {completedDays.includes(day.id) && (
                        <CheckCircle2 className="ml-auto h-4 w-4 text-green-500" />
                      )}
                    </button>
                  ))}
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Progression:</span>
                    <span>{completedDays.length}/7 jours</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div 
                      className="bg-custom-gold h-2 rounded-full" 
                      style={{ width: `${(completedDays.length / 7) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2">
            {activeContent && (
              <div className="bg-white rounded-xl shadow-lg overflow-hidden fade-in">
                <div className="p-6 md:p-8">
                  <div className="mb-6">
                    <div className="bg-custom-blue/10 inline-block px-3 py-1 rounded-full text-custom-blue font-medium text-sm mb-2">
                      Jour {activeContent.id}/7
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-custom-blue mb-4">
                      {activeContent.title}
                    </h2>
                    <p className="text-gray-600">
                      {activeContent.description}
                    </p>
                  </div>
                  
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                    <h3 className="font-semibold flex items-center text-amber-700 mb-2">
                      <span className="mr-2">📝</span>
                      Action du jour
                    </h3>
                    <p className="text-amber-800">
                      {activeContent.action}
                    </p>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Conseils pratiques:
                    </h3>
                    <ul className="space-y-2">
                      {activeContent.tips.map((tip, index) => (
                        <li key={index} className="flex items-start text-gray-600">
                          <span className="text-custom-gold mr-2 font-bold">•</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <button
                      onClick={previousDay}
                      className={`px-4 py-2 border border-gray-300 rounded-md flex items-center ${
                        activeDay === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-50"
                      }`}
                      disabled={activeDay === 1}
                    >
                      <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
                      Précédent
                    </button>
                    
                    <button
                      onClick={() => markAsCompleted(activeContent.id)}
                      className={`px-4 py-2 rounded-md ${
                        completedDays.includes(activeContent.id)
                          ? "bg-green-600 text-white hover:bg-green-700"
                          : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                      }`}
                    >
                      {completedDays.includes(activeContent.id) ? (
                        <span className="flex items-center">
                          <CheckCircle2 className="mr-2 h-4 w-4" />
                          Terminé !
                        </span>
                      ) : (
                        "Marquer comme terminé"
                      )}
                    </button>
                    
                    <button
                      onClick={nextDay}
                      className={`px-4 py-2 border border-gray-300 rounded-md flex items-center ${
                        activeDay === 7 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-50"
                      }`}
                      disabled={activeDay === 7}
                    >
                      Suivant
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {completedDays.length === 7 && (
              <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 mb-4">
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">
                  Félicitations !
                </h3>
                <p className="text-green-700 mb-4">
                  Vous avez terminé les 7 jours de formation. Vous êtes maintenant prêt à lancer votre business en ligne !
                </p>
                <button className="btn-secondary">
                  Découvrir nos ressources avancées
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniCours;
