// @ts-check
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://mqxewww.dev",
  integrations: [sitemap()],
  markdown: {
    syntaxHighlight: false,
  },
  security: {
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self' https://skillicons.dev data:",
        "base-uri 'self'",
        "object-src 'none'",
      ],
    },
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },
  image: {
    layout: "constrained",
    domains: ["avatars.githubusercontent.com", "raw.githubusercontent.com"],
  },
  fonts: [
    {
      name: "Montserrat",
      cssVariable: "--font-montserrat",
      provider: fontProviders.google(),
      weights: [400, 500, 600, 700],
      styles: ["normal"],
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
