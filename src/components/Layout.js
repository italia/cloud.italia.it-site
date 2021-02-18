import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import favicon from '../images/favicon.ico';

export const Layout = ({ children }) => (
  <>
    <Helmet
      title="Cloud Italia"
      meta={[
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'description', content: 'Il Cloud della Pubblica Amministrazione' },
      ]}
    >
      <html lang="it" />
      <link rel="icon" href={favicon} />
      <noscript>Questo sito funziona meglio con JavaScript abilitato</noscript>
    </Helmet>
    <header>HEADER</header>
    {children}
    <footer>FOOTER</footer>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
