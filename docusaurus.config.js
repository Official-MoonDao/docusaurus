// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "MoonDAO Docs",
  tagline: "Decentralize Access to Space",
  url: "https://docs.moondao.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "/img/favicon.ico",
  organizationName: "Official-MoonDAO", // Usually your GitHub org/user name.
  projectName: "documentation", // Usually your repo name.
  trailingSlash: true,

  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh"],
  },
  plugins: [
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            to: "/quickstart",
            from: "/join-moondao",
          },
          {
            to: "/contribute",
            from: "/guild-guidelines",
          },
        ],
      },
    ],
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/Official-MoonDao/documentation",
          routeBasePath: "/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/hero.png",
      navbar: {
        title: "MoonDAO",
        logo: {
          alt: "MoonDAO Logo",
          src: "img/Original.svg",
          href: "https://www.moondao.com/",
        },
        items: [
          {
            type: "localeDropdown",
            position: "left",
          },
          {
            href: "https://www.moondao.com/",
            label: "Homepage",
            position: "right",
          },
          {
            href: "https://dashboard.moondao.com/",
            label: "Mission Control",
            position: "right",
          },
          {
            href: "https://discord.gg/D6ntqGZShA",
            label: "Join Discord",
            position: "right",
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
