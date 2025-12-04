import mdx from "@astrojs/mdx";

import db from "@astrojs/db";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import Icons from "unplugin-icons/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte(), mdx(), db()],
  vite: {
    plugins: [
      Icons({
        compiler: "astro",
      }),
    ],
  },
});
