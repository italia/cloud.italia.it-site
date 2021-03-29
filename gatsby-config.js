module.exports = {
  siteMetadata: {
    author: 'Dipartimento per la Trasformazione Digitale + AgID',
    description: 'L’adozione del modello cloud computing nelle amministrazioni italiane',
    hostname: 'cloud.italia.it',
    siteUrl: `https://cloud.italia.it`,
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
        matomoUrl: 'https://ingestion.webanalytics.italia.it/',
        siteUrl: 'https://cloud-italia-i-git-test-analytics-dip-trasformazione-d-145d52.vercel.app/',
        matomoPhpScript: 'matomo.php',
        matomoJsScript: 'matomo.js',
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
