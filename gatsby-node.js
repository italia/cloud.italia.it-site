const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  // Ensures we are processing only markdown files
  if (node.internal.type === 'MarkdownRemark') {
    // Use `createFilePath` to turn markdown files in our `src/news` directory into `/notizie/slug`
    const relativeFilePath = createFilePath({
      node,
      getNode,
      basePath: 'src/news/',
    });

    // Create a default value for show_in_home in frontmatter
    if (!Object.prototype.hasOwnProperty.call(node.frontmatter, 'show_in_home')) {
      node.frontmatter = { ...node.frontmatter, show_in_home: false };
    }

    // Creates new query'able field with name of 'path'
    createNodeField({
      node,
      name: 'slug',
      value: `/notizie${relativeFilePath}`,
    });
  }
};

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    console.error(result.errors);
    throw new Error(result.errors);
  }

  return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(__dirname, 'src/templates/News.js'),
    });
  });
};
