import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import seo from '../../contents/seo.yml';

const { title: seoTitle, description: seoDescription } = seo.homePage;

export const SEO = ({ title, description }) => {
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
    { name: 'twitter:creator', content: seo.author },
    { name: 'twitter:title', content: title ?? seoTitle },
    { name: 'twitter:description', content: description ?? seoDescription },
    { name: 'twitter:site', content: '@https://twitter.com/InnovazioneGov' },
    { name: 'twitter:image', content: 'https://cloud.italia.it/cloud-pa-logo-twitter.jpeg' },
  ];

  const facebook = [
    { name: 'og:url', content: '/' },
    { name: 'og:title', content: title ?? seoTitle },
    { name: 'og:description', content: description ?? seoDescription },
    { name: 'og:type', content: 'website' },
    { name: 'og:image', content: 'http://cloud.italia.it/cloud-pa-logo-og.jpeg' },
    { name: 'og:image:secure_url', content: 'https://cloud.italia.it/cloud-pa-logo-og.jpeg' },
    { name: 'og:image:type', content: 'image/jpeg' },
    { name: 'og:image:width', content: '1200' },
    { name: 'og:image:height', content: '630' },
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
};
