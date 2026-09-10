import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  server: {
    host: "::",
    // Sem porta fixa: respeita a variável PORT e não conflita quando
    // mais de um projeto roda ao mesmo tempo.
    port: process.env.PORT ? Number(process.env.PORT) : undefined,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
