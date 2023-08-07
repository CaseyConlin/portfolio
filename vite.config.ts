/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { splitVendorChunkPlugin } from "vite";

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react(), splitVendorChunkPlugin()],

  define: {
    // __APP_ENV__: process.env.VITE_RAPID_API_KEY,
  },
  optimizeDeps: {
    include: ["@mui/icons-material"],
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "/setupTests.ts",
  },
});
