import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import { Hero } from '../components/hero/Hero.js';
import { ResourcesWithList } from '../components/resource/ResourcesWithList.js';
import { HeroTitle } from '../components/hero/HeroTitle.js';
import { HeroBody } from '../components/hero/HeroBody.js';
import { Timeline } from '../components/Timeline.js';
import { ResourceTitle } from '../components/resource/ResourceTitle.js';
import { TextChunk } from '../components/TextChunk.js';
import content from '../../contents/strategy-page/strategy.yml';

const query = graphql`
  query {
    chunk1: markdownRemark(fields: { slug: { eq: "strategy-page/strategy-chunk1.md" } }) {
      html
    }
    chunk2: markdownRemark(fields: { slug: { eq: "strategy-page/strategy-chunk2.md" } }) {
      html
    }
    chunk3: markdownRemark(fields: { slug: { eq: "strategy-page/strategy-chunk3.md" } }) {
      html
    }
  }
`;

const { timeline, timelineTitle, name, body, title, resourceTitle, resources } = content;

const StrategyPage = () => {
  const {
    chunk1: { html: chunk1 },
    chunk2: { html: chunk2 },
    chunk3: { html: chunk3 },
  } = useStaticQuery(query);

  return (
    <>
      <h1 className="sr-only">{name}</h1>
      <Hero>
        <div className="row align-items-center">
          <div className="offset-lg-1 col-lg-6 mt-4 mt-lg-0">
            <div className="text-center text-lg-left">
              <HeroTitle title={title} className="text-info" Tag="h2" />
              <HeroBody html={body} />
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
        <Timeline data={timeline} title={timelineTitle} />
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