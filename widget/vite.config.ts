import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/entry.tsx",
      name: "NomosEruditWidget",
      formats: ["iife"],
      fileName: () => "erudit-widget.js"
    },
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        inlineDynamicImports: true
      }
    }
  }
});
