// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://XilefEel.github.io",
  base: "/personal-website",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [icon()],
  fonts: [
    {
      provider: fontProviders.local(),
      name: "PlusJakartaSans",
      cssVariable: "--font-plus-jakarta-sans",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/PlusJakartaSans.ttf"],
            weight: "100 900",
            style: "normal",
          },
        ],
      },
    },
  ],
});
