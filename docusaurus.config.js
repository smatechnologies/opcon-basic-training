/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Continuous Help',
  tagline: 'OpCon Basic Training',
  url: 'https://help.smatechnologies.com',
  baseUrl: '/training/opcon-basic/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  markdown: {
    format: "md",
  },
  favicon: 'img/favicon.ico',
  organizationName: 'smatechnologies',
  projectName: 'opcon-basic-training',
  themeConfig: {
    navbar: {
      title: 'Help',
      logo: {
        alt: 'Continuous Help Logo',
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
      copyright: `Copyright © ${new Date().getFullYear()} Continuous.`,
    },
  },
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
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editLocalizedFiles: true,
          editUrl:
            'https://github.com/smatechnologies/opcon-basic-training/blob/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-7XYMFXX81Y',
          anonymizeIP: false,
        },
      },
    ],
  ],
  plugins: [
//    [
//      require.resolve('@cmfcmf/docusaurus-search-local'), 
//      {
//      }
//    ],
  ],
};
