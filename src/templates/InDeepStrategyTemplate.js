import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { TextChunk } from '../components/TextChunk.js';
import { HeroTitle } from '../components/hero/HeroTitle.js';
import { HeroBody } from '../components/hero/HeroBody.js';
import { Hero } from '../components/hero/Hero.js';
import { Breadcrumb } from '../components/Breadcrumb.js';
import { SEO } from '../components/SEO.js';

const InDeepStrategyTemplate = ({ data }) => {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  return (
    <>
      <SEO title={`${frontmatter.title} - Cloud Italia`} description={frontmatter.subtitle} />
      <Breadcrumb currentPage={`${frontmatter.title}`} goToVertical="/strategia-cloud-pa/" verticalTitle="Strategia" />
      <Hero yPaddingXLScreen={false}>
        <div className="row">
          <div className="offset-lg-1 col-lg-6 mt-4 mt-lg-0">
            <div className="">
              <HeroTitle title={frontmatter.title} className="text-info" Tag="h1" />
              <HeroBody html={frontmatter.subtitle} />
            </div>
          </div>
          <div className="offset-lg-1 col-lg-4 mt-4 mt-lg-0">
            {/* <div className="h6 text-uppercase">{labels.topics}</div>
            {frontmatter.tags.map((tag) => (
              <div className="d-inline-block d-lg-block mr-4 mt-lg-2" key={tag}>
                {tag}
              </div>
            ))} */}
          </div>
        </div>
      </Hero>

      <hr />

      <Hero yPaddingXLScreen={false}>
        <TextChunk html={html} />
      </Hero>
    </>
  );
};

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date
        title
        subtitle
        tags
      }
      timeToRead
    }
  }
`;

export default InDeepStrategyTemplate;

InDeepStrategyTemplate.propTypes = {
  data: PropTypes.exact({
    markdownRemark: PropTypes.exact({
      frontmatter: PropTypes.exact({
        date: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string),
      }),
      html: PropTypes.string.isRequired,
      timeToRead: PropTypes.number.isRequired,
    }),
  }).isRequired,
};
