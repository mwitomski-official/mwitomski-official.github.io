// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwind from "@astrojs/tailwind";
import starlightSiteGraph from 'starlight-site-graph'

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "ORION",
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
    }),
    tailwind({
      // Disable the default base styles:
      applyBaseStyles: false,
    }),
  ],
});
