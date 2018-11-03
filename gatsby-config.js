require('dotenv').config({ path: '.env' });

module.exports = {
  pathPrefix: '/friends-of-chitambo',
  siteMetadata: {
    title: 'Friends of Chitambo',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    '@wapps/gatsby-plugin-material-ui',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './src/data/images/logo.png',

        appName: null,
        appDescription: null,
        developerName: null,
        developerURL: null,
        dir: 'auto',
        lang: 'en-GB',
        background: '#ffffff',
        theme_color: '#f68712',
        display: 'standalone',
        orientation: 'any',
        start_url: '/',
        version: '1.0',

        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          opengraph: false,
          twitter: false,
          yandex: false,
          windows: false,
        },
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: 'gatsby-transformer-json',
      options: {
        typeName: 'Json',
      },
    },
  ],
};
