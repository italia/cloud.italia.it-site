import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import { HeroTitle } from '../components/hero/HeroTitle.js';
import { Hero } from '../components/hero/Hero.js';
import { TextChunk } from '../components/TextChunk.js';
import content from '../../contents/catalogue-page/catalogue.yml';

const { title } = content;

const query = graphql`
  query {
    textChunk: markdownRemark(fields: { slug: { eq: "catalogue-page/catalogue.md" } }) {
      html
    }
  }
`;

export const CataloguePage = () => {
  const {
    textChunk: { html: textChunk },
  } = useStaticQuery(query);

  return (
    <>
      <Hero>
        <div className="row align-items-center">
          <div className="offset-lg-1 col-lg-6 mt-4 mt-lg-0">
            <div className="text-center text-lg-left">
              <HeroTitle title={title} className="text-info" Tag="h1" />
            </div>
          </div>
        </div>
      </Hero>

      <div className="d-flex justify-content-center">
        <StaticImage
          src="../images/unsplash_3.jpg"
          alt=""
          placeholder="blurred"
          layout="fixed"
          height={400}
          width={800}
          formats={['AUTO', 'AVIF', 'WEBP']}
        />
      </div>

      <Hero>
        <TextChunk html={textChunk} />
      </Hero>
    </>
  );
};
