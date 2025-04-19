
import { useState, useEffect } from 'react';
import { useEmailSubscription } from './useEmailSubscription';
import { toast } from '@/components/ui/use-toast';

const STORAGE_KEY = 'tools_access_email';

export const useToolsAccess = () => {
  const [hasAccess, setHasAccess] = useState<boolean>(false);
  const { subscribeToNewsletter } = useEmailSubscription();
  
  // Vérifie le localStorage au chargement pour voir si l'utilisateur a déjà accès
  useEffect(() => {
    const storedEmail = localStorage.getItem(STORAGE_KEY);
    if (storedEmail) {
      setHasAccess(true);
    }
  }, []);

  // Fonction pour accorder l'accès et enregistrer l'email
  const grantAccess = async (email: string, source: 'quiz' | 'simulator' | 'mini-course' | 'ideas') => {
    try {
      // Vérifie d'abord si l'utilisateur a déjà accès
      const storedEmail = localStorage.getItem(STORAGE_KEY);
      if (storedEmail) {
        setHasAccess(true);
        return true;
      }
      
      const success = await subscribeToNewsletter(source);
      
      if (success) {
        // Enregistre l'email dans le localStorage pour maintenir l'accès
        localStorage.setItem(STORAGE_KEY, email);
        setHasAccess(true);
        
        toast({
          title: "Accès débloqué",
          description: "Vous avez maintenant accès à tous nos outils",
          variant: "default"
        });
        
        return true;
      }
      return false;
    } catch (error) {
      console.error("Erreur lors de l'octroi d'accès:", error);
      toast({
        title: "Erreur d'accès",
        description: "Une erreur s'est produite. Veuillez réessayer.",
        variant: "destructive"
      });
      return false;
    }
  };

  // Fonction pour réinitialiser l'accès (utile pour les tests)
  const resetAccess = () => {
    localStorage.removeItem(STORAGE_KEY);
    setHasAccess(false);
  };

  return {
    hasAccess,
    grantAccess,
    resetAccess
  };
};
