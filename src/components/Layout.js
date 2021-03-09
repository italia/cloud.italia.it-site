import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import '@fontsource/titillium-web/latin.css';
import 'bootstrap-italia/dist/css/bootstrap-italia.min.css';
import { createUseStyles } from 'react-jss';
import favicon from '../images/favicon.ico';
import { Header } from './Header.js';
import { Footer } from './Footer.js';

const useStyles = createUseStyles({
  '@global': {
    ':focus:not(:focus-visible)': {
      borderColor: 'initial',
      boxShadow: 'none',
    },
  },
  main: {
    backgroundColor: '#e6e9f21f', // TODO: qual è il colore corretto?
  },
});

export const Layout = ({ children }) => {
  const classes = useStyles();
  return (
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
      </Helmet>
      <Header />
      <main className={classes.main}>{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
