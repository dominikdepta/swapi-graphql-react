import path from "path";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import codegen from "vite-plugin-graphql-codegen";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), codegen()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
