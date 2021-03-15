import React from 'react';
import { getImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import { HeroCategory } from '../hero/HeroCategory.js';
import { HeroTitle } from '../hero/HeroTitle.js';
import { HeroBody } from '../hero/HeroBody.js';
import { HeroCtaContainer } from '../hero/HeroCtaContainer.js';
import { Cta } from '../Cta.js';
import { HeroGraphic } from '../hero/HeroGraphic.js';
import { Hero } from '../hero/Hero.js';

export const Strategy = () => {
  const { strategia_cloud } = useStaticQuery(graphql`
    query {
      strategia_cloud: file(relativePath: { eq: "strategia_cloud_2x.png" }) {
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
            <HeroCategory title="La strategia nazione cloud della PA" />
            <HeroTitle title="Il modello per realizzare il sistema operativo del Paese" linkTo="/strategia-cloud-pa/" />
            <HeroBody>
              Definiamo la strategia per l’evoluzione tecnologica delle infrastrutture digitali della Pubblica
              Amministrazione e abilitiamo l’adozione del modello cloud computing per servizi pubblici più sicuri ed
              efficienti.
            </HeroBody>
          </div>
          <HeroCtaContainer>
            <Cta text="Scopri di più" linkTo="/strategia-cloud-pa/" />
          </HeroCtaContainer>
        </div>
        <HeroGraphic
          alt=""
          image={getImage(strategia_cloud)}
          className="col-lg-6 d-flex align-items-center justify-content-center"
        />
      </div>
    </Hero>
  );
};
