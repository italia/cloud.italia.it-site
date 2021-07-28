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
    }
  }
};

exports.onPostBuild = async () => {
  /*
   * These are a collection of redirects. Some are needed due to the restyling of the site, others are required because are used by AgID
   */
  const redirects = [
    { from: '/it/cloud-enablement/', to: '/programma-abilitazione-cloud/' },
    { from: '/it/qualificazioni/', to: '/qualificazione-servizi-cloud/' },
    { from: '/it/privacy-policy/', to: '/privacy-policy/' },

    // Old AgID Marketplace URL
    { from: '/marketplace/', to: 'https://catalogocloud.agid.gov.it/' },

    // Linked from AgID's https://catalogocloud.agid.gov.it/
    { from: '/it/latest/', to: '/' },
    {
      from: '/projects/cloud-italia-circolari/it/latest/',
      to: 'https://cloud-italia.readthedocs.io/projects/cloud-italia-circolari/it/latest/',
    },
    {
      from: '/projects/cloud-italia-circolari/it/latest/circolari/CSP/circolare_qualificazione_CSP_v1.2.html',
      to: 'https://cloud-italia.readthedocs.io/projects/cloud-italia-circolari/it/latest/circolari/CSP/circolare_qualificazione_CSP_v1.2.html',
    },
    {
      from: '/projects/cloud-italia-circolari/it/latest/circolari/SaaS/circolare_qualificazione_SaaS_v_4.12.27.html',
      to: 'https://cloud-italia.readthedocs.io/projects/cloud-italia-circolari/it/latest/circolari/SaaS/circolare_qualificazione_SaaS_v_4.12.27.html',
    },
    {
      from: '/projects/cloud-italia-circolari/it/latest/circolari/CSP/allegato_a_qualificazione_CSP_v1.2.html',
      to: 'https://cloud-italia.readthedocs.io/projects/cloud-italia-circolari/it/latest/circolari/CSP/allegato_a_qualificazione_CSP_v1.2.html',
    },
    {
      from: '/projects/cloud-italia-circolari/it/latest/circolari/CSP/allegato_docs/appendice-2.html',
      to: 'https://cloud-italia.readthedocs.io/projects/cloud-italia-circolari/it/latest/circolari/CSP/allegato_docs/appendice-2.html',
    },
    {
      from: '/projects/cloud-italia-circolari/it/latest/circolari/CSP/allegato_docs/appendice-1.html',
      to: 'https://cloud-italia.readthedocs.io/projects/cloud-italia-circolari/it/latest/circolari/CSP/allegato_docs/appendice-1.html',
    },
    {
      from: '/projects/cloud-italia-circolari/it/latest/circolari/SaaS/allegato_a_qualificazione_SaaS_v6.html',
      to: 'https://cloud-italia.readthedocs.io/projects/cloud-italia-circolari/it/latest/circolari/SaaS/allegato_a_qualificazione_SaaS_v6.html',
    },
    {
      from: '/projects/cloud-italia-circolari/it/latest/circolari/SaaS/allegato_docs/appendice-2.html',
      to: 'https://cloud-italia.readthedocs.io/projects/cloud-italia-circolari/it/latest/circolari/SaaS/allegato_docs/appendice-2.html',
    },
    {
      from: '/projects/cloud-italia-circolari/it/latest/circolari/SaaS/allegato_docs/appendice-1.html',
      to: 'https://cloud-italia.readthedocs.io/projects/cloud-italia-circolari/it/latest/circolari/SaaS/allegato_docs/appendice-1.html',
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
