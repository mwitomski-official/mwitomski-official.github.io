// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwind from "@astrojs/tailwind";
import starlightThemeObsidian from "starlight-theme-obsidian";
import starlightImageZoom from "starlight-image-zoom";
import rehypeAstroRelativeMarkdownLinks from "astro-rehype-relative-markdown-links";

const options = {
  collectionBase: false,
};

// https://astro.build/config
export default defineConfig({
  site: "https://mwitomski-official.github.io",
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
      plugins: [starlightThemeObsidian(), starlightImageZoom()],
    }),
    tailwind({
      // Disable the default base styles:
      applyBaseStyles: false,
    }),
  ],
  markdown: {
    rehypePlugins: [[rehypeAstroRelativeMarkdownLinks, options]],
  },
});
