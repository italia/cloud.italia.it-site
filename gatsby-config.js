module.exports = {
  siteMetadata: {
    author: 'Dipartimento per la Trasformazione Digitale + AgID',
    siteUrl: 'https://cloud.italia.it',
    title: 'Cloud Italia - Il Cloud della Pubblica Amministrazione',
    description: 'L’adozione del modello cloud computing nelle amministrazioni italiane',
  },
  plugins: [
    'gatsby-plugin-sitemap',
    'gatsby-plugin-jss',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'news',
        path: `${__dirname}/src/news`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 960,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-yaml',
  ],
};
