import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Hero } from '../components/hero/Hero.js';
import { HeroTitle } from '../components/hero/HeroTitle.js';
import { HeroBody } from '../components/hero/HeroBody.js';
import { TextChunk } from '../components/TextChunk.js';
import content from '../../contents/polo-strat-naz-page/polo-strat-naz.yml';
import { SEO } from '../components/SEO.js';
import seo from '../../contents/seo.yml';

const query = graphql`
  query {
    chunk1: markdownRemark(fields: { slug: { eq: "polo-strat-naz-page/polo-strat-naz-chunk1" } }) {
      html
    }
  }
`;

const { body, title } = content;
const { title: seoTitle, description: seoDescription } = seo.strategyPage;

export const PoloStrategicoNazionale = () => {
  const {
    chunk1: { html: chunk1 },
  } = useStaticQuery(query);

  return (
    <>
      <SEO title={seoTitle} description={seoDescription} socialCard="strategia.jpg" />
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
      <Hero>
        <TextChunk html={chunk1} />
      </Hero>
    </>
  );
};
