import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import { Hero } from '../components/hero/Hero.js';
import { ResourcesWithList } from '../components/resource/ResourcesWithList.js';
import { HeroTitle } from '../components/hero/HeroTitle.js';
import { HeroBody } from '../components/hero/HeroBody.js';
import { Timeline } from '../components/Timeline.js';
import content from '../../content/strategy_page/index.yml';
import timelineData from '../../content/strategy_page/timeline.yml';
import resources from '../../content/strategy_page/resources.yml';
import { ResourceTitle } from '../components/resource/ResourceTitle.js';
import { TextChunk } from '../components/TextChunk.js';

const { name, heroTitle, heroBody, timelineTitle, resourceTitle } = content;

const StrategyPage = () => {
  const {
    chunk1: { html: chunk1 },
    chunk2: { html: chunk2 },
    chunk3: { html: chunk3 },
  } = useStaticQuery(graphql`
    query {
      chunk1: markdownRemark(frontmatter: { slug: { eq: "strategy-chunk1" } }) {
        html
      }
      chunk2: markdownRemark(frontmatter: { slug: { eq: "strategy-chunk2" } }) {
        html
      }
      chunk3: markdownRemark(frontmatter: { slug: { eq: "strategy-chunk3" } }) {
        html
      }
    }
  `);

  return (
    <>
      <h1 className="sr-only">{name}</h1>
      <Hero>
        <div className="row align-items-center">
          <div className="offset-lg-1 col-lg-6 mt-4 mt-lg-0">
            <div className="text-center text-lg-left">
              <HeroTitle title={heroTitle} className="text-info" Tag="h2" />
              <HeroBody html={heroBody} />
            </div>
          </div>
        </div>
      </Hero>

      <StaticImage
        aspectRatio={1280 / 548}
        src="../images/strategia_hero_cloud_2x.jpg"
        alt=""
        placeholder="blurred"
        formats={['AUTO', 'AVIF', 'WEBP']}
      />

      <Hero>
        <TextChunk html={chunk1} />
      </Hero>

      <Hero bgColor="light">
        <Timeline data={timelineData} title={timelineTitle} />
      </Hero>

      <Hero>
        <TextChunk html={chunk2} />
      </Hero>

      <Hero bgColor="light">
        <div className="col-xl-8 col-lg-10 m-auto">
          <ResourceTitle title={resourceTitle} />
          <ResourcesWithList resources={resources} />
        </div>
      </Hero>

      <Hero>
        <TextChunk html={chunk3} />
      </Hero>
    </>
  );
};

export default StrategyPage;
