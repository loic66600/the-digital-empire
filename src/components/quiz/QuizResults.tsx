
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ResultProfile {
  id: string;
  titre: string;
  description: string;
  avantages: string[];
  inconvenients: string[];
  recommandation: string;
}

interface QuizResultsProps {
  result: ResultProfile;
  scores: {
    affiliation: number;
    ugc: number;
    produits: number;
  };
  onRestart: () => void;
}

export const QuizResults = ({ result, scores, onRestart }: QuizResultsProps) => {
  const totalScore = scores.affiliation + scores.ugc + scores.produits;

  return (
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
              {Object.entries(scores).map(([key, score]) => (
                <div key={key}>
                  <div className="flex justify-between mb-1 text-sm">
                    <span>
                      {key === 'affiliation' && "Marketing d'affiliation"}
                      {key === 'ugc' && "Créateur de contenu (UGC)"}
                      {key === 'produits' && "Produits numériques"}
                    </span>
                    <span>{Math.round((score / totalScore) * 100)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        key === 'affiliation' ? 'bg-yellow-500' : 
                        key === 'ugc' ? 'bg-purple-500' : 'bg-green-500'
                      }`}
                      style={{ width: `${(score / totalScore) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={onRestart}
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
      </div>
    </motion.div>
  );
};
