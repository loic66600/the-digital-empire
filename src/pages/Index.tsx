import { Link } from "react-router-dom";
import { ArrowRight, Calculator, BookOpen, Gift, List } from "lucide-react";
import Navbar from "@/components/ui/navbar";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-custom-off-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-custom-blue text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Lancez votre empire digital avec Empire Digital
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Découvrez comment créer un business en ligne rentable grâce à nos outils et ressources exclusifs
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/simulateur" className="btn-secondary">
                Simuler vos revenus
              </Link>
              <Link to="/quiz" className="bg-white text-custom-blue hover:bg-gray-100 transition-colors duration-300 font-medium py-2 px-4 rounded-md">
                Trouver votre modèle
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features */}
      <section className="section">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Nos outils pour votre réussite
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Simulateur */}
            <div className="card hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full bg-custom-blue/10 flex items-center justify-center">
                  <Calculator className="h-7 w-7 text-custom-blue" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Simulateur de revenus</h3>
              <p className="text-gray-600 mb-4 text-center">
                Calculez votre potentiel de revenus en fonction de votre audience et de votre plateforme
              </p>
              <Link to="/simulateur" className="flex items-center justify-center text-custom-blue font-medium hover:text-custom-light-blue transition-colors">
                Simuler <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            {/* Quiz */}
            <div className="card hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full bg-custom-blue/10 flex items-center justify-center">
                  <BookOpen className="h-7 w-7 text-custom-blue" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Quiz interactif</h3>
              <p className="text-gray-600 mb-4 text-center">
                Découvrez quel modèle d'affaires correspond le mieux à votre profil et vos objectifs
              </p>
              <Link to="/quiz" className="flex items-center justify-center text-custom-blue font-medium hover:text-custom-light-blue transition-colors">
                Démarrer le quiz <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            {/* Mini-cours */}
            <div className="card hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full bg-custom-blue/10 flex items-center justify-center">
                  <BookOpen className="h-7 w-7 text-custom-blue" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Mini-cours 7 jours</h3>
              <p className="text-gray-600 mb-4 text-center">
                Formation accélérée pour lancer votre présence en ligne en seulement une semaine
              </p>
              <Link to="/mini-cours" className="flex items-center justify-center text-custom-blue font-medium hover:text-custom-light-blue transition-colors">
                Accéder au cours <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            {/* Générateur d'idées */}
            <div className="card hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full bg-custom-blue/10 flex items-center justify-center">
                  <List className="h-7 w-7 text-custom-blue" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Idées virales</h3>
              <p className="text-gray-600 mb-4 text-center">
                Trouvez l'inspiration avec notre générateur d'idées de contenu viral pour chaque plateforme
              </p>
              <Link to="/generateur" className="flex items-center justify-center text-custom-blue font-medium hover:text-custom-light-blue transition-colors">
                Générer des idées <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="bg-gradient-to-r from-custom-blue to-custom-light-blue text-white py-16">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Prêt à transformer votre présence en ligne en business rentable ?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Accédez à notre formation complète et découvrez les stratégies éprouvées pour monétiser votre audience.
          </p>
          <Link to="/offre" className="btn-secondary inline-flex items-center">
            Découvrir notre offre <Gift className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <span className="text-xl font-bold">Empire<span className="text-custom-gold">Digital</span></span>
            </div>
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Empire Digital. Tous droits réservés.
            </p>
            <div className="mt-4 space-x-4">
              <a 
                href="https://www.digismartlab.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-white"
              >
                Site web
              </a>
              <a 
                href="mailto:contact@digismartlab.com" 
                className="text-gray-300 hover:text-white"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
