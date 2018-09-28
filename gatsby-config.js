module.exports = {
  pathPrefix: '/friends-of-chitambo',
  siteMetadata: {
    title: 'Friends of Chitambo',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: '@wapps/gatsby-plugin-material-ui',
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Friends of Chitambo',
        short_name: 'Friends of Chitambo',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#f68712',
        // icon: 'src/images/gatsby-icon.png',
      },
    },
  ],
};
