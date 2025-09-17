import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  build: {
    sourcemap: mode === "development", // ✅ Activa solo en dev
  },
}));
