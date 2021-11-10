/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'SMA Technologies Help',
  tagline: 'OpCon Basic Training',
  url: 'https://help.smatechnologies.com',
  baseUrl: '/training/opcon-basic/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'smatechnologies',
  projectName: 'opcon-basic-training',
  themeConfig: {
    navbar: {
      title: 'Help',
      logo: {
        alt: 'SMA Technologies Help Logo',
        src: 'img/logo.svg',
        href: 'https://help.smatechnologies.com',
      },
      items: [
        {
        type: 'localeDropdown',
      position: 'left',
        },
    ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} SMA Technologies.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/smatechnologies/opcon-basic-training/blob/develop',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      require.resolve('@cmfcmf/docusaurus-search-local'), 
      {
        docsRouteBasePath: '/', 
      }
    ],
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'it'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
      },
      fr: {
        label: 'Français',
        direction: 'ltr',
      },
      it: {
        label: 'Italiano',
        direction: 'ltr',
      },
    },
  },
};