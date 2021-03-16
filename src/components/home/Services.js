import React from 'react';
import { getImage } from 'gatsby-plugin-image';
import { Icon } from 'design-react-kit';
import { graphql, useStaticQuery } from 'gatsby';
import { createUseStyles } from 'react-jss';
import { HeroCategory } from '../hero/HeroCategory.js';
import { HeroTitle } from '../hero/HeroTitle.js';
import { HeroBody } from '../hero/HeroBody.js';
import { HeroCtaContainer } from '../hero/HeroCtaContainer.js';
import { Cta } from '../Cta.js';
import { HeroGraphic } from '../hero/HeroGraphic.js';
import { Hero } from '../hero/Hero.js';
import { ExternalLink } from '../ExternalLink.js';

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
  const {
    servizi_cloud,
    linksYaml: {
      internalLinks: { services, catalogue },
      externalLinks: { openDataMarketplace, marketplace },
    },
  } = useStaticQuery(graphql`
    query {
      servizi_cloud: file(relativePath: { eq: "servizi_cloud_1x.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, AVIF, WEBP])
        }
      }
      linksYaml {
        internalLinks {
          services {
            linkTo
            label
          }
          catalogue {
            linkTo
            label
          }
        }
        externalLinks {
          marketplace {
            ariaLabel
            label
            linkTo
          }
          openDataMarketplace {
            ariaLabel
            label
            linkTo
          }
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
              Le Pubbliche Amministrazioni possono acquisire servizi cloud solo se qualificati dall’
              <strong>AgID</strong>. I fornitori cloud devono sottoporre i servizi al processo di qualificazione e, se
              in possesso dei requisiti, sono pubblicati e consultabili all’interno del marketplace
            </HeroBody>
          </div>
          <HeroCtaContainer>
            <Cta linkTo={services.linkTo} text="Scopri di più" color="light" type="outline" />
            <Cta linkTo={catalogue.linkTo} text={catalogue.label} color="light" />
            <div aria-hidden="true" className={classes.verticalDelimiter} />
            <ExternalLink
              linkTo={marketplace.linkTo}
              ariaLabel={marketplace.ariaLabel}
              className={`${classes.btnPrimaryLight} btn text-uppercase mx-4 ml-lg-0 my-2 btn-primary btn-icon`}
            >
              <span className="mr-3">{marketplace.label}</span>
              <Icon color="primary" icon="it-external-link" size="sm" />
            </ExternalLink>
          </HeroCtaContainer>
        </div>
        <HeroGraphic
          alt=""
          image={getImage(servizi_cloud)}
          className="col-lg-4 d-flex align-items-center justify-content-center"
        />
      </div>
      <div className="row mt-lg-2 mt-0">
        <div className="col-12 text-center text-lg-left">
          <ExternalLink
            linkTo={openDataMarketplace.linkTo}
            ariaLabel={openDataMarketplace.ariaLabel}
            className="btn-icon text-white"
          >
            <small>{openDataMarketplace.label}</small>
            <Icon className="ml-2" icon="it-external-link" size="sm" color="white" />
          </ExternalLink>
        </div>
      </div>
    </Hero>
  );
};
