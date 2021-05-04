import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Hero } from '../components/hero/Hero.js';
import { TextChunk } from '../components/TextChunk.js';
import { Breadcrumb } from '../components/Breadcrumb.js';
import content from '../../contents/privacy-page/privacy.yml';
import seo from '../../contents/seo.yml';
import { SEO } from '../components/SEO.js';

const { title: seoTitle, description: seoDescription } = seo.privacyPage;

const query = graphql`
  query {
    textChunk: markdownRemark(fields: { slug: { eq: "privacy-page/privacy" } }) {
      html
    }
  }
`;

export const PrivacyPolicyPage = () => {
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
