import React from 'react';
import { Card, CardBody, Icon } from 'design-react-kit';
import { createUseStyles } from 'react-jss';
import { MobileSwiper } from '../MobileSwiper.js';
import { Hero } from '../hero/Hero.js';
import heroContent from '../../../content/home_page/hero.yml';
import newsPreview from '../../../content/home_page/news-preview.yml';
import { ExternalLink } from '../ExternalLink.js';

const {
  heroNews: { category, title },
} = heroContent;

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
  const classes = useStyle();
  const slides = newsPreview.map((news) => (
    <Card key={news.title} teaser noWrapper className="rounded shadow-lg">
      <CardBody className="h-100 d-flex flex-column">
        <div className="pb-3 d-flex align-items-center">
          <span className={`pr-2 text-uppercase font-weight-semibold ${classes.category}`}>{news.type}</span>
          <span className={`px-2 text-secondary ${classes.category}`}>
            <span>{news.date}</span>
          </span>
        </div>
        <h4 className="h6 text-primary font-weight-bold">
          <ExternalLink linkTo={news.link} className="text-decoration-none" ariaLabel="">
            {news.title}
          </ExternalLink>
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
        <h2 className="col-12 text-center text-uppercase h6">{category}</h2>
        <h3 className="col-12 text-center h1">{title}</h3>
        <div className="mt-4 col-12 d-none d-lg-flex card-wrapper card-teaser-wrapper card-teaser-wrapper-equal card-teaser-block-3">
          {slides}
        </div>
      </div>
      <MobileSwiper slides={slides} />
    </Hero>
  );
};
