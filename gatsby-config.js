module.exports = {
  siteMetadata: {
    author: 'Dipartimento per la Trasformazione Digitale + AgID',
    description: 'L’adozione del modello cloud computing nelle amministrazioni italiane',
    hostname: 'cloud.italia.it',
    siteUrl: 'https://cloud.italia.it',
    title: 'Cloud Italia',
    subtitle: 'Il Cloud della Pubblica Amministrazione',
  },
  plugins: [
    'gatsby-plugin-sitemap',
    'gatsby-plugin-jss',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-matomo',
      options: {
        siteId: 'ZVQ0Q5N0dY',
        matomoUrl: 'https://ingestion.webanalytics.italia.it',
        siteUrl: 'https://cloud.italia.it',
        matomoPhpScript: 'matomo.php',
        matomoJsScript: 'matomo.js',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-96140462-9',
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        defer: true,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'contents',
        path: `${__dirname}/contents`,
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
        plugins: ['gatsby-remark-attr'],
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
  ],
};
