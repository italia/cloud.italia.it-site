import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import seo from '../../contents/seo.yml';

const { title: seoTitle, description: seoDescription } = seo.homePage;

export const SEO = ({ title, description, socialCard }) => {
  const {
    site: {
      siteMetadata: { name, siteUrl },
    },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            name
            siteUrl
          }
        }
      }
    `
  );
  const favicons = [
    {
      rel: 'icon',
      href: '/assets/favicons/favicon.ico',
    },
    {
      rel: 'icon',
      sizes: '16x16',
      type: 'image/png',
      href: '/assets/favicons/favicon-16x16.png',
    },
    {
      rel: 'icon',
      sizes: '32x32',
      type: 'image/png',
      href: '/assets/favicons/favicon-32x32.png',
    },
    {
      rel: 'apple-touch-icon',
      href: '/assets/favicons/apple-touch-icon.png',
    },
  ];

  const socialCardContent = socialCard
    ? `${siteUrl}/assets/social-cards/${socialCard}`
    : `${siteUrl}/assets/social-cards/home.png`;

  const twitter = [
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title ?? seoTitle },
    { name: 'twitter:description', content: description ?? seoDescription },
    { name: 'twitter:site', content: '@innovazioneGov' },
    { name: 'twitter:image', content: socialCardContent },
  ];

  const facebook = [
    { name: 'og:title', content: title ?? seoTitle },
    { name: 'og:description', content: description ?? seoDescription },
    { name: 'og:type', content: 'website' },
    { name: 'og:locale', content: 'it_IT' },
    { name: 'og:image', content: socialCardContent },
    { name: 'og:site_name', content: name },
  ];

  return (
    <Helmet
      htmlAttributes={{
        lang: 'it',
      }}
      title={title ?? seoTitle}
      link={[...favicons]}
      meta={[
        { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
        { name: 'description', content: description ?? seoDescription },
        ...twitter,
        ...facebook,
      ]}
    />
  );
};

SEO.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  socialCard: PropTypes.string,
};
