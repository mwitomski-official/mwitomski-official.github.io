// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwind from "@astrojs/tailwind";
import starlightThemeObsidian from "starlight-theme-obsidian";
import starlightImageZoom from "starlight-image-zoom";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "ORION",
      logo: {
        src: "./src/assets/Orion.svg",
        alt: "Orion site logo",
      },
      customCss: [
        // Path to your Tailwind base styles:
        "./src/styles/tailwind.css",
        "./src/styles/custom.css",
      ],
      social: {
        email: "https://google.pl",
        linkedin: "https://google.pl",
        github: "https://github.com/mwitomski-official",
        codePen: "https://google.pl",
      },
      sidebar: [
        // A single link item labelled “Home”.
        { label: "Welcome", slug: "home/example" },
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "guides/example" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
      plugins: [starlightThemeObsidian(), starlightImageZoom()],
    }),
    tailwind({
      // Disable the default base styles:
      applyBaseStyles: false,
    }),
  ],
});
