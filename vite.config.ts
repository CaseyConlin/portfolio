import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import dotenv from "dotenv";

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  define: {
    __APP_ENV__: process.env.VITE_RAPID_API_KEY,
  },
});
