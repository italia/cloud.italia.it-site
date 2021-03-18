import React from 'react';
import { getImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import { Accordion } from 'design-react-kit';
import { HeroCategory } from '../hero/HeroCategory.js';
import { HeroGraphic } from '../hero/HeroGraphic.js';
import { Hero } from '../hero/Hero.js';
import { AccordionEntry } from '../AccordionEntry.js';
import { useAccordion } from '../../hooks/useAccordion.js';
import heroContent from '../../../content/home-page/index.yml';
import benefits from '../../../content/home-page/benefits.yml';

const {
  heroBenefit: { category, title, body },
} = heroContent;

export const Benefit = () => {
  const { vantaggi_cloud } = useStaticQuery(graphql`
    query {
      vantaggi_cloud: file(relativePath: { eq: "vantaggi_cloud_1x.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, AVIF, WEBP])
        }
      }
    }
  `);
  const [activeAccordion, openAccordion] = useAccordion();
  return (
    <Hero bgColor="light">
      <div className="row align-items-center">
        <HeroGraphic
          alt=""
          image={getImage(vantaggi_cloud)}
          className="col-lg-5 d-flex align-items-center justify-content-center"
        />
        <div className="col-lg-7 mt-4 mt-lg-0">
          <div className="col-xl-9 text-center text-lg-left">
            <HeroCategory title={category} />
            <h3 className="h3">{title}</h3>
            <div className="mt-3 mb-5">{body}</div>
          </div>
          <Accordion className="bg-white shadow-lg">
            {benefits.map((benefit, index) => (
              <AccordionEntry
                key={benefit.title}
                active={activeAccordion === index + 1}
                onToggle={() => openAccordion(index + 1)}
                header={() => benefit.title}
                body={() => benefit.body}
              />
            ))}
          </Accordion>
        </div>
      </div>
    </Hero>
  );
};
