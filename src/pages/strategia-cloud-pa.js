import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { Hero } from '../components/hero/Hero.js';
import { List } from '../components/List.js';
import { Paragraph } from '../components/Paragraph.js';
import { ResourcesWithList } from '../components/resource/ResourcesWithList.js';
import { HeroTitle } from '../components/hero/HeroTitle.js';
import { HeroBody } from '../components/hero/HeroBody.js';
import { Timeline } from '../components/Timeline.js';

const StrategyPage = () => {
  const {
    strategyYaml: {
      heroTitle,
      heroBody,
      timelineTitle,
      resourceTitle,
      firstParagraph,
      secondParagraph,
      thirdParagraph,
      forthParagraph,
      fifthParagraph,
      sixthParagraph,
      seventhParagraph,
    },
    allStrategyResourcesYaml: { nodes: resources },
    allStrategyTimelineYaml: { nodes: timelineData },
  } = useStaticQuery(graphql`
    {
      strategyYaml {
        heroBody
        heroTitle
        timelineTitle
        resourceTitle
        firstParagraph {
          text
          list {
            html
          }
        }
        secondParagraph {
          text
          title
        }
        thirdParagraph {
          footerText
          list {
            html
          }
          text
          title
        }
        forthParagraph {
          text
          title
        }
        fifthParagraph {
          text
          title
        }
        sixthParagraph {
          list {
            html
          }
          text
          title
        }
        seventhParagraph {
          text
          title
        }
      }
      allStrategyResourcesYaml {
        nodes {
          id
          title
          references {
            action
            ariaLabel
            description
            icon
            link
            title
          }
        }
      }
      allStrategyTimelineYaml {
        nodes {
          body
          date
          id
          title
        }
      }
    }
  `);

  return (
    <>
      <h1 className="sr-only">Strategia cloud</h1>
      <Hero>
        <div className="row align-items-center">
          <div className="offset-lg-1 col-lg-6 mt-4 mt-lg-0">
            <div className="text-center text-lg-left">
              <HeroTitle title={heroTitle} className="text-info" Tag="h2" />
              <HeroBody>{heroBody}</HeroBody>
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
          <div>{secondParagraph.text}</div>
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
        <Paragraph>
          <h2 className="h5 font-weight-semibold mb-4">{thirdParagraph.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: thirdParagraph.text }} />
          <List items={thirdParagraph.list} />
          <div dangerouslySetInnerHTML={{ __html: thirdParagraph.footerText }} />
        </Paragraph>
        <Paragraph>
          <h2 className="h5 font-weight-semibold my-4">{forthParagraph.title}</h2>
          <div>{forthParagraph.text}</div>
        </Paragraph>
        <Paragraph>
          <h2 className="h5 font-weight-semibold my-4">{fifthParagraph.title}</h2>
          <div>{fifthParagraph.text}</div>
        </Paragraph>
        <Paragraph>
          <h2 className="h5 font-weight-semibold my-4">{sixthParagraph.title}</h2>
          <div>{sixthParagraph.text}</div>
          <List items={sixthParagraph.list} />
        </Paragraph>
        <Paragraph>
          <h2 className="h5 font-weight-semibold my-4">{seventhParagraph.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: seventhParagraph.text }} />
        </Paragraph>
      </Hero>
    </>
  );
};

export default StrategyPage;
