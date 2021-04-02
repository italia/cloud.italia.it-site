module.exports = {
  siteMetadata: {
    name: 'Cloud Italia',
    hostname: 'cloud.italia.it',
    siteUrl: 'https://cloud-italia-i-git-test-social-card-dip-trasformazione-d-476055.vercel.app',
  },
  plugins: [
    'gatsby-plugin-sitemap',
    'gatsby-plugin-jss',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'contents',
        path: `${__dirname}/contents`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: ['gatsby-remark-attr'],
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
  ],
};
