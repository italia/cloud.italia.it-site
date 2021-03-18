import React from 'react';
import { Link } from 'gatsby';
import { createUseStyles } from 'react-jss';
import dtdLogo from '../images/dtd-logo.svg';
import agidLogo from '../images/agid-logo.svg';
import links from '../../contents/links.yml';
import { ExternalLink } from './ExternalLink.js';

const {
  internalLinks: { glossary },
  externalLinks: { dipartimento, agid, noteLegali, privacy, a11y },
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
            <ExternalLink
              linkTo={privacy.linkTo}
              ariaLabel={privacy.ariaLabel}
              className="list-item mid-footer-link mx-4 mx-md-0"
            >
              {privacy.label}
            </ExternalLink>
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
          <li className="list-inline-item mr-0 mr-md-5">
            <Link to={glossary.linkTo} className="list-item mid-footer-link mx-4 mx-md-0">
              {glossary.label}
            </Link>
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
      <div className="container">
        <div className="d-flex flex-column flex-md-row py-4 px-3 px-sm-0">
          <div className="py-3 py-sm-2">
            <ExternalLink linkTo={dipartimento.linkTo} ariaLabel={dipartimento.ariaLabel}>
              <img className={classes.footerLogo} src={dtdLogo} alt="logo" />
            </ExternalLink>
          </div>
          <div aria-hidden="true" className={classes.logoSeparator} />
          <div className="py-3 py-sm-2">
            <ExternalLink linkTo={agid.linkTo} ariaLabel={agid.ariaLabel}>
              <img className={classes.footerLogo} src={agidLogo} alt="logo" />
            </ExternalLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Footer = () => (
  <footer className="it-footer">
    <MainFooter />
    <SlimFooter />
  </footer>
);
