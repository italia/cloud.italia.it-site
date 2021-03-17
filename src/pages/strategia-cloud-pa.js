import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import classNames from 'classnames';
import { Hero } from '../components/hero/Hero.js';
import { List } from '../components/List.js';
import { Paragraph } from '../components/Paragraph.js';
import { ResourcesWithList } from '../components/resource/ResourcesWithList.js';
import { HeroTitle } from '../components/hero/HeroTitle.js';
import { HeroBody } from '../components/hero/HeroBody.js';
import { Timeline } from '../components/Timeline.js';
import content from '../../content/strategy_page/index.yml';
import timelineData from '../../content/strategy_page/timeline.yml';
import resources from '../../content/strategy_page/resources.yml';

const {
  name,
  heroTitle,
  heroBody,
  timelineTitle,
  resourceTitle,
  firstParagraph,
  secondParagraph,
  thirdParagraph,
} = content;

const StrategyPage = () => (
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
      <Paragraph>
        <div dangerouslySetInnerHTML={{ __html: firstParagraph.text }} />
        <List items={firstParagraph.list} />
      </Paragraph>
    </Hero>

    <Hero bgColor="light">
      <Timeline data={timelineData} title={timelineTitle} />
    </Hero>

    <Hero>
      <Paragraph>
        <h2 className="h5 font-weight-semibold mb-4">{secondParagraph.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: secondParagraph.text }} />
      </Paragraph>
    </Hero>

    <Hero bgColor="light">
      <div className="col-xl-8 col-lg-10 m-auto">
        <div className="mx-4">
          <h2 className="h5 font-weight-semibold text-info-title">{resourceTitle}</h2>
        </div>
        <ResourcesWithList resources={resources} />
      </div>
    </Hero>

    <Hero>
      {thirdParagraph.map((paragraph, index) => {
        const classes = classNames('h5 font-weight-semibold mb-4', {
          'mt-4': index > 0,
        });
        return (
          <Paragraph key={paragraph.title}>
            <h2 className={classes}>{paragraph.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: paragraph.text }} />
            {paragraph.list && <List items={paragraph.list} />}
            {paragraph.footer && <div dangerouslySetInnerHTML={{ __html: paragraph.footer }} />}
          </Paragraph>
        );
      })}
    </Hero>
  </>
);

export default StrategyPage;
