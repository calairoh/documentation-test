// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Mia-Care Documentation',
  tagline: 'Learn how Mia-Care can unlock the power of digital health',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Mia-Care Docs',
        logo: {
          alt: 'Mia-Care Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'p4samd',
            position: 'left',
            label: 'P4SaMD',
          },
          {
            href: 'https://docs.mia-platform.eu/s',
            label: 'Mia-Platform Docs',
            position: 'left',
          },
        ],
      },
      footer: {
        style: "dark",
        links: [{
          title: "Mia-Platform",
          items: [{
            label: "How to install",
            to: "/docs/info/how_to_install",
          },
          {
            label: "Bug Policy",
            to: "/docs/info/bug_policy",
          },
          {
            label: "Supported browsers",
            to: "/docs/info/supported_browser",
          },
          {
            label: "Open Source Software",
            to: "/docs/info/oss",
          },
          {
            label: "Subprocessor",
            to: "/docs/info/subprocessor",
          },
          {
            label: "Service Level Agreement",
            to: "/docs/info/mia_service_level_agreement",
          },
          {
            label: "Audit Process",
            to: "/docs/info/audit_process",
          },
          ],
        },
        {
          title: "Company",
          items: [{
            label: "Website",
            href: "https://mia-platform.eu",
          },
          {
            label: "About",
            href: "https://mia-platform.eu/company/about-us/",
          },
          {
            label: "Mission & Vision",
            href: "https://mia-platform.eu/mission-vision/",
          },
          {
            label: "Blog",
            href: "https://mia-platform.eu/blog/",
          },
          {
            label: "Events",
            href: "https://mia-platform.eu/resources/events/",
          },
          {
            label: "Privacy Policy",
            href: "https://mia-platform.eu/img/Privacy_Policy_Website_EN.pdf",
          },
          ],
        },
        {
          title: "Core Platform",
          items: [{
            label: "Mia-Platform Console",
            href: "https://mia-platform.eu/platform/console/",
          },
          {
            label: "Mia-Platform Marketplace",
            href: "https://mia-platform.eu/platform/mia-platform-marketplace/",
          },
          {
            label: "Mia-Platform Fast Data",
            href: "https://mia-platform.eu/platform/console/fast-data",
          },
          {
            label: "Release Notes",
            to: "/docs/release-notes/versions",
          },
          ],
        },
        {
          title: "Developer Resources",
          items: [{
            label: "Status Page",
            href: "https://status.console.cloud.mia-platform.eu"
          },
          {
            label: "Guidelines",
            to: "/docs/getting-started/guidelines/",
          },
          {
            label: "Library",
            href: "https://resources.mia-platform.eu/en/library",
          },
          {
            label: "GitHub",
            href: "https://github.com/mia-platform",
          },
          {
            label: "GitHub Marketplace",
            href: "https://github.com/mia-platform-marketplace",
          },
          ],
        },
        {
          title: "Education & Support",
          items: [{
            label: 'Support',
            href: 'https://makeitapp.atlassian.net/servicedesk/customer/portal/21'
          },
          {
            label: "Community",
            to: "https://github.com/mia-platform/community/discussions",
          },
          {
            label: 'FAQ',
            to: '/docs/getting-started/faqs'
          },
          {
            label: "Getting Started",
            to: "/docs/getting-started/mia-platform-overview",
          },
          ],
        },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Mia srl. All rights reserved. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
