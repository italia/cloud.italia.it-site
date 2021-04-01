import React from 'react';
import { Card, CardBody } from 'design-react-kit';
import { createUseStyles } from 'react-jss'; // This should be in BI
import { MobileSwiper } from '../../components/MobileSwiper.js';
import { Hero } from '../../components/hero/Hero.js';
import content from '../../../contents/home-page/home.yml';

const {
  heroContribute: { category, title, body },
  contributions,
} = content;

const useStyles = createUseStyles({
  logo: {
    height: '35px',
  },
});

export const HowToContributeSection = () => {
  const classes = useStyles();
  const slides = contributions.map((card) => (
    <Card key={card.title} teaser noWrapper className="rounded shadow-lg col-lg-3 col-12 mr-4">
      <CardBody className="pb-5">
        <div className="mb-3 d-flex align-items-center">
          <img src={`/assets/${card.icon}`} alt={`${card.alt}`} className={classes.logo} />
          <span className="primary-color px-3 h3 mb-0">{card.title}</span>
        </div>
        <p className="card-text" dangerouslySetInnerHTML={{ __html: card.body }}></p>
      </CardBody>
    </Card>
  ));
  return (
    <Hero bgColor="light">
      <div className="row">
        <div className="col-xl-4 col-lg-5 text-lg-left text-center">
          <h2 className="text-uppercase h6 font-weight-semibold">{category}</h2>
          <h3>{title}</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-5 col-lg-6 text-lg-left text-center">{body}</div>
      </div>
      <div className="row">
        <div className="mt-4 col-12 d-none d-lg-flex">{slides}</div>
      </div>
      <MobileSwiper slides={slides} />
    </Hero>
  );
};
