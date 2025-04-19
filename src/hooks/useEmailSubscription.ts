
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/components/ui/use-toast';

export const useEmailSubscription = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');

  const subscribeToNewsletter = async (source: 'quiz' | 'simulator' | 'mini-course' | 'ideas') => {
    if (!email) {
      toast({
        title: "Erreur",
        description: "Veuillez entrer une adresse email valide",
        variant: "destructive"
      });
      return false;
    }

    setLoading(true);
    
    try {
      const { error } = await supabase
        .from('email_subscribers')
        .insert({ email, source });

      if (error) {
        if (error.code === '23505') {
          toast({
            title: "Email déjà enregistré",
            description: "Cet email a déjà été enregistré pour cette source",
            variant: "default"
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: "Inscription réussie",
          description: "Merci de vous être inscrit !",
          variant: "default"
        });
        setEmail('');
        return true;
      }
    } catch (error) {
      toast({
        title: "Erreur d'inscription",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
    return false;
  };

  return {
    email,
    setEmail,
    loading,
    subscribeToNewsletter
  };
};
