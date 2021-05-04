import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { DateTime } from 'luxon';
import { TextChunk } from '../components/TextChunk.js';
import { HeroTitle } from '../components/hero/HeroTitle.js';
import { HeroBody } from '../components/hero/HeroBody.js';
import { Hero } from '../components/hero/Hero.js';
import { Breadcrumb } from '../components/Breadcrumb.js';
import labels from '../../contents/labels.yml';
import { SEO } from '../components/SEO.js';

const NewsTemplate = ({ data }) => {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html, timeToRead } = markdownRemark;
  const date = DateTime.fromISO(frontmatter.date);
  return (
    <>
      <SEO title={`${frontmatter.title} - Cloud Italia`} description={frontmatter.subtitle} />
      {/* Quick fix to render a multiple levels breadcrumb without the navigable level 'notizie' */}
      <Breadcrumb currentPage={`notizie / ${frontmatter.title}`} />
      <Hero yPaddingXLScreen={false}>
        <div className="row">
          <div className="offset-lg-1 col-lg-6 mt-4 mt-lg-0">
            <div className="">
              <HeroTitle title={frontmatter.title} className="text-info" Tag="h1" />
              <HeroBody html={frontmatter.subtitle} />
              <div className="row align-items-center mt-4">
                <div className="col-lg-6">
                  <div className="h6 text-uppercase">{labels.date}</div>
                  <div>{date.toFormat('LLL dd, yyyy')}</div>
                </div>
                <div className="col-lg-6 mt-4 mt-lg-0">
                  <div className="h6 text-uppercase">{labels.timeToRead}</div>
                  <div>
                    {timeToRead} {labels.minutes}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="offset-lg-1 col-lg-4 mt-4 mt-lg-0">
            <div className="h6 text-uppercase">{labels.topics}</div>
            {frontmatter.tags.map((tag) => (
              <div className="d-inline-block d-lg-block mr-4 mt-lg-2" key={tag}>
                {tag}
              </div>
            ))}
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

export default NewsTemplate;

NewsTemplate.propTypes = {
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
