import React from 'react';
import { Card, CardBody, Icon } from 'design-react-kit';
import { graphql, useStaticQuery } from 'gatsby';
import { MobileSwiper } from '../MobileSwiper.js';
import { Hero } from '../hero/Hero.js';

export const HowToContribute = () => {
  const {
    allHowToContributeYaml: { nodes: howToContribute },
  } = useStaticQuery(graphql`
    query {
      allHowToContributeYaml {
        nodes {
          id
          ariaLabel
          body
          icon
          link
          title
        }
      }
    }
  `);
  const slides = howToContribute.map((contribute) => (
    <Card key={contribute.id} teaser noWrapper className="rounded shadow-lg col-lg-3 col-12 mr-4">
      <a href={contribute.link} aria-label={contribute.ariaLabel} className="text-decoration-none">
        <CardBody className="pb-5">
          <div className="mb-3 d-flex align-items-center">
            <Icon color="primary" icon={contribute.icon} size="lg" />
            <span className="primary-color px-3 h3 mb-0">{contribute.title}</span>
          </div>
          <p className="card-text" dangerouslySetInnerHTML={{ __html: contribute.body }}></p>
        </CardBody>
      </a>
    </Card>
  ));
  return (
    <Hero bgColor="light">
      <div className="row">
        <div className="col-xl-4 col-lg-5 text-lg-left text-center">
          <h2 className="text-uppercase h6 font-weight-semibold">Come contribuire</h2>
          <h3>Partecipa al cambiamento, contribuisci a Cloud Italia!</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-5 col-lg-6 text-lg-left text-center">
          Condividi informazioni, promuovi incontri sul tema cloud della PA nel tuo territorio e all’interno della tua
          organizzazione
        </div>
      </div>
      <div className="row">
        <div className="mt-4 col-12 d-none d-lg-flex">{slides}</div>
      </div>
      <MobileSwiper slides={slides} />
    </Hero>
  );
};
