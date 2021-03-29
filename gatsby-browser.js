import React from 'react';
import { Layout } from './src/layouts/Layout.js';
import config from './gatsby-config.js';

export const wrapPageElement = ({ element, props }) => <Layout {...props}>{element}</Layout>;

const mamotoTracking = (location) => {
  const { _paq } = window;
  if (!_paq) {
    return;
  }

  const { title } = document;
  const url = location && location.pathname + location.search + location.hash;
  _paq.push(['setCustomUrl', url]);
  _paq.push(['setDocumentTitle', title]);
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
};

const gaTracking = () => {
  const { ga } = window;
  if (!ga) {
    return;
  }
  ga('send', 'pageview');
};

export const onRouteUpdate = ({ location }) => {
  const isProd = location.host === config.siteMetadata.hostname;
  if (isProd) {
    mamotoTracking(location);
    gaTracking();
  }
};
