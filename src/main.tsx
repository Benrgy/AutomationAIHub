import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { RegionProvider } from "./contexts/RegionContext.tsx";
import App from './App.tsx'
import './index.css'

const queryClient = new QueryClient();

// Debug logging for GitHub Pages deployment
console.log('🚀 AutomationAIHub: Initializing React app...');
console.log('📍 Current URL:', window.location.href);
console.log('📁 Base URL:', import.meta.env.BASE_URL);

try {
  const rootElement = document.getElementById("root");
  if (!rootElement) {
    throw new Error("Root element not found");
  }
  
  console.log('✅ Root element found, creating React app...');
  createRoot(rootElement).render(
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <RegionProvider>
          <App />
        </RegionProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
  console.log('🎉 React app rendered successfully!');
} catch (error) {
  console.error('❌ Failed to initialize React app:', error);
  
  // Fallback error display
  const rootElement = document.getElementById("root");
  if (rootElement) {
    rootElement.innerHTML = `
      <div style="padding: 20px; color: #ef4444; font-family: system-ui;">
        <h1>AutomationAIHub - Loading Error</h1>
        <p>Failed to load the application. Please check the console for details.</p>
        <p>Error: ${error instanceof Error ? error.message : 'Unknown error'}</p>
      </div>
    `;
  }
}
