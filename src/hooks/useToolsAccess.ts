
import { useState, useEffect } from 'react';
import { useEmailSubscription } from './useEmailSubscription';

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
      const success = await subscribeToNewsletter(source);
      
      if (success) {
        // Enregistre l'email dans le localStorage pour maintenir l'accès
        localStorage.setItem(STORAGE_KEY, email);
        setHasAccess(true);
        return true;
      }
      return false;
    } catch (error) {
      console.error("Erreur lors de l'octroi d'accès:", error);
      return false;
    }
  };

  return {
    hasAccess,
    grantAccess
  };
};
