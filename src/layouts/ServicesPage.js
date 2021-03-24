import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { Hero } from '../components/hero/Hero.js';
import { HeroTitle } from '../components/hero/HeroTitle.js';
import { HeroBody } from '../components/hero/HeroBody.js';
import { TextChunk } from '../components/TextChunk.js';
import { ResourceTitle } from '../components/resource/ResourceTitle.js';
import { ResourcesWithList } from '../components/resource/ResourcesWithList.js';
import content from '../../contents/services-page/services.yml';

const { title, body, resourceTitle, resources } = content;

const query = graphql`
  query {
    textChunk: markdownRemark(fields: { slug: { eq: "services-page/services.md" } }) {
      html
    }
  }
`;

export const ServicesPage = () => {
  const {
    textChunk: { html: textChunk },
  } = useStaticQuery(query);

  return (
    <>
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
        aspectRatio={1280 / 548}
        src="../images/strategia_hero_cloud_2x.jpg"
        alt=""
        placeholder="blurred"
        formats={['AUTO', 'AVIF', 'WEBP']}
      />

      <Hero>
        <TextChunk html={textChunk} />
      </Hero>

      <Hero bgColor="light" xPadding={false}>
        <div className="col-xl-8 col-lg-10 mx-auto">
          <ResourceTitle title={resourceTitle} />
          <ResourcesWithList resources={resources} />
        </div>
      </Hero>
    </>
  );
};
