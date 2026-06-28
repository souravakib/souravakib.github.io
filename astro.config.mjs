import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://souravakib.github.io",
  integrations: [tailwind()],
});
