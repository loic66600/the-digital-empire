
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

interface QuizQuestionProps {
  currentQuestion: number;
  totalQuestions: number;
  question: {
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
  };
  onAnswer: (questionId: number, optionId: string) => void;
}

export const QuizQuestion = ({ 
  currentQuestion, 
  totalQuestions, 
  question, 
  onAnswer 
}: QuizQuestionProps) => {
  const progressPercentage = ((currentQuestion + 1) / totalQuestions) * 100;

  return (
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
          <h2 className="text-xl md:text-2xl font-bold text-custom-blue">
            Question {currentQuestion + 1}/{totalQuestions}
          </h2>
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
          {question.texte}
        </h3>
        
        <div className="space-y-4">
          {question.options.map((option) => (
            <motion.button
              key={option.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onAnswer(question.id, option.id)}
              className="w-full p-4 text-left rounded-lg border border-gray-200 hover:border-custom-blue hover:bg-custom-blue/5 transition-all"
            >
              {option.texte}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
