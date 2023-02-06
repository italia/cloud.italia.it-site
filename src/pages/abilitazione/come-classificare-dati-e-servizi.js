import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import { HeroTitle } from '../../components/hero/HeroTitle.js';
import { Hero } from '../../components/hero/Hero.js';
import { TextChunk } from '../../components/TextChunk.js';
import content from '../../../contents/classificare-dati-e-servizi/classificare_dati_servizi.yml';
import { HeroBody } from '../../components/hero/HeroBody.js';
import { SEO } from '../../components/SEO.js';
import seo from '../../../contents/seo.yml';
import { Breadcrumb } from '../../components/Breadcrumb.js';

const { title, body } = content;
const { title: seoTitle, description: seoDescription } = seo.classificareDatiServizi;

const query = graphql`
  query {
    textChunk1: markdownRemark(
      fields: { slug: { eq: "classificare-dati-e-servizi/come-classificare-dati-e-servizi" } }
    ) {
      html
    }
  }
`;

const Page = () => {
  const {
    textChunk1: { html: textChunk1 },
  } = useStaticQuery(query);

  return (
    <>
      <SEO title={seoTitle} description={seoDescription} socialCard="catalogo.jpg" />
      <Breadcrumb
        currentPage={seoTitle}
        goToVertical="/programma-abilitazione-cloud/"
        verticalTitle="Abilitazione della PA"
      />
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
    </>
  );
};
export default Page;