import React from 'react';
import { Card, CardBody, Icon } from 'design-react-kit';
import { MobileSwiper } from '../MobileSwiper.js';
import { Hero } from '../hero/Hero.js';
import { ExternalLink } from '../ExternalLink.js';
import heroContent from '../../../content/home-page/index.yml';
import contributeCards from '../../../content/home-page/contribute.yml';

const {
  heroContribute: { category, title, body },
} = heroContent;

export const HowToContribute = () => {
  const slides = contributeCards.map((card) => (
    <Card key={card.title} teaser noWrapper className="rounded shadow-lg col-lg-3 col-12 mr-4">
      <ExternalLink linkTo={card.link} ariaLabel={card.ariaLabel} className="text-decoration-none">
        <CardBody className="pb-5">
          <div className="mb-3 d-flex align-items-center">
            <Icon color="primary" icon={card.icon} size="lg" />
            <span className="primary-color px-3 h3 mb-0">{card.title}</span>
          </div>
          <p className="card-text" dangerouslySetInnerHTML={{ __html: card.body }}></p>
        </CardBody>
      </ExternalLink>
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
