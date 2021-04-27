const path = require('path');
const fsPromises = require('fs/promises');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  // Ensures we are processing only markdown files
  if (node.internal.type === 'MarkdownRemark') {
    const parent = getNode(node.parent);
    if (parent.sourceInstanceName === 'contents') {
      createNodeField({
        node,
        name: 'slug',
        value: parent.relativePath,
      });
    }
  }
};

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const result = await graphql(`
    {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "news" } } }) {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    console.error(result.errors);
    throw new Error(result.errors);
  }

  return result.data.allMarkdownRemark.nodes.forEach(({ fields }) => {
    createPage({
      path: fields.slug.replace(path.extname(fields.slug), ''),
      component: path.resolve(__dirname, 'src/templates/NewsTemplate.js'),
      context: {
        slug: fields.slug,
      },
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
    { from: '/it/privacy-policy/', to: '/privacy-policy/' },
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
