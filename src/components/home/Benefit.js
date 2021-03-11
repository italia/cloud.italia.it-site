import React from 'react';
import { getImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import { HeroCategory } from '../HeroCategory.js';
import { HeroGraphic } from '../HeroGraphic.js';
import { Hero } from '../Hero.js';
import { Accordion } from '../Accordion.js';

export const Benefit = () => {
  const data = useStaticQuery(graphql`
    query {
      vantaggi_cloud: file(relativePath: { eq: "vantaggi_cloud_1x.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  `);
  return (
    <Hero bgColor="light">
      <div className="row align-items-center">
        <HeroGraphic
          alt=""
          image={getImage(data.vantaggi_cloud)}
          className="col-lg-5 d-flex align-items-center justify-content-center"
        />
        <div className="col-lg-7 mt-4 mt-lg-0">
          <div className="col-xl-9 text-center text-lg-left">
            <HeroCategory title="I vantaggi" />
            <h3 className="h3">Un modello che porta beneficio all’intero sistema Paese</h3>
            <div className="mt-3 mb-5">
              La trasformazione dei servizi pubblici attraverso l&apos;adozione del cloud è essenziale per garantire al
              Paese la possibilità di crescere, competere, generare nuove opportunità di lavoro qualificato, creare e
              distribuire nuova ricchezza in maniera uniforme su tutto il territorio nazionale
            </div>
          </div>
          <Accordion />
        </div>
      </div>
    </Hero>
  );
};
