module.exports = {
  siteMetadata: {
    title: 'Emily VanScoy',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`
      }
    },
    'gatsby-plugin-glamor',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ]
};
