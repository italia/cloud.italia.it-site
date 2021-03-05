import React from 'react';
import { getImage } from 'gatsby-plugin-image';
import { Icon } from 'design-react-kit';
import { graphql, useStaticQuery } from 'gatsby';
import { createUseStyles } from 'react-jss';
import { HeroCategory } from '../HeroCategory.js';
import { HeroTitle } from '../HeroTitle.js';
import { HeroBody } from '../HeroBody.js';
import { HeroCtaContainer } from '../HeroCtaContainer.js';
import { Cta } from '../Cta.js';
import { HeroGraphic } from '../HeroGraphic.js';
import { Hero } from '../Hero.js';

const useStyles = createUseStyles({
  btnPrimaryLight: {
    backgroundColor: 'var(--white)',
    color: 'var(--primary)',
  },
  verticalDelimiter: {
    composes: 'd-none d-xl-block mr-4',
    borderLeft: '1px solid #E6E9F2',
  },
});

export const Services = () => {
  const classes = useStyles();
  const data = useStaticQuery(graphql`
    query {
      servizi_cloud: file(relativePath: { eq: "servizi_cloud_1x.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  `);
  return (
    <Hero bgColor="primary">
      <div className="row align-items-center">
        <div className="col-lg-8 mt-4 mt-lg-0">
          <div className="col-xl-9 col-lg-11 text-center text-lg-left text-white">
            <HeroCategory title="La qualificazione dei servizi e il catalogo" />
            <HeroTitle
              title="Il percorso di qualificazione e il catalogo dei servizi cloud"
              linkTo="/qualificazione-servizi-cloud/"
              className="text-white"
            />
            <HeroBody>
              Le Pubbliche Amministrazioni possono acquisire servizi cloud solo se qualificati dall’Agenzia per l’Italia
              Digitale (AgID). I fornitori cloud devono sottoporre i servizi al processo di qualificazione e, se in
              possesso dei requisiti, sono pubblicati e consultabili all’interno del marketplace
            </HeroBody>
          </div>
          <HeroCtaContainer>
            <Cta linkTo="/qualificazione-servizi-cloud/" text="Scopri di più" color="light" />
            <Cta linkTo="/catalogo-servizi-cloud" text="Catalogo dei servizi" color="light" type="outline" />
            <div aria-hidden="true" className={classes.verticalDelimiter} />
            <a
              href="https://cloud.italia.it/marketplace"
              rel="noreferrer"
              target="_blank"
              aria-label="Marketplace: (Link esterno) Vai a Marketplace"
              className={`${classes.btnPrimaryLight} btn text-uppercase mx-4 ml-lg-0 my-2 btn-primary btn-icon`}
            >
              <span className="mr-3">Marketplace agid</span>
              <Icon color="primary" icon="it-external-link" size="sm" />
            </a>
          </HeroCtaContainer>
        </div>
        <HeroGraphic
          alt="qualificazione servizi cloud"
          image={getImage(data.servizi_cloud)}
          className="col-lg-4 d-flex align-items-center justify-content-center"
        />
      </div>
    </Hero>
  );
};
