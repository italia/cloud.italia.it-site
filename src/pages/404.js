import React from 'react';
import { Link } from 'gatsby';
import { createUseStyles } from 'react-jss';
import { Hero } from '../components/hero/Hero.js';
import { SEO } from '../components/SEO.js';

const useStyles = createUseStyles({
  statusCode: {
    composes: 'h1',
    fontSize: '7em',
  },
});

const NotFoundPage = () => {
  const classes = useStyles();
  return (
    <>
      <SEO title="Pagina non trovata" />
      <Hero>
        <div className="text-center text-primary">
          <div className={classes.statusCode}>404</div>
          <h2 className="display-3">Pagina non trovata</h2>
          <div className="my-4 text-dark">
            Utilizza il menu per riprendere la navigazione, oppure prova a fare una nel sito
          </div>
          <Link to="/" className="btn text-uppercase btn-primary">
            Vai alla pagina iniziale
          </Link>
        </div>
      </Hero>
    </>
  );
};

export default NotFoundPage;
