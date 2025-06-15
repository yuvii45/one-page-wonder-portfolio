
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // IMPORTANT: You must replace `<YOUR_REPOSITORY_NAME>` with the name of your GitHub repository.
  // For example, if your repository URL is https://github.com/your-username/my-cool-site,
  // the base should be '/my-cool-site/'.
  // This is a crucial step for the deployment to work correctly.
  base: "/<YOUR_REPOSITORY_NAME>/",
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
}));
