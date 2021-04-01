import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import seo from '../../contents/seo.yml';

const { title: seoTitle, description: seoDescription } = seo.homePage;

export const SEO = ({ title, description, twitterImg, ogImg }) => {
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
      rel: 'mask-icon',
      href: '/assets/favicons/safari-pinned-tag.svg',
    },
    {
      rel: 'apple-touch-icon',
      href: '/assets/favicons/apple-touch-icon.png',
    },
  ];

  const twitter = [
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title ?? seoTitle },
    { name: 'twitter:description', content: description ?? seoDescription },
    { name: 'twitter:site', content: '@innovazioneGov' },
    {
      name: 'twitter:image',
      content: twitterImg
        ? `${siteUrl}/social-cards/${twitterImg}`
        : `${siteUrl}/social-cards/cloud-pa-logo-twitter.jpeg`,
    },
  ];

  const facebook = [
    { name: 'og:title', content: title ?? seoTitle },
    { name: 'og:description', content: description ?? seoDescription },
    { name: 'og:type', content: 'website' },
    { name: 'og:locale', content: 'it_IT' },
    {
      name: 'og:image',
      content: ogImg
        ? `${siteUrl}/assets/social-cards/${ogImg}`
        : `${siteUrl}/assets/social-cards/cloud-pa-logo-og.jpeg`,
    },
    { name: 'og:site_name', content: name },
  ];

  const metaDescription = {
    name: 'description',
    content: description ?? seoDescription,
  };

  return (
    <Helmet
      htmlAttributes={{
        lang: 'it',
      }}
      title={title ?? seoTitle}
      link={[...favicons]}
      meta={[
        { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
        metaDescription,
        ...twitter,
        ...facebook,
      ]}
    />
  );
};

SEO.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  ogImg: PropTypes.string,
  twitterImg: PropTypes.string,
};
