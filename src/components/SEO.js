import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import favicon from '../images/favicon.ico';

export const SEO = ({ title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            title
            description
          }
        }
      }
    `
  );

  return (
    <Helmet
      htmlAttributes={{
        lang: 'it',
      }}
      title={title ?? site.siteMetadata.title}
      link={[
        {
          rel: 'icon',
          href: favicon,
        },
      ]}
      meta={[
        { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
        {
          name: 'description',
          content: site.siteMetadata.description,
        },
        {
          property: 'og:title',
          content: title ?? site.siteMetadata.title,
        },
        {
          property: 'og:description',
          content: site.siteMetadata.description,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:creator',
          content: site.siteMetadata.author,
        },
        {
          name: 'twitter:title',
          content: title ?? site.siteMetadata.title,
        },
        {
          name: 'twitter:description',
          content: site.siteMetadata.description,
        },
      ]}
    />
  );
};

SEO.propTypes = {
  title: PropTypes.string,
};
