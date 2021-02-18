module.exports = {
  siteMetadata: {
    title: 'Cloud Italia',
    description: 'Il Cloud della Pubblica Amministrazione',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
      options: {
        disable: true,
      },
    },
    `gatsby-plugin-jss`,
    `gatsby-plugin-react-helmet`,
  ],
};
