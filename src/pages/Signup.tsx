
import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import SignupForm from '@/components/SignupForm';
import { Button } from '@/components/ui/button';

export default function Signup() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const handleSignupSuccess = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sea/10 to-sea/5 px-4 py-12">
      <div className="w-full max-w-md">
        {/* Back to Home Button */}
        <div className="mb-6">
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="-ml-2"
          >
            <Link to="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </Button>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Create Account
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Join Baraka Hotel and start your journey
          </p>
        </div>
        
        <div className="bg-white dark:bg-card rounded-lg shadow-lg p-8">
          <SignupForm onSuccess={handleSignupSuccess} />
        </div>
      </div>
    </div>
  );
}
