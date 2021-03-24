import React from 'react';
import { getImage } from 'gatsby-plugin-image';
import { Icon } from 'design-react-kit';
import { graphql, useStaticQuery } from 'gatsby';
import { createUseStyles } from 'react-jss';
import { HeroCategory } from '../../components/hero/HeroCategory.js';
import { HeroTitle } from '../../components/hero/HeroTitle.js';
import { HeroBody } from '../../components/hero/HeroBody.js';
import { HeroCtaContainer } from '../../components/hero/HeroCtaContainer.js';
import { Cta } from '../../components/hero/Cta.js';
import { HeroGraphic } from '../../components/hero/HeroGraphic.js';
import { Hero } from '../../components/hero/Hero.js';
import { ExternalLink } from '../../components/ExternalLink.js';
import content from '../../../contents/home-page/home.yml';
import links from '../../../contents/links.yml';
import labels from '../../../contents/labels.yml';

const {
  heroServices: { category, title, body, ctaAriaLabel },
} = content;

const {
  internalLinks: { services, catalogue },
  externalLinks: { marketplace, openDataMarketplace },
} = links;

const { showMore } = labels;

const useStyles = createUseStyles({
  btnPrimaryLight: {
    // eslint-disable-next-line sonarjs/no-duplicate-string
    backgroundColor: 'var(--white)',
    color: 'var(--primary)',
  },
  verticalDelimiter: {
    composes: 'd-none d-xl-block mr-4',
    borderLeft: '1px solid #E6E9F2',
  },
  whiteHighContrast: {
    color: 'var(--white)',
    '&:hover': {
      // Needed to grant high contrast for a11y
      color: ['var(--white)', '!important'],
    },
  },
});

export const ServicesSection = () => {
  const classes = useStyles();
  const { servizi_cloud } = useStaticQuery(graphql`
    query {
      servizi_cloud: file(relativePath: { eq: "servizi_cloud_1x.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, AVIF, WEBP])
        }
      }
    }
  `);
  return (
    <Hero bgColor="primary">
      <div className="row align-items-center">
        <div className="col-lg-8 mt-4 mt-lg-0">
          <div className="col-xl-9 col-lg-11 text-center text-lg-left text-white">
            <HeroCategory title={category} />
            <HeroTitle title={title} linkTo={services.linkTo} className="text-white" />
            <HeroBody html={body} />
          </div>
          <HeroCtaContainer>
            <Cta linkTo={services.linkTo} text={showMore} color="light" type="outline" aria-label={ctaAriaLabel} />
            <Cta linkTo={catalogue.linkTo} text={catalogue.label} color="light" />
            <div aria-hidden="true" className={classes.verticalDelimiter} />
            <ExternalLink
              linkTo={marketplace.linkTo}
              ariaLabel={marketplace.ariaLabel}
              className={`${classes.btnPrimaryLight} btn text-uppercase mx-4 ml-lg-0 my-2 btn-primary btn-icon focus-a11y-contrast`}
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
            className={`btn-icon ${classes.whiteHighContrast}`}
          >
            <small>{openDataMarketplace.label}</small>
            <Icon
              className="ml-2"
              icon="it-external-link"
              size="sm"
              color="white"
              focusable={false}
              role="img"
              aria-label={openDataMarketplace.ariaLabel}
            />
          </ExternalLink>
        </div>
      </div>
    </Hero>
  );
};
