export interface IdeaType {
  id: number;
  title: string;
  description: string;
  example: string;
  platform: string;
}

export const viralIdeas: IdeaType[] = [
  // Instagram
  {
    id: 1,
    title: "Avant/Après de transformation",
    description: "Montrez des résultats concrets de transformation en format avant/après pour démontrer votre expertise.",
    example: "Une photo avant/après d'un entrepreneur qui est passé de 0 à 10K€/mois grâce à votre méthode.",
    platform: "instagram"
  },
  {
    id: 2,
    title: "Série 'Saviez-vous que'",
    description: "Partagez des statistiques ou faits surprenants sur votre industrie que peu de gens connaissent.",
    example: "Saviez-vous que 87% des entrepreneurs qui réussissent sur Instagram ont commencé avec moins de 1000 abonnés ?",
    platform: "instagram"
  },
  {
    id: 3,
    title: "Mini-tutoriel en carrousel",
    description: "Créez un carrousel de 5-7 slides qui décompose un processus complexe en étapes simples.",
    example: "5 étapes pour créer une offre irrésistible qui se vend toute seule.",
    platform: "instagram"
  },
  
  // TikTok
  {
    id: 4,
    title: "Story-time avec twist surprenant",
    description: "Racontez une histoire personnelle avec un rebondissement inattendu qui capte l'attention jusqu'à la fin.",
    example: "Comment j'ai perdu tous mes clients en une semaine... et pourquoi c'était la meilleure chose qui me soit arrivée.",
    platform: "tiktok"
  },
  {
    id: 5,
    title: "POV: problème et solution",
    description: "Créez une vidéo 'point de vue' montrant un problème courant et votre solution unique.",
    example: "POV: Tu viens de te réveiller et tu vois que ta publication a généré 5 nouveaux clients pendant ton sommeil.",
    platform: "tiktok"
  },
  {
    id: 6,
    title: "Tendance détournée pour votre niche",
    description: "Utilisez un son ou une tendance virale du moment mais adaptez-la à votre expertise.",
    example: "Utiliser un son viral pour montrer les erreurs communes dans le marketing digital.",
    platform: "tiktok"
  },
  
  // YouTube
  {
    id: 7,
    title: "Étude de cas détaillée",
    description: "Analysez en profondeur un succès (le vôtre ou celui d'un client) avec des chiffres et stratégies concrètes.",
    example: "Comment j'ai généré 50K€ avec un seul produit numérique en 30 jours (stratégie complète dévoilée).",
    platform: "youtube"
  },
  {
    id: 8,
    title: "Débunk de mythes populaires",
    description: "Contestez les idées reçues dans votre domaine avec preuves et expériences à l'appui.",
    example: "Les 5 plus gros mythes du marketing d'influence qui ruinent votre croissance.",
    platform: "youtube"
  },
  {
    id: 9,
    title: "Day in the life",
    description: "Montrez une journée type dans votre vie d'entrepreneur pour inspirer et éduquer.",
    example: "Une journée dans la vie d'un entrepreneur digital qui gagne 6 chiffres (routines de productivité dévoilées).",
    platform: "youtube"
  },
  
  // LinkedIn
  {
    id: 10,
    title: "Analyse de tendance du marché",
    description: "Commentez une tendance actuelle dans votre secteur avec votre perspective unique.",
    example: "Pourquoi l'IA va transformer le métier de créateur de contenu (et comment vous adapter dès maintenant).",
    platform: "linkedin"
  },
  {
    id: 11,
    title: "Leçon tirée d'un échec",
    description: "Partagez une histoire d'échec professionnelle et les enseignements précieux que vous en avez tirés.",
    example: "J'ai perdu 15 000€ dans ma première formation en ligne. Voici les 3 leçons qui m'ont permis de rebondir.",
    platform: "linkedin"
  },
  {
    id: 12,
    title: "Checklist pratique",
    description: "Offrez une liste de vérification concrète pour accomplir une tâche spécifique dans votre domaine.",
    example: "Checklist : 7 éléments essentiels pour une page de vente qui convertit à plus de 5%.",
    platform: "linkedin"
  }
];

export const platformOptions = [
  { value: "instagram", label: "Instagram" },
  { value: "tiktok", label: "TikTok" },
  { value: "youtube", label: "YouTube" },
  { value: "linkedin", label: "LinkedIn" },
];
