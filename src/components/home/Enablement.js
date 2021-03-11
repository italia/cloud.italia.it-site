import React from 'react';
import { getImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import { HeroCategory } from '../HeroCategory.js';
import { HeroTitle } from '../HeroTitle.js';
import { HeroBody } from '../HeroBody.js';
import { HeroCtaContainer } from '../HeroCtaContainer.js';
import { Cta } from '../Cta.js';
import { HeroGraphic } from '../HeroGraphic.js';
import { Hero } from '../Hero.js';

export const Enablement = () => {
  const data = useStaticQuery(graphql`
    query {
      abilitazione_cloud: file(relativePath: { eq: "abilitazione_cloud_2x.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, AVIF, WEBP])
        }
      }
    }
  `);
  return (
    <Hero>
      <div className="row align-items-center">
        <div className="offset-lg-1 col-lg-5 mt-4 mt-lg-0">
          <div className="text-center text-lg-left">
            <HeroCategory title="Il Programma di Abilitazione" />
            <HeroTitle title="Come aderire al modello Cloud della PA" linkTo="/programma-abilitazione-cloud/" />
            <HeroBody>
              Il Dipartimento per la trasformazione digitale, in collaborazione con l’Agenzia per l’Italia Digitale
              (AgID), ha elaborato un programma di abilitazione al cloud che definisce l’insieme di attività e risorse
              utili alle amministrazioni per la migrazione di servizi e infrastrutture digitali verso il Cloud della PA.
            </HeroBody>
          </div>
          <HeroCtaContainer>
            <Cta text="Scopri di più" linkTo="/programma-abilitazione-cloud/" />
          </HeroCtaContainer>
        </div>
        <HeroGraphic
          alt=""
          image={getImage(data.abilitazione_cloud)}
          className="col-lg-6 d-flex align-items-center justify-content-center"
        />
      </div>
    </Hero>
  );
};
