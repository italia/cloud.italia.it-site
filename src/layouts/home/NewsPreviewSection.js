import React from 'react';
import { Card, CardBody, Icon } from 'design-react-kit';
import { createUseStyles } from 'react-jss';
import { MobileSwiper } from '../../components/MobileSwiper.js';
import { Hero } from '../../components/hero/Hero.js';
import content from '../../../contents/home-page/home.yml';
import { ExternalLink } from '../../components/ExternalLink.js';

const {
  heroNews: { category, title },
  newsPreview,
} = content;

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

export const NewsPreviewSection = () => {
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
          <ExternalLink linkTo={news.link} className="text-decoration-none" ariaLabel={news.ariaLabel}>
            {news.title}
          </ExternalLink>
        </h4>
        <p className="card-text pt-2 pb-4 text-dark">{news.body}</p>
        <p className="card-text mt-auto font-weight-semibold d-flex align-items-center text-dark">
          <span>{news.source}</span>
          <Icon className="ml-2" icon="it-external-link" size="sm" focusable={false} role="img" />
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
