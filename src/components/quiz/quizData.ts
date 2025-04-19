export interface Question {
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

export interface ResultProfile {
  id: string;
  titre: string;
  description: string;
  avantages: string[];
  inconvenients: string[];
  recommandation: string;
}

export const questions: Question[] = [
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

export const profiles: ResultProfile[] = [
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
