import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';

const NewsList = ({ frontmatter }) => (
  <ul>
    <Link to={frontmatter.path}>{frontmatter.title}</Link>
  </ul>
);

NewsList.propTypes = {
  frontmatter: PropTypes.shape({
    path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
};

export const News = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        nodes {
          frontmatter {
            path
            title
          }
          id
        }
      }
    }
  `);

  const allNews = data.allMarkdownRemark.nodes;
  return (
    <div className="container mt-5 mb-5">
      <ul>Notizie scritte in markdown</ul>
      {allNews.map((news) => (
        <NewsList key={news.id} frontmatter={news.frontmatter} />
      ))}
    </div>
  );
};
