import React from 'react';
import { Link } from 'gatsby';
import { createUseStyles } from 'react-jss';
import { Hero } from '../components/hero/Hero.js';
import { SEO } from '../components/SEO.js';
import content from '../../contents/not-found-page/not-found.yml';
import seo from '../../contents/seo.yml';

const { title: seoTitle, description: seoDescription } = seo.notFoundPage;

const useStyles = createUseStyles({
  statusCode: {
    composes: 'h1',
    fontSize: '7em',
  },
});

export const NotFoundPage = () => {
  const classes = useStyles();
  return (
    <>
      <SEO title={seoTitle} description={seoDescription} />
      <h1 className="sr-only">{content.title}</h1>
      <Hero>
        <div className="text-center text-primary">
          <div className={classes.statusCode}>404</div>
          <div className="display-3">{content.title}</div>
          <div className="my-4 text-dark">{content.body}</div>
          <Link to="/" className="btn text-uppercase btn-primary">
            {content.returnToHome}
          </Link>
        </div>
      </Hero>
    </>
  );
};
