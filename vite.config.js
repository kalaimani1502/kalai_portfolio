import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Relative base so the build works from any GitHub Pages project-repo
// path (e.g. https://username.github.io/repo-name/) without edits.
export default defineConfig({
  plugins: [react()],
  base: "./",
});
