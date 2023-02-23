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
        value: parent.relativePath.replace(path.extname(parent.relativePath), ''),
      });
    } else if (parent.sourceInstanceName === 'indeepStrategia') {
      createNodeField({
        node,
        name: 'slug',
        value: `/strategia-cloud-pa/${parent.relativePath.replace(path.extname(parent.relativePath), '')}`,
      });
    } else if (parent.sourceInstanceName === 'indeepQualificazione') {
      createNodeField({
        node,
        name: 'slug',
        value: `/qualificazione-servizi-cloud/${parent.relativePath.replace(path.extname(parent.relativePath), '')}`,
      });
    }
  }
};

// exports.createPages = async ({ actions: { createPage }, graphql }) => {
//   const result = await graphql(`
//     {
//       allMarkdownRemark(filter: { frontmatter: { type: { eq: "news" } } }) {
//         nodes {
//           fields {
//             slug
//           }
//         }
//       }
//     }
//   `);

//   if (result.errors) {
//     console.error(result.errors);
//     throw new Error(result.errors);
//   }
//   console.log("aaa", result.data.allMarkdownRemark)
//   return result.data.allMarkdownRemark.nodes.forEach(({ fields }) => {
//     console.log("bbb", fields)
//     createPage({
//       path: fields.slug,
//       component: path.resolve(__dirname, 'src/templates/NewsTemplate.js'),
//       context: {
//         slug: fields.slug,
//       },
//     });
//   });
// };

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const newsTemplate = path.resolve(__dirname, 'src/templates/NewsTemplate.js');
  const InDeepStrategyTemplate = path.resolve(__dirname, 'src/templates/InDeepStrategyTemplate.js');
  const InDeepQualificationTemplate = path.resolve(__dirname, 'src/templates/InDeepQualificationTemplate.js');
  const InDeepAbilitazioneTemplate = path.resolve(__dirname, 'src/templates/InDeepAbilitazioneTemplate.js');
  // Individual InDeep and news pages
  // All in one go
  return graphql(`
    {
      indeepAbilitation: allMarkdownRemark(
        filter: { fileAbsolutePath: { glob: "**/src/pages/abilitazione/*.md" } }
        sort: { order: DESC, fields: frontmatter___date }
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
      indeepStrategy: allMarkdownRemark(
        filter: { fileAbsolutePath: { glob: "**/src/pages/strategia/*.md" } }
        sort: { order: DESC, fields: frontmatter___date }
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
      indeepQualification: allMarkdownRemark(
        filter: { fileAbsolutePath: { glob: "**/src/pages/qualificazione/*.md" } }
        sort: { order: DESC, fields: frontmatter___date }
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
      news: allMarkdownRemark(
        filter: { fileAbsolutePath: { glob: "**/contents/notizie/*.md" } }
        sort: { order: DESC, fields: frontmatter___date }
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      Promise.reject(result.errors);
    }

    // Create doc pages
    result.data.news.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        slug: node.fields.slug,
        component: newsTemplate,
        context: {
          slug: node.fields.slug,
        },
      });
    });
    // Create blog pages
    result.data.indeepAbilitazione.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        slug: node.fields.slug,
        component: InDeepAbilitazioneTemplate,
        context: {
          slug: node.fields.slug,
        },
      });
    });
    result.data.indeepStrategy.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        slug: node.fields.slug,
        component: InDeepStrategyTemplate,
        context: {
          slug: node.fields.slug,
        },
      });
    });
    result.data.indeepQualification.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        slug: node.fields.slug,
        component: InDeepQualificationTemplate,
        context: {
          slug: node.fields.slug,
        },
      });
    });
  });
};

exports.onPostBuild = async () => {
  /*
   * These are a collection of redirects. Some are needed due to the restyling of the site, others are required because are used by AGID
   */
  const redirects = [
    { from: '/it/cloud-enablement/', to: '/programma-abilitazione-cloud/' },
    { from: '/it/qualificazioni/', to: '/qualificazione-servizi-cloud/' },
    { from: '/it/privacy-policy/', to: '/privacy-policy/' },

    // Old AGID Marketplace URL
    { from: '/marketplace/', to: 'https://catalogocloud.agid.gov.it/' },

    // Linked from AGID's https://catalogocloud.agid.gov.it/
    { from: '/it/latest/', to: '/' },
    {
      from: '/projects/cloud-italia-circolari/it/latest/',
      to: 'https://cloud-italia.readthedocs.io/projects/cloud-italia-circolari/it/latest/',
    },
    {
      from: '/projects/cloud-italia-circolari/it/latest/circolari/CSP/circolare_qualificazione_CSP_v1.2.html',
      to:
        'https://cloud-italia.readthedocs.io/projects/cloud-italia-circolari/it/latest/circolari/CSP/circolare_qualificazione_CSP_v1.2.html',
    },
    {
      from: '/projects/cloud-italia-circolari/it/latest/circolari/SaaS/circolare_qualificazione_SaaS_v_4.12.27.html',
      to:
        'https://cloud-italia.readthedocs.io/projects/cloud-italia-circolari/it/latest/circolari/SaaS/circolare_qualificazione_SaaS_v_4.12.27.html',
    },
    {
      from: '/projects/cloud-italia-circolari/it/latest/circolari/CSP/allegato_a_qualificazione_CSP_v1.2.html',
      to:
        'https://cloud-italia.readthedocs.io/projects/cloud-italia-circolari/it/latest/circolari/CSP/allegato_a_qualificazione_CSP_v1.2.html',
    },
    {
      from: '/projects/cloud-italia-circolari/it/latest/circolari/CSP/allegato_docs/appendice-2.html',
      to:
        'https://cloud-italia.readthedocs.io/projects/cloud-italia-circolari/it/latest/circolari/CSP/allegato_docs/appendice-2.html',
    },
    {
      from: '/projects/cloud-italia-circolari/it/latest/circolari/CSP/allegato_docs/appendice-1.html',
      to:
        'https://cloud-italia.readthedocs.io/projects/cloud-italia-circolari/it/latest/circolari/CSP/allegato_docs/appendice-1.html',
    },
    {
      from: '/projects/cloud-italia-circolari/it/latest/circolari/SaaS/allegato_a_qualificazione_SaaS_v6.html',
      to:
        'https://cloud-italia.readthedocs.io/projects/cloud-italia-circolari/it/latest/circolari/SaaS/allegato_a_qualificazione_SaaS_v6.html',
    },
    {
      from: '/projects/cloud-italia-circolari/it/latest/circolari/SaaS/allegato_docs/appendice-2.html',
      to:
        'https://cloud-italia.readthedocs.io/projects/cloud-italia-circolari/it/latest/circolari/SaaS/allegato_docs/appendice-2.html',
    },
    {
      from: '/projects/cloud-italia-circolari/it/latest/circolari/SaaS/allegato_docs/appendice-1.html',
      to:
        'https://cloud-italia.readthedocs.io/projects/cloud-italia-circolari/it/latest/circolari/SaaS/allegato_docs/appendice-1.html',
    },
    {
      from: '/projects/cloud-italia-docs/it/latest/domande-frequenti.html',
      to: 'https://docs.italia.it/italia/piano-triennale-ict/cloud-docs/it/stabile/domande-frequenti.html',
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
