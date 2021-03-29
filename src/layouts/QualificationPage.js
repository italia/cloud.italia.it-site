import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { Hero } from '../components/hero/Hero.js';
import { HeroTitle } from '../components/hero/HeroTitle.js';
import { HeroBody } from '../components/hero/HeroBody.js';
import { TextChunk } from '../components/TextChunk.js';
import { ResourceTitle } from '../components/resource/ResourceTitle.js';
import { ResourcesWithList } from '../components/resource/ResourcesWithList.js';
import content from '../../contents/qualification-page/qualification.yml';

const { title, body, resourceTitle, resources } = content;

const query = graphql`
  query {
    textChunk1: markdownRemark(fields: { slug: { eq: "qualification-page/qualification-chunk1.md" } }) {
      html
    }
    textChunk2: markdownRemark(fields: { slug: { eq: "qualification-page/qualification-chunk2.md" } }) {
      html
    }
  }
`;

export const QualificationPage = () => {
  const {
    textChunk1: { html: textChunk1 },
    textChunk2: { html: textChunk2 },
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

      <hr />

      <Hero yPadding={false}>
        <TextChunk html={textChunk1} />
      </Hero>

      <div className="d-flex justify-content-center">
        <StaticImage
          src="../images/qualificazione.png"
          alt=""
          placeholder="blurred"
          height={400}
          width={800}
          formats={['AUTO', 'AVIF', 'WEBP']}
        />
      </div>

      <Hero yPadding={false}>
        <TextChunk html={textChunk2} />
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
