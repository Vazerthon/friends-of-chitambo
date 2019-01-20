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
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Friends of Chitambo',
        short_name: 'Friends of Chitambo',
        start_url: '/friends-of-chitambo',
        background_color: '#f68712',
        theme_color: '#2f933c',
        display: 'standalone',
        icon: 'src/data/images/logo.png',
      },
    },
    'gatsby-plugin-offline',
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
