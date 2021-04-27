import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { DateTime } from 'luxon';
import { createUseStyles } from 'react-jss';
import { TextChunk } from '../components/TextChunk.js';
import { HeroTitle } from '../components/hero/HeroTitle.js';
import { HeroBody } from '../components/hero/HeroBody.js';
import { Hero } from '../components/hero/Hero.js';

const useStyle = createUseStyles({
  author: {
    color: 'var(--primary)',
  },
  date: {
    textTransform: 'uppercase',
    fontSize: '.7rem',
    color: '#17324d',
    fontWeight: 900,
  },
});

const NewsTemplate = ({ data }) => {
  const classes = useStyle();
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  const date = DateTime.fromISO(frontmatter.date);
  return (
    <>
      <Hero>
        <div className="row align-items-center">
          <div className="offset-lg-1 col-lg-6 mt-4 mt-lg-0">
            <div className="text-center text-lg-left">
              <HeroTitle title={frontmatter.title} className="text-info" Tag="h1" />
              <HeroBody html={frontmatter.subtitle} />
            </div>
          </div>
        </div>
      </Hero>
      <div className="container d-flex justify-content-center pb-2">
        <div className="row justify-content-center">
          <div className="col-md-10 mb-5 mt-5">
            <div className={classes.author}>{frontmatter.author}</div>
            <div className={classes.date}>{date.toFormat('LLL dd, yyyy')}</div>
          </div>
          <TextChunk html={html} />
        </div>
      </div>
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
        author
        subtitle
      }
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
        author: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
      }),
      html: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
