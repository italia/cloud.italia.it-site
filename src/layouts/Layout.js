import React from 'react';
import PropTypes from 'prop-types';
import '@fontsource/titillium-web/latin.css';
import '@fontsource/lora/latin.css';
import 'bootstrap-italia/dist/css/bootstrap-italia.min.css';
import { createUseStyles } from 'react-jss';
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