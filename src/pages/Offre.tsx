
import Navbar from "@/components/ui/navbar";
import { CheckCircle2, ArrowRight, ExternalLink } from "lucide-react";

const Offre = () => {
  return (
    <div className="min-h-screen flex flex-col bg-custom-off-white">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-custom-gold/20 text-custom-gold px-4 py-1 rounded-full text-sm font-medium mb-3">
              Offre Exclusive
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-custom-blue">
              Formation Empire Digital
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              La formation complète pour créer, développer et monétiser votre présence en ligne en moins de 90 jours
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
            <div>
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" 
                  alt="Formation Business Digital" 
                  className="w-full h-64 object-cover object-center" 
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-custom-blue mb-4">
                    Ce que vous allez découvrir
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-custom-gold mr-2 flex-shrink-0 mt-0.5" />
                      <span>Comment identifier votre niche rentable et sous-exploitée</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-custom-gold mr-2 flex-shrink-0 mt-0.5" />
                      <span>Notre système pour créer du contenu viral qui attire naturellement votre audience idéale</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-custom-gold mr-2 flex-shrink-0 mt-0.5" />
                      <span>La méthode d'automatisation qui génère des leads et des ventes pendant votre sommeil</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-custom-gold mr-2 flex-shrink-0 mt-0.5" />
                      <span>Comment créer et vendre votre offre premium (même avec une petite audience)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-custom-gold mr-2 flex-shrink-0 mt-0.5" />
                      <span>Les stratégies avancées d'optimisation et de scaling pour atteindre 10K€/mois</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-custom-blue mb-6">
                Pourquoi cette formation est différente ?
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-custom-gold">
                  <h3 className="font-bold text-lg mb-2">Approche pratique</h3>
                  <p className="text-gray-600">
                    Pas de théorie inutile, uniquement des étapes concrètes et des modèles prêts à l'emploi pour gagner du temps.
                  </p>
                </div>
                
                <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-custom-gold">
                  <h3 className="font-bold text-lg mb-2">Adaptée à votre profil</h3>
                  <p className="text-gray-600">
                    Des parcours personnalisés selon votre niveau, votre niche et votre modèle d'affaires préféré.
                  </p>
                </div>
                
                <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-custom-gold">
                  <h3 className="font-bold text-lg mb-2">Support communautaire</h3>
                  <p className="text-gray-600">
                    Accès à notre communauté privée d'entrepreneurs qui s'entraident et partagent leurs succès.
                  </p>
                </div>
                
                <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-custom-gold">
                  <h3 className="font-bold text-lg mb-2">Mises à jour à vie</h3>
                  <p className="text-gray-600">
                    La formation évolue avec les tendances des réseaux sociaux, vous avez toujours accès aux dernières stratégies.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-custom-blue to-custom-light-blue rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-10 text-white">
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">
                    Ce qui est inclus
                  </h2>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-custom-gold mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Formation complète en 29 modules</span>
                        <p className="text-white/80 text-sm">Plus de 50 heures de contenu structuré et actionnable</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-custom-gold mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">12 produits PLR offerts</span>
                        <p className="text-white/80 text-sm">Prêts à être utilisés et personnalisés immédiatement</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-custom-gold mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Tunnel de vente prêt à l'emploi</span>
                        <p className="text-white/80 text-sm">Stratégie de conversion clé en main</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-custom-gold mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Coaching personnalisé</span>
                        <p className="text-white/80 text-sm">Suivi individuel pour maximiser vos résultats</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-custom-gold mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Communauté de soutien</span>
                        <p className="text-white/80 text-sm">Réseau d'entraide et opportunités de collaboration</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex flex-col">
                  <div className="mb-6">
                    <p className="text-lg font-medium text-white/90 mb-1">Prix normal: <span className="line-through">897€</span></p>
                    <div className="flex items-end">
                      <span className="text-3xl font-bold">597€</span>
                      <span className="text-white/80 ml-2">paiement unique</span>
                    </div>
                    <p className="text-sm text-white/70 mt-1">Offre limitée - Places en nombre restreint</p>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm">
                      <CheckCircle2 className="h-4 w-4 text-custom-gold mr-2 flex-shrink-0" />
                      <span>Accès immédiat à tout le contenu</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle2 className="h-4 w-4 text-custom-gold mr-2 flex-shrink-0" />
                      <span>Garantie satisfait ou remboursé de 30 jours</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle2 className="h-4 w-4 text-custom-gold mr-2 flex-shrink-0" />
                      <span>Support prioritaire de notre équipe</span>
                    </li>
                  </ul>
                  
                  <a 
                    href="https://www.digismartlab.com/4447e85c-9d54becd" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="mt-auto bg-custom-gold hover:bg-amber-500 text-white font-bold py-4 px-6 rounded-lg text-center transition-colors duration-300 flex items-center justify-center"
                  >
                    Accéder à la formation <ExternalLink className="ml-2 h-5 w-5" />
                  </a>
                  
                  <p className="text-center text-sm text-white/70 mt-4">
                    Places limitées - Les prix augmenteront prochainement
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-center text-custom-blue mb-8">
              Ils ont transformé leur présence en ligne
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-lg font-bold text-custom-blue mr-3">
                    SM
                  </div>
                  <div>
                    <h3 className="font-semibold">Sophie M.</h3>
                    <p className="text-sm text-gray-500">Coach bien-être</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "J'ai lancé mon coaching en ligne et gagné mes 10 premiers clients en seulement 6 semaines grâce à cette formation. Les scripts de vente sont incroyables !"
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-lg font-bold text-custom-blue mr-3">
                    TL
                  </div>
                  <div>
                    <h3 className="font-semibold">Thomas L.</h3>
                    <p className="text-sm text-gray-500">Créateur de contenu UGC</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "J'ai passé mon tarif UGC de 200€ à 1500€ par client en appliquant les techniques de positionnement premium. 5 clients réguliers maintenant !"
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-lg font-bold text-custom-blue mr-3">
                    JD
                  </div>
                  <div>
                    <h3 className="font-semibold">Julie D.</h3>
                    <p className="text-sm text-gray-500">Affiliée e-commerce</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "J'ai généré plus de 8000€ en commissions d'affiliation le mois dernier grâce aux techniques d'automatisation. Le tout en y consacrant moins de 10h/semaine."
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <a 
              href="https://www.digismartlab.com/4447e85c-9d54becd" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-secondary inline-flex items-center justify-center font-bold py-4 px-8 text-lg"
            >
              Rejoindre la Formation <ExternalLink className="ml-2 h-5 w-5" />
            </a>
            
            <p className="mt-4 text-sm text-gray-500">
              Des questions ? Contactez-nous à contact@digismartlab.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offre;
