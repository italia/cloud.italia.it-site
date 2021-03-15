import React from 'react';
import { Card, CardBody, Icon } from 'design-react-kit';
import { createUseStyles } from 'react-jss';
import { graphql, useStaticQuery } from 'gatsby';
import { MobileSwiper } from '../MobileSwiper.js';
import { Hero } from '../hero/Hero.js';

const useStyle = createUseStyles({
  category: {
    fontSize: '0.875rem',
  },
  '@media (min-width: 992px)': {
    category: {
      fontSize: '0.78rem',
    },
  },
});

export const NewsPreview = () => {
  const {
    allNewsPreviewYaml: { nodes: newsPreview },
  } = useStaticQuery(graphql`
    query {
      allNewsPreviewYaml {
        nodes {
          id
          body
          date
          link
          source
          title
          type
        }
      }
    }
  `);
  const classes = useStyle();
  const slides = newsPreview.map((news) => (
    <Card key={news.id} teaser noWrapper className="rounded shadow-lg">
      <CardBody className="h-100 d-flex flex-column">
        <div className="pb-3 d-flex align-items-center">
          <span className={`pr-2 text-uppercase font-weight-semibold ${classes.category}`}>{news.type}</span>
          <span className={`px-2 text-secondary ${classes.category}`}>
            <span>{news.date}</span>
          </span>
        </div>
        <h4 className="h6 text-primary font-weight-bold">
          <a href={news.link} className="text-decoration-none" rel="noreferrer" target="_blank">
            {news.title}
          </a>
        </h4>
        <p className="card-text pt-2 pb-4 text-dark">{news.body}</p>
        <p className="card-text mt-auto font-weight-semibold d-flex align-items-center text-dark">
          <span>{news.source}</span>
          <Icon className="ml-2" icon="it-external-link" size="sm" />
        </p>
      </CardBody>
    </Card>
  ));

  return (
    <Hero>
      <div className="row align-items-center justify-content-center">
        <h2 className="col-12 text-center text-uppercase h6">Le notizie</h2>
        <h3 className="col-12 text-center h1">Articoli e approfondimenti</h3>
        <div className="mt-4 col-12 d-none d-lg-flex card-wrapper card-teaser-wrapper card-teaser-wrapper-equal card-teaser-block-3">
          {slides}
        </div>
      </div>
      <MobileSwiper slides={slides} />
    </Hero>
  );
};
