import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import { createUseStyles } from 'react-jss';
import { Hero } from '../components/hero/Hero.js';
import { ResourcesWithList } from '../components/resource/ResourcesWithList.js';
import { HeroTitle } from '../components/hero/HeroTitle.js';
import { HeroBody } from '../components/hero/HeroBody.js';
import { ResourceTitle } from '../components/resource/ResourceTitle.js';
import { TextChunk } from '../components/TextChunk.js';
import content from '../../contents/strategy-page/strategy.yml';
import { SEO } from '../components/SEO.js';
import seo from '../../contents/seo.yml';

const query = graphql`
  query {
    chunk1: markdownRemark(fields: { slug: { eq: "strategy-page/strategy-chunk1.md" } }) {
      html
    }
    chunk2: markdownRemark(fields: { slug: { eq: "strategy-page/strategy-chunk2.md" } }) {
      html
    }
  }
`;

const { body, title, altImg, resourceTitle, resources } = content;
const { title: seoTitle, description: seoDescription } = seo.strategyPage;

const useStyles = createUseStyles({
  heroImage: {
    maxHeight: '500px',
  },
});

export const StrategyPage = () => {
  const classes = useStyles();
  const {
    chunk1: { html: chunk1 },
    chunk2: { html: chunk2 },
  } = useStaticQuery(query);

  return (
    <>
      <SEO title={seoTitle} description={seoDescription} socialCard="strategia.jpg" />
      <Hero>
        <div className="row align-items-center">
          <div className="offset-lg-1 col-lg-6 mt-4 mt-lg-0">
            <div className="text-center text-lg-left">
              <HeroTitle title={title} className="text-info" Tag="h1" />
              <HeroBody html={body} />
            </div>
          </div>
        </div>
      </Hero>

      <StaticImage
        src="../images/strategia_hero_cloud_2x.jpg"
        className={classes.heroImage}
        alt={altImg}
        layout={'fullWidth'}
        placeholder="blurred"
        formats={['AUTO', 'AVIF', 'WEBP']}
      />

      <Hero>
        <TextChunk html={chunk1} />
      </Hero>

      {/* The Timeline is temporary removed due to lack of useful contents. 
        Because it could be reintroduced in the near future I have left it here commented.
        Please remove if it won't be used after a while.
        Time of writing: 2021-04-09 */}
      {/* <Hero bgColor="light"> */}
      {/*  <Timeline data={timeline} title={timelineTitle} /> */}
      {/* </Hero> */}

      <Hero bgColor="light" xPadding={false}>
        <div className="col-xl-8 col-lg-10 m-auto">
          <ResourceTitle title={resourceTitle} />
          <ResourcesWithList resources={resources} />
        </div>
      </Hero>

      <Hero>
        <TextChunk html={chunk2} />
      </Hero>
    </>
  );
};
