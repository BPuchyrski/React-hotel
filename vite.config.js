import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/React-hotel/",
  plugins: [react()],
  server: {
    mimeTypes: {
      js: "application/javascript",
      jsx: "text/jsx",
    },
  },
});
