
import React from 'react';
import { List, ArrowRight } from 'lucide-react';

interface IdeaType {
  id: number;
  title: string;
  description: string;
  example: string;
  platform: string;
}

interface IdeaDisplayProps {
  currentIdea: IdeaType | null;
  onGenerateIdea: () => void;
}

export const IdeaDisplay: React.FC<IdeaDisplayProps> = ({ currentIdea, onGenerateIdea }) => {
  if (!currentIdea) {
    return (
      <div className="text-center py-10">
        <div className="bg-custom-blue/10 inline-flex items-center justify-center w-16 h-16 rounded-full mb-4">
          <List className="h-8 w-8 text-custom-blue" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Pas encore d'idée générée</h3>
        <p className="text-gray-600 mb-8">
          Cliquez sur le bouton ci-dessous pour obtenir une idée virale
        </p>
        <button
          onClick={onGenerateIdea}
          className="btn-primary py-3 px-6 inline-flex items-center"
        >
          Générer une idée <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </div>
    );
  }

  return (
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
          onClick={onGenerateIdea}
          className="btn-primary py-3 px-6 flex-1"
        >
          Générer une autre idée
        </button>
        
        <a
          href="https://www.notion.so/1daef76d25118095b08bebc287c2d5d6?v=1daef76d251180df91d4000c5a913a42&pvs=4"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-custom-blue hover:bg-gray-100 transition-colors duration-300 inline-flex items-center font-medium py-2 px-4 rounded-md"
        >
          En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </div>
  );
};
