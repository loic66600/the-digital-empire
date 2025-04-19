import { useState, useEffect } from "react";
import Navbar from "@/components/ui/navbar";
import { EmailGate } from "@/components/EmailGate";
import { useToolsAccess } from "@/hooks/useToolsAccess";
import { QuizQuestion } from "@/components/quiz/QuizQuestion";
import { QuizResults } from "@/components/quiz/QuizResults";
import { questions, profiles } from "@/components/quiz/quizData";
import type { ResultProfile } from "@/components/quiz/quizData";

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
  
  const handleAccessSuccess = () => {
    setAccessGranted(true);
  };
  
  const showContent = hasAccess || accessGranted;

  return (
    <div className="min-h-screen flex flex-col bg-custom-off-white">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold mb-4 text-custom-blue">
              Pour quel Business est-tu fait ?
            </h1>
          </div>
          
          {!showContent ? (
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-custom-blue">
                Quiz : Découvrez votre modèle business idéal
              </h2>
              <p className="text-lg text-gray-600">
                Répondez à quelques questions pour identifier le business model qui vous correspond le mieux
              </p>
              <EmailGate source="quiz" onSuccess={handleAccessSuccess} />
            </div>
          ) : !showResults ? (
            <QuizQuestion
              currentQuestion={currentQuestion}
              totalQuestions={questions.length}
              question={questions[currentQuestion]}
              onAnswer={handleAnswer}
            />
          ) : result && (
            <QuizResults
              result={result}
              scores={scores}
              onRestart={restartQuiz}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
