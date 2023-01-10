import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Icon } from 'design-react-kit';
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
  heroQualification: { category, title, body, ctaAriaLabel, altImg },
} = content;

const {
  internalLinks: { services },
  externalLinks: { marketplace, openDataMarketplace },
} = links;

const { showMore, ariaLabel } = labels;

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
  // This is a dirty hack to avoid pa11y issues with contrast ratio on noscript text content
  a11yHighContrast: {
    '@global': {
      noscript: {
        color: 'white',
      },
    },
  },
});

export const QualificationSection = () => {
  const classes = useStyles();
  return (
    <Hero bgColor="primary">
      <div className="row align-items-center">
        <div className="col-lg-8 mt-4 mt-lg-0">
          <div className="col-xl-9 col-lg-11 text-center text-lg-left text-white">
            <HeroCategory title={category} />
            <HeroTitle title={title} linkTo={services.linkTo} className="text-white" />
            <HeroBody html={body} />
          </div>
        </div>
        <HeroGraphic className="col-lg-4 d-flex align-items-center justify-content-center">
          <StaticImage
            className={classes.a11yHighContrast}
            src="../../images/servizi_cloud_1x.png"
            alt={altImg}
            placeholder="blurred"
            formats={['AUTO', 'AVIF', 'WEBP']}
          />
        </HeroGraphic>
      </div>
    </Hero>
  );
};
