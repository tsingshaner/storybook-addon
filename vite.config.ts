import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { globalPackages as globalManagerPackages } from "storybook/internal/manager/globals";
import { globalPackages as globalPreviewPackages } from "storybook/internal/preview/globals";

export default defineConfig({
  build: {
    lib: {
      entry: {
        preview: "./src/preview.ts",
        manager: "./src/manager.ts",
      },
      formats: ["cjs", "es"],
    },
    rollupOptions: {
      external: [
        ...globalManagerPackages,
        ...globalPreviewPackages
      ]
    }
  },
  plugins: [react()],
});
