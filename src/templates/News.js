import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import background from '../images/news-title-background.svg';

const useStyle = createUseStyles({
  title: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: 'rgba(142,190,237,.2)',
    minHeight: '35vh',
    backgroundImage: `url(${background})`,
    backgroundPosition: '50%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto',
    '& h1': {
      padding: '40px 0px',
      width: '90%',
    },
    '& h4': {
      padding: '20px 0px',
      width: '90%',
      fontStyle: 'italic',
    },
  },
  '@media (max-width: 1024px)': {
    title: {
      backgroundSize: 'contain',
    },
  },
  author: {
    color: 'var(--primary)',
  },
  date: {
    textTransform: 'uppercase',
    fontSize: '.7rem',
    color: '#17324d',
    fontWeight: 600,
  },
});

const News = ({ data }) => {
  const classes = useStyle();
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <>
      <div className={classes.title}>
        <h1>{frontmatter.title}</h1>
        <h4>{frontmatter.subtitle}</h4>
      </div>
      <div className="container d-flex justify-content-center pb-2">
        <div className="row justify-content-center">
          <div className="col-md-10 mb-5 mt-5">
            <div className={classes.author}>{frontmatter.author}</div>
            <div className={classes.date}>{frontmatter.date}</div>
          </div>
          <div className="col-md-10" dangerouslySetInnerHTML={{ __html: html }} />
          <hr className="col-md-10 mb-5" />
        </div>
      </div>
    </>
  );
};

News.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        date: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
      }),
      html: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMM DD, yyyy")
        path
        title
        author
        subtitle
      }
    }
  }
`;

export default News;
