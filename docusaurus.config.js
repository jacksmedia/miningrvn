// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  url: 'https://miningrvn.netlify.app',
  baseUrl: '/',
  title: 'Mining Ravencoin',
  tagline: '$RVN is useful $BTC',
  url: 'https://miningrvn.netlify.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'jacksmedia', // Usually your GitHub org/user name.
  projectName: 'miningrvn', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: ['docusaurus-plugin-google-adsense'],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      googleAdsense: {
        dataAdClient: 'ca-pub-7577422854146272',
      },
      navbar: {
        title: 'Mining RVN',
        logo: {
          alt: 'Ravencoin Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: '$RVN Community',
            items: [
              {
                label: '$RVN Founder\'s Twitter',
                href: 'https://twitter.com/tronblack',
              },
              {
                label: '$RVN Whitepaper',
                href: 'https://ravencoin.org/assets/documents/Ravencoin.pdf',
              },
              {
                label: 'Our Twitter',
                href: 'https://twitter.com/j4cksRvn',
              },
            ],
          },
          {
            title: 'Extra Content',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Jacks.Media',
                href: 'https://jacks.media',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Jacks Media, LLC.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
