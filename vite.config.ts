import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "url";
import vercel from "vite-plugin-vercel";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), vercel()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: [
            "react",
            "react-dom",
            "react-router",
            "@reduxjs/toolkit",
            "react-redux"
          ]
        }
      }
    }
  }
});
