import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import font600 from '../fonts/titillium-web-v9-latin-600.woff2';
import fontRegular from '../fonts/titillium-web-v9-latin-regular.woff2';
import font700 from '../fonts/titillium-web-v9-latin-700.woff2';
import font300 from '../fonts/titillium-web-v9-latin-300.woff2';
import font300Italic from '../fonts/titillium-web-v9-latin-300italic.woff2';

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

  const favicons = [
    {
      rel: 'icon',
      href: '/favicons/favicon.ico',
    },
    {
      rel: 'icon',
      sizes: '16x16',
      type: 'image/png',
      href: '/favicons/favicon-16x16.png',
    },
    {
      rel: 'icon',
      sizes: '32x32',
      type: 'image/png',
      href: '/favicons/favicon-32x32.png',
    },
    {
      rel: 'mask-icon',
      href: '/favicons/safari-pinned-tag.svg',
    },
    {
      rel: 'apple-touch-icon',
      href: '/favicons/apple-touch-icon.png',
    },
  ];

  const twitter = [
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:creator', content: site.siteMetadata.author },
    { name: 'twitter:title', content: title ?? site.siteMetadata.title },
    { name: 'twitter:description', content: site.siteMetadata.description },
    { name: 'twitter:site', content: '@https://twitter.com/InnovazioneGov' },
    { name: 'twitter:image', content: 'https://cloud.italia.it/cloud-pa-logo-twitter.jpeg' },
  ];

  const facebook = [
    { name: 'og:url', content: '/' },
    { name: 'og:title', content: title ?? site.siteMetadata.title },
    { name: 'og:description', content: site.siteMetadata.description },
    { name: 'og:type', content: 'website' },
    { name: 'og:image', content: 'http://cloud.italia.it/cloud-pa-logo-og.jpeg' },
    { name: 'og:image:secure_url', content: 'https://cloud.italia.it/cloud-pa-logo-og.jpeg' },
    { name: 'og:image:type', content: 'image/jpeg' },
    { name: 'og:image:width', content: '1200' },
    { name: 'og:image:height', content: '630' },
  ];

  const fonts = [
    {
      rel: 'preload',
      as: 'font',
      href: fontRegular,
      type: 'font/woff2',
      crossOrigin: 'anonymous',
    },
    {
      rel: 'preload',
      as: 'font',
      href: font600,
      type: 'font/woff2',
      crossOrigin: 'anonymous',
    },
    {
      rel: 'preload',
      as: 'font',
      href: font700,
      type: 'font/woff2',
      crossOrigin: 'anonymous',
    },
    {
      rel: 'preload',
      as: 'font',
      href: font300,
      type: 'font/woff2',
      crossOrigin: 'anonymous',
    },
    {
      rel: 'preload',
      as: 'font',
      href: font300Italic,
      type: 'font/woff2',
      crossOrigin: 'anonymous',
    },
  ];

  return (
    <Helmet
      htmlAttributes={{
        lang: 'it',
      }}
      title={title ?? site.siteMetadata.title}
      link={[...favicons]}
      meta={[
        { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
        {
          name: 'description',
          content: site.siteMetadata.description,
        },
        ...twitter,
        ...facebook,
      ]}
    />
  );
};

SEO.propTypes = {
  title: PropTypes.string,
};
