import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Hero } from '../components/hero/Hero.js';
import { TextChunk } from '../components/TextChunk.js';
import { Breadcrumb } from '../components/Breadcrumb.js';
import content from '../../contents/privacy-page/privacy.yml';

const query = graphql`
  query {
    textChunk: markdownRemark(fields: { slug: { eq: "privacy-page/privacy.md" } }) {
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
      <Breadcrumb currentPage={content.breadcrumb} />
      <Hero yPadding={false}>
        <TextChunk html={textChunk} />
      </Hero>
    </>
  );
};
