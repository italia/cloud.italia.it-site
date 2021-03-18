module.exports = {
  siteMetadata: {
    author: 'Dipartimento per la Trasformazione Digitale + AgID',
    siteUrl: 'https://cloud.italia.it',
    title: 'Cloud Italia',
    subtitle: 'Il Cloud della Pubblica Amministrazione',
    description: 'L’adozione del modello cloud computing nelle amministrazioni italiane',
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
