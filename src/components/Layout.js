import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import 'typeface-titillium-web';
import 'typeface-roboto-mono';
import 'typeface-lora';
import 'bootstrap-italia/dist/css/bootstrap-italia.min.css';
import favicon from '../images/favicon.ico';
import { Header } from './Header.js';

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
      <noscript>Il tuo browser non supporta JavaScript</noscript>
    </Helmet>
    <Header />
    {children}
    <footer>FOOTER</footer>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
