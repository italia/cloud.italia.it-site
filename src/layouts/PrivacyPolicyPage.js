import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Hero } from '../components/hero/Hero.js';
import { TextChunk } from '../components/TextChunk.js';

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
    <Hero>
      <TextChunk html={textChunk} />
    </Hero>
  );
};
