import React from 'react';
import { Layout } from './src/layouts/Layout.js';

export const wrapPageElement = ({ element, props }) => <Layout {...props}>{element}</Layout>;

export const onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
  const mamotoScript = `
  var _paq = window._paq = window._paq || [];
  (function() {
    var u="https://ingestion.webanalytics.italia.it/";
    _paq.push(['setTrackerUrl', u+'matomo.php']);
    _paq.push(['setSiteId', 'ZVQ0Q5N0dY']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.type='text/javascript'; g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
  })();`;

  setHeadComponents([
    <link rel="preconnect" href="https://ingestion.webanalytics.italia.it/mamoto.js" key="preconnect-matomo" />,
    <link rel="preconnect" href="https://www.google-analytics.com/analytics.js" key="preconnect-ga" />,
  ]);
  setPostBodyComponents([<script key="matomo" dangerouslySetInnerHTML={{ __html: mamotoScript }} />]);
};
