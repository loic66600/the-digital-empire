
import { useState, useEffect } from 'react';
import { useEmailSubscription } from './useEmailSubscription';

const STORAGE_KEY = 'tools_access_email';

export const useToolsAccess = () => {
  const [hasAccess, setHasAccess] = useState<boolean>(false);
  const { subscribeToNewsletter } = useEmailSubscription();
  
  useEffect(() => {
    const storedEmail = localStorage.getItem(STORAGE_KEY);
    if (storedEmail) {
      setHasAccess(true);
    }
  }, []);

  const grantAccess = async (email: string, source: 'quiz' | 'simulator' | 'mini-course' | 'ideas') => {
    const success = await subscribeToNewsletter(source);
    if (success) {
      localStorage.setItem(STORAGE_KEY, email);
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
