module.exports = {
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
