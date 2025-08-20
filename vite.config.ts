import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";

export default defineConfig({
  root: "./",
  base: "./",
  plugins: [tsconfigPaths(), react()],
  build: {
    outDir: "www",
    emptyOutDir: true,
    rollupOptions: {
      input: "index.html",
      external: ["zmp-sdk/apis/payment"],
    },
  },
});
