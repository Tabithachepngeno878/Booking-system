
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import LoginForm from '@/components/LoginForm';
import ForgotPasswordForm from '@/components/ForgotPasswordForm';
import { Button } from '@/components/ui/button';

export default function Login() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const handleLoginSuccess = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sea/10 to-sea/5 px-4">
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
            {showForgotPassword ? 'Reset Password' : 'Welcome Back'}
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            {showForgotPassword 
              ? 'Follow the steps to reset your password' 
              : 'Sign in to your Baraka Hotel account'
            }
          </p>
        </div>
        
        <div className="bg-white dark:bg-card rounded-lg shadow-lg p-8">
          {showForgotPassword ? (
            <ForgotPasswordForm onBack={() => setShowForgotPassword(false)} />
          ) : (
            <LoginForm 
              onSuccess={handleLoginSuccess} 
              onForgotPassword={() => setShowForgotPassword(true)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
