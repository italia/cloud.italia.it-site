import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import '@fontsource/titillium-web/latin.css';
import '@fontsource/lora/latin.css';
import 'bootstrap-italia/dist/css/bootstrap-italia.min.css';
import { createUseStyles } from 'react-jss';
import { graphql, useStaticQuery } from 'gatsby';
import { SEO } from '../components/SEO.js';
import labels from '../../contents/labels.yml';
import { Header } from './Header.js';
import { Footer } from './Footer.js';

const { goToMainContent, goToFooter } = labels;

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
    '.focus-a11y-contrast:focus': {
      border: '2px solid #ff9900', // This is used for a11y high contrast compliance
    },
  },
});

export const Layout = ({ children }) => {
  useStyles();
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
  // useEffect(() => {
  //   const isProd = false;
  //   /* eslint-disable */
  //   const webanalytics = () => {
  //     const _paq = (window._paq = window._paq || []);
  //     /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
  //     _paq.push(['trackPageView']);
  //     _paq.push(['enableLinkTracking']);
  //     (function () {
  //       const u = 'https://ingestion.webanalytics.italia.it/';
  //       _paq.push(['setTrackerUrl', u + 'matomo.php']);
  //       _paq.push(['setSiteId', 'ZVQ0Q5N0dY']);
  //       const d = document;
  //       const g = d.createElement('script');
  //       const s = d.getElementsByTagName('script')[0];
  //       g.type = 'text/javascript';
  //       g.async = true;
  //       g.src = u + 'matomo.js';
  //       s.parentNode.insertBefore(g, s);
  //     })();
  //   };
  //   const googleAnalytics = () => {
  //     (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  //       (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  //       m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  //     })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  //     ga('create', 'UA-96140462-9', 'auto');
  //     ga('set', 'anonymizeIp', true);
  //     ga('send', 'pageview');
  //   }
  //   /* eslint-enable */
  //   if (isProd) {
  //     webanalytics();
  //     googleAnalytics();
  //   }
  // });
  return (
    <>
      <SEO />
      <a className="sr-only sr-only-focusable" href="#content">
        {goToMainContent}
      </a>
      <a className="sr-only sr-only-focusable" href="#footer">
        {goToFooter}
      </a>
      <Header />
      <main className="text-info text-break" id="content">
        {children}
      </main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
