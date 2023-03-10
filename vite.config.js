import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",

  build: {
    manifest: true,
    rollupOptions: {
      input: {
        main: "src/main.js",
      },
    },
    outDir: "dist",
    // outDir: "../BackTest-BackEnd/static",
    assetsDir: "assets",
  },

  plugins: [vue()],

  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@js": fileURLToPath(new URL("./src/js", import.meta.url)),
      "@css": fileURLToPath(new URL("./src/css", import.meta.url)),
    },
  },
});
