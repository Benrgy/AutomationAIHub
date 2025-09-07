import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Component to handle GitHub Pages SPA redirects from 404.html
 * This component should be rendered at the root level of the app
 */
export const RedirectHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if we have a redirect from GitHub Pages 404.html
    const redirectPath = sessionStorage.getItem('redirect');
    
    if (redirectPath) {
      console.log('🔄 RedirectHandler: Found redirect path:', redirectPath);
      
      // Clear the redirect to prevent loops
      sessionStorage.removeItem('redirect');
      
      // Navigate to the intended path
      navigate(redirectPath, { replace: true });
      
      console.log('✅ RedirectHandler: Navigated to:', redirectPath);
    }
  }, [navigate]);

  // This component doesn't render anything
  return null;
};