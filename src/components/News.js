import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';

const NewsList = ({ slug, title }) => (
  <ul>
    <Link to={slug}>{title}</Link>
  </ul>
);

NewsList.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export const News = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        nodes {
          frontmatter {
            title
          }
          fields {
            slug
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
        <NewsList key={news.id} slug={news.fields.slug} title={news.frontmatter.title} />
      ))}
    </div>
  );
};
