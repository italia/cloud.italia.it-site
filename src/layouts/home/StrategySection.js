import React from 'react';
import { getImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import { HeroCategory } from '../../components/hero/HeroCategory.js';
import { HeroTitle } from '../../components/hero/HeroTitle.js';
import { HeroBody } from '../../components/hero/HeroBody.js';
import { HeroCtaContainer } from '../../components/hero/HeroCtaContainer.js';
import { Cta } from '../../components/hero/Cta.js';
import { HeroGraphic } from '../../components/hero/HeroGraphic.js';
import { Hero } from '../../components/hero/Hero.js';
import content from '../../../contents/home-page/home.yml';
import links from '../../../contents/links.yml';
import labels from '../../../contents/labels.yml';

const {
  heroStrategy: { category, title, body },
} = content;
const {
  internalLinks: { strategy: strategyHero },
} = links;
const { showMore } = labels;

export const StrategySection = () => {
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
            <HeroCategory title={category} />
            <HeroTitle title={title} linkTo={strategyHero.linkTo} />
            <HeroBody html={body} />
          </div>
          <HeroCtaContainer>
            <Cta text={showMore} linkTo={strategyHero.linkTo} />
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
