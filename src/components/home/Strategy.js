import React from 'react';
import { getImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import { HeroCategory } from '../hero/HeroCategory.js';
import { HeroTitle } from '../hero/HeroTitle.js';
import { HeroBody } from '../hero/HeroBody.js';
import { HeroCtaContainer } from '../hero/HeroCtaContainer.js';
import { Cta } from '../hero/Cta.js';
import { HeroGraphic } from '../hero/HeroGraphic.js';
import { Hero } from '../hero/Hero.js';
import content from '../../../content/home-page/index.yml';
import links from '../../../content/links.yml';
import labels from '../../../content/labels.yml';

const {
  heroStrategy: { category, title, body },
} = content;
const {
  internalLinks: { strategy },
} = links;
const { showMore } = labels;

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
            <HeroCategory title={category} />
            <HeroTitle title={title} linkTo={strategy.linkTo} />
            <HeroBody html={body} />
          </div>
          <HeroCtaContainer>
            <Cta text={showMore} linkTo={strategy.linkTo} />
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
