import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), svgr()],
});
