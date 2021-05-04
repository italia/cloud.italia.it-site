import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import { HeroTitle } from '../components/hero/HeroTitle.js';
import { Hero } from '../components/hero/Hero.js';
import { TextChunk } from '../components/TextChunk.js';
import content from '../../contents/catalogue-page/catalogue.yml';
import { HeroBody } from '../components/hero/HeroBody.js';
import { SEO } from '../components/SEO.js';
import seo from '../../contents/seo.yml';

const { title, body, altImg } = content;
const { title: seoTitle, description: seoDescription } = seo.cataloguePage;

const query = graphql`
  query {
    textChunk1: markdownRemark(fields: { slug: { eq: "catalogue-page/catalogue-chunk1" } }) {
      html
    }
    textChunk2: markdownRemark(fields: { slug: { eq: "catalogue-page/catalogue-chunk2" } }) {
      html
    }
  }
`;

export const CataloguePage = () => {
  const {
    textChunk1: { html: textChunk1 },
    textChunk2: { html: textChunk2 },
  } = useStaticQuery(query);

  return (
    <>
      <SEO title={seoTitle} description={seoDescription} socialCard="catalogo.jpg" />
      <Hero>
        <div className="row align-items-center">
          <div className="offset-lg-1 col-lg-6 mt-4 mt-lg-0">
            <div className="text-center text-lg-left">
              <HeroTitle title={title} className="text-info" Tag="h1" />
              <HeroBody html={body} />
            </div>
          </div>
        </div>
      </Hero>

      <hr />

      <Hero yPaddingXLScreen={false}>
        <TextChunk html={textChunk1} />
      </Hero>

      <div className="d-flex justify-content-center">
        <StaticImage
          src="../images/catalogo.jpg"
          alt={altImg}
          placeholder="blurred"
          height={400}
          width={800}
          formats={['AUTO', 'AVIF', 'WEBP']}
        />
      </div>

      <Hero yPaddingXLScreen={false}>
        <TextChunk html={textChunk2} />
      </Hero>
    </>
  );
};
