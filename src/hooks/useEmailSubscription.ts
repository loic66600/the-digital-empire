
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/components/ui/use-toast';

export const useEmailSubscription = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState<string | null>(null);

  // RFC 5322 compliant email validation
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
  };

  const subscribeToNewsletter = async (emailToSubscribe: string, source: 'quiz' | 'simulator' | 'mini-course' | 'ideas') => {
    // Utilisez l'email fourni en argument plutôt que l'état local
    const emailToUse = emailToSubscribe || email;
    setEmailError(null);
    
    if (!emailToUse) {
      setEmailError("Veuillez entrer une adresse email");
      return false;
    }
    
    if (!validateEmail(emailToUse)) {
      setEmailError("L'adresse saisie semble incorrecte. Veuillez vérifier votre email.");
      return false;
    }

    setLoading(true);
    
    try {
      const { error } = await supabase
        .from('email_subscribers')
        .insert({ email: emailToUse, source });

      if (error) {
        if (error.code === '23505') {
          // Email déjà enregistré dans cette source, mais on continue comme si c'était un succès
          toast({
            title: "Email reconnu",
            description: "Votre accès a été débloqué",
            variant: "default"
          });
          return true;
        } else {
          throw error;
        }
      } else {
        toast({
          title: "Inscription réussie",
          description: "Merci de vous être inscrit !",
          variant: "default"
        });
        return true;
      }
    } catch (error) {
      console.error("Erreur d'inscription:", error);
      toast({
        title: "Erreur d'inscription",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive"
      });
      setEmailError("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
    return false;
  };

  return {
    email,
    setEmail,
    loading,
    emailError,
    setEmailError,
    subscribeToNewsletter
  };
};
