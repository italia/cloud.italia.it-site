import React from 'react';
import { Link } from 'gatsby';
import { createUseStyles } from 'react-jss';
import links from '../../contents/links.yml';
import { ExternalLink } from '../components/ExternalLink.js';

const {
  internalLinks: { privacy, credits },
  externalLinks: { dipartimento, agid, noteLegali, a11y },
} = links;

const useStyle = createUseStyles({
  mainFooter: {
    composes: 'it-footer-main',
    backgroundColor: '#004080',
  },
  slimFooter: {
    composes: 'it-footer-small-prints py-4',
    backgroundColor: '#01254C',
    '& a': {
      color: '#27D1D6',
    },
  },
  footerLogo: {
    height: '2.5rem',
  },
  logoSeparator: {
    composes: 'mx-5 d-none d-md-block',
    borderLeft: '1px solid #E6E9F2',
  },
  '@media (max-width: 300px)': {
    footerLogo: {
      height: '2rem',
    },
  },
});

const SlimFooter = () => {
  const classes = useStyle();
  return (
    <div className={classes.slimFooter}>
      <div className="container">
        <ul className="list-inline link-list mb-0 text-center text-md-left">
          <li className="list-inline-item mr-0 mr-md-5">
            <ExternalLink
              linkTo={noteLegali.linkTo}
              ariaLabel={noteLegali.ariaLabel}
              className="list-item mid-footer-link mx-4 mx-md-0"
            >
              {noteLegali.label}
            </ExternalLink>
          </li>
          <li className="list-inline-item mr-0 mr-md-5">
            <Link to={privacy.linkTo} className="list-item mid-footer-link mx-4 mx-md-0">
              {privacy.label}
            </Link>
          </li>
          <li className="list-inline-item mr-0 mr-md-5">
            <Link to={credits.linkTo} className="list-item mid-footer-link mx-4 mx-md-0">
              {credits.label}
            </Link>
          </li>
          <li className="list-inline-item mr-0 mr-md-5">
            <ExternalLink
              linkTo={a11y.linkTo}
              ariaLabel={a11y.ariaLabel}
              className="list-item mid-footer-link mx-4 mx-md-0"
            >
              {a11y.label}
            </ExternalLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

const MainFooter = () => {
  const classes = useStyle();
  return (
    <div className={classes.mainFooter}>
      <div className="container text-center text-md-left">
        <div className="row">
          <div className="col-12 d-flex flex-column flex-md-row py-4">
            <div className="py-3">
              <ExternalLink linkTo={dipartimento.linkTo} ariaLabel={dipartimento.ariaLabel}>
                <img
                  className={classes.footerLogo}
                  src="/assets/dtd-logo.svg"
                  alt="logo Dipartimento per la trasformazione digitale"
                />
              </ExternalLink>
            </div>
            <div aria-hidden="true" className={classes.logoSeparator} />
            <div className="py-3">
              <ExternalLink linkTo={agid.linkTo} ariaLabel={agid.ariaLabel}>
                <img className={classes.footerLogo} src="/assets/acn-logo.svg" alt="logo ACN" />
              </ExternalLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Footer = () => (
  <footer className="it-footer" id="footer">
    <MainFooter />
    <SlimFooter />
  </footer>
);
