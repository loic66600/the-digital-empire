
import React from 'react';
import { Gift, ArrowRight } from 'lucide-react';

export const PromotionalBanner: React.FC = () => {
  return (
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
            <a
              href="https://www.notion.so/1daef76d25118095b08bebc287c2d5d6?v=1daef76d251180df91d4000c5a913a42&pvs=4"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-custom-blue hover:bg-gray-100 transition-colors duration-300 inline-flex items-center font-medium py-2 px-4 rounded-md"
            >
              En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center">
              <Gift className="h-12 w-12 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
