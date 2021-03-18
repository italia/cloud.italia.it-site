import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { createUseStyles } from 'react-jss';
import { graphql, useStaticQuery } from 'gatsby';
import content from '../../content/enablement-page/index.yml';
import resources from '../../content/enablement-page/resources.yml';
import resourcesManual from '../../content/enablement-page/resources-manual.yml';
import resourcesFramework from '../../content/enablement-page/resources-framework.yml';
import { HeroTitle } from '../components/hero/HeroTitle.js';
import { HeroBody } from '../components/hero/HeroBody.js';
import { Hero } from '../components/hero/Hero.js';
import { ResourcesWithAccordion } from '../components/resource/ResourcesWithAccordion.js';
import { ResourcesWithList } from '../components/resource/ResourcesWithList.js';
import { ResourceTitle } from '../components/resource/ResourceTitle.js';
import { TextChunk } from '../components/TextChunk.js';

const { name, heroTitle, heroBody, resourceTitleBlockOne, resourceTitleBlockTwo } = content;

const useStyles = createUseStyles({
  noBorderBottom: {
    '@global': {
      '.it-right-zone': {
        borderBottom: [['none'], '!important'],
      },
    },
  },
  list: {
    '@global': {
      ul: {
        paddingLeft: '24px',
      },
      li: {
        marginBottom: '13px',
      },
      'li::marker': {
        color: 'var(--primary)',
      },
    },
  },
});
const CloudEnablementPage = () => {
  const classes = useStyles();
  const {
    textChunk: { html: textChunk },
  } = useStaticQuery(graphql`
    query {
      textChunk: markdownRemark(fields: { slug: { eq: "enablement-page/enablement.md" } }) {
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
        <TextChunk html={textChunk} />
      </Hero>

      <Hero bgColor="light">
        <a name="kit" />
        <div className="col-xl-8 col-lg-10 mx-auto">
          <ResourceTitle title={resourceTitleBlockOne} />
          <ResourcesWithList className={`${classes.noBorderBottom} mt-4`} resources={resourcesManual} />
          <ResourcesWithAccordion resources={resources} />
        </div>
        <a name="framework" />
        <div className="col-xl-8 col-lg-10 mx-auto mt-5">
          <ResourceTitle title={resourceTitleBlockTwo} />
          <ResourcesWithList className={`${classes.noBorderBottom} mt-4`} resources={resourcesFramework} />
        </div>
      </Hero>
    </>
  );
};

export default CloudEnablementPage;
