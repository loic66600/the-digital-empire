
import { useState, useEffect } from 'react';
import { useEmailSubscription } from './useEmailSubscription';

export const useToolsAccess = () => {
  const [hasAccess, setHasAccess] = useState<boolean>(false);
  const { subscribeToNewsletter } = useEmailSubscription();
  
  useEffect(() => {
    const storedEmail = localStorage.getItem('tools_access_email');
    if (storedEmail) {
      setHasAccess(true);
    }
  }, []);

  const grantAccess = async (email: string, source: 'quiz' | 'simulator' | 'mini-course' | 'ideas') => {
    const success = await subscribeToNewsletter(source);
    if (success) {
      localStorage.setItem('tools_access_email', email);
      setHasAccess(true);
      return true;
    }
    return false;
  };

  return {
    hasAccess,
    grantAccess
  };
};
