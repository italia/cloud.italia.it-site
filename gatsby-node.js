const path = require('path');
const fsPromises = require('fs/promises');
const { createFilePath } = require(`gatsby-source-filesystem`);

// TODO: quando i contenuti saranno disponibili, controllare se c'è veramente bisogno di md di tipo news e data

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  // Ensures we are processing only markdown files
  if (node.internal.type === 'MarkdownRemark') {
    // Markdown file could be an entire page (news) or a content inside a page (data)

    // Get the parent node
    const parent = getNode(node.parent);

    if (parent.sourceInstanceName === 'news') {
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

    // NOTE: This is necessary so we can filter `allMarkdownRemark` by `type` and create pages only for news type md
    createNodeField({
      node,
      name: 'type',
      value: parent.sourceInstanceName,
    });

    createNodeField({
      node,
      name: 'name',
      value: parent.name,
    });
  }
};

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const result = await graphql(`
    {
      allMarkdownRemark(filter: { fields: { type: { eq: "news" } } }) {
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

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.join(__dirname, 'src/templates/News.js'),
    });
  });
};

exports.onPostBuild = async () => {
  /*
   * These are a collection of redirects. Some are needed due to the restyling of the site, others are required because are used by AgID
   */
  const redirects = [
    { from: '/it/cloud-enablement/', to: '/programma-abilitazione-cloud/' },
    { from: '/it/qualificazioni/', to: '/qualificazione-servizi-cloud/' },
    { from: '/it/latest/', to: '/' },
    {
      from: '/projects/cloud-italia-circolari/it/latest/',
      to: 'https://cloud-italia.readthedocs.io/projects/cloud-italia-circolari/it/latest/',
    },
    {
      from: '/projects/cloud-italia-docs/it/latest',
      to: 'https://docs.italia.it/italia/piano-triennale-ict/cloud-docs/',
    },
  ];

  for (const redirect of redirects) {
    const { from, to } = redirect;
    const redirectFile = path.join(__dirname, 'public', from, 'index.html');
    await fsPromises.mkdir(path.dirname(redirectFile), {
      recursive: true,
    });
    await fsPromises.writeFile(
      redirectFile,
      `<!DOCTYPE html>
<meta charset="utf-8">
<title>Redirecting to ${to}</title>
<meta http-equiv="refresh" content="0; URL=${to}">
<link rel="canonical" href="${to}">`
    );
  }
};
