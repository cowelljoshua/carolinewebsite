import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://cowelljoshua.github.io",
  base: process.env.BASE_PATH || "/",
  integrations: [tailwind({ applyBaseStyles: false })],
  prefetch: true,
  vite: {
    build: {
      assetsInlineLimit: 0
    }
  }
});
