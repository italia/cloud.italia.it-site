import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { createUseStyles } from 'react-jss';
import { graphql, useStaticQuery } from 'gatsby';
import { HeroTitle } from '../components/hero/HeroTitle.js';
import { HeroBody } from '../components/hero/HeroBody.js';
import { Hero } from '../components/hero/Hero.js';
import { ResourcesWithAccordion } from '../components/resource/ResourcesWithAccordion.js';
import { ResourcesWithList } from '../components/resource/ResourcesWithList.js';
import { ResourceTitle } from '../components/resource/ResourceTitle.js';
import { TextChunk } from '../components/TextChunk.js';
import content from '../../contents/enablement-page/enablement.yml';
import { SEO } from '../components/SEO.js';
import seo from '../../contents/seo.yml';

const useStyles = createUseStyles({
  noBorderBottom: {
    '@global': {
      '.it-right-zone': {
        borderBottom: [['none'], '!important'],
      },
    },
  },
});

const {
  title,
  body,
  resourceTitleBlockOne,
  resourceTitleBlockTwo,
  resources,
  resourcesManual,
  resourcesFramework,
} = content;

const { title: seoTitle, description: seoDescription } = seo.enablementPage;

const query = graphql`
  query {
    textChunk1: markdownRemark(fields: { slug: { eq: "enablement-page/enablement-chunk1.md" } }) {
      html
    }
    textChunk2: markdownRemark(fields: { slug: { eq: "enablement-page/enablement-chunk2.md" } }) {
      html
    }
  }
`;

export const EnablementPage = () => {
  const classes = useStyles();
  const {
    textChunk1: { html: textChunk1 },
    textChunk2: { html: textChunk2 },
  } = useStaticQuery(query);

  return (
    <>
      <SEO title={seoTitle} description={seoDescription} socialCard="abilitazione.jpg" />
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

      <hr />

      <Hero yPaddingXLScreen={false}>
        <TextChunk html={textChunk1} />
      </Hero>

      <div className="d-flex justify-content-center">
        <StaticImage
          src="../images/abilitazione.jpg"
          alt=""
          placeholder="blurred"
          height={400}
          width={800}
          formats={['AUTO', 'AVIF', 'WEBP']}
        />
      </div>

      <Hero yPaddingXLScreen={false}>
        <TextChunk html={textChunk2} />
      </Hero>

      <Hero bgColor="light" xPadding={false}>
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
