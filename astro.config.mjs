// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwind from "@astrojs/tailwind";
import starlightThemeObsidian from "starlight-theme-obsidian";
import starlightImageZoom from "starlight-image-zoom";
import rehypeAstroRelativeMarkdownLinks from "astro-rehype-relative-markdown-links";
import { visit } from "unist-util-visit";
import starlightLinksValidator from "starlight-links-validator";
import markdocGrammar from "./grammars/markdoc.tmLanguage.json";

const options = {
  collectionBase: false,
};

const gConfig = {
  depth: 1,
  enableDrag: true,
  enableZoom: true,
  enablePan: true,
  enableHover: true,
  enableClick: "auto",
  depthDirection: "both",
  followLink: "same",
  renderLabels: true,
  renderUnresolved: true,
  renderExternal: true,
  scaleLinks: true,
  scaleArrows: true,
  visibilityRules: ["**/*"],
  actions: [
    "fullscreen",
    "depth",
    "reset-zoom",
    "render-arrows",
    "render-external",
    "render-unresolved",
    "settings",
  ],
  linkWidth: 2,
  linkHoverWidth: 3,
  renderArrows: true,
  arrowSize: 6,
  nodeDefaultStyle: {
    neighborScale: 8.5,
  },
};

// https://astro.build/config
export default defineConfig({
  site: "https://mwitomski-official.github.io",
  markdown: {
    rehypePlugins: [[rehypeAstroRelativeMarkdownLinks, options]],
    remarkPlugins: [remarkObsidianLinks],
  },
  integrations: [
    starlight({
      title: "ORION",
      credits: true,
      logo: {
        src: "./src/assets/Orion.svg",
        alt: "Orion site logo",
      },
      customCss: [
        // Path to your Tailwind base styles:
        "./src/styles/tailwind.css",
        "./src/styles/custom.css",
      ],
      expressiveCode: { shiki: { langs: [markdocGrammar] } },
      social: {
        email: "https://google.pl",
        linkedin: "https://google.pl",
        github: "https://github.com/mwitomski-official",
        codePen: "https://google.pl",
      },
      plugins: [
        starlightLinksValidator({
          errorOnInvalidHashes: false,
        }),
        starlightThemeObsidian({
          debug: false,
          graphConfig: gConfig,
          sitemapConfig: {
            includeExternalLinks: true,
          },
        }),
        starlightImageZoom(),
      ],
    }),
    tailwind({
      // Disable the default base styles:
      applyBaseStyles: false,
    }),
  ],
  devToolbar: { enabled: false },
});

/**
 * Remark plugin to fix Obsidian-style markdown links.
 * @returns {(tree: import('mdast').Root) => void}
 */
function remarkObsidianLinks() {
  return (tree) => {
    visit(tree, "link", (node) => {
      if (node.url && (node.url.endsWith(".md") || node.url.endsWith(".mdx"))) {
        // Remove the .md extension
        const amount = node.url.endsWith(".mdx") ? -4 : -3
        const withoutExtension = node.url.slice(0, amount);
        // Ensure the link is absolute and lower-case (adjust if needed)
        node.url = "/" + withoutExtension.toLowerCase();
      }
    });
  };
}
