import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import { HeroTitle } from '../components/hero/HeroTitle.js';
import { Hero } from '../components/hero/Hero.js';
import { TextChunk } from '../components/TextChunk.js';
import content from '../../contents/catalogue-page/catalogue.yml';

const { name, title } = content;

const query = graphql`
  query {
    textChunk: markdownRemark(fields: { slug: { eq: "catalogue-page/catalogue.md" } }) {
      html
    }
  }
`;

const CataloguePage = () => {
  const {
    textChunk: { html: textChunk },
  } = useStaticQuery(query);

  return (
    <>
      <h1 className="sr-only">{name}</h1>
      <Hero>
        <div className="row align-items-center">
          <div className="offset-lg-1 col-lg-6 mt-4 mt-lg-0">
            <div className="text-center text-lg-left">
              <HeroTitle title={title} className="text-info" Tag="h2" />
            </div>
          </div>
        </div>
      </Hero>

      <StaticImage
        aspectRatio={1280 / 548}
        src="../images/strategia_hero_cloud_2x.jpg"
        alt=""
        placeholder="blurred"
        formats={['AUTO', 'AVIF', 'WEBP']}
      />

      <Hero>
        <TextChunk html={textChunk} />
      </Hero>
    </>
  );
};

export default CataloguePage;
