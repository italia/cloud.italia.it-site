import React from 'react';
import { getImage } from 'gatsby-plugin-image';
import { Icon } from 'design-react-kit';
import { graphql, useStaticQuery } from 'gatsby';
import { HeroCategory } from '../HeroCategory.js';
import { HeroTitle } from '../HeroTitle.js';
import { HeroBody } from '../HeroBody.js';
import { HeroCtaContainer } from '../HeroCtaContainer.js';
import { Cta } from '../Cta.js';
import { HeroGraphic } from '../HeroGraphic.js';
import { Hero } from '../Hero.js';

export const Strategy = () => {
  const data = useStaticQuery(graphql`
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
              Amministrazione e abilitiamo l’adozione del modello <em>cloud computing</em> per servizi pubblici più
              sicuri ed efficienti.
            </HeroBody>
          </div>
          <HeroCtaContainer>
            <Cta text="Scopri di più" linkTo="/strategia-cloud-pa/" />
            <Cta text="Programma di abilitazione" linkTo="/programma-abilitazione-cloud/" type="outline" />
          </HeroCtaContainer>
        </div>
        <HeroGraphic
          alt="strategia cloud"
          image={getImage(data.strategia_cloud)}
          className="col-lg-6 d-flex align-items-center justify-content-center"
        />
      </div>
      <div className="row mt-lg-2 mt-0">
        <div className="offset-lg-1 col-lg-11 text-center text-lg-left">
          <a
            href="https://cloud.italia.it/marketplace/opendata"
            rel="noreferrer"
            target="_blank"
            aria-label="Open data marketplace: (Link esterno) Vai a open data marketplace"
            className="btn-icon text-dark"
          >
            <small>Open Data Cloud Marketplace</small>
            <Icon className="ml-2" icon="it-external-link" size="sm" />
          </a>
        </div>
      </div>
    </Hero>
  );
};
