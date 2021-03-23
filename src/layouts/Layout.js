import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import '@fontsource/titillium-web/latin.css';
import '@fontsource/lora/latin.css';
import 'bootstrap-italia/dist/css/bootstrap-italia.min.css';
import { createUseStyles } from 'react-jss';
import { graphql, useStaticQuery } from 'gatsby';
import { SEO } from '../components/SEO.js';
import { Header } from './Header.js';
import { Footer } from './Footer.js';

const useStyles = createUseStyles({
  '@global': {
    ':focus:not(:focus-visible)': {
      borderColor: 'initial',
      boxShadow: 'none',
    },
    // override text-primary color
    '.text-primary': {
      // eslint-disable-next-line sonarjs/no-duplicate-string
      color: ['var(--primary)', '!important'],
    },
    '.text-info': {
      color: ['#33485C', '!important'],
    },
    '.text-info-title': {
      color: ['#455A64', '!important'],
    },
  },
  main: {
    composes: 'text-info',
    backgroundColor: '#e6e9f21f', // TODO: qual è il colore corretto?
  },
});

export const Layout = ({ children }) => {
  const classes = useStyles();
  const {
    site: {
      siteMetadata: { hostname },
    },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            hostname
          }
        }
      }
    `
  );
  useEffect(() => {
    const isProd = window.location.hostname === hostname;
    /* eslint-disable */
    const webanalytics = () => {
      console.log('sono webanalytics');
      const _paq = (window._paq = window._paq || []);
      /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
      _paq.push(['trackPageView']);
      _paq.push(['enableLinkTracking']);
      (function () {
        const u = 'https://ingestion.webanalytics.italia.it/';
        _paq.push(['setTrackerUrl', u + 'matomo.php']);
        _paq.push(['setSiteId', 'ZVQ0Q5N0dY']);
        const d = document;
        const g = d.createElement('script');
        const s = d.getElementsByTagName('script')[0];
        g.type = 'text/javascript';
        g.async = true;
        g.src = u + 'matomo.js';
        s.parentNode.insertBefore(g, s);
      })();
    };
    /* eslint-enable */
    if (isProd) {
      webanalytics();
    }
  });
  return (
    <>
      <SEO />
      <Header />
      <main className={classes.main}>{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
