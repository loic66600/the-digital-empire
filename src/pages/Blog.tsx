
import { Link } from "react-router-dom";
import Navbar from "@/components/ui/navbar";
import { ArrowRight, ExternalLink } from "lucide-react";

const blogCategories = [
  { 
    name: "Marketing Digital", 
    description: "Stratégies et techniques pour développer votre présence en ligne",
    link: "https://www.digismartlab.com/blog/category/marketing-digital"
  },
  { 
    name: "IA", 
    description: "Découvertes et applications de l'Intelligence Artificielle",
    link: "https://www.digismartlab.com/blog/category/intelligence-artificielle"
  },
  { 
    name: "Productivité Digitale", 
    description: "Outils et méthodes pour optimiser votre efficacité",
    link: "https://www.digismartlab.com/blog/category/productivit-digital"
  },
  { 
    name: "Trucs & Astuces", 
    description: "Conseils pratiques et raccourcis pour entrepreneurs digitaux",
    link: "https://www.digismartlab.com/blog/category/trucs-et-astuces"
  },
  { 
    name: "Boîte à Outils", 
    description: "Revues et recommandations d'outils essentiels",
    link: "https://www.digismartlab.com/blog/category/la-bote--outils---trouver-les-meilleurs-logiciels-et-ressources"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col bg-custom-off-white">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-custom-blue">
              Blog Empire Digital
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ressources, insights et stratégies pour booster votre business digital
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogCategories.map((category, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6"
              >
                <h3 className="text-xl font-semibold text-custom-blue mb-3">
                  {category.name}
                </h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <a
                  href={category.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-custom-blue hover:text-custom-light-blue transition-colors"
                >
                  Voir les articles <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
