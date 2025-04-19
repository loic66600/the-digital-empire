
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEmailSubscription } from "@/hooks/useEmailSubscription";
import { useToolsAccess } from "@/hooks/useToolsAccess";
import { Mail } from "lucide-react";

interface EmailGateProps {
  source: 'quiz' | 'simulator' | 'mini-course' | 'ideas';
  onSuccess: () => void;
}

export const EmailGate = ({ source, onSuccess }: EmailGateProps) => {
  const { email, setEmail, loading } = useEmailSubscription();
  const { grantAccess } = useToolsAccess();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await grantAccess(email, source);
    if (success) {
      setIsSubmitted(true);
      onSuccess();
    }
  };

  if (isSubmitted) return null;

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
      <div className="text-center mb-6">
        <div className="w-12 h-12 bg-custom-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Mail className="h-6 w-6 text-custom-blue" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Accédez à tous nos outils gratuitement
        </h3>
        <p className="text-gray-600">
          Entrez votre email pour débloquer l'accès à cet outil et recevoir nos meilleurs conseils
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            type="email"
            placeholder="Votre email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full"
            disabled={loading}
          />
        </div>
        <Button 
          type="submit" 
          className="w-full bg-custom-blue hover:bg-custom-light-blue transition-colors"
          disabled={loading}
        >
          {loading ? "Inscription..." : "Débloquer l'accès"}
        </Button>
      </form>
    </div>
  );
};
