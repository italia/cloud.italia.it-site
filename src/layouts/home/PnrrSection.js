import React from 'react';
import { Link } from 'gatsby';

import { StaticImage } from 'gatsby-plugin-image';
import { Icon } from 'design-react-kit';
import { createUseStyles } from 'react-jss';
import { HeroCategory } from '../../components/hero/HeroCategory.js';
import { HeroTitle } from '../../components/hero/HeroTitle.js';
import { HeroSubTitle } from '../../components/hero/HeroSubTitle.js';
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
  PnrrSection: { category, title, subTitle1, subTitle2, body, altImg },
} = content;

const {
  internalLinks: { pnrrStrategy },
  externalLinks: { openDataMarketplace },
} = links;

const { ariaLabel } = labels;

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
  orizontalDelimiter: {
    composes: 'd-none d-xl-block mt-2 mb-4',
  },
  whiteHighContrast: {
    color: 'var(--white)',
    paddingLeft: 0,
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

export const PnrrSection = () => {
  const classes = useStyles();
  return (
    <Hero bgColor="primary">
      <div className="row align-items-center">
        <div className="offset-lg-1 col-lg-5 mt-4 mt-lg-0 text-white">
          <div className="text-center text-lg-left">
            <HeroCategory title={category} />
            <HeroTitle title={title} className="text-white" />
            <HeroBody html={body} />
          </div>
          <HeroCtaContainer>
            <Cta linkTo={pnrrStrategy.linkTo} text={pnrrStrategy.label} color="light" />
          </HeroCtaContainer>
          <div className="row mt-lg-2 mt-0">
            <div className="col-12 text-center text-lg-left">
              <HeroSubTitle Tag="div" title={subTitle1} className="font-weight-bold text-white mb-0" />
              <Link to={pnrrStrategy.linkTo1} className={`col-12 ${classes.whiteHighContrast}`}>
                <small>{pnrrStrategy.label1}</small>
              </Link>
              <div className={`col-12 text-center text-lg-left mb-4 mb-lg-0 ${classes.whiteHighContrast}`}>
                <ExternalLink
                  linkTo={pnrrStrategy.linkTo2}
                  ariaLabel={openDataMarketplace.ariaLabel}
                  className={`btn-icon ${classes.whiteHighContrast}`}
                >
                  <small>{pnrrStrategy.label2}</small>
                  <Icon
                    className="ml-2"
                    icon="it-external-link"
                    size="sm"
                    color="white"
                    focusable={false}
                    role="img"
                    aria-label={ariaLabel.externalLink}
                  />
                </ExternalLink>
              </div>
              <div aria-hidden="true" className={classes.orizontalDelimiter} />
              <HeroSubTitle Tag="div" title={subTitle2} className="font-weight-bold text-white mb-0" />
              <Link to={pnrrStrategy.linkTo3} className={`col-12 ${classes.whiteHighContrast}`}>
                <small>{pnrrStrategy.label3}</small>
              </Link>
            </div>
          </div>
        </div>
        <HeroGraphic className="col-lg-6 d-flex align-items-center justify-content-center">
          <StaticImage
            className={classes.a11yHighContrast}
            src="../../images/pa-digitale-2026_2x.png"
            alt={altImg}
            placeholder="blurred"
            formats={['AUTO', 'AVIF', 'WEBP']}
          />
        </HeroGraphic>
      </div>
    </Hero>
  );
};
