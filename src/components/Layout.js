import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';

export const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);
  return (
    <>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
          { name: 'description', content: data.site.siteMetadata.description },
        ]}
      >
        <html lang="it" />
        <noscript>Questo sito funziona meglio con JavaScript abilitato</noscript>
      </Helmet>
      <header>HEADER</header>
      {children}
      <footer>FOOTER</footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
