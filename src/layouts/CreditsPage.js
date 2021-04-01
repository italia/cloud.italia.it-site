import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Hero } from '../components/hero/Hero.js';
import { TextChunk } from '../components/TextChunk.js';
import { Breadcrumb } from '../components/Breadcrumb.js';
import content from '../../contents/credits-page/credits.yml';
import seo from '../../contents/seo.yml';
import { SEO } from '../components/SEO.js';

const { title: seoTitle, description: seoDescription } = seo.creditsPage;

const query = graphql`
  query {
    textChunk: markdownRemark(fields: { slug: { eq: "credits-page/credits.md" } }) {
      html
    }
  }
`;

export const CreditsPage = () => {
  const {
    textChunk: { html: textChunk },
  } = useStaticQuery(query);
  return (
    <>
      <SEO title={seoTitle} description={seoDescription} />
      <Breadcrumb currentPage={content.breadcrumb} />
      <Hero yPaddingXLScreen={false}>
        <TextChunk html={textChunk} />
      </Hero>
    </>
  );
};
