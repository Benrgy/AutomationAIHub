import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Detect deployment environment - Netlify sets NETLIFY env var
  const isNetlify = process.env.NETLIFY === 'true';
  const isGitHubPages = process.env.GITHUB_ACTIONS === 'true' || (!isNetlify && mode === 'production');
  
  // Set base path based on deployment platform
  const base = isNetlify ? '/' : (isGitHubPages ? '/AutomationAIHub/' : '/');
  
  return {
  base,
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}});
