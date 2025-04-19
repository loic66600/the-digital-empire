import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/ui/navbar";
import { EmailGate } from "@/components/EmailGate";
import { useToolsAccess } from "@/hooks/useToolsAccess";
import { BookOpen, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

interface Question {
  id: number;
  texte: string;
  options: {
    id: string;
    texte: string;
    points: {
      affiliation: number;
      ugc: number;
      produits: number;
    };
  }[];
}

interface ResultProfile {
  id: string;
  titre: string;
  description: string;
  avantages: string[];
  inconvenients: string[];
  recommandation: string;
}

const questions: Question[] = [
  {
    id: 1,
    texte: "Quelle est votre niveau d'expertise dans votre domaine ?",
    options: [
      { 
        id: "a", 
        texte: "Débutant, je découvre encore", 
        points: { affiliation: 2, ugc: 3, produits: 0 } 
      },
      { 
        id: "b", 
        texte: "Intermédiaire, j'ai de bonnes connaissances", 
        points: { affiliation: 3, ugc: 2, produits: 1 } 
      },
      { 
        id: "c", 
        texte: "Expert, je maîtrise parfaitement mon sujet", 
        points: { affiliation: 1, ugc: 1, produits: 3 } 
      }
    ]
  },
  {
    id: 2,
    texte: "Combien de temps pouvez-vous consacrer à votre business chaque semaine ?",
    options: [
      { 
        id: "a", 
        texte: "Moins de 5 heures", 
        points: { affiliation: 3, ugc: 1, produits: 0 } 
      },
      { 
        id: "b", 
        texte: "Entre 5 et 15 heures", 
        points: { affiliation: 2, ugc: 3, produits: 1 } 
      },
      { 
        id: "c", 
        texte: "Plus de 15 heures", 
        points: { affiliation: 1, ugc: 2, produits: 3 } 
      }
    ]
  },
  {
    id: 3,
    texte: "Quelle est votre priorité principale ?",
    options: [
      { 
        id: "a", 
        texte: "Gagner de l'argent rapidement", 
        points: { affiliation: 3, ugc: 2, produits: 0 } 
      },
      { 
        id: "b", 
        texte: "Construire une marque personnelle", 
        points: { affiliation: 1, ugc: 2, produits: 3 } 
      },
      { 
        id: "c", 
        texte: "Créer quelque chose de flexible", 
        points: { affiliation: 2, ugc: 3, produits: 1 } 
      }
    ]
  },
  {
    id: 4,
    texte: "Quel est votre budget pour démarrer ?",
    options: [
      { 
        id: "a", 
        texte: "Presque rien, je veux commencer sans investissement", 
        points: { affiliation: 3, ugc: 2, produits: 0 } 
      },
      { 
        id: "b", 
        texte: "Quelques centaines d'euros", 
        points: { affiliation: 2, ugc: 3, produits: 1 } 
      },
      { 
        id: "c", 
        texte: "Je peux investir plus de 1000€", 
        points: { affiliation: 1, ugc: 1, produits: 3 } 
      }
    ]
  },
  {
    id: 5,
    texte: "Comment vous sentez-vous à l'idée de créer votre propre contenu ?",
    options: [
      { 
        id: "a", 
        texte: "Je préfère partager le contenu des autres", 
        points: { affiliation: 3, ugc: 0, produits: 1 } 
      },
      { 
        id: "b", 
        texte: "J'aime créer du contenu pour les marques", 
        points: { affiliation: 1, ugc: 3, produits: 0 } 
      },
      { 
        id: "c", 
        texte: "Je veux créer et vendre mon propre contenu", 
        points: { affiliation: 0, ugc: 1, produits: 3 } 
      }
    ]
  },
  {
    id: 6,
    texte: "Quel type de relation client préférez-vous ?",
    options: [
      { 
        id: "a", 
        texte: "Peu d'interaction directe avec les clients", 
        points: { affiliation: 3, ugc: 1, produits: 0 } 
      },
      { 
        id: "b", 
        texte: "Interactions limitées avec quelques clients", 
        points: { affiliation: 1, ugc: 3, produits: 1 } 
      },
      { 
        id: "c", 
        texte: "Relation approfondie avec ma communauté", 
        points: { affiliation: 0, ugc: 1, produits: 3 } 
      }
    ]
  },
  {
    id: 7,
    texte: "Comment envisagez-vous votre business dans 5 ans ?",
    options: [
      { 
        id: "a", 
        texte: "Un revenu passif avec peu d'implication quotidienne", 
        points: { affiliation: 3, ugc: 0, produits: 1 } 
      },
      { 
        id: "b", 
        texte: "Une agence avec plusieurs clients", 
        points: { affiliation: 0, ugc: 3, produits: 1 } 
      },
      { 
        id: "c", 
        texte: "Ma propre marque et mes propres produits", 
        points: { affiliation: 0, ugc: 1, produits: 3 } 
      }
    ]
  }
];

const profiles: ResultProfile[] = [
  {
    id: "affiliation",
    titre: "Marketing d'Affiliation",
    description: "Vous êtes fait pour le marketing d'affiliation ! Ce modèle vous permet de promouvoir des produits d'autres personnes et de gagner des commissions sur chaque vente générée par vos liens.",
    avantages: [
      "Démarrage rapide sans création de produit",
      "Investissement initial minimal",
      "Revenus potentiellement passifs",
      "Flexibilité de temps et de lieu"
    ],
    inconvenients: [
      "Dépendance vis-à-vis des programmes d'affiliation",
      "Commissions généralement entre 5% et 50%",
      "Besoin de trafic qualifié pour convertir",
      "Concurrence parfois élevée"
    ],
    recommandation: "Commencez par choisir une niche spécifique, puis recherchez des programmes d'affiliation pertinents. Créez du contenu de valeur qui recommande naturellement ces produits."
  },
  {
    id: "ugc",
    titre: "Créateur de Contenu (UGC)",
    description: "Votre profil correspond parfaitement à celui d'un créateur de contenu pour marques (UGC) ! Ce modèle consiste à créer du contenu authentique pour des marques qui l'utiliseront dans leurs campagnes marketing.",
    avantages: [
      "Pas besoin d'une grande audience personnelle",
      "Rémunération fixe par contenu créé",
      "Possibilité de travailler avec des marques variées",
      "Développement de compétences créatives valorisées"
    ],
    inconvenients: [
      "Recherche active de clients nécessaire",
      "Revenus liés au temps de travail",
      "Délais parfois serrés",
      "Nécessite des compétences en création de contenu"
    ],
    recommandation: "Créez un portfolio de contenus démontrant votre style. Prospectez activement des marques dans votre niche et proposez vos services à un tarif compétitif pour démarrer."
  },
  {
    id: "produits",
    titre: "Produits Numériques",
    description: "Vous avez le profil idéal pour créer et vendre vos propres produits numériques ! Ce modèle vous permet de monétiser votre expertise en créant des formations, ebooks, templates ou services en ligne.",
    avantages: [
      "Contrôle total sur vos produits et prix",
      "Marges bénéficiaires élevées (souvent 90%+)",
      "Possibilité de ventes récurrentes (abonnements)",
      "Construction d'une marque et d'un actif à long terme"
    ],
    inconvenients: [
      "Investissement initial en temps plus important",
      "Nécessité de créer un produit de qualité",
      "Responsabilité du service client",
      "Marketing et vente à gérer entièrement"
    ],
    recommandation: "Identifiez un problème précis que vous pouvez résoudre grâce à votre expertise. Créez un premier produit relativement simple, testez-le avec un petit groupe avant de le lancer plus largement."
  }
];

const Quiz = () => {
  const { hasAccess } = useToolsAccess();
  const [accessGranted, setAccessGranted] = useState(false);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [result, setResult] = useState<ResultProfile | null>(null);
  const [scores, setScores] = useState({ affiliation: 0, ugc: 0, produits: 0 });

  useEffect(() => {
    if (hasAccess) {
      setAccessGranted(true);
    }
  }, [hasAccess]);

  const handleAnswer = (questionId: number, optionId: string) => {
    const updatedResponses = { ...responses, [questionId]: optionId };
    setResponses(updatedResponses);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult(updatedResponses);
    }
  };

  const calculateResult = (finalResponses: Record<number, string>) => {
    const finalScores = { affiliation: 0, ugc: 0, produits: 0 };
    
    questions.forEach(question => {
      const selectedOptionId = finalResponses[question.id];
      if (selectedOptionId) {
        const selectedOption = question.options.find(opt => opt.id === selectedOptionId);
        if (selectedOption) {
          finalScores.affiliation += selectedOption.points.affiliation;
          finalScores.ugc += selectedOption.points.ugc;
          finalScores.produits += selectedOption.points.produits;
        }
      }
    });
    
    setScores(finalScores);
    
    let highestScore = 0;
    let winningProfile = "";
    
    Object.entries(finalScores).forEach(([profile, score]) => {
      if (score > highestScore) {
        highestScore = score;
        winningProfile = profile;
      }
    });
    
    const matchedProfile = profiles.find(p => p.id === winningProfile) || null;
    setResult(matchedProfile);
    setShowResults(true);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setResponses({});
    setShowResults(false);
    setResult(null);
  };

  const progressPercentage = ((currentQuestion + 1) / questions.length) * 100;
  
  const handleAccessSuccess = () => {
    setAccessGranted(true);
  };
  
  const showContent = hasAccess || accessGranted;

  return (
    <div className="min-h-screen flex flex-col bg-custom-off-white">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {!showContent ? (
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-custom-blue">
                Quiz : Découvrez votre modèle business idéal
              </h1>
              <p className="text-lg text-gray-600">
                Répondez à quelques questions pour identifier le business model qui vous correspond le mieux
              </p>
              <EmailGate source="quiz" onSuccess={handleAccessSuccess} />
            </div>
          ) : !showResults ? (
            <motion.div 
              key={`question-${currentQuestion}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-6 md:p-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl md:text-2xl font-bold text-custom-blue">Question {currentQuestion + 1}/{questions.length}</h2>
                  <div className="w-10 h-10 bg-custom-blue/10 rounded-full flex items-center justify-center">
                    <BookOpen className="h-5 w-5 text-custom-blue" />
                  </div>
                </div>
                
                <div className="mb-8">
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                    <div 
                      className="bg-custom-blue h-2 rounded-full transition-all duration-500" 
                      style={{ width: `${progressPercentage}%` }}
                    ></div>
                  </div>
                  <div className="text-sm text-gray-500 text-right">
                    {Math.round(progressPercentage)}% terminé
                  </div>
                </div>
                
                <h3 className="text-lg md:text-xl mb-6 text-gray-800">
                  {questions[currentQuestion]?.texte}
                </h3>
                
                <div className="space-y-4">
                  {questions[currentQuestion]?.options.map((option) => (
                    <motion.button
                      key={option.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleAnswer(questions[currentQuestion].id, option.id)}
                      className="w-full p-4 text-left rounded-lg border border-gray-200 hover:border-custom-blue hover:bg-custom-blue/5 transition-all"
                    >
                      {option.texte}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-6 md:p-8">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle2 className="h-8 w-8 text-green-600" />
                  </div>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 text-custom-blue">
                  Votre profil entrepreneurial
                </h2>
                
                {result && (
                  <div className="space-y-6">
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-custom-gold mb-2">{result.titre}</h3>
                      <p className="text-gray-600">{result.description}</p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-800 mb-3">Avantages</h4>
                        <ul className="space-y-2">
                          {result.avantages.map((avantage, index) => (
                            <li key={index} className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span className="text-sm">{avantage}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="bg-red-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-red-800 mb-3">Points d'attention</h4>
                        <ul className="space-y-2">
                          {result.inconvenients.map((inconvenient, index) => (
                            <li key={index} className="flex items-start">
                              <span className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5">•</span>
                              <span className="text-sm">{inconvenient}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-custom-blue mb-2">Notre recommandation</h4>
                      <p className="text-sm">{result.recommandation}</p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-3">Répartition des scores</h4>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between mb-1 text-sm">
                            <span>Marketing d'affiliation</span>
                            <span>{Math.round((scores.affiliation / (scores.affiliation + scores.ugc + scores.produits)) * 100)}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-yellow-500 h-2 rounded-full" 
                              style={{ width: `${(scores.affiliation / (scores.affiliation + scores.ugc + scores.produits)) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between mb-1 text-sm">
                            <span>Créateur de contenu (UGC)</span>
                            <span>{Math.round((scores.ugc / (scores.affiliation + scores.ugc + scores.produits)) * 100)}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-purple-500 h-2 rounded-full" 
                              style={{ width: `${(scores.ugc / (scores.affiliation + scores.ugc + scores.produits)) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between mb-1 text-sm">
                            <span>Produits numériques</span>
                            <span>{Math.round((scores.produits / (scores.affiliation + scores.ugc + scores.produits)) * 100)}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-green-500 h-2 rounded-full" 
                              style={{ width: `${(scores.produits / (scores.affiliation + scores.ugc + scores.produits)) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button 
                        onClick={restartQuiz}
                        className="py-2 px-4 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                      >
                        Refaire le quiz
                      </button>
                      <Link 
                        to="/mini-cours"
                        className="btn-primary flex items-center justify-center"
                      >
                        Découvrir notre mini-cours <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
