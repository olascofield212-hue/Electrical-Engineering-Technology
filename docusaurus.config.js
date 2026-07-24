// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Electrical Engineering Technology Hub',
  tagline: 'Practical knowledge for the systems that power modern life',
  favicon: 'img/favicon.svg',

  url: 'https://olascofield212-hue.github.io',
  baseUrl: '/electrical-engineering-technology-hub/',
  organizationName: 'olascofield212-hue',
  projectName: 'electrical-engineering-technology-hub',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      '@docusaurus/plugin-sitemap',
      {
        changefreq: 'weekly',
        priority: 0.5,
        ignorePatterns: ['/tags/**'],
        filename: 'sitemap.xml',
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: 'docs',
          editUrl: undefined,
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/social-card.svg',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'EET Hub',
        logo: {
          alt: 'Electrical Engineering Technology Hub logo',
          src: 'img/logo.svg',
        },
        items: [
          {to: '/', label: 'Home', position: 'left'},
          {to: '/docs/about', label: 'About', position: 'left'},
          {to: '/docs/contact', label: 'Contact & Resources', position: 'left'},
          {
            href: 'https://github.com/YOUR-GITHUB-USERNAME/electrical-engineering-technology-hub',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Explore',
            items: [
              {label: 'Home', to: '/'},
              {label: 'About', to: '/docs/about'},
              {label: 'Contact & Resources', to: '/docs/contact'},
            ],
          },
          {
            title: 'Professional Resources',
            items: [
              {label: 'IEEE', href: 'https://www.ieee.org/'},
              {label: 'OACETT', href: 'https://www.oacett.org/'},
              {label: 'Electrical Safety Authority', href: 'https://esasafe.com/'},
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Electrical Engineering Technology Hub. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
