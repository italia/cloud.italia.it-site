import React from 'react';
import { createUseStyles } from 'react-jss';
import dtdLogo from '../images/dtd-logo.svg';
import agidLogo from '../images/agid-logo.svg';

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
            <a
              href="http://www.governo.it/note-legali"
              className="list-item mid-footer-link mx-4 mx-md-0"
              target="_blank"
              rel="noreferrer"
              aria-label="Note legali: (Link esterno) Leggi le note legali"
            >
              Note legali
            </a>
          </li>
          <li className="list-inline-item mr-0 mr-md-5">
            <a
              href="https://innovazione.gov.it/informativa-sul-trattamento-dei-dati-personali/"
              className="list-item mid-footer-link mx-4 mx-md-0"
              aria-label="Informativa privacy: (Link esterno) Vai all'informativa"
            >
              Informativa privacy
            </a>
          </li>
          <li className="list-inline-item mr-0 mr-md-5">
            <a
              href="https://form.agid.gov.it/view/c7c157fa-0177-4262-aea2-206ae99ae422"
              className="list-item mid-footer-link mx-4 mx-md-0"
              target="_blank"
              rel="noreferrer"
              aria-label="Dichiarazione di accessibilità: (Link esterno) Vai alla Dichiarazione"
            >
              Dichiarazione di accessibilità
            </a>
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
            <a
              href="https://innovazione.gov.it/it/chi-siamo/dipartimento/"
              target="_blank"
              rel="noreferrer"
              aria-label="Dipartimento per la Trasformazione Digitale: (Link esterno) Vai a Dipartimento per la Trasformazione Digitale"
            >
              <img
                className={classes.footerLogo}
                src={dtdLogo}
                alt="Dipartimento per la Trasformazione Digitale logo"
              />
            </a>
          </div>
          <div className={classes.logoSeparator} />
          <div className="py-3 py-sm-2">
            <a
              href="https://www.agid.gov.it/"
              target="_blank"
              rel="noreferrer"
              aria-label="AgID: (Link esterno) Vai a AgID"
            >
              <img className={classes.footerLogo} src={agidLogo} alt="AgID logo" />
            </a>
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
