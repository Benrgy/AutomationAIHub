import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { SEOWrapper } from "./components/SEOWrapper";
import { RedirectHandler } from "./components/RedirectHandler";
import Index from "./pages/Index";
import Tools from "./pages/Tools";
import ToolDetail from "./pages/ToolDetail";
import Categories from "./pages/Categories";
import Resources from "./pages/Resources";
import SubmitTool from "./pages/SubmitTool";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import BlogAdmin from "./pages/BlogAdmin";
import BlogDetail from "./pages/BlogDetail";

const queryClient = new QueryClient();

// Detect deployment environment for basename
const getBasename = () => {
  // Check if we're on Netlify (automation-ai-hub.netlify.app)
  if (window.location.hostname.includes('netlify.app')) {
    return undefined; // No basename for root deployment
  }
  // Check if we're on GitHub Pages (benrgy.github.io)
  if (window.location.hostname.includes('github.io')) {
    return '/AutomationAIHub';
  }
  // Development or other environments
  return import.meta.env.BASE_URL === '/' ? undefined : '/AutomationAIHub';
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename={getBasename()}>
          <RedirectHandler />
          <SEOWrapper>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/tools" element={<Tools />} />
              <Route path="/tools/:id" element={<ToolDetail />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/submit" element={<SubmitTool />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogDetail />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/admin" element={<BlogAdmin />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </SEOWrapper>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
